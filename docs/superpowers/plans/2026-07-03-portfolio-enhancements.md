# Portfolio Enhancements Implementation Plan

> **For agentic workers:** implement task-by-task; each task ends with a build gate and a commit.

**Goal:** Add five polish features to the rebuilt monochrome portfolio: SEO/OG metadata, a styled 404, a ⌘K command palette, view-transition project navigation, and Vercel Analytics.

**Architecture:** Additive on top of the existing Next.js 15 App Router site (branch `feature/portfolio-rebuild`). New files where possible; minimal edits to `app/layout.tsx`, `components/chrome/Nav.tsx`, `components/sections/WorkRow.tsx`, `components/work/ProjectHeader.tsx`.

**Tech Stack:** Next.js 15, TypeScript, Tailwind, framer-motion, `next/og`, `cmdk`, `next-view-transitions`, `@vercel/analytics`, `@vercel/speed-insights`.

## Global Constraints

- **Monochrome only.** Grayscale utilities (`bg`, `fg`, `muted`, `line`, `card`) and true black/white in OG images. No hue.
- **Both themes** must keep working; new UI (palette, 404) must look right in light and dark.
- **Reduced motion** respected on any new animation.
- **Commits ARE authorized** this session — each task commits. Do NOT push or open a PR.
- `@/*` maps to project root. Content source of truth remains `content/portfolio.ts`.
- Verification is `npx tsc --noEmit` + `npm run lint` + `npm run build` (all green, all routes prerender). No unit-test suite.
- Keep new dependencies minimal and exact: only `cmdk`, `next-view-transitions`, `@vercel/analytics`, `@vercel/speed-insights` may be added.

---

### Task 1: SEO metadata — sitemap, robots, JSON-LD, metadataBase

**Files:**
- Create: `app/sitemap.ts`, `app/robots.ts`
- Modify: `app/layout.tsx` (add `metadataBase`, `twitter`, and JSON-LD `<script>`)

**Interfaces:**
- Consumes: `profile`, `projects` from `@/content/portfolio`.

- [ ] **Step 1: Create `app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";
import { projects } from "@/content/portfolio";

const base = "https://firlandiansyari.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({
      url: `${base}/work/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
```

- [ ] **Step 2: Create `app/robots.ts`**

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://firlandiansyari.com/sitemap.xml",
  };
}
```

- [ ] **Step 3: Modify `app/layout.tsx`** — add `metadataBase` + twitter to the existing `metadata` export, and inject JSON-LD.

In the `metadata` object add:
```ts
  metadataBase: new URL("https://firlandiansyari.com"),
  twitter: {
    card: "summary_large_image",
    title: "Firlandi Althaf Ansyari — Software Engineer",
    description: "Software engineer building full-stack web and mobile products.",
  },
```

Add a JSON-LD script inside `<body>` (before `{children}` or after — anywhere in body). Build the object from content:
```tsx
import { profile } from "@/content/portfolio";
// ...
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: profile.website,
  sameAs: [profile.github, profile.linkedIn],
  address: { "@type": "PostalAddress", addressLocality: profile.location },
};
```
Render in body: `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />`

- [ ] **Step 4: Verify** — `npx tsc --noEmit && npm run build`. Confirm `/sitemap.xml` and `/robots.txt` appear in the build route list.

- [ ] **Step 5: Commit** — `git add -A && git commit -m "feat: sitemap, robots, JSON-LD and social metadata"`

---

### Task 2: OG images with next/og (home + per-project)

**Files:**
- Create: `app/opengraph-image.tsx`, `app/twitter-image.tsx` (re-export), `app/work/[slug]/opengraph-image.tsx`

**Interfaces:**
- Consumes: `profile`, `projects`, `getProject`.

- [ ] **Step 1: Create `app/opengraph-image.tsx`** (home OG, monochrome)

```tsx
import { ImageResponse } from "next/og";
import { profile } from "@/content/portfolio";

export const runtime = "edge";
export const alt = "Firlandi Althaf Ansyari — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a0a0a", color: "#f5f5f5", padding: 80, fontFamily: "sans-serif" }}>
        <div style={{ fontSize: 28, letterSpacing: 4, color: "#8c8c8c", textTransform: "uppercase" }}>Software Engineer</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 600, lineHeight: 1.05 }}>{profile.name}</div>
          <div style={{ fontSize: 32, color: "#8c8c8c", marginTop: 24, maxWidth: 900 }}>{profile.tagline}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
```

- [ ] **Step 2: Create `app/twitter-image.tsx`** — re-export the home OG so Twitter uses the same image.

```tsx
export { default, runtime, alt, size, contentType } from "./opengraph-image";
```

- [ ] **Step 3: Create `app/work/[slug]/opengraph-image.tsx`** (per-project OG)

```tsx
import { ImageResponse } from "next/og";
import { getProject, projects } from "@/content/portfolio";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Project case study";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  const name = project?.name ?? "Project";
  const tech = project?.technologies.join(" · ") ?? "";
  const year = project?.year ?? "";
  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a0a0a", color: "#f5f5f5", padding: 80, fontFamily: "sans-serif" }}>
        <div style={{ fontSize: 26, letterSpacing: 4, color: "#8c8c8c", textTransform: "uppercase" }}>Firlandi Althaf Ansyari — Work</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 600 }}>{name}</div>
          <div style={{ fontSize: 30, color: "#8c8c8c", marginTop: 20 }}>{tech}{year ? `  ·  ${year}` : ""}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
```

- [ ] **Step 4: Verify** — `npm run build`. Confirm build succeeds and OG routes generate (e.g. `/opengraph-image`, `/work/[slug]/opengraph-image`). If the edge runtime causes a build issue in this environment, switch `runtime` to `"nodejs"` and note it.

- [ ] **Step 5: Commit** — `git add -A && git commit -m "feat: monochrome OG/social images for home and projects"`

---

### Task 3: Styled not-found (404) page

**Files:**
- Create: `app/not-found.tsx`

**Interfaces:**
- Consumes: `Nav`, `Footer`, `Container`, `next/link`.

- [ ] **Step 1: Create `app/not-found.tsx`**

```tsx
import Link from "next/link";
import Nav from "@/components/chrome/Nav";
import Footer from "@/components/chrome/Footer";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="grid min-h-[70vh] place-items-center">
        <Container className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Page not found</h1>
          <p className="mx-auto mt-4 max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <Link href="/" className="mt-8 inline-block rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90">Back home</Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify** — `npm run build`; then in dev, hit `/work/does-not-exist` and confirm the styled 404 renders with nav/footer in both themes.

- [ ] **Step 3: Commit** — `git add -A && git commit -m "feat: styled 404 page"`

---

### Task 4: ⌘K command palette

**Files:**
- Create: `components/chrome/CommandPalette.tsx`
- Modify: `app/layout.tsx` (mount `<CommandPalette/>` inside ThemeProvider), `components/chrome/Nav.tsx` (add a small "⌘K" trigger button that dispatches an open event)
- Add dependency: `cmdk`

**Interfaces:**
- Produces: `CommandPalette()` — a client component that opens on `⌘K`/`Ctrl+K` and on a custom `window` event `"open-command-palette"`.
- Consumes: `projects`, `profile` from content; `useTheme()` from `@/components/theme/ThemeProvider`; `useRouter` from `next/navigation`; `cmdk`.

- [ ] **Step 1: Install cmdk**

Run: `npm install cmdk`
Expected: installs, `package.json` updated.

- [ ] **Step 2: Create `components/chrome/CommandPalette.tsx`**

```tsx
"use client";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { projects, profile } from "@/content/portfolio";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    document.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  const run = useCallback((fn: () => void) => { setOpen(false); fn(); }, []);
  const go = (href: string) => run(() => router.push(href));
  const scrollTo = (id: string) => run(() => {
    router.push("/");
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }));
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-bg/60 p-4 pt-[18vh] backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="w-full max-w-lg overflow-hidden rounded-xl border border-line bg-card shadow-2xl"
            initial={{ opacity: 0, y: -8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Command className="[&_[cmdk-input]]:outline-none">
              <Command.Input autoFocus placeholder="Type a command or search…" className="w-full border-b border-line bg-transparent px-4 py-3.5 text-sm text-fg placeholder:text-muted" />
              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="px-3 py-6 text-center text-sm text-muted">No results.</Command.Empty>
                <Command.Group heading="Navigation" className="px-1 text-[10px] font-mono uppercase tracking-widest text-muted [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5">
                  {[["Home", "home"], ["Work", "work"], ["About", "about"], ["Experience", "experience"], ["Contact", "contact"]].map(([label, id]) => (
                    <Item key={id} onSelect={() => scrollTo(id)}>{label}</Item>
                  ))}
                </Command.Group>
                <Command.Group heading="Projects" className="px-1 text-[10px] font-mono uppercase tracking-widest text-muted [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5">
                  {projects.map((p) => (
                    <Item key={p.slug} onSelect={() => go(`/work/${p.slug}`)}>{p.name}</Item>
                  ))}
                </Command.Group>
                <Command.Group heading="Actions" className="px-1 text-[10px] font-mono uppercase tracking-widest text-muted [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5">
                  <Item onSelect={() => run(toggleTheme)}>Toggle theme</Item>
                  <Item onSelect={() => run(() => navigator.clipboard?.writeText(profile.email))}>Copy email</Item>
                  <Item onSelect={() => run(() => window.open(profile.resume, "_blank"))}>Open résumé</Item>
                  <Item onSelect={() => run(() => window.open(profile.github, "_blank"))}>GitHub</Item>
                  <Item onSelect={() => run(() => window.open(profile.linkedIn, "_blank"))}>LinkedIn</Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Item({ children, onSelect }: { children: React.ReactNode; onSelect: () => void }) {
  return (
    <Command.Item onSelect={onSelect} className="flex cursor-pointer items-center rounded-md px-3 py-2 text-sm text-fg aria-selected:bg-fg aria-selected:text-bg">
      {children}
    </Command.Item>
  );
}
```

- [ ] **Step 3: Mount in `app/layout.tsx`** — inside `<ThemeProvider>`, alongside `{children}`:
```tsx
<ThemeProvider>
  {children}
  <CommandPalette />
</ThemeProvider>
```
with `import CommandPalette from "@/components/chrome/CommandPalette";`

- [ ] **Step 4: Add a ⌘K trigger in `components/chrome/Nav.tsx`** — a small button before the Résumé link that dispatches the open event:
```tsx
<button
  onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
  className="hidden items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:text-fg sm:flex"
  aria-label="Open command palette"
>
  ⌘K
</button>
```
Place it inside the existing right-side `<div className="flex items-center gap-3">`, before the Résumé anchor.

- [ ] **Step 5: Verify** — `npx tsc --noEmit && npm run build`; then in dev confirm ⌘K (and Ctrl+K) opens the palette, arrow keys + enter navigate, Escape/backdrop-click closes, theme toggle + copy email work, and it looks right in both themes.

- [ ] **Step 6: Commit** — `git add -A && git commit -m "feat: command palette (Cmd/Ctrl-K)"`

---

### Task 5: View-transition navigation + Vercel Analytics

**Files:**
- Modify: `app/layout.tsx` (wrap with `<ViewTransitions>`, add `<Analytics/>` + `<SpeedInsights/>`), `components/chrome/Nav.tsx`, `components/chrome/Footer.tsx`, `components/sections/WorkRow.tsx`, `components/work/ProjectNav.tsx`, `components/work/ProjectHeader.tsx` (swap `next/link` for `next-view-transitions` Link; add matching `view-transition-name`)
- Add dependencies: `next-view-transitions`, `@vercel/analytics`, `@vercel/speed-insights`

**Interfaces:**
- The project title element gets `style={{ viewTransitionName: \`project-${slug}\` }}` in BOTH `WorkRow` (source) and `ProjectHeader` (destination) so the browser morphs between them.

- [ ] **Step 1: Install deps**

Run: `npm install next-view-transitions @vercel/analytics @vercel/speed-insights`

- [ ] **Step 2: Wrap `app/layout.tsx`**

```tsx
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
```
Wrap the returned `<html>...</html>` tree with `<ViewTransitions>...</ViewTransitions>`. Inside `<body>`, after `{children}`/`<CommandPalette/>`, add `<Analytics />` and `<SpeedInsights />`.

- [ ] **Step 3: Swap Links to the view-transition Link**

In `components/chrome/Nav.tsx`, `components/chrome/Footer.tsx` (internal links only), `components/sections/WorkRow.tsx`, and `components/work/ProjectNav.tsx`, replace `import Link from "next/link"` with `import { Link } from "next-view-transitions"`. (Leave external `<a>` tags as-is — only internal navigations use the new Link. The `ProjectHeader` "Back to work" link also swaps.)

- [ ] **Step 4: Add matching `view-transition-name`**

In `components/sections/WorkRow.tsx`, on the `<h3>` project name, add `style={{ viewTransitionName: \`project-${project.slug}\` }}`.
In `components/work/ProjectHeader.tsx`, on the `<h1>` title, add `style={{ viewTransitionName: \`project-${project.slug}\` }}`.
(Each name is unique per slug and only one of each is on screen at a time, so the morph is unambiguous.)

- [ ] **Step 5: Verify** — `npx tsc --noEmit && npm run lint && npm run build` (all green, all routes prerender). In dev, click a Work row → the project title should morph/transition into the case-study header (in supporting browsers; others just navigate normally — graceful). Confirm no console errors and reduced-motion still disables entrance animations.

- [ ] **Step 6: Commit** — `git add -A && git commit -m "feat: view-transition project navigation and Vercel Analytics"`

---

## Deploy (owner action — NOT automated)

Deployment to production is left to the owner. When ready: install the Vercel CLI (`npm i -g vercel`), `vercel link`, set the custom domain `firlandiansyari.com`, and `vercel --prod`. Analytics/Speed Insights begin reporting automatically once deployed on Vercel.

## Self-Review

- SEO (sitemap/robots/JSON-LD/metadata) → Task 1. OG images → Task 2. 404 → Task 3. ⌘K palette → Task 4. View transitions + Analytics → Task 5. Deploy → owner section.
- No placeholders; every step has complete code or an exact command.
- `viewTransitionName` string `project-${slug}` is identical in WorkRow and ProjectHeader (Task 5 Steps 4). `open-command-palette` event name matches between Nav trigger (Task 4 Step 4) and CommandPalette listener (Task 4 Step 2).
