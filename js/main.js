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

  /* ---------- Carga suave de imágenes (fade-in al terminar de cargar) ---------- */
  (function () {
    function marcarListo(img) {
      if (img.classList.contains('img-ready')) return;
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('img-ready');
      } else {
        img.addEventListener('load', function () { img.classList.add('img-ready'); }, { once: true });
        img.addEventListener('error', function () { img.classList.add('img-ready'); }, { once: true });
      }
    }
    function procesarImagenes(raiz) { $$('img', raiz).forEach(marcarListo); }
    procesarImagenes(document);
    if ('MutationObserver' in window) {
      new MutationObserver(function (mutaciones) {
        mutaciones.forEach(function (m) {
          m.addedNodes.forEach(function (n) {
            if (n.nodeType !== 1) return;
            if (n.tagName === 'IMG') marcarListo(n);
            else if (n.querySelectorAll) procesarImagenes(n);
          });
        });
      }).observe(document.body, { childList: true, subtree: true });
    }
  })();

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
        var source = hv.querySelector('source') || document.createElement('source');
        source.type = 'video/mp4';
        source.src = C.hero.video;
        if (!source.parentNode) hv.appendChild(source);
        hv.style.display = '';
        /* IMPORTANTE — no cambiar este evento a "loadeddata":
           el video solo se hace visible (clase "is-ready") cuando YA se
           está reproduciendo de verdad ("playing"), nunca antes. Mientras
           tanto se queda transparente y se ve la imagen de respaldo de
           abajo (mismo oscurecido, textos y botones del hero). Así, si el
           autoplay llega a estar bloqueado (por ejemplo con el Modo de
           Bajo Consumo de iPhone activado), nunca se llega a ver un
           fotograma pausado ni un botón de reproducir — sencillamente se
           queda la imagen, sin ningún control ni interfaz de video. Si el
           video sí arranca (al cargar, o más tarde tras una interacción
           real), aparece con un fundido suave, sin saltos. */
        hv.addEventListener('playing', function () {
          hv.classList.add('is-ready');
          hv.style.display = '';
        });
        hv.muted = true;
        hv.defaultMuted = true;
        hv.playsInline = true;
        hv.setAttribute('webkit-playsinline', '');
        /* En iPhone/Safari (y algunos otros navegadores móviles) un solo
           intento automático de reproducir a veces no alcanza. Por eso se
           reintenta en varios momentos: apenas se prepara, cuando ya tiene
           datos, cuando puede reproducirse sin cortes, cuando el hero
           entra en pantalla, si la persona vuelve a la pestaña, y ante el
           primer toque/clic/scroll en la página. */
        var intentarReproducir = function () {
          if (!hv.paused) return;
          var intento = hv.play();
          if (intento && typeof intento.catch === 'function') {
            intento.catch(function () { /* autoplay bloqueado; se reintenta o se deja la imagen de respaldo */ });
          }
        };
        hv.load();
        intentarReproducir();
        hv.addEventListener('loadeddata', intentarReproducir);
        hv.addEventListener('canplay', intentarReproducir);
        hv.addEventListener('canplaythrough', intentarReproducir);
        document.addEventListener('visibilitychange', function () {
          if (!document.hidden) intentarReproducir();
        });
        ['touchstart', 'touchmove', 'click', 'scroll'].forEach(function (ev) {
          document.addEventListener(ev, intentarReproducir, { once: true, passive: true });
        });
        if ('IntersectionObserver' in window) {
          var ioHeroVideo = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (entrada) {
              if (entrada.isIntersecting) intentarReproducir();
            });
          }, { threshold: 0.1 });
          ioHeroVideo.observe(hv);
        }
        /* Red de seguridad: si tras unos segundos el video sigue sin
           arrancar (autoplay bloqueado y la persona todavía no interactuó
           con la página), se oculta por completo — no solo transparente —
           para no dejar ningún elemento de video sobre la imagen. */
        setTimeout(function () {
          if (hv.paused) hv.style.display = 'none';
        }, 2500);
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
    cont.innerHTML = C.datosClave.map(function (d, i) {
      return '<div class="databar-item" style="--i:' + i + '">' +
               '<p class="databar-val">' + d.valor + '</p>' +
               '<p class="databar-lab">' + d.etiqueta + '</p>' +
             '</div>';
    }).join('');
  }

  /* =========================================================
     OFICINAS
     ========================================================= */
  /* Filtro por metraje. Rangos sin solapes:
     94–350 (ambos inclusive) · más de 350 hasta 650 · más de 650 hasta 1,022 */
  var rangoActual = '94-350';

  function enRango(m2, rango) {
    var p = rango.split('-'), min = +p[0], max = +p[1];
    var okMin = (min === 94) ? m2 >= min : m2 > min;
    return okMin && m2 <= max;
  }

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
      return enRango(+o.m2, rangoActual);
    });

    cont.innerHTML = listaActual.length
      ? listaActual.map(fichaHTML).join('')
      : '<p class="empty">No hay oficinas disponibles en este rango de metraje</p>';

    /* Entrada suave: la primera vez al hacer scroll (reveal); al cambiar
       de filtro, las fichas nuevas aparecen con un fundido corto. */
    $$('.listing, .empty', cont).forEach(function (el, i) {
      if (!oficinasPintadas) { el.classList.add('reveal'); return; }
      el.style.animationDelay = Math.min(i, 6) * 40 + 'ms';
      el.classList.add('swap-in');
    });
    oficinasPintadas = true;

    var cuenta = $('#filtroCount');
    if (cuenta) {
      cuenta.textContent = listaActual.length ? listaActual.length + (listaActual.length === 1 ? ' oficina' : ' oficinas') : '';
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
  var oficinasPintadas = false;

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

  /* ---------- Plano interactivo (sección "El edificio") ----------
     Zonas invisibles con la forma real de cada local. Computadora: al pasar
     el mouse se ilumina el local y aparece una tarjeta estable a su lado; se
     cierra al salir del local y de la tarjeta. Celular: se abre al tocar. */
  function pintarPlano() {
    var cont = slot('plano');
    var P = C.plano;
    if (!cont || !P) return;

    var SVGNS = 'http://www.w3.org/2000/svg';
    var ESTADOS = { operacion: 'En operación', proximamente: 'Próximamente' };
    var tactil = window.matchMedia('(hover: none), (max-width: 760px)');

    cont.innerHTML =
      '<div class="plano-stage reveal">' +
        '<img class="plano-img" src="' + P.imagen + '" alt="' + esc(P.alt) + '" width="' + P.ancho + '" height="' + P.alto + '">' +
      '</div>' +
      '<div class="plano-card" role="dialog" aria-modal="false" aria-labelledby="planoCardTitulo" hidden>' +
        '<button type="button" class="plano-card-close" aria-label="Cerrar">✕</button>' +
        '<div class="plano-card-inner"></div>' +
      '</div>';

    var stage = $('.plano-stage', cont);
    var card = $('.plano-card', cont);
    var inner = $('.plano-card-inner', card);

    /* Capa SVG con el mismo sistema de coordenadas que la imagen (viewBox):
       las zonas escalan con el plano y quedan siempre alineadas. */
    var svg = document.createElementNS(SVGNS, 'svg');
    svg.setAttribute('class', 'plano-zonas');
    svg.setAttribute('viewBox', '0 0 ' + P.ancho + ' ' + P.alto);
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('role', 'group');
    svg.setAttribute('aria-label', 'Locales en el plano');
    /* Capa de "elevación": para cada local, una copia del plano recortada
       exactamente con su forma (clipPath). Al activarse se ilumina, sube unos
       píxeles y proyecta una sombra suave; el plano base no se mueve. */
    var defs = document.createElementNS(SVGNS, 'defs');
    defs.innerHTML =
      '<filter id="planoLift" x="-20%" y="-20%" width="140%" height="150%" color-interpolation-filters="sRGB">' +
        '<feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#0f2340" flood-opacity=".28"/>' +
        '<feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#2c5f9e" flood-opacity=".25"/>' +
      '</filter>';
    var base = document.createElementNS(SVGNS, 'image');
    base.setAttribute('id', 'planoBase');
    base.setAttribute('width', P.ancho);
    base.setAttribute('height', P.alto);
    base.setAttribute('preserveAspectRatio', 'none');
    base.setAttribute('href', P.imagen);
    defs.appendChild(base);
    svg.appendChild(defs);
    var capaLift = document.createElementNS(SVGNS, 'g');
    capaLift.setAttribute('class', 'plano-lifts');
    capaLift.setAttribute('aria-hidden', 'true');
    svg.appendChild(capaLift);
    stage.appendChild(svg);

    var zonas = {}, lifts = {}, porId = {};
    P.locales.forEach(function (l) {
      var clip = document.createElementNS(SVGNS, 'clipPath');
      clip.setAttribute('id', 'planoClip-' + l.id);
      var forma = document.createElementNS(SVGNS, 'polygon');
      forma.setAttribute('points', l.zona);
      clip.appendChild(forma);
      defs.appendChild(clip);

      var g = document.createElementNS(SVGNS, 'g');
      g.setAttribute('class', 'plano-lift');
      var cuerpo = document.createElementNS(SVGNS, 'g');
      cuerpo.setAttribute('filter', 'url(#planoLift)');
      var copia = document.createElementNS(SVGNS, 'use');
      copia.setAttribute('href', '#planoBase');
      copia.setAttribute('clip-path', 'url(#planoClip-' + l.id + ')');
      cuerpo.appendChild(copia);
      var luz = document.createElementNS(SVGNS, 'polygon');
      luz.setAttribute('points', l.zona);
      luz.setAttribute('class', 'plano-lift-luz');
      g.appendChild(cuerpo);
      g.appendChild(luz);
      capaLift.appendChild(g);
      lifts[l.id] = g;

      var poly = document.createElementNS(SVGNS, 'polygon');
      poly.setAttribute('points', l.zona);
      poly.setAttribute('class', 'plano-zona');
      poly.setAttribute('tabindex', '0');
      poly.setAttribute('role', 'button');
      poly.setAttribute('aria-label', l.nombre + ', ' + ESTADOS[l.estado]);
      poly.setAttribute('data-id', l.id);
      svg.appendChild(poly);
      zonas[l.id] = poly;
      porId[l.id] = l;
    });

    function resaltar(id, on) {
      zonas[id].classList.toggle('is-active', on);
      lifts[id].classList.toggle('is-active', on);
      // el local que se activa se dibuja por encima de los demás mientras sube
      if (on) capaLift.appendChild(lifts[id]);
    }

    var activo = null, tOcultar = null, tCerrar = null, conPuntero = false;
    // Precarga las fotos la primera vez que el cursor entra al plano (sin saltos al abrir)
    stage.addEventListener('pointerenter', function () {
      P.locales.forEach(function (l) { if (l.foto) { var im = new Image(); im.src = l.foto; } });
    }, { once: true });
    svg.addEventListener('pointerdown', function () {
      conPuntero = true; setTimeout(function () { conPuntero = false; }, 500);
    });

    function contenido(l) {
      var media = l.foto
        ? '<img src="' + l.foto + '" alt="' + esc(l.nombre) + '" width="520" height="340">'
        : '';
      inner.innerHTML =
        '<div class="plano-card-media' + (l.foto ? '' : ' is-empty') + '">' + media + '</div>' +
        '<div class="plano-card-body">' +
          '<p class="plano-card-nombre" id="planoCardTitulo">' + esc(l.nombre) + '</p>' +
          '<span class="plano-card-estado ' + l.estado + '">' + ESTADOS[l.estado] + '</span>' +
        '</div>';
      // Si la foto aún no está subida, se conserva el espacio con fondo neutro
      var img = $('img', inner);
      if (img) img.addEventListener('error', function () {
        img.parentNode.classList.add('is-empty'); img.remove();
      }, { once: true });
    }

    /* Busca, alrededor del local, la posición que no tape el local (ni su
       nombre), quede dentro de la pantalla y cubra lo menos posible a los
       vecinos. Se calcula una sola vez por local: la tarjeta no sigue al cursor. */
    function posicionar(id) {
      if (tactil.matches) { card.style.left = ''; card.style.top = ''; return; }
      var base = cont.getBoundingClientRect();
      var rel = function (r) { return { l: r.left - base.left, r: r.right - base.left, t: r.top - base.top, b: r.bottom - base.top }; };
      var z = rel(zonas[id].getBoundingClientRect());
      var cw = card.offsetWidth, ch = card.offsetHeight, m = 12;
      var minX = Math.max(0, 8 - base.left), maxX = Math.min(base.width, window.innerWidth - base.left - 8) - cw;
      var minY = Math.max(0, 92 - base.top), maxY = Math.min(base.height, window.innerHeight - base.top - 12) - ch;
      if (maxY < minY) { minY = 0; maxY = base.height - ch; }
      var midY = (z.t + z.b) / 2 - ch / 2, midX = (z.l + z.r) / 2 - cw / 2;
      var cand = [
        { x: z.r + m, y: midY }, { x: z.l - m - cw, y: midY },
        { x: z.r + m, y: z.t }, { x: z.l - m - cw, y: z.t },
        { x: midX, y: z.b + m }, { x: midX, y: z.t - m - ch },
        { x: z.r + m, y: z.b - ch }, { x: z.l - m - cw, y: z.b - ch }
      ];
      var otros = Object.keys(zonas).filter(function (k) { return k !== id; })
        .map(function (k) { return rel(zonas[k].getBoundingClientRect()); });
      function solape(a, b) {
        return Math.max(0, Math.min(a.r, b.r) - Math.max(a.l, b.l)) * Math.max(0, Math.min(a.b, b.b) - Math.max(a.t, b.t));
      }
      var mejor = null;
      cand.forEach(function (c, i) {
        var x = Math.min(Math.max(c.x, minX), Math.max(minX, maxX));
        var y = Math.min(Math.max(c.y, minY), Math.max(minY, maxY));
        var box = { l: x, r: x + cw, t: y, b: y + ch };
        if (solape(box, z) > 0) return;                       // nunca encima del local
        var costo = i * 400;                                    // preferencia por orden
        otros.forEach(function (o) { costo += solape(box, o) * 0.6; });
        costo += Math.abs(x - c.x) + Math.abs(y - c.y);         // mientras más cerca, mejor
        if (!mejor || costo < mejor.costo) mejor = { x: x, y: y, costo: costo };
      });
      if (!mejor) mejor = { x: Math.min(Math.max(z.r + m, minX), maxX), y: Math.min(Math.max(midY, minY), maxY) };
      card.style.left = Math.round(mejor.x) + 'px';
      card.style.top = Math.round(mejor.y) + 'px';
    }

    function abrir(id, foco) {
      clearTimeout(tOcultar); clearTimeout(tCerrar);
      var abierta = card.classList.contains('is-open') && activo;
      if (activo === id && abierta) return;
      if (activo) resaltar(activo, false);
      activo = id;
      resaltar(id, true);

      if (abierta) {
        // Cambio de local: la tarjeta se desliza al nuevo sitio y el contenido hace un fundido corto
        card.classList.add('is-moving');
        contenido(porId[id]);
        posicionar(id);
        inner.classList.remove('is-swap'); void inner.offsetWidth; inner.classList.add('is-swap');
      } else {
        card.classList.remove('is-moving', 'is-open');
        contenido(porId[id]);
        card.hidden = false;
        posicionar(id);
        void card.offsetWidth;            // fija el estado inicial antes de animar
        card.classList.add('is-open');
      }
      if (foco) $('.plano-card-close', card).focus({ preventScroll: true });
    }

    function cerrar(devolverFoco) {
      clearTimeout(tOcultar);
      if (!activo) return;
      var id = activo;
      resaltar(id, false);
      activo = null;
      card.classList.remove('is-open', 'is-moving');
      tCerrar = setTimeout(function () { if (!activo) card.hidden = true; }, 260);
      if (devolverFoco) zonas[id].focus({ preventScroll: true });
    }

    function ocultarLuego() {
      clearTimeout(tOcultar);
      tOcultar = setTimeout(function () { cerrar(false); }, 200);
    }

    P.locales.forEach(function (l) {
      var z = zonas[l.id];
      z.addEventListener('mouseenter', function () { if (!tactil.matches) abrir(l.id); });
      z.addEventListener('mouseleave', function () { if (!tactil.matches) ocultarLuego(); });
      z.addEventListener('click', function () {
        if (tactil.matches && activo === l.id) { cerrar(false); return; }
        abrir(l.id);
      });
      z.addEventListener('focus', function () { if (!conPuntero) abrir(l.id); });
      z.addEventListener('blur', function () {
        setTimeout(function () {
          if (activo === l.id && !card.contains(document.activeElement) && !z.matches(':hover')) cerrar(false);
        }, 0);
      });
      z.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(l.id, tactil.matches); }
      });
    });

    // Mientras el cursor esté sobre la tarjeta, se mantiene abierta
    card.addEventListener('mouseenter', function () { if (!tactil.matches) clearTimeout(tOcultar); });
    card.addEventListener('mouseleave', function () { if (!tactil.matches) ocultarLuego(); });
    $('.plano-card-close', card).addEventListener('click', function () { cerrar(true); });

    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && activo) cerrar(true); });
    document.addEventListener('click', function (e) {
      if (!activo || card.contains(e.target) || (e.target.closest && e.target.closest('.plano-zona'))) return;
      cerrar(false);
    });
    window.addEventListener('resize', function () { if (activo) { card.classList.remove('is-moving'); posicionar(activo); } });

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
      return '<div class="stat"><p class="stat-num"><span class="stat-cifra">' + s.valor + '</span></p>' +
             '<p class="stat-label">' + s.etiqueta + '</p></div>';
    }).join(''));

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
        $$('.filter').forEach(function (x) {
          x.classList.remove('is-active');
          x.setAttribute('aria-pressed', 'false');
        });
        b.classList.add('is-active');
        b.setAttribute('aria-pressed', 'true');
        rangoActual = b.getAttribute('data-rango');
        pintarOficinas();
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
            setTimeout(function () { el.classList.add('in'); }, Math.min(i, 4) * 60);
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
     FRANJA DE DATOS Y CONTADORES (se activan una sola vez al entrar en pantalla)
     ========================================================= */
  var sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function alEntrar(el, fn) {
    if (!el) return;
    if (sinMovimiento || !('IntersectionObserver' in window)) { fn(true); return; }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { obs.disconnect(); fn(false); }
      });
    }, { threshold: 0.35 });
    obs.observe(el);
  }

  /* Franja debajo del video: aparición escalonada de izquierda a derecha */
  function animarFranja() {
    var barra = $('.databar');
    if (!barra) return;
    barra.classList.add('anim-ready');
    alEntrar(barra, function () { barra.classList.add('is-in'); });
  }

  /* Contadores de Desarrollo Bahía: 0 → valor final en ~2 s, desacelerando.
     Conserva el signo "+", las comas de miles y las unidades ("m²"). */
  function animarContadores() {
    var cont = slot('dev-stats');
    if (!cont) return;
    var cifras = $$('.stat-cifra', cont).map(function (el) {
      var txt = el.textContent;
      var m = txt.match(/^(\D*)([\d,]+)(.*)$/);
      if (!m) return null;
      return { el: el, pre: m[1], fin: parseInt(m[2].replace(/,/g, ''), 10), suf: m[3], txt: txt };
    }).filter(Boolean);
    cont.classList.add('anim-ready');

    alEntrar(cont, function (directo) {
      cont.classList.add('is-in');
      if (directo) return;                      // movimiento reducido: valores finales tal cual
      var dur = 2000, t0 = null;
      var fmt = function (n) { return n.toLocaleString('en-US'); };
      // Reserva el ancho del valor final para que nada se mueva mientras cuenta
      cifras.forEach(function (c) { c.el.style.minWidth = c.el.getBoundingClientRect().width + 'px'; });
      cifras.forEach(function (c) { c.el.textContent = c.pre + '0' + c.suf; });
      function paso(t) {
        if (!t0) t0 = t;
        var p = Math.min(1, (t - t0) / dur);
        var e = 1 - Math.pow(1 - p, 3);         // desaceleración suave al final
        cifras.forEach(function (c) {
          c.el.textContent = p < 1 ? c.pre + fmt(Math.round(c.fin * e)) + c.suf : c.txt;
        });
        if (p < 1) requestAnimationFrame(paso);
      }
      requestAnimationFrame(paso);
    });
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
  pintarPlano();
  pintarUbicacion();
  pintarGaleria();
  pintarDesarrollador();
  animarFranja();
  animarContadores();
  interacciones();
  /* Títulos y fotos de cada sección aparecen suavemente al entrar en pantalla */
  $$('.section-head, .split-media, .bleed').forEach(function (el) { el.classList.add('reveal'); });
  observar();
})();
