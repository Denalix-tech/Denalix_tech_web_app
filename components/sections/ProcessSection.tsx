"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";
import { DotField } from "@/components/effects/DotField";
import { TextType } from "@/components/effects/TextType";

interface ProcessSectionProps {
  withBackground?: boolean;
}

export function ProcessSection({ withBackground = true }: ProcessSectionProps) {
  return (
    <section className={withBackground ? "relative overflow-hidden py-24 sm:py-32" : "py-24 sm:py-32"}>
      {withBackground ? (
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 100%)"
          }}
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
      ) : null}
      <div className="container-pad">
        <SectionHeader
          align="center"
          eyebrow="How It Works"
          title="A simple plan before we build"
          description="We start with the request, understand the business, create a practical roadmap, then build and improve the right solution in stages."
        />
        <div className="relative mx-auto mt-24 max-w-2xl">
          <div className="absolute bottom-0 left-7 top-0 w-px">
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-cyan-300/10 via-cyan-300/80 to-cyan-300/10"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative flex gap-6"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-lg font-bold text-slate-950 ring-8 ring-slate-950">
                  {index + 1}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <TextType
                    as="p"
                    text={step.description}
                    className="mt-3 max-w-xl text-sm leading-6 text-slate-400"
                    typingSpeed={12}
                    loop={false}
                    showCursor={false}
                    startOnVisible
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
