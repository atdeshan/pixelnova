"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/ui/FadeUp";
import { PROCESS } from "@/lib/content";

export default function Process() {
  return (
    <section
      id="process"
      data-section="process"
      data-theme="light"
      className="relative px-6 md:px-10 py-24 md:py-40"
      style={{ background: "var(--bg-light)", color: "var(--fg-light)" }}
    >
      <div className="max-w-[1500px] mx-auto">
        <FadeUp>
          <div className="label mb-6 md:mb-8" style={{ color: "var(--muted-light)" }}>
            Process
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="font-bold uppercase leading-[0.95] tracking-tight mb-12 md:mb-20 max-w-3xl"
            style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}
          >
            How We Work.
          </h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--rule-light)" }}>
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="p-6 md:p-10"
              style={{ background: "var(--bg-light)" }}
            >
              <div className="label mb-6 md:mb-8" style={{ color: "var(--muted-light)" }}>
                {p.n}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-tight">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-light)" }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
