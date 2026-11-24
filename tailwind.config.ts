import type { Config } from "tailwindcss";

/**
 * Guía de Marca Oficial — RAN RAMEN (Propuesta de Marca · V1)
 * "Un cómic con sabor a caldo"
 */
export const BRAND_COLORS = {
  /** Rojo Ran — Color principal: botones, títulos clave, packaging (RGB 220·38·38) */
  "rojo-ran": "#DC2626",
  /** Naranja Fideo — Acento del logo: iconos, detalles, hover (RGB 245·158·11) */
  "naranja-fideo": "#F59E0B",
  /** Amarillo Caldo — Fondos llamativos, stickers, promos (RGB 251·191·36) */
  "amarillo-caldo": "#FBBF24",
  /** Tinta Sumi — Contornos (2px), texto, sombras duras, fondos oscuros (RGB 28·25·23) */
  "tinta-sumi": "#1C1917",
  /** Papel Washi — Fondo base web e impresos (RGB 250·247·242) */
  "papel-washi": "#FAF7F2",
  /** Blanco Arroz — Tarjetas, sello del logo, texto sobre rojo */
  "blanco-arroz": "#FFFFFF",
} as const;

export const BRAND_FONTS = {
  /** Titulares (H1/H2) — Dela Gothic One */
  display: ["var(--font-dela-gothic)", "sans-serif"],
  /** Texto y subtítulos (H3 900, Párrafo 500) — Zen Kaku Gothic New */
  sans: ["var(--font-zen-kaku)", "ui-sans-serif", "system-ui", "sans-serif"],
  /** Datos, precios, números de plato (#07 · 12,90 €), horarios y etiquetas — Space Mono */
  mono: ["var(--font-space-mono)", "ui-monospace", "monospace"],
} as const;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...BRAND_COLORS,
        ran: {
          red: BRAND_COLORS["rojo-ran"],
          orange: BRAND_COLORS["naranja-fideo"],
          yellow: BRAND_COLORS["amarillo-caldo"],
          ink: BRAND_COLORS["tinta-sumi"],
          paper: BRAND_COLORS["papel-washi"],
          white: BRAND_COLORS["blanco-arroz"],
        },
      },
      fontFamily: {
        display: [...BRAND_FONTS.display],
        sans: [...BRAND_FONTS.sans],
        mono: [...BRAND_FONTS.mono],
        heading: [...BRAND_FONTS.display],
        body: [...BRAND_FONTS.sans],
        data: [...BRAND_FONTS.mono],
      },
      boxShadow: {
        manga: "4px 4px 0px #1C1917",
        "manga-sm": "3px 3px 0px #1C1917",
        "manga-lg": "6px 6px 0px #1C1917",
        "manga-xl": "8px 8px 0px #1C1917",
      },
    },
  },
  plugins: [],
};

export default config;
