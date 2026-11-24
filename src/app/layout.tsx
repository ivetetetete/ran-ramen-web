import type { Metadata, Viewport } from "next";
import {
  Dela_Gothic_One,
  Zen_Kaku_Gothic_New,
  Space_Mono,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { getSiteUrl } from "@/lib/site-url";
import { RESTAURANT_INFO } from "@/lib/menu-data";

const delaGothicOne = Dela_Gothic_One({
  variable: "--font-dela-gothic",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#DC2626",
};

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ran Ramen | ラーメン Artesanal & Cocina Japonesa en Vilanova i la Geltrú",
    template: "%s | Ran Ramen Vilanova",
  },
  description:
    "Ran Ramen en Vilanova i la Geltrú (Rambla de la Pau, 6). ラーメン artesanal, katsu curry japonés, donburis, gyozas a la plancha, takoyaki y tapas izakaya. En sala o take away (931 546 297).",
  icons: {
    icon: "/ramen.png",
    shortcut: "/ramen.png",
    apple: "/ramen.png",
  },
  keywords: [
    "Ran Ramen",
    "Ran Ramen Vilanova",
    "ramen vilanova",
    "ramen vilanova i la geltru",
    "restaurante japones vilanova",
    "restaurante japones vilanova i la geltru",
    "curry japones vilanova",
    "katsu curry vilanova",
    "gyozas vilanova",
    "takoyaki vilanova",
    "comida japonesa para llevar vilanova",
    "Rambla de la Pau 6",
  ],
  authors: [{ name: "Ran Ramen Vilanova" }],
  creator: "Ran Ramen",
  publisher: "Ran Ramen",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["ca_ES", "en_US"],
    url: "/",
    siteName: "Ran Ramen Vilanova i la Geltrú",
    title: "Ran Ramen | ラーメン Artesanal & Cocina Japonesa en Vilanova i la Geltrú",
    description:
      "Currys japoneses crujientes, ramen, donburis, gyozas a la plancha y tapas izakaya con ambiente manga en Rambla de la Pau, 6 (Vilanova i la Geltrú). Pide en sala o take away: 931 546 297.",
    images: [
      {
        url: "/dishes/a1.webp",
        width: 1200,
        height: 750,
        alt: "A1 Katsu Curry - Ran Ramen Vilanova i la Geltrú",
      },
      {
        url: "/ramen.png",
        width: 512,
        height: 512,
        alt: "Logo Ran Ramen Vilanova",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ran Ramen | ラーメン Artesanal & Cocina Japonesa en Vilanova i la Geltrú",
    description:
      "Currys japoneses, ramen, donburis, gyozas y tapas izakaya en Rambla de la Pau, 6 (Vilanova i la Geltrú). Take away: 931 546 297.",
    images: ["/dishes/a1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "ES-CT",
    "geo.placename": "Vilanova i la Geltrú",
    "geo.position": "41.2208;1.7294",
    ICBM: "41.2208, 1.7294",
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${siteUrl}/#restaurant`,
  name: "Ran Ramen",
  alternateName: "Ran Ramen Vilanova",
  description:
    "Restaurante japonés con ambiente manga en Vilanova i la Geltrú. Especialistas en ramen artesanal, currys japoneses, donburis, gyozas a la plancha y tapas izakaya.",
  url: siteUrl,
  telephone: "+34931546297",
  priceRange: "€",
  servesCuisine: ["Japanese", "Ramen", "Japanese Curry", "Izakaya", "Donburi"],
  acceptsReservations: "True",
  hasMenu: `${siteUrl}/menu-carta-oficial.pdf`,
  image: [`${siteUrl}/dishes/a1.webp`, `${siteUrl}/ramen.png`],
  logo: `${siteUrl}/ramen.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rambla de la Pau, 6",
    addressLocality: "Vilanova i la Geltrú",
    addressRegion: "Barcelona",
    postalCode: "08800",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.2208,
    longitude: 1.7294,
  },
  sameAs: [RESTAURANT_INFO.instagramUrl, RESTAURANT_INFO.mapsUrl],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    bestRating: "5",
    ratingCount: "529",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "12:30",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "20:00",
      closes: "23:30",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${delaGothicOne.variable} ${zenKakuGothicNew.variable} ${spaceMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-washi-paper text-tinta-sumi font-sans selection:bg-rojo-ran selection:text-blanco-arroz overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd),
          }}
        />
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 overflow-x-hidden">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
