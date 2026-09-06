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
    bajada: "En el corazón financiero de una de las zonas más exclusivas de la ciudad. Oficinas de 94 a 1,022 m², a pasos de hoteles, restaurantes y todo lo que su operación necesita.",
    ctaPrimario: { texto: "Ver oficinas disponibles", href: "#oficinas" },
    ctaSecundario: { texto: "Agendar una visita", href: "#contacto" },
    // Cambia esta foto por el video o la imagen final del edificio
    imagen: "img/oficina-vista.jpg",
    imagenMovil: "img/torre-atardecer.jpg"
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
     ⚠️ LAS FICHAS DE ABAJO SON LA ESTRUCTURA DE EJEMPLO.
     Reemplaza los datos por los reales cuando el cliente los pase.
     Para agregar una oficina: copia un bloque { ... } completo.
     Para quitarla: bórralo.

     estado:  "disponible" | "reservada" | "alquilada"
     tipo:    "Llave en mano" | "Amoblada" | "Obra gris"
     ============================================================= */
  oficinas: [
    {
      codigo: "OF-1204",
      torre: "Torre A",
      piso: 12,
      m2: 210,
      altura: "3.20 m",
      estado: "disponible",
      tipo: "Llave en mano",
      vista: "Vista al mar",
      descripcion: "Planta completa con recepción, cuatro privados y sala de juntas. Entregada lista para instalar la operación.",
      caracteristicas: ["4 privados", "Sala de juntas", "Recepción", "Cocineta"],
      foto: null,
      plano: null
    },
    {
      codigo: "OF-902",
      torre: "Torre A",
      piso: 9,
      m2: 145,
      altura: "3.20 m",
      estado: "disponible",
      tipo: "Amoblada",
      vista: "Vista a la ciudad",
      descripcion: "Espacio abierto con dos privados, cocineta y área de espera propia. Ideal para equipos de 18 a 22 personas.",
      caracteristicas: ["2 privados", "Área abierta", "Cocineta", "Área de espera"],
      foto: null,
      plano: null
    },
    {
      codigo: "OF-1501",
      torre: "Torre B",
      piso: 15,
      m2: 320,
      altura: "3.60 m",
      estado: "reservada",
      tipo: "Llave en mano",
      vista: "Vista panorámica",
      descripcion: "Penthouse corporativo con terraza privada y acabados premium. Doble altura en el acceso.",
      caracteristicas: ["Terraza privada", "6 privados", "Sala de juntas", "Acabados premium"],
      foto: null,
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
      foto: null,
      plano: null
    },
    {
      codigo: "OF-1801",
      torre: "Torre B",
      piso: 18,
      m2: 640,
      altura: "3.60 m",
      estado: "disponible",
      tipo: "Obra gris",
      vista: "Vista al mar",
      descripcion: "Media planta para diseñar a la medida. Luz natural en todo el perímetro y capacidad para más de 70 puestos.",
      caracteristicas: ["Planta libre", "Luz natural perimetral", "+70 puestos", "A la medida"],
      foto: null,
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
      foto: null,
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
    imagen: "img/lobby-globo.jpg"
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
    servicios: "Oficinas · Residencial · Centros comerciales · Cines · Hotelería"
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
