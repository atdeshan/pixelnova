"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import RevealLine from "@/components/ui/RevealLine";
import { FAQS } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      data-section="faq"
      data-theme="light"
      className="relative px-6 md:px-10 py-24 md:py-40"
      style={{ background: "var(--bg-light)", color: "var(--fg-light)" }}
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* LEFT — heading */}
          <div className="md:col-span-5">
            <FadeUp>
              <div
                className="label mb-6 md:mb-8 flex items-center gap-4"
                style={{ color: "var(--muted-light)" }}
              >
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="block h-px w-10"
                  style={{
                    background: "var(--muted-light)",
                    transformOrigin: "left",
                  }}
                />
                FAQ
              </div>
            </FadeUp>

            <h2
              className="font-bold uppercase leading-[0.95] tracking-tight mb-6 md:mb-8"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
            >
              <RevealLine whileInView delay={0.1}>Common</RevealLine>
              <RevealLine whileInView delay={0.25}>Questions.</RevealLine>
            </h2>

            <FadeUp delay={0.3}>
              <p
                className="text-base md:text-lg leading-relaxed max-w-md"
                style={{ color: "var(--muted-light)" }}
              >
                Quick answers to what most founders ask before working with us.
                Don&apos;t see yours?{" "}
                <a
                  href="#contact"
                  className="underline-anim focus-ring rounded"
                  style={{ color: "var(--fg-light)" }}
                >
                  Drop us a line
                </a>
                .
              </p>
            </FadeUp>
          </div>

          {/* RIGHT — accordion */}
          <div className="md:col-span-7">
            <ul
              className="divide-y"
              style={{ borderTop: "1px solid var(--rule-light)", borderBottom: "1px solid var(--rule-light)", borderColor: "var(--rule-light)" }}
            >
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q} style={{ borderColor: "var(--rule-light)" }}>
                    <FadeUp delay={i * 0.05}>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        className="w-full text-left py-6 md:py-7 flex items-start justify-between gap-6 focus-ring rounded group"
                      >
                        <span className="text-lg md:text-xl font-medium tracking-tight pr-2">
                          {f.q}
                        </span>
                        <motion.span
                          aria-hidden="true"
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full"
                          style={{ border: "1px solid var(--rule-light)" }}
                        >
                          <Plus size={16} strokeWidth={1.8} />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-panel-${i}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                              transition: {
                                height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                                opacity: { duration: 0.3, delay: 0.05 },
                              },
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                              transition: {
                                height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                                opacity: { duration: 0.15 },
                              },
                            }}
                            className="overflow-hidden"
                          >
                            <p
                              className="text-base leading-relaxed pb-6 md:pb-7 pr-12 max-w-2xl"
                              style={{ color: "var(--muted-light)" }}
                            >
                              {f.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </FadeUp>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
