import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { siteConfig } from "@/lib/site";

export default function AboutHero() {
  return (
    <Section background="gradient">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            🌿 Conoce NewAgain
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Mucho más que una empresa de limpieza
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            En NewAgain creemos que cada sofá, colchón o tapicería merece una
            segunda oportunidad. Nuestro objetivo es ayudarte a recuperar la
            limpieza, la higiene y el confort de tu hogar mediante un servicio
            profesional, cercano y respetuoso con el medio ambiente.
          </p>

          <div className="mt-12 flex justify-center">

            <Button href={siteConfig.whatsapp}>
              Solicitar presupuesto gratuito
            </Button>

          </div>

        </div>

      </Container>
    </Section>
  );
}