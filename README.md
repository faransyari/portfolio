# Firlandi Althaf Ansyari — Portfolio

A monochrome editorial portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **framer-motion**.

Live: [firlandiansyari.com](https://www.firlandiansyari.com/)

---

## Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS (CSS-variable tokens, dark/light) |
| Animation | framer-motion |
| Icons | lucide-react |
| Hosting | Vercel |

---

## Structure

```
app/
  layout.tsx          # Root layout with ThemeProvider + fonts
  page.tsx            # Single-scroll home (Hero → Work → About → Experience → Contact)
  work/[slug]/        # Case-study pages
components/
  chrome/             # Nav, Footer
  sections/           # Hero, Work, WorkRow, About, Experience, Contact
  theme/              # ThemeProvider, ThemeToggle, theme-script
  ui/                 # Container, Reveal
  work/               # ProjectHeader, ProjectBody, ProjectNav
content/
  portfolio.ts        # All copy, project data, experience entries
lib/
  motion.ts           # Shared framer-motion variants
  utils.ts            # cn() helper (clsx + tailwind-merge)
```

---

## Getting Started

```sh
git clone https://github.com/faransyari/portofolio
cd portofolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Contact

- Email: [firlandi.althaf@gmail.com](mailto:firlandi.althaf@gmail.com)
- LinkedIn: [linkedin.com/in/firlandi](https://linkedin.com/in/firlandi)
