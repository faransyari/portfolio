"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

/**
 * Shared-element detail modal. When `reduced` is false, the modal shares a
 * `layoutId` with the tile/row that opened it, so Framer morphs that element
 * into the modal (and back on close). Under reduced motion it falls back to a
 * simple fade/scale with no layout animation.
 */
export function MorphModal({
  layoutId,
  onClose,
  reduced,
  children,
}: {
  layoutId: string;
  onClose: () => void;
  reduced: boolean;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-background/70 backdrop-blur-md" onClick={onClose} aria-hidden />
      <motion.div
        layoutId={reduced ? undefined : layoutId}
        initial={reduced ? { opacity: 0, scale: 0.96 } : false}
        animate={reduced ? { opacity: 1, scale: 1 } : undefined}
        exit={reduced ? { opacity: 0, scale: 0.96 } : undefined}
        className="card-surface relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[22px] shadow-[var(--shadow-lg)]"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur transition-colors hover:bg-background"
        >
          <X size={18} />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
}
