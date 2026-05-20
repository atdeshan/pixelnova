"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/ui/FadeUp";
import RevealLine from "@/components/ui/RevealLine";
import { FOUNDERS } from "@/lib/content";

export default function Founders() {
  return (
    <section
      id="founders"
      data-section="founders"
      data-theme="dark"
      className="relative px-6 md:px-10 py-24 md:py-32"
      style={{ background: "var(--bg-dark)", color: "var(--fg-dark)" }}
    >
      <div className="max-w-[1500px] mx-auto">
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
          Leadership
        </motion.div>

        <h2
          className="font-bold uppercase leading-[0.95] tracking-tight mb-12 md:mb-16 max-w-3xl"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
        >
          <RevealLine whileInView delay={0.1}>The People</RevealLine>
          <RevealLine whileInView delay={0.25}>Behind PixelNova.</RevealLine>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {FOUNDERS.map((f, i) => (
            <FadeUp key={f.name} delay={0.1 + i * 0.1}>
              <div
                className="relative h-full rounded-2xl p-8 md:p-10"
                style={{
                  background: "linear-gradient(135deg, #141414 0%, #0A0A0A 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="label mb-6 inline-block"
                  style={{ color: "var(--muted-dark)" }}
                >
                  0{i + 1} · {f.role}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                  {f.name}
                </h3>
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{ color: "var(--muted-dark)" }}
                >
                  {f.bio}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <p
            className="text-base md:text-lg max-w-2xl"
            style={{ color: "var(--muted-dark)" }}
          >
            Together, they bridge creativity and technology to build impactful
            digital experiences.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
