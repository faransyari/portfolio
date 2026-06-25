"use client";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function Marquee({
  children,
  speed = 30,
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <div
        className={cn("flex w-max gap-12", !reduced && "animate-marquee group-hover:[animation-play-state:paused]")}
        style={!reduced ? { animationDuration: `${speed}s` } : undefined}
      >
        {children}
        {!reduced && <div className="flex gap-12" aria-hidden>{children}</div>}
      </div>
    </div>
  );
}
