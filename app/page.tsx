import { FloatingNav } from "../components/ui/floating-navbar";
import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import FeaturedProjectSection from "../components/sections/FeaturedProjectSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import WorkSection from "../components/sections/WorkSection";
import EducationSection from "../components/sections/EducationSection";
import ContactSection from "../components/sections/ContactSection";
import ChatLauncher from "../components/sections/ChatLauncher";

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
      <SkillsSection />
      <FeaturedProjectSection />
      <ProjectsSection />
      <WorkSection />
      <EducationSection />
      <ContactSection />
      <ChatLauncher />
    </main>
  );
}
