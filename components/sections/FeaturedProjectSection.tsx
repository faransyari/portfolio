"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PORTFOLIO_INFO } from "@/config/portfolio-info";
import { useReducedMotion } from "../hooks/useReducedMotion";

export const FEATURED_PROJECT_NAME = "Collectiv";

function Tilt({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      style={{ transformPerspective: 1000 }}
      whileHover={{ rotateX: 3, rotateY: -3, transition: { type: "spring", stiffness: 200, damping: 20 } }}
    >
      {children}
    </motion.div>
  );
}

export default function FeaturedProjectSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const p =
    PORTFOLIO_INFO.projects.find((x) => x.name === FEATURED_PROJECT_NAME) ??
    PORTFOLIO_INFO.projects[0];
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const mediaScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05]);
  const textY = useTransform(scrollYProgress, [0.1, 0.4], [40, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section className="relative" ref={ref} style={{ height: reduced ? "auto" : "200vh" }}>
      <div className={reduced ? "px-6 py-28" : "sticky top-0 flex min-h-screen items-center px-6"}>
        <div className="mx-auto grid w-full max-w-[1120px] items-center gap-12 md:grid-cols-2">
          <Tilt>
            <motion.div
              style={reduced ? undefined : { scale: mediaScale }}
              className="card-hover relative aspect-video overflow-hidden rounded-[22px] border border-border bg-card shadow-[var(--shadow-md)]"
            >
              {p.video ? (
                <iframe
                  src={p.video}
                  title={p.name}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  className="absolute inset-0 h-full w-full"
                  allowFullScreen
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.image!} alt={p.name} className="absolute inset-0 h-full w-full object-cover" />
              )}
            </motion.div>
          </Tilt>
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
                   className="rounded-full bg-primary px-6 py-2.5 font-medium text-primary-foreground transition-transform motion-safe:hover:scale-[1.03]">
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
