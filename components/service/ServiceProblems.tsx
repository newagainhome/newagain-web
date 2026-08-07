import {
  AlertTriangle,
  Bug,
  Droplets,
  ShieldAlert,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

type ServiceProblemsProps = {
  problems: string[];
};

const icons = [
  AlertTriangle,
  Droplets,
  Bug,
  ShieldAlert,
];

export default function ServiceProblems({
  problems,
}: ServiceProblemsProps) {
  return (
    <Section background="light">

      <Container>

        <SectionTitle
          badge="Problemas que solucionamos"
          title="¿Te suena alguna de estas situaciones?"
          description="Nuestro servicio está pensado para eliminar los problemas más habituales de las tapicerías."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {problems.map((problem, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Card
                key={problem}
                className="p-8 text-center"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">

                  <Icon className="h-8 w-8 text-red-600" />

                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {problem}
                </h3>

              </Card>
            );
          })}

        </div>

      </Container>

    </Section>
  );
}