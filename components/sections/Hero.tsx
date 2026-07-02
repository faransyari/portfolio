import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/content/portfolio";

export default function Hero() {
  return (
    <section className="border-b border-line py-28 sm:py-40">
      <Container>
        <Reveal>
          <p className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
            {profile.available && <span className="inline-block h-1.5 w-1.5 rounded-full bg-fg" />}
            {profile.available ? "Available for work" : "Software Engineer"} · {profile.location}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            {profile.name.split(" ")[0]} {profile.name.split(" ").slice(1).join(" ")}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{profile.tagline}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/#work" className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90">View work</Link>
            <a href={`mailto:${profile.email}`} className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card">Get in touch</a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
