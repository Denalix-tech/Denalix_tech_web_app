import { capabilities } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";
import { MarqueeColumn } from "@/components/effects/MarqueeColumn";

const columns = [
  { items: capabilities.filter((_, index) => index % 3 === 0), direction: "up" as const },
  { items: capabilities.filter((_, index) => index % 3 === 1), direction: "down" as const },
  { items: capabilities.filter((_, index) => index % 3 === 2), direction: "up" as const }
];

export function HomeTechShowcase() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-pad">
        <SectionHeader
          align="center"
          eyebrow="Technologies We Use"
          title="A modern, practical technology stack"
          description="The tools and platforms behind every engagement, chosen for reliability, speed, and long-term maintainability. Click any card to see how it comes together on the Services page."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {columns.map((column, index) => (
            <MarqueeColumn key={index} items={column.items} direction={column.direction} href="/services" />
          ))}
        </div>
      </div>
    </section>
  );
}
