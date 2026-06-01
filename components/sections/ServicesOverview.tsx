import { services } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";

export function ServicesOverview() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="container-pad">
        <SectionHeader
          align="center"
          eyebrow="Where We Fit"
          title="From business problem to working solution"
          description="On the homepage, we keep it simple: tell us what is slowing the business down, what customers need, or what you want to launch. The Services page explains the specific ways we can help."
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
