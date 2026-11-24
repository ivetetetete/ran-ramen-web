"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { useLanguage } from "@/context/LanguageContext";
import { RESTAURANT_INFO } from "@/lib/menu-data";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t-2 border-tinta-sumi bg-tinta-sumi text-papel-washi">
      {/* Banda superior damero Rojo Ran & Amarillo Caldo */}
      <div className="h-2.5 w-full pattern-checker-terracotta border-b-2 border-tinta-sumi" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10">
          {/* Col 1: Sello del Logo sobre Negro + Bio */}
          <div className="space-y-4 sm:col-span-2 md:col-span-5">
            <div className="flex items-center gap-3.5">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-blanco-arroz bg-blanco-arroz p-1 shrink-0">
                <Image
                  src="/ramen.png"
                  alt="Sello Ran Ramen"
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="leading-none">
                <span className="font-display text-2xl tracking-wider text-blanco-arroz">
                  RAN <span className="text-rojo-ran">RAMEN</span>
                </span>
                <span className="block font-mono text-[11px] font-bold tracking-widest text-amarillo-caldo mt-1">
                  SLURP! ズルズル
                </span>
              </div>
            </div>

            <p className="max-w-sm text-sm text-papel-washi/80 font-medium leading-relaxed">
              {t.footer.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-papel-washi/20 bg-blanco-arroz/5 px-3.5 py-1.5 font-mono text-xs font-bold text-papel-washi hover:border-amarillo-caldo hover:text-amarillo-caldo transition-colors"
              >
                <InstagramIcon className="h-4 w-4 text-rojo-ran" />
                <span>{RESTAURANT_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navegación */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amarillo-caldo">
              {t.footer.navTitle}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm font-bold">
              <li>
                <a
                  href="#estrellas"
                  className="hover:text-amarillo-caldo transition-colors"
                >
                  {t.nav.starDishes}
                </a>
              </li>
              <li>
                <a
                  href="#carta"
                  className="hover:text-amarillo-caldo transition-colors"
                >
                  {t.nav.menu}
                </a>
              </li>
              <li>
                <a
                  href="#opiniones"
                  className="hover:text-amarillo-caldo transition-colors"
                >
                  {t.nav.reviews} (4.6 ★)
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-amarillo-caldo transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Datos del Local */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amarillo-caldo">
              {t.footer.contactTitle}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-rojo-ran mt-0.5 shrink-0" />
                <a
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amarillo-caldo text-papel-washi font-medium transition-colors"
                >
                  {RESTAURANT_INFO.address}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-rojo-ran shrink-0" />
                <a
                  href={RESTAURANT_INFO.phoneHref}
                  className="font-mono font-bold text-papel-washi hover:text-amarillo-caldo transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-papel-washi/75">
                <Clock className="h-4 w-4 text-naranja-fideo shrink-0" />
                <span className="font-mono font-bold">{RESTAURANT_INFO.menuHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t-2 border-papel-washi/15 pt-7 flex flex-col md:flex-row items-center justify-between font-mono text-xs text-papel-washi/70 gap-4 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
          <p>{t.footer.allergenFooter}</p>
        </div>
      </div>
    </footer>
  );
}
