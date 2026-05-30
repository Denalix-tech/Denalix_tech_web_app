import type { Metadata } from "next";
import { Database, LayoutDashboard, LockKeyhole, Server, Smartphone } from "lucide-react";
import { explainerPages, softwareFeatures } from "@/data/site";
import { CTASection } from "@/components/sections/CTASection";
import { ExplainerLinkSection } from "@/components/sections/ExplainerLinkSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Software Development",
  description:
    "Custom software development for frontend apps, backend APIs, databases, authentication, role-based access, dashboards, and DevOps deployment."
};

export default function SoftwareDevelopmentPage() {
  const layers = [
    { title: "Product interfaces", icon: Smartphone, copy: "Responsive web apps, portals, admin tools, and customer-facing experiences." },
    { title: "Backend systems", icon: Server, copy: "APIs, services, business logic, queues, integrations, and secure infrastructure." },
    { title: "Data architecture", icon: Database, copy: "Relational databases, analytics models, reporting data flows, and migration plans." },
    { title: "Secure access", icon: LockKeyhole, copy: "Authentication, authorization, role-based access, auditability, and protected workflows." },
    { title: "Dashboards", icon: LayoutDashboard, copy: "Operational visibility for teams that need fast decisions and clean reporting." }
  ];

  return (
    <>
      <PageHero
        eyebrow="Software Development"
        title="Production-ready platforms for teams that need dependable software"
        description="Denalix Tech builds full-stack systems that combine strong UX, reliable backend architecture, secure data access, and deployment practices ready for growth."
      />
      <ExplainerLinkSection
        title="Wondering what custom software means?"
        description="Start with a simple guide that explains when a custom app helps and what it can look like."
        links={[explainerPages.software, explainerPages.dashboards]}
      />
      <FeatureGrid
        eyebrow="Engineering Scope"
        title="Everything needed to move from idea to deployed platform"
        description="We build the application layer, backend services, data model, security model, integrations, and deployment path together."
        features={softwareFeatures}
      />
      <section className="py-16 sm:py-20">
        <div className="container-pad grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {layers.map((layer) => {
            const Icon = layer.icon;
            return (
              <div key={layer.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <Icon className="h-6 w-6 text-cyan-300" aria-hidden="true" />
                <h2 className="mt-5 text-lg font-semibold text-white">{layer.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{layer.copy}</p>
              </div>
            );
          })}
        </div>
      </section>
      <CTASection title="Build software your team can trust and extend" />
    </>
  );
}
