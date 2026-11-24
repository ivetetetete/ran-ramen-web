export type Locale = "es" | "ca" | "en";

export interface MenuItem {
  id: string;
  code: string; // e.g., A1, A2, G1, C1, T1, R1...
  name: string;
  nameCa?: string;
  nameEn?: string;
  japaneseName?: string;
  description: string; // Spanish (ES)
  descriptionCa: string; // Catalan (CA)
  descriptionEn: string; // English (EN)
  price: string;
  category:
    | "ramen"
    | "curry"
    | "donburi"
    | "gyoza"
    | "tapas"
    | "postres"
    | "bebidas";
  isSpicy?: boolean;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isStarDish?: boolean;
  starBadge?: {
    es: string;
    ca: string;
    en: string;
  };
  allergens?: (
    | "gluten"
    | "sesame"
    | "fish"
    | "mollusks"
    | "soy"
    | "spicy"
    | "egg"
    | "peanuts"
  )[];
  image?: string;
}

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  date: {
    es: string;
    ca: string;
    en: string;
  };
  comment: {
    es: string;
    ca: string;
    en: string;
  };
  initials: string;
  highlightDish: {
    es: string;
    ca: string;
    en: string;
  };
}

export interface OpeningHour {
  days: string;
  hours: string;
}
