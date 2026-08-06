import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Solicita tu presupuesto",
    description:
      "Contacta con nosotros por WhatsApp y envíanos una fotografía de la tapicería.",
  },
  {
    number: "02",
    title: "Valoramos el trabajo",
    description:
      "Analizamos el estado de la tapicería y te enviamos un presupuesto sin compromiso.",
  },
  {
    number: "03",
    title: "Realizamos la limpieza",
    description:
      "Nos desplazamos hasta tu domicilio con maquinaria profesional y productos ecológicos.",
  },
  {
    number: "04",
    title: "Disfruta del resultado",
    description:
      "Recupera una tapicería limpia, higienizada y con un aspecto renovado.",
  },
];

export default function Process() {
  return (
    <Section
      id="proceso"
      background="light"
    >
      <Container>

        <SectionTitle
          badge="Nuestro proceso"
          title="Así de sencillo es recuperar tus tapicerías"
          description="Trabajamos de forma rápida, cómoda y transparente para ofrecerte el mejor resultado."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (

            <Card
              key={step.number}
              className="p-8 text-center"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">

                {step.number}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
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