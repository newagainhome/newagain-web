import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <Section background="gradient" className="relative overflow-hidden">

      {/* Fondo decorativo */}

      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-green-200/40 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2">

        {/* Texto */}

        <div>

          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-green-700">
            Servicios profesionales
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Recuperamos cualquier tipo de
            <span className="text-green-600">
              {" "}tapicería
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
            Sofás, colchones, alfombras, sillas, vehículos y mucho más.
            Utilizamos maquinaria profesional y productos ecológicos para
            conseguir resultados visibles desde la primera intervención.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button href={siteConfig.whatsapp}>
              Solicitar presupuesto GRATIS
            </Button>

          </div>

          <div className="mt-14 grid grid-cols-3 gap-8">

            <div>
              <p className="text-4xl font-extrabold text-green-600">
                6
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Tipos de servicio
              </p>
            </div>

            <div>
              <p className="text-4xl font-extrabold text-green-600">
                Eco
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Productos ecológicos
              </p>
            </div>

            <div>
              <p className="text-4xl font-extrabold text-green-600">
                ★★★★★
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Atención personalizada
              </p>
            </div>

          </div>

        </div>

        {/* Imagen */}

        <div className="relative">

          <Image
            src="/images/hero/placeholder.jpg"
            alt="Servicios de limpieza NewAgain"
            width={900}
            height={700}
            priority
            className="h-auto w-full rounded-[36px] object-cover shadow-2xl"
          />

          <div className="absolute -bottom-8 -left-8 rounded-3xl bg-white p-6 shadow-xl">

            <p className="font-bold text-green-600">
              ✔ Presupuesto gratuito
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Sin compromiso
            </p>

          </div>

          <div className="absolute -top-6 -right-6 rounded-3xl bg-green-600 p-6 text-white shadow-xl">

            <p className="text-3xl">
              🌿
            </p>

            <p className="mt-2 text-sm font-medium">
              Limpieza ecológica
            </p>

          </div>

        </div>

      </Container>

    </Section>
  );
}