"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight);

      // Match the current section's theme so the button stays legible
      const scrollLine = window.scrollY + window.innerHeight - 200;
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-section]")
      );
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollLine) {
          const t = sections[i].getAttribute("data-theme");
          if (t === "light" || t === "dark") {
            setTheme(t);
            break;
          }
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  const bg = theme === "light" ? "#0A0A0A" : "#FFFFFF";
  const fg = theme === "light" ? "#FFFFFF" : "#0A0A0A";

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={goTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 10 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 inline-flex items-center justify-center w-12 h-12 rounded-full shadow-lg focus-ring"
          style={{ background: bg, color: fg }}
        >
          <ArrowUp size={18} strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
