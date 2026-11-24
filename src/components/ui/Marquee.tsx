import React from "react";

export function Marquee() {
  const phrases = [
    "ラーメン RAMEN ARTESANAL",
    "RAN RAMEN VILANOVA I LA GELTRÚ",
    "¡ウマい! SLURP! ズルズル",
    "CALDO DE 18 HORAS",
    "TAKE AWAY 931 546 297",
    "ごちそうさま ¡ITADAKIMASU!",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-rojo-ran border-y-2 border-tinta-sumi py-2.5 select-none z-20">
      <div className="animate-marquee flex items-center gap-8">
        {[...phrases, ...phrases].map((text, idx) => (
          <div
            key={`marquee-${idx}`}
            className="flex items-center gap-4 font-display text-xs sm:text-sm tracking-wider text-blanco-arroz uppercase whitespace-nowrap"
          >
            <span>{text}</span>
            <span className="inline-flex h-2 w-2 rounded-full bg-amarillo-caldo border border-tinta-sumi" />
          </div>
        ))}
      </div>
    </div>
  );
}
