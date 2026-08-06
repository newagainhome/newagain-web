import {
  Leaf,
  ShieldCheck,
  Sparkles,
  Clock3,
  Truck,
  BadgeCheck,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const benefits = [
  {
    icon: <Sparkles size={32} />,
    title: "Resultados profesionales",
    description:
      "Recuperamos el aspecto de tus tapicerías con un acabado profesional.",
  },
  {
    icon: <Leaf size={32} />,
    title: "Productos ecológicos",
    description:
      "Utilizamos productos respetuosos con el medio ambiente y seguros para tu hogar.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Eliminación de ácaros",
    description:
      "Reducimos bacterias, ácaros y alérgenos para conseguir un ambiente más saludable.",
  },
  {
    icon: <Clock3 size={32} />,
    title: "Secado rápido",
    description:
      "Minimizamos el tiempo de secado para que puedas volver a utilizar la tapicería cuanto antes.",
  },
  {
    icon: <Truck size={32} />,
    title: "Servicio a domicilio",
    description:
      "Nos desplazamos hasta tu domicilio con toda la maquinaria necesaria.",
  },
  {
    icon: <BadgeCheck size={32} />,
    title: "Garantía de calidad",
    description:
      "Trabajamos con el máximo cuidado para obtener el mejor resultado posible.",
  },
];

export default function Benefits() {
  return (
    <Section background="light">
      <Container>

        <SectionTitle
          badge="¿Por qué elegir NewAgain?"
          title="Mucho más que una limpieza"
          description="Nuestro objetivo es recuperar tus tapicerías cuidando los tejidos y ofreciendo un servicio cómodo, rápido y profesional."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="p-8"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                {benefit.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {benefit.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {benefit.description}
              </p>
            </Card>
          ))}

        </div>

      </Container>
    </Section>
  );
}