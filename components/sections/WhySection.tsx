import { Check } from "lucide-react";
import { whyDenalix } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";

export function WhySection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-pad grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeader
          eyebrow="Why Denalix Tech"
          title="From operational leaks to scalable systems"
          description="If the business is stuck, we find the bottleneck. If the idea is new, we shape the roadmap. If the team is growing, we build the digital foundation that keeps work moving."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {whyDenalix.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-cyan-300/15 text-cyan-200">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-slate-100">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
