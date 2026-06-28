import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { PORTFOLIO_INFO } from "@/config/portfolio-info";

export default function EducationSection() {
  return (
    <Section id="education">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Education</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Academic background</h2>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {PORTFOLIO_INFO.education.map((edu, i) => (
          <Reveal key={edu.institution} delay={i * 0.08}>
            <div className="card-surface card-hover h-full rounded-[22px] p-7">
              <p className="text-sm text-muted-foreground">{edu.year}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">{edu.degree}</h3>
              <p className="mt-1 text-primary">{edu.institution}</p>
              <p className="mt-3 text-muted-foreground">{edu.details}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
