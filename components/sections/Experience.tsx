import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { experience, education } from "@/content/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 border-b border-line py-24 sm:py-32">
      <Container className="grid gap-16 md:grid-cols-2">
        <div>
          <Reveal><h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted">Experience</h2></Reveal>
          <div>
            {experience.map((e, i) => (
              <Reveal key={`${e.company}-${i}`} delay={i * 0.03}>
                <div className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-line py-4">
                  <div>
                    <h3 className="font-medium">{e.position}</h3>
                    <p className="text-sm text-muted">{e.company} · {e.location}</p>
                  </div>
                  <span className="whitespace-nowrap font-mono text-xs text-muted">{e.duration}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div>
          <Reveal><h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted">Education</h2></Reveal>
          <div>
            {education.map((e, i) => (
              <Reveal key={e.institution} delay={i * 0.03}>
                <div className="border-b border-line py-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-medium">{e.institution}</h3>
                    <span className="whitespace-nowrap font-mono text-xs text-muted">{e.year}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{e.degree}</p>
                  <p className="mt-1 text-sm text-muted">{e.details}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
