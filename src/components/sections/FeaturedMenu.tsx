"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MenuItem } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Flame, Leaf, Info } from "lucide-react";

export const MENU_ITEMS: MenuItem[] = [
  // --- CURRYS Y ARROCES ---
  {
    id: "a1",
    code: "A1",
    name: "Katsu Curry",
    price: "13,90 €",
    category: "curry",
    description: "Arroz al curry con escalope de pollo crujiente, ensalada fresca y sopa de miso.",
  },
  {
    id: "a2",
    code: "A2",
    name: "Ebi Furai-Curry",
    price: "12,90 €",
    category: "curry",
    description: "Arroz al curry japonés con gambas fritas en panko, ensalada y sopa de miso.",
  },
  {
    id: "a3",
    code: "A3",
    name: "Kara Age-Curry",
    price: "12,90 €",
    category: "curry",
    description: "Arroz al curry con pollo frito japonés marinado, ensalada y sopa de miso.",
  },
  {
    id: "a7",
    code: "A7",
    name: "Korokke Curry",
    price: "11,90 €",
    category: "curry",
    isVegetarian: true,
    description: "Arroz al curry con croqueta japonesa de calabaza frita, ensalada y sopa de miso.",
  },
  {
    id: "a8",
    code: "A8",
    name: "Toufu Curry",
    price: "11,90 €",
    category: "curry",
    isVegetarian: true,
    isVegan: true,
    description: "Arroz al curry con tofu frito tierno, ensalada y sopa de miso tradicional.",
  },
  {
    id: "a4",
    code: "A4",
    name: "Unagi-Don",
    price: "15,50 €",
    category: "donburi",
    description: "Láminas de anguila asada sobre base de arroz al vapor con cebollitas y salsa tare.",
  },
  {
    id: "a5",
    code: "A5",
    name: "Arroz con Pato (Pato-Rice)",
    price: "13,90 €",
    category: "donburi",
    description: "Arroz con pato asado, verdura pak choi y huevo cocido marinado.",
  },
  {
    id: "a6",
    code: "A6",
    name: "Arroz con Cerdo Chashu (Chasieuw-Rice)",
    price: "13,90 €",
    category: "donburi",
    description: "Carne de cerdo chashu preparado con arroz, verdura pak choi, bambú y sésamo.",
  },

  // --- GYOZAS ---
  {
    id: "g1",
    code: "G1",
    name: "Gyoza Vegetariana",
    price: "4,90 €",
    category: "gyoza",
    isVegetarian: true,
    isVegan: true,
    description: "Empanadillas japonesas rellenas de verduras frescas de temporada a la plancha.",
  },
  {
    id: "g2",
    code: "G2",
    name: "Gyoza Picante de Pollo",
    price: "5,20 €",
    category: "gyoza",
    isSpicy: true,
    description: "Empanadillas fritas de pollo bañadas con salsa picante artesanal.",
  },
  {
    id: "g3",
    code: "G3",
    name: "Gyoza de Pollo",
    price: "4,90 €",
    category: "gyoza",
    description: "Empanadillas tradicionales japonesas de pollo a la plancha con salsa de soja y vinagre.",
  },

  // --- TAPAS Y ENTRANTES (T Y C) ---
  {
    id: "t1",
    code: "T1",
    name: "Edamame",
    price: "3,80 €",
    category: "tapas",
    isVegetarian: true,
    isVegan: true,
    description: "Vainas de soja tiernas hervidas al punto con escamas de sal marina.",
  },
  {
    id: "t2",
    code: "T2",
    name: "Kimuchi",
    price: "3,80 €",
    category: "tapas",
    isSpicy: true,
    isVegetarian: true,
    isVegan: true,
    description: "Encurtido tradicional de verduras fermentadas con toque picante.",
  },
  {
    id: "t3",
    code: "T3",
    name: "Wakame",
    price: "3,50 €",
    category: "tapas",
    isVegetarian: true,
    isVegan: true,
    description: "Ensalada ligera de algas wakame marinadas con aceite de sésamo y semillas tostadas.",
  },
  {
    id: "t4",
    code: "T4",
    name: "Arroz Blanco",
    price: "2,00 €",
    category: "tapas",
    isVegetarian: true,
    isVegan: true,
    description: "Bol de arroz blanco japonés al vapor (gohan).",
  },
  {
    id: "c1",
    code: "C1",
    name: "Korokke",
    price: "3,95 €",
    category: "tapas",
    isVegetarian: true,
    description: "Croquetas japonesas de calabaza doradas y crujientes al estilo casero.",
  },
  {
    id: "c2",
    code: "C2",
    name: "Takoyaki",
    price: "4,90 €",
    category: "tapas",
    description: "Bolas de pulpo crujientes por fuera y tiernas por dentro, con mayonesa japonesa y salsa takoyaki.",
  },
  {
    id: "c3",
    code: "C3",
    name: "Ebi Furai",
    price: "4,90 €",
    category: "tapas",
    description: "Gambas rebozadas en panko japonés y fritas hasta quedar crujientes y doradas.",
  },
  {
    id: "c4",
    code: "C4",
    name: "Kara Age",
    price: "4,90 €",
    category: "tapas",
    description: "Trozos de pollo marinado con soja, jengibre y ajo, frito al estilo japonés.",
  },
  {
    id: "c5",
    code: "C5",
    name: "Ensalada Katsu",
    price: "6,90 €",
    category: "tapas",
    description: "Ensalada fresca variada acompañada de tiras de pollo frito crujiente.",
  },
  {
    id: "c6",
    code: "C6",
    name: "Kara Age Picante",
    price: "5,95 €",
    category: "tapas",
    isSpicy: true,
    description: "Pollo frito kara-age bañado en salsa picante especial de la casa.",
  },
  {
    id: "c7",
    code: "C7",
    name: "Pan Bao de Pollo",
    price: "4,20 €",
    category: "tapas",
    description: "Panecillo bao esponjoso al vapor relleno de pollo crujiente y salsa tare.",
  },
  {
    id: "c8",
    code: "C8",
    name: "Yasai Kakiage",
    price: "3,50 €",
    category: "tapas",
    isVegetarian: true,
    isVegan: true,
    description: "Tempura crujiente de finas tiras de verduras variadas.",
  },
  {
    id: "c9",
    code: "C9",
    name: "Yakitori",
    price: "4,20 €",
    category: "tapas",
    description: "Brochetas de pollo y verdura hechas a la plancha con salsa teriyaki dulce.",
  },
  {
    id: "c10",
    code: "C10",
    name: "Goma Teba",
    price: "6,90 €",
    category: "tapas",
    description: "Alitas de pollo glaseadas y espolvoreadas con abundante sésamo tostado.",
  },

  // --- POSTRES JAPONESES ---
  {
    id: "p1",
    code: "P1",
    name: "Mochis Artesanos (2 uds)",
    price: "4,50 €",
    category: "postres",
    isVegetarian: true,
    description: "Tradicional pastel japonés de arroz glutinoso relleno de té verde matcha, chocolate belga o mango/fresa.",
  },
  {
    id: "p2",
    code: "P2",
    name: "Dorayaki Tradicional",
    price: "3,90 €",
    category: "postres",
    isVegetarian: true,
    description: "El bizcocho esponjoso japonés más famoso, relleno de crema dulce de chocolate o pasta de judía roja anko.",
  },
  {
    id: "p3",
    code: "P3",
    name: "Helado de Té Matcha & Sésamo",
    price: "4,20 €",
    category: "postres",
    isVegetarian: true,
    description: "Cremoso helado artesanal elaborado con auténtico té verde matcha de Uji y semillas de sésamo negro tostadas.",
  },
  {
    id: "p4",
    code: "P4",
    name: "Trufas Japonesas de Matcha",
    price: "4,50 €",
    category: "postres",
    isVegetarian: true,
    description: "Delicadas trufas Nama de chocolate blanco artesanal espolvoreadas con té matcha ceremonial japonés.",
  },

  // --- BEBIDAS ORIGINALES JAPONESAS ---
  {
    id: "b1",
    code: "B1",
    name: "Refresco Ramune Original (ラムネ)",
    price: "3,50 €",
    category: "bebidas",
    isVegan: true,
    description: "El mítico refresco con botella de canica de vidrio importado de Japón. Sabores original lima-limón, melón o fresa.",
  },
  {
    id: "b2",
    code: "B2",
    name: "Cerveza Asahi Super Dry (33cl)",
    price: "3,80 €",
    category: "bebidas",
    isVegan: true,
    description: "La cerveza premium número 1 de Japón. Trago seco, limpio y extremadamente refrescante (Karakuchi).",
  },
  {
    id: "b3",
    code: "B3",
    name: "Cerveza Kirin Ichiban (33cl)",
    price: "3,80 €",
    category: "bebidas",
    isVegan: true,
    description: "Elaborada exclusivamente con la primera prensada del mosto (First Press). Sabor rico, puro y equilibrado.",
  },
  {
    id: "b4",
    code: "B4",
    name: "Cerveza Sapporo Premium (33cl)",
    price: "3,80 €",
    category: "bebidas",
    isVegan: true,
    description: "La marca cervecera más legendaria y antigua de Japón (desde 1876), ligera y de final nítido.",
  },
  {
    id: "b5",
    code: "B5",
    name: "Té Japonés Frío Sencha / Oolong",
    price: "2,90 €",
    category: "bebidas",
    isVegan: true,
    description: "Té verde sencha natural japonés o té oolong tostado importado sin azúcares añadidos ni conservantes.",
  },
  {
    id: "b6",
    code: "B6",
    name: "Sake Junmai Tradicional (180ml)",
    price: "4,90 €",
    category: "bebidas",
    isVegan: true,
    description: "Vino tradicional de arroz fermentado servido en jarrita de cerámica (tokkuri) para degustar tibio o frío.",
  },
];

// 3 Platos Estrella / Top Ventas
const TOP_DISH_IDS = ["a1", "c2", "g2"];

export function FeaturedMenu() {
  const [activeTab, setActiveTab] = useState<string>("curry-donburi");

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "curry-donburi")
      return item.category === "curry" || item.category === "donburi";
    if (activeTab === "gyoza") return item.category === "gyoza";
    if (activeTab === "tapas") return item.category === "tapas";
    if (activeTab === "postres") return item.category === "postres";
    if (activeTab === "bebidas") return item.category === "bebidas";
    if (activeTab === "vegano") return item.isVegan === true;
    return true;
  });

  const topDishes = TOP_DISH_IDS.map((id) =>
    MENU_ITEMS.find((item) => item.id === id)
  ).filter(Boolean) as MenuItem[];

  return (
    <section id="menu" className="relative overflow-hidden bg-[#f5ece1] py-16 sm:py-24 border-t border-stone-300">
      <div
        className="pointer-events-none select-none absolute top-4 sm:top-6 md:top-8 right-0 w-24 sm:w-40 md:w-56 lg:w-64 xl:w-72 h-[240px] sm:h-[350px] md:h-[460px] lg:h-[540px] z-0 opacity-20 sm:opacity-35 md:opacity-70 lg:opacity-85 transition-opacity"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 right-0 w-32 sm:w-44 h-32 sm:h-44 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />
        <div className="relative w-full h-full">
          <Image
            src="/bg-noodles-chopsticks.png"
            alt=""
            fill
            className="object-contain object-right-top drop-shadow-xl"
            sizes="(max-width: 640px) 120px, (max-width: 768px) 180px, (max-width: 1200px) 260px, 300px"
          />
        </div>
      </div>

      <div
        className="pointer-events-none select-none absolute bottom-0 left-0 w-24 sm:w-36 md:w-52 lg:w-64 xl:w-72 h-[220px] sm:h-[300px] md:h-[420px] lg:h-[480px] z-0 opacity-20 sm:opacity-35 md:opacity-70 lg:opacity-85 transition-opacity"
        aria-hidden="true"
      >
        <div className="absolute bottom-0 left-0 w-32 sm:w-44 h-32 sm:h-44 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />
        <div className="relative w-full h-full">
          <Image
            src="/bg-dumpling-chopsticks.png"
            alt=""
            fill
            className="object-contain object-left-bottom drop-shadow-xl"
            sizes="(max-width: 640px) 120px, (max-width: 768px) 180px, (max-width: 1200px) 260px, 300px"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-stone-900 bg-red-600 px-3 py-1 text-[11px] sm:text-xs font-black uppercase text-white shadow-[2px_2px_0px_#1c1917] sm:shadow-[3px_3px_0px_#1c1917] mb-2.5 sm:mb-3">
            <Flame className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-300" />
            33 Especialidades Caseras
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
            Nuestros Platos
          </h2>
          <p className="mt-2.5 sm:mt-3 max-w-xl text-sm sm:text-base text-stone-700 leading-relaxed font-medium px-2">
            Recetas japonesas tradicionales preparadas al momento. Disponemos de platos veganos, postres artesanos (mochis y dorayakis) y bebidas originales importadas de Japón.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div className="flex items-start gap-3 rounded-2xl border-2 border-stone-900 bg-emerald-50/90 p-3.5 shadow-[3px_3px_0px_#1c1917]">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold text-base shadow-xs">
              🌱
            </span>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-stone-950">
                Platos 100% Veganos
              </h4>
              <p className="mt-0.5 text-[11px] text-stone-600 leading-snug">
                Toufu Curry, gyozas de verduras, edamame al punto, ensalada de algas wakame y tempura kakiage.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border-2 border-stone-900 bg-rose-50/90 p-3.5 shadow-[3px_3px_0px_#1c1917]">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-500 text-white font-bold text-base shadow-xs">
              🍡
            </span>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-stone-950">
                Postres Tradicionales
              </h4>
              <p className="mt-0.5 text-[11px] text-stone-600 leading-snug">
                Mochis artesanos de té matcha y chocolate, dorayakis caseros y helado de té verde con sésamo negro.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border-2 border-stone-900 bg-amber-50/90 p-3.5 shadow-[3px_3px_0px_#1c1917]">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white font-bold text-base shadow-xs">
              🍶
            </span>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-stone-950">
                Bebidas Originales de Japón
              </h4>
              <p className="mt-0.5 text-[11px] text-stone-600 leading-snug">
                Refrescos Ramune con canica, cervezas Asahi, Kirin y Sapporo, tés japoneses puros fríos y sake tradicional.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="flex items-center gap-2 mb-3.5 sm:mb-4">
            <span className="text-lg sm:text-xl">🏆</span>
            <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-stone-950">
              Los 3 Favoritos Indiscutibles
            </h3>
            <span className="text-[10px] sm:text-xs font-bold text-red-600 uppercase bg-red-100 px-2 py-0.5 rounded-md border border-red-200">
              Imprescindibles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topDishes.map((dish, idx) => {
              const tags = [
                { label: "TOP 1 • Más Vendido", bg: "bg-amber-400 text-stone-950" },
                { label: "TOP 2 • Favorito Izakaya", bg: "bg-red-600 text-white" },
                { label: "TOP 3 • Clásico Crujiente", bg: "bg-stone-900 text-amber-300" },
              ];
              const tag = tags[idx];

              return (
                <div
                  key={`top-${dish.id}`}
                  className="relative flex flex-col justify-between rounded-2xl border-2 border-stone-900 bg-white p-5 shadow-[4px_4px_0px_#1c1917] transition-all hover:translate-y-[-2px]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`inline-block text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full border border-stone-900 shadow-xs ${tag.bg}`}>
                        {tag.label}
                      </span>
                      <span className="flex h-6 w-9 shrink-0 items-center justify-center rounded-lg bg-red-600 font-mono text-xs font-black text-white shadow-xs">
                        {dish.code}
                      </span>
                    </div>

                    <div className="flex items-start sm:items-baseline justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-black text-stone-950 flex-1 min-w-0">
                        {dish.name}
                      </h4>
                      <span className="font-mono text-base sm:text-lg font-black text-red-600 shrink-0">
                        {dish.price}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 sm:mt-14 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {[
            {
              id: "curry-donburi",
              label: `Curry y Arroces (${
                MENU_ITEMS.filter(
                  (i) => i.category === "curry" || i.category === "donburi"
                ).length
              })`,
            },
            {
              id: "gyoza",
              label: `Gyozas (${
                MENU_ITEMS.filter((i) => i.category === "gyoza").length
              })`,
            },
            {
              id: "tapas",
              label: `Tapas y Entrantes (${
                MENU_ITEMS.filter((i) => i.category === "tapas").length
              })`,
            },
            {
              id: "postres",
              label: `Postres (${
                MENU_ITEMS.filter((i) => i.category === "postres").length
              })`,
            },
            {
              id: "bebidas",
              label: `Bebidas Japonesas (${
                MENU_ITEMS.filter((i) => i.category === "bebidas").length
              })`,
            },
            {
              id: "vegano",
              label: `Veganos (${
                MENU_ITEMS.filter((i) => i.isVegan).length
              })`,
            },
            { id: "all", label: `Ver Todos (${MENU_ITEMS.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-black tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "border-2 border-stone-900 bg-red-600 text-white shadow-[2px_2px_0px_#1c1917] sm:shadow-[3px_3px_0px_#1c1917]"
                  : "border-2 border-stone-900 bg-white text-stone-800 hover:bg-amber-100 shadow-[2px_2px_0px_#1c1917]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-xl border-2 border-stone-800/80 bg-white p-3.5 sm:p-4 shadow-[2px_2px_0px_#1c1917] transition-all hover:translate-y-[-1px]"
            >
              <div>
                <div className="flex items-start justify-between gap-2 sm:gap-3">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap flex-1 min-w-0">
                    <span className="flex h-5 w-7 shrink-0 items-center justify-center rounded bg-stone-950 font-mono text-[11px] font-black text-amber-300">
                      {item.code}
                    </span>
                    <h3 className="text-sm font-black text-stone-950 truncate max-w-[180px] sm:max-w-none">
                      {item.name}
                    </h3>
                    {item.isSpicy && (
                      <Badge variant="rose" className="text-[9px] py-0 px-1.5 font-bold">
                        <Flame className="h-2.5 w-2.5 mr-0.5 text-red-500" />
                        Picante
                      </Badge>
                    )}
                    {item.isVegan && (
                      <Badge
                        variant="default"
                        className="text-[9px] py-0 px-1.5 text-emerald-950 border-emerald-500 bg-emerald-100 font-bold"
                      >
                        <Leaf className="h-2.5 w-2.5 mr-0.5 text-emerald-600" />
                        Vegano
                      </Badge>
                    )}
                    {item.isVegetarian && !item.isVegan && (
                      <Badge
                        variant="default"
                        className="text-[9px] py-0 px-1.5 text-amber-950 border-amber-400 bg-amber-100 font-bold"
                      >
                        <Leaf className="h-2.5 w-2.5 mr-0.5 text-amber-600" />
                        Vegetariano
                      </Badge>
                    )}
                  </div>
                  <span className="font-mono text-sm sm:text-base font-black text-red-600 shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="mt-1 text-xs text-stone-600 leading-normal font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-stone-300 bg-white/90 px-4 py-2.5 text-center shadow-xs">
          <p className="flex items-center justify-center gap-2 text-xs text-stone-700">
            <Info className="h-3.5 w-3.5 text-amber-600 shrink-0" />
            <span>
              <strong>Alérgenos e intolerancias:</strong> Disponemos de información completa de todos los platos para celíacos o personas con alergias.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
