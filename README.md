# PixelNova

Two-person studio site. Minimal, monochrome, interactive.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

---

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Site runs immediately with Unsplash placeholder images.

---

## Design system

**Colors** — pure monochrome.
- Light bg: `#FFFFFF`
- Dark bg: `#0A0A0A`
- Text: `#FFFFFF` on dark / `#0A0A0A` on light
- Muted: 55% opacity
- No accent color.

**Typography** — single font (Inter) + mono for labels (JetBrains Mono).

**Style** — clean cards, bold caps headlines, minimal copy, lots of whitespace.

---

## Project structure

```
pixelnova/
├── app/
│   ├── layout.tsx          Fonts, metadata
│   ├── page.tsx            Assembles all sections
│   └── globals.css         Design tokens
│
├── components/
│   ├── Cursor.tsx          Custom cursor (small dot, theme-aware)
│   ├── Nav.tsx             Sticky nav, active section
│   │
│   ├── sections/
│   │   ├── Hero.tsx        Light — big caps headline + image
│   │   ├── About.tsx       Dark — image left, copy right
│   │   ├── Services.tsx    Dark — 4 minimal cards
│   │   ├── Work.tsx        Dark — clean project list
│   │   ├── Process.tsx     Dark — 4-step grid
│   │   ├── Contact.tsx     Dark — full-image CTA
│   │   └── Footer.tsx      Dark — minimal links + wordmark
│   │
│   └── ui/
│       ├── FadeUp.tsx
│       └── RevealLine.tsx
│
├── lib/
│   ├── content.ts          ALL text content
│   └── images.ts           ALL image paths
│
└── public/
    └── images/             Drop your PNGs here
```

---

## Editing content

All text lives in `lib/content.ts`. Edit there — no component code changes needed.

```ts
export const STUDIO = {
  email: "your-email@yourdomain.com",  // ← edit here
  ...
};
```

---

## Swapping images for real assets

1. Drop PNGs into `public/images/` with these filenames:

```
hero-statue.png          (4:5, ~1600px+)
about-brain.png          (4:5, ~1200px+)
contact-wireframe.png    (16:9+, ~1600px+)
work-01.png              (16:10, ~1200px+)
work-02.png
work-03.png
work-04.png
work-05.png
```

2. In `lib/images.ts`:

```ts
const USE_REMOTE_PLACEHOLDERS = false;  // was true
```

Done.

---

## Photoshop PNG export (do this right)

`File → Export → Export As...` → Format: **PNG** → Transparency: **checked**

Don't use `Save As` — that's the JPEG-renamed-to-PNG trap.

Verify in Preview/Photos — you should see a **checkerboard** behind the subject.

---

## Customizing

**Colors** — `tailwind.config.ts` and `app/globals.css`:

```css
:root {
  --bg-dark: #0A0A0A;
  --bg-light: #FFFFFF;
}
```

**Typography** — `app/layout.tsx`:

```ts
import { Inter, JetBrains_Mono } from "next/font/google";
```

**Section order** — `app/page.tsx`.

---

## Deployment

**Vercel:**
```bash
npx vercel
```

**Self-hosted:**
```bash
npm run build
npm run start
```

---

## TODO before launch

- [ ] Replace email in `lib/content.ts`
- [ ] Replace social URLs (`STUDIO.social`)
- [ ] Replace placeholder client/project data
- [ ] Drop real PNGs into `public/images/` and flip `USE_REMOTE_PLACEHOLDERS`
- [ ] Update `metadataBase` URL in `app/layout.tsx`
- [ ] Add favicon (`app/favicon.ico`)
- [ ] Add OG image (`app/opengraph-image.png` — 1200×630)

---

## License

Private — © PixelNova Studio.
