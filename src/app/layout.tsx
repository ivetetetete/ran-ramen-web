import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf7f2",
};

export const metadata: Metadata = {
  title: "Ran Ramen Soup | Cocina Japonesa en Vilanova i la Geltrú",
  description:
    "Ran Ramen en Vilanova i la Geltrú. Deliciosos currys japoneses, donburis, gyozas caseras y raciones de tapas tradicionales para disfrutar en sala o para llevar.",
  keywords: [
    "Ran Ramen Soup",
    "ramen vilanova",
    "curry japones",
    "katsu curry",
    "vilanova i la geltru",
    "gyozas",
    "comida japonesa vilanova",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#faf7f2] text-stone-900 selection:bg-amber-500 selection:text-white overflow-x-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
