import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { PORTFOLIO_INFO } from "@/config/portfolio-info";

export default function WorkSection() {
  return (
    <Section id="work">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Experience</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Where I've worked</h2>
      </Reveal>
      <div className="relative mt-12 border-l border-border pl-8">
        {PORTFOLIO_INFO.workExperience.map((exp, i) => (
          <Reveal key={exp.company + i} delay={i * 0.05}>
            <div className="relative pb-12 last:pb-0">
              <span className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
              <p className="text-sm text-muted-foreground">{exp.duration}</p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">{exp.position}</h3>
              <p className="text-primary">{exp.company}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
                {exp.responsibilities.map((r, j) => (
                  <li key={j}>{r}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
