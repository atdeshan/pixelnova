"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import RevealLine from "@/components/ui/RevealLine";
import { WORK, type WorkItem } from "@/lib/content";

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      ref={sectionRef}
      id="work"
      data-section="work"
      data-theme="dark"
      className="relative px-6 md:px-10 py-24 md:py-40 overflow-hidden"
      style={{ background: "var(--bg-dark)", color: "var(--fg-dark)" }}
    >
      {/* Background figure — contained to upper-right, triple-fade into section */}
      <div
        className="absolute top-0 right-0 w-full md:w-2/3 h-[35vh] md:h-[60vh] pointer-events-none z-0 hidden sm:block"
        aria-hidden="true"
      >
        <motion.div
          style={{ y: imageY }}
          className="absolute top-0 right-0 h-full aspect-[3/4]"
        >
          <Image
            src="/images/contact.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 67vw"
            className="object-contain object-right-top opacity-50"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom, transparent 0%, transparent 50%, #0A0A0A 100%),
              linear-gradient(to left, transparent 0%, transparent 60%, #0A0A0A 100%),
              radial-gradient(ellipse at top right, transparent 20%, rgba(10,10,10,0.7) 80%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="label mb-8 flex items-center gap-4"
          style={{ color: "var(--muted-dark)" }}
        >
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block h-px w-12"
            style={{ background: "var(--muted-dark)", transformOrigin: "left" }}
          />
          Selected Work
        </motion.div>

        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-20 gap-6">
          <h2
            className="font-bold uppercase leading-[0.95] tracking-tight max-w-3xl"
            style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}
          >
            <RevealLine whileInView delay={0.1}>Recent</RevealLine>
            <RevealLine whileInView delay={0.25}>Work.</RevealLine>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="label flex items-center gap-3"
            style={{ color: "var(--muted-dark)" }}
          >
            <span>Projects</span>
            <span className="text-2xl md:text-3xl font-semibold" style={{ color: "var(--fg-dark)" }}>
              {String(WORK.length).padStart(2, "0")}
            </span>
          </motion.div>
        </div>

        {/* Staggered 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Column 1 — no offset */}
          <div className="flex flex-col gap-6">
            <ProjectCard w={WORK[0]} delay={0} heightClass="min-h-[320px]" />
            <ProjectCard w={WORK[1]} delay={0.05} heightClass="min-h-[280px]" />
          </div>

          {/* Column 2 — offset down 80px */}
          <div className="flex flex-col gap-6 md:pt-20">
            <ProjectCard w={WORK[2]} delay={0.1} heightClass="min-h-[360px]" />
            <ProjectCard w={WORK[3]} delay={0.15} heightClass="min-h-[260px]" />
          </div>

          {/* Column 3 — offset down 160px */}
          <div className="flex flex-col gap-6 md:pt-40">
            <ProjectCard w={WORK[4]} delay={0.2} heightClass="min-h-[380px]" />
          </div>

          {/* Column 4 — slight offset, MORE WORK card */}
          <div className="flex flex-col gap-6 md:pt-10">
            <MoreWorkCard delay={0.25} heightClass="min-h-[300px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  w,
  delay,
  heightClass,
}: {
  w: WorkItem;
  delay: number;
  heightClass: string;
}) {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col justify-between rounded-2xl p-6 md:p-8 overflow-hidden ${heightClass}`}
      style={{
        background: "linear-gradient(135deg, #141414 0%, #0A0A0A 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.08), transparent 60%)",
        }}
      />

      {/* Top — client + index + arrow */}
      <div className="relative flex items-start justify-between mb-4">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight max-w-[75%] leading-tight">
          {w.client}
        </h3>
        <div className="flex items-center gap-3">
          <span className="label opacity-65">{w.n}</span>
          <motion.span
            className="inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
            whileHover={{ x: 2, y: -2 }}
          >
            <ArrowUpRight size={16} strokeWidth={2} />
          </motion.span>
        </div>
      </div>

      {/* Description — sits in the middle/bottom */}
      <p
        className="relative text-sm leading-relaxed mt-auto"
        style={{ color: "var(--muted-dark)" }}
      >
        {w.project}
      </p>

      {/* Tags + year */}
      <div className="relative mt-6 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          {w.tags.map((tag) => (
            <span
              key={tag}
              className="label px-3 py-1 rounded-full"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                color: "var(--muted-dark)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="label opacity-60">{w.year}</span>
      </div>
    </motion.a>
  );
}

function MoreWorkCard({
  delay,
  heightClass,
}: {
  delay: number;
  heightClass: string;
}) {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col items-center justify-center rounded-2xl p-6 md:p-8 overflow-hidden text-center ${heightClass}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 100%)",
        border: "1px dashed rgba(255,255,255,0.18)",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08), transparent 65%)",
        }}
      />

      <motion.div
        initial={false}
        whileHover={{ rotate: 45 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-full"
        style={{ border: "1px solid rgba(255,255,255,0.2)" }}
      >
        <ArrowUpRight size={22} strokeWidth={2} />
      </motion.div>

      <div className="label mb-2 opacity-60">More Work</div>
      <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-tight">
        Start a project together.
      </h3>
    </motion.a>
  );
}
