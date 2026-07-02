import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/chrome/Nav";
import Footer from "@/components/chrome/Footer";
import ProjectHeader from "@/components/work/ProjectHeader";
import ProjectBody from "@/components/work/ProjectBody";
import ProjectNav from "@/components/work/ProjectNav";
import { projects, getProject } from "@/content/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.name} — Firlandi Althaf Ansyari`, description: project.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <>
      <Nav />
      <main className="pb-12">
        <ProjectHeader project={project} />
        <ProjectBody project={project} />
        <ProjectNav slug={project.slug} />
      </main>
      <Footer />
    </>
  );
}
