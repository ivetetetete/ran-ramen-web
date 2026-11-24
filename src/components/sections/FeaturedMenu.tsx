"use client";

import React from "react";
import Image from "next/image";
import {
  Flame,
  Leaf,
  BookOpen,
  LayoutGrid,
  ExternalLink,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { MENU_ITEMS } from "@/lib/menu-data";
import { MenuItem } from "@/types";
import { Reveal } from "@/components/ui/Reveal";

const ALLERGEN_ICONS: Record<string, string> = {
  gluten: "🌾",
  sesame: "⚪",
  fish: "🐟",
  mollusks: "🦐",
  soy: "🫘",
  spicy: "🌶️",
  egg: "🥚",
  peanuts: "🥜",
};

export function FeaturedMenu() {
  const {
    locale,
    t,
    activeMenuTab: activeTab,
    setActiveMenuTab: setActiveTab,
    activeMenuView: viewMode,
    setActiveMenuView: setViewMode,
  } = useLanguage();

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "curry-donburi")
      return item.category === "curry" || item.category === "donburi";
    if (activeTab === "gyoza") return item.category === "gyoza";
    if (activeTab === "tapas") return item.category === "tapas";
    if (activeTab === "postres-bebidas")
      return item.category === "postres" || item.category === "bebidas";
    if (activeTab === "vegano") return item.isVegan === true;
    return true;
  });

  const getLocalizedName = (item: MenuItem) => {
    if (locale === "ca" && item.nameCa) return item.nameCa;
    if (locale === "en" && item.nameEn) return item.nameEn;
    return item.name;
  };

  const tabs = [
    { id: "all", label: t.menuBoard.tabs.all },
    { id: "curry-donburi", label: t.menuBoard.tabs.curryDonburi },
    { id: "gyoza", label: t.menuBoard.tabs.gyoza },
    { id: "tapas", label: t.menuBoard.tabs.tapas },
    { id: "postres-bebidas", label: t.menuBoard.tabs.postresBebidas },
    { id: "vegano", label: t.menuBoard.tabs.vegan },
  ];

  return (
    <section
      id="carta"
      className="relative py-16 sm:py-24 scroll-mt-16 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-tinta-sumi bg-amarillo-caldo px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-tinta-sumi shadow-[2px_2px_0px_#1C1917]">
              {t.menuBoard.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight text-tinta-sumi">
              {t.menuBoard.title}
            </h2>
            <p className="mt-3 text-base sm:text-[17px] text-tinta-sumi/80 leading-relaxed font-medium">
              {t.menuBoard.subtitle}
            </p>

            {/* Selector de Vista: Tarjetas Interactivas vs Abrir PDF Carta Original en otra página */}
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-1.5 rounded-2xl border-2 border-tinta-sumi bg-blanco-arroz p-1.5 shadow-manga-sm">
              <button
                type="button"
                onClick={() => setViewMode("interactive")}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  viewMode === "interactive"
                    ? "bg-rojo-ran text-blanco-arroz border-2 border-tinta-sumi shadow-[2px_2px_0px_#1C1917]"
                    : "text-tinta-sumi/80 hover:text-tinta-sumi hover:bg-papel-washi"
                }`}
              >
                <LayoutGrid className="h-4 w-4" />
                <span>{t.menuBoard.viewToggleInteractive}</span>
              </button>

              <a
                href="/menu-carta-oficial.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-black text-tinta-sumi/85 hover:text-tinta-sumi hover:bg-amarillo-caldo/40 transition-all cursor-pointer"
              >
                <BookOpen className="h-4 w-4 text-rojo-ran" />
                <span>{t.menuBoard.viewToggleOriginal}</span>
                <ExternalLink className="h-3.5 w-3.5 text-rojo-ran" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* CONTENEDOR DE LA CARTA (Contorno 2px Tinta Sumi + Sombra dura 8px) */}
        <div className="rounded-3xl border-2 border-tinta-sumi bg-screentone-paper shadow-manga-xl overflow-hidden">
          {/* Cabecera Rojo Ran con Sello del Logo en Blanco Arroz */}
          <div className="bg-rojo-ran text-blanco-arroz px-5 sm:px-8 py-4 border-b-2 border-tinta-sumi flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Datos de Contacto (Space Mono) */}
            

            {/* Centro: Sello Círculo Blanco con el Cuenco + RAN RAMEN */}
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-full overflow-hidden border-2 border-tinta-sumi bg-blanco-arroz p-1 shadow-[2px_2px_0px_#1C1917] shrink-0">
                <Image
                  src="/ramen.png"
                  alt="Sello Ran Ramen"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="leading-none">
                <span className="font-display text-2xl sm:text-4xl tracking-wider text-blanco-arroz drop-shadow-[2px_2px_0px_#1C1917]">
                  RAN RAMEN
                </span>
                <span className="block font-mono text-[10px] font-bold tracking-widest text-amarillo-caldo mt-0.5">
                  ラーメン ARTESANAL
                </span>
              </div>
            </div>

            {/* Leyenda de Alérgenos */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 font-mono text-[10px] sm:text-[11px] text-blanco-arroz font-bold">
              <span>🌾 {t.menuBoard.allergens.gluten}</span>
              <span>🫘 {t.menuBoard.allergens.soy}</span>
              <span>⚪ {t.menuBoard.allergens.sesame}</span>
              <span>🌶️ {t.menuBoard.allergens.spicy}</span>
              <span>🐟 {t.menuBoard.allergens.fish}</span>
              <span>🥚 {t.menuBoard.allergens.egg}</span>
              <span>🦐 {t.menuBoard.allergens.mollusks}</span>
              <span>🥜 {t.menuBoard.allergens.peanuts}</span>
            </div>
          </div>

          {viewMode === "original" ? (
            /* VISTA DE LA TABLA ORIGINAL ILUSTRADA */
            <div className="p-4 sm:p-8 space-y-4">
              <div className="relative w-full overflow-hidden rounded-2xl border-2 border-tinta-sumi bg-blanco-arroz shadow-manga">
                <Image
                  src="/menu-carta-oficial.webp"
                  alt="Carta Oficial Ilustrada Ran Ramen Vilanova"
                  width={1587}
                  height={1122}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="flex justify-center">
                <a
                  href="/menu-carta-oficial.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blanco-arroz hover:bg-amarillo-caldo px-4 py-2.5 text-xs sm:text-sm font-black text-tinta-sumi btn-manga"
                >
                  <span>{t.menuBoard.downloadCarte}</span>
                  <ExternalLink className="h-4 w-4 text-rojo-ran" />
                </a>
              </div>
            </div>
          ) : (
            /* VISTA INTERACTIVA CON TARJETAS DE PLATO */
            <div className="p-4 sm:p-8">
              {/* Pestañas de Categoría */}
              <div className="flex flex-wrap items-center justify-center gap-2 pb-6 border-b-2 border-tinta-sumi/15">
                {tabs.map((tab) => {
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`rounded-full px-3.5 sm:px-4 py-2 text-xs font-black tracking-wide transition-all duration-150 cursor-pointer border-2 border-tinta-sumi ${
                        active
                          ? "bg-tinta-sumi text-amarillo-caldo shadow-[3px_3px_0px_#DC2626] -translate-y-0.5"
                          : "bg-blanco-arroz text-tinta-sumi hover:bg-amarillo-caldo/30 shadow-[2px_2px_0px_#1C1917]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Grid de Platos */}
              <div
                key={activeTab}
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filteredItems.map((item, idx) => (
                  <div
                    key={item.id}
                    style={{ animationDelay: `${Math.min(idx * 25, 250)}ms` }}
                    className="group animate-menu-card card-refined rounded-2xl bg-blanco-arroz p-4 flex flex-col justify-between"
                  >
                    <div>
                      {/* Fila Superior Space Mono: #CODE + Precio Ticket */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2 font-mono text-xs font-bold text-rojo-ran">
                          <span className="rounded-md border-2 border-tinta-sumi bg-tinta-sumi text-amarillo-caldo px-2 py-0.5">
                            #{item.code}
                          </span>
                          {item.japaneseName && (
                            <span className="text-tinta-sumi/75 font-sans font-black">
                              {item.japaneseName}
                            </span>
                          )}
                        </div>

                        <span className="font-mono text-sm sm:text-base font-bold text-tinta-sumi bg-amarillo-caldo px-2.5 py-0.5 rounded-lg border-2 border-tinta-sumi shadow-[2px_2px_0px_#1C1917] shrink-0">
                          {item.price}
                        </span>
                      </div>

                      {/* H3 Zen Kaku 900 */}
                      <h3 className="font-sans text-base sm:text-lg font-black text-tinta-sumi group-hover:text-rojo-ran transition-colors mb-2.5">
                        {getLocalizedName(item)}
                      </h3>

                      {/* Foto del plato con marco 2px Tinta Sumi */}
                      {item.image && (
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border-2 border-tinta-sumi bg-papel-washi mb-3">
                          <Image
                            src={item.image}
                            alt={`${item.code} ${item.name}`}
                            fill
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
                          />
                        </div>
                      )}

                      {/* Descripción trilingüe con jerarquía Zen Kaku */}
                      <div className="space-y-1 text-xs leading-snug">
                        {locale === "es" && (
                          <>
                            <p className="font-bold text-tinta-sumi text-[13px]">
                              {item.description}
                            </p>
                            <p className="text-[11px] font-medium text-rojo-ran/85">
                              {item.descriptionCa}
                            </p>
                            <p className="text-[11px] font-medium text-tinta-sumi/60">
                              {item.descriptionEn}
                            </p>
                          </>
                        )}
                        {locale === "ca" && (
                          <>
                            <p className="font-bold text-tinta-sumi text-[13px]">
                              {item.descriptionCa}
                            </p>
                            <p className="text-[11px] font-medium text-rojo-ran/85">
                              {item.description}
                            </p>
                            <p className="text-[11px] font-medium text-tinta-sumi/60">
                              {item.descriptionEn}
                            </p>
                          </>
                        )}
                        {locale === "en" && (
                          <>
                            <p className="font-bold text-tinta-sumi text-[13px]">
                              {item.descriptionEn}
                            </p>
                            <p className="text-[11px] font-medium text-rojo-ran/85">
                              {item.description}
                            </p>
                            <p className="text-[11px] font-medium text-tinta-sumi/60">
                              {item.descriptionCa}
                            </p>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Fila Inferior: Etiquetas Picante / Vegano & Alérgenos */}
                    <div className="mt-3.5 pt-2.5 border-t-2 border-tinta-sumi/10 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {item.isSpicy && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-rojo-ran border border-tinta-sumi px-2 py-0.5 font-mono text-[10px] font-bold text-blanco-arroz">
                            <Flame className="h-2.5 w-2.5 fill-amarillo-caldo text-amarillo-caldo" />
                            {t.menuBoard.badges.spicy}
                          </span>
                        )}
                        {item.isVegan && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-amarillo-caldo border border-tinta-sumi px-2 py-0.5 font-mono text-[10px] font-bold text-tinta-sumi">
                            <Leaf className="h-2.5 w-2.5 text-tinta-sumi" />
                            {t.menuBoard.badges.vegan}
                          </span>
                        )}
                        {item.isVegetarian && !item.isVegan && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-papel-washi border border-tinta-sumi px-2 py-0.5 font-mono text-[10px] font-bold text-tinta-sumi">
                            <Leaf className="h-2.5 w-2.5 text-naranja-fideo" />
                            {t.menuBoard.badges.vegetarian}
                          </span>
                        )}
                      </div>

                      {item.allergens && item.allergens.length > 0 && (
                        <div className="flex items-center gap-1 text-xs">
                          {item.allergens.map((alg) => (
                            <span
                              key={alg}
                              title={
                                t.menuBoard.allergens[
                                  alg as keyof typeof t.menuBoard.allergens
                                ]
                              }
                              className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-papel-washi border border-tinta-sumi text-[11px]"
                            >
                              {ALLERGEN_ICONS[alg]}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Aviso Inferior de Alérgenos en Rojo Ran */}
          <div className="bg-rojo-ran text-blanco-arroz px-5 py-3 border-t-2 border-tinta-sumi text-center text-xs font-bold flex items-center justify-center gap-2">
            <AlertCircle className="h-4 w-4 text-amarillo-caldo shrink-0" />
            <span>{t.menuBoard.allergenNotice}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
