import type { Metadata } from "next";
import { capabilities, explainerPages, services } from "@/data/site";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";
import { ExplainerLinkSection } from "@/components/sections/ExplainerLinkSection";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Denalix Tech consulting services for AI, software development, cloud systems, GIS, workflow automation, analytics dashboards, and SaaS products."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="AI, software, geospatial, and automation consulting under one roof"
        description="Denalix Tech helps organizations turn fragmented processes, data, and product ideas into reliable software systems that create measurable leverage."
      />
      <section className="py-16 sm:py-20">
        <div className="container-pad">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <ExplainerLinkSection
        title="Not sure which service fits?"
        description="These short guides explain the business value of each option in everyday language."
        links={[
          explainerPages.ai,
          explainerPages.software,
          explainerPages.automation,
          explainerPages.maps,
          explainerPages.saas,
          explainerPages.dashboards
        ]}
      />
      <section className="py-16 sm:py-20">
        <div className="container-pad">
          <SectionHeader
            align="center"
            eyebrow="Capabilities"
            title="Built to connect strategy, implementation, and long-term operations"
            description="Every engagement is scoped around the business outcome, the technical constraints, and the systems that need to work together."
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
