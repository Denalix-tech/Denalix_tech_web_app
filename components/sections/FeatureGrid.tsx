import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

type FeatureGridProps = {
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
};

export function FeatureGrid({ eyebrow, title, description, features }: FeatureGridProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-100">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
