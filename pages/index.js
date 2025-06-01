import { FloatingNav } from "../components/ui/floating-navbar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import WorkSection from "../components/sections/WorkSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Work Experiences", link: "#work" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      <FloatingNav navItems={navItems} />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}

