import { FloatingNav } from "../components/ui/floating-navbar";
import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import AboutSection from "../components/sections/AboutSection";

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
      <HeroSection />
      <StatsSection />
      <AboutSection />
    </main>
  );
}
