"use client";

import React from "react";
import Image from "next/image";
import { Flame, ArrowUpRight, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { MENU_ITEMS } from "@/lib/menu-data";
import { MenuItem } from "@/types";
import { Reveal } from "@/components/ui/Reveal";

export function StarDishes() {
  const { locale, t, jumpToMenuCategory } = useLanguage();

  const starDishes = MENU_ITEMS.filter((item) => item.isStarDish);

  const getLocalizedName = (item: MenuItem) => {
    if (locale === "ca" && item.nameCa) return item.nameCa;
    if (locale === "en" && item.nameEn) return item.nameEn;
    return item.name;
  };

  const getLocalizedDesc = (item: MenuItem) => {
    if (locale === "ca") return item.descriptionCa;
    if (locale === "en") return item.descriptionEn;
    return item.description;
  };

  const mapCategoryToTab = (cat: MenuItem["category"]) => {
    if (cat === "curry" || cat === "donburi") return "curry-donburi";
    if (cat === "gyoza") return "gyoza";
    if (cat === "tapas") return "tapas";
    return "all";
  };

  return (
    <section
      id="estrellas"
      className="relative py-16 sm:py-24 scroll-mt-20 overflow-hidden"
    >
      {/* Marca de agua Kanji sutil */}
      <div
        className="pointer-events-none select-none absolute top-12 left-4 font-display text-[120px] sm:text-[180px] text-tinta-sumi/[0.04] leading-none z-0"
        aria-hidden="true"
      >
        人気
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-tinta-sumi bg-amarillo-caldo px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-tinta-sumi shadow-[2px_2px_0px_#1C1917]">
              {t.starDishes.eyebrow}
            </span>

            <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight text-tinta-sumi">
              {t.starDishes.title}
            </h2>

            <p className="mt-3 text-base sm:text-[17px] text-tinta-sumi/80 leading-relaxed font-medium">
              {t.starDishes.subtitle}
            </p>
          </div>
        </Reveal>

        {/* 6 Tarjetas de Platos Estrella (Sin letras japonesas en las cards y sin '·') */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {starDishes.map((dish, idx) => (
            <Reveal key={dish.id} delay={idx * 70}>
              <div
                onClick={() => jumpToMenuCategory(mapCategoryToTab(dish.category))}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    jumpToMenuCategory(mapCategoryToTab(dish.category));
                  }
                }}
                className="group card-refined relative h-full flex flex-col justify-between rounded-2xl bg-blanco-arroz p-4 sm:p-5 cursor-pointer text-left"
              >
                <div>
                  {/* Etiqueta superior Space Mono: #CODE + BADGE */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-rojo-ran">
                      <span className="rounded-md border-2 border-tinta-sumi bg-tinta-sumi text-amarillo-caldo px-2 py-0.5">
                        #{dish.code}
                      </span>
                      {dish.isSpicy && (
                        <Flame className="h-3.5 w-3.5 fill-rojo-ran text-rojo-ran" />
                      )}
                      <span>{dish.starBadge ? dish.starBadge[locale] : "ESTRELLA"}</span>
                    </span>
                  </div>

                  {/* Foto del plato con contorno 2px en Tinta Sumi */}
                  {dish.image && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border-2 border-tinta-sumi bg-papel-washi mb-4">
                      <Image
                        src={dish.image}
                        alt={`${dish.code} ${getLocalizedName(dish)}`}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      />
                    </div>
                  )}

                  {/* H3 Zen Kaku 900 + Precio Space Mono */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-sans font-black text-lg sm:text-xl text-tinta-sumi group-hover:text-rojo-ran transition-colors leading-snug">
                      {getLocalizedName(dish)}
                    </h3>

                    <span className="font-mono text-base sm:text-lg font-bold text-tinta-sumi shrink-0 bg-amarillo-caldo px-2.5 py-0.5 rounded-lg border-2 border-tinta-sumi shadow-[2px_2px_0px_#1C1917]">
                      {dish.price}
                    </span>
                  </div>

                  {/* Descripción Zen Kaku 500 */}
                  <p className="mt-2.5 text-sm text-tinta-sumi/80 leading-relaxed font-medium">
                    {getLocalizedDesc(dish)}
                  </p>
                </div>

                {/* Pie de tarjeta */}
                <div className="mt-4 pt-3 border-t-2 border-tinta-sumi/10 flex items-center justify-between font-mono text-xs font-bold text-rojo-ran">
                  <span>{t.starDishes.viewInMenu}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Nota informativa */}
        <Reveal delay={180}>
          <div className="mt-8 inline-flex w-full items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-xl border-2 border-tinta-sumi bg-blanco-arroz px-4 py-2.5 text-xs sm:text-sm font-bold text-tinta-sumi shadow-manga-sm">
              <Info className="h-4 w-4 text-rojo-ran shrink-0" />
              <span>{t.starDishes.allergensNote}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
