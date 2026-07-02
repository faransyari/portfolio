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
