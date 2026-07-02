import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/content/portfolio";
import WorkRow from "./WorkRow";

export default function Work() {
  return (
    <section id="work" className="scroll-mt-16 border-b border-line py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted">Selected Work</h2>
            <span className="font-mono text-xs text-muted">{String(projects.length).padStart(2, "0")}</span>
          </div>
        </Reveal>
        <div>
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}><WorkRow project={p} index={i} /></Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
