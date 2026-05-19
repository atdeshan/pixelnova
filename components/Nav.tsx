"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/content";

type Theme = "dark" | "light";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState<Theme>("light");
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section]")
    );
    if (sections.length === 0) return;

    const updateActive = () => {
      const scrollLine = window.scrollY + 120;
      let current: HTMLElement = sections[0];
      for (const s of sections) {
        if (s.offsetTop <= scrollLine) current = s;
        else break;
      }
      const id = current.getAttribute("data-section");
      const t = current.getAttribute("data-theme");
      if (id) setActiveSection(id);
      if (t === "light" || t === "dark") setTheme(t);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  // Close on escape
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const fg = theme === "light" ? "#0A0A0A" : "#FFFFFF";
  const muted = theme === "light" ? "rgba(10,10,10,0.55)" : "rgba(255,255,255,0.55)";
  const border = theme === "light" ? "rgba(10,10,10,0.15)" : "rgba(255,255,255,0.15)";
  const scrolledBg = theme === "light" ? "rgba(255,255,255,0.85)" : "rgba(10,10,10,0.75)";

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between"
        style={{
          background: scrolled ? scrolledBg : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: `1px solid ${scrolled ? border : "transparent"}`,
          color: fg,
          transition: "background 0.4s ease, color 0.4s ease, border-color 0.4s ease",
        }}
      >
        {/* Scroll progress bar */}
        <motion.div
          aria-hidden="true"
          className="absolute left-0 right-0 bottom-0 h-px origin-left"
          style={{ scaleX: progressX, background: fg, opacity: 0.6 }}
        />

        <a
          href="#hero"
          className="flex items-center gap-3 focus-ring rounded"
          aria-label="PixelNova — home"
        >
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ background: fg }}
          />
          <span className="label font-medium">PIXELNOVA</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 label" style={{ color: muted }}>
          {NAV.map((it) => {
            const isActive = activeSection === it.href.slice(1);
            return (
              <a
                key={it.label}
                href={it.href}
                className="relative inline-block transition-colors duration-300 focus-ring rounded"
                style={{
                  color: isActive ? fg : muted,
                  fontWeight: isActive ? 600 : 400,
                }}
                aria-current={isActive ? "true" : undefined}
              >
                {it.label}
                <motion.span
                  aria-hidden="true"
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 right-0 -bottom-1.5 h-px"
                  style={{ background: fg, transformOrigin: "left" }}
                />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 label px-4 py-2 rounded-full focus-ring"
            style={{ border: `1px solid ${border}`, color: fg }}
          >
            <span
              className="pulse-dot inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: fg }}
            />
            Available
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full focus-ring"
            style={{ border: `1px solid ${border}`, color: fg }}
          >
            <Menu size={18} strokeWidth={1.8} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="absolute inset-0 w-full h-full"
              style={{ background: "rgba(0,0,0,0.5)" }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-[88%] max-w-sm flex flex-col px-8 pt-8 pb-10"
              style={{ background: "#0A0A0A", color: "#FFFFFF" }}
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-white" />
                  <span className="label font-medium">PIXELNOVA</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full focus-ring"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                  autoFocus
                >
                  <X size={18} strokeWidth={1.8} />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {NAV.map((it, i) => (
                  <motion.a
                    key={it.label}
                    href={it.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setMobileOpen(false)}
                    className="py-4 text-3xl font-semibold tracking-tight uppercase border-b focus-ring"
                    style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    {it.label}
                  </motion.a>
                ))}
              </nav>

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-auto inline-flex items-center justify-between gap-3 label px-5 py-4 rounded-full focus-ring"
                style={{ background: "#FFFFFF", color: "#0A0A0A" }}
              >
                <span className="inline-flex items-center gap-2">
                  <span
                    className="pulse-dot inline-block w-1.5 h-1.5 rounded-full"
                    style={{ background: "#0A0A0A" }}
                  />
                  Available · Q2 2026
                </span>
                <span>→</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
