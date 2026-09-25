# Ran Ramen Web 🍜

Sitio web moderno para **Ran Ramen**, desarrollado con **Next.js (App Router)**, **Tailwind CSS**, **TypeScript** y gestionado con **npm**.

## 🚀 Tecnologías

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Utilidades CSS**: `clsx` y `tailwind-merge` (`cn`)
- **Gestor de paquetes**: npm

---

## 📁 Estructura del Proyecto

```text
ran-ramen-web/
├── public/                     # Recursos públicos y estáticos
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css         # Estilos globales y directivas Tailwind CSS
│   │   ├── layout.tsx          # Layout principal con Navbar y Footer
│   │   └── page.tsx            # Página principal / Landing interactiva
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Barra de navegación adaptable (desktop + móvil)
│   │   │   └── Footer.tsx      # Pie de página y enlaces
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Sección de bienvenida y propuesta de valor
│   │   │   ├── FeaturedMenu.tsx# Catálogo destacado de ramen y especialidades
│   │   │   ├── About.tsx       # Historia y filosofía culinaria
│   │   │   └── LocationHours.tsx # Ubicación, horarios y formulario de reservas
│   │   └── ui/
│   │       ├── Badge.tsx       # Etiquetas y pills para platos
│   │       ├── Button.tsx      # Botón reutilizable con variantes y tamaños
│   │       └── Card.tsx        # Tarjetas modulares con bordes y hover
│   ├── lib/
│   │   └── utils.ts            # Helper cn para combinación de clases Tailwind
│   └── types/
│       └── index.ts            # Tipado TypeScript (MenuItem, OpeningHour, etc.)
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── next.config.ts
```

---

## 🛠️ Comandos Disponibles

### Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la web.

### Compilar para producción
```bash
npm run build
```

### Iniciar el servidor de producción
```bash
npm run start
```

### Comprobación de código (Linting)
```bash
npm run lint
```
