/* =============================================================
   FINANCIAL PARK — CONTENIDO DEL SITIO
   -------------------------------------------------------------
   ESTE ES EL ÚNICO ARCHIVO QUE HAY QUE TOCAR.
   Aquí viven todos los textos, las oficinas y las amenidades.
   Cambias algo aquí y la web cambia sola. No toques el diseño.

   CÓMO AGREGAR UNA FOTO:
   1. Guarda la imagen en la carpeta  img/
   2. Escribe su nombre en el campo "foto"  →  foto: "img/of-1204.jpg"
   3. Si dejas  foto: null  aparece un placeholder elegante.

   CÓMO AGREGAR VARIAS FOTOS A UNA OFICINA (carrusel):
   Usa el campo "fotos": ["img/foto-1.jpg", "img/foto-2.jpg", ...]
   Si "fotos" no existe, se usa solo el campo "foto".
   ============================================================= */

const CONTENIDO = {

  /* ---------- MARCA ---------- */
  marca: {
    nombre: "Financial Park",
    bajada: "Oficinas corporativas en alquiler · Costa del Este, Panamá"
  },

  /* ---------- CONTACTO (datos reales del cliente) ---------- */
  contacto: {
    telefono: "+507 6672-0000",
    telefonoLink: "+50766720000",
    whatsapp: "50766720000",              // solo números, sin + ni espacios
    correo: "ventas@desarrollobahia.com",
    horario: "Lunes a viernes, 8:00 a.m. – 5:00 p.m.",   // ⚠️ confirmar con el cliente
    direccion: "Financial Park, Costa del Este, Ciudad de Panamá",
    mapa: { lat: 9.010124, lng: -79.479065 }
  },

  /* ---------- HERO ---------- */
  hero: {
    eyebrow: "Oficinas y locales comerciales · Costa del Este",
    titulo: "Financial Park",
    bajada: "",
    ctaPrimario: { texto: "Ver oficinas disponibles", href: "#oficinas" },
    ctaSecundario: { texto: "Agendar una visita", href: "#contacto" },
    // Video de fondo del hero. Si "video" queda en null, se usa solo la imagen.
    // El "?v=" al final es a propósito: fuerza a que el navegador y el CDN de
    // Netlify carguen el archivo nuevo en vez de servir el video viejo desde
    // caché (mismo nombre de archivo, contenido distinto). Cada vez que se
    // reemplace este video, hay que subir el archivo nuevo con el mismo
    // nombre Y subir este número en 1 (ver decisión 25 en 01-DECISIONES.md).
    video: "video/hero.mp4?v=3",
    // Imagen de respaldo (se ve mientras carga el video, y si el navegador no puede reproducirlo).
    // Debe ser SIEMPRE el primer fotograma real del video de arriba — si no
    // coinciden, se ve un salto/flash al pasar del poster al video (fue el
    // bug del 09/09/2026: el poster era de un dron/video viejo distinto).
    // Mismo "?v=" que el video y misma regla: al reemplazar la imagen, subir
    // el archivo con el mismo nombre Y subir este número en 1.
    imagen: "img/hero-poster.jpg?v=3",
    imagenMovil: "img/hero-poster.jpg?v=3"
  },

  /* ---------- BANDAS A SANGRE (fotos de borde a borde) ---------- */
  bandas: {
    // Va justo después de "Oficinas disponibles"
    fachada: "img/drone-fachada.jpg",
    // Banda con la frase de marca, antes de "Ubicación"
    cita: "img/torre-atardecer.jpg",
    // Va justo después de "Desarrollo Bahía"
    lobby: "img/lobby-panoramico.jpg"
  },

  /* ---------- BARRA DE DATOS CLAVE ---------- */
  datosClave: [
    { valor: "94 – 1,022", etiqueta: "m² disponibles" },
    { valor: "Costa del Este", etiqueta: "Zona financiera" },
    { valor: "Llave en mano", etiqueta: "Desde 94 m²" },
    { valor: "Valet", etiqueta: "Parking disponible" }
  ],

  /* =============================================================
     OFICINAS
     -------------------------------------------------------------
     ⚠️ Salvo la primera (marcada real: true), las fichas de abajo
     son la estructura de EJEMPLO. Reemplaza los datos por los
     reales cuando el cliente los pase.
     Para agregar una oficina: copia un bloque { ... } completo.
     Para quitarla: bórralo.

     estado:  "disponible" | "reservada" | "alquilada"
     tipo:    "Llave en mano" | "Amoblada" | "Obra gris" | "Por confirmar"
     real:    true → oficina real confirmada (se le pone una etiqueta "Real")
     fotos:   arreglo opcional de varias fotos (carrusel). Si no está, se usa "foto".
     ============================================================= */
  oficinas: [
    {
      codigo: "05B",
      torre: null,
      piso: 5,
      m2: 234,
      altura: null,
      estado: "disponible",
      tipo: "Llave en mano",
      vista: null,
      descripcion: "Oficina real disponible en el piso 5, de 234 m². Estas fotos y el plano son del espacio real — el resto de la ficha (tipo de entrega, altura, características) se confirma con el cliente.",
      caracteristicas: ["Amoblada"],
      real: true,
      foto: "img/of-05b-01.jpg",
      fotos: [
        "img/of-05b-01.jpg",
        "img/of-05b-02.jpg",
        "img/of-05b-03.jpg",
        "img/of-05b-04.jpg",
        "img/of-05b-05.jpg",
        "img/of-05b-06.jpg",
        "img/of-05b-07.jpg",
        "img/of-05b-08.jpg",
        "img/of-05b-09.jpg",
        "img/of-05b-10.jpg",
        "img/of-05b-11.jpg",
        "img/of-05b-12.jpg",
        "img/of-05b-13.jpg"
      ],
      plano: null
    },
    {
      codigo: "06C",
      torre: null,
      piso: 6,
      m2: 165,
      altura: null,
      estado: "disponible",
      tipo: "Llave en mano",
      vista: null,
      descripcion: "Oficina real disponible en el piso 6, de 165 m². Estas fotos son del espacio real — el resto de la ficha (tipo de entrega, altura, características) se confirma con el cliente.",
      caracteristicas: ["Amoblada"],
      real: true,
      foto: "img/of-06c-01.jpg",
      fotos: [
        "img/of-06c-01.jpg",
        "img/of-06c-02.jpg",
        "img/of-06c-03.jpg",
        "img/of-06c-04.jpg",
        "img/of-06c-05.jpg",
        "img/of-06c-06.jpg",
        "img/of-06c-07.jpg",
        "img/of-06c-08.jpg",
        "img/of-06c-09.jpg",
        "img/of-06c-10.jpg",
        "img/of-06c-11.jpg"
      ],
      plano: null
    },
    {
      codigo: "06D",
      torre: null,
      piso: 6,
      m2: 130,
      altura: null,
      estado: "disponible",
      tipo: "Llave en mano",
      vista: null,
      descripcion: "Oficina real disponible en el piso 6, de 130 m². Estas fotos son del espacio real — el resto de la ficha (tipo de entrega, altura, características) se confirma con el cliente.",
      caracteristicas: ["Amoblada"],
      real: true,
      foto: "img/of-06d-01.jpg",
      fotos: [
        "img/of-06d-01.jpg",
        "img/of-06d-02.jpg",
        "img/of-06d-03.jpg",
        "img/of-06d-04.jpg",
        "img/of-06d-05.jpg"
      ],
      plano: null
    },
    {
      codigo: "06F",
      torre: null,
      piso: 6,
      m2: 129,
      altura: null,
      estado: "disponible",
      tipo: "Llave en mano",
      vista: null,
      descripcion: "Oficina real disponible en el piso 6, de 129 m². Estas fotos son del espacio real — el resto de la ficha (tipo de entrega, altura, características) se confirma con el cliente.",
      caracteristicas: ["Amoblada"],
      real: true,
      foto: "img/of-06f-01.jpg",
      fotos: [
        "img/of-06f-01.jpg",
        "img/of-06f-02.jpg",
        "img/of-06f-03.jpg",
        "img/of-06f-04.jpg",
        "img/of-06f-05.jpg",
        "img/of-06f-06.jpg",
        "img/of-06f-07.jpg",
        "img/of-06f-08.jpg",
        "img/of-06f-09.jpg"
      ],
      plano: null
    },
    {
      codigo: "06I",
      torre: null,
      piso: 6,
      m2: 115,
      altura: null,
      estado: "disponible",
      tipo: "Llave en mano",
      vista: null,
      descripcion: "Oficina real disponible en el piso 6, de 115 m². Estas fotos son del espacio real — el resto de la ficha (tipo de entrega, altura, características) se confirma con el cliente.",
      caracteristicas: ["Amoblada"],
      real: true,
      foto: "img/of-06i-01.jpg",
      fotos: [
        "img/of-06i-01.jpg",
        "img/of-06i-02.jpg",
        "img/of-06i-03.jpg",
        "img/of-06i-04.jpg",
        "img/of-06i-05.jpg",
        "img/of-06i-06.jpg",
        "img/of-06i-07.jpg",
        "img/of-06i-08.jpg",
        "img/of-06i-09.jpg"
      ],
      plano: null
    },
    {
      codigo: "23C",
      torre: null,
      piso: 23,
      m2: 104,
      altura: null,
      estado: "disponible",
      tipo: "Obra gris",
      vista: null,
      descripcion: "Oficina real disponible en el piso 23, de 104 m². A diferencia de las demás oficinas disponibles, este espacio está vacío y sin amoblar — no es de tipo llave en mano. Estas fotos son del espacio real — el resto de la ficha (altura, características) se confirma con el cliente.",
      caracteristicas: ["Espacio vacío", "Sin amoblar"],
      real: true,
      foto: "img/of-23c-01.jpg",
      fotos: [
        "img/of-23c-01.jpg",
        "img/of-23c-02.jpg"
      ],
      plano: null
    },
    {
      codigo: "42A",
      torre: null,
      piso: 42,
      m2: 154,
      altura: null,
      estado: "disponible",
      tipo: "Llave en mano",
      vista: null,
      descripcion: "Oficina real disponible en el piso 42, de 154 m². Estas fotos son del espacio real — el resto de la ficha (tipo de entrega, altura, características) se confirma con el cliente.",
      caracteristicas: ["Amoblada"],
      real: true,
      foto: "img/of-42a-01.jpg",
      fotos: [
        "img/of-42a-01.jpg",
        "img/of-42a-02.jpg",
        "img/of-42a-03.jpg",
        "img/of-42a-04.jpg",
        "img/of-42a-05.jpg",
        "img/of-42a-06.jpg",
        "img/of-42a-07.jpg",
        "img/of-42a-08.jpg",
        "img/of-42a-09.jpg",
        "img/of-42a-10.jpg"
      ],
      plano: null
    },
  ],

  /* =============================================================
     AMENIDADES
     -------------------------------------------------------------
     confirmado: true  → dato tomado de la web actual del cliente
     confirmado: false → estándar del mercado, CONFIRMAR antes de publicar
     mostrar: false    → la oculta de la web sin borrarla
     ============================================================= */
  amenidades: [
    /* --- Operando hoy (confirmado por Zara, 05/09/2026) --- */
    { icono: "restaurante", titulo: "Sushark",        texto: "Restaurante dentro del complejo.",                     confirmado: true,  mostrar: true },
    { icono: "cafe",        titulo: "Coffee Be",      texto: "Café en planta baja para reuniones rápidas.",           confirmado: true,  mostrar: true },

    /* --- Ya NO operan: aparecían en la web vieja del cliente.
           Se dejan aquí por si vuelven; mostrar:true las reactiva. --- */
    { icono: "restaurante", titulo: "Ciao Bella",     texto: "Segunda opción gastronómica en el edificio.",           confirmado: false, mostrar: false },
    { icono: "copa",        titulo: "After Office",   texto: "Zona de esparcimiento para cerrar el día.",             confirmado: false, mostrar: false },

    { icono: "auto",        titulo: "Valet Parking",  texto: "Servicio de valet disponible para visitantes.",         confirmado: false, mostrar: true },
    { icono: "escudo",      titulo: "Seguridad 24/7", texto: "Vigilancia permanente y control de acceso.",            confirmado: false, mostrar: true },
    { icono: "rayo",        titulo: "Planta eléctrica", texto: "Respaldo eléctrico para que la operación no pare.",   confirmado: false, mostrar: true },
    { icono: "ascensor",    titulo: "Ascensores",     texto: "Ascensores de alta velocidad para todo el edificio.",   confirmado: false, mostrar: true },
    { icono: "aire",        titulo: "Aire acondicionado", texto: "Climatización central en oficinas y áreas comunes.", confirmado: false, mostrar: true },
    { icono: "wifi",        titulo: "Fibra óptica",   texto: "Conectividad de alta velocidad en todo el edificio.",   confirmado: false, mostrar: true },
    { icono: "personas",    titulo: "Salas de reuniones", texto: "Salas de uso compartido para recibir clientes.",    confirmado: false, mostrar: true },
    { icono: "auto",        titulo: "Estacionamientos", texto: "Estacionamientos asignados para colaboradores.",      confirmado: false, mostrar: true }
  ],

  /* ---------- PLANO INTERACTIVO (sección "El edificio") ----------
     estado: "operacion"    → muestra "En operación" + su foto
             "proximamente" → muestra "Próximamente"
     foto:   ruta de la foto del local (img/negocios/ para las fotos reales
             ya integradas; img/locales/ para las que faltan). Basta con
             subir el archivo con ese nombre exacto: si todavía no existe,
             la tarjeta conserva el espacio de la foto con un fondo neutro.
     zona:   contorno del local sobre el plano, en píxeles de la imagen
             original (1600 × 1425). No hace falta tocarlo.
     ------------------------------------------------------------- */
  plano: {
    imagen: "img/WhatsApp%20Image%202026-09-15%20at%2012.29.59.jpeg",   // plano subido por Zara (05/10/2026)
    ancho: 1600,
    alto: 1425,
    alt: "Plano de la planta baja de Financial Park con sus locales comerciales",
    locales: [
      { id: "sushark", nombre: "Sushark", estado: "operacion", foto: "img/locales/sushark.jpg",
        zona: "515,239 513,243 504,249 501,255 486,266 485,270 469,285 442,319 425,344 422,353 418,354 413,368 408,372 406,390 397,395 382,424 381,432 376,436 348,516 342,554 338,565 335,591 335,642 346,634 364,632 430,585 445,577 455,566 468,561 503,535 514,530 526,519 532,518 555,499 561,498 571,488 577,487 615,460 605,459 605,447 594,445 592,435 559,459 529,459 513,435 513,405 528,393 534,392 555,375 559,375 584,355 592,352 537,270 526,269 521,265 520,249" },
      { id: "gym", nombre: "Gym", estado: "operacion", foto: "img/locales/gym.jpg",
        zona: "694,101 687,103 669,118 647,133 640,135 600,165 542,169 542,174 539,175 542,188 542,218 524,233 530,241 537,242 541,246 542,262 563,293 574,305 574,309 581,314 587,329 594,335 599,345 620,333 624,328 645,316 664,301 668,301 671,296 678,294 682,288 691,285 697,278 703,277 710,270 715,269 731,255 759,255 776,281 779,281 788,275 790,271 794,271 822,252 796,211 770,211 767,209" },
      { id: "pilates", nombre: "Pilates", estado: "operacion", foto: "img/negocios/pilates.jpg",
        zona: "973,67 955,56 951,50 948,50 930,34 918,33 913,30 911,23 533,58 529,61 537,153 539,158 589,156 675,98 706,98 780,207 808,208 820,224 820,227 825,231 825,234 834,243 843,237 844,207 930,134 931,126 935,120 935,104 951,101 958,89 968,79" },
      { id: "salon-belleza", nombre: "Salón de belleza", estado: "operacion", foto: "img/locales/salon-belleza.jpg",
        zona: "636,613 569,518 567,512 563,510 474,570 473,582 454,584 366,644 365,657 362,660 343,660 338,663 336,667 344,717 347,719 348,694 392,694 393,698 398,701 432,706 436,710 495,711 528,688 529,675 549,674 557,669 559,664 566,663 567,660 598,643 602,636 624,620 627,620 630,615" },
      { id: "oh-nails", nombre: "Oh! Nails", estado: "operacion", foto: "img/negocios/oh-nails.jpg",
        zona: "1037,117 1026,124 1016,135 1010,136 1008,140 1004,141 997,151 987,155 950,186 947,186 944,191 936,196 935,200 931,200 916,210 900,225 884,236 884,250 873,258 890,286 897,291 898,298 910,313 910,316 913,317 931,343 955,325 959,319 965,317 990,292 1008,280 1033,256 1036,256 1047,246 1050,241 1061,235 1081,215 1093,208 1113,189 1111,173 1103,170 1100,165 1086,157 1082,151 1078,150 1068,140 1065,140 1064,137 1058,135 1057,131 1051,129" },
      { id: "foodie", nombre: "Foodie Market", estado: "operacion", foto: "img/negocios/foodie-market.jpg",
        zona: "1137,193 1125,194 1091,225 1080,231 1073,241 1068,242 1050,260 1039,265 1033,274 1030,274 1025,281 1001,299 997,305 991,306 977,321 970,323 970,327 947,346 954,347 958,353 958,378 963,381 966,389 970,394 977,397 978,402 986,410 991,411 992,415 996,415 1007,429 1011,429 1015,437 1022,443 1037,427 1156,275 1149,272 1149,243 1153,242 1169,217" },
      { id: "local-rosa", nombre: "Nombre por confirmar", estado: "operacion", foto: "img/locales/local-logo-rojo-azul.jpg",   // ⚠️ logo del plano sin identificar: confirmar nombre
        zona: "1358,353 1355,353 1306,318 1282,306 1265,292 1262,292 1260,288 1254,286 1237,270 1226,270 1225,261 1210,251 1207,258 1202,261 1202,265 1195,269 1195,273 1188,281 1164,281 1036,444 1046,445 1046,460 1049,460 1050,464 1062,471 1070,472 1075,477 1100,484 1138,480 1139,477 1151,476 1221,456 1224,450 1243,450 1260,445 1261,442 1253,416 1254,386 1319,368 1320,361 1345,361 1359,357" },
      { id: "boutet", nombre: "Boutet", estado: "operacion", foto: "img/locales/boutet.jpg",
        zona: "1259,396 1263,406 1264,419 1274,445 1274,454 1278,458 1278,470 1283,478 1284,489 1290,497 1290,508 1294,514 1364,496 1375,491 1389,489 1390,487 1418,487 1431,533 1448,528 1449,514 1477,514 1479,520 1489,517 1468,479 1437,434 1431,430 1431,427 1411,404 1398,394 1397,390 1371,366 1351,370 1348,379 1318,379 1302,385 1292,386 1283,391" },
      { id: "paul", nombre: "Paul", estado: "operacion", foto: "img/negocios/paul.jpg",
        zona: "954,709 959,710 962,713 965,716 966,721 966,802 965,807 962,810 959,813 954,814 872,814 867,813 864,810 861,807 860,802 860,721 861,716 864,713 867,710 872,709" },
      { id: "naked-lukas", nombre: "Naked Lukas", estado: "proximamente", foto: null,
        zona: "528,176 525,175 520,179 519,186 498,186 485,194 435,214 425,221 415,223 406,229 401,229 397,233 392,233 386,238 378,239 374,243 355,251 357,295 354,300 354,313 365,425 376,404 378,394 383,389 406,345 417,333 435,303 445,294 449,285 453,284 453,280 476,255 479,255 506,226 531,208" },
      { id: "cafe", nombre: "Café", estado: "proximamente", foto: null,
        zona: "737,759 644,624 632,630 630,634 611,646 609,657 592,657 540,694 534,695 500,719 432,719 432,812 440,812 441,802 510,803 561,809 614,805 661,792 662,780 695,780" },
      { id: "spa", nombre: "Spa", estado: "proximamente", foto: null,
        zona: "826,398 735,459 717,474 697,485 605,548 658,627 674,630 675,652 725,725 729,727 730,732 745,753 775,728 777,707 788,706 789,693 809,692 819,682 820,675 826,674 837,661 837,657 841,656 845,648 852,643 852,638 857,637 867,624 867,619 870,618 870,600 878,599 879,588 893,588 893,585 897,584 906,568 906,564 909,563 914,549 912,534 907,527 907,521 901,508 897,505 896,498 887,485 884,484 884,479 874,464 860,463 860,445 857,444 857,439 847,425 842,423 841,418" },
      { id: "marea", nombre: "Marea", estado: "proximamente", foto: null,
        zona: "1417,809 1396,815 1366,815 1351,761 1345,759 1332,761 1315,768 1325,803 1325,834 1300,842 1267,843 1265,841 1249,781 1118,816 1111,820 1136,883 1139,884 1139,889 1147,905 1150,906 1158,925 1162,927 1162,932 1169,944 1188,968 1192,979 1206,995 1217,995 1223,984 1247,984 1264,980 1280,972 1290,972 1317,964 1335,964 1337,959 1343,957 1344,945 1363,945" },
      { id: "cowork", nombre: "Cowork Bahía", estado: "proximamente", foto: null,
        zona: "1198,567 1159,575 1143,582 1141,585 1136,585 1125,591 1120,597 1116,597 1100,607 1099,611 1095,611 1082,619 1082,624 1078,626 1077,639 1085,641 1086,692 1098,753 1100,754 1100,782 1098,785 1105,799 1107,809 1246,771 1198,602" }
    ]
  },

  /* ---------- LLAVE EN MANO ---------- */
  llaveEnMano: {
    eyebrow: "Llave en mano",
    titulo: "Oficinas listas para operar desde el primer día",
    texto: "De 94 a 350 m² amobladas, con divisiones, mobiliario y todos los servicios incluidos para el rápido funcionamiento de su empresa. Sin obra, sin tiempos muertos, sin sorpresas.",
    puntos: [
      "Divisiones y mobiliario incluidos",
      "Servicios listos desde la entrega",
      "Sin período de adecuación",
      "Metrajes de 94 a 350 m²"
    ],
    imagen: "img/llave-en-mano.jpg"
  },

  /* ---------- UBICACIÓN ---------- */
  ubicacion: {
    eyebrow: "Ubicación",
    titulo: "Costa del Este, el corazón financiero de la ciudad",
    texto: "Una de las zonas más exclusivas de Panamá. Caminando desde el edificio: hoteles, restaurantes, bancos y todo lo que su equipo y sus clientes necesitan.",
    alrededor: [
      { titulo: "Hoteles",      texto: "Cadenas internacionales a minutos" },
      { titulo: "Restaurantes", texto: "Oferta gastronómica caminable" },
      { titulo: "Banca",        texto: "Corredor bancario de Costa del Este" },
      { titulo: "Accesos",      texto: "Conexión directa con Corredor Sur" }
    ]
  },

  /* ---------- DESARROLLADOR ---------- */
  desarrollador: {
    eyebrow: "El desarrollador",
    titulo: "Desarrollo Bahía",
    texto: "Más de 35 años construyendo en Panamá. Financial Park es parte de un portafolio que incluye oficinas, residencial, centros comerciales, cines y hotelería.",
    stats: [
      { valor: "+35", etiqueta: "Años construyendo en Panamá" },
      { valor: "360,000 m²", etiqueta: "Desarrollados" },     // ⚠️ confirmar
      { valor: "160,000 m²", etiqueta: "Bajo construcción" }  // ⚠️ confirmar
    ],
    servicios: "Oficinas · Residencial · Centros comerciales · Cines · Hotelería",
    // Fotos del desarrollador (opcional). Deja [] para no mostrar nada.
    fotos: ["img/desarrollo-bahia-1.jpg"]
  },

  /* ---------- GALERÍA ----------
     Agrega rutas de fotos: "img/galeria-01.jpg". null = placeholder. */
  galeria: [
    { foto: "img/galeria-fachada.jpg",  titulo: "Fachada" },
    { foto: "img/lobby-panoramico.jpg",  titulo: "Lobby" },
    { foto: "img/oficina-vista.jpg",     titulo: "Vista desde oficina" },
    { foto: "img/torre-atardecer.jpg",   titulo: "Torre al atardecer" },
    { foto: null,                        titulo: "Áreas comunes" },
    { foto: null,                        titulo: "Sala de juntas" }
  ]
};
