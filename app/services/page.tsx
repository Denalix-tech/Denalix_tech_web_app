import type { Metadata } from "next";
import { capabilities, explainerPages, services } from "@/data/site";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";
import { ExplainerLinkSection } from "@/components/sections/ExplainerLinkSection";
import { PageHero } from "@/components/sections/PageHero";
import { FloatInCard } from "@/components/effects/FloatInCard";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Denalix Tech services for smarter business tools, custom software, automation, dashboards, map-based systems, and digital products."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        rotatingEyebrow={[
          "AI SOLUTIONS",
          "WORKFLOW AUTOMATION",
          "CUSTOM SOFTWARE",
          "SAAS PRODUCTS",
          "GIS SYSTEMS"
        ]}
        title="The specific ways Denalix Tech can help"
        description="If the homepage describes the business outcomes, this page explains the services behind them: smarter tools, custom software, automation, dashboards, map-based systems, integrations, and digital products."
      />
      <section className="py-20 sm:py-24">
        <div className="container-pad">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      <section className="py-20 sm:py-24">
        <div className="container-pad">
          <SectionHeader
            align="center"
            eyebrow="Capabilities"
            title="Built to connect strategy, implementation, and long-term operations"
            description="Every engagement is scoped around the business outcome, the technical constraints, and the systems that need to work together."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <FloatInCard key={capability.label} index={index} total={capabilities.length}>
                  <div className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5">
                    <Icon className="h-6 w-6 text-cyan-300" aria-hidden="true" />
                    <span className="font-semibold text-white">{capability.label}</span>
                  </div>
                </FloatInCard>
              );
            })}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
