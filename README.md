# Portfolio — Business Analysis & Investment Thinking

A production-ready personal portfolio built with **Next.js 14** (App Router), **Tailwind CSS**, and **Sanity CMS**.

> "I break down business problems and investment decisions using data, strategy, and financial analysis."

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + CSS variables |
| CMS | Sanity v3 (embedded Studio at `/studio`) |
| Rich Text | @portabletext/react |
| Fonts | DM Serif Display + DM Sans (Google Fonts) |
| Deployment | Vercel (recommended) |

---

## Folder Structure

```
portfolio/
├── sanity/
│   ├── schemas/
│   │   ├── caseStudy.ts       # Case study schema
│   │   ├── insight.ts         # Insights/blog schema
│   │   ├── tool.ts            # Tools schema
│   │   ├── journey.ts         # Timeline schema
│   │   └── index.ts           # Schema barrel
│   └── lib/                   # (future: mutations, webhooks)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout (Nav + Footer)
│   │   ├── page.tsx           # Homepage
│   │   ├── not-found.tsx      # 404
│   │   ├── case-studies/
│   │   │   ├── page.tsx       # List page (server)
│   │   │   ├── CaseStudiesClient.tsx  # Filter (client)
│   │   │   └── [slug]/page.tsx        # Detail page
│   │   ├── tools/page.tsx
│   │   ├── insights/page.tsx
│   │   ├── journey/
│   │   │   ├── page.tsx
│   │   │   └── JourneyClient.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── studio/[[...tool]]/page.tsx  # Embedded Sanity Studio
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── CaseStudyCard.tsx
│   │       ├── FilterBar.tsx
│   │       ├── SectionHeader.tsx
│   │       ├── PortableText.tsx
│   │       └── ThemeToggle.tsx
│   │
│   ├── lib/
│   │   ├── sanity.ts          # Sanity client + all fetch helpers
│   │   └── mockData.ts        # Fallback data (dev without Sanity)
│   │
│   └── styles/
│       └── globals.css        # Design tokens + Tailwind layers
│
├── sanity.config.ts           # Sanity Studio config
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── .env.local                 # → fill in your Sanity credentials
└── package.json
```

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Create a Sanity project

Go to [sanity.io/manage](https://sanity.io/manage) → New Project.

Copy your **Project ID** and **Dataset** name.

### 3. Configure environment

Edit `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token   # optional, for draft preview
```

### 4. Run dev server

```bash
npm run dev
```

- Site: [http://localhost:3000](http://localhost:3000)
- Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

### 5. Add your content

Open the Studio at `/studio`. You'll see four content types:

| Type | Purpose |
|---|---|
| **Case Studies** | Structured analysis pieces with 6-section framework |
| **Insights** | Short-form posts |
| **Tools** | Tools/models with status and link |
| **Journey** | Timeline entries (experience / project / achievement) |

> **Without Sanity configured**, the site automatically falls back to mock data so you can preview the full UI immediately.

---

## Design System

### Color

- Base: neutral light/dark (CSS vars: `--bg`, `--bg-card`, `--border`)
- Ink: `--ink`, `--ink-muted`, `--ink-faint`
- Accent: deep blue `#1a3a6b` (light) / `#4f7ecc` (dark)

All colors are CSS variables — toggle dark mode by adding `.dark` to `<html>`.

### Typography

- **Display**: DM Serif Display (headings, large text)
- **Body**: DM Sans (UI, body copy)
- Utility classes: `.display-xl`, `.display-lg`, `.display-md`, `.label`

### Components

- `.card` — elevated card with hover state
- `.tag` — filterable pill, supports `.active` state
- `.tag-neutral` — grey variant
- `.accent-bar` — 2.5rem blue accent line
- `.section-label` — label + extending rule line
- `.timeline-dot`, `.timeline-line` — timeline primitives

---

## Deployment (Vercel)

```bash
# Push to GitHub, then in Vercel:
# 1. Import repo
# 2. Add env vars from .env.local
# 3. Deploy
```

For Sanity CORS, go to sanity.io/manage → your project → API → CORS Origins.
Add your production URL (e.g. `https://yoursite.vercel.app`).

---

## Customisation Checklist

- [ ] Update `vishal@example.com` in `Footer.tsx` and `contact/page.tsx`
- [ ] Update LinkedIn URL in both files
- [ ] Update `about/page.tsx` bio text
- [ ] Update `metadata` in `layout.tsx` (name, description, OG)
- [ ] Mark 3 case studies as `featured: true` in Sanity Studio for homepage
- [ ] Add `/studio` to `.gitignore` exclusions if desired
- [ ] Set CORS on Sanity for production domain

---

## Case Study Structure

Each case study follows a consulting-style framework:

```
01  Problem          What question are we answering?
02  Context          Background and situational framing
03  Data & Inputs    What data was used? What metrics?
04  Approach         Frameworks and methodology
05  Analysis         Core analytical work and findings
06  Recommendation  Conclusions + actionable next steps
```

This maps directly to the Sanity schema fields.

---

## Dark Mode

Dark mode is toggled via the sun/moon button in the nav.
Preference is persisted in `localStorage`. The root layout inlines a script
to apply `.dark` class before paint — no flash.

---

## Adding a New Page

1. Create `src/app/your-page/page.tsx`
2. Add to `NAV_LINKS` in `Nav.tsx`
3. Add to footer `LINKS` array
4. Add Sanity schema if content-backed
5. Add fetch helper to `src/lib/sanity.ts`
