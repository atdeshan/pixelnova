"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import RevealLine from "@/components/ui/RevealLine";
import { STUDIO } from "@/lib/content";
import { IMG } from "@/lib/images";

export default function Contact() {
  return (
    <section
      id="contact"
      data-section="contact"
      data-theme="dark"
      className="relative overflow-hidden px-6 md:px-10 py-24 md:py-40"
      style={{ background: "#0A0A0A", color: "var(--fg-dark)" }}
    >
      <div className="relative max-w-[1500px] mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        {/* LEFT — copy stack */}
        <div className="md:col-span-7 flex flex-col">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="label mb-8 md:mb-10 flex flex-wrap items-center gap-x-5 gap-y-2"
            style={{ color: "var(--muted-dark)" }}
          >
            <span className="inline-flex items-center gap-3">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="block h-px w-10"
                style={{ background: "var(--muted-dark)", transformOrigin: "left" }}
              />
              Contact
            </span>
            <span
              className="inline-flex items-center gap-2"
              style={{ color: "var(--fg-dark)" }}
            >
              <span
                className="pulse-dot inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--fg-dark)" }}
              />
              Available · {STUDIO.booking}
            </span>
          </motion.div>

          {/* Headline */}
          <h2
            className="font-bold uppercase leading-[0.9] tracking-tight mb-8 md:mb-10"
            style={{ fontSize: "clamp(2.25rem, 7vw, 6.5rem)" }}
          >
            <RevealLine whileInView delay={0.1}>Let&apos;s Build</RevealLine>
            <RevealLine whileInView delay={0.25}>Something.</RevealLine>
          </h2>

          {/* Description */}
          <FadeUp delay={0.3}>
            <p
              className="text-lg md:text-xl leading-relaxed max-w-xl mb-10"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Tell us what you&apos;re working on. We reply within two business days.
            </p>
          </FadeUp>

          {/* CTA + email */}
          <FadeUp delay={0.4}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <motion.a
                href={`mailto:${STUDIO.email}?subject=Project%20inquiry`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", damping: 18, stiffness: 280 }}
                className="inline-flex items-center gap-4 px-9 py-5 rounded-full text-base font-medium focus-ring"
                style={{ background: "var(--fg-dark)", color: "var(--bg-dark)" }}
              >
                Write to us
                <ArrowUpRight size={18} strokeWidth={2} />
              </motion.a>

              <a
                href={`mailto:${STUDIO.email}`}
                className="inline-flex items-center gap-3 text-base underline-anim focus-ring rounded break-all"
                style={{ color: "var(--muted-dark)" }}
              >
                <Mail size={15} className="shrink-0" />
                {STUDIO.email}
              </a>
            </div>
          </FadeUp>
        </div>

        {/* RIGHT — wireframe figure (hidden on small screens to save scroll) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block md:col-span-5 relative"
        >
          <div className="relative aspect-square w-full max-w-[520px] mx-auto">
            {/* Soft radial glow behind the figure */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 65%)",
              }}
              aria-hidden="true"
            />
            <Image
              src={IMG.contact}
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 768px) 80vw, 520px"
              className="object-contain opacity-80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
