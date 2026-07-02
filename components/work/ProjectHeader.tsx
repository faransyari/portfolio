import Container from "@/components/ui/Container";
import type { Project } from "@/content/portfolio";
import { Link } from "next-view-transitions";
import { ArrowLeft } from "lucide-react";

export default function ProjectHeader({ project }: { project: Project }) {
  const meta = [project.year, project.role].filter(Boolean).join(" · ");
  return (
    <Container className="pt-12">
      <Link href="/#work" className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
        <ArrowLeft size={16} /> Back to work
      </Link>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl" style={{ viewTransitionName: `project-${project.slug}` }}>{project.name}</h1>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted">{meta}</p>
      <p className="mt-6 max-w-2xl text-lg text-muted">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="underline decoration-line underline-offset-4 hover:decoration-fg">Live demo ↗</a>}
        {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="underline decoration-line underline-offset-4 hover:decoration-fg">GitHub ↗</a>}
      </div>
    </Container>
  );
}
