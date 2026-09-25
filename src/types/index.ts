export interface MenuItem {
  id: string;
  code: string; // Ej: A1, A2, G1, C1, T1...
  name: string;
  japaneseName?: string;
  description: string;
  descriptionCa?: string;
  descriptionEn?: string;
  price: string;
  category: "curry" | "donburi" | "gyoza" | "tapas" | "postres" | "bebidas";
  isSpicy?: boolean;
  isVegetarian?: boolean;
  isVegan?: boolean;
  allergens?: string[];
  image?: string;
}

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  initials: string;
  highlightDish?: string;
}

export interface OpeningHour {
  days: string;
  hours: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  instagram: string;
  hours: OpeningHour[];
}
