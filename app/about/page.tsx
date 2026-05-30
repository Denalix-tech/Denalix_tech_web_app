import type { Metadata } from "next";
import { capabilities, whyDenalix } from "@/data/site";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

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
      <section className="py-16 sm:py-20">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Operating Principles"
            title="Built for teams that need clarity, speed, and responsible execution"
            description="The company works where consulting judgment and hands-on engineering need to meet. That means understanding the business process, designing the system carefully, and still moving with startup-speed execution."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {whyDenalix.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <h2 className="text-lg font-semibold text-white">{item}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="container-pad">
          <SectionHeader
            align="center"
            eyebrow="Technical Range"
            title="A practical blend of AI, cloud, data, software, and product thinking"
            description="Denalix Tech is positioned to serve startups, healthcare organizations, local businesses, and enterprises that need credible technology delivery without unnecessary ceremony."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <div key={capability.label} className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <Icon className="h-6 w-6 text-cyan-300" aria-hidden="true" />
                  <span className="font-semibold text-white">{capability.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
