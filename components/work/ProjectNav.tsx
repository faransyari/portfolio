import { Link } from "next-view-transitions";
import Container from "@/components/ui/Container";
import { projects } from "@/content/portfolio";
import { ArrowRight } from "lucide-react";

export default function ProjectNav({ slug }: { slug: string }) {
  const i = projects.findIndex((p) => p.slug === slug);
  const next = projects[(i + 1) % projects.length];
  return (
    <Container className="mt-24 border-t border-line py-12">
      <Link href={`/work/${next.slug}`} className="group flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Next project</p>
          <p className="mt-1 text-2xl font-medium tracking-tight transition-opacity group-hover:opacity-60 sm:text-3xl">{next.name}</p>
        </div>
        <ArrowRight size={24} className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-fg" />
      </Link>
    </Container>
  );
}
