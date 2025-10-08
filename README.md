# Portfolio — React + TypeScript + SCSS (Vite)

Starter pod stronę portfolio inspirowaną układem jak u Brittany Chiang: sekcje Hero, O mnie, Projekty, Doświadczenie, Kontakt.

## Szybki start

```bash
npm install
npm run dev
```

Aplikacja uruchomi się pod adresem http://localhost:5173

## Struktura

- `src/sections` — gotowe sekcje strony
- `src/components` — wspólne komponenty (nawigacja, stopka)
- `src/styles` — SCSS z tokenami, mixinami i stylami sekcji
- `src/data` — przykładowe dane projektów i doświadczenia

## Konfiguracja

- Zmień dane w `src/sections/Hero.tsx`, `src/data/projects.ts`, `src/data/experience.ts`
- Zastąp favicon w `public/favicon.svg`
- Kolory i typografia: `src/styles/tokens.scss`

## Budowa i deploy

```bash
npm run build
npm run preview
```

Pliki produkcyjne w `dist/`. Do hostingu na Netlify/Vercel wystarczy wskazać komendę build i folder `dist`.