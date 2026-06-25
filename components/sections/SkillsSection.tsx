import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Marquee } from "../ui/Marquee";
import { PORTFOLIO_INFO } from "@/config/portfolio-info";

const CATEGORIES: { label: string; key: keyof typeof PORTFOLIO_INFO.skills }[] = [
  { label: "Languages", key: "programmingLanguages" },
  { label: "Frontend", key: "frontend" },
  { label: "Backend", key: "backend" },
  { label: "Databases", key: "databases" },
  { label: "Mobile", key: "mobile" },
  { label: "Tools", key: "tools" },
];

export default function SkillsSection() {
  const all = Object.values(PORTFOLIO_INFO.skills).flat();
  return (
    <Section id="skills">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Skills</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Tools I build with</h2>
      </Reveal>

      <div className="mt-10 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <Marquee speed={32}>
          {all.map((s, i) => (
            <span key={`${s}-${i}`} className="whitespace-nowrap text-lg font-medium text-muted-foreground">
              {s}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat, i) => (
          <Reveal key={cat.label} delay={i * 0.05}>
            <div className="rounded-[22px] border border-border bg-card p-6">
              <h3 className="text-sm font-semibold text-primary">{cat.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {PORTFOLIO_INFO.skills[cat.key].map((s) => (
                  <span key={s} className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
