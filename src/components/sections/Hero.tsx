"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Star, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RESTAURANT_INFO } from "@/lib/menu-data";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const { t, locale } = useLanguage();

  return (
    <section className="relative pt-24 sm:pt-28 pb-10 sm:pb-16 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Panel Principal Manga */}
        <div className="relative rounded-3xl border-2 border-tinta-sumi bg-blanco-arroz shadow-manga-lg overflow-hidden">
          {/* Banda Roja superior */}
          <div className="bg-rojo-ran text-blanco-arroz px-4 sm:px-8 py-2.5 flex flex-wrap items-center justify-between gap-2 border-b-2 border-tinta-sumi text-xs">
            <div className="flex items-center gap-2 font-mono font-bold tracking-wide">
              <MapPin className="h-3.5 w-3.5 text-amarillo-caldo shrink-0" />
              <span>{t.hero.badgeLocation}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] font-bold bg-tinta-sumi text-amarillo-caldo px-2.5 py-0.5 rounded-md border border-tinta-sumi">
                {RESTAURANT_INFO.menuHours}
              </span>
            </div>
          </div>

          {/* Fondo con Screentone (trama de puntos manga) y textura sutil */}
          <div className="relative bg-screentone-paper">
            <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-1/2 opacity-[0.06] mix-blend-multiply">
              <Image
                src="/manga-wall.jpg"
                alt=""
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center p-6 sm:p-10 md:p-12 lg:p-14">
              {/* Columna Izquierda: Titular + Historia + Botones Manga */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
                <Reveal delay={60}>
                  {/* H1 Dela Gothic One */}
                  <h1 className="font-display text-3xl sm:text-5xl md:text-[54px] tracking-tight text-tinta-sumi leading-[1.12]">
                    {t.hero.headlinePart1}
                    <span className="inline-block bg-rojo-ran text-blanco-arroz px-3 py-0.5 mx-1 rounded-xl border-2 border-tinta-sumi shadow-manga-sm -rotate-1">
                      {t.hero.headlineHighlight}
                    </span>
                    {t.hero.headlinePart2}
                  </h1>
                </Reveal>

                <Reveal delay={120}>
                  {/* Párrafo Zen Kaku 500, 16-18px */}
                  <p className="max-w-xl text-base sm:text-[18px] text-tinta-sumi/90 leading-relaxed font-medium">
                    {t.hero.subtitle}
                  </p>
                </Reveal>

                {/* Botones "Pedir take away" (Rojo Ran) y "Ver la carta" (Amarillo Caldo) */}
                <Reveal delay={160}>
                  <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
                    <a
                      href={RESTAURANT_INFO.phoneHref}
                      className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-rojo-ran hover:bg-tinta-sumi text-blanco-arroz font-sans font-black text-sm sm:text-base px-6 py-3.5 btn-manga cursor-pointer"
                    >
                      <Phone className="h-4 w-4 text-amarillo-caldo" />
                      <span>
                        {locale === "ca"
                          ? "Demanar take away"
                          : locale === "en"
                          ? "Order take away"
                          : "Pedir take away"}
                      </span>
                    </a>

                    <a
                      href="#carta"
                      className="group inline-flex items-center justify-center gap-2 rounded-xl bg-amarillo-caldo hover:bg-naranja-fideo text-tinta-sumi font-sans font-black text-sm sm:text-base px-6 py-3.5 btn-manga cursor-pointer"
                    >
                      <span>{t.hero.primaryCta}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </Reveal>

                {/* Datos con Space Mono (Sin columna de idiomas) */}
                <Reveal delay={200}>
                  <div className="pt-4 sm:pt-6 border-t-2 border-tinta-sumi/15 grid grid-cols-2 gap-4 sm:gap-8 max-w-sm">
                    <div>
                      <div className="flex items-center gap-1 text-rojo-ran font-display text-xl sm:text-2xl">
                        <span>4.6</span>
                        <Star className="h-4 w-4 fill-naranja-fideo text-tinta-sumi" />
                      </div>
                      <p className="font-mono text-[11px] sm:text-xs text-tinta-sumi/80 font-bold">
                        {t.hero.stats.ratingLabel}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Columna Derecha: Tarjeta de Plato */}
              <div className="lg:col-span-5">
                <Reveal delay={140} direction="scale">
                  <div className="relative mx-auto max-w-md lg:max-w-none">
                    {/* Sticker Sello Manga flotante */}
                    <div className="hidden sm:flex absolute -top-5 -right-4 z-20 items-center gap-2 rounded-2xl border-2 border-tinta-sumi bg-amarillo-caldo px-3.5 py-2 shadow-manga-sm rotate-3">
                      <div className="h-8 w-8 rounded-full border-2 border-tinta-sumi bg-blanco-arroz p-1 flex items-center justify-center">
                        <Image
                          src="/ramen.png"
                          alt="Sello Ran Ramen"
                          width={28}
                          height={28}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="leading-none">
                        <span className="block font-display text-xs text-rojo-ran">
                          SLURP! ズルズル
                        </span>
                        <span className="block font-mono text-[9px] font-bold text-tinta-sumi mt-0.5">
                          CALDO 18 HORAS
                        </span>
                      </div>
                    </div>

                    {/* Tarjeta principal estilo cómic con contorno 2px y sombra dura 6px */}
                    <div className="relative rounded-2xl border-2 border-tinta-sumi bg-blanco-arroz p-4 sm:p-5 shadow-manga-lg">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-rojo-ran">
                          #A1{" "}
                          {locale === "ca"
                            ? "MÉS DEMANAT"
                            : locale === "en"
                            ? "MOST ORDERED"
                            : "MÁS PEDIDO"}
                        </span>
                        <span className="rounded-md border-2 border-tinta-sumi bg-amarillo-caldo px-2 py-0.5 font-mono text-[11px] font-bold text-tinta-sumi">
                          TOP 1
                        </span>
                      </div>

                      {/* Foto Real del A1 Katsu Curry */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border-2 border-tinta-sumi bg-papel-washi">
                        <Image
                          src="/dishes/a1.webp"
                          alt="A1 Katsu Curry - Ran Ramen Vilanova"
                          fill
                          className="object-cover object-center transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 440px"
                          priority
                        />
                      </div>

                      {/* Bloque inferior */}
                      <div className="mt-4 flex items-end justify-between gap-3">
                        <div>
                          <h2 className="font-display text-xl sm:text-2xl text-tinta-sumi leading-tight">
                            Katsu Curry Ran
                          </h2>
                          <p className="mt-1 font-sans text-xs sm:text-sm font-medium text-tinta-sumi/80">
                            {locale === "ca"
                              ? "Arròs al curri, escalopa cruixent, amanida i sopa miso"
                              : locale === "en"
                              ? "Curry rice, crispy chicken escalope, salad & miso soup"
                              : "Arroz al curry, escalope crujiente, ensalada y sopa miso"}
                          </p>
                        </div>
                        <span className="font-mono text-lg sm:text-xl font-bold text-tinta-sumi shrink-0 bg-papel-washi px-3 py-1 rounded-xl border-2 border-tinta-sumi">
                          13,90 €
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Banda inferior damero Rojo Ran & Amarillo Caldo */}
          <div className="h-3 w-full pattern-checker-terracotta border-t-2 border-tinta-sumi" />
        </div>
      </div>
    </section>
  );
}
