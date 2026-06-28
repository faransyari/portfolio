import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { PORTFOLIO_INFO } from "@/config/portfolio-info";

export default function ContactSection() {
  return (
    <>
      <Section id="contact" className="relative overflow-hidden text-center">
        <div className="animate-spotlight pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Let's work together.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            I'm always open to new opportunities and collaborations. The fastest way to reach me is email.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <a href={`mailto:${PORTFOLIO_INFO.email}`}
             className="mt-8 inline-block rounded-full bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-transform motion-safe:hover:scale-[1.03]">
            {PORTFOLIO_INFO.email}
          </a>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex justify-center gap-6 text-sm text-muted-foreground">
            <a href={PORTFOLIO_INFO.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
            <a href={PORTFOLIO_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
          </div>
        </Reveal>
      </Section>
      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} {PORTFOLIO_INFO.name}. All rights reserved.
      </footer>
    </>
  );
}
