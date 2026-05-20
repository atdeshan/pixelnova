"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import { FEATURED_OFFER } from "@/lib/content";

export default function FeaturedOffer() {
  return (
    <section
      data-theme="light"
      className="relative px-6 md:px-10 py-20 md:py-28"
      style={{ background: "var(--bg-light)" }}
    >
      <div className="max-w-[1500px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl p-8 md:p-16"
          style={{
            background: "linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 100%)",
            color: "#FFFFFF",
          }}
        >
          {/* Decorative glow */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8">
              <FadeUp>
                <div
                  className="label mb-6 inline-flex items-center gap-2"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  <Sparkles size={14} strokeWidth={1.8} />
                  {FEATURED_OFFER.eyebrow}
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h2
                  className="font-bold uppercase leading-[0.95] tracking-tight mb-6"
                  style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)" }}
                >
                  {FEATURED_OFFER.title}
                </h2>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p
                  className="text-base md:text-lg leading-relaxed max-w-xl"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  {FEATURED_OFFER.content}
                </p>
              </FadeUp>
            </div>

            <div className="md:col-span-4 flex md:justify-end">
              <FadeUp delay={0.3}>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", damping: 18, stiffness: 280 }}
                  className="inline-flex items-center gap-3 px-8 md:px-10 py-5 md:py-6 rounded-full text-base font-medium focus-ring"
                  style={{ background: "#FFFFFF", color: "#0A0A0A" }}
                >
                  {FEATURED_OFFER.cta}
                  <ArrowUpRight size={18} strokeWidth={2} />
                </motion.a>
              </FadeUp>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
