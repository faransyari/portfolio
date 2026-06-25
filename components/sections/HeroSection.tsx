"use client";
import Image from "next/image";
import { Github, Linkedin, Instagram, ArrowDown } from "lucide-react";
import { FlipWords } from "../ui/flip-words";
import { Reveal } from "../ui/Reveal";
import { Parallax } from "../ui/Parallax";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Parallax speed={40} className="mb-8">
        <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full ring-1 ring-border md:h-48 md:w-48">
          <Image src="/images/profile.jpg" alt="Firlandi Althaf Ansyari" width={192} height={192} className="h-full w-full object-cover" priority />
        </div>
      </Parallax>

      <Reveal>
        <p className="text-base font-medium text-muted-foreground">Hi, my name is</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-6xl">Firlandi Althaf Ansyari</h1>
      </Reveal>
      <Reveal delay={0.16}>
        <div className="mt-3 text-lg md:text-2xl">
          <FlipWords words={["Full Stack Developer", "Tech Enthusiast", "Data Engineer"]} duration={3000} className="font-semibold" />
        </div>
      </Reveal>

      <Reveal delay={0.24}>
        <div className="mt-8 flex items-center justify-center gap-4">
          {[
            { href: "https://linkedin.com/in/firlandi", Icon: Linkedin },
            { href: "https://github.com/faransyari", Icon: Github },
            { href: "https://instagram.com/firlandiansyari", Icon: Instagram },
          ].map(({ href, Icon }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
               className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-foreground hover:text-foreground">
              <Icon size={20} />
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.32}>
        <a href="/resume.pdf" download
           className="mt-8 inline-block rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground transition-transform hover:scale-[1.03]">
          Download Resume
        </a>
      </Reveal>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground">
        <ArrowDown className="animate-bounce" size={20} />
      </div>
    </section>
  );
}
