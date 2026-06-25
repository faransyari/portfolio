import { FloatingNav } from "../components/ui/floating-navbar";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Work", link: "#work" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Home() {
  return (
    <main className="relative">
      <FloatingNav navItems={navItems} />
      <section className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-semibold tracking-tight">Portfolio (rebuilding)</h1>
      </section>
    </main>
  );
}
