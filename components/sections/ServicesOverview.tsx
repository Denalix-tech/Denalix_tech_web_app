import { services } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";

export function ServicesOverview() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="container-pad">
        <SectionHeader
          align="center"
          eyebrow="Services"
          title="Consulting and engineering for intelligent digital systems"
          description="From early strategy to production deployment, Denalix Tech helps teams design, build, integrate, and improve the software that runs their business."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
