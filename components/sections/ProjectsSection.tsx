import Image from "next/image";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { PORTFOLIO_INFO } from "@/config/portfolio-info";
import { FEATURED_PROJECT_NAME } from "./FeaturedProjectSection";

export default function ProjectsSection() {
  const projects = PORTFOLIO_INFO.projects.filter((p) => p.name !== FEATURED_PROJECT_NAME);
  return (
    <Section id="projects">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Projects</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">More things I've built</h2>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08} className="h-full">
            <div className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]">
              <div className="relative aspect-video overflow-hidden border-b border-border">
                {p.video ? (
                  <iframe src={p.video} title={p.name} allow="autoplay; encrypted-media; picture-in-picture" className="h-full w-full" allowFullScreen />
                ) : (
                  <Image src={p.image!} alt={p.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-2 flex-1 text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex gap-4 text-sm font-medium">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">Code</a>
                  {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Live</a>}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
