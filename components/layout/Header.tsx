import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";

import { navigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur-xl">

      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-6">

        <Link
          href={navigation.home}
          className="flex items-center"
        >
          <Image
            src="/images/logo.png"
            alt="NewAgain"
            width={220}
            height={70}
            priority
            className="h-auto w-36 lg:w-40"
          />
        </Link>

        {/* Menú escritorio */}

        <nav className="hidden items-center gap-10 lg:flex">

          <Link
            href={navigation.home}
            className="font-medium text-slate-700 transition hover:text-green-600"
          >
            Inicio
          </Link>

          <Link
            href={navigation.services}
            className="font-medium text-slate-700 transition hover:text-green-600"
          >
            Servicios
          </Link>

          <Link
            href={navigation.results}
            className="font-medium text-slate-700 transition hover:text-green-600"
          >
            Antes y Después
          </Link>

          <Link
            href={navigation.testimonials}
            className="font-medium text-slate-700 transition hover:text-green-600"
          >
            Opiniones
          </Link>

          <Link
            href={navigation.contact}
            className="font-medium text-slate-700 transition hover:text-green-600"
          >
            Contacto
          </Link>

        </nav>

        {/* Escritorio */}

        <div className="hidden lg:block">

          <Button href={siteConfig.whatsapp}>
            Solicitar presupuesto GRATIS
          </Button>

        </div>

        {/* Móvil */}

        <MobileMenu />

      </div>

    </header>
  );
}