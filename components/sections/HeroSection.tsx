"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowDown } from "lucide-react";
import { FlipWords } from "../ui/flip-words";
import { useReducedMotion } from "../hooks/useReducedMotion";

const SOCIALS = [
  { href: "https://linkedin.com/in/firlandi", Icon: Linkedin },
  { href: "https://github.com/faransyari", Icon: Github },
  { href: "https://instagram.com/firlandiansyari", Icon: Instagram },
];

function useWord(progress: MotionValue<number>, start: number, end: number) {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [40, 0]);
  const blur = useTransform(progress, [start, end], [16, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  return { opacity, y, filter };
}

function HeroActions() {
  return (
    <>
      <div className="mt-8 flex items-center justify-center gap-4">
        {SOCIALS.map(({ href, Icon }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer"
             className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-foreground hover:text-foreground">
            <Icon size={20} />
          </a>
        ))}
      </div>
      <a href="/resume.pdf" download
         className="mt-8 inline-block rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground transition-transform motion-safe:hover:scale-[1.03]">
        Download Resume
      </a>
    </>
  );
}

function StaticHero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="relative mx-auto mb-8 h-40 w-40 overflow-hidden rounded-full ring-1 ring-border md:h-48 md:w-48">
        <Image src="/images/profile.jpg" alt="Firlandi Althaf Ansyari" width={192} height={192} className="h-full w-full object-cover" priority />
      </div>
      <p className="text-base font-medium text-muted-foreground">Hi, my name is</p>
      <h1 className="mt-2 text-5xl font-semibold tracking-tight md:text-7xl">Firlandi Althaf Ansyari</h1>
      <div className="mt-3 text-lg md:text-2xl">
        <FlipWords words={["Full Stack Developer", "Tech Enthusiast", "Data Engineer"]} duration={3000} className="font-semibold" />
      </div>
      <HeroActions />
    </section>
  );
}

export default function HeroSection() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const w1 = useWord(scrollYProgress, 0.32, 0.46);
  const w2 = useWord(scrollYProgress, 0.44, 0.58);
  const w3 = useWord(scrollYProgress, 0.56, 0.7);

  const photoOpacity = useTransform(scrollYProgress, [0.66, 0.86], [0, 1]);
  const photoBlur = useTransform(scrollYProgress, [0.66, 0.86], [24, 0]);
  const photoFilter = useTransform(photoBlur, (b) => `blur(${b}px)`);
  const photoScale = useTransform(scrollYProgress, [0.66, 0.86], [0.85, 1]);

  const actionsOpacity = useTransform(scrollYProgress, [0.8, 0.97], [0, 1]);
  const actionsY = useTransform(scrollYProgress, [0.8, 0.97], [30, 0]);
  // "Hi, my name is" starts large + centered, then shrinks/rises to its small top spot.
  const introY = useTransform(scrollYProgress, [0, 0.28], ["40vh", "0vh"]);
  const introScale = useTransform(scrollYProgress, [0, 0.28], [2.8, 1]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.1, 0.85, 1], [1, 1, 1, 0]);

  if (reduced) return <StaticHero />;

  const words = [w1, w2, w3];
  const labels = ["Firlandi", "Althaf", "Ansyari"];

  return (
    <section id="home" ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="animate-spotlight pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[130px]" />

        <motion.p
          style={{ y: introY, scale: introScale }}
          className="absolute left-0 right-0 top-[10vh] origin-center text-base font-medium text-muted-foreground"
        >
          Hi, my name is
        </motion.p>

        <motion.div style={{ opacity: photoOpacity, scale: photoScale, filter: photoFilter }}
          className="relative mb-8 h-36 w-36 overflow-hidden rounded-full ring-1 ring-border md:h-44 md:w-44">
          <Image src="/images/profile.jpg" alt="Firlandi Althaf Ansyari" width={192} height={192} className="h-full w-full object-cover" priority />
        </motion.div>

        <h1 className="flex flex-wrap items-center justify-center gap-x-4 text-5xl font-semibold leading-none tracking-tight sm:text-7xl md:text-8xl">
          {labels.map((label, i) => (
            <motion.span key={label} style={{ opacity: words[i].opacity, y: words[i].y, filter: words[i].filter }}>
              {label}
            </motion.span>
          ))}
        </h1>

        <motion.div style={{ opacity: actionsOpacity, y: actionsY }} className="mt-6">
          <div className="text-lg md:text-2xl">
            <FlipWords words={["Full Stack Developer", "Tech Enthusiast", "Data Engineer"]} duration={3000} className="font-semibold" />
          </div>
          <HeroActions />
        </motion.div>

        <motion.div style={{ opacity: cueOpacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground">
          <ArrowDown className="animate-bounce" size={20} />
        </motion.div>
      </div>
    </section>
  );
}
