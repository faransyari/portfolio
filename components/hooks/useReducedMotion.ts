"use client";
import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

// Single source of truth for reduced-motion checks across the app.
export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false;
}
