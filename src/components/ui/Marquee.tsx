import React from "react";
import { Flame, Star, Phone, BookOpenText, Soup, MapPin, Leaf, Sparkles } from "lucide-react";

export function Marquee() {
  const items = [
    { text: "RAN RAMEN SOUP", icon: Flame, highlight: true },
    { text: "VILANOVA I LA GELTRÚ", icon: MapPin },
    { text: "4.6 ★ EN GOOGLE (+500 OPINIONES)", icon: Star, highlight: true },
    { text: "OPCIONES 100% VEGANAS", icon: Leaf, highlight: true },
    { text: "POSTRES: MOCHIS & DORAYAKIS", icon: Sparkles },
    { text: "BEBIDAS JAPONESAS: RAMUNE & SAKE", icon: Flame, highlight: true },
    { text: "CALDOS DE 16 HORAS", icon: Flame },
    { text: "PEDIDOS TAKE AWAY: 931 546 287", icon: Phone, highlight: true },
    { text: "LOCAL EMPAPELADO DE MANGA", icon: BookOpenText },
    { text: "CURRYS CASEROS & DONBURIS", icon: Flame },
    { text: "GYOZAS & TAKOYAKIS ARTESANOS", icon: Soup },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-stone-900 border-y-2 border-red-600 py-3 select-none shadow-md z-20">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-stone-900 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-stone-900 to-transparent z-10" />

      <div className="animate-marquee flex items-center gap-8">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`m1-${idx}`}
              className="flex items-center gap-2.5 text-xs sm:text-sm font-black tracking-widest uppercase whitespace-nowrap"
            >
              <Icon
                className={`h-4 w-4 ${
                  item.highlight ? "text-amber-400 fill-amber-400" : "text-red-500"
                }`}
              />
              <span className={item.highlight ? "text-amber-300 font-extrabold" : "text-stone-200"}>
                {item.text}
              </span>
              <span className="text-red-500 text-xs ml-3">✦</span>
            </div>
          );
        })}

        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`m2-${idx}`}
              className="flex items-center gap-2.5 text-xs sm:text-sm font-black tracking-widest uppercase whitespace-nowrap"
            >
              <Icon
                className={`h-4 w-4 ${
                  item.highlight ? "text-amber-400 fill-amber-400" : "text-red-500"
                }`}
              />
              <span className={item.highlight ? "text-amber-300 font-extrabold" : "text-stone-200"}>
                {item.text}
              </span>
              <span className="text-red-500 text-xs ml-3">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
