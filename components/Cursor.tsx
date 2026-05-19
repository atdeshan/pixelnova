"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Theme = "dark" | "light";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const xs = useSpring(x, { damping: 32, stiffness: 380, mass: 0.4 });
  const ys = useSpring(y, { damping: 32, stiffness: 380, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    const listener = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      const section = el?.closest?.("[data-theme]") as HTMLElement | null;
      if (section) {
        const t = section.getAttribute("data-theme");
        if (t === "light" || t === "dark") setTheme(t);
      }
    };

    const detectHover = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(Boolean(t.closest?.("[data-cursor]")));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", detectHover);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", detectHover);
    };
  }, [x, y, enabled]);

  if (!enabled) return null;

  const color = theme === "light" ? "#0A0A0A" : "#FFFFFF";

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ translateX: xs, translateY: ys }}
    >
      <motion.div
        animate={{
          width: hover ? 40 : 8,
          height: hover ? 40 : 8,
          x: hover ? -20 : -4,
          y: hover ? -20 : -4,
          backgroundColor: hover ? "transparent" : color,
          borderColor: color,
          borderWidth: hover ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 24, stiffness: 300 }}
        style={{
          borderRadius: "50%",
          borderStyle: "solid",
          mixBlendMode: hover ? "normal" : "difference",
        }}
      />
    </motion.div>
  );
}
