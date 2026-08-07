export type ServiceContent = {
  slug: string;
  name: string;
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
        question: "¿Los productos son seguros para mascotas y niños?",
        answer:
          "Sí. Trabajamos con productos profesionales y ecológicos adecuados para hogares con niños y mascotas.",
      },
    ],
  },
};