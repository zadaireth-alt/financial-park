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
    bajada: "735,000 m² construidos y otros 75,000 m² en desarrollo, con proyectos que van desde residenciales de lujo hasta modernos centros comerciales, bodegas, oficinas y hoteles en una de las zonas más exclusivas de la ciudad.",
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
      tipo: "Por confirmar",
      vista: null,
      descripcion: "Oficina real disponible en el piso 5, de 234 m². Estas fotos y el plano son del espacio real — el resto de la ficha (tipo de entrega, altura, características) se confirma con el cliente.",
      caracteristicas: [],
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
      tipo: "Por confirmar",
      vista: null,
      descripcion: "Oficina real disponible en el piso 6, de 165 m². Estas fotos son del espacio real — el resto de la ficha (tipo de entrega, altura, características) se confirma con el cliente.",
      caracteristicas: [],
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
      tipo: "Por confirmar",
      vista: null,
      descripcion: "Oficina real disponible en el piso 6, de 130 m². Estas fotos son del espacio real — el resto de la ficha (tipo de entrega, altura, características) se confirma con el cliente.",
      caracteristicas: [],
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
      tipo: "Por confirmar",
      vista: null,
      descripcion: "Oficina real disponible en el piso 6, de 129 m². Estas fotos son del espacio real — el resto de la ficha (tipo de entrega, altura, características) se confirma con el cliente.",
      caracteristicas: [],
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
      tipo: "Por confirmar",
      vista: null,
      descripcion: "Oficina real disponible en el piso 6, de 115 m². Estas fotos son del espacio real — el resto de la ficha (tipo de entrega, altura, características) se confirma con el cliente.",
      caracteristicas: [],
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
      tipo: "Por confirmar",
      vista: null,
      descripcion: "Oficina real disponible en el piso 23, de 104 m². Estas fotos son del espacio real — el resto de la ficha (tipo de entrega, altura, características) se confirma con el cliente.",
      caracteristicas: [],
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
      tipo: "Por confirmar",
      vista: null,
      descripcion: "Oficina real disponible en el piso 42, de 154 m². Estas fotos son del espacio real — el resto de la ficha (tipo de entrega, altura, características) se confirma con el cliente.",
      caracteristicas: [],
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
    {
      codigo: "OF-604",
      torre: "Torre A",
      piso: 6,
      m2: 94,
      altura: "3.20 m",
      estado: "disponible",
      tipo: "Llave en mano",
      vista: "Vista interior",
      descripcion: "La opción de entrada: amoblada, con divisiones y todos los servicios listos para operar desde el primer día.",
      caracteristicas: ["1 privado", "Amoblada", "Divisiones incluidas", "Lista para operar"],
      foto: "img/referencia-4.jpg",
      plano: null
    },
    {
      codigo: "OF-2000",
      torre: "Torre B",
      piso: 20,
      m2: 1022,
      altura: "3.60 m",
      estado: "disponible",
      tipo: "Obra gris",
      vista: "Vista 360°",
      descripcion: "Planta completa, la mayor disponible en el edificio. Pensada para casas matrices y operaciones regionales.",
      caracteristicas: ["Planta completa", "Vista 360°", "Acceso privado", "Casa matriz"],
      foto: "img/referencia-6.jpg",
      plano: null
    }
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
    fotos: ["img/desarrollo-bahia-1.jpg", "img/desarrollo-bahia-2.jpg"]
  },

  /* ---------- GALERÍA ----------
     Agrega rutas de fotos: "img/galeria-01.jpg". null = placeholder. */
  galeria: [
    { foto: "img/torre-dia.jpg",         titulo: "Fachada" },
    { foto: "img/lobby-panoramico.jpg",  titulo: "Lobby" },
    { foto: "img/oficina-vista.jpg",     titulo: "Vista desde oficina" },
    { foto: "img/torre-atardecer.jpg",   titulo: "Torre al atardecer" },
    { foto: null,                        titulo: "Áreas comunes" },
    { foto: null,                        titulo: "Sala de juntas" }
  ]
};
