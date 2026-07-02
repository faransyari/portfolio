import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { profile, skills } from "@/content/portfolio";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-line py-24 sm:py-32">
      <Container>
        <Reveal><h2 className="mb-10 text-sm font-medium uppercase tracking-widest text-muted">About</h2></Reveal>
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <div className="overflow-hidden rounded-xl border border-line grayscale">
              <Image src="/images/profile.jpg" alt={profile.name} width={480} height={600} className="h-auto w-full object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="space-y-5 text-lg leading-relaxed text-fg">
                {profile.bio.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
              {skills.map((g, i) => (
                <Reveal key={g.label} delay={i * 0.03}>
                  <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">{g.label}</h3>
                  <ul className="space-y-1.5 text-sm">
                    {g.items.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
