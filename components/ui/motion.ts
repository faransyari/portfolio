import type { Variants } from "framer-motion";

// Apple-style ease-out. Matches the existing EASE in Reveal.tsx.
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const DUR = { fast: 0.3, base: 0.6, slow: 0.9 } as const;

// Reusable fade-up transition factory for staggered reveals.
export const fadeUp = (delay = 0) => ({
  duration: DUR.base,
  ease: EASE_OUT,
  delay,
});

// Shared hover vocabulary for cards: lift + spring.
export const cardHover: Variants = {
  rest: { y: 0, transition: { duration: DUR.fast, ease: EASE_OUT } },
  hover: { y: -6, transition: { type: "spring", stiffness: 300, damping: 22 } },
};
