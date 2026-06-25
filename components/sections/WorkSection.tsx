"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { PORTFOLIO_INFO } from "@/config/portfolio-info";
import { useReducedMotion } from "../hooks/useReducedMotion";

const EASE = [0.16, 1, 0.3, 1] as const;

type Experience = (typeof PORTFOLIO_INFO.workExperience)[number];

function WorkHeading() {
  return (
    <Reveal>
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Experience</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Where I&apos;ve worked</h2>
    </Reveal>
  );
}

function HorizontalItem({ exp }: { exp: Experience }) {
  const ref = useRef<HTMLDivElement>(null);
  // Active as the node crosses the horizontal centre of the viewport.
  const active = useInView(ref, { margin: "0px -50% 0px -50%" });

  return (
    <div ref={ref} data-work-item className="relative h-72 w-[82vw] shrink-0 pr-12 pt-6 sm:w-[56vw] md:w-[42vw] lg:w-[34vw]">
      {/* Node on the line */}
      <motion.span
        className="absolute left-0 top-44 z-10 block h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
        initial={false}
        animate={
          active
            ? {
                scale: 1.25,
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

      {/* Content above the line */}
      <motion.div
        className="origin-left"
        animate={{ opacity: active ? 1 : 0.5, y: active ? 0 : 6, scale: active ? 1 : 0.97 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <span className="inline-block rounded-full border border-border px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
          {exp.duration}
        </span>
        <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
          {exp.position}
        </h3>
        <p className="mt-2 text-base font-medium text-primary md:text-lg">{exp.company}</p>
      </motion.div>
    </div>
  );
}

export default function WorkSection() {
  const reduced = useReducedMotion();

  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [pad, setPad] = useState(24);
  const [sectionHeight, setSectionHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (reduced) return;
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const items = track.querySelectorAll<HTMLElement>("[data-work-item]");
      if (!items.length) return;
      const w = items[0].offsetWidth;
      const p = Math.max(24, window.innerWidth / 2 - w / 2);
      const d = items[items.length - 1].offsetLeft - items[0].offsetLeft;
      setPad(p);
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
  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const x = useSpring(xRaw, { stiffness: 120, damping: 30, restDelta: 0.5 });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 30, restDelta: 0.001 });

  // Reduced motion: static vertical timeline, no scroll-jacking.
  if (reduced) {
    return (
      <Section id="work">
        <WorkHeading />
        <div className="relative mt-12 border-l border-border pl-8">
          {PORTFOLIO_INFO.workExperience.map((exp, i) => (
            <div key={exp.company + i} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[33px] top-2 h-3.5 w-3.5 rounded-full border-2 border-primary bg-primary" />
              <span className="inline-block rounded-full border border-border px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
                {exp.duration}
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{exp.position}</h3>
              <p className="mt-1 text-base font-medium text-primary">{exp.company}</p>
            </div>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <section id="work" ref={sectionRef} className="relative" style={{ height: sectionHeight }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1120px] px-6">
          <WorkHeading />
        </div>

        <div className="relative mt-16">
          <motion.div
            ref={trackRef}
            style={{ x, paddingLeft: pad, paddingRight: pad }}
            className="relative flex"
          >
            {/* Timeline bar connecting the dots (first dot -> last dot) */}
            <div
              className="pointer-events-none absolute top-44 h-1 -translate-y-1/2 rounded-full bg-border"
              style={{ left: pad, width: distance }}
              aria-hidden
            />
            <motion.div
              className="pointer-events-none absolute top-44 h-1 -translate-y-1/2 origin-left rounded-full bg-primary"
              style={{ left: pad, width: distance, scaleX: fill }}
              aria-hidden
            />
            {PORTFOLIO_INFO.workExperience.map((exp, i) => (
              <HorizontalItem key={exp.company + i} exp={exp} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
