"use client";

import React, { createContext, useContext, useState } from "react";
import { Locale } from "@/types";
import { UI_COPY } from "@/lib/menu-data";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof UI_COPY)["es"];
  activeMenuTab: string;
  setActiveMenuTab: (tab: string) => void;
  activeMenuView: "interactive" | "original";
  setActiveMenuView: (view: "interactive" | "original") => void;
  jumpToMenuCategory: (tab: string, view?: "interactive" | "original") => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");
  const [activeMenuTab, setActiveMenuTab] = useState<string>("all");
  const [activeMenuView, setActiveMenuView] = useState<"interactive" | "original">(
    "interactive"
  );

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
  };

  const jumpToMenuCategory = (
    tab: string,
    view: "interactive" | "original" = "interactive"
  ) => {
    setActiveMenuTab(tab);
    setActiveMenuView(view);
    if (typeof document !== "undefined") {
      const el = document.getElementById("carta");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t: UI_COPY[locale],
        activeMenuTab,
        setActiveMenuTab,
        activeMenuView,
        setActiveMenuView,
        jumpToMenuCategory,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
