import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { siteConfig } from "@/lib/site";

export default function CallToAction() {
  return (
    <Section
      id="contacto"
      background="gradient"
    >
      <Container>

        <div className="mx-auto max-w-4xl rounded-[40px] bg-slate-900 px-8 py-16 text-center text-white shadow-2xl md:px-16">

          <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
            ¿Listo para devolver la vida a tus tapicerías?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-slate-300">
            Escríbenos por WhatsApp y recibe un presupuesto gratuito y sin
            compromiso. Estaremos encantados de ayudarte.
          </p>

          <div className="mt-10">

            <Button href={siteConfig.whatsapp}>
              Solicitar presupuesto GRATIS
            </Button>

          </div>

        </div>

      </Container>
    </Section>
  );
}