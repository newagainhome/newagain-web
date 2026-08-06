import { Star } from "lucide-react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const testimonials = [
  {
    name: "María G.",
    location: "Málaga",
    text: "El sofá parecía nuevo. Eliminaron unas manchas que pensábamos que eran imposibles de quitar. Un trabajo excelente.",
  },
  {
    name: "Carlos R.",
    location: "Fuengirola",
    text: "Muy profesionales y puntuales. El colchón quedó impecable y además desapareció el olor que tenía desde hacía tiempo.",
  },
  {
    name: "Laura P.",
    location: "Benalmádena",
    text: "El interior del coche ha quedado increíble. Sin duda volveré a contratar el servicio.",
  },
];

export default function Testimonials() {
  return (
    <Section
      id="opiniones"
      background="white"
    >
      <Container>

        <SectionTitle
          badge="Opiniones"
          title="Nuestros clientes hablan por nosotros"
          description="La satisfacción de nuestros clientes es nuestra mejor carta de presentación."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((testimonial) => (

            <Card
              key={testimonial.name}
              className="p-8"
            >

              <div className="mb-6 flex gap-1 text-yellow-400">

                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    fill="currentColor"
                  />
                ))}

              </div>

              <p className="leading-8 text-slate-600">
                "{testimonial.text}"
              </p>

              <div className="mt-8 border-t border-slate-200 pt-6">

                <p className="font-bold text-slate-900">
                  {testimonial.name}
                </p>

                <p className="text-sm text-slate-500">
                  {testimonial.location}
                </p>

              </div>

            </Card>

          ))}

        </div>

      </Container>
    </Section>
  );
}