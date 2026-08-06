import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { siteConfig } from "@/lib/site";

export default function CallToAction() {
  return (
    <Section background="gradient">
      <Container>

        <div className="mx-auto max-w-5xl rounded-[40px] bg-slate-900 px-8 py-16 text-center text-white shadow-2xl md:px-16">

          <span className="inline-flex rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-green-300">
            Presupuesto gratuito
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            ¿Preparado para recuperar tus tapicerías?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-300">
            Envíanos una fotografía por WhatsApp y te prepararemos un
            presupuesto personalizado, totalmente gratuito y sin compromiso.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Button href={siteConfig.whatsapp}>
              Solicitar presupuesto GRATIS
            </Button>

            <Button
              href="/"
              variant="secondary"
            >
              Volver al inicio
            </Button>

          </div>

        </div>

      </Container>
    </Section>
  );
}