import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how Denalix Tech works with businesses from discovery and planning through build, launch, and ongoing support."
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="From business problem to practical technology roadmap"
        description="You do not need to arrive with technical requirements. Bring the current problem, the process that feels messy, and the result you want. Denalix Tech turns that into a clear plan before anything gets built."
      />
      <ProcessSection />
      <section className="py-16 sm:py-20">
        <div className="container-pad">
          <SectionHeader
            align="center"
            eyebrow="The Roadmap"
            title="What you should know before a project starts"
            description="The goal is to make the next step obvious. We help you understand the opportunity, the risks, the first version to build, and how the work can create measurable business value."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Current state",
                copy:
                  "What tools are being used today? Where are people waiting, repeating work, losing information, or serving customers slower than they should?"
              },
              {
                title: "Best first move",
                copy:
                  "Not every idea needs a huge build. We identify the highest-value first version so you can get useful results without overbuilding."
              },
              {
                title: "Launch path",
                copy:
                  "You see the milestones, responsibilities, timeline, and success measures before the project moves into delivery."
              }
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
              >
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Have a process that needs to work better?" />
    </>
  );
}
