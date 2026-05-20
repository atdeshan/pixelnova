"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Rocket,
  Sparkles,
  Code2,
  Check,
  LucideIcon,
} from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import RevealLine from "@/components/ui/RevealLine";
import { SERVICES, type Service } from "@/lib/content";

const ICONS: Record<Service["icon"], LucideIcon> = {
  bot: Bot,
  rocket: Rocket,
  sparkles: Sparkles,
  code: Code2,
};

export default function Services() {
  return (
    <section
      id="services"
      data-section="services"
      data-theme="light"
      className="relative px-6 md:px-10 py-24 md:py-40"
      style={{ background: "var(--bg-light)", color: "var(--fg-light)" }}
    >
      <div className="max-w-[1500px] mx-auto">
        <FadeUp>
          <div className="label mb-6 md:mb-8" style={{ color: "var(--muted-light)" }}>
            Our Solutions
          </div>
        </FadeUp>

        <h2
          className="font-bold uppercase leading-[0.95] tracking-tight mb-12 md:mb-20 max-w-3xl"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
        >
          <RevealLine whileInView delay={0.1}>What</RevealLine>
          <RevealLine whileInView delay={0.25}>We Build.</RevealLine>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.n} service={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, i }: { service: Service; i: number }) {
  const [hover, setHover] = useState(false);
  const Icon = ICONS[service.icon];

  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.08 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative p-6 md:p-10 rounded-2xl flex flex-col group cursor-pointer focus-ring"
      style={{
        background: "rgba(10,10,10,0.02)",
        border: "1px solid var(--rule-light)",
        transition: "border-color 0.4s ease, background 0.4s ease",
        borderColor: hover ? "rgba(10,10,10,0.25)" : "rgba(10,10,10,0.1)",
      }}
    >
      <div className="flex items-start justify-between mb-8 md:mb-10">
        <div
          className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center"
          style={{ background: "rgba(10,10,10,0.05)" }}
        >
          <Icon size={22} strokeWidth={1.5} />
        </div>
        <span className="label" style={{ color: "var(--muted-light)" }}>
          {service.n}
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-tight">
        {service.title}
      </h3>
      <p
        className="text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-md"
        style={{ color: "var(--muted-light)" }}
      >
        {service.desc}
      </p>

      <ul className="space-y-2 mb-8 flex-grow">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check
              size={14}
              strokeWidth={2.5}
              className="mt-0.5 shrink-0"
              style={{ color: "var(--fg-light)" }}
            />
            <span style={{ color: "var(--muted-light)" }}>{f}</span>
          </li>
        ))}
      </ul>

      <div
        className="inline-flex items-center gap-2 label"
        style={{ color: "var(--fg-light)" }}
      >
        <motion.span animate={{ x: hover ? 2 : 0 }} transition={{ duration: 0.3 }}>
          Learn more
        </motion.span>
        <motion.div
          animate={{ x: hover ? 4 : 0, y: hover ? -4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight size={14} strokeWidth={2} />
        </motion.div>
      </div>
    </motion.a>
  );
}
