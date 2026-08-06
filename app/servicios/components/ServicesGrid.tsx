import Image from "next/image";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import { services } from "@/lib/services";

export default function ServicesGrid() {
  return (
    <Section background="white">
      <Container>
        <SectionTitle
          badge="Nuestros servicios"
          title="Todo lo que podemos recuperar"
          description="Selecciona el servicio que mejor se adapte a lo que necesitas. Cada uno dispone de su propia página con información detallada."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.slug}
              className="group overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

               <div className="mt-8">
  <Button href={`/servicios/${service.slug}`}>
    Más información
  </Button>
</div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}