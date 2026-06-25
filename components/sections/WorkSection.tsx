"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { PORTFOLIO_INFO } from "@/config/portfolio-info";
import { useReducedMotion } from "../hooks/useReducedMotion";

const EASE = [0.16, 1, 0.3, 1] as const;

type Experience = (typeof PORTFOLIO_INFO.workExperience)[number];

function WorkItem({ exp, reduced }: { exp: Experience; reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  // Activates as the item crosses the vertical centre of the viewport,
  // staying in sync with the drawing progress line.
  const active = useInView(ref, { margin: "-50% 0px -50% 0px" });

  return (
    <div ref={ref} className="relative pb-20 pl-14 last:pb-0">
      {/* Node on the timeline */}
      <motion.span
        className="absolute left-[-7px] top-2 z-10 block h-4 w-4 rounded-full border-2"
        initial={false}
        animate={
          reduced || active
            ? {
                scale: 1.2,
                borderColor: "hsl(var(--primary))",
                backgroundColor: "hsl(var(--primary))",
                boxShadow: "0 0 0 6px hsl(var(--primary) / 0.12)",
              }
            : {
                scale: 1,
                borderColor: "hsl(var(--border))",
                backgroundColor: "hsl(var(--background))",
                boxShadow: "0 0 0 0px hsl(var(--primary) / 0)",
              }
        }
        transition={{ duration: 0.4, ease: EASE }}
      />

      {/* Entrance slide-in */}
      <motion.div
        initial={reduced ? false : { opacity: 0, x: -28 }}
        whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <span className="inline-block rounded-full border border-border px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
          {exp.duration}
        </span>
        <motion.h3
          className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl"
          animate={reduced ? undefined : { opacity: active ? 1 : 0.65 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          {exp.position}
        </motion.h3>
        <p className="mt-1 text-base font-medium text-primary md:text-lg">{exp.company}</p>
        <ul className="mt-4 max-w-2xl space-y-2 text-muted-foreground">
          {exp.responsibilities.map((r, j) => (
            <li key={j} className="relative pl-5 leading-relaxed">
              <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary/60" />
              {r}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function WorkSection() {
  const reduced = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 30, restDelta: 0.001 });

  return (
    <Section id="work">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Experience</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Where I&apos;ve worked</h2>
      </Reveal>

      <div ref={trackRef} className="relative mt-16">
        {/* Static track */}
        <div className="absolute left-0 top-0 h-full w-px bg-border" aria-hidden />
        {/* Drawing progress line */}
        <motion.div
          className="absolute left-0 top-0 h-full w-px origin-top bg-primary"
          style={reduced ? { scaleY: 1 } : { scaleY: fill }}
          aria-hidden
        />

        {PORTFOLIO_INFO.workExperience.map((exp, i) => (
          <WorkItem key={exp.company + i} exp={exp} reduced={reduced} />
        ))}
      </div>
    </Section>
  );
}
