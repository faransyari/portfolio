"use client";
import React, { useState, JSX } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Set initial state to true

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      const direction = previous !== undefined ? current - previous : 0;

      if (direction < 0 || scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60, 
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            y: 0,
            opacity: 0.7,
          }}
          exit={{
            opacity: 0,
            y: -100,
          }}
          transition={{
            duration: 0.3,
          }}
          className={cn(
            "fixed top-4 inset-x-0 mx-auto max-w-fit z-[9999] rounded-full bg-neutral-900/90 backdrop-blur-md shadow-lg py-4 px-10 flex items-center justify-center space-x-20",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <a
              key={idx}
              href={navItem.link}
              onClick={(e) => handleNavClick(e, navItem.link.substring(1))}
              className="text-sm text-white hover:text-blue-400 transition cursor-pointer"
            >
              {navItem.icon && <span className="mr-1">{navItem.icon}</span>}
              {navItem.name}
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
