"use client";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/portfolio";

export default function WorkRow({ project, index }: { project: Project; index: number }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={`/work/${project.slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line py-6 sm:gap-8 sm:py-8"
    >
      <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
      <div className="min-w-0">
        <h3 className="truncate text-2xl font-medium tracking-tight transition-opacity group-hover:opacity-60 sm:text-3xl" style={{ viewTransitionName: `project-${project.slug}` }}>{project.name}</h3>
        <p className="mt-1 font-mono text-xs text-muted">{project.technologies.join(" · ")} · {project.year}</p>
      </div>
      <ArrowUpRight size={20} className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
      {project.image && (
        <div className={`pointer-events-none absolute right-16 top-1/2 z-10 hidden w-56 -translate-y-1/2 overflow-hidden rounded-lg border border-line shadow-lg transition-opacity duration-300 lg:block ${hover ? "opacity-100" : "opacity-0"}`}>
          <Image src={project.image} alt={project.name} width={448} height={280} className="h-auto w-full object-cover" />
        </div>
      )}
    </Link>
  );
}
