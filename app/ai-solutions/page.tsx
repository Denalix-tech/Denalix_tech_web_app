import type { Metadata } from "next";
import { BrainCircuit, FileSearch, Mic, Network, Workflow } from "lucide-react";
import { aiFeatures, explainerPages } from "@/data/site";
import { CTASection } from "@/components/sections/CTASection";
import { ExplainerLinkSection } from "@/components/sections/ExplainerLinkSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "AI Solutions",
  description:
    "AI consulting for LLM integrations, RAG systems, AI agents, voice agents, document intelligence, workflow orchestration, and business automation."
};

export default function AISolutionsPage() {
  const useCases = [
    { title: "Knowledge assistants", icon: FileSearch, copy: "RAG systems that retrieve trusted company information and cite source material." },
    { title: "AI agents", icon: BrainCircuit, copy: "Task-oriented agents that coordinate tools, APIs, decisions, and human review." },
    { title: "Voice workflows", icon: Mic, copy: "Voice agents for intake, scheduling, support, qualification, and operational follow-up." },
    { title: "Connected automation", icon: Workflow, copy: "AI workflows that route data across CRMs, documents, dashboards, and business tools." },
    { title: "System integration", icon: Network, copy: "LLM features embedded into the platforms your team already uses." }
  ];

  return (
    <>
      <PageHero
        eyebrow="AI Solutions"
        title="AI systems that work inside real business operations"
        description="Denalix Tech designs AI applications that combine LLMs, retrieval, data pipelines, human approval, and tool orchestration so teams can automate work without losing control."
      />
      <ExplainerLinkSection
        title="New to AI tools?"
        description="Start with a short business-friendly guide before diving into the technical details."
        links={[explainerPages.ai]}
      />
      <FeatureGrid
        eyebrow="What We Build"
        title="From AI experiments to production workflows"
        description="We help identify where AI belongs, design the system around trusted data and clear constraints, and deploy it as part of a reliable product or workflow."
        features={aiFeatures}
      />
      <section className="py-16 sm:py-20">
        <div className="container-pad grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {useCases.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <Icon className="h-6 w-6 text-cyan-300" aria-hidden="true" />
                <h2 className="mt-5 text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.copy}</p>
              </div>
            );
          })}
        </div>
      </section>
      <CTASection title="Bring AI into your workflow with a clear plan" />
    </>
  );
}
