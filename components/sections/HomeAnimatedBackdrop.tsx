"use client";

import type { ReactNode } from "react";
import { DotField } from "@/components/effects/DotField";
import { MagicRings } from "@/components/effects/MagicRings";
import { Silk } from "@/components/effects/Silk";

const fadeStyle = (gradient: string) => ({
  maskImage: gradient,
  WebkitMaskImage: gradient
});

export function HomeAnimatedBackdrop({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-x-0 top-0 h-[46%]"
          style={fadeStyle("linear-gradient(to bottom, black 0%, black 60%, transparent 100%)")}
        >
          <MagicRings color="#38bdf8" colorTwo="#22d3ee" speed={0.6} opacity={0.55} ringCount={5} />
        </div>
        <div
          className="absolute inset-x-0 top-[27%] h-[48%]"
          style={fadeStyle("linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)")}
        >
          <Silk color="#0E7FA8" speed={1.2} scale={1.1} noiseIntensity={1.1} />
        </div>
        <div
          className="absolute inset-x-0 bottom-0 h-[52%]"
          style={fadeStyle("linear-gradient(to bottom, transparent 0%, black 28%, black 100%)")}
        >
          <DotField
            dotRadius={1.8}
            dotSpacing={22}
            bulgeStrength={55}
            waveAmplitude={2.5}
            gradientFrom="rgba(56, 189, 248, 0.65)"
            gradientTo="rgba(34, 211, 238, 0.4)"
            showGlow={false}
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-950/25" />
      {children}
    </div>
  );
}
