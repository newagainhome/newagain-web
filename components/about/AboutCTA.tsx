import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { siteConfig } from "@/lib/site";

export default function AboutCTA() {
  return (
    <Section background="gradient">

      <Container>

        <div className="mx-auto max-w-4xl rounded-[40px] bg-slate-900 px-10 py-20 text-center text-white shadow-2xl">

          <span className="inline-flex rounded-full bg-green-600 px-4 py-2 text-sm font-semibold">
            🌿 Recupera la vida de tus tapicerías
          </span>

          <h2 className="mt-8 text-4xl font-extrabold lg:text-5xl">
            ¿Preparado para que todo vuelva a parecer nuevo?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            En NewAgain trabajamos cada día para que nuestros clientes vuelvan
            a disfrutar de sus sofás, colchones, alfombras y tapicerías con la
            tranquilidad de estar en manos de profesionales.
          </p>

          <div className="mt-12">

            <Button href={siteConfig.whatsapp}>
              Solicitar presupuesto gratuito
            </Button>

          </div>

        </div>

      </Container>

    </Section>
  );
}