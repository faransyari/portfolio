import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Counter } from "../ui/Counter";
import { PORTFOLIO_INFO } from "@/config/portfolio-info";

export default function StatsSection() {
  return (
    <Section className="!py-16">
      <Reveal>
        <div className="grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
          {PORTFOLIO_INFO.stats.map((s) => (
            <div key={s.label} className="px-4 py-6 text-center">
              <div className="text-4xl font-semibold tracking-tight md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
