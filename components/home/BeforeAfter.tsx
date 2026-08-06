import Image from "next/image";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import { siteConfig } from "@/lib/site";

export default function BeforeAfter() {
  return (
    <Section
      id="resultados"
      background="light"
    >
      <Container>

        <SectionTitle
          badge="Antes y Después"
          title="La diferencia habla por sí sola"
          description="Estos espacios están preparados para mostrar trabajos reales realizados por NewAgain. Cuando dispongamos de fotografías propias, bastará con sustituir las imágenes."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          <Card className="overflow-hidden">

            <div className="relative aspect-[4/3]">

              <Image
                src="/images/before-after/antes.jpg"
                alt="Antes de la limpieza"
                fill
                className="object-cover"
              />

            </div>

            <div className="p-8">

              <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
                ANTES
              </span>

              <p className="mt-6 leading-7 text-slate-600">
                Estado inicial de la tapicería antes de aplicar nuestro proceso
                de limpieza profesional.
              </p>

            </div>

          </Card>

          <Card className="overflow-hidden">

            <div className="relative aspect-[4/3]">

              <Image
                src="/images/before-after/despues.jpg"
                alt="Después de la limpieza"
                fill
                className="object-cover"
              />

            </div>

            <div className="p-8">

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                DESPUÉS
              </span>

              <p className="mt-6 leading-7 text-slate-600">
                Resultado obtenido tras el tratamiento realizado por NewAgain,
                recuperando limpieza, higiene y aspecto.
              </p>

            </div>

          </Card>

        </div>

        <div className="mt-16 text-center">

          <Button href={siteConfig.whatsapp}>
            Quiero un resultado como este
          </Button>

        </div>

      </Container>
    </Section>
  );
}