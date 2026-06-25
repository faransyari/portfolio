"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PORTFOLIO_INFO } from "@/config/portfolio-info";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function FeaturedProjectSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const p = PORTFOLIO_INFO.projects[0]; // PC Marketplace
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05]);
  const textY = useTransform(scrollYProgress, [0.1, 0.4], [40, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section className="relative" ref={ref} style={{ height: reduced ? "auto" : "200vh" }}>
      <div className={reduced ? "px-6 py-28" : "sticky top-0 flex min-h-screen items-center px-6"}>
        <div className="mx-auto grid w-full max-w-[1120px] items-center gap-12 md:grid-cols-2">
          <motion.div
            style={reduced ? undefined : { scale: imgScale }}
            className="relative aspect-[16/10] overflow-hidden rounded-[22px] border border-border bg-card"
          >
            <Image src={p.image!} alt={p.name} fill className="object-cover" />
          </motion.div>
          <motion.div style={reduced ? undefined : { y: textY, opacity: textOpacity }}>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Featured Project</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{p.name}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{p.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.technologies.map((t) => (
                <span key={t} className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">{t}</span>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer"
                   className="rounded-full bg-primary px-6 py-2.5 font-medium text-primary-foreground transition-transform hover:scale-[1.03]">
                  Live Demo
                </a>
              )}
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                 className="rounded-full border border-border px-6 py-2.5 font-medium text-foreground transition-colors hover:bg-card">
                View Code
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
