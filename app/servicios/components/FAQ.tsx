import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const faqs = [
  {
    question: "¿Cuánto tarda la limpieza de una tapicería?",
    answer:
      "Depende del tipo de trabajo, pero la mayoría de los servicios se completan en una o dos horas.",
  },
  {
    question: "¿Cuánto tarda en secarse?",
    answer:
      "Normalmente entre 4 y 8 horas, dependiendo del tejido, la temperatura y la ventilación de la estancia.",
  },
  {
    question: "¿Utilizáis productos seguros para niños y mascotas?",
    answer:
      "Sí. Trabajamos con productos profesionales respetuosos con los tejidos y seguros para hogares con niños y animales.",
  },
  {
    question: "¿Tengo que desplazar el sofá o el colchón?",
    answer:
      "No. Realizamos el servicio en tu domicilio y nos adaptamos a la ubicación de la tapicería.",
  },
  {
    question: "¿El presupuesto tiene algún coste?",
    answer:
      "No. El presupuesto es totalmente gratuito y sin ningún compromiso.",
  },
  {
    question: "¿Cómo puedo solicitar un presupuesto?",
    answer:
      "Solo tienes que enviarnos una fotografía por WhatsApp y te responderemos lo antes posible.",
  },
];

export default function FAQ() {
  return (
    <Section background="light">
      <Container>

        <SectionTitle
          badge="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          description="Estas son algunas de las preguntas que más recibimos antes de realizar un servicio."
        />

        <div className="mt-16 grid gap-6">

          {faqs.map((faq) => (
            <Card
              key={faq.question}
              className="p-8"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {faq.question}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {faq.answer}
              </p>
            </Card>
          ))}

        </div>

      </Container>
    </Section>
  );
}