import type { Metadata } from "next";
import { explainerPages } from "@/data/site";
import { ExplainerLinkSection } from "@/components/sections/ExplainerLinkSection";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Simple Guides",
  description:
    "Simple business-friendly guides to AI tools, custom software, automation, map systems, SaaS products, and dashboards."
};

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Simple Guide"
        title="Step-by-step explanations for business folks"
        description="Short, practical pages that explain what each service does, when it helps, and what a real project can look like without expecting a technical background."
      />
      <ExplainerLinkSection
        title="Choose what you want to understand"
        description="Start with the business problem. Each guide keeps the language practical, simple, and focused on real outcomes."
        links={[
          explainerPages.ai,
          explainerPages.software,
          explainerPages.automation,
          explainerPages.maps,
          explainerPages.saas,
          explainerPages.dashboards
        ]}
      />
    </>
  );
}
