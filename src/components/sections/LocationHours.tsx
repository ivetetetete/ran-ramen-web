"use client";

import React from "react";
import {
  MapPin,
  Clock,
  Phone,
  ShoppingBag,
  Navigation,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { useLanguage } from "@/context/LanguageContext";
import { RESTAURANT_INFO } from "@/lib/menu-data";
import { Reveal } from "@/components/ui/Reveal";

export function LocationHours() {
  const { t } = useLanguage();

  return (
    <section
      id="contacto"
      className="relative py-16 sm:py-24 scroll-mt-16 border-t-2 border-tinta-sumi/15 overflow-hidden"
    >
      {/* Marca de agua Kanji sutil */}
      <div
        className="pointer-events-none select-none absolute bottom-6 right-6 font-display text-[100px] sm:text-[150px] text-tinta-sumi/[0.04] leading-none z-0"
        aria-hidden="true"
      >
        営業
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-tinta-sumi bg-amarillo-caldo px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-tinta-sumi shadow-[2px_2px_0px_#1C1917]">
              <MapPin className="h-3.5 w-3.5 text-rojo-ran" />
              {t.contact.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight text-tinta-sumi">
              {t.contact.title}
            </h2>
            <p className="mt-3 text-base sm:text-[17px] text-tinta-sumi/80 leading-relaxed font-medium">
              {t.contact.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Columna Izquierda: Tarjetas de Horarios y Contacto */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            {/* Tarjeta de Horarios */}
            <Reveal delay={40}>
              <div className="card-refined flex items-start gap-4 rounded-2xl bg-blanco-arroz p-4 sm:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amarillo-caldo text-tinta-sumi border-2 border-tinta-sumi shadow-[2px_2px_0px_#1C1917]">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-sans text-sm sm:text-base font-black text-tinta-sumi">
                      {t.contact.hoursTitle}
                    </h3>
                    <span className="rounded-lg border border-tinta-sumi bg-papel-washi px-2.5 py-0.5 font-mono text-[11px] font-bold text-tinta-sumi">
                      {t.contact.hoursDays}
                    </span>
                  </div>
                  <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                    <div className="rounded-xl border-2 border-tinta-sumi bg-papel-washi px-3 py-2">
                      <span className="block font-mono text-[10px] font-bold uppercase text-tinta-sumi/70">
                        {t.contact.lunchLabel}
                      </span>
                      <span className="font-mono font-bold text-tinta-sumi">
                        12:30H – 16:00H
                      </span>
                    </div>
                    <div className="rounded-xl border-2 border-tinta-sumi bg-papel-washi px-3 py-2">
                      <span className="block font-mono text-[10px] font-bold uppercase text-tinta-sumi/70">
                        {t.contact.dinnerLabel}
                      </span>
                      <span className="font-mono font-bold text-tinta-sumi">
                        20:00H – 23:30H
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 font-mono text-xs text-rojo-ran font-bold">
                    {t.contact.closedMonday}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Tarjeta de Teléfono */}
            <Reveal delay={90}>
              <div className="card-refined flex items-start gap-4 rounded-2xl bg-blanco-arroz p-4 sm:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rojo-ran text-blanco-arroz border-2 border-tinta-sumi shadow-[2px_2px_0px_#1C1917]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-sans text-sm sm:text-base font-black text-tinta-sumi">
                    {t.contact.phoneTitle}
                  </h3>
                  <a
                    href={RESTAURANT_INFO.phoneHref}
                    className="mt-0.5 inline-block font-mono text-lg sm:text-xl font-bold text-rojo-ran hover:underline"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <p className="text-xs text-tinta-sumi/80 font-medium mt-0.5">
                    {t.contact.phoneDesc}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Tarjeta de Ubicación */}
            <Reveal delay={140}>
              <div className="card-refined flex items-start gap-4 rounded-2xl bg-blanco-arroz p-4 sm:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-tinta-sumi text-amarillo-caldo border-2 border-tinta-sumi shadow-[2px_2px_0px_#1C1917]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-sans text-sm sm:text-base font-black text-tinta-sumi">
                    {t.contact.locationTitle}
                  </h3>
                  <p className="mt-0.5 text-xs sm:text-sm font-bold text-tinta-sumi/85">
                    {RESTAURANT_INFO.address}
                  </p>
                  <a
                    href={RESTAURANT_INFO.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1.5 inline-block font-mono text-xs font-bold text-rojo-ran hover:underline"
                  >
                    {t.contact.locationAction}
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Tarjeta de Instagram */}
            <Reveal delay={190}>
              <div className="card-refined flex items-start gap-4 rounded-2xl bg-blanco-arroz p-4 sm:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-papel-washi text-rojo-ran border-2 border-tinta-sumi shadow-[2px_2px_0px_#1C1917]">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-sans text-sm sm:text-base font-black text-tinta-sumi">
                    {t.contact.instagramTitle}
                  </h3>
                  <a
                    href={RESTAURANT_INFO.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-0.5 inline-block font-mono text-sm font-bold text-rojo-ran hover:underline"
                  >
                    {RESTAURANT_INFO.instagramHandle}
                  </a>
                  <p className="text-xs text-tinta-sumi/80 font-medium mt-0.5">
                    {t.contact.instagramDesc}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Columna Derecha: Mapa Interactivo + Tarjeta Sticker Take Away */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {/* Mapa */}
            <Reveal delay={100}>
              <div className="relative overflow-hidden rounded-2xl border-2 border-tinta-sumi bg-papel-washi shadow-manga h-64 sm:h-72">
                <iframe
                  title="Mapa Ran Ramen - Rambla de la Pau, 6, Vilanova i la Geltrú"
                  src="https://www.google.com/maps?q=Ran+Ramen,+Rambla+de+la+Pau+6,+08800+Vilanova+i+la+Geltru&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

            {/* Tarjeta Take Away en Amarillo Caldo con Screentone (06 · APLICACIONES) */}
            <Reveal delay={160}>
              <div className="rounded-2xl border-2 border-tinta-sumi bg-screentone-yellow p-5 sm:p-6 shadow-manga-lg flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-tinta-sumi bg-rojo-ran px-3 py-1 font-mono text-xs font-bold uppercase text-blanco-arroz shadow-[2px_2px_0px_#1C1917]">
                      <ShoppingBag className="h-3.5 w-3.5" />
                      {t.contact.takeawayCard.badge}
                    </span>
                    <span className="font-mono text-xs font-bold text-tinta-sumi bg-blanco-arroz px-2.5 py-0.5 rounded-md border-2 border-tinta-sumi">
                      #A1 #A4 #G2 #C2
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-2xl text-tinta-sumi">
                    {t.contact.takeawayCard.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-tinta-sumi/85">
                    {t.contact.takeawayCard.desc}
                  </p>

                  <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-tinta-sumi font-bold">
                    <li className="rounded-xl bg-blanco-arroz px-3 py-2 border-2 border-tinta-sumi shadow-[2px_2px_0px_#1C1917]">
                      {t.contact.takeawayCard.step1}
                    </li>
                    <li className="rounded-xl bg-blanco-arroz px-3 py-2 border-2 border-tinta-sumi shadow-[2px_2px_0px_#1C1917]">
                      {t.contact.takeawayCard.step2}
                    </li>
                    <li className="rounded-xl bg-blanco-arroz px-3 py-2 border-2 border-tinta-sumi shadow-[2px_2px_0px_#1C1917]">
                      {t.contact.takeawayCard.step3}
                    </li>
                  </ul>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href={RESTAURANT_INFO.phoneHref}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-rojo-ran hover:bg-tinta-sumi text-blanco-arroz font-sans font-black text-xs sm:text-sm py-3 px-4 btn-manga"
                  >
                    <Phone className="h-4 w-4 text-amarillo-caldo" />
                    <span>{t.contact.takeawayCard.callBtn}</span>
                  </a>

                  <a
                    href={RESTAURANT_INFO.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blanco-arroz hover:bg-papel-washi text-tinta-sumi font-sans font-black text-xs sm:text-sm py-3 px-4 btn-manga"
                  >
                    <Navigation className="h-4 w-4 text-rojo-ran" />
                    <span>{t.contact.takeawayCard.mapsBtn}</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
