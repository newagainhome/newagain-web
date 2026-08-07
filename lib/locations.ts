export type Location = {
  slug: string;

  name: string;

  type: "city" | "municipality" | "district";

  province: string;

  autonomousCommunity: string;

  featured: boolean;

  nearby: string[];

  population?: number;

  postalCodes?: string[];

  latitude?: number;

  longitude?: number;
};

export const locations: Location[] = [
  {
    slug: "madrid",
    name: "Madrid",
    type: "city",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: [],
    population: 3334730,
  },

  {
    slug: "mostoles",
    name: "Móstoles",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["alcorcon", "fuenlabrada"],
    population: 214000,
  },

  {
    slug: "alcala-de-henares",
    name: "Alcalá de Henares",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["torrejon-de-ardoz", "mejorada-del-campo"],
    population: 198000,
  },

  {
    slug: "fuenlabrada",
    name: "Fuenlabrada",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["leganes", "mostoles", "getafe"],
    population: 194000,
  },

  {
    slug: "leganes",
    name: "Leganés",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["getafe", "fuenlabrada", "alcorcon"],
    population: 191000,
  },

  {
    slug: "getafe",
    name: "Getafe",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["leganes", "parla", "pinto"],
    population: 186000,
  },

  {
    slug: "alcorcon",
    name: "Alcorcón",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["mostoles", "leganes"],
    population: 172000,
  },

  {
    slug: "torrejon-de-ardoz",
    name: "Torrejón de Ardoz",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["alcala-de-henares", "coslada"],
    population: 138000,
  },

  {
    slug: "parla",
    name: "Parla",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["getafe", "valdemoro"],
    population: 133000,
  },

  {
    slug: "alcobendas",
    name: "Alcobendas",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["san-sebastian-de-los-reyes"],
    population: 119000,
  },

  {
    slug: "san-sebastian-de-los-reyes",
    name: "San Sebastián de los Reyes",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["alcobendas"],
    population: 95000,
  },

  {
    slug: "rivas-vaciamadrid",
    name: "Rivas-Vaciamadrid",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["coslada", "mejorada-del-campo"],
    population: 102000,
  },

  {
    slug: "pozuelo-de-alarcon",
    name: "Pozuelo de Alarcón",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["majadahonda", "madrid"],
    population: 89000,
  },

  {
    slug: "las-rozas",
    name: "Las Rozas",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["majadahonda", "torrelodones"],
    population: 96000,
  },

  {
    slug: "majadahonda",
    name: "Majadahonda",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["las-rozas", "pozuelo-de-alarcon"],
    population: 72000,
  },

  {
    slug: "coslada",
    name: "Coslada",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["san-fernando-de-henares", "torrejon-de-ardoz"],
    population: 82000,
  },

  {
    slug: "valdemoro",
    name: "Valdemoro",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["parla", "pinto"],
    population: 81000,
  },

  {
    slug: "pinto",
    name: "Pinto",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["getafe", "valdemoro"],
    population: 56000,
  },

  {
    slug: "collado-villalba",
    name: "Collado Villalba",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["galapagar", "alpedrete"],
    population: 66000,
  },

  {
    slug: "aranjuez",
    name: "Aranjuez",
    type: "municipality",
    province: "Madrid",
    autonomousCommunity: "Comunidad de Madrid",
    featured: true,
    nearby: ["ciempozuelos", "ontigola"],
    population: 61000,
  },
];