"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { PORTFOLIO_INFO } from "@/config/portfolio-info";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { FEATURED_PROJECT_NAME } from "./FeaturedProjectSection";

type Project = (typeof PORTFOLIO_INFO.projects)[number];

function ProjectCard({ p, fixedWidth }: { p: Project; fixedWidth?: boolean }) {
  return (
    <div
      className={`group flex h-full flex-col overflow-hidden rounded-[22px] border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] ${
        fixedWidth ? "w-[85vw] shrink-0 sm:w-[60vw] md:w-[44vw] lg:w-[38vw]" : ""
      }`}
    >
      <div className="relative aspect-video overflow-hidden border-b border-border">
        {p.video ? (
          <iframe
            src={p.video}
            title={p.name}
            allow="autoplay; encrypted-media; picture-in-picture"
            className="h-full w-full"
            allowFullScreen
          />
        ) : (
          <Image
            src={p.image!}
            alt={p.name}
            fill
            sizes="(max-width: 768px) 85vw, 44vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
        <p className="mt-2 flex-1 text-muted-foreground">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.technologies.map((t) => (
            <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">{t}</span>
          ))}
        </div>
        <div className="mt-5 flex gap-4 text-sm font-medium">
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">Code</a>
          {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Live</a>}
        </div>
      </div>
    </div>
  );
}

function ProjectsHeading() {
  return (
    <Reveal>
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Projects</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">More things I&apos;ve built</h2>
    </Reveal>
  );
}

export default function ProjectsSection() {
  const reduced = useReducedMotion();
  const projects = PORTFOLIO_INFO.projects.filter((p) => p.name !== FEATURED_PROJECT_NAME);

  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [sectionHeight, setSectionHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (reduced) return;
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const d = Math.max(0, track.scrollWidth - window.innerWidth + 48);
      setDistance(d);
      setSectionHeight(d + window.innerHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [reduced]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  // Reduced motion: plain responsive grid, no scroll-jacking.
  if (reduced) {
    return (
      <Section id="projects">
        <ProjectsHeading />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </Section>
    );
  }

  return (
    <section id="projects" ref={sectionRef} className="relative" style={{ height: sectionHeight }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1120px] px-6">
          <ProjectsHeading />
        </div>
        <motion.div ref={trackRef} style={{ x }} className="mt-10 flex gap-6 px-6 md:px-[calc((100vw-1120px)/2)]">
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} fixedWidth />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
