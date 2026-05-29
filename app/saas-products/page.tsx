import type { Metadata } from "next";
import { productIdeas } from "@/data/site";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "SaaS Products",
  description:
    "SaaS product development for MVPs, AI-powered tools, multi-tenant platforms, analytics workspaces, and industry-specific business software."
};

export default function SaaSProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="SaaS Products"
        title="AI-powered SaaS products and tools built with a product mindset"
        description="Denali Tech helps founders and organizations validate, build, launch, and improve SaaS products focused on workflow optimization, analytics, intelligent agents, and industry-specific operations."
      />
      <section className="py-16 sm:py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Product Themes"
            title="Software products designed around repeatable business value"
            description="We can help build your SaaS product, or partner on internal product ideas that deserve a stronger engineering and AI foundation."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {productIdeas.map((idea) => (
              <div key={idea} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <h2 className="text-lg font-semibold text-white">{idea}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Product strategy, UX, backend architecture, AI workflows, analytics, and deployment can be shaped around this opportunity.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProcessSection />
      <CTASection title="Shape your SaaS idea into a production roadmap" />
    </>
  );
}
