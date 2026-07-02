import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/content/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-28 sm:py-40">
      <Container>
        <Reveal>
          <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Let&apos;s build something.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-xl text-lg text-muted">
            I&apos;m {profile.available ? "open to new opportunities" : "always happy to talk shop"}. The fastest way to reach me is email.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <a href={`mailto:${profile.email}`} className="mt-10 inline-block text-2xl font-medium underline decoration-line underline-offset-8 transition-colors hover:decoration-fg sm:text-3xl">
            {profile.email}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
