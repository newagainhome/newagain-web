import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";

import { mainNavigation } from "@/lib/navigation";
import { navigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">

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

          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-slate-700 transition hover:text-green-600"
            >
              {item.label}
            </Link>
          ))}

        </nav>

        {/* Botón escritorio */}

        <div className="hidden lg:block">

          <Button href={siteConfig.whatsapp}>
            Solicitar presupuesto GRATIS
          </Button>

        </div>

        {/* Menú móvil */}

        <MobileMenu />

      </div>

    </header>
  );
}