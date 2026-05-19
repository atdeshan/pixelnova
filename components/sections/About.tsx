"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeUp from "@/components/ui/FadeUp";
import { ArrowUpRight } from "lucide-react";
import { STUDIO } from "@/lib/content";
import { IMG } from "@/lib/images";

export default function About() {
  return (
    <section
      id="about"
      data-section="about"
      data-theme="dark"
      className="relative px-6 md:px-10 py-24 md:py-40"
      style={{ background: "var(--bg-dark)", color: "var(--fg-dark)" }}
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* LEFT — Image */}
          <div className="md:col-span-6">
            <FadeUp>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src={IMG.about}
                  alt="The two-person PixelNova studio at work"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </FadeUp>
          </div>

          {/* RIGHT — Content */}
          <div className="md:col-span-6">
            <FadeUp delay={0.1}>
              <div className="label mb-6 md:mb-8" style={{ color: "var(--muted-dark)" }}>
                About Us
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <h2
                className="font-bold uppercase leading-[0.95] tracking-tight mb-8 md:mb-10"
                style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}
              >
                Two Heads,
                <br />
                One Studio.
              </h2>
            </FadeUp>

            <FadeUp delay={0.25}>
              <p
                className="text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-lg"
                style={{ color: "var(--muted-dark)" }}
              >
                PixelNova brings design and engineering under one roof — so the
                work doesn&apos;t lose anything in translation.
              </p>
            </FadeUp>

            <FadeUp delay={0.35}>
              <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                {STUDIO.founders.map((name, i) => (
                  <span
                    key={name}
                    className="label px-4 py-2 rounded-full"
                    style={{
                      border: "1px solid var(--rule-dark)",
                      color: "var(--fg-dark)",
                    }}
                  >
                    {name} · {i === 0 ? "Engineering" : "Design"}
                  </span>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.45}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", damping: 18, stiffness: 280 }}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full label focus-ring"
                style={{ background: "var(--fg-dark)", color: "var(--bg-dark)" }}
              >
                Get in touch <ArrowUpRight size={15} strokeWidth={2} />
              </motion.a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
