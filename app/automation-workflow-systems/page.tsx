import type { Metadata } from "next";
import { BellRing, ClipboardCheck, GitBranch, PlugZap, Workflow } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Automation & Workflow Systems",
  description:
    "Workflow automation consulting for CRM integrations, AI-assisted operations, third-party APIs, intake systems, approvals, and business process optimization."
};

export default function AutomationPage() {
  const automations = [
    { title: "Intake and routing", icon: ClipboardCheck, copy: "Capture requests, qualify them, assign ownership, and move them through the right process." },
    { title: "API integrations", icon: PlugZap, copy: "Connect CRMs, scheduling tools, payment platforms, documents, databases, and internal software." },
    { title: "Approval workflows", icon: GitBranch, copy: "Coordinate multi-step business logic with human review, auditability, and clear status." },
    { title: "AI-assisted operations", icon: Workflow, copy: "Use AI to classify, extract, summarize, draft, route, and recommend next actions." },
    { title: "Notifications", icon: BellRing, copy: "Keep teams and customers informed through email, SMS, dashboards, and tool-specific updates." }
  ];

  return (
    <>
      <PageHero
        eyebrow="Automation"
        title="Workflow systems that reduce manual work and operational drift"
        description="Denali Tech designs automation around the actual way your business runs, connecting people, software, AI, data, and approvals into reliable repeatable systems."
      />
      <section className="py-16 sm:py-20">
        <div className="container-pad">
          <SectionHeader
            align="center"
            eyebrow="Workflow Design"
            title="Automate the handoffs that slow teams down"
            description="Good automation is not just a trigger and an action. It is a clear process with dependable integrations, useful exceptions, and visibility for the people responsible."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {automations.map((automation) => {
              const Icon = automation.icon;
              return (
                <div key={automation.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <Icon className="h-6 w-6 text-cyan-300" aria-hidden="true" />
                  <h2 className="mt-5 text-lg font-semibold text-white">{automation.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{automation.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTASection title="Create workflows your team does not have to babysit" />
    </>
  );
}
