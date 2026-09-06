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

  function fichaHTML(o) {
    var media = o.foto
      ? '<img src="' + o.foto + '" alt="Oficina ' + o.codigo + '" loading="lazy">'
      : '<div class="ph"><span class="ph-code">' + o.codigo + '</span>' +
        '<span class="ph-label">Foto pendiente</span></div>';

    var tags = (o.caracteristicas || []).map(function (t) { return '<li>' + t + '</li>'; }).join('');

    return '<article class="listing' + (o.estado !== 'disponible' ? ' is-off' : '') + '" data-estado="' + o.estado + '" data-tipo="' + o.tipo + '" data-m2="' + o.m2 + '">' +
             '<div class="listing-media">' +
               '<span class="badge ' + o.estado + '">' + o.estado + '</span>' + media +
             '</div>' +
             '<div class="listing-body">' +
               '<div class="listing-top">' +
                 '<p class="listing-m2">' + o.m2 + '<span>m²</span></p>' +
                 '<span class="listing-tipo">' + o.tipo + '</span>' +
               '</div>' +
               '<p class="listing-title">' + o.codigo + ' · ' + o.torre + '</p>' +
               '<p class="listing-sub">Piso ' + o.piso + ' · ' + o.vista + '</p>' +
               '<dl class="listing-specs">' +
                 '<div class="spec"><dt>Área</dt><dd>' + o.m2 + ' m²</dd></div>' +
                 '<div class="spec"><dt>Altura de techo</dt><dd>' + o.altura + '</dd></div>' +
                 '<div class="spec"><dt>Piso</dt><dd>' + o.piso + '</dd></div>' +
                 '<div class="spec"><dt>Entrega</dt><dd>' + o.tipo + '</dd></div>' +
               '</dl>' +
               '<p class="listing-text">' + o.descripcion + '</p>' +
               '<ul class="tags">' + tags + '</ul>' +
               '<a class="listing-cta" href="#contacto" data-oficina="' + o.codigo + '">Solicitar información <span aria-hidden="true">→</span></a>' +
             '</div>' +
           '</article>';
  }

  function pintarOficinas() {
    var cont = slot('oficinas'); if (!cont) return;

    var lista = C.oficinas.filter(function (o) {
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

    cont.innerHTML = lista.length
      ? lista.map(fichaHTML).join('')
      : '<p class="empty">No hay oficinas que coincidan con ese filtro. <a href="#contacto">Escríbanos</a> y le buscamos una opción.</p>';

    var cuenta = $('#filtroCount');
    if (cuenta) {
      cuenta.textContent = lista.length + (lista.length === 1 ? ' oficina' : ' oficinas') +
                           (rangoActual ? ' · ' + rangoActual.replace('-', ' – ') + ' m²' : '');
    }

    /* Al pedir info de una oficina, la preselecciona en el formulario */
    $$('.listing-cta', cont).forEach(function (a) {
      a.addEventListener('click', function () {
        var sel = $('#interes');
        if (!sel) return;
        var cod = a.getAttribute('data-oficina');
        Array.prototype.forEach.call(sel.options, function (op, i) {
          if (op.value.indexOf(cod) === 0) sel.selectedIndex = i;
        });
      });
    });

    observar(cont);
  }

  function pintarSelectOficinas() {
    var sel = slot('select-oficinas'); if (!sel) return;
    C.oficinas.forEach(function (o) {
      if (o.estado === 'alquilada') return;
      var op = document.createElement('option');
      op.value = o.codigo + ' · ' + o.m2 + ' m²';
      op.textContent = o.codigo + ' · ' + o.torre + ' · ' + o.m2 + ' m²';
      sel.appendChild(op);
    });
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
