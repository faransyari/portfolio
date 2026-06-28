"use client";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { EASE_OUT, DUR } from "../ui/motion";

export default function AboutSection() {
  const reduced = useReducedMotion();
  const headline =
    "Software engineer with dual degrees from the University of Queensland and University of Indonesia.";
  const words = headline.split(" ");

  return (
    <Section id="about">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">About</p>
      </Reveal>
      <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
        {reduced
          ? headline
          : words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className="inline-block"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: DUR.base, ease: EASE_OUT, delay: i * 0.04 }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
      </h2>
      <Reveal delay={0.16}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I specialize in full-stack development, mobile development, and data
          engineering — building products that are fast, reliable, and a pleasure to use.
          Passionate about creating innovative web solutions and contributing to meaningful
          projects that make a positive impact.
        </p>
      </Reveal>
    </Section>
  );
}
