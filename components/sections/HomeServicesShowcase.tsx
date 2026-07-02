import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { FloatInCard } from "@/components/effects/FloatInCard";

const featuredTitles = [
  "AI Applications & Intelligent Agents",
  "Full-Stack Software Development",
  "GIS & Geospatial Platforms",
  "Workflow Automation",
  "SaaS Product Development",
  "Analytics Dashboards"
];

const featuredServices = featuredTitles
  .map((title) => services.find((service) => service.title === title))
  .filter((service): service is (typeof services)[number] => Boolean(service));

export function HomeServicesShowcase() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-pad">
        <SectionHeader
          align="center"
          eyebrow="What We Build"
          title="Services that turn ideas into working systems"
          description="A preview of the ways Denalix Tech helps businesses modernize, automate, and scale. Explore the full list on the Services page."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <FloatInCard key={service.title} index={index} total={featuredServices.length}>
              <ServiceCard {...service} />
            </FloatInCard>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
          >
            See all services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
