"use client";

import React from "react";
import { Star, CheckCircle, ExternalLink, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { GOOGLE_REVIEWS, RESTAURANT_INFO } from "@/lib/menu-data";
import { Reveal } from "@/components/ui/Reveal";

export function GoogleReviews() {
  const { locale, t } = useLanguage();

  return (
    <section
      id="opiniones"
      className="relative py-16 sm:py-24 scroll-mt-16 overflow-hidden border-t-2 border-tinta-sumi/15"
    >
      {/* Marca de agua Kanji sutil */}
      <div
        className="pointer-events-none select-none absolute top-14 right-6 font-display text-[110px] sm:text-[170px] text-tinta-sumi/[0.04] leading-none z-0"
        aria-hidden="true"
      >
        評判
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-tinta-sumi bg-amarillo-caldo px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-tinta-sumi shadow-[2px_2px_0px_#1C1917]">
              <Star className="h-3.5 w-3.5 fill-rojo-ran text-rojo-ran" />
              {t.reviews.eyebrow}
            </span>

            <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight text-tinta-sumi">
              {t.reviews.title}
            </h2>

            <p className="mt-3 text-base sm:text-[17px] text-tinta-sumi/80 leading-relaxed font-medium">
              {t.reviews.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Resumen Google Maps con borde de 2px y sombra dura */}
        <Reveal delay={70}>
          <div className="mx-auto mt-8 sm:mt-10 max-w-2xl rounded-2xl border-2 border-tinta-sumi bg-blanco-arroz p-5 sm:p-7 shadow-manga">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                {/* Google G Logo */}
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-papel-washi border-2 border-tinta-sumi shadow-[2px_2px_0px_#1C1917]">
                  <svg className="h-7 w-7" viewBox="0 0 24 24">
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

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl sm:text-4xl text-tinta-sumi">
                      {RESTAURANT_INFO.rating}
                    </span>
                    <span className="font-mono text-xs font-bold text-tinta-sumi/70">
                      / 5.0
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-naranja-fideo text-tinta-sumi"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-10 w-0.5 bg-tinta-sumi/20 hidden sm:block" />

              <div className="text-center sm:text-left">
                <p className="text-sm font-black text-tinta-sumi flex items-center justify-center sm:justify-start gap-1.5">
                  <CheckCircle className="h-4 w-4 text-rojo-ran shrink-0" />
                  <span>{t.reviews.verifiedCount}</span>
                </p>
                <p className="font-mono text-xs font-bold text-tinta-sumi/75 mt-0.5">
                  {t.reviews.verifiedSub}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Grid de Reseñas estilo viñeta de manga */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {GOOGLE_REVIEWS.map((review, idx) => (
            <Reveal key={review.id} delay={idx * 70}>
              <div className="card-refined h-full flex flex-col justify-between rounded-2xl bg-blanco-arroz p-5 sm:p-6">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rojo-ran font-mono font-bold text-xs text-blanco-arroz border-2 border-tinta-sumi shadow-[2px_2px_0px_#1C1917]">
                        {review.initials}
                      </div>
                      <div>
                        <h3 className="font-sans text-sm font-black text-tinta-sumi">
                          {review.author}
                        </h3>
                        <p className="font-mono text-[11px] font-bold text-tinta-sumi/65">
                          {review.date[locale]}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-naranja-fideo text-tinta-sumi"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="relative mt-4">
                    <Quote className="h-5 w-5 text-rojo-ran mb-1" />
                    <p className="text-sm sm:text-[15px] text-tinta-sumi/90 font-medium leading-relaxed">
                      &ldquo;{review.comment[locale]}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t-2 border-tinta-sumi/10 flex items-center justify-between gap-2 text-xs">
                  <span className="font-mono text-tinta-sumi/70 font-bold">
                    {t.reviews.favoriteLabel}
                  </span>
                  <span className="rounded-lg border-2 border-tinta-sumi bg-amarillo-caldo px-3 py-0.5 font-mono font-bold text-[11px] text-tinta-sumi shadow-[2px_2px_0px_#1C1917]">
                    {review.highlightDish[locale]}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Botón a Google Maps */}
        <Reveal delay={140}>
          <div className="mt-8 sm:mt-10 text-center">
            <a
              href={RESTAURANT_INFO.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blanco-arroz hover:bg-amarillo-caldo px-6 py-3.5 text-xs sm:text-sm font-black text-tinta-sumi btn-manga"
            >
              <span>{t.reviews.ctaGoogle}</span>
              <ExternalLink className="h-4 w-4 text-rojo-ran" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
