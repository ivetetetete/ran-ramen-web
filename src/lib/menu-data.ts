import { Locale, MenuItem, GoogleReview } from "@/types";

export const RESTAURANT_INFO = {
  name: "RAN RAMEN",
  shortName: "Ran Ramen",
  phone: "931 546 297",
  phoneHref: "tel:931546297",
  instagramHandle: "@ranramen_vilanova",
  instagramUrl: "https://www.instagram.com/ranramen_vilanova",
  address: "Rambla de la Pau, 6, 08800 Vilanova i la Geltrú, Barcelona",
  mapsUrl: "https://maps.app.goo.gl/pmtvdvZLbGh8yiD19",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ran+Ramen+Vilanova+i+la+Geltru",
  rating: "4.6",
  reviewsCount: "529+",
  menuHours: "12:30H - 16:00H / 20:00H - 23:30H",
};

export const MENU_ITEMS: MenuItem[] = [
  // --- CURRYS JAPONESES (A1, A2, A3, A7, A8) ---
  {
    id: "a1",
    code: "A1",
    name: "Katsu Curry",
    japaneseName: "カツカレー",
    price: "13,90 €",
    category: "curry",
    image: "/dishes/a1.webp",
    isStarDish: true,
    starBadge: {
      es: "TOP 1 El Más Pedido",
      ca: "TOP 1 El Més Demanat",
      en: "TOP 1 Best Seller",
    },
    allergens: ["gluten", "soy", "egg", "sesame"],
    description:
      "Arroz al curry con escalope de pollo crujiente, ensalada fresca y sopa de miso.",
    descriptionCa:
      "Arròs al curri amb escalopa de pollastre cruixent, amanida fresca i sopa de miso.",
    descriptionEn:
      "Japanese curry rice with crispy chicken escalope, fresh salad and miso soup.",
  },
  {
    id: "a2",
    code: "A2",
    name: "Ebi Furai-Curry",
    japaneseName: "エビフライカレー",
    price: "12,90 €",
    category: "curry",
    image: "/dishes/a2.webp",
    isStarDish: true,
    starBadge: {
      es: "Favorito Crujiente",
      ca: "Favorit Cruixent",
      en: "Crispy Favorite",
    },
    allergens: ["gluten", "soy", "egg", "mollusks"],
    description:
      "Arroz al curry japonés con gambas fritas en panko, ensalada y sopa de miso.",
    descriptionCa:
      "Arròs al curri amb gambes fregides en panko, amanida i sopa de miso.",
    descriptionEn:
      "Curry rice with crispy panko-fried prawns, fresh salad and miso soup.",
  },
  {
    id: "a3",
    code: "A3",
    name: "Kara Age-Curry",
    japaneseName: "唐揚げカレー",
    price: "12,90 €",
    category: "curry",
    image: "/dishes/a3.webp",
    allergens: ["gluten", "soy", "egg"],
    description:
      "Arroz al curry con pollo frito japonés marinado, ensalada y sopa de miso.",
    descriptionCa:
      "Arròs al curri amb pollastre fregit japonès marinat, amanida i sopa de miso.",
    descriptionEn:
      "Curry rice with marinated Japanese fried chicken, salad and miso soup.",
  },
  {
    id: "a7",
    code: "A7",
    name: "Korokke Curry",
    japaneseName: "コロッケカレー",
    price: "11,90 €",
    category: "curry",
    image: "/dishes/a7.webp",
    isVegetarian: true,
    allergens: ["gluten", "soy", "egg"],
    description:
      "Arroz al curry con croquetas japonesas de calabaza frita, ensalada y sopa de miso.",
    descriptionCa:
      "Arròs al curri amb croqueta japonesa de carbassa, amanida i sopa de miso.",
    descriptionEn:
      "Curry rice with crispy pumpkin croquettes, fresh salad and miso soup.",
  },
  {
    id: "a8",
    code: "A8",
    name: "Toufu Curry",
    japaneseName: "豆腐カレー",
    price: "11,90 €",
    category: "curry",
    image: "/dishes/a8.webp",
    isVegetarian: true,
    isVegan: true,
    allergens: ["gluten", "soy", "sesame"],
    description:
      "Arroz al curry con tofu frito dorado, ensalada fresca y sopa de miso.",
    descriptionCa:
      "Arròs al curri amb tofu fregit daurat, amanida fresca i sopa de miso.",
    descriptionEn:
      "Curry rice with golden fried tofu, fresh salad and traditional miso soup.",
  },

  // --- DONBURIS & ARROCES (A4, A5, A6) ---
  {
    id: "a4",
    code: "A4",
    name: "Unagi-Don",
    japaneseName: "鰻丼",
    price: "15,50 €",
    category: "donburi",
    image: "/dishes/a4.webp",
    isStarDish: true,
    starBadge: {
      es: "Especialidad Gourmet",
      ca: "Especialitat Gourmet",
      en: "Gourmet Specialty",
    },
    allergens: ["fish", "soy", "gluten", "sesame"],
    description:
      "Anguila asada en láminas glaseada con salsa kabayaki, cebollitas tiernas y arroz al vapor.",
    descriptionCa:
      "Anguila rostida en làmines amb salsa kabayaki, cebetes tendres i arròs al vapor.",
    descriptionEn:
      "Sliced grilled eel glazed with kabayaki sauce over steamed rice and spring onions.",
  },
  {
    id: "a5",
    code: "A5",
    name: "Pato-Rice",
    nameCa: "Arròs amb Ànec (Pato-Rice)",
    nameEn: "Duck Donburi (Pato-Rice)",
    japaneseName: "鴨丼",
    price: "13,90 €",
    category: "donburi",
    image: "/dishes/a5.webp",
    isStarDish: true,
    starBadge: {
      es: "Donburi Estrella",
      ca: "Donburi Estrella",
      en: "Signature Donburi",
    },
    allergens: ["gluten", "soy", "egg", "sesame"],
    description:
      "Arroz con pato asado jugoso, verdura pak choi y huevo cocido marinado ajitama.",
    descriptionCa:
      "Arròs amb ànec rostit suculent, pak choi i ou cuit marinat ajitama.",
    descriptionEn:
      "Steamed rice topped with roast duck, pak choi greens and marinated ajitama egg.",
  },
  {
    id: "a6",
    code: "A6",
    name: "Chasieuw-Rice",
    nameCa: "Arròs amb Porc Chashu",
    nameEn: "Chashu Pork Rice",
    japaneseName: "チャーシュー丼",
    price: "13,90 €",
    category: "donburi",
    image: "/dishes/a6.webp",
    allergens: ["gluten", "soy", "sesame"],
    description:
      "Carne de cerdo chashu braseado a fuego lento con arroz, pak choi, bambú y sésamo.",
    descriptionCa:
      "Carn de porc chashu preparat amb arròs, pak choi, bambú i sèsam.",
    descriptionEn:
      "Slow-braised chashu pork served over rice with pak choi, bamboo shoots and sesame.",
  },

  // --- GYOZAS ARTESANAS (G1, G2, G3) ---
  {
    id: "g1",
    code: "G1",
    name: "Veggie Gyoza",
    nameCa: "Gyoza Vegetariana",
    nameEn: "Veggie Gyoza",
    japaneseName: "野菜餃子",
    price: "4,90 €",
    category: "gyoza",
    image: "/dishes/g1.webp",
    isVegetarian: true,
    isVegan: true,
    allergens: ["gluten", "soy", "sesame"],
    description:
      "Empanadillas japonesas vegetarianas rellenas de verduras frescas a la plancha (6 uds).",
    descriptionCa:
      "Crestes japoneses vegetarianes farcides de verdures fresques a la planxa (6 uts).",
    descriptionEn:
      "Pan-seared vegetarian Japanese dumplings filled with seasonal vegetables (6 pcs).",
  },
  {
    id: "g2",
    code: "G2",
    name: "Spicy Gyoza",
    nameCa: "Gyoza Picant de Pollastre",
    nameEn: "Spicy Chicken Gyoza",
    japaneseName: "ピリ辛餃子",
    price: "5,20 €",
    category: "gyoza",
    image: "/dishes/g2.webp",
    isSpicy: true,
    isStarDish: true,
    starBadge: {
      es: "TOP 2 Toque Picante",
      ca: "TOP 2 Toc Picant",
      en: "TOP 2 Spicy Kick",
    },
    allergens: ["gluten", "soy", "spicy", "sesame"],
    description:
      "Empanadillas fritas crujientes de pollo con nuestra salsa picante especial y cebolleta.",
    descriptionCa:
      "Crestes fregides cruixents de pollastre amb salsa picant especial i cebeta.",
    descriptionEn:
      "Crispy fried chicken dumplings glazed with our signature spicy sauce and scallions.",
  },
  {
    id: "g3",
    code: "G3",
    name: "Gyoza Chicken",
    nameCa: "Gyoza de Pollastre",
    nameEn: "Chicken Gyoza",
    japaneseName: "鶏餃子",
    price: "4,90 €",
    category: "gyoza",
    image: "/dishes/g3.webp",
    allergens: ["gluten", "soy", "sesame"],
    description:
      "Empanadillas tradicionales de pollo a la plancha servidas con salsa gyoza.",
    descriptionCa:
      "Crestes tradicionals de pollastre a la planxa servides amb salsa gyoza.",
    descriptionEn:
      "Classic pan-seared chicken dumplings served with traditional dipping sauce.",
  },

  // --- TAPAS Y ENTRANTES IZAKAYA (T1..T4, C1..C10) ---
  {
    id: "c2",
    code: "C2",
    name: "Takoyaki",
    japaneseName: "たこ焼き",
    price: "4,90 €",
    category: "tapas",
    image: "/dishes/c2.webp",
    isStarDish: true,
    starBadge: {
      es: "TOP 3 Clásico de Osaka",
      ca: "TOP 3 Clàssic d'Osaka",
      en: "TOP 3 Osaka Classic",
    },
    allergens: ["gluten", "mollusks", "egg", "fish", "soy"],
    description:
      "Bolas de pulpo crujientes por fuera y cremosas por dentro con mayonesa japonesa, salsa okonomi y nori.",
    descriptionCa:
      "Boles de pop amb maionesa japonesa, salsa okonomi i alga nori.",
    descriptionEn:
      "Crispy-yet-creamy octopus balls topped with Japanese mayo, okonomi sauce and nori.",
  },
  {
    id: "t1",
    code: "T1",
    name: "Edamame",
    japaneseName: "枝豆",
    price: "3,80 €",
    category: "tapas",
    image: "/dishes/t1.webp",
    isVegetarian: true,
    isVegan: true,
    allergens: ["soy"],
    description:
      "Vainas de soja tiernas al vapor con escamas de sal marina.",
    descriptionCa:
      "Tavelles de soja tendres al vapor amb escates de sal marina.",
    descriptionEn:
      "Steamed young soybeans seasoned with flaky sea salt.",
  },
  {
    id: "t2",
    code: "T2",
    name: "Kimuchi",
    japaneseName: "キムチ",
    price: "3,80 €",
    category: "tapas",
    image: "/dishes/t2.webp",
    isSpicy: true,
    isVegetarian: true,
    isVegan: true,
    allergens: ["spicy", "sesame"],
    description: "Verdura fermentada tradicional con toque picante y umami.",
    descriptionCa: "Verdura fermentada tradicional amb toc picant i umami.",
    descriptionEn: "Traditional fermented spicy cabbage with rich umami.",
  },
  {
    id: "t3",
    code: "T3",
    name: "Wakame",
    japaneseName: "わかめサラダ",
    price: "3,50 €",
    category: "tapas",
    image: "/dishes/t3.webp",
    isVegetarian: true,
    isVegan: true,
    allergens: ["sesame", "soy"],
    description: "Ensalada refrescante de algas wakame con aceite de sésamo.",
    descriptionCa: "Amanida refrescant d'algues wakame amb oli de sèsam.",
    descriptionEn: "Refreshing wakame seaweed salad dressed in sesame oil.",
  },
  {
    id: "t4",
    code: "T4",
    name: "Arroz Blanco (Gohan)",
    nameCa: "Arròs Blanc (Gohan)",
    nameEn: "Steamed Rice (Gohan)",
    japaneseName: "白ご飯",
    price: "2,00 €",
    category: "tapas",
    image: "/dishes/t4.webp",
    isVegetarian: true,
    isVegan: true,
    description: "Cuenco de arroz japonés al vapor recién hecho.",
    descriptionCa: "Bol d'arròs japonès al vapor acabat de fer.",
    descriptionEn: "Bowl of freshly steamed Japanese short-grain rice.",
  },
  {
    id: "c1",
    code: "C1",
    name: "Korokke",
    japaneseName: "かぼちゃコロッケ",
    price: "3,95 €",
    category: "tapas",
    image: "/dishes/c1.webp",
    isVegetarian: true,
    allergens: ["gluten", "egg", "soy"],
    description: "Croquetas japonesas de calabaza fritas en panko crujiente (2 uds).",
    descriptionCa: "Croquetes de carbassa fregides en panko cruixent (2 uts).",
    descriptionEn: "Crispy panko-breaded Japanese pumpkin croquettes (2 pcs).",
  },
  {
    id: "c3",
    code: "C3",
    name: "Ebi Furai",
    japaneseName: "エビフライ",
    price: "4,90 €",
    category: "tapas",
    image: "/dishes/c3.webp",
    allergens: ["gluten", "egg", "mollusks"],
    description: "Gambas rebozadas en panko japonés doradas y crujientes.",
    descriptionCa: "Gambes fregides arrebossades en panko japonès cruixent.",
    descriptionEn: "Golden crispy panko-breaded fried prawns.",
  },
  {
    id: "c4",
    code: "C4",
    name: "Kara Age",
    japaneseName: "鶏の唐揚げ",
    price: "4,90 €",
    category: "tapas",
    image: "/dishes/c4.webp",
    allergens: ["gluten", "soy", "egg"],
    description: "Pollo frito japonés marinado en soja, jengibre y ajo.",
    descriptionCa: "Pollastre fregit japonès marinat amb soja, gingebre i all.",
    descriptionEn: "Japanese fried chicken marinated in soy, ginger and garlic.",
  },
  {
    id: "c5",
    code: "C5",
    name: "Katsu Salad",
    nameCa: "Amanida Katsu",
    nameEn: "Katsu Salad",
    japaneseName: "カツサラダ",
    price: "6,90 €",
    category: "tapas",
    image: "/dishes/c5.webp",
    allergens: ["gluten", "soy", "egg", "sesame"],
    description: "Ensalada fresca variada coronada con escalope de pollo frito crujiente.",
    descriptionCa: "Amanida fresca variada amb pollastre fregit cruixent.",
    descriptionEn: "Fresh mixed salad topped with crispy fried chicken cutlet.",
  },
  {
    id: "c6",
    code: "C6",
    name: "Spicy Kara Age",
    nameCa: "Kara Age Picant",
    nameEn: "Spicy Kara Age",
    japaneseName: "辛口唐揚げ",
    price: "5,95 €",
    category: "tapas",
    image: "/dishes/c6.webp",
    isSpicy: true,
    allergens: ["gluten", "soy", "egg", "spicy", "sesame"],
    description: "Pollo frito kara-age bañado en salsa picante y alga nori.",
    descriptionCa: "Pollastre fregit amb salsa picant de la casa i alga nori.",
    descriptionEn: "Crispy fried chicken tossed in house spicy sauce and nori.",
  },
  {
    id: "c7",
    code: "C7",
    name: "Bao Chicken",
    nameCa: "Panet Bao de Pollastre",
    nameEn: "Chicken Bao Bun",
    japaneseName: "チキンパオ",
    price: "4,20 €",
    category: "tapas",
    image: "/dishes/c7.webp",
    allergens: ["gluten", "soy", "egg"],
    description: "Panecillo bao esponjoso con pollo crujiente, brotes verdes, tomate y mayonesa.",
    descriptionCa: "Panet bao esponjós de pollastre cruixent, brots verds i maionesa.",
    descriptionEn: "Fluffy steamed bao bun with crispy chicken, greens, tomato and mayo.",
  },
  {
    id: "c8",
    code: "C8",
    name: "Yasai Kakiage",
    japaneseName: "野菜かき揚げ",
    price: "3,50 €",
    category: "tapas",
    image: "/dishes/c8.webp",
    isVegetarian: true,
    isVegan: true,
    allergens: ["gluten", "soy"],
    description: "Tempura crujiente de vegetales variados cortados en juliana.",
    descriptionCa: "Tempura cruixent de vegetals variats tallats en juliana.",
    descriptionEn: "Crispy julienned mixed vegetable tempura fritter.",
  },
  {
    id: "c9",
    code: "C9",
    name: "Yakitori",
    japaneseName: "焼き鳥",
    price: "4,20 €",
    category: "tapas",
    image: "/dishes/c9.webp",
    allergens: ["soy", "gluten", "sesame"],
    description: "Brochetas de pollo con verdura a la plancha y glaseado teriyaki.",
    descriptionCa: "Broqueta de pollastre amb verdura i glacejat teriyaki.",
    descriptionEn: "Grilled chicken and vegetable skewers glazed with teriyaki.",
  },
  {
    id: "c10",
    code: "C10",
    name: "Goma Teba",
    japaneseName: "ごま手羽",
    price: "6,90 €",
    category: "tapas",
    image: "/dishes/c10.webp",
    allergens: ["soy", "gluten", "sesame"],
    description: "Alitas de pollo crujientes glaseadas con sésamo tostado.",
    descriptionCa: "Aletes de pollastre cruixents glacejades amb sèsam torrat.",
    descriptionEn: "Crispy glazed chicken wings sprinkled with toasted sesame.",
  },

  // --- POSTRES & BEBIDAS JAPONESAS ---
  {
    id: "p1",
    code: "P1",
    name: "Mochis Artesanos (2 uds)",
    nameCa: "Mochis Artesans (2 uts)",
    nameEn: "Artisan Mochis (2 pcs)",
    japaneseName: "餅アイス",
    price: "4,50 €",
    category: "postres",
    isVegetarian: true,
    description:
      "Pastel japonés de arroz glutinoso relleno de té matcha, chocolate, mango o fresa.",
    descriptionCa:
      "Pastís japonès d'arròs glutinós farcit de te matcha, xocolata, mango o maduixa.",
    descriptionEn:
      "Soft Japanese rice cake filled with matcha green tea, chocolate, mango or strawberry.",
  },
  {
    id: "p2",
    code: "P2",
    name: "Dorayaki Tradicional",
    nameCa: "Dorayaki Tradicional",
    nameEn: "Traditional Dorayaki",
    japaneseName: "どら焼き",
    price: "3,90 €",
    category: "postres",
    isVegetarian: true,
    allergens: ["gluten", "egg"],
    description:
      "Bizcocho esponjoso japonés relleno de crema de chocolate o judía roja dulce anko.",
    descriptionCa:
      "Pa de pessic esponjós japonès farcit de xocolata o mongeta vermella dolça anko.",
    descriptionEn:
      "Fluffy Japanese pancake sandwich filled with chocolate or sweet red bean paste (anko).",
  },
  {
    id: "b1",
    code: "B1",
    name: "Refresco Ramune & Latas Anime",
    nameCa: "Refresc Ramune i Llaunes Anime",
    nameEn: "Ramune Soda & Anime Cans",
    japaneseName: "ラムネ",
    price: "3,50 €",
    category: "bebidas",
    isVegan: true,
    description:
      "El mítico refresco japonés con canica de cristal y ediciones coleccionables (Naruto, Dragon Ball, Pokémon, Sailor Moon).",
    descriptionCa:
      "El mític refresc japonès amb bala de vidre i edicions col·leccionables d'anime.",
    descriptionEn:
      "Iconic Japanese marble soda & collectible anime soda cans imported from Japan.",
  },
  {
    id: "b2",
    code: "B2",
    name: "Cervezas Japonesas (Asahi / Kirin / Sapporo)",
    nameCa: "Cerveses Japoneses (Asahi / Kirin / Sapporo)",
    nameEn: "Japanese Beers (Asahi / Kirin / Sapporo)",
    japaneseName: "日本のビール",
    price: "3,80 €",
    category: "bebidas",
    isVegan: true,
    allergens: ["gluten"],
    description:
      "Selección de cervezas japonesas de importación bien frías (33cl).",
    descriptionCa:
      "Selecció de cerveses japoneses d'importació ben fredes (33cl).",
    descriptionEn:
      "Selection of ice-cold imported Japanese lagers (33cl).",
  },
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "r1",
    author: "Luchita",
    initials: "LU",
    rating: 5,
    date: {
      es: "Reseña verificada en Google",
      ca: "Ressenya verificada a Google",
      en: "Verified Google Review",
    },
    comment: {
      es: "Restaurante amplio y súper bien decorado, ambientado en el mundo japonés con todo lujo de detalles, da gusto verlo. El servicio es impecable y la comida es sencillamente exquisita. A destacar las gyozas picantes y el pollo katsu curry. Repetiremos segurísimo.",
      ca: "Restaurant ampli i súper ben decorat, ambientat en el món japonès amb tot luxe de detalls, fa goig veure'l. El servei és impecable i el menjar és senzillament exquisit. A destacar les gyozes picants i el pollastre katsu curry. Repetirem seguríssim.",
      en: "Spacious and beautifully decorated restaurant, immersed in Japanese culture down to the smallest detail. Impeccable service and simply exquisite food. Highlights are the spicy gyozas and chicken katsu curry. We will definitely be back.",
    },
    highlightDish: {
      es: "A1 Katsu Curry & G2 Spicy Gyoza",
      ca: "A1 Katsu Curry i G2 Spicy Gyoza",
      en: "A1 Katsu Curry & G2 Spicy Gyoza",
    },
  },
  {
    id: "r2",
    author: "M. R.",
    initials: "MR",
    rating: 5,
    date: {
      es: "Local Guide Google Maps",
      ca: "Local Guide Google Maps",
      en: "Local Guide Google Maps",
    },
    comment: {
      es: "Todo un acierto si te gusta el Ramen. Voy desde Vilafranca solo para comer Ramen. ¡Ah, y los postres realmente son caseros!",
      ca: "Tot un encert si t'agrada el Ramen. Vaig des de Vilafranca només per menjar Ramen. Ah, i les postres realment són casolanes!",
      en: "An absolute hit if you love Ramen. I travel from Vilafranca just to eat their Ramen. Oh, and the desserts are genuinely homemade!",
    },
    highlightDish: {
      es: "Ramen & Postres Caseros",
      ca: "Ramen i Postres Casolanes",
      en: "Ramen & Homemade Desserts",
    },
  },
  {
    id: "r3",
    author: "Erica M.",
    initials: "EM",
    rating: 5,
    date: {
      es: "Reseña en Google Maps",
      ca: "Ressenya a Google Maps",
      en: "Google Maps Review",
    },
    comment: {
      es: "¡Comida riquísima, personal muy agradable y ambiente genial, sobre todo si eres amante del manga, en especial de Naruto!",
      ca: "Menjar boníssim, personal molt agradable i ambient genial, sobretot si ets amant del manga, en especial de Naruto!",
      en: "Delicious food, super friendly staff and a great atmosphere—especially if you're a manga lover and a Naruto fan!",
    },
    highlightDish: {
      es: "Ambiente Manga & Naruto",
      ca: "Ambient Manga i Naruto",
      en: "Manga & Naruto Atmosphere",
    },
  },
  {
    id: "r4",
    author: "Oscar F.",
    initials: "OF",
    rating: 5,
    date: {
      es: "Reseña en Google Maps",
      ca: "Ressenya a Google Maps",
      en: "Google Maps Review",
    },
    comment: {
      es: "Un local bonito y acogedor donde comerse un ramen que vale la pena. Raciones generosas, trato amable y precios súper honestos en plena Rambla de la Pau.",
      ca: "Un local bonic i acollidor on menjar-se un ramen que val la pena. Racions generoses, tracte amable i preus súper honestos a plena Rambla de la Pau.",
      en: "A lovely, cozy spot for ramen that's truly worth it. Generous portions, warm hospitality and honest prices right on Rambla de la Pau.",
    },
    highlightDish: {
      es: "Ramen & C2 Takoyaki",
      ca: "Ramen i C2 Takoyaki",
      en: "Ramen & C2 Takoyaki",
    },
  },
];

export const UI_COPY: Record<
  Locale,
  {
    nav: {
      starDishes: string;
      menu: string;
      reviews: string;
      contact: string;
      callCta: string;
      openStatus: string;
    };
    hero: {
      badgeLocation: string;
      badgeStyle: string;
      eyebrow: string;
      headlinePart1: string;
      headlineHighlight: string;
      headlinePart2: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
      featuredCaption: string;
      featuredDishName: string;
      stats: {
        ratingLabel: string;
        dishesLabel: string;
        vibeLabel: string;
      };
    };
    starDishes: {
      eyebrow: string;
      title: string;
      subtitle: string;
      viewInMenu: string;
      allergensNote: string;
    };
    menuRedirect: {
      eyebrow: string;
      title: string;
      subtitle: string;
      categories: {
        id: string;
        codeRange: string;
        name: string;
        count: string;
        desc: string;
      }[];
      viewFullCarteBtn: string;
      openOfficialBoardBtn: string;
      callTakeawayBtn: string;
    };
    menuBoard: {
      eyebrow: string;
      title: string;
      subtitle: string;
      viewToggleInteractive: string;
      viewToggleOriginal: string;
      downloadCarte: string;
      tabs: {
        all: string;
        curryDonburi: string;
        gyoza: string;
        tapas: string;
        postresBebidas: string;
        vegan: string;
      };
      badges: {
        spicy: string;
        vegan: string;
        vegetarian: string;
      };
      allergenLegendTitle: string;
      allergens: {
        gluten: string;
        sesame: string;
        fish: string;
        mollusks: string;
        soy: string;
        spicy: string;
        egg: string;
        peanuts: string;
      };
      allergenNotice: string;
    };
    reviews: {
      eyebrow: string;
      title: string;
      subtitle: string;
      verifiedCount: string;
      verifiedSub: string;
      favoriteLabel: string;
      ctaGoogle: string;
    };
    contact: {
      eyebrow: string;
      title: string;
      subtitle: string;
      hoursTitle: string;
      lunchLabel: string;
      dinnerLabel: string;
      hoursDays: string;
      closedMonday: string;
      phoneTitle: string;
      phoneDesc: string;
      locationTitle: string;
      locationAction: string;
      instagramTitle: string;
      instagramDesc: string;
      takeawayCard: {
        badge: string;
        title: string;
        desc: string;
        step1: string;
        step2: string;
        step3: string;
        callBtn: string;
        mapsBtn: string;
      };
    };
    footer: {
      description: string;
      navTitle: string;
      contactTitle: string;
      rights: string;
      allergenFooter: string;
    };
  }
> = {
  es: {
    nav: {
      starDishes: "Platos Estrella",
      menu: "La Carta",
      reviews: "Opiniones",
      contact: "Contacto y Ubicación",
      callCta: "Pedir: 931 546 297",
      openStatus: "Rambla de la Pau, 6 Vilanova",
    },
    hero: {
      badgeLocation: "Rambla de la Pau, 6 Vilanova i la Geltrú",
      badgeStyle: "Espíritu Otaku & Cocina Artesana",
      eyebrow: "RAN RAMEN 蘭ラーメン",
      headlinePart1: "Alma de ",
      headlineHighlight: "manga",
      headlinePart2: ", sabor de Japón en cada cuenco.",
      subtitle:
        "Un espacio cálido y acogedor donde la gastronomía japonesa tradicional —currys crujientes, ramen, donburis en cazuela y gyozas a la plancha— convive con murales de anime y un trato cercano.",
      primaryCta: "Ver la Carta",
      secondaryCta: "Platos Estrella",
      featuredCaption: "Plato Nº1 de la Carta",
      featuredDishName: "A1 Katsu Curry con Sopa Miso",
      stats: {
        ratingLabel: "529+ reseñas en Google",
        dishesLabel: "Recetas con código propio",
        vibeLabel: "Comer en sala o para llevar",
      },
    },
    starDishes: {
      eyebrow: "SELECCIÓN DEL CHEF",
      title: "Nuestros Platos Estrella",
      subtitle:
        "Los seis favoritos indiscutibles de nuestros clientes en Vilanova, servidos tal y como los ves en nuestra carta.",
      viewInMenu: "Ver en la carta",
      allergensNote: "Todos nuestros currys incluyen arroz japonés, ensalada fresca y sopa de miso.",
    },
    menuRedirect: {
      eyebrow: "ACCESO RÁPIDO A LA CARTA",
      title: "¿Qué te apetece hoy?",
      subtitle:
        "Elige una sección para ir directamente a esa parte del menú o abre la tabla ilustrada original del restaurante.",
      categories: [
        {
          id: "curry-donburi",
          codeRange: "A1 – A8",
          name: "Currys & Donburis",
          count: "8 platos",
          desc: "Katsu Curry, Ebi Furai, Unagi-Don de anguila, Pato-Rice y Chashu.",
        },
        {
          id: "gyoza",
          codeRange: "G1 – G3",
          name: "Gyozas a la Plancha",
          count: "3 variedades",
          desc: "Vegetarianas, de pollo tradicional o crujientes con salsa picante.",
        },
        {
          id: "tapas",
          codeRange: "T1 – C10",
          name: "Tapas & Izakaya",
          count: "14 raciones",
          desc: "Takoyaki, Pan Bao, Kara Age, Korokke de calabaza, Yakitori y Edamame.",
        },
        {
          id: "postres-bebidas",
          codeRange: "P1 – B2",
          name: "Postres & Ramune",
          count: "Dulces y bebidas",
          desc: "Mochis y dorayakis caseros, refrescos Ramune de anime y cervezas japonesas.",
        },
      ],
      viewFullCarteBtn: "Ir a la Carta Interactiva",
      openOfficialBoardBtn: "Ver Carta Original",
      callTakeawayBtn: "Llamar para Llevar",
    },
    menuBoard: {
      eyebrow: "CARTA OFICIAL RAN RAMEN",
      title: "Nuestra Carta",
      subtitle:
        "Inspirada directamente en nuestro menú de mesa: clara, visual y con códigos (A1, G2, C2...) para pedir cómodamente en sala o por teléfono.",
      viewToggleInteractive: "Vista Interactiva con Fotos",
      viewToggleOriginal: "Abrir Carta Original (PDF)",
      downloadCarte: "Abrir PDF de la carta en otra pestaña",
      tabs: {
        all: "Toda la Carta",
        curryDonburi: "Currys y Arroces (A1-A8)",
        gyoza: "Gyozas (G1-G3)",
        tapas: "Tapas e Izakaya (T1-C10)",
        postresBebidas: "Postres y Bebidas",
        vegan: "100% Vegano 🌱",
      },
      badges: {
        spicy: "Picante",
        vegan: "Vegano",
        vegetarian: "Vegetariano",
      },
      allergenLegendTitle: "Guía de Alérgenos:",
      allergens: {
        gluten: "Gluten",
        sesame: "Sésamo",
        fish: "Pescado",
        mollusks: "Moluscos / Crustáceos",
        soy: "Soja",
        spicy: "Picante",
        egg: "Huevo",
        peanuts: "Cacahuetes",
      },
      allergenNotice:
        "*Aviso para personas con alergias o intolerancias: Consulte a nuestro personal. Este establecimiento tiene a disposición de los clientes información detallada de los platos que ofrece.",
    },
    reviews: {
      eyebrow: "OPINIONES REALES",
      title: "Lo que dicen en Google",
      subtitle:
        "Más de 529 comensales valoran nuestra cocina casera, la decoración manga y el trato cercano en Vilanova i la Geltrú.",
      verifiedCount: "529+ reseñas en Google Maps",
      verifiedSub: "Valoración media de 4.6 ★ sobre 5.0",
      favoriteLabel: "Destacan:",
      ctaGoogle: "Leer las 529+ opiniones en Google Maps",
    },
    contact: {
      eyebrow: "CONTACTO Y UBICACIÓN",
      title: "Ven a vernos o pide para llevar",
      subtitle:
        "Estamos en pleno corazón de Vilanova i la Geltrú, en la Rambla de la Pau. Puedes comer en nuestro salón decorado con manga o encargar tu pedido por teléfono.",
      hoursTitle: "Horario de Cocina",
      lunchLabel: "Mediodía",
      dinnerLabel: "Noche",
      hoursDays: "Martes a Domingo",
      closedMonday: "Lunes cerrado por descanso semanal",
      phoneTitle: "Teléfono de Pedidos y Reservas",
      phoneDesc: "Llámanos indicando el código de tus platos (ej. A1, G2, C2)",
      locationTitle: "Dirección en Vilanova",
      locationAction: "Abrir ruta en Google Maps →",
      instagramTitle: "Síguenos en Instagram",
      instagramDesc: "Novedades, ambiente otaku y platos del día",
      takeawayCard: {
        badge: "Takeaway Para Llevar",
        title: "Pide con los códigos de la carta",
        desc: "Hacer tu pedido para recoger en el local es comodísimo y sin esperas:",
        step1: "1. Elige tus platos favoritos y apunta su código (A1, A5, G2, C2...).",
        step2: "2. Llámanos al 931 546 297 y dinos a qué hora pasas a recogerlo.",
        step3: "3. Recógelo recién hecho y calentito en Rambla de la Pau, 6.",
        callBtn: "Llamar ahora: 931 546 297",
        mapsBtn: "Cómo llegar",
      },
    },
    footer: {
      description:
        "Cocina japonesa reconfortante con espíritu manga en Vilanova i la Geltrú. Currys caseros, ramen, donburis, gyozas y tapas izakaya.",
      navTitle: "Secciones",
      contactTitle: "Datos del Local",
      rights: "Ran Ramen. Todos los derechos reservados.",
      allergenFooter: "Carta con información detallada de alérgenos.",
    },
  },

  ca: {
    nav: {
      starDishes: "Plats Estrella",
      menu: "La Carta",
      reviews: "Opinions",
      contact: "Contacte i Ubicació",
      callCta: "Demanar: 931 546 297",
      openStatus: "Rambla de la Pau, 6 Vilanova",
    },
    hero: {
      badgeLocation: "Rambla de la Pau, 6 Vilanova i la Geltrú",
      badgeStyle: "Esperit Otaku i Cuina Artesana",
      eyebrow: "RAN RAMEN 蘭ラーメン",
      headlinePart1: "Ànima de ",
      headlineHighlight: "manga",
      headlinePart2: ", sabor del Japó a cada bol.",
      subtitle:
        "Un espai càlid i acollidor on la gastronomia japonesa tradicional —curris cruixents, ramen, donburis en cassola i gyozes a la planxa— conviu amb murals d'anime i un tracte proper.",
      primaryCta: "Veure la Carta",
      secondaryCta: "Plats Estrella",
      featuredCaption: "Plat Nº1 de la Carta",
      featuredDishName: "A1 Katsu Curry amb Sopa Miso",
      stats: {
        ratingLabel: "529+ ressenyes a Google",
        dishesLabel: "Receptes amb codi propi",
        vibeLabel: "En sala o per emportar",
      },
    },
    starDishes: {
      eyebrow: "SELECCIÓ DEL XEF",
      title: "Els Nostres Plats Estrella",
      subtitle:
        "Els sis favorits indiscutibles dels nostres clients a Vilanova, servits tal com els veus a la nostra carta.",
      viewInMenu: "Veure a la carta",
      allergensNote: "Tots els nostres curris inclouen arròs japonès, amanida fresca i sopa de miso.",
    },
    menuRedirect: {
      eyebrow: "ACCÉS RÀPID A LA CARTA",
      title: "Què et ve de gust avui?",
      subtitle:
        "Tria una secció per anar directament a aquesta part del menú o obre la carta original del restaurant.",
      categories: [
        {
          id: "curry-donburi",
          codeRange: "A1 – A8",
          name: "Curris i Donburis",
          count: "8 plats",
          desc: "Katsu Curry, Ebi Furai, Unagi-Don d'anguila, Pato-Rice i Chashu.",
        },
        {
          id: "gyoza",
          codeRange: "G1 – G3",
          name: "Gyozes a la Planxa",
          count: "3 varietats",
          desc: "Vegetarianes, de pollastre tradicional o cruixents amb salsa picant.",
        },
        {
          id: "tapas",
          codeRange: "T1 – C10",
          name: "Tapes i Izakaya",
          count: "14 racions",
          desc: "Takoyaki, Panet Bao, Kara Age, Korokke de carbassa, Yakitori i Edamame.",
        },
        {
          id: "postres-bebidas",
          codeRange: "P1 – B2",
          name: "Postres i Ramune",
          count: "Dolços i begudes",
          desc: "Mochis i dorayakis casolans, refrescos Ramune d'anime i cerveses japoneses.",
        },
      ],
      viewFullCarteBtn: "Anar a la Carta Interactiva",
      openOfficialBoardBtn: "Veure Carta Original",
      callTakeawayBtn: "Trucar per Emportar",
    },
    menuBoard: {
      eyebrow: "CARTA OFICIAL RAN RAMEN",
      title: "La Nostra Carta",
      subtitle:
        "Inspirada directament en el nostre menú de taula: clara, visual i amb codis (A1, G2, C2...) per demanar còmodament a sala o per telèfon.",
      viewToggleInteractive: "Vista Interactiva amb Fotos",
      viewToggleOriginal: "Obrir Carta Original (PDF)",
      downloadCarte: "Obrir PDF de la carta en una altra pestanya",
      tabs: {
        all: "Tota la Carta",
        curryDonburi: "Curris i Arrossos (A1-A8)",
        gyoza: "Gyozes (G1-G3)",
        tapas: "Tapes i Izakaya (T1-C10)",
        postresBebidas: "Postres i Begudes",
        vegan: "100% Vegà 🌱",
      },
      badges: {
        spicy: "Picant",
        vegan: "Vegà",
        vegetarian: "Vegetarià",
      },
      allergenLegendTitle: "Guia d'Al·lèrgens:",
      allergens: {
        gluten: "Gluten",
        sesame: "Sèsam",
        fish: "Peix",
        mollusks: "Mol·luscs / Crustacis",
        soy: "Soja",
        spicy: "Picant",
        egg: "Ous",
        peanuts: "Cacauets",
      },
      allergenNotice:
        "*Avís per a les persones amb al·lèrgies o intoleràncies: Consulteu el nostre personal. Aquest establiment té a disposició dels clients informació dels plats que ofereix.",
    },
    reviews: {
      eyebrow: "OPINIONS REALS",
      title: "El que diuen a Google",
      subtitle:
        "Més de 529 comensals valoren la nostra cuina casolana, la decoració manga i el tracte proper a Vilanova i la Geltrú.",
      verifiedCount: "529+ ressenyes a Google Maps",
      verifiedSub: "Valoració mitjana de 4.6 ★ sobre 5.0",
      favoriteLabel: "Destaquen:",
      ctaGoogle: "Llegir les 529+ opinions a Google Maps",
    },
    contact: {
      eyebrow: "CONTACTE I UBICACIÓ",
      title: "Vine a veure'ns o demana per emportar",
      subtitle:
        "Som al bell mig de Vilanova i la Geltrú, a la Rambla de la Pau. Pots dinar o sopar a la nostra sala decorada amb manga o encarregar la teva comanda per telèfon.",
      hoursTitle: "Horari de Cuina",
      lunchLabel: "Migdia",
      dinnerLabel: "Nit",
      hoursDays: "Dimarts a Diumenge",
      closedMonday: "Dilluns tancat per descans setmanal",
      phoneTitle: "Telèfon de Comandes i Reserves",
      phoneDesc: "Truca'ns indicant el codi dels teus plats (ex. A1, G2, C2)",
      locationTitle: "Adreça a Vilanova",
      locationAction: "Obrir ruta a Google Maps →",
      instagramTitle: "Segueix-nos a Instagram",
      instagramDesc: "Novetats, ambient otaku i plats del dia",
      takeawayCard: {
        badge: "Takeaway Per Emportar",
        title: "Demana amb els codis de la carta",
        desc: "Fer la teva comanda per recollir al local és molt còmode i sense esperes:",
        step1: "1. Tria els teus plats preferits i apunta'n el codi (A1, A5, G2, C2...).",
        step2: "2. Truca'ns al 931 546 297 i digues-nos a quina hora passes a recollir-ho.",
        step3: "3. Recull-ho acabat de fer i calentó a la Rambla de la Pau, 6.",
        callBtn: "Trucar ara: 931 546 297",
        mapsBtn: "Com arribar-hi",
      },
    },
    footer: {
      description:
        "Cuina japonesa reconfortant amb esperit manga a Vilanova i la Geltrú. Curris casolans, ramen, donburis, gyozes i tapes izakaya.",
      navTitle: "Seccions",
      contactTitle: "Dades del Local",
      rights: "Ran Ramen. Tots els drets reservats.",
      allergenFooter: "Carta amb informació detallada d'al·lèrgens.",
    },
  },

  en: {
    nav: {
      starDishes: "Star Dishes",
      menu: "Menu",
      reviews: "Google Reviews",
      contact: "Contact & Location",
      callCta: "Order: 931 546 297",
      openStatus: "Rambla de la Pau, 6 Vilanova",
    },
    hero: {
      badgeLocation: "Rambla de la Pau, 6 Vilanova i la Geltrú",
      badgeStyle: "Otaku Spirit & Artisan Kitchen",
      eyebrow: "RAN RAMEN 蘭ラーメン",
      headlinePart1: "Soul of ",
      headlineHighlight: "manga",
      headlinePart2: ", taste of Japan in every bowl.",
      subtitle:
        "A warm, effortless dining spot where authentic Japanese comfort food—crispy katsu curries, ramen, sizzling donburi bowls and pan-seared gyozas—meets manga art and friendly hospitality.",
      primaryCta: "Explore Menu",
      secondaryCta: "Star Dishes",
      featuredCaption: "#1 Most Ordered Dish",
      featuredDishName: "A1 Katsu Curry Set with Miso",
      stats: {
        ratingLabel: "529+ Google reviews",
        dishesLabel: "Easy code-numbered dishes",
        vibeLabel: "Dine-in or takeaway",
      },
    },
    starDishes: {
      eyebrow: "CHEF'S HIGHLIGHTS",
      title: "Our Star Dishes",
      subtitle:
        "The six undisputed favorites among our guests in Vilanova, served just as pictured on our table menu.",
      viewInMenu: "See on menu",
      allergensNote: "All our curry sets include steamed rice, fresh salad and miso soup.",
    },
    menuRedirect: {
      eyebrow: "QUICK MENU JUMP",
      title: "What are you craving today?",
      subtitle:
        "Jump straight to any section of our menu or view the restaurant's original illustrated menu board.",
      categories: [
        {
          id: "curry-donburi",
          codeRange: "A1 – A8",
          name: "Curries & Donburis",
          count: "8 dishes",
          desc: "Katsu Curry, Ebi Furai, grilled eel Unagi-Don, Duck Rice and Chashu.",
        },
        {
          id: "gyoza",
          codeRange: "G1 – G3",
          name: "Pan-Seared Gyozas",
          count: "3 varieties",
          desc: "Veggie dumplings, classic chicken or crispy fried with spicy glaze.",
        },
        {
          id: "tapas",
          codeRange: "T1 – C10",
          name: "Tapas & Izakaya",
          count: "14 plates",
          desc: "Takoyaki, Chicken Bao, Kara Age, pumpkin Korokke, Yakitori & Edamame.",
        },
        {
          id: "postres-bebidas",
          codeRange: "P1 – B2",
          name: "Desserts & Ramune",
          count: "Sweets & drinks",
          desc: "Artisan mochis & dorayakis, anime Ramune sodas and Japanese beers.",
        },
      ],
      viewFullCarteBtn: "Go to Interactive Menu",
      openOfficialBoardBtn: "View Original Menu",
      callTakeawayBtn: "Call for Takeaway",
    },
    menuBoard: {
      eyebrow: "OFFICIAL MENU RAN RAMEN",
      title: "Our Menu Board",
      subtitle:
        "Styled directly after our table menu: clear, visual and numbered with dish codes (A1, G2, C2...) for effortless dine-in or phone ordering.",
      viewToggleInteractive: "Interactive Photo Menu",
      viewToggleOriginal: "Open Original Menu (PDF)",
      downloadCarte: "Open full PDF menu in new tab",
      tabs: {
        all: "Full Menu",
        curryDonburi: "Curries & Rice (A1-A8)",
        gyoza: "Gyozas (G1-G3)",
        tapas: "Tapas & Izakaya (T1-C10)",
        postresBebidas: "Desserts & Drinks",
        vegan: "100% Vegan 🌱",
      },
      badges: {
        spicy: "Spicy",
        vegan: "Vegan",
        vegetarian: "Vegetarian",
      },
      allergenLegendTitle: "Allergen Guide:",
      allergens: {
        gluten: "Gluten",
        sesame: "Sesame",
        fish: "Fish",
        mollusks: "Mollusks / Shellfish",
        soy: "Soy",
        spicy: "Spicy",
        egg: "Eggs",
        peanuts: "Peanuts",
      },
      allergenNotice:
        "*Allergy & intolerance notice: Please ask our staff. Detailed allergen information for every dish is available upon request.",
    },
    reviews: {
      eyebrow: "GUEST OPINIONS",
      title: "What guests say on Google",
      subtitle:
        "Over 529 guests love our homemade Japanese recipes, manga-inspired interior and warm service in Vilanova i la Geltrú.",
      verifiedCount: "529+ reviews on Google Maps",
      verifiedSub: "Rated 4.6 ★ out of 5.0",
      favoriteLabel: "Highlighted:",
      ctaGoogle: "Read all 529+ reviews on Google Maps",
    },
    contact: {
      eyebrow: "CONTACT & LOCATION",
      title: "Visit us or order takeaway",
      subtitle:
        "Located right on Rambla de la Pau in the heart of Vilanova i la Geltrú. Dine in our manga-lined dining room or call ahead for quick takeaway pickup.",
      hoursTitle: "Kitchen Hours",
      lunchLabel: "Lunch",
      dinnerLabel: "Dinner",
      hoursDays: "Tuesday to Sunday",
      closedMonday: "Closed on Mondays",
      phoneTitle: "Orders & Reservations Phone",
      phoneDesc: "Call us with your dish codes (e.g. A1, G2, C2) for fast takeaway",
      locationTitle: "Address in Vilanova",
      locationAction: "Get directions on Google Maps →",
      instagramTitle: "Follow us on Instagram",
      instagramDesc: "New dishes, otaku atmosphere and daily specials",
      takeawayCard: {
        badge: "Takeaway Quick Pickup",
        title: "Order easily using dish codes",
        desc: "Ordering freshly cooked food to enjoy at home is quick and simple:",
        step1: "1. Pick your dishes and note their menu codes (A1, A5, G2, C2...).",
        step2: "2. Call us at 931 546 297 and let us know your pickup time.",
        step3: "3. Pick it up piping hot at Rambla de la Pau, 6.",
        callBtn: "Call now: 931 546 297",
        mapsBtn: "Get Directions",
      },
    },
    footer: {
      description:
        "Comforting Japanese cuisine with an otaku soul in Vilanova i la Geltrú. Homemade curries, ramen, donburis, gyozas and izakaya tapas.",
      navTitle: "Navigation",
      contactTitle: "Restaurant Info",
      rights: "Ran Ramen. All rights reserved.",
      allergenFooter: "Menu with full allergen information.",
    },
  },
};
