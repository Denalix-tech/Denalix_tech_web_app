import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whyDenalix } from "@/data/site";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { FloatInCard } from "@/components/effects/FloatInCard";
import { MagicRings } from "@/components/effects/MagicRings";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Denalix Tech, a modern software and AI consulting company focused on scalable digital solutions, intelligent automation, and product-minded engineering."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Denalix Tech"
        title="A modern consulting partner for AI-first software delivery"
        description="Denalix Tech helps businesses plan, build, and improve software systems that connect strategy with execution: AI workflows, automation, geospatial products, dashboards, platforms, and cloud infrastructure."
      />
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-y-1/2 translate-x-1/5 opacity-90">
          <MagicRings
            color="#22D3EE"
            colorTwo="#38BDF8"
            ringCount={6}
            lineThickness={3}
            opacity={1}
            followMouse
            speed={0.8}
          />
        </div>
        <div className="container-pad grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Operating Principles"
            title="Built for teams that need clarity, speed, and responsible execution"
            description="The company works where consulting judgment and hands-on engineering need to meet. That means understanding the business process, designing the system carefully, and still moving with startup-speed execution."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {whyDenalix.map((item, index) => {
              const Icon = item.icon;
              return (
                <FloatInCard key={item.title} index={index} total={whyDenalix.length}>
                  <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-cyan-300/15 text-cyan-200 ring-1 ring-cyan-300/20">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                  </div>
                </FloatInCard>
              );
            })}
          </div>
        </div>
        <div className="container-pad mt-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
          >
            See our full technical range on the Services page
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}
