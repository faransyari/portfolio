import Image from "next/image";
import Container from "@/components/ui/Container";
import type { Project } from "@/content/portfolio";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-3 border-t border-line py-8 md:grid-cols-[200px_1fr]">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted">{title}</h2>
      <div className="max-w-2xl text-base leading-relaxed text-fg">{children}</div>
    </div>
  );
}

export default function ProjectBody({ project }: { project: Project }) {
  const c = project.caseStudy;
  return (
    <Container className="mt-12">
      <div className="overflow-hidden rounded-xl border border-line">
        {project.video ? (
          <div className="aspect-video w-full">
            <iframe src={project.video} title={project.name} className="h-full w-full" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        ) : project.image ? (
          <Image src={project.image} alt={project.name} width={1600} height={1000} className="h-auto w-full object-cover" />
        ) : null}
      </div>

      <div className="mt-16">
        <Block title="Overview">{c.overview}</Block>
        <Block title="Problem">{c.problem}</Block>
        <Block title="What I built">
          <ul className="list-disc space-y-2 pl-5">{c.built.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </Block>
        <Block title="Stack">{c.stack}</Block>
        <Block title="Outcome">{c.outcome}</Block>
      </div>
    </Container>
  );
}
