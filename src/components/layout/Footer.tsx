import React from "react";
import Link from "next/link";
import { Flame, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-[#1c1917] text-stone-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          <div className="space-y-4 sm:col-span-2 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-600/20 text-red-500 border border-red-500/30">
                <Flame className="h-4 w-4" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                RAN RAMEN
              </span>
            </div>
            <p className="max-w-sm text-sm text-stone-400 leading-relaxed">
              Auténtica cocina japonesa en Vilanova i la Geltrú. Especialistas en
              currys caseros, donburis, gyozas, opciones 100% veganas, mochis artesanos y bebidas originales de Japón.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/ranramen_vilanova"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-stone-800 bg-stone-900/60 px-3.5 py-1.5 text-xs text-stone-300 hover:border-red-500/50 hover:text-red-400 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4 text-red-500" />
                <span>@ran_ramenvilanova</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Navegación
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/#menu" className="hover:text-red-400 transition-colors">
                  Nuestra Carta
                </Link>
              </li>
              <li>
                <Link href="/#resenas" className="hover:text-red-400 transition-colors">
                  Reseñas en Google (4.6 ★)
                </Link>
              </li>
              <li>
                <Link href="/#horarios" className="hover:text-red-400 transition-colors">
                  Horarios y Comida para Llevar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Contacto y Pedidos
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                <a href="https://maps.app.goo.gl/pmtvdvZLbGh8yiD19" target="_blank" rel="noreferrer" className="hover:text-red-400 font-mono font-bold text-stone-200">
                  Rambla de la Pau, 6, 08800 Vilanova i la Geltrú, Barcelona
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-red-500 shrink-0" />
                <a href="tel:931546287" className="hover:text-red-400 font-mono font-bold text-stone-200">
                  931 546 287
                </a>
              </li>
              <li className="text-xs text-stone-500 pt-1">
                Horario: 12:30H - 16:00H | 20:00H - 23:00H
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-800/80 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} Ran Ramen Soup. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <span className="text-stone-500">
              Carta e información de alérgenos a disposición de los clientes.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
