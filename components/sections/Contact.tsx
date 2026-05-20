"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MessageCircle, Globe } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import RevealLine from "@/components/ui/RevealLine";
import { STUDIO } from "@/lib/content";
import { IMG } from "@/lib/images";

export default function Contact() {
  const whatsappHref = `https://wa.me/${STUDIO.whatsapp}?text=${encodeURIComponent(
    "Hi PixelNova, I'd like to start a conversation about a project."
  )}`;

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
            style={{ fontSize: "clamp(2.25rem, 7vw, 6rem)" }}
          >
            <RevealLine whileInView delay={0.1}>Let&apos;s Build</RevealLine>
            <RevealLine whileInView delay={0.25}>Something Great.</RevealLine>
          </h2>

          {/* Description */}
          <FadeUp delay={0.3}>
            <p
              className="text-lg md:text-xl leading-relaxed max-w-xl mb-10"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Ready to elevate your business? Let&apos;s turn your ideas into
              powerful digital experiences.
            </p>
          </FadeUp>

          {/* Primary CTA */}
          <FadeUp delay={0.4}>
            <motion.a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", damping: 18, stiffness: 280 }}
              className="inline-flex items-center gap-4 px-9 py-5 rounded-full text-base font-medium focus-ring mb-10"
              style={{ background: "var(--fg-dark)", color: "var(--bg-dark)" }}
            >
              Start a Conversation
              <ArrowUpRight size={18} strokeWidth={2} />
            </motion.a>
          </FadeUp>

          {/* Contact details */}
          <FadeUp delay={0.5}>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-xl">
              <a
                href={`tel:${STUDIO.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-3 focus-ring rounded"
              >
                <Phone size={16} strokeWidth={1.8} className="shrink-0" />
                <span className="text-base group-hover:underline">{STUDIO.phone}</span>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 focus-ring rounded"
              >
                <MessageCircle size={16} strokeWidth={1.8} className="shrink-0" />
                <span className="text-base group-hover:underline">
                  WhatsApp{" "}
                  <span style={{ color: "var(--muted-dark)" }}>· available</span>
                </span>
              </a>
              <a
                href={`mailto:${STUDIO.email}`}
                className="group flex items-center gap-3 focus-ring rounded break-all"
              >
                <Mail size={16} strokeWidth={1.8} className="shrink-0" />
                <span className="text-base group-hover:underline">
                  {STUDIO.email}
                </span>
              </a>
              <div className="flex items-center gap-3">
                <Globe size={16} strokeWidth={1.8} className="shrink-0" />
                <span className="text-base">{STUDIO.website}</span>
              </div>
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
