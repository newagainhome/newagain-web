export type ServiceContent = {
  slug: string;
  name: string;
  cardDescription: string;
  hero: {
    badge: string;
    title: string;
    description: string;
    image: string;
  };
  benefits: {
    title: string;
    description: string;
  }[];
  problems: string[];
  gallery: {
    before: string;
    after: string;
    title: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const servicesContent: Record<string, ServiceContent> = {
  sofas: {
    slug: "sofas",

    name: "Limpieza de sofás",

    cardDescription:
        "Limpieza profesional de sofás eliminando manchas, olores y suciedad profunda.",

    hero: {
      badge: "🛋️ Limpieza profesional de sofás",
      title: "Recupera el aspecto original de tu sofá",
      description:
        "Eliminamos manchas, olores, ácaros y suciedad profunda para que vuelvas a disfrutar de un sofá limpio, higiénico y como nuevo.",
      image: "/images/services/sofa.jpg",
    },

    benefits: [
      {
        title: "Eliminación de manchas",
        description:
          "Tratamos cada tejido con productos específicos para eliminar las manchas más habituales.",
      },
      {
        title: "Adiós a los malos olores",
        description:
          "Neutralizamos los olores provocados por mascotas, humedad o el uso diario.",
      },
      {
        title: "Productos ecológicos",
        description:
          "Utilizamos productos seguros para niños, mascotas y todo tipo de tejidos.",
      },
      {
        title: "Secado rápido",
        description:
          "Gracias a nuestra maquinaria profesional reducimos considerablemente el tiempo de secado.",
      },
    ],

    problems: [
      "Manchas de comida y bebida",
      "Olor a mascotas",
      "Ácaros y polvo acumulado",
      "Suciedad del uso diario",
      "Mal aspecto del tejido",
    ],

    gallery: [
      {
        before: "/images/results/sofa-before.jpg",
        after: "/images/results/sofa-after.jpg",
        title: "Sofá de tela recuperado",
      },
    ],

    faqs: [
      {
        question: "¿Cuánto tarda en secarse un sofá?",
        answer:
          "Normalmente entre 4 y 8 horas, dependiendo del tejido y de la ventilación de la vivienda.",
      },
      {
        question: "¿Elimináis todas las manchas?",
        answer:
          "La mayoría de las manchas desaparecen completamente. En casos muy antiguos o permanentes pueden quedar ligeras marcas.",
      },
      {
        question:
          "¿Los productos son seguros para mascotas y niños?",
        answer:
          "Sí. Trabajamos con productos profesionales y ecológicos adecuados para hogares con niños y mascotas.",
      },
    ],
  },

  colchones: {
    slug: "colchones",

    name: "Limpieza de colchones",

    cardDescription:
          "Recupera la higiene de tu colchón eliminando ácaros, bacterias y malos olores.",

    hero: {
      badge: "🛏️ Limpieza profesional de colchones",
      title: "Duerme sobre un colchón limpio e higiénico",
      description:
        "Eliminamos ácaros, bacterias, manchas y malos olores para que disfrutes de un descanso mucho más saludable.",
      image: "/images/services/colchon.jpg",
    },

    benefits: [
      {
        title: "Eliminación de ácaros",
        description:
          "Reducimos significativamente la presencia de ácaros y otros alérgenos.",
      },
      {
        title: "Mayor higiene",
        description:
          "Eliminamos suciedad, bacterias y restos orgánicos acumulados con el paso del tiempo.",
      },
      {
        title: "Productos ecológicos",
        description:
          "Trabajamos con productos seguros para toda la familia y respetuosos con el medio ambiente.",
      },
      {
        title: "Secado rápido",
        description:
          "Nuestro sistema permite reducir considerablemente el tiempo de secado.",
      },
    ],

    problems: [
      "Ácaros y alérgenos",
      "Manchas de sudor",
      "Malos olores",
      "Bacterias acumuladas",
      "Suciedad invisible",
    ],

    gallery: [],

    faqs: [
      {
        question:
          "¿Cada cuánto tiempo debería limpiarse un colchón?",
        answer:
          "Lo recomendable es realizar una limpieza profesional al menos una vez al año.",
      },
      {
        question:
          "¿Elimináis los ácaros del colchón?",
        answer:
          "Sí. Nuestro proceso reduce significativamente la presencia de ácaros, bacterias y otros alérgenos.",
      },
      {
        question:
          "¿Cuánto tarda en secarse?",
        answer:
          "Generalmente entre 4 y 8 horas dependiendo de la ventilación y de la humedad ambiental.",
      },
    ],
  },

  alfombras: {
    slug: "alfombras",

    name: "Limpieza de alfombras",

    cardDescription:
          "Devolvemos el color y la limpueza a tus alfombras con un tratamiento profesional",

    hero: {
      badge: "🧼 Limpieza profesional de alfombras",
      title: "Devuelve a tu alfombra el aspecto del primer día",
      description:
        "Eliminamos manchas, polvo, ácaros y suciedad profunda para recuperar la higiene y el color de tus alfombras.",

      image: "/images/services/alfombra.jpg",
    },

    benefits: [
      {
        title: "Eliminación de manchas",
        description:
          "Tratamos cada tipo de alfombra con productos específicos para eliminar manchas difíciles.",
      },
      {
        title: "Reducción de ácaros",
        description:
          "Una limpieza profunda ayuda a reducir alérgenos y mejorar la calidad del ambiente.",
      },
      {
        title: "Colores renovados",
        description:
          "La limpieza profesional devuelve luminosidad y mejora el aspecto general de la alfombra.",
      },
      {
        title: "Productos ecológicos",
        description:
          "Utilizamos productos respetuosos con las personas, las mascotas y el medio ambiente.",
      },
    ],

    problems: [
      "Manchas difíciles",
      "Polvo acumulado",
      "Ácaros y alérgenos",
      "Malos olores",
      "Pérdida de color",
    ],

    gallery: [],

    faqs: [
      {
        question: "¿Se pueden limpiar alfombras delicadas?",
        answer:
          "Sí. Adaptamos el tratamiento al tejido y al estado de cada alfombra.",
      },
      {
        question: "¿Elimináis los malos olores?",
        answer:
          "Sí. Neutralizamos los olores provocados por mascotas, humedad o el uso diario.",
      },
      {
        question: "¿Cuánto tarda en secarse?",
        answer:
          "Normalmente entre 4 y 8 horas dependiendo del grosor de la alfombra y de la ventilación.",
      },
    ],
  },

  sillas: {
    slug: "sillas",

    name: "Limpieza de sillas",

    cardDescription:
          "Limpieza profesional para todo tipo de sillas tapizadas, con resultados visibles",

    hero: {
      badge: "🪑 Limpieza profesional de sillas",
      title: "Recupera la limpieza y el aspecto de tus sillas",
      description:
        "Eliminamos manchas, suciedad y malos olores de todo tipo de sillas tapizadas con un tratamiento profesional y respetuoso con los tejidos.",
      image: "/images/services/silla.jpg",
    },

    benefits: [
      {
        title: "Limpieza profunda",
        description:
          "Eliminamos la suciedad acumulada sin dañar el tejido.",
      },
      {
        title: "Adiós a las manchas",
        description:
          "Tratamos las manchas más habituales con productos específicos.",
      },
      {
        title: "Productos ecológicos",
        description:
          "Utilizamos productos seguros para personas y mascotas.",
      },
      {
        title: "Secado rápido",
        description:
          "Reducimos el tiempo de secado gracias a maquinaria profesional.",
      },
    ],

    problems: [
      "Manchas de comida",
      "Suciedad diaria",
      "Malos olores",
      "Tejidos apagados",
      "Polvo acumulado",
    ],

    gallery: [],

    faqs: [
      {
        question: "¿Limpiáis cualquier tipo de silla?",
        answer:
          "Sí. Adaptamos el tratamiento al tipo de tejido y al estado de cada silla.",
      },
      {
        question: "¿Se eliminan las manchas?",
        answer:
          "En la mayoría de los casos sí. Las manchas muy antiguas pueden dejar una ligera marca.",
      },
      {
        question: "¿Cuánto tarda en secarse?",
        answer:
          "Habitualmente entre 4 y 8 horas.",
      },
    ],
  },

 vehiculos: {
    slug: "vehiculos",

    name: "Limpieza de tapicería de vehículos",

    cardDescription:
           "Recupera la tapicería del interior de tu vehículo eliminando manchas y olores",

    hero: {
      badge: "🚗 Limpieza profesional de vehículos",
      title: "Haz que el interior de tu vehículo vuelva a parecer nuevo",
      description:
        "Limpiamos en profundidad la tapicería de coches, furgonetas y otros vehículos eliminando manchas, olores y suciedad incrustada.",
      image: "/images/services/vehiculo.jpg",
    },

    benefits: [
      {
        title: "Eliminación de manchas",
        description:
          "Tratamos las manchas habituales producidas por el uso diario.",
      },
      {
        title: "Neutralización de olores",
        description:
          "Eliminamos olores provocados por tabaco, mascotas o humedad.",
      },
      {
        title: "Interior más saludable",
        description:
          "Reducimos polvo, bacterias y suciedad acumulada.",
      },
      {
        title: "Acabado profesional",
        description:
          "Recuperamos el aspecto del interior respetando cada material.",
      },
    ],

    problems: [
      "Manchas en los asientos",
      "Olor a tabaco",
      "Pelos de mascotas",
      "Suciedad acumulada",
      "Mal aspecto del interior",
    ],

    gallery: [],

    faqs: [
      {
        question: "¿Limpiáis cualquier tipo de vehículo?",
        answer:
          "Sí. Trabajamos con coches, SUV, furgonetas y otros vehículos.",
      },
      {
        question: "¿Elimináis el olor a tabaco?",
        answer:
          "Sí. Aplicamos tratamientos específicos para neutralizar los malos olores.",
      },
      {
        question: "¿Cuánto tarda el servicio?",
        answer:
          "Depende del estado del vehículo, aunque normalmente se completa en pocas horas.",
      },
    ],
  },
};