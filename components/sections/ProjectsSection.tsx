"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowUpRight, Github } from "lucide-react";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { MorphModal } from "../ui/MorphModal";
import { PORTFOLIO_INFO } from "@/config/portfolio-info";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { FEATURED_PROJECT_NAME } from "./FeaturedProjectSection";
import { EASE_OUT, DUR } from "../ui/motion";

type Project = (typeof PORTFOLIO_INFO.projects)[number];

// Bento span recipe, cycled by index so the grid scales as projects are added.
const SPANS = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-1",
];

function ytId(url?: string) {
  if (!url) return null;
  const m = url.match(/embed\/([^?]+)/);
  return m ? m[1] : null;
}

function posterFor(p: Project): string | null {
  const id = ytId(p.video);
  if (id) return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  return p.image ?? null;
}

export default function ProjectsSection() {
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState<Project | null>(null);
  const projects = PORTFOLIO_INFO.projects.filter((p) => p.name !== FEATURED_PROJECT_NAME);

  return (
    <Section id="projects">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Projects</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">More things I&apos;ve built</h2>
      </Reveal>

      <div className="mt-12 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-3">
        {projects.map((p, i) => {
          const poster = posterFor(p);
          return (
            <motion.button
              key={p.name}
              layoutId={reduced ? undefined : `proj-${p.name}`}
              onClick={() => setSelected(p)}
              initial={reduced ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: DUR.base, ease: EASE_OUT, delay: i * 0.06 }}
              className={`group card-hover relative flex flex-col justify-end overflow-hidden rounded-[22px] border border-border bg-card text-left ${SPANS[i % SPANS.length]}`}
            >
              {poster && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={poster}
                  alt={p.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="relative z-10 p-5">
                {p.video && (
                  <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-black">
                    <Play size={16} className="ml-0.5" fill="currentColor" />
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-medium text-white/90 backdrop-blur-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <ArrowUpRight size={16} />
              </span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {selected && (
          <MorphModal layoutId={`proj-${selected.name}`} reduced={reduced} onClose={() => setSelected(null)}>
            <div className="relative aspect-video w-full bg-black">
              {selected.video ? (
                <iframe
                  src={selected.video}
                  title={selected.name}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  className="absolute inset-0 h-full w-full"
                  allowFullScreen
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={selected.image!} alt={selected.name} className="absolute inset-0 h-full w-full object-cover" />
              )}
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{selected.name}</h3>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{selected.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {selected.technologies.map((t) => (
                  <span key={t} className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                {selected.demo && (
                  <a href={selected.demo} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 font-medium text-primary-foreground transition-transform motion-safe:hover:scale-[1.03]">
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                )}
                <a href={selected.github} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 font-medium text-foreground transition-colors hover:bg-secondary">
                  <Github size={16} /> View Code
                </a>
              </div>
            </div>
          </MorphModal>
        )}
      </AnimatePresence>
    </Section>
  );
}
