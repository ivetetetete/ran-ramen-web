"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Star, UtensilsCrossed, Flame, Clock, MapPin, Leaf } from "lucide-react";
import { Button } from "@/components/ui/Button";

const WELCOME_PHRASES = [
  "Bienvenido a",
  "Benvingut a",
  "Welcome to",
  "ようこそ",
];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = WELCOME_PHRASES[phraseIndex];
    const typingSpeed = isDeleting ? 45 : 90;
    const pauseTime = isDeleting ? 400 : 1800;

    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % WELCOME_PHRASES.length);
      }, 300);
    } else {
      timer = setTimeout(() => {
        const nextLength = isDeleting
          ? displayedText.length - 1
          : displayedText.length + 1;
        setDisplayedText(currentPhrase.substring(0, nextLength));
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-100/50 via-[#faf7f2] to-[#faf7f2] py-16 sm:py-24 border-b border-stone-300">
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-multiply overflow-hidden pointer-events-none">
        <Image
          src="/manga-wall.jpg"
          alt="Textura mural manga Ran Ramen"
          fill
          className="object-cover object-center scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf7f2]/60 to-[#faf7f2]" />
      </div>

      <div className="pointer-events-none select-none absolute -top-10 -left-12 text-[140px] sm:text-[220px] font-black text-red-950/5 leading-none z-0 tracking-tighter">
        拉麺
      </div>
      <div className="pointer-events-none select-none absolute top-1/2 -right-8 -translate-y-1/2 text-[180px] sm:text-[260px] font-black text-amber-950/5 leading-none z-0 tracking-tighter">
        乱
      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-amber-400/20 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[280px] bg-red-500/15 blur-[110px] pointer-events-none rounded-full" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-stone-900 bg-amber-400 px-3 py-1 text-[11px] sm:text-xs font-black uppercase text-stone-950 shadow-[2px_2px_0px_#1c1917] sm:shadow-[3px_3px_0px_#1c1917] -rotate-1">
              <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              Vilanova i la Geltrú
            </span>

            <Link
              href="#resenas"
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-stone-900 bg-white px-3 py-1 text-[11px] sm:text-xs font-black uppercase text-stone-900 shadow-[2px_2px_0px_#1c1917] sm:shadow-[3px_3px_0px_#1c1917] rotate-1 transition-transform hover:scale-105"
            >
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
              <span>4.6 Google (500+ reseñas)</span>
            </Link>

            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-stone-900 bg-red-600 px-3 py-1 text-[11px] sm:text-xs font-black uppercase text-white shadow-[2px_2px_0px_#1c1917] sm:shadow-[3px_3px_0px_#1c1917] -rotate-2">
              <Flame className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-300" />
              Paredes de Puro Manga
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-stone-900 bg-emerald-400 px-3 py-1 text-[11px] sm:text-xs font-black uppercase text-stone-950 shadow-[2px_2px_0px_#1c1917] sm:shadow-[3px_3px_0px_#1c1917] rotate-1">
              <Leaf className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-stone-950" />
              Opciones Veganas & Bebidas Japonesas
            </span>
          </div>

          <div className="min-h-[40px] sm:min-h-[56px] flex items-center justify-center">
            <span className="text-2xl sm:text-4xl lg:text-5xl font-mono font-bold tracking-tight text-red-600">
              {displayedText}
              <span className="inline-block w-1.5 h-6 sm:h-9 ml-1 bg-red-600 animate-pulse align-middle" />
            </span>
          </div>

          <h1 className="mt-1 max-w-4xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-stone-950">
            <span className="text-red-600 underline decoration-amber-400 decoration-wavy decoration-from-font">Ran Ramen</span>
          </h1>

          <div className="mt-3 inline-block">
            <span className="text-sm sm:text-xl md:text-2xl font-black tracking-widest text-stone-800 uppercase px-2.5 sm:px-3 py-0.5 border-b-2 border-stone-900">
              Cocina Japonesa y Especialidades
            </span>
          </div>

          <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-stone-700 leading-relaxed font-medium px-2">
            El rincón de Vilanova i la Geltrú donde el sabor del Japón tradicional y la pasión del manga se encuentran. Caldos cocinados durante 16 horas, currys caseros crujientes, donburis, gyozas, deliciosas opciones 100% veganas, postres artesanos como mochis y bebidas originales importadas de Japón.
          </p>

          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-md sm:max-w-none">
            <Link href="#menu" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto border-2 border-stone-900 bg-red-600 hover:bg-red-500 text-white font-black text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-3.5 shadow-[3px_3px_0px_#1c1917] sm:shadow-[4px_4px_0px_#1c1917] hover:shadow-[2px_2px_0px_#1c1917] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer justify-center"
              >
                <UtensilsCrossed className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Explorar Carta
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>

            <a href="tel:931546287" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto border-2 border-stone-900 bg-white hover:bg-amber-50 text-stone-950 font-black text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-3.5 shadow-[3px_3px_0px_#1c1917] sm:shadow-[4px_4px_0px_#1c1917] hover:shadow-[2px_2px_0px_#1c1917] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer justify-center"
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                Pedir para Llevar: 931 546 287
              </Button>
            </a>
          </div>

          <div className="mt-7 sm:mt-8 inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-amber-300 bg-amber-50/90 px-3.5 py-2 text-xs sm:text-sm text-stone-800 shadow-xs animate-float max-w-full">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-white font-black text-[10px]">
              ★
            </span>
            <span className="font-semibold text-stone-900">
              Plato más pedido:
            </span>
            <span className="font-bold text-red-700">
              A1 Katsu Curry (13,90 €)
            </span>
            <span className="hidden sm:inline text-stone-400">•</span>
            <span className="text-stone-600 text-[11px] sm:text-xs">Pollo súper crujiente y curry casero</span>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:gap-6 w-full max-w-4xl text-left">
            <div className="group rounded-2xl border-2 border-stone-900 bg-white p-4 sm:p-5 shadow-[3px_3px_0px_#1c1917] sm:shadow-[4px_4px_0px_#1c1917] transition-all hover:translate-y-[-2px]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
                  01 / El Secreto
                </span>
                <Clock className="h-4 w-4 text-amber-500" />
              </div>
              <h3 className="mt-2 text-sm sm:text-base font-black text-stone-950">
                Caldos de 16 Horas
              </h3>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                Huesos seleccionados y cocción paciente a fuego lento para extraer colágeno y umami auténtico.
              </p>
            </div>

            <div className="group rounded-2xl border-2 border-stone-900 bg-white p-4 sm:p-5 shadow-[3px_3px_0px_#1c1917] sm:shadow-[4px_4px_0px_#1c1917] transition-all hover:translate-y-[-2px]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
                  02 / Especialidad
                </span>
                <Flame className="h-4 w-4 text-red-500" />
              </div>
              <h3 className="mt-2 text-sm sm:text-base font-black text-stone-950">
                Currys & Donburis
              </h3>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                Recetas de curry japonés espeso con arroz, ebi furai, pollo katsu, cerdo chashu, pato y anguila.
              </p>
            </div>

            <div className="group rounded-2xl border-2 border-stone-900 bg-white p-4 sm:p-5 shadow-[3px_3px_0px_#1c1917] sm:shadow-[4px_4px_0px_#1c1917] transition-all hover:translate-y-[-2px]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
                  03 / Variedad
                </span>
                <Leaf className="h-4 w-4 text-emerald-600" />
              </div>
              <h3 className="mt-2 text-sm sm:text-base font-black text-stone-950">
                Vegano, Postres & Bebidas
              </h3>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                Platos 100% veganos, mochis artesanos, dorayakis y bebidas originales de Japón como Ramune y cervezas de importación.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
