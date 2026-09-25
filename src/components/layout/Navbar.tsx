"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Flame, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Carta", href: "/#menu" },
    { label: "Reseñas", href: "/#resenas" },
    { label: "Horarios y Contacto", href: "/#horarios" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-stone-900 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">
        <Link href="/" className="group flex items-center gap-2 sm:gap-2.5">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-red-600 text-white border-2 border-stone-900 shadow-[2px_2px_0px_#1c1917] group-hover:scale-105 transition-transform">
            <Flame className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-300 text-amber-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-black tracking-tight text-stone-950">
              RAN RAMEN
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-stone-800 transition-colors hover:text-red-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:931546287">
            <Button
              size="sm"
              className="border-2 border-stone-900 bg-red-600 hover:bg-red-500 text-white font-black text-xs px-4 py-2 shadow-[3px_3px_0px_#1c1917] hover:shadow-[1px_1px_0px_#1c1917] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
            >
              <Phone className="mr-1.5 h-3.5 w-3.5" />
              931 546 287
            </Button>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-stone-900 bg-white text-stone-900 shadow-[2px_2px_0px_#1c1917] active:translate-x-[1px] active:translate-y-[1px] md:hidden cursor-pointer"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t-2 border-stone-900 bg-white px-5 py-5 md:hidden shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-2.5 text-base font-black text-stone-900 hover:bg-amber-100/60 active:bg-amber-100 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-red-600 text-sm">→</span>
              </Link>
            ))}
            <div className="pt-3 border-t border-stone-200 mt-1">
              <a href="tel:931546287" onClick={() => setMobileMenuOpen(false)}>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 rounded-xl border-2 border-stone-900 bg-red-600 py-3 text-sm font-black text-white shadow-[3px_3px_0px_#1c1917] active:translate-x-[1px] active:translate-y-[1px] transition-all"
                >
                  <Phone className="h-4 w-4" />
                  <span>Llamar ahora: 931 546 287</span>
                </button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
