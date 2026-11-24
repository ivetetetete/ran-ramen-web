"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, EyeOff, Globe, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/types";
import { RESTAURANT_INFO } from "@/lib/menu-data";

const LOCALES: { code: Locale; label: string; full: string }[] = [
  { code: "es", label: "ES", full: "Español" },
  { code: "ca", label: "CA", full: "Català" },
  { code: "en", label: "EN", full: "English" },
];

export function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isManuallyHidden, setIsManuallyHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(e.target as Node)
      ) {
        setLangMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 24);

      if (mobileMenuOpen) {
        lastScrollY.current = currentY;
        return;
      }

      if (currentY < 60) {
        if (!isManuallyHidden) {
          setIsHidden(false);
        }
      } else if (currentY > lastScrollY.current + 12) {
        setIsHidden(true);
      } else if (currentY < lastScrollY.current - 10) {
        if (!isManuallyHidden) {
          setIsHidden(false);
        }
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen, isManuallyHidden]);

  const navLinks = [
    { label: t.nav.starDishes, href: "#estrellas" },
    { label: t.nav.menu, href: "#carta" },
    { label: t.nav.reviews, href: "#opiniones" },
    { label: t.nav.contact, href: "#contacto" },
  ];

  const hideBar = () => {
    setIsManuallyHidden(true);
    setIsHidden(true);
    setMobileMenuOpen(false);
  };

  const showBar = () => {
    setIsManuallyHidden(false);
    setIsHidden(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isHidden
            ? "-translate-y-[120%] opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div className="mx-auto max-w-6xl px-3 sm:px-6 pt-2.5 sm:pt-3.5">
          <div
            className={`relative flex items-center justify-between rounded-2xl border-2 border-tinta-sumi transition-all duration-200 px-3.5 sm:px-5 py-2.5 ${
              isScrolled
                ? "bg-papel-washi/95 backdrop-blur-md shadow-manga"
                : "bg-blanco-arroz shadow-manga-sm"
            }`}
          >
            {/* Sello Círculo blanco con cuenco + RAN RAMEN */}
            <Link href="#" className="group flex items-center gap-2.5 sm:gap-3">
              <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border-2 border-tinta-sumi bg-blanco-arroz p-1 shadow-[2px_2px_0px_#1C1917] transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/ramen.png"
                  alt="Sello Ran Ramen"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1 font-display text-lg sm:text-xl tracking-wide leading-none">
                  <span className="text-tinta-sumi">RAN</span>
                  <span className="text-rojo-ran">RAMEN</span>
                </div>
                <span className="font-mono text-[10px] font-bold tracking-widest text-tinta-sumi/70 uppercase mt-0.5">
                  VILANOVA I LA GELTRÚ
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link-underline text-sm font-black text-tinta-sumi hover:text-rojo-ran transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Controls: Minimal Language Switcher + Call Button + Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Selector de idioma con icono y desplegable */}
              <div className="relative" ref={langMenuRef}>
                <button
                  type="button"
                  onClick={() => setLangMenuOpen((prev) => !prev)}
                  aria-label="Selector de idioma"
                  aria-expanded={langMenuOpen}
                  aria-haspopup="listbox"
                  title="Cambiar idioma"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-tinta-sumi bg-blanco-arroz text-tinta-sumi shadow-[2px_2px_0px_#1C1917] hover:bg-amarillo-caldo transition-colors cursor-pointer"
                >
                  <Globe className="h-4 w-4" />
                </button>

                {langMenuOpen && (
                  <div
                    role="listbox"
                    aria-label="Opciones de idioma"
                    className="absolute right-0 mt-2 w-36 rounded-xl border-2 border-tinta-sumi bg-blanco-arroz p-1.5 shadow-manga z-50 animate-menu-card"
                  >
                    {LOCALES.map((item) => {
                      const active = locale === item.code;
                      return (
                        <button
                          key={item.code}
                          type="button"
                          role="option"
                          aria-selected={active}
                          onClick={() => {
                            setLocale(item.code);
                            setLangMenuOpen(false);
                          }}
                          className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-xs font-bold transition-colors cursor-pointer ${
                            active
                              ? "bg-amarillo-caldo text-tinta-sumi border border-tinta-sumi"
                              : "text-tinta-sumi hover:bg-papel-washi"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span className="font-mono text-[10px] font-bold text-rojo-ran">
                              {item.label}
                            </span>
                            <span>{item.full}</span>
                          </span>
                          {active && <Check className="h-3.5 w-3.5 text-tinta-sumi" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Direct Phone CTA (Desktop) */}
              <a
                href={RESTAURANT_INFO.phoneHref}
                className="hidden md:inline-flex items-center gap-1.5 rounded-xl bg-rojo-ran hover:bg-tinta-sumi text-blanco-arroz px-3.5 py-2 font-mono text-xs font-bold tracking-wide btn-manga"
              >
                <Phone className="h-3.5 w-3.5 text-amarillo-caldo" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-tinta-sumi bg-blanco-arroz text-tinta-sumi shadow-[2px_2px_0px_#1C1917] lg:hidden cursor-pointer"
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {mobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Drawer */}
          {mobileMenuOpen && (
            <div className="mt-2 rounded-2xl border-2 border-tinta-sumi bg-blanco-arroz p-4 shadow-manga-lg lg:hidden animate-menu-card">
              <nav className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-black text-tinta-sumi hover:bg-amarillo-caldo/30 border-2 border-transparent hover:border-tinta-sumi transition-all"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-rojo-ran">→</span>
                  </a>
                ))}

                <div className="mt-2 pt-3 border-t-2 border-tinta-sumi/15 flex items-center gap-2">
                  <a
                    href={RESTAURANT_INFO.phoneHref}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-rojo-ran py-2.5 font-mono text-xs font-bold text-blanco-arroz btn-manga"
                  >
                    <Phone className="h-3.5 w-3.5 text-amarillo-caldo" />
                    <span>{t.nav.callCta}</span>
                  </a>
                  <button
                    type="button"
                    onClick={hideBar}
                    className="inline-flex items-center gap-1 rounded-xl border-2 border-tinta-sumi bg-papel-washi px-3 py-2.5 font-mono text-xs font-bold text-tinta-sumi"
                  >
                    <EyeOff className="h-3.5 w-3.5" />
                    <span>
                      {locale === "ca"
                        ? "Amagar"
                        : locale === "en"
                        ? "Hide"
                        : "Ocultar"}
                    </span>
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Floating pill to restore navbar when hidden */}
      <div
        className={`fixed top-3 right-3 sm:right-6 z-50 transition-all duration-300 ${
          isHidden
            ? "translate-y-0 opacity-100"
            : "-translate-y-12 opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={showBar}
          className="inline-flex items-center gap-2 rounded-full border-2 border-tinta-sumi bg-amarillo-caldo px-3.5 py-1.5 font-display text-xs text-tinta-sumi shadow-manga-sm hover:bg-rojo-ran hover:text-blanco-arroz transition-all cursor-pointer"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-rojo-ran border border-tinta-sumi" />
          <span>RAN RAMEN</span>
          <Menu className="h-3.5 w-3.5" />
        </button>
      </div>
    </>
  );
}
