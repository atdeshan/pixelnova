"use client";

import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  whileInView?: boolean;
};

export default function RevealLine({
  children,
  delay = 0,
  className = "",
  style = {},
  whileInView = false,
}: Props) {
  const animateProps = whileInView
    ? {
        whileInView: { y: 0 },
        viewport: { once: true, margin: "-80px" },
      }
    : { animate: { y: 0 } };

  return (
    <div className="overflow-hidden">
      <motion.span
        initial={{ y: "108%" }}
        {...animateProps}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
        className={`block ${className}`}
        style={style}
      >
        {children}
      </motion.span>
    </div>
  );
}
