import {
  Leaf,
  ShieldCheck,
  Sparkles,
  Clock3,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const benefits = [
  {
    icon: <Sparkles size={34} />,
    title: "Resultados profesionales",
    description:
      "Recuperamos el aspecto original de tus tapicerías eliminando manchas, suciedad y malos olores.",
  },
  {
    icon: <Leaf size={34} />,
    title: "Productos ecológicos",
    description:
      "Utilizamos productos respetuosos con el medio ambiente y seguros para niños y mascotas.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Limpieza e higienización",
    description:
      "Eliminamos ácaros, bacterias y alérgenos para conseguir un entorno más saludable.",
  },
  {
    icon: <Clock3 size={34} />,
    title: "Servicio rápido",
    description:
      "Trabajamos de forma eficiente para reducir el tiempo de secado y las molestias en tu hogar.",
  },
];

export default function Benefits() {
  return (
    <Section
      id="beneficios"
      background="white"
    >
      <Container>

        <SectionTitle
          badge="¿Por qué elegir NewAgain?"
          title="Mucho más que una limpieza"
          description="Cada servicio está pensado para devolver la vida a tus tapicerías con la máxima calidad y seguridad."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit) => (

            <Card
              key={benefit.title}
              className="p-8 text-center"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">

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