import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Ready to plan your AI or software project?",
  description = "Bring Denalix Tech into the conversation early. We will help clarify the opportunity, choose the right technical path, and define a practical delivery roadmap."
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-pad">
        <div className="glass-panel rounded-lg p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <Link href="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
