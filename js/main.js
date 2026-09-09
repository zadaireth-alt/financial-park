/* =============================================================
   FINANCIAL PARK — motor del sitio
   Lee contenido.js y arma la página. No hace falta tocar esto
   para cambiar textos: todo se edita en contenido.js
   ============================================================= */
(function () {
  'use strict';

  var C = window.CONTENIDO || CONTENIDO;
  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var slot = function (n) { return document.querySelector('[data-slot="' + n + '"]'); };

  /* ---------- Iconos de amenidades (SVG en línea) ---------- */
  var ICONOS = {
    restaurante: '<path d="M7 2v9M4 2v6a3 3 0 0 0 3 3M10 2v6a3 3 0 0 1-3 3M7 11v11M17 2c-1.7 1.5-2.5 3.6-2.5 6.5S15.3 13 17 13.5V22"/>',
    cafe:        '<path d="M17 8h1a3 3 0 0 1 0 6h-1M3 8h14v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8ZM6 2v2M10 2v2M14 2v2"/>',
    copa:        '<path d="M8 22h8M12 15v7M5 3h14l-1.5 6A6 6 0 0 1 12 15a6 6 0 0 1-5.5-6L5 3Z"/>',
    auto:        '<path d="M5 17h14M6.5 17v2M17.5 17v2M4 13l1.6-4.6A2 2 0 0 1 7.5 7h9a2 2 0 0 1 1.9 1.4L20 13v4H4v-4ZM7 13h.01M17 13h.01"/>',
    escudo:      '<path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"/>',
    rayo:        '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
    ascensor:    '<path d="M5 2h14v20H5V2ZM12 2v20M9 7l-1.5 2h3L9 7ZM15 17l1.5-2h-3l1.5 2Z"/>',
    aire:        '<path d="M3 6h18M3 12h18M3 18h18M7 3v3M12 3v3M17 3v3"/>',
    wifi:        '<path d="M2 8.8a16 16 0 0 1 20 0M5 12.5a11 11 0 0 1 14 0M8.5 16a6 6 0 0 1 7 0M12 20h.01"/>',
    personas:    '<path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 20v-2a4 4 0 0 0-3-3.9M16 2.1a4 4 0 0 1 0 7.8"/>',
    edificio:    '<path d="M4 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M16 8h2a2 2 0 0 1 2 2v12M8 6h2M8 10h2M8 14h2M2 22h20"/>'
  };
  function icono(nombre) {
    var d = ICONOS[nombre] || ICONOS.edificio;
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
  }

  function txt(nombre, valor) { var el = slot(nombre); if (el) el.textContent = valor; }
  function html(nombre, valor) { var el = slot(nombre); if (el) el.innerHTML = valor; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  }); }

  /* =========================================================
     HERO · MARCA · CONTACTO
     ========================================================= */
  function pintarBase() {
    txt('hero-eyebrow', C.hero.eyebrow);
    txt('hero-titulo', C.hero.titulo);
    txt('hero-bajada', C.hero.bajada);

    var c1 = slot('hero-cta1'), c2 = slot('hero-cta2');
    if (c1) { c1.textContent = C.hero.ctaPrimario.texto; c1.href = C.hero.ctaPrimario.href; }
    if (c2) { c2.textContent = C.hero.ctaSecundario.texto; c2.href = C.hero.ctaSecundario.href; }

    var hi = slot('hero-img'), hm = slot('hero-img-movil');
    if (hi) hi.src = C.hero.imagen;
    if (hm) hm.srcset = C.hero.imagenMovil || C.hero.imagen;

    /* Video de fondo del hero (si hay uno y el navegador no pide "menos movimiento") */
    var hv = slot('hero-video');
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hv) {
      if (C.hero.video && !reduceMotion) {
        var source = document.createElement('source');
        source.src = C.hero.video;
        source.type = 'video/mp4';
        hv.appendChild(source);
        hv.style.display = '';
        /* El video arranca en opacity:0 (ver .hero-video en styles.css) y
           se muestra recién cuando el navegador ya tiene su primer fotograma
           real ("loadeddata"). Antes de eso se ve la imagen de respaldo de
           abajo, que es ese mismo primer fotograma — así el cambio de
           imagen a video queda invisible, sin saltos ni parpadeos.
           IMPORTANTE: no quitar este bloque ni las reglas opacity/is-ready
           de styles.css — sin ellos el video aparece de golpe. */
        hv.addEventListener('loadeddata', function () {
          hv.classList.add('is-ready');
        }, { once: true });
        hv.load();
      } else {
        hv.style.display = 'none';
      }
    }

    txt('footer-bajada', C.marca.bajada);

    /* Contacto */
    var tel = slot('telefono');
    if (tel) { tel.textContent = C.contacto.telefono; tel.href = 'tel:' + C.contacto.telefonoLink; }
    var telNav = slot('telefono-nav');
    if (telNav) { telNav.textContent = C.contacto.telefono; telNav.href = 'tel:' + C.contacto.telefonoLink; }

    var mail = slot('correo');
    if (mail) { mail.textContent = C.contacto.correo; mail.href = 'mailto:' + C.contacto.correo; }

    var waUrl = 'https://wa.me/' + C.contacto.whatsapp + '?text=' +
                encodeURIComponent('Hola, me interesa alquilar una oficina en Financial Park.');
    var wa = slot('whatsapp'); if (wa) wa.href = waUrl;
    var waf = slot('whatsapp-float'); if (waf) waf.href = waUrl;

    txt('horario', C.contacto.horario);
    txt('direccion', C.contacto.direccion);

    /* Mapa */
    var mapa = slot('mapa');
    if (mapa) {
      mapa.src = 'https://www.google.com/maps?q=' + C.contacto.mapa.lat + ',' + C.contacto.mapa.lng +
                 '&z=16&output=embed';
    }

    /* Bandas a sangre e imagen de llave en mano */
    var B = C.bandas || {};
    var fach = slot('fachada-img');
    if (fach) fach.src = B.fachada || C.hero.imagen;
    var band = slot('band-img');
    if (band) band.src = B.cita || C.hero.imagenMovil || C.hero.imagen;
    var lob = slot('lobby-img');
    if (lob) lob.src = B.lobby || C.llaveEnMano.imagen;
    var li = slot('llave-img'); if (li) li.src = C.llaveEnMano.imagen;
  }

  /* ---------- Barra de datos clave ---------- */
  function pintarDatos() {
    var cont = slot('datos-clave'); if (!cont) return;
    cont.innerHTML = C.datosClave.map(function (d) {
      return '<div class="databar-item">' +
               '<p class="databar-val">' + d.valor + '</p>' +
               '<p class="databar-lab">' + d.etiqueta + '</p>' +
             '</div>';
    }).join('');
  }

  /* =========================================================
     OFICINAS
     ========================================================= */
  var filtroActual = 'todas';
  var rangoActual = null;

  function fotosDe(o) {
    if (o.fotos && o.fotos.length) return o.fotos;
    return o.foto ? [o.foto] : [];
  }

  /* Ficha cerrada: solo lo esencial (metraje y piso). El resto se ve al hacer click. */
  function fichaHTML(o, i) {
    var fotos = fotosDe(o);
    var media = fotos.length
      ? '<img src="' + fotos[0] + '" alt="Oficina ' + esc(o.codigo) + '" loading="lazy">'
      : '<div class="ph"><span class="ph-code">' + esc(o.codigo) + '</span>' +
        '<span class="ph-label">Foto pendiente</span></div>';

    var pisoTxt = (o.piso || o.piso === 0) ? 'Piso ' + o.piso : 'Piso por confirmar';

    return '<article class="listing" data-estado="' + o.estado + '" data-tipo="' + o.tipo + '" data-m2="' + o.m2 + '" data-idx="' + i + '" tabindex="0" role="button" aria-label="Ver detalles de la oficina ' + esc(o.codigo) + '">' +
             '<div class="listing-media">' +
               '<span class="badge ' + o.estado + '">' + o.estado + '</span>' +
               (o.real ? '<span class="badge-real">Real</span>' : '') +
               media +
             '</div>' +
             '<div class="listing-body">' +
               '<div class="listing-top">' +
                 '<p class="listing-m2">' + o.m2 + '<span>m²</span></p>' +
               '</div>' +
               '<p class="listing-sub listing-piso">' + pisoTxt + '</p>' +
               '<span class="listing-cta">Ver detalles <span aria-hidden="true">→</span></span>' +
             '</div>' +
           '</article>';
  }

  function pintarOficinas() {
    var cont = slot('oficinas'); if (!cont) return;

    listaActual = C.oficinas.filter(function (o) {
      var okFiltro = filtroActual === 'todas' ||
                     (filtroActual === 'disponible' && o.estado === 'disponible') ||
                     o.tipo === filtroActual;
      var okRango = true;
      if (rangoActual) {
        var p = rangoActual.split('-');
        okRango = o.m2 >= +p[0] && o.m2 <= +p[1];
      }
      return okFiltro && okRango;
    });

    cont.innerHTML = listaActual.length
      ? listaActual.map(fichaHTML).join('')
      : '<p class="empty">No hay oficinas que coincidan con ese filtro. <a href="#contacto">Escríbanos</a> y le buscamos una opción.</p>';

    var cuenta = $('#filtroCount');
    if (cuenta) {
      cuenta.textContent = listaActual.length + (listaActual.length === 1 ? ' oficina' : ' oficinas') +
                           (rangoActual ? ' · ' + rangoActual.replace('-', ' – ') + ' m²' : '');
    }

    $$('.listing', cont).forEach(function (art) {
      var abrir = function () { abrirModal(listaActual[+art.getAttribute('data-idx')]); };
      art.addEventListener('click', abrir);
      art.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(); }
      });
    });

    observar(cont);
  }
  var listaActual = [];

  function pintarSelectOficinas() {
    var sel = slot('select-oficinas'); if (!sel) return;
    C.oficinas.forEach(function (o) {
      if (o.estado === 'alquilada') return;
      var op = document.createElement('option');
      op.value = o.codigo + ' · ' + o.m2 + ' m²';
      op.textContent = o.codigo + ' · ' + o.m2 + ' m²' + (o.piso || o.piso === 0 ? ' · Piso ' + o.piso : '');
      sel.appendChild(op);
    });
  }

  /* ---------- Preseleccionar oficina en el formulario y llevar el foco ---------- */
  function preseleccionar(codigo) {
    var sel = $('#interes');
    if (!sel) return;
    Array.prototype.forEach.call(sel.options, function (op, i) {
      if (op.value.indexOf(codigo) === 0) sel.selectedIndex = i;
    });
  }

  /* =========================================================
     MODAL DE OFICINA (detalle + carrusel + WhatsApp por oficina)
     ========================================================= */
  var modal, modalBody, carouselTrack, carouselWrap;

  function crearModal() {
    modal = document.createElement('div');
    modal.className = 'oficina-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML =
      '<div class="oficina-modal-backdrop" data-close></div>' +
      '<div class="oficina-modal-panel" role="dialog" aria-modal="true" aria-label="Detalle de oficina">' +
        '<button type="button" class="oficina-modal-close" data-close aria-label="Cerrar">✕</button>' +
        '<div class="oficina-carousel">' +
          '<button type="button" class="carousel-arrow carousel-prev" aria-label="Foto anterior">‹</button>' +
          '<div class="carousel-track"></div>' +
          '<button type="button" class="carousel-arrow carousel-next" aria-label="Foto siguiente">›</button>' +
        '</div>' +
        '<div class="oficina-modal-body"></div>' +
      '</div>';
    document.body.appendChild(modal);
    modalBody = $('.oficina-modal-body', modal);
    carouselTrack = $('.carousel-track', modal);
    carouselWrap = $('.oficina-carousel', modal);

    $$('[data-close]', modal).forEach(function (el) { el.addEventListener('click', cerrarModal); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrarModal(); });
    $('.carousel-prev', modal).addEventListener('click', function () { desplazarCarrusel(-1); });
    $('.carousel-next', modal).addEventListener('click', function () { desplazarCarrusel(1); });
  }

  function desplazarCarrusel(dir) {
    if (!carouselTrack) return;
    var img = carouselTrack.querySelector('img');
    var ancho = img ? img.getBoundingClientRect().width + 10 : carouselTrack.clientWidth;
    carouselTrack.scrollBy({ left: dir * ancho, behavior: 'smooth' });
  }

  function abrirModal(o) {
    if (!modal) crearModal();
    var fotos = fotosDe(o);

    carouselTrack.innerHTML = fotos.length
      ? fotos.map(function (f) { return '<img src="' + f + '" alt="Foto de la oficina ' + esc(o.codigo) + '">'; }).join('')
      : '<div class="ph carousel-ph"><span class="ph-code">' + esc(o.codigo) + '</span><span class="ph-label">Foto pendiente</span></div>';
    carouselWrap.classList.toggle('has-multi', fotos.length > 1);
    carouselTrack.scrollTo({ left: 0 });

    var specs = [
      ['Área', o.m2 + ' m²'],
      ['Piso', (o.piso || o.piso === 0) ? o.piso : 'Por confirmar'],
      ['Altura de techo', o.altura || 'Por confirmar'],
      ['Entrega', o.tipo || 'Por confirmar']
    ];
    if (o.torre) specs.push(['Torre', o.torre]);
    if (o.vista) specs.push(['Vista', o.vista]);

    var tags = (o.caracteristicas || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');

    var mensajeWA = 'Hola, quiero más información sobre la oficina ' + o.codigo +
      ' (' + o.m2 + ' m²' + ((o.piso || o.piso === 0) ? ', piso ' + o.piso : '') + ') de Financial Park.';
    var waUrl = 'https://wa.me/' + C.contacto.whatsapp + '?text=' + encodeURIComponent(mensajeWA);

    modalBody.innerHTML =
      '<div class="modal-head">' +
        '<span class="badge ' + o.estado + '">' + o.estado + '</span>' +
        (o.real ? '<span class="badge-real">Oficina real</span>' : '') +
        '<p class="listing-title">' + esc(o.codigo) + (o.torre ? ' · ' + esc(o.torre) : '') + '</p>' +
      '</div>' +
      '<dl class="listing-specs">' +
        specs.map(function (s) {
          return '<div class="spec"><dt>' + s[0] + '</dt><dd>' + esc(s[1]) + '</dd></div>';
        }).join('') +
      '</dl>' +
      (o.descripcion ? '<p class="listing-text">' + esc(o.descripcion) + '</p>' : '') +
      (tags ? '<ul class="tags">' + tags + '</ul>' : '') +
      '<div class="modal-ctas">' +
        '<a class="btn btn-primary listing-cta-btn" href="#contacto" data-oficina="' + esc(o.codigo) + '">Solicitar información</a>' +
        '<a class="btn btn-whatsapp" href="' + waUrl + '" target="_blank" rel="noopener">Preguntar por esta oficina</a>' +
      '</div>';

    $('.listing-cta-btn', modalBody).addEventListener('click', function () {
      preseleccionar(o.codigo);
      cerrarModal();
    });

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function cerrarModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  /* ---------- Llave en mano ---------- */
  function pintarLlave() {
    var L = C.llaveEnMano;
    txt('llave-eyebrow', L.eyebrow);
    txt('llave-titulo', L.titulo);
    txt('llave-texto', L.texto);
    html('llave-puntos', L.puntos.map(function (p) { return '<li>' + p + '</li>'; }).join(''));
  }

  /* ---------- Amenidades ---------- */
  function pintarAmenidades() {
    var cont = slot('amenidades'); if (!cont) return;
    cont.innerHTML = C.amenidades.filter(function (a) { return a.mostrar !== false; })
      .map(function (a) {
        return '<div class="amenity reveal">' + icono(a.icono) +
               '<h3>' + a.titulo + '</h3><p>' + a.texto + '</p></div>';
      }).join('');
    observar(cont);
  }

  /* ---------- Ubicación ---------- */
  function pintarUbicacion() {
    var U = C.ubicacion;
    txt('ubi-eyebrow', U.eyebrow);
    txt('ubi-titulo', U.titulo);
    txt('ubi-texto', U.texto);
    html('alrededor', U.alrededor.map(function (a) {
      return '<div class="around-item"><h3>' + a.titulo + '</h3><p>' + a.texto + '</p></div>';
    }).join(''));
  }

  /* ---------- Galería ---------- */
  function pintarGaleria() {
    var cont = slot('galeria'); if (!cont) return;
    cont.innerHTML = C.galeria.map(function (g) {
      var inner = g.foto
        ? '<img src="' + g.foto + '" alt="' + g.titulo + '" loading="lazy">'
        : '<div class="ph"><span class="ph-label">Foto pendiente</span></div>';
      return '<figure class="gallery-item reveal">' + inner +
             '<figcaption class="gallery-cap">' + g.titulo + '</figcaption></figure>';
    }).join('');
    observar(cont);
  }

  /* ---------- Desarrollador ---------- */
  function pintarDesarrollador() {
    var D = C.desarrollador;
    txt('dev-eyebrow', D.eyebrow);
    txt('dev-titulo', D.titulo);
    txt('dev-texto', D.texto);
    txt('dev-servicios', D.servicios);
    html('dev-stats', D.stats.map(function (s) {
      return '<div class="stat reveal"><p class="stat-num">' + s.valor + '</p>' +
             '<p class="stat-label">' + s.etiqueta + '</p></div>';
    }).join(''));
    observar(slot('dev-stats'));

    var fotosCont = slot('dev-fotos');
    if (fotosCont) {
      var fotos = D.fotos || [];
      fotosCont.innerHTML = fotos.map(function (f) {
        return '<div class="dev-photo reveal"><img src="' + f + '" alt="Desarrollo Bahía" loading="lazy"></div>';
      }).join('');
      observar(fotosCont);
    }
  }

  /* =========================================================
     INTERACCIONES
     ========================================================= */
  function interacciones() {
    /* Menú móvil */
    var burger = $('#burger'), nav = $('#nav');
    if (burger && nav) {
      burger.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        burger.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      nav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
          nav.classList.remove('open');
          burger.classList.remove('open');
        }
      });
    }

    /* Filtros */
    $$('.filter').forEach(function (b) {
      b.addEventListener('click', function () {
        $$('.filter').forEach(function (x) { x.classList.remove('is-active'); });
        b.classList.add('is-active');
        filtroActual = b.getAttribute('data-filtro');
        pintarOficinas();
      });
    });

    /* Chips del hero: filtran por metraje y bajan al catálogo */
    $$('.chip').forEach(function (c) {
      c.addEventListener('click', function () {
        rangoActual = (rangoActual === c.getAttribute('data-rango')) ? null : c.getAttribute('data-rango');
        filtroActual = 'todas';
        $$('.filter').forEach(function (x) { x.classList.toggle('is-active', x.getAttribute('data-filtro') === 'todas'); });
        pintarOficinas();
        document.getElementById('oficinas').scrollIntoView({ behavior: 'smooth' });
      });
    });

    /* Volver arriba */
    var toTop = $('.to-top');
    if (toTop) {
      window.addEventListener('scroll', function () {
        toTop.classList.toggle('show', window.scrollY > 600);
      }, { passive: true });
    }
  }

  /* ---------- Animación de entrada ---------- */
  var io = ('IntersectionObserver' in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e, i) {
          if (e.isIntersecting) {
            var el = e.target;
            setTimeout(function () { el.classList.add('in'); }, i * 70);
            io.unobserve(el);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    : null;

  function observar(raiz) {
    var els = $$('.reveal', raiz || document);
    if (!io) { els.forEach(function (el) { el.classList.add('in'); }); return; }
    els.forEach(function (el) { if (!el.classList.contains('in')) io.observe(el); });
  }

  /* =========================================================
     ARRANQUE
     ========================================================= */
  pintarBase();
  pintarDatos();
  pintarLlave();
  pintarOficinas();
  pintarSelectOficinas();
  pintarAmenidades();
  pintarUbicacion();
  pintarGaleria();
  pintarDesarrollador();
  interacciones();
  observar();
})();
