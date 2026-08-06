export type Service = {
  slug: string;

  shortTitle: string;

  title: string;

  heroTitle: string;

  heroDescription: string;

  description: string;

  image: string;

  benefits: string[];

  seo: {
    title: string;
    description: string;
  };
};

export const services: Service[] = [
  {
    slug: "sofas",

    shortTitle: "Sofás",

    title: "Limpieza de sofás",

    heroTitle: "Limpieza profesional de sofás",

    heroDescription:
      "Eliminamos manchas, olores, ácaros y suciedad profunda para devolver la vida a tu sofá.",

    description:
      "Recuperamos el aspecto de tus sofás utilizando maquinaria profesional y productos ecológicos.",

    image: "/images/services/sofa.jpg",

    benefits: [
      "Eliminación de manchas",
      "Eliminación de olores",
      "Reducción de ácaros",
      "Secado rápido",
    ],

    seo: {
      title: "Limpieza profesional de sofás | NewAgain",
      description:
        "Servicio profesional de limpieza de sofás a domicilio con productos ecológicos.",
    },
  },

  {
    slug: "colchones",

    shortTitle: "Colchones",

    title: "Limpieza de colchones",

    heroTitle: "Limpieza profesional de colchones",

    heroDescription:
      "Higienizamos tu colchón eliminando bacterias, ácaros y malos olores.",

    description:
      "Recupera un descanso saludable gracias a una limpieza profunda.",

    image: "/images/services/colchon.jpg",

    benefits: [
      "Eliminación de ácaros",
      "Eliminación de bacterias",
      "Reducción de olores",
      "Mayor higiene",
    ],

    seo: {
      title: "Limpieza de colchones | NewAgain",
      description:
        "Servicio profesional de limpieza e higienización de colchones.",
    },
  },

  {
    slug: "alfombras",

    shortTitle: "Alfombras",

    title: "Limpieza de alfombras",

    heroTitle: "Limpieza profesional de alfombras",

    heroDescription:
      "Recuperamos el color y el aspecto original de tus alfombras.",

    description:
      "Tratamientos específicos adaptados a cada tejido.",

    image: "/images/services/alfombra.jpg",

    benefits: [
      "Eliminación de manchas",
      "Colores renovados",
      "Mayor higiene",
      "Productos ecológicos",
    ],

    seo: {
      title: "Limpieza de alfombras | NewAgain",
      description:
        "Servicio profesional para la limpieza de alfombras.",
    },
  },

  {
    slug: "sillas",

    shortTitle: "Sillas",

    title: "Limpieza de sillas",

    heroTitle: "Limpieza profesional de sillas",

    heroDescription:
      "Recuperamos sillas, sillones y butacas tapizadas.",

    description:
      "Eliminamos suciedad y manchas respetando el tejido original.",

    image: "/images/services/silla.jpg",

    benefits: [
      "Tapicería protegida",
      "Secado rápido",
      "Eliminación de manchas",
      "Resultados profesionales",
    ],

    seo: {
      title: "Limpieza de sillas | NewAgain",
      description:
        "Servicio profesional de limpieza de sillas y butacas.",
    },
  },

  {
    slug: "vehiculos",

    shortTitle: "Vehículos",

    title: "Tapicería de vehículos",

    heroTitle: "Limpieza de tapicerías de vehículos",

    heroDescription:
      "Renueva el interior de tu vehículo con una limpieza profesional.",

    description:
      "Tratamiento completo para asientos, moquetas y tapicerías.",

    image: "/images/services/vehiculo.jpg",

    benefits: [
      "Interior renovado",
      "Eliminación de olores",
      "Mayor higiene",
      "Acabado profesional",
    ],

    seo: {
      title: "Limpieza de tapicería de vehículos | NewAgain",
      description:
        "Servicio profesional de limpieza del interior de vehículos.",
    },
  },

  {
    slug: "otros",

    shortTitle: "Otros",

    title: "Y mucho más",

    heroTitle: "Otros servicios",

    heroDescription:
      "Consúltanos cualquier necesidad relacionada con la limpieza de tapicerías.",

    description:
      "Trabajamos sobre una gran variedad de superficies textiles.",

    image: "/images/services/placeholder.jpg",

    benefits: [
      "Presupuesto gratuito",
      "Atención personalizada",
      "Productos ecológicos",
      "Resultados profesionales",
    ],

    seo: {
      title: "Servicios de limpieza | NewAgain",
      description:
        "Descubre todos los servicios de limpieza profesional de NewAgain.",
    },
  },
];