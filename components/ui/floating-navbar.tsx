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
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      const direction = previous !== undefined ? current - previous : 0;

      if (direction < 0 || scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(false);
        setMenuOpen(false); // Close menu on scroll down hide
      }
    }
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMenuOpen(false); // Close menu on link click
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  const lineVariants = {
    closed: { rotate: 0, y: 0, opacity: 1 },
    openTop: { rotate: 45, y: 8 },
    openMiddle: { opacity: 0 },
    openBottom: { rotate: -45, y: -8 },
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: 0, opacity: 0.9 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          style={{ background: "rgba(16, 27, 48, 0.8)" }}

          className={cn(
            "fixed top-4 inset-x-0 mx-auto z-[9999] rounded-full backdrop-blur-md shadow-lg py-4 px-5 flex items-center justify-between max-w-fit",
            className
          )}
        >
          {/* Mobile burger menu button on left */}
          <button
            className="md:hidden justify-center items-center w-5 h-6 relative z-50 "
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <motion.span
              className="block h-1 w-full bg-white rounded"
              animate={menuOpen ? "openTop" : "closed"}
              variants={lineVariants}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-1 w-full bg-white rounded my-1"
              animate={menuOpen ? "openMiddle" : "closed"}
              variants={lineVariants}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-1 w-full bg-white rounded"
              animate={menuOpen ? "openBottom" : "closed"}
              variants={lineVariants}
              transition={{ duration: 0.3 }}
            />
          </button>

          <div className="hidden md:flex items-center space-x-20">
            {navItems.map((navItem, idx) => (
              <a
                key={idx}
                href={navItem.link}
                onClick={(e) => handleNavClick(e, navItem.link.substring(1))}
                className="text-sm text-white hover:text-blue-400 transition cursor-pointer flex items-center"
              >
                {navItem.icon && <span className="mr-1">{navItem.icon}</span>}
                {navItem.name}
              </a>
            ))}
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full -left-16 mt-2 w-48 rounded-xl backdrop-blur-sm shadow-lg flex flex-col space-y-3 py-4 px-6 z-40"
                style={{ background: "rgba(16, 27, 48, 0.8)" }}
              >
                {navItems.map((navItem, idx) => (
                  <a
                    key={idx}
                    href={navItem.link}
                    onClick={(e) => handleNavClick(e, navItem.link.substring(1))}
                    className="text-white hover:text-blue-400 cursor-pointer flex items-center"
                  >
                    {navItem.icon && <span className="mr-2">{navItem.icon}</span>}
                    {navItem.name}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
