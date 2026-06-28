"use client";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Counter } from "../ui/Counter";
import { PORTFOLIO_INFO } from "@/config/portfolio-info";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { EASE_OUT, DUR } from "../ui/motion";

export default function StatsSection() {
  const reduced = useReducedMotion();
  return (
    <Section className="!py-16">
      <div className="grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
        {PORTFOLIO_INFO.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={reduced ? false : { opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: DUR.base, ease: EASE_OUT, delay: i * 0.1 }}
            className="px-4 py-6 text-center"
          >
            <div className="text-4xl font-semibold tracking-tight md:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
