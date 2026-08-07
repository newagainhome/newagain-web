import {
  Target,
  Eye,
  Heart,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const pillars = [
  {
    icon: Target,
    title: "Nuestra misión",
    description:
      "Devolver una nueva vida a sofás, colchones, alfombras y tapicerías mediante una limpieza profesional que combine calidad, confianza y respeto por el medio ambiente.",
  },
  {
    icon: Eye,
    title: "Nuestra visión",
    description:
      "Convertirnos en la empresa de referencia en limpieza de tapicerías, ofreciendo un servicio excelente y construyendo relaciones duraderas con nuestros clientes.",
  },
  {
    icon: Heart,
    title: "Nuestros valores",
    description:
      "Honestidad, cercanía, profesionalidad, sostenibilidad y compromiso son los principios que guían cada trabajo que realizamos.",
  },
];

export default function AboutPillars() {
  return (
    <Section background="light">

      <Container>

        <SectionTitle
          badge="Nuestra filosofía"
          title="Los pilares que definen NewAgain"
          description="Creemos que un buen servicio empieza mucho antes de realizar la limpieza."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <Card
                key={pillar.title}
                className="p-8 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">

                  <Icon className="h-8 w-8 text-green-600" />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {pillar.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {pillar.description}
                </p>

              </Card>
            );
          })}

        </div>

      </Container>

    </Section>
  );
}