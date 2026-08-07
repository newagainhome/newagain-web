import Image from "next/image";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import { servicesContent } from "@/lib/service-content";

export default function ServicesGrid() {
  const services = Object.values(servicesContent);

  return (
    <Section>

      <Container>

        <SectionTitle
          badge="Servicios"
          title="Especialistas en limpieza de tapicerías"
          description="Selecciona el servicio que necesitas y descubre cómo podemos ayudarte."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <Card
              key={service.slug}
              className="group overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">

                <Image
                  src={service.hero.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {service.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.cardDescription}
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