import React from "react";
import { Star, CheckCircle, ExternalLink } from "lucide-react";
import { GoogleReview } from "@/types";

const REVIEWS: GoogleReview[] = [
  {
    id: "r1",
    author: "Marc Rovira",
    rating: 5,
    date: "Hace 1 semana",
    comment:
      "Increíble descubrimiento en Vilanova. El Katsu Curry es una auténtica pasada: el pollo súper crujiente y la salsa de curry densa y sabrosa. Las gyozas picantes brutales. Sin duda nuestro nuevo favorito.",
    initials: "MR",
    highlightDish: "Curry Katsu y Gyozas Picantes",
  },
  {
    id: "r2",
    author: "Laura Gómez",
    rating: 5,
    date: "Hace 2 semanas",
    comment:
      "Hacía muchísima falta un japonés auténtico como este aquí. El caldo del ramen reconforta el alma y los fideos tienen el punto justo. Además los takoyakis son de los mejores que he probado en Cataluña.",
    initials: "LG",
    highlightDish: "Ramen y Takoyaki",
  },
  {
    id: "r3",
    author: "Sergi Puig",
    rating: 5,
    date: "Hace 1 mes",
    comment:
      "Pedimos a menudo tanto para comer allí como para llevar a casa. El plato de pato con huevo marinado y las croquetas de calabaza korokke son un espectáculo. Servicio impecable y muy rápido.",
    initials: "SP",
    highlightDish: "Arroz con Pato y Korokke",
  },
  {
    id: "r4",
    author: "Mireia Sànchez",
    rating: 5,
    date: "Hace 3 semanas",
    comment:
      "Trato de diez, lugar limpio y comida que te transporta a Japón. El bao de pollo y el Ebi Furai Curry son una locura. Raciones generosas y precio súper honesto. ¡Repetiremos seguro!",
    initials: "MS",
    highlightDish: "Pan Bao de Pollo y Ebi Furai",
  },
];

export function GoogleReviews() {
  return (
    <section id="resenas" className="border-t-2 border-stone-900 bg-[#faf7f2] py-20 sm:py-28 relative overflow-hidden">
      <div className="pointer-events-none select-none absolute top-10 right-4 text-[80px] sm:text-[130px] md:text-[160px] font-black text-amber-950/5 leading-none z-0">
        評判
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-stone-900 bg-amber-400 px-3 py-1 text-[11px] sm:text-xs font-black uppercase text-stone-950 shadow-[2px_2px_0px_#1c1917] sm:shadow-[3px_3px_0px_#1c1917] mb-2.5 sm:mb-3">
            <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-stone-950" />
            Opiniones de Google Maps
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
            Lo que opinan de nosotros
          </h2>
          <p className="mt-2.5 sm:mt-3 max-w-xl text-sm sm:text-base text-stone-700 font-medium px-2">
            La satisfacción de quienes nos visitan cada día en Vilanova i la Geltrú es nuestro mayor orgullo.
          </p>
        </div>

        <div className="mx-auto mt-8 sm:mt-10 max-w-2xl rounded-2xl sm:rounded-3xl border-2 border-stone-900 bg-white p-5 sm:p-8 text-center shadow-[4px_4px_0px_#1c1917] sm:shadow-[6px_6px_0px_#1c1917]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-white border-2 border-stone-900 shadow-[2px_2px_0px_#1c1917]">
                <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </div>

              <div className="text-left">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-stone-950">4.6</span>
                  <span className="text-xs sm:text-sm font-bold text-stone-500">/ 5.0</span>
                </div>
                <div className="flex items-center gap-0.5 sm:gap-1 text-amber-500 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            <div className="h-10 sm:h-12 w-0.5 bg-stone-300 hidden sm:block" />

            <div className="text-center sm:text-left space-y-1">
              <p className="text-xs sm:text-sm font-black text-stone-950 flex items-center justify-center sm:justify-start gap-1.5">
                <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                Más de 500 reseñas en Google
              </p>
              <p className="text-[11px] sm:text-xs text-stone-600 font-medium">
                Uno de los asiáticos mejor valorados de Vilanova i la Geltrú
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between rounded-2xl border-2 border-stone-900 bg-white p-4 sm:p-6 shadow-[3px_3px_0px_#1c1917] sm:shadow-[4px_4px_0px_#1c1917] transition-all hover:translate-y-[-2px]"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-amber-500 font-bold text-xs text-white shadow">
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-stone-900">
                        {review.author}
                      </h4>
                      <p className="text-[11px] text-stone-400">{review.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-sm text-stone-700 leading-relaxed">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {review.highlightDish && (
                <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
                  <span className="text-stone-500 text-[11px] font-medium">Platos destacados:</span>
                  <span className="text-red-700 font-bold text-[11px] bg-red-100 px-2.5 py-0.5 rounded-full border border-red-200">
                    {review.highlightDish}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center px-2">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ran+Ramen+Soup+Vilanova"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-stone-900 bg-white hover:bg-amber-50 px-4 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-black text-stone-950 shadow-[3px_3px_0px_#1c1917] hover:shadow-[1px_1px_0px_#1c1917] hover:translate-x-[2px] hover:translate-y-[2px] transition-all uppercase tracking-wider cursor-pointer max-w-full"
          >
            <span className="truncate">Ver todas las opiniones en Google Maps</span>
            <ExternalLink className="h-4 w-4 text-red-600 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
