import {
  Camera,
  ClipboardCheck,
  Truck,
  Sparkles,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    icon: <Camera size={30} />,
    title: "1. Envíanos una fotografía",
    description:
      "Haz una foto de la tapicería que quieres limpiar y envíanosla por WhatsApp.",
  },
  {
    icon: <ClipboardCheck size={30} />,
    title: "2. Recibe tu presupuesto",
    description:
      "Valoramos el trabajo y te enviamos un presupuesto gratuito y sin compromiso.",
  },
  {
    icon: <Truck size={30} />,
    title: "3. Nos desplazamos",
    description:
      "Acudimos a tu domicilio con maquinaria profesional y productos ecológicos.",
  },
  {
    icon: <Sparkles size={30} />,
    title: "4. Disfruta del resultado",
    description:
      "Recupera una tapicería limpia, higienizada y con un aspecto renovado.",
  },
];

export default function Process() {
  return (
    <Section background="white">
      <Container>

        <SectionTitle
          badge="Nuestro proceso"
          title="Así de sencillo es contratar el servicio"
          description="En solo cuatro pasos podrás volver a disfrutar de una tapicería como nueva."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step) => (
            <Card
              key={step.title}
              className="p-8 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                {step.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {step.description}
              </p>
            </Card>
          ))}

        </div>

      </Container>
    </Section>
  );
}