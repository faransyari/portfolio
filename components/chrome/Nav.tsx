"use client";
import { useEffect, useState } from "react";
import { Link } from "next-view-transitions";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/theme/ThemeToggle";
import MobileMenu from "@/components/chrome/MobileMenu";
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
          <button
            onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
            className="hidden items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:text-fg sm:flex"
            aria-label="Open command palette"
          >
            ⌘K
          </button>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="hidden text-sm text-muted transition-colors hover:text-fg sm:inline">Résumé</a>
          <ThemeToggle />
          <MobileMenu links={links} />
        </div>
      </Container>
    </header>
  );
}
