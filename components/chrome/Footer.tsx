import Container from "@/components/ui/Container";
import { profile } from "@/content/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col items-start justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center">
        <span className="font-mono">© {new Date().getFullYear()} {profile.name}</span>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-fg">GitHub</a>
          <a href={profile.linkedIn} target="_blank" rel="noreferrer" className="transition-colors hover:text-fg">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-fg">Email</a>
        </div>
      </Container>
    </footer>
  );
}
