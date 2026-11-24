"use client";

import React from "react";
import { ArrowRight, BookOpen, Phone, UtensilsCrossed, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RESTAURANT_INFO } from "@/lib/menu-data";
import { Reveal } from "@/components/ui/Reveal";

export function MenuButtons() {
  const { t, jumpToMenuCategory } = useLanguage();

  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          {/* Panel Rojo Ran con trama screentone y sombra dura 8px */}
          <div className="relative rounded-3xl border-2 border-tinta-sumi bg-screentone-red text-blanco-arroz p-6 sm:p-10 md:p-12 shadow-manga-xl overflow-hidden">
            {/* Kanji decorativo de fondo */}
            <div
              className="pointer-events-none select-none absolute -bottom-8 -right-4 font-display text-[140px] sm:text-[200px] text-tinta-sumi/15 leading-none"
              aria-hidden="true"
            >
              品書
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b-2 border-tinta-sumi/30">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-tinta-sumi bg-tinta-sumi px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-amarillo-caldo">
                  {t.menuRedirect.eyebrow}
                </span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl tracking-wide text-blanco-arroz drop-shadow-[3px_3px_0px_#1C1917]">
                  {t.menuRedirect.title}
                </h2>
                <p className="mt-2.5 text-sm sm:text-base text-blanco-arroz font-medium leading-relaxed">
                  {t.menuRedirect.subtitle}
                </p>
              </div>

              {/* Botones directos con estética Manga */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => jumpToMenuCategory("all", "interactive")}
                  className="inline-flex items-center gap-2 rounded-xl bg-amarillo-caldo hover:bg-naranja-fideo text-tinta-sumi font-sans font-black text-xs sm:text-sm px-4 sm:px-5 py-3 btn-manga cursor-pointer"
                >
                  <UtensilsCrossed className="h-4 w-4" />
                  <span>{t.menuRedirect.viewFullCarteBtn}</span>
                </button>

                {/* Carta Original -> Abre el PDF oficial en otra pestaña */}
                <a
                  href="/menu-carta-oficial.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blanco-arroz hover:bg-papel-washi text-tinta-sumi font-sans font-black text-xs sm:text-sm px-4 sm:px-5 py-3 btn-manga cursor-pointer"
                >
                  <BookOpen className="h-4 w-4 text-rojo-ran" />
                  <span>{t.menuRedirect.openOfficialBoardBtn}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-rojo-ran" />
                </a>
              </div>
            </div>

            {/* 4 Tarjetas de Categoría con códigos Space Mono */}
            <div className="relative z-10 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.menuRedirect.categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => jumpToMenuCategory(cat.id, "interactive")}
                  className="group text-left rounded-2xl bg-blanco-arroz hover:bg-papel-washi text-tinta-sumi p-5 card-refined flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center rounded-lg border-2 border-tinta-sumi bg-amarillo-caldo px-2.5 py-0.5 font-mono text-xs font-bold text-tinta-sumi shadow-[2px_2px_0px_#1C1917]">
                        #{cat.codeRange}
                      </span>
                      <span className="font-mono text-[11px] font-bold text-tinta-sumi/70">
                        {cat.count}
                      </span>
                    </div>

                    <h3 className="font-sans text-base sm:text-lg font-black text-tinta-sumi group-hover:text-rojo-ran transition-colors">
                      {cat.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-tinta-sumi/80 font-medium leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t-2 border-tinta-sumi/10 flex items-center justify-between font-mono text-xs font-bold text-rojo-ran">
                    <span>{t.menuRedirect.viewFullCarteBtn}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </button>
              ))}
            </div>

            {/* Banda inferior de llamada rápida */}
            <div className="relative z-10 mt-6 pt-5 border-t-2 border-tinta-sumi/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
              <span className="text-blanco-arroz font-bold text-center sm:text-left">
                🍜 <strong>¡Itadakimasu!</strong> {RESTAURANT_INFO.name} —{" "}
                {RESTAURANT_INFO.address}
              </span>
              <a
                href={RESTAURANT_INFO.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-tinta-sumi bg-tinta-sumi hover:bg-amarillo-caldo text-amarillo-caldo hover:text-tinta-sumi px-4 py-1.5 font-mono font-bold text-xs shadow-[2px_2px_0px_#1C1917] transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>
                  {t.menuRedirect.callTakeawayBtn}: {RESTAURANT_INFO.phone}
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
