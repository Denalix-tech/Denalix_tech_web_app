"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ClipboardCheck, Sparkles, Users, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Aurora } from "@/components/effects/Aurora";
import { BlurText } from "@/components/effects/BlurText";

export function HeroSection() {
  const chips = [
    { label: "Less manual work", icon: Workflow },
    { label: "Clearer operations", icon: ClipboardCheck },
    { label: "Better decisions", icon: BarChart3 },
    { label: "Smoother customer service", icon: Users }
  ];

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20 h-full w-full">
        <Aurora colorStops={["#0EA5E9", "#22D3EE", "#0EA5E9"]} amplitude={1.1} blend={0.55} speed={0.6} />
      </div>
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:42px_42px] opacity-30" />
      <div className="container-pad grid min-h-[calc(100dvh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Digital foundation for businesses ready to move faster
          </div>
          <BlurText
            text="Modernize. Automate. Scale with confidence."
            delay={90}
            className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Denalix Tech helps startups, local businesses, healthcare teams,
            and growing companies turn manual chaos into digital clarity. We
            find the operational leaks, build the right systems, and create the
            technology foundation needed to grow.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
          aria-label="Denalix Tech capability visualization"
        >
          <div className="glass-panel rounded-lg p-5">
            <div className="rounded-lg border border-white/10 bg-slate-950/80 p-4">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-cyan-200">Business Growth System</p>
                  <p className="text-xs text-slate-500">Operations, customers, data, and delivery aligned</p>
                </div>
                <span className="rounded-full bg-emerald-400/12 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Live
                </span>
              </div>
              <div className="grid gap-3">
                {chips.map((chip, index) => {
                  const Icon = chip.icon;
                  return (
                    <motion.div
                      key={chip.label}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.08 }}
                      className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-4"
                    >
                      <span className="flex items-center gap-3 text-sm font-medium text-white">
                        <Icon className="h-5 w-5 text-cyan-200" aria-hidden="true" />
                        {chip.label}
                      </span>
                      <span className="h-2 w-24 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500" />
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[
                  ["01", "audit the leaks"],
                  ["02", "map the roadmap"],
                  ["03", "build to scale"]
                ].map(([value, label]) => (
                  <div key={label} className="rounded-md border border-white/10 bg-cyan-300/[0.08] p-3">
                    <p className="text-xl font-bold text-white">{value}</p>
                    <p className="mt-1 text-xs text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
