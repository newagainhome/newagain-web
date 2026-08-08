import {
  ShieldCheck,
  Sparkles,
  Leaf,
  Clock3,
  Home,
  BadgeEuro,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    icon: ShieldCheck,
    title: "Resultados profesionales",
    description:
      "Utilizamos maquinaria profesional y técnicas específicas para cada tipo de tejido, consiguiendo una limpieza profunda y eficaz.",
  },
  {
    icon: Leaf,
    title: "Productos ecológicos",
    description:
      "Trabajamos con productos seguros para niños, mascotas y respetuosos con el medio ambiente.",
  },
  {
    icon: Sparkles,
    title: "Eliminación de manchas y olores",
    description:
      "Tratamos manchas difíciles, malos olores, ácaros y suciedad incrustada devolviendo frescura a cada tapicería.",
  },
  {
    icon: Clock3,
    title: "Secado rápido",
    description:
      "Nuestra maquinaria reduce considerablemente el tiempo de secado para que puedas volver a utilizar el tejido cuanto antes.",
  },
  {
    icon: Home,
    title: "Servicio a domicilio",
    description:
      "Nos desplazamos por toda la Comunidad de Madrid para que no tengas que mover sofás, colchones o alfombras.",
  },
  {
    icon: BadgeEuro,
    title: "Presupuesto gratuito",
    description:
      "Te asesoramos sin compromiso y te ofrecemos un presupuesto claro antes de comenzar cualquier trabajo.",
  },
];

export default function WhyChooseNewAgain() {
  return (
    <Section>
      <Container>
        <SectionTitle
          badge="⭐ ¿Por qué elegirnos?"
          title="La diferencia entre limpiar y limpiar profesionalmente"
          description="Cada trabajo se realiza con maquinaria profesional, productos específicos y un proceso diseñado para obtener el mejor resultado posible."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                  <Icon className="h-7 w-7 text-green-700" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}