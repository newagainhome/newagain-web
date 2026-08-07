import {
  CheckCircle,
  Clock3,
  Leaf,
  ShieldCheck,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

type Benefit = {
  title: string;
  description: string;
};

type ServiceBenefitsProps = {
  title?: string;
  description?: string;
  benefits: Benefit[];
};

const icons = [
  <CheckCircle key="check" className="h-8 w-8 text-green-600" />,
  <Leaf key="leaf" className="h-8 w-8 text-green-600" />,
  <Clock3 key="clock" className="h-8 w-8 text-green-600" />,
  <ShieldCheck key="shield" className="h-8 w-8 text-green-600" />,
];

export default function ServiceBenefits({
  title = "¿Por qué elegir NewAgain?",
  description = "Trabajamos con maquinaria profesional y productos ecológicos para conseguir resultados visibles desde la primera limpieza.",
  benefits,
}: ServiceBenefitsProps) {
  return (
    <Section>
      <Container>

        <SectionTitle
          badge="Ventajas"
          title={title}
          description={description}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {benefits.map((benefit, index) => (

            <Card
              key={benefit.title}
              className="flex gap-6 p-8"
            >

              <div>
                {icons[index % icons.length]}
              </div>

              <div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {benefit.description}
                </p>

              </div>

            </Card>

          ))}

        </div>

      </Container>
    </Section>
  );
}