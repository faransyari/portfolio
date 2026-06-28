"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, CalendarDays } from "lucide-react";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { MorphModal } from "../ui/MorphModal";
import { PORTFOLIO_INFO } from "@/config/portfolio-info";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { EASE_OUT, DUR } from "../ui/motion";

type Experience = (typeof PORTFOLIO_INFO.workExperience)[number];

// Company strings are stored as "Company Name | Location".
function splitCompany(value: string): { name: string; location: string } {
  const [name, location] = value.split("|").map((s) => s.trim());
  return { name: name ?? value, location: location ?? "" };
}

export default function WorkSection() {
  const reduced = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const roles = PORTFOLIO_INFO.workExperience;
  const selected = selectedIndex === null ? null : roles[selectedIndex];

  return (
    <Section id="work">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Experience</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Where I&apos;ve worked</h2>
      </Reveal>

      <div className="mt-10 flex flex-col gap-3">
        {roles.map((exp, i) => {
          const { name, location } = splitCompany(exp.company);
          return (
            <motion.button
              key={exp.company + i}
              layoutId={reduced ? undefined : `exp-${i}`}
              onClick={() => setSelectedIndex(i)}
              initial={reduced ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: DUR.base, ease: EASE_OUT, delay: i * 0.05 }}
              className="group card-surface card-hover flex w-full items-center gap-4 rounded-2xl p-5 text-left"
            >
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-lg font-semibold tracking-tight md:text-xl">{exp.position}</h3>
                <p className="truncate text-sm text-muted-foreground">
                  <span className="text-primary">{name}</span>
                  {location && <span> · {location}</span>}
                </p>
              </div>
              <span className="hidden shrink-0 text-sm text-muted-foreground sm:block">{exp.duration}</span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                <ArrowUpRight size={16} />
              </span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {selected && (
          <MorphModal layoutId={`exp-${selectedIndex}`} reduced={reduced} onClose={() => setSelectedIndex(null)}>
            {(() => {
              const { name, location } = splitCompany(selected.company);
              return (
                <div className="relative">
                  <div className="h-28 w-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent" />
                  <div className="p-6 md:p-8">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
                      <CalendarDays size={13} /> {selected.duration}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">{selected.position}</h3>
                    <p className="mt-2 text-lg font-medium text-primary">{name}</p>
                    {location && (
                      <p className="mt-2 inline-flex items-center gap-1.5 text-muted-foreground">
                        <MapPin size={15} /> {location}
                      </p>
                    )}
                  </div>
                </div>
              );
            })()}
          </MorphModal>
        )}
      </AnimatePresence>
    </Section>
  );
}
