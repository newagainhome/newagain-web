import {
  BadgeCheck,
  MessageCircle,
  Shield,
  Truck,
  Sparkles,
  ThumbsUp,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Experiencia profesional",
    description:
      "Aplicamos técnicas y maquinaria profesional para obtener resultados visibles desde la primera limpieza.",
  },
  {
    icon: MessageCircle,
    title: "Presupuesto sin compromiso",
    description:
      "Solo tienes que enviarnos unas fotografías por WhatsApp y te responderemos rápidamente.",
  },
  {
    icon: Shield,
    title: "Productos seguros",
    description:
      "Trabajamos con productos respetuosos con niños, mascotas y todo tipo de tejidos.",
  },
  {
    icon: Truck,
    title: "Nos desplazamos a tu domicilio",
    description:
      "Realizamos el servicio directamente en tu hogar para tu mayor comodidad.",
  },
  {
    icon: Sparkles,
    title: "Resultados visibles",
    description:
      "Recuperamos el aspecto, la higiene y la frescura de tus tapicerías.",
  },
  {
    icon: ThumbsUp,
    title: "Atención cercana",
    description:
      "Queremos que todo el proceso sea sencillo, transparente y con un trato totalmente personalizado.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section background="light">
      <Container>

        <SectionTitle
          badge="¿Por qué elegir NewAgain?"
          title="La tranquilidad de dejar tus tapicerías en buenas manos"
          description="Cuidamos cada detalle para que la experiencia sea tan buena como el resultado."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <Card
                key={reason.title}
                className="p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">

                  <Icon className="h-7 w-7 text-green-600" />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {reason.description}
                </p>

              </Card>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}