import {
  Leaf,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Clock3,
  Award,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const commitments = [
  {
    icon: Leaf,
    title: "Productos ecológicos",
    description:
      "Utilizamos productos respetuosos con las personas, las mascotas y el medio ambiente.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad garantizada",
    description:
      "Trabajamos con maquinaria profesional y procesos diseñados para obtener los mejores resultados.",
  },
  {
    icon: HeartHandshake,
    title: "Atención personalizada",
    description:
      "Cada cliente y cada tapicería son diferentes. Adaptamos el servicio a cada necesidad.",
  },
  {
    icon: Sparkles,
    title: "Resultados visibles",
    description:
      "Nuestro objetivo es recuperar el aspecto, la higiene y la frescura de cada superficie tratada.",
  },
  {
    icon: Clock3,
    title: "Puntualidad y compromiso",
    description:
      "Respetamos el tiempo de nuestros clientes y cumplimos los horarios acordados.",
  },
  {
    icon: Award,
    title: "Profesionalidad",
    description:
      "Cuidamos cada detalle para ofrecer una experiencia de calidad desde el primer contacto.",
  },
];

export default function Commitment() {
  return (
    <Section>
      <Container>

        <SectionTitle
          badge="Nuestro compromiso"
          title="Trabajamos para ofrecer mucho más que una limpieza"
          description="Queremos que cada cliente disfrute de un servicio profesional, transparente y de confianza."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {commitments.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">

                  <Icon className="h-7 w-7 text-green-600" />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

              </Card>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}