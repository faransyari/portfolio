# Portfolio Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio from scratch as a monochrome, editorial-minimal site (light + dark) with a single-scroll home and per-project case-study routes, removing the AI chat.

**Architecture:** Next.js 15 App Router. A single typed content module feeds all sections. Home is composed of focused section components; each project renders a static `/work/[slug]` case study via `generateStaticParams`. Theme is class-based (`dark` on `<html>`) with a no-flash inline script; all colors are grayscale CSS variables that flip per theme.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS 3, framer-motion, next/font (Geist Sans + Geist Mono).

## Global Constraints

- **Monochrome only.** No hue-bearing colors anywhere. All UI colors resolve to grayscale CSS variables: `--bg`, `--fg`, `--muted`, `--line`, `--card`, `--card-fg`. No `--primary`/`--accent` with a hue.
- **Both themes.** Light and dark must both look intentional. `dark` class on `<html>`; default (no class) is light.
- **Reduced motion.** Every animation gated behind `prefers-reduced-motion: reduce`.
- **Node/Next:** Next `^15.3.3`, React `^18.3.1`, Tailwind `^3.4.1` (already installed). Do not upgrade majors.
- **No new runtime deps** beyond what's present, except removing `openai`. Fonts come from `next/font/google` (Geist, Geist_Mono) — no package needed.
- **Commits are gated.** The repo owner's standing rule: do NOT run `git commit`/`push` unless the user has explicitly authorized commits this session. Where a step says "Commit", treat it as a checkpoint: stage the files, show `git status`, and only commit if authorized — otherwise pause for review and continue.
- **Content source of truth:** `content/portfolio.ts`. No component hardcodes bio/project/experience data.
- **Verification is build + render**, not unit tests (static UI site). "Test" steps mean: `npx tsc --noEmit`, `npm run build`, and a browser render check.

---

### Task 1: Clean slate — remove AI chat, old sections, and reset styling foundation

**Files:**
- Delete: `components/sections/ChatLauncher.tsx`, `components/sections/ChatModal.tsx`, `components/ui/ChatButton.tsx`, `components/hooks/useChatModal.ts`, `app/api/chat/route.ts` (and the empty `app/api` dir)
- Delete: all `components/sections/*.tsx` (AboutSection, ContactSection, EducationSection, FeaturedProjectSection, HeroSection, ProjectsSection, SkillsSection, StatsSection, WorkSection)
- Delete: `components/ui/flip-words.tsx`, `components/ui/floating-navbar.tsx`, `components/ui/Marquee.tsx`, `components/ui/MorphModal.tsx`, `components/ui/Counter.tsx`, `components/ui/Parallax.tsx` (superseded; `Reveal.tsx`, `Section.tsx`, `motion.ts` are rebuilt in Task 3 so delete them too)
- Modify: `app/page.tsx` (temporary minimal placeholder), `styles/globals.css` (rewrite), `tailwind.config.ts` (rewrite), `.env.example`, `package.json`
- Keep: `components/theme/*` (rewired in Task 4), `lib/utils.ts`, `config/portfolio-info.ts` (migrated in Task 2, deleted there)

**Interfaces:**
- Produces: grayscale token set in `styles/globals.css`; Tailwind color names `bg`, `fg`, `muted`, `line`, `card`, `card-fg`; font CSS vars `--font-sans`, `--font-mono`.

- [ ] **Step 1: Delete AI chat + superseded files**

```bash
cd /d/Projects/portfolio
rm -f components/sections/ChatLauncher.tsx components/sections/ChatModal.tsx components/ui/ChatButton.tsx components/hooks/useChatModal.ts
rm -rf app/api
rm -f components/sections/AboutSection.tsx components/sections/ContactSection.tsx components/sections/EducationSection.tsx components/sections/FeaturedProjectSection.tsx components/sections/HeroSection.tsx components/sections/ProjectsSection.tsx components/sections/SkillsSection.tsx components/sections/WorkSection.tsx components/sections/StatsSection.tsx
rm -f components/ui/flip-words.tsx components/ui/floating-navbar.tsx components/ui/Marquee.tsx components/ui/MorphModal.tsx components/ui/Counter.tsx components/ui/Parallax.tsx components/ui/Reveal.tsx components/ui/Section.tsx components/ui/motion.ts
```

- [ ] **Step 2: Rewrite `styles/globals.css`** (grayscale tokens, no hue)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: 0 0% 100%;         /* #ffffff */
  --fg: 0 0% 8%;           /* #141414 */
  --muted: 0 0% 45%;       /* #737373 */
  --line: 0 0% 90%;        /* #e5e5e5 */
  --card: 0 0% 98%;        /* #fafafa */
  --card-fg: 0 0% 8%;
}

.dark {
  --bg: 0 0% 4%;           /* #0a0a0a */
  --fg: 0 0% 96%;          /* #f5f5f5 */
  --muted: 0 0% 55%;       /* #8c8c8c */
  --line: 0 0% 16%;        /* #292929 */
  --card: 0 0% 8%;         /* #141414 */
  --card-fg: 0 0% 96%;
}

@layer base {
  * { border-color: hsl(var(--line)); }
  html { scroll-behavior: smooth; }
  body {
    background-color: hsl(var(--bg));
    color: hsl(var(--fg));
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ::selection { background: hsl(var(--fg)); color: hsl(var(--bg)); }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
  }
}
```

- [ ] **Step 3: Rewrite `tailwind.config.ts`** (grayscale color names + font vars)

```ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        bg: "hsl(var(--bg))",
        fg: "hsl(var(--fg))",
        muted: "hsl(var(--muted))",
        line: "hsl(var(--line))",
        card: { DEFAULT: "hsl(var(--card))", fg: "hsl(var(--card-fg))" },
      },
      maxWidth: { content: "72rem" },
    },
  },
  plugins: [],
} satisfies Config;
```

- [ ] **Step 4: Replace `app/page.tsx` with a temporary placeholder** (real home built in Task 10)

```tsx
export default function Home() {
  return <main className="grid min-h-screen place-items-center font-mono text-sm text-muted">rebuilding…</main>;
}
```

- [ ] **Step 5: Scrub the exposed key from `.env.example`**

Replace the file contents with:

```bash
# No environment variables are required to run this site.
```

- [ ] **Step 6: Remove `openai` and confirm unused deps in `package.json`**

Edit `package.json` dependencies: delete the `"openai"` line. Leave `framer-motion`/`motion`, `clsx`, `tailwind-merge`, `lucide-react` (used for icons). Then:

```bash
npm install
```

- [ ] **Step 7: Verify it builds and renders**

Run: `npx tsc --noEmit && npm run build`
Expected: build succeeds, no type errors, no references to deleted files. (If `app/layout.tsx` still imports the old theme var, that's fixed in Task 4 — for now the placeholder page + existing layout should still compile since layout only imports the theme provider/script which still exist.)

- [ ] **Step 8: Commit** (gated — see Global Constraints)

```bash
git add -A
git commit -m "chore: strip AI chat and reset styling to monochrome foundation"
```

---

### Task 2: Typed content module

**Files:**
- Create: `content/portfolio.ts`
- Delete: `config/portfolio-info.ts` (after migration)

**Interfaces:**
- Produces:
  - `type Project = { slug: string; name: string; year: string; role: string; description: string; technologies: string[]; image?: string; video?: string; github?: string; demo?: string; caseStudy: { overview: string; problem: string; built: string[]; stack: string; outcome: string } }`
  - `type Experience = { company: string; location: string; position: string; duration: string }`
  - `type Education = { degree: string; institution: string; year: string; details: string }`
  - `type SkillGroup = { label: string; items: string[] }`
  - `export const profile: { name; role; tagline; location; email; linkedIn; github; website; available: boolean; resume: string; bio: string[] }`
  - `export const projects: Project[]`
  - `export const experience: Experience[]`
  - `export const education: Education[]`
  - `export const skills: SkillGroup[]`
  - `export function getProject(slug: string): Project | undefined`

- [ ] **Step 1: Write `content/portfolio.ts`** with types + migrated/refreshed data

Use the existing data in `config/portfolio-info.ts` as the source. Rewrite descriptions into professional prose. Full content:

```ts
export type Project = {
  slug: string;
  name: string;
  year: string;
  role: string;
  description: string;
  technologies: string[];
  image?: string;
  video?: string;
  github?: string;
  demo?: string;
  caseStudy: { overview: string; problem: string; built: string[]; stack: string; outcome: string };
};

export type Experience = { company: string; location: string; position: string; duration: string };
export type Education = { degree: string; institution: string; year: string; details: string };
export type SkillGroup = { label: string; items: string[] };

export const profile = {
  name: "Firlandi Althaf Ansyari",
  role: "Software Engineer",
  tagline: "I build full-stack products across web and mobile — from marketplace platforms to real-time community apps.",
  location: "Jakarta, Indonesia",
  email: "firlandi.althaf@gmail.com",
  linkedIn: "https://linkedin.com/in/firlandi",
  github: "https://github.com/faransyari",
  website: "https://firlandiansyari.com",
  available: true,
  resume: "/resume.pdf",
  bio: [
    "I'm a software engineer with dual degrees from the University of Indonesia and the University of Queensland, currently building at GoTo.",
    "I work across the stack — shipping production web and mobile apps with React, Next.js, Django, Spring Boot, and Flutter — and I care about clean interfaces, solid data models, and details that make software feel considered.",
  ],
} as const;

export const projects: Project[] = [
  {
    slug: "pc-marketplace",
    name: "PC Marketplace",
    year: "2024",
    role: "Full-stack developer",
    description: "A modern e-commerce platform for PC enthusiasts to buy and sell components.",
    technologies: ["Next.js", "Django", "Tailwind CSS", "PostgreSQL"],
    image: "/images/pc-marketplace.png",
    github: "https://github.com/faransyari/pc-marketplace",
    demo: "https://pc-marketplace.vercel.app/",
    caseStudy: {
      overview: "An e-commerce marketplace tailored to PC hardware, where enthusiasts can list, browse, and purchase components with a build-focused catalogue.",
      problem: "General marketplaces bury component specs and make compatibility hard to reason about. PC builders need structured, spec-first listings and a fast browsing experience.",
      built: [
        "Spec-first product catalogue with category and attribute filtering",
        "Listing creation and management flow for sellers",
        "A responsive Next.js storefront backed by a Django + PostgreSQL API",
      ],
      stack: "Next.js and Tailwind CSS on the front end, Django REST for the API, PostgreSQL for persistence, deployed on Vercel.",
      outcome: "A working marketplace demo with a clean storefront and a structured, filterable catalogue.",
    },
  },
  {
    slug: "collectiv",
    name: "Collectiv",
    year: "2024",
    role: "Full-stack developer",
    description: "A crowd-sourced app connecting users with local events and volunteer opportunities.",
    technologies: ["Django", "React", "Next.js"],
    video: "https://www.youtube.com/embed/oqvEPiTc-5s?controls=1&modestbranding=1&rel=0",
    github: "https://github.com/The-Mud-Koalas/collectiv-fe-mobile",
    demo: "https://collectiv-fe-web.vercel.app/",
    caseStudy: {
      overview: "A community platform that surfaces nearby events and volunteer opportunities and lets people participate, contribute, and track engagement.",
      problem: "Local events and volunteering are fragmented across channels, making it hard for people to discover and commit to opportunities near them.",
      built: [
        "Location-aware event and opportunity discovery",
        "Participation and contribution tracking for community members",
        "A shared Django backend serving both web and mobile clients",
      ],
      stack: "Django REST backend with React/Next.js web and a mobile client consuming the same API.",
      outcome: "A functioning cross-platform prototype spanning web and mobile from a single backend.",
    },
  },
  {
    slug: "isaveit",
    name: "iSaveIt",
    year: "2024",
    role: "Full-stack developer",
    description: "A financial management app for budgeting and expense tracking.",
    technologies: ["Django", "Flutter", "Dart"],
    video: "https://www.youtube.com/embed/ECg8z9c7sK0?controls=1&modestbranding=1&rel=0",
    github: "https://github.com/PPL-Waffar/iSaveIt?tab=readme-ov-file",
    caseStudy: {
      overview: "A mobile budgeting app that helps people plan budgets, record expenses, and understand where their money goes.",
      problem: "Everyday budgeting tools are often heavier than they need to be; users want quick expense capture and a clear view of their spending.",
      built: [
        "Budget planning and category-based expense tracking",
        "A Flutter mobile client for fast expense entry",
        "A Django backend for accounts, budgets, and transaction history",
      ],
      stack: "Flutter and Dart on mobile, Django on the backend.",
      outcome: "A complete mobile budgeting prototype covering budgets, expenses, and history.",
    },
  },
  {
    slug: "menuscanorder",
    name: "Menuscanorder",
    year: "2023",
    role: "Backend & full-stack developer",
    description: "A restaurant service app for menu scanning, ordering, and payment.",
    technologies: ["CodeIgniter", "PHP", "JavaScript", "MySQL"],
    image: "/images/menuscanorder.png",
    github: "https://github.com/faransyari/menuscanorder",
    caseStudy: {
      overview: "A QR-based restaurant ordering system where diners scan a table code to browse the menu, order, and pay without waiting on staff.",
      problem: "Table-service ordering is slow and staff-dependent; restaurants want diners to self-serve from their phones.",
      built: [
        "QR-to-menu flow that maps a scanned code to a table and live menu",
        "Cart, ordering, and payment steps for diners",
        "An admin side for menu and order management",
      ],
      stack: "CodeIgniter (PHP) with a MySQL database and a JavaScript front end.",
      outcome: "An end-to-end scan-order-pay flow demonstrated for restaurant service.",
    },
  },
];

export const experience: Experience[] = [
  { company: "GoTo", location: "Jakarta, Indonesia", position: "Software Engineer", duration: "Apr 2025 — Present" },
  { company: "Distrosub", location: "Brisbane, Australia", position: "Founding Software Engineer", duration: "Jul 2025 — Mar 2026" },
  { company: "University of Queensland", location: "Brisbane, Australia", position: "Casual Academic Tutor", duration: "Feb 2025 — Jul 2025" },
  { company: "Purple Patch Consulting", location: "Brisbane, Australia", position: "Full Stack Developer Intern", duration: "Oct 2024 — Dec 2024" },
  { company: "Kamar Pelajar", location: "Brisbane, Australia", position: "Backend Developer Intern", duration: "Jul 2024 — Oct 2024" },
  { company: "University of Indonesia", location: "Jakarta, Indonesia", position: "Teaching Assistant", duration: "Feb 2022 — Dec 2022" },
];

export const education: Education[] = [
  { degree: "Bachelor of Information Technology", institution: "University of Queensland", year: "2023 — 2024", details: "Software Information Systems major · UQ International Excellence Scholarship" },
  { degree: "Bachelor of Computer Science", institution: "University of Indonesia", year: "2020 — 2022", details: "Specialised in Software Engineering" },
];

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "PHP", "Dart", "Go", "Swift"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { label: "Backend", items: ["Node.js", "Django", "Spring Boot", "Laravel", "CodeIgniter"] },
  { label: "Mobile", items: ["Flutter", "Dart", "Swift"] },
  { label: "Data", items: ["PostgreSQL", "MySQL"] },
  { label: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
```

- [ ] **Step 2: Delete the old config**

```bash
rm -f config/portfolio-info.ts
rmdir config 2>/dev/null || true
```

- [ ] **Step 3: Verify types compile**

Run: `npx tsc --noEmit`
Expected: PASS (no references to the deleted config remain — the placeholder page doesn't import it).

- [ ] **Step 4: Commit** (gated)

```bash
git add -A && git commit -m "feat: add typed portfolio content module"
```

---

### Task 3: Layout primitives + motion helper

**Files:**
- Create: `components/ui/Container.tsx`, `components/ui/Reveal.tsx`, `lib/motion.ts`

**Interfaces:**
- Consumes: `lib/utils.ts` `cn(...)`.
- Produces:
  - `Container({ children, className }): JSX` — centered max-width wrapper.
  - `Reveal({ children, className, delay? }): JSX` — client component; fades/translates children in on scroll, respects reduced motion.
  - `lib/motion.ts`: `export const fadeUp = { hidden, show }`, `export const stagger = {...}`, `export const easeOut: number[]`.

- [ ] **Step 1: Create `lib/motion.ts`**

```ts
export const easeOut = [0.16, 1, 0.3, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
```

- [ ] **Step 2: Create `components/ui/Container.tsx`**

```tsx
import { cn } from "@/lib/utils";

export default function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-content px-6 sm:px-8", className)}>{children}</div>;
}
```

- [ ] **Step 3: Create `components/ui/Reveal.tsx`**

```tsx
"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: fadeUp.hidden, show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay } } }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 4: Confirm `@/` alias resolves**

Check `tsconfig.json` has `"paths": { "@/*": ["./*"] }`. If not, add it. Then run `npx tsc --noEmit`.
Expected: PASS.

- [ ] **Step 5: Commit** (gated)

```bash
git add -A && git commit -m "feat: add layout primitives and motion helpers"
```

---

### Task 4: Theme system + site chrome (Nav, ThemeToggle, Footer, layout)

**Files:**
- Modify: `components/theme/ThemeProvider.tsx` (keep as-is — already correct), `components/theme/theme-script.ts` (keep), `components/theme/ThemeToggle.tsx` (rewrite to monochrome icon button), `app/layout.tsx` (fonts + metadata)
- Create: `components/chrome/Nav.tsx`, `components/chrome/Footer.tsx`

**Interfaces:**
- Consumes: `useTheme()` from `ThemeProvider`, `profile` from content, `Container`.
- Produces: `Nav()`, `Footer()`, `ThemeToggle()` (all default exports).

- [ ] **Step 1: Rewrite `app/layout.tsx`** with Geist Sans + Geist Mono

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { THEME_SCRIPT } from "../components/theme/theme-script";
import { ThemeProvider } from "../components/theme/ThemeProvider";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Firlandi Althaf Ansyari — Software Engineer",
  description: "Software engineer building full-stack web and mobile products. Dual degrees from UQ and UI.",
  openGraph: {
    title: "Firlandi Althaf Ansyari — Software Engineer",
    description: "Software engineer building full-stack web and mobile products.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} /></head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Rewrite `components/theme/ThemeToggle.tsx`** (monochrome, sun/moon)

```tsx
"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="grid h-9 w-9 place-items-center rounded-full border border-line text-fg transition-colors hover:bg-card"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
```

- [ ] **Step 3: Create `components/chrome/Nav.tsx`** (sticky, minimal, compacts on scroll)

```tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { profile } from "@/content/portfolio";
import { cn } from "@/lib/utils";

const links = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 transition-colors", scrolled && "border-b border-line bg-bg/80 backdrop-blur")}>
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-sm font-medium tracking-tight">FA<span className="text-muted">.</span></Link>
        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-fg">{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={profile.resume} target="_blank" rel="noreferrer" className="hidden text-sm text-muted transition-colors hover:text-fg sm:inline">Résumé</a>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
```

- [ ] **Step 4: Create `components/chrome/Footer.tsx`**

```tsx
import Container from "@/components/ui/Container";
import { profile } from "@/content/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col items-start justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center">
        <span className="font-mono">© {new Date().getFullYear()} {profile.name}</span>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-fg">GitHub</a>
          <a href={profile.linkedIn} target="_blank" rel="noreferrer" className="transition-colors hover:text-fg">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-fg">Email</a>
        </div>
      </Container>
    </footer>
  );
}
```

- [ ] **Step 5: Verify**

Run: `npx tsc --noEmit && npm run build`
Expected: PASS. (Home is still the placeholder; Nav/Footer aren't mounted yet.)

- [ ] **Step 6: Commit** (gated)

```bash
git add -A && git commit -m "feat: Geist fonts, monochrome theme toggle, nav and footer"
```

---

### Task 5: Hero section

**Files:**
- Create: `components/sections/Hero.tsx`

**Interfaces:**
- Consumes: `profile`, `Container`, `Reveal`.
- Produces: `Hero()` default export. Rendered as first child of `<main>`; contains `id` targets are not needed (hero is top).

- [ ] **Step 1: Create `components/sections/Hero.tsx`**

```tsx
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/content/portfolio";

export default function Hero() {
  return (
    <section className="border-b border-line py-28 sm:py-40">
      <Container>
        <Reveal>
          <p className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
            {profile.available && <span className="inline-block h-1.5 w-1.5 rounded-full bg-fg" />}
            {profile.available ? "Available for work" : "Software Engineer"} · {profile.location}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            {profile.name.split(" ")[0]} {profile.name.split(" ").slice(1).join(" ")}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{profile.tagline}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="/#work" className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90">View work</a>
            <a href={`mailto:${profile.email}`} className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card">Get in touch</a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Temporarily mount in `app/page.tsx`** to eyeball it, then verify

Replace placeholder with `import Hero from "@/components/sections/Hero"; export default function Home(){return <main><Hero/></main>;}`.
Run: `npm run build`
Expected: PASS. (Full composition happens in Task 10 — this is a spot check; leave Hero mounted.)

- [ ] **Step 3: Commit** (gated)

```bash
git add -A && git commit -m "feat: hero section"
```

---

### Task 6: Selected Work list (editorial rows with hover thumbnail)

**Files:**
- Create: `components/sections/Work.tsx`, `components/sections/WorkRow.tsx`

**Interfaces:**
- Consumes: `projects`, `Container`, `Reveal`, `next/link`, `next/image`.
- Produces: `Work()` default export wrapping `id="work"`; `WorkRow({ project, index })`.

- [ ] **Step 1: Create `components/sections/WorkRow.tsx`** (client — hover thumbnail follows cursor)

```tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/portfolio";

export default function WorkRow({ project, index }: { project: Project; index: number }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={`/work/${project.slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line py-6 sm:gap-8 sm:py-8"
    >
      <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
      <div className="min-w-0">
        <h3 className="truncate text-2xl font-medium tracking-tight transition-opacity group-hover:opacity-60 sm:text-3xl">{project.name}</h3>
        <p className="mt-1 font-mono text-xs text-muted">{project.technologies.join(" · ")} · {project.year}</p>
      </div>
      <ArrowUpRight size={20} className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
      {project.image && (
        <div className={`pointer-events-none absolute right-16 top-1/2 z-10 hidden w-56 -translate-y-1/2 overflow-hidden rounded-lg border border-line shadow-lg transition-opacity duration-300 lg:block ${hover ? "opacity-100" : "opacity-0"}`}>
          <Image src={project.image} alt={project.name} width={448} height={280} className="h-auto w-full object-cover" />
        </div>
      )}
    </Link>
  );
}
```

- [ ] **Step 2: Create `components/sections/Work.tsx`**

```tsx
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/content/portfolio";
import WorkRow from "./WorkRow";

export default function Work() {
  return (
    <section id="work" className="scroll-mt-16 border-b border-line py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted">Selected Work</h2>
            <span className="font-mono text-xs text-muted">{String(projects.length).padStart(2, "0")}</span>
          </div>
        </Reveal>
        <div>
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}><WorkRow project={p} index={i} /></Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 3: Configure `next/image` for the YouTube-free local images** — none needed (local `/images` are fine). Verify build.

Run: `npm run build`
Expected: PASS.

- [ ] **Step 4: Commit** (gated)

```bash
git add -A && git commit -m "feat: selected work list with hover previews"
```

---

### Task 7: About + Skills section

**Files:**
- Create: `components/sections/About.tsx`

**Interfaces:**
- Consumes: `profile`, `skills`, `Container`, `Reveal`, `next/image`.
- Produces: `About()` default export wrapping `id="about"`.

- [ ] **Step 1: Create `components/sections/About.tsx`**

```tsx
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { profile, skills } from "@/content/portfolio";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-line py-24 sm:py-32">
      <Container>
        <Reveal><h2 className="mb-10 text-sm font-medium uppercase tracking-widest text-muted">About</h2></Reveal>
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <div className="overflow-hidden rounded-xl border border-line grayscale">
              <Image src="/images/profile.jpg" alt={profile.name} width={480} height={600} className="h-auto w-full object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="space-y-5 text-lg leading-relaxed text-fg">
                {profile.bio.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
              {skills.map((g, i) => (
                <Reveal key={g.label} delay={i * 0.03}>
                  <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">{g.label}</h3>
                  <ul className="space-y-1.5 text-sm">
                    {g.items.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Verify build** — `npm run build` → PASS.

- [ ] **Step 3: Commit** (gated)

```bash
git add -A && git commit -m "feat: about and skills section"
```

---

### Task 8: Experience + Education section

**Files:**
- Create: `components/sections/Experience.tsx`

**Interfaces:**
- Consumes: `experience`, `education`, `Container`, `Reveal`.
- Produces: `Experience()` default export wrapping `id="experience"`.

- [ ] **Step 1: Create `components/sections/Experience.tsx`**

```tsx
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { experience, education } from "@/content/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 border-b border-line py-24 sm:py-32">
      <Container className="grid gap-16 md:grid-cols-2">
        <div>
          <Reveal><h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted">Experience</h2></Reveal>
          <div>
            {experience.map((e, i) => (
              <Reveal key={`${e.company}-${i}`} delay={i * 0.03}>
                <div className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-line py-4">
                  <div>
                    <h3 className="font-medium">{e.position}</h3>
                    <p className="text-sm text-muted">{e.company} · {e.location}</p>
                  </div>
                  <span className="whitespace-nowrap font-mono text-xs text-muted">{e.duration}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div>
          <Reveal><h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted">Education</h2></Reveal>
          <div>
            {education.map((e, i) => (
              <Reveal key={e.institution} delay={i * 0.03}>
                <div className="border-b border-line py-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-medium">{e.institution}</h3>
                    <span className="whitespace-nowrap font-mono text-xs text-muted">{e.year}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{e.degree}</p>
                  <p className="mt-1 text-sm text-muted">{e.details}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Verify build** — `npm run build` → PASS.

- [ ] **Step 3: Commit** (gated)

```bash
git add -A && git commit -m "feat: experience and education section"
```

---

### Task 9: Contact section

**Files:**
- Create: `components/sections/Contact.tsx`

**Interfaces:**
- Consumes: `profile`, `Container`, `Reveal`.
- Produces: `Contact()` default export wrapping `id="contact"`.

- [ ] **Step 1: Create `components/sections/Contact.tsx`**

```tsx
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/content/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-28 sm:py-40">
      <Container>
        <Reveal>
          <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Let&apos;s build something.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-xl text-lg text-muted">
            I&apos;m {profile.available ? "open to new opportunities" : "always happy to talk shop"}. The fastest way to reach me is email.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <a href={`mailto:${profile.email}`} className="mt-10 inline-block text-2xl font-medium underline decoration-line underline-offset-8 transition-colors hover:decoration-fg sm:text-3xl">
            {profile.email}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Verify build** — `npm run build` → PASS.

- [ ] **Step 3: Commit** (gated)

```bash
git add -A && git commit -m "feat: contact section"
```

---

### Task 10: Compose the home page

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `Nav`, `Footer`, `Hero`, `Work`, `About`, `Experience`, `Contact`.

- [ ] **Step 1: Write final `app/page.tsx`**

```tsx
import Nav from "@/components/chrome/Nav";
import Footer from "@/components/chrome/Footer";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify build + render**

Run: `npm run build && npm run dev` (dev in background), then open `http://localhost:3000`.
Expected: home renders all sections in order; nav links scroll to `#work`/`#about`/`#contact`; theme toggle flips light/dark; both themes look intentional.

- [ ] **Step 3: Commit** (gated)

```bash
git add -A && git commit -m "feat: compose monochrome home page"
```

---

### Task 11: Project case-study route

**Files:**
- Create: `app/work/[slug]/page.tsx`, `components/work/ProjectHeader.tsx`, `components/work/ProjectBody.tsx`, `components/work/ProjectNav.tsx`

**Interfaces:**
- Consumes: `projects`, `getProject`, `Nav`, `Footer`, `Container`, `next/image`.
- Produces: static params for every project slug; a 404 for unknown slugs via `notFound()`.

- [ ] **Step 1: Create `components/work/ProjectHeader.tsx`**

```tsx
import Container from "@/components/ui/Container";
import type { Project } from "@/content/portfolio";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectHeader({ project }: { project: Project }) {
  const meta = [project.year, project.role].filter(Boolean).join(" · ");
  return (
    <Container className="pt-12">
      <Link href="/#work" className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
        <ArrowLeft size={16} /> Back to work
      </Link>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">{project.name}</h1>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted">{meta}</p>
      <p className="mt-6 max-w-2xl text-lg text-muted">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="underline decoration-line underline-offset-4 hover:decoration-fg">Live demo ↗</a>}
        {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="underline decoration-line underline-offset-4 hover:decoration-fg">GitHub ↗</a>}
      </div>
    </Container>
  );
}
```

- [ ] **Step 2: Create `components/work/ProjectBody.tsx`** (handles image OR video hero + case study)

```tsx
import Image from "next/image";
import Container from "@/components/ui/Container";
import type { Project } from "@/content/portfolio";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-3 border-t border-line py-8 md:grid-cols-[200px_1fr]">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted">{title}</h2>
      <div className="max-w-2xl text-base leading-relaxed text-fg">{children}</div>
    </div>
  );
}

export default function ProjectBody({ project }: { project: Project }) {
  const c = project.caseStudy;
  return (
    <Container className="mt-12">
      <div className="overflow-hidden rounded-xl border border-line">
        {project.video ? (
          <div className="aspect-video w-full">
            <iframe src={project.video} title={project.name} className="h-full w-full" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        ) : project.image ? (
          <Image src={project.image} alt={project.name} width={1600} height={1000} className="h-auto w-full object-cover" />
        ) : null}
      </div>

      <div className="mt-16">
        <Block title="Overview">{c.overview}</Block>
        <Block title="Problem">{c.problem}</Block>
        <Block title="What I built">
          <ul className="list-disc space-y-2 pl-5">{c.built.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </Block>
        <Block title="Stack">{c.stack}</Block>
        <Block title="Outcome">{c.outcome}</Block>
      </div>
    </Container>
  );
}
```

- [ ] **Step 3: Create `components/work/ProjectNav.tsx`** (next project link)

```tsx
import Link from "next/link";
import Container from "@/components/ui/Container";
import { projects } from "@/content/portfolio";
import { ArrowRight } from "lucide-react";

export default function ProjectNav({ slug }: { slug: string }) {
  const i = projects.findIndex((p) => p.slug === slug);
  const next = projects[(i + 1) % projects.length];
  return (
    <Container className="mt-24 border-t border-line py-12">
      <Link href={`/work/${next.slug}`} className="group flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Next project</p>
          <p className="mt-1 text-2xl font-medium tracking-tight transition-opacity group-hover:opacity-60 sm:text-3xl">{next.name}</p>
        </div>
        <ArrowRight size={24} className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-fg" />
      </Link>
    </Container>
  );
}
```

- [ ] **Step 4: Create `app/work/[slug]/page.tsx`**

```tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/chrome/Nav";
import Footer from "@/components/chrome/Footer";
import ProjectHeader from "@/components/work/ProjectHeader";
import ProjectBody from "@/components/work/ProjectBody";
import ProjectNav from "@/components/work/ProjectNav";
import { projects, getProject } from "@/content/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.name} — Firlandi Althaf Ansyari`, description: project.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <>
      <Nav />
      <main className="pb-12">
        <ProjectHeader project={project} />
        <ProjectBody project={project} />
        <ProjectNav slug={project.slug} />
      </main>
      <Footer />
    </>
  );
}
```

> Note: Next 15 types `params` as a Promise in async server components. Keep the `await params` form above.

- [ ] **Step 5: Verify build + all routes render**

Run: `npm run build`
Expected: build output lists `/work/[slug]` prerendered for all four slugs (`pc-marketplace`, `collectiv`, `isaveit`, `menuscanorder`). Then in dev, open each `/work/<slug>` and confirm image OR video hero, all five case-study blocks, and the next-project link.

- [ ] **Step 6: Commit** (gated)

```bash
git add -A && git commit -m "feat: project case-study routes"
```

---

### Task 12: Final polish, cleanup, and full verification

**Files:**
- Modify: as needed (`app/page.tsx` remnants, unused `public` assets left in place), `README.md`
- Delete: any now-unused `components/ui/*` or `components/hooks/*` still lingering; `tailwind.config.js` (duplicate of `.ts` — remove the `.js` one)

**Interfaces:** none new.

- [ ] **Step 1: Remove the duplicate Tailwind config**

```bash
rm -f tailwind.config.js
```
Confirm `postcss.config.mjs` / Next picks up `tailwind.config.ts` (Next auto-detects). Run `npm run build` → PASS.

- [ ] **Step 2: Prune leftover unused files**

```bash
ls components/ui components/hooks components/sections 2>/dev/null
```
Delete anything not imported by the new tree (grep to confirm before deleting):
```bash
git grep -l "Counter\|floating-navbar\|flip-words\|MorphModal\|Parallax\|Marquee\|useChatModal\|useReducedMotion" -- 'components/**' 'app/**' || echo "none referenced"
```
Remove files that return no references. Keep `components/hooks/useReducedMotion.ts` only if referenced; otherwise delete.

- [ ] **Step 3: Update `README.md`** to describe the rebuilt site (stack, `npm run dev`, structure). Replace any AI-chat / OpenAI mentions.

- [ ] **Step 4: Full type + lint + build gate**

Run: `npx tsc --noEmit && npm run lint && npm run build`
Expected: all PASS, zero type errors, no lint errors, all routes prerendered.

- [ ] **Step 5: Browser smoke-check (both themes)**

Start dev server, then verify against this checklist:
- `/` renders Hero → Work → About → Experience → Contact → Footer.
- Nav is sticky, compacts on scroll, links jump to sections, Résumé opens `/resume.pdf`.
- Theme toggle flips light/dark; **both** look intentional; no flash on reload.
- Work rows hover-preview on desktop; each row navigates to its `/work/<slug>`.
- Each case study shows correct image/video, all five blocks, working GitHub/Demo links, next-project link.
- Resize to mobile width: layout holds, no overflow, hover previews hidden.
- With OS "reduce motion" on: no entrance animations, no smooth-scroll jank.

- [ ] **Step 6: Commit** (gated)

```bash
git add -A && git commit -m "chore: prune unused files, update README, final polish"
```

---

## Self-Review

**Spec coverage:**
- Monochrome tokens → Task 1. Both themes → Task 1 + toggle Task 4. Fonts (Geist Sans/Mono) → Task 4. Single-scroll home → Tasks 5–10. Case-study routes → Task 11. AI-chat removal + key scrub → Task 1. Content module + refreshed copy → Task 2. Nav/Footer/ThemeToggle → Task 4. Motion + reduced-motion → Task 3 (Reveal), globals (Task 1), verify Task 12. Removals/dep prune → Tasks 1 & 12. Verification (build/lint/browser both themes) → Task 12. All spec sections covered.

**Placeholder scan:** No "TBD"/"add error handling"/"similar to" placeholders — every code step has complete code.

**Type consistency:** `Project`/`Experience`/`Education`/`SkillGroup` defined in Task 2 and consumed with matching field names in Tasks 6–11. `getProject(slug)` signature consistent between Task 2 and Task 11. `Reveal`/`Container` props consistent across all consumers. `useTheme()` shape matches existing `ThemeProvider`.

**Note on `content/` alias:** components import from `@/content/portfolio`; ensure `tsconfig.json` `@/*` maps to project root (checked in Task 3, Step 4).
