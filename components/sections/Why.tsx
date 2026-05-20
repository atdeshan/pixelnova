"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/ui/FadeUp";
import RevealLine from "@/components/ui/RevealLine";
import { WHY_POINTS } from "@/lib/content";

export default function Why() {
  return (
    <section
      id="why"
      data-section="why"
      data-theme="dark"
      className="relative px-6 md:px-10 py-24 md:py-40 overflow-hidden"
      style={{ background: "var(--bg-dark)", color: "var(--fg-dark)" }}
    >
      {/* Ambient backdrop glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(255,255,255,0.04) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1500px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="label mb-6 md:mb-8 flex items-center gap-4"
          style={{ color: "var(--muted-dark)" }}
        >
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block h-px w-10"
            style={{ background: "var(--muted-dark)", transformOrigin: "left" }}
          />
          Why PixelNova
        </motion.div>

        <h2
          className="font-bold uppercase leading-[0.95] tracking-tight mb-12 md:mb-20 max-w-3xl"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
        >
          <RevealLine whileInView delay={0.1}>Why Choose</RevealLine>
          <RevealLine whileInView delay={0.25}>Us.</RevealLine>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--rule-dark)" }}>
          {WHY_POINTS.map((p, i) => (
            <FadeUp key={p.title} delay={i * 0.06}>
              <div
                className="h-full p-6 md:p-10"
                style={{ background: "var(--bg-dark)" }}
              >
                <div
                  className="label mb-6"
                  style={{ color: "var(--muted-dark)" }}
                >
                  0{i + 1}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-tight leading-tight">
                  {p.title}
                </h3>
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{ color: "var(--muted-dark)" }}
                >
                  {p.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
