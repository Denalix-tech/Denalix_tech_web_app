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
        eyebrow="Simple Guides"
        title="Technology services explained for business owners and teams"
        description="Short, practical pages that explain what each service does, when it helps, and what a real project can look like."
      />
      <ExplainerLinkSection
        title="Choose what you want to understand"
        description="Start with the business problem. Each guide keeps the language practical and avoids heavy technical terms."
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
