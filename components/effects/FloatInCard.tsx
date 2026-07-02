"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FloatInCardProps {
  index: number;
  total: number;
  radius?: number;
  className?: string;
  children: ReactNode;
}

export function FloatInCard({ index, total, radius = 140, className, children }: FloatInCardProps) {
  const angle = (index / Math.max(total, 1)) * Math.PI * 2 - Math.PI / 2;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  const rotate = (index % 2 === 0 ? -1 : 1) * (6 + (index % 3) * 2);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y, scale: 0.82, rotate }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
    >
      {children}
    </motion.div>
  );
}
