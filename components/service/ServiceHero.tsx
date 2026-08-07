import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { siteConfig } from "@/lib/site";

type ServiceHeroProps = {
  badge: string;
  title: string;
  description: string;
  image: string;
};

export default function ServiceHero({
  badge,
  title,
  description,
  image,
}: ServiceHeroProps) {
  return (
    <Section background="gradient" className="relative overflow-hidden">

      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-green-200/40 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2">

        <div>

          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            {badge}
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            {title}
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
            {description}
          </p>

          <div className="mt-10">

            <Button href={siteConfig.whatsapp}>
              Solicitar presupuesto GRATIS
            </Button>

          </div>

        </div>

        <div className="relative">

          <Image
            src={image}
            alt={title}
            width={900}
            height={700}
            className="h-auto w-full rounded-[36px] object-cover shadow-2xl"
            priority
          />

        </div>

      </Container>

    </Section>
  );
}