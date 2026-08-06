import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <Section background="gradient" className="relative overflow-hidden">

      {/* Fondos decorativos */}

      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-green-200/40 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl"></div>

      <Container className="relative grid items-center gap-16 lg:grid-cols-2">

        {/* Texto */}

        <div>

          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            🌿 Limpieza profesional · Productos ecológicos
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Recupera el aspecto de tus
            <span className="text-green-600">
              {" "}sofás, colchones y tapicerías
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
            Eliminamos manchas, olores y suciedad profunda mediante maquinaria
            profesional y productos ecológicos para devolver una nueva vida a
            tus tapicerías.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button href={siteConfig.whatsapp}>
              Solicitar presupuesto GRATIS
            </Button>

            <Button
              href="/servicios"
              variant="secondary"
            >
              Ver servicios
            </Button>

          </div>

          <div className="mt-14 grid grid-cols-3 gap-8">

            <div>

              <p className="text-4xl font-extrabold text-green-600">
                500+
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Tapicerías recuperadas
              </p>

            </div>

            <div>

              <p className="text-4xl font-extrabold text-green-600">
                98%
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Clientes satisfechos
              </p>

            </div>

            <div>

              <p className="text-4xl font-extrabold text-green-600">
                ★★★★★
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Valoración media
              </p>

            </div>

          </div>

        </div>

        {/* Imagen */}

        <div className="relative">

          <Image
            src="/images/hero/placeholder.jpg"
            alt="Limpieza profesional de tapicerías"
            width={900}
            height={700}
            priority
            className="h-auto w-full rounded-[36px] object-cover shadow-2xl"
          />

          <div className="absolute -bottom-8 -left-8 rounded-3xl bg-white p-6 shadow-xl">

            <p className="font-bold text-green-600">
              ✔ Resultado profesional
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Eliminamos manchas y olores
            </p>

          </div>

          <div className="absolute -right-6 -top-6 rounded-3xl bg-green-600 p-6 text-white shadow-xl">

            <p className="text-3xl">
              🌿
            </p>

            <p className="mt-2 text-sm font-medium">
              Productos ecológicos
            </p>

          </div>

        </div>

      </Container>

    </Section>
  );
}