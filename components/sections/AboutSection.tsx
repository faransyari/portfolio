import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

export default function AboutSection() {
  return (
    <Section id="about">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">About</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          Software engineer with dual degrees from the University of Queensland and
          University of Indonesia.
        </h2>
      </Reveal>
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
