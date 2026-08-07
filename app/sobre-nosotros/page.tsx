import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import AboutPillars from "@/components/about/AboutPillars";
import Commitment from "@/components/about/Commitment";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import AboutCTA from "@/components/about/AboutCTA";

import { createPageMetadata } from "@/lib/createPageMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "Sobre nosotros",

  description:
    "Conoce NewAgain, especialistas en limpieza profesional de sofás, colchones, alfombras y tapicerías en la Comunidad de Madrid. Descubre nuestra misión, valores y compromiso con la calidad.",

  path: "/sobre-nosotros",

  keywords: [
    "NewAgain",
    "empresa de limpieza de tapicerías Madrid",
    "limpieza profesional Madrid",
    "limpieza de sofás Madrid",
  ],
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <AboutPillars />

      <Commitment />

      <WhyChooseUs />

      <AboutCTA />
    </>
  );
}