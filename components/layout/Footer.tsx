import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";

import { navigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-4">

          {/* Logo */}

          <div>
            <Link href={navigation.home}>
              <Image
                src="/images/logo.png"
                alt="NewAgain"
                width={220}
                height={70}
                className="mb-6"
              />
            </Link>

            <p className="leading-7 text-slate-400">
              Especialistas en limpieza profesional de sofás, colchones,
              alfombras, sillas y tapicerías de vehículos.
            </p>
          </div>

          {/* Servicios */}

          <div>
            <h3 className="mb-5 text-lg font-bold">
              Servicios
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li><Link href={navigation.services} className="transition hover:text-white">Sofás</Link></li>

              <li><Link href={navigation.services} className="transition hover:text-white">Colchones</Link></li>

              <li><Link href={navigation.services} className="transition hover:text-white">Alfombras</Link></li>

              <li><Link href={navigation.services} className="transition hover:text-white">Sillas</Link></li>

              <li><Link href={navigation.services} className="transition hover:text-white">Tapicería de vehículos</Link></li>

            </ul>
          </div>

          {/* Empresa */}

          <div>
            <h3 className="mb-5 text-lg font-bold">
              Empresa
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li><Link href={navigation.home} className="transition hover:text-white">Inicio</Link></li>

              <li><Link href={navigation.services} className="transition hover:text-white">Servicios</Link></li>

              <li><Link href={navigation.results} className="transition hover:text-white">Antes y Después</Link></li>

              <li><Link href={navigation.testimonials} className="transition hover:text-white">Opiniones</Link></li>

              <li><Link href={navigation.contact} className="transition hover:text-white">Contacto</Link></li>

            </ul>
          </div>

          {/* Contacto */}

          <div>
            <h3 className="mb-5 text-lg font-bold">
              Contacto
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>📍 {siteConfig.location}</li>

              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition hover:text-white"
                >
                  📞 {siteConfig.phone}
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition hover:text-white"
                >
                  ✉️ {siteConfig.email}
                </a>
              </li>

            </ul>

            <div className="mt-8 flex gap-3">

              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-700 px-4 py-2 text-sm transition hover:border-green-500 hover:bg-green-600"
              >
                Instagram
              </a>

              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-700 px-4 py-2 text-sm transition hover:border-green-500 hover:bg-green-600"
              >
                Facebook
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">

          © {new Date().getFullYear()} NewAgain · Todos los derechos reservados.

        </div>

      </Container>
    </footer>
  );
}