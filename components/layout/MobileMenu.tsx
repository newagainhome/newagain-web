"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";

import { navigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Abrir menú"
        onClick={() => setOpen(true)}
        className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
      >
        <Menu size={30} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-white">

          <div className="flex items-center justify-between border-b p-6">

            <h2 className="text-xl font-bold text-slate-900">
              Menú
            </h2>

            <button
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="rounded-xl p-2 hover:bg-slate-100"
            >
              <X size={28} />
            </button>

          </div>

          <nav className="flex flex-col gap-6 p-8 text-xl">

            <Link href={navigation.home} onClick={() => setOpen(false)}>
              Inicio
            </Link>

            <Link href={navigation.services} onClick={() => setOpen(false)}>
              Servicios
            </Link>

            <Link href={navigation.results} onClick={() => setOpen(false)}>
              Antes y Después
            </Link>

            <Link href={navigation.testimonials} onClick={() => setOpen(false)}>
              Opiniones
            </Link>

            <Link href={navigation.contact} onClick={() => setOpen(false)}>
              Contacto
            </Link>

          </nav>

          <div className="p-8">

            <Button href={siteConfig.whatsapp}>
              Solicitar presupuesto GRATIS
            </Button>

          </div>

        </div>
      )}
    </>
  );
}