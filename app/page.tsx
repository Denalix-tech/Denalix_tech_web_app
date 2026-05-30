import type { Metadata } from "next";
import { aiFeatures, gisFeatures, softwareFeatures } from "@/data/site";
import { CTASection } from "@/components/sections/CTASection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhySection } from "@/components/sections/WhySection";

export const metadata: Metadata = {
  title: "AI-Powered Software Solutions for Modern Businesses",
  description:
    "Denalix Tech builds AI systems, automation workflows, full-stack platforms, GIS tools, analytics dashboards, and scalable digital products."
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhySection />
      <FeatureGrid
        eyebrow="AI Solutions"
        title="Intelligent systems that turn operational knowledge into action"
        description="Design and deploy AI applications that retrieve trusted information, orchestrate workflows, support teams, and automate business processes."
        features={aiFeatures}
      />
      <FeatureGrid
        eyebrow="Software Engineering"
        title="Modern applications and platforms built for real users"
        description="From polished interfaces to secure backend systems, Denalix Tech builds production software that can evolve with your organization."
        features={softwareFeatures}
      />
      <FeatureGrid
        eyebrow="GIS & Geospatial"
        title="Location intelligence for maps, operations, and analytics"
        description="Build geospatial products that combine spatial data, interactive maps, analytics, and business context."
        features={gisFeatures}
      />
      <ProcessSection />
      <CTASection />
    </>
  );
}
