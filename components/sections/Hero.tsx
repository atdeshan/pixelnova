"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import RevealLine from "@/components/ui/RevealLine";
import { IMG } from "@/lib/images";
import { STUDIO, STATS } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="hero"
      data-section="hero"
      data-theme="dark"
      className="relative h-screen min-h-[640px] w-full overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* IMAGE LAYER — behind everything */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[55%] sm:h-[70%] md:h-[90%] aspect-[4/5] pointer-events-none">
          <Image
            src={IMG.hero}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 640px) 70vw, (max-width: 1024px) 60vw, 50vw"
            priority
            className="object-contain opacity-60 sm:opacity-70 md:opacity-80"
          />
        </div>
        {/* Left → right legibility gradient — stronger on mobile */}
        <div
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.85) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, #0A0A0A 0%, rgba(10,10,10,0.7) 35%, rgba(10,10,10,0.1) 70%, transparent 100%)",
          }}
        />
        {/* Bottom fade so stats sit cleanly */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          style={{ background: "linear-gradient(to top, #0A0A0A, transparent)" }}
        />
      </div>

      {/* TEXT LAYER — on top, sized to viewport */}
      <div className="relative z-10 h-screen min-h-[640px] flex flex-col justify-center max-w-[1500px] mx-auto px-6 md:px-10 pt-24 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="label mb-5 md:mb-8 text-white/70"
        >
          Creative-Tech Studio · Est. {STUDIO.established}
        </motion.div>

        <h1
          className="font-bold uppercase leading-[0.92] tracking-tight text-white"
          style={{ fontSize: "clamp(2.25rem, 8.5vw, 9rem)" }}
        >
          <RevealLine delay={0.15}>From Imagination</RevealLine>
          <RevealLine delay={0.3}>To Innovation.</RevealLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-5 md:mt-7 text-base md:text-lg leading-relaxed max-w-xl text-white/70"
        >
          We build powerful digital experiences. Combining creativity, technology, and
          strategy to help businesses grow, scale, and stand out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", damping: 18, stiffness: 280 }}
            className="inline-flex items-center justify-between gap-4 px-6 py-3.5 rounded-full label bg-white text-black focus-ring"
          >
            Start your project <ArrowRight size={14} strokeWidth={2} />
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", damping: 18, stiffness: 280 }}
            className="inline-flex items-center justify-between gap-4 px-6 py-3.5 rounded-full label border border-white/25 text-white focus-ring"
          >
            Explore services <ArrowUpRight size={14} strokeWidth={2} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-8 md:mt-10 flex gap-6 sm:gap-10 flex-wrap"
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-lg md:text-xl font-semibold mb-0.5 text-white">{s.n}</div>
              <div className="label text-white/70">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
