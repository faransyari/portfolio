# Portfolio Rebuild — Design

**Date:** 2026-07-02
**Owner:** Firlandi Althaf Ansyari
**Status:** Approved (pending spec review)

## Goal

Rebuild the personal portfolio from scratch as a monochrome, editorial-minimal
site with a sleek "product" feel (Vercel Geist / Linear lineage). Professional,
clean, fast, and distinctive without relying on a color accent.

## Decisions (locked)

- **Aesthetic:** Monochrome — true black/white + grayscale only, no color accent.
- **Theme:** Light **and** dark, with a toggle. Both modes tuned intentionally.
- **Structure:** Single-scroll home + per-project case-study routes.
- **AI chat:** Removed entirely.
- **Content:** Full rebuild + refreshed copy (rewrite hero, project case studies,
  tighten about/experience wording).
- **Typography:** Grotesk sans for headings/body (Geist Sans), **mono for
  labels/meta/captions** (Geist Mono) — the mono captions carry the "engineered"
  monochrome feel.
- **Case-study depth:** Full writeups (Overview → Problem → What I built → Stack →
  Outcome) per project.

## Stack & Foundations

- Next.js 15 App Router + TypeScript + Tailwind (retained).
- Keep `framer-motion` for motion. Remove `openai`, and prune other now-unused
  deps (`@tabler/icons-react`, `mini-svg-data-uri`, etc.) once confirmed unused.
- **Design tokens:** a small grayscale token set exposed as CSS variables that
  flip per theme — `--bg`, `--fg`, `--muted`, `--line`, `--card` (and hover/focus
  variants as needed). Single source of truth in global CSS; Tailwind reads them.
- **Fonts:** Geist Sans (headings + body) and Geist Mono (labels/meta) via
  `next/font`. Respect `prefers-reduced-motion`.

## Routes & Structure

```
/                      Home (single scroll)
/work/[slug]           Project case-study page
```

### Home

Sticky minimal nav: name-mark (left) · Work / About / Contact (center or right) ·
theme toggle · Résumé link. Compacts subtly on scroll.

Sections in order:

1. **Hero** — large typographic statement: name, "Software Engineer", one-line
   value proposition, location + an "available" status dot. Quiet entrance motion.
2. **Selected Work** — projects rendered as editorial rows
   (`01 — PC Marketplace · Next · Django · 2024 →`). Hover reveals a thumbnail;
   click navigates to the detail page.
3. **About** — tight bio + portrait; skills grouped into mono-labelled categories.
4. **Experience** — role rows: company · position · duration.
5. **Education** — the two degrees (UI, UQ).
6. **Contact** — large "let's build something" CTA, email, socials, footer.

### Project detail (`/work/[slug]`)

- Back link.
- Title + meta line (year · role · tech · GitHub / Demo links).
- Hero image or embedded video.
- Case study body: **Overview → Problem → What I built → Stack → Outcome**.
- "Next project →" link to the following project.

Slugs are generated from project names (e.g. `pc-marketplace`, `menuscanorder`,
`collectiv`, `isaveit`). `generateStaticParams` renders all detail pages.

## Data & Content

- Single typed source of truth: `content/portfolio.ts` (refactored from
  `config/portfolio-info.ts`). Strongly typed exports; no stray AI system-prompt
  generator.
- Project shape gains `slug`, `year`, `role`, optional `image`/`video`, and a
  `caseStudy` object (`overview`, `problem`, `built`, `stack`, `outcome`).
- Copy is rewritten for professionalism. Existing assets:
  - Screenshots exist for PC Marketplace and Menuscanorder.
  - Collectiv and iSaveIt are video-only (YouTube embeds carry the visual).
  - Portrait (`profile.jpg`/`profile.png`), tech icons, and `resume.pdf` exist.

## Components (target architecture)

- `app/layout.tsx` — fonts, theme provider, metadata.
- `app/page.tsx` — home composition.
- `app/work/[slug]/page.tsx` — case-study page + `generateStaticParams`.
- `content/portfolio.ts` — typed content.
- `components/`:
  - Layout/primitives: `Container`/`Section`, `Reveal` (scroll-in motion),
    motion helpers.
  - Chrome: `Nav`, `ThemeToggle`, `Footer`.
  - Home sections: `Hero`, `WorkList` + `WorkRow`, `About`, `Experience`,
    `Education`, `Contact`.
  - Detail: `ProjectHeader`, `ProjectBody`, `ProjectNav`.
- Theme system retained but simplified (`ThemeProvider` + inline no-flash script +
  `ThemeToggle`).

Each component has one clear purpose and reads from the typed content module or
props — no component owns global state beyond the theme provider.

## Motion

Subtle and consistent: fade/translate scroll reveals, hover states on work rows
and links, smooth anchor scrolling. All motion gated behind `prefers-reduced-motion`.

## Removals

- All AI-chat code: `ChatModal`, `ChatLauncher`, `ChatButton`,
  `hooks/useChatModal`, and `app/api/chat/route.ts`.
- The exposed OpenAI key in `.env.example` (and remove the file if it holds
  nothing else). **The user must separately revoke/rotate that key** — it is in
  git history.
- Old section components superseded by the rebuild.
- `openai` dependency and any other deps left unused after the rebuild.

## Verification

Static site, so:

- `next build` / `tsc` passes with no type errors.
- `next lint` clean.
- Browser smoke-check of `/` and every `/work/[slug]` in both light and dark
  themes; verify nav, theme toggle, résumé link, external links, and reduced-motion.

## Out of Scope (YAGNI)

- Any CMS / dynamic backend.
- Blog / writing section (not requested).
- Analytics, i18n, contact-form backend (mailto link is sufficient).
- Reintroducing the AI assistant.
