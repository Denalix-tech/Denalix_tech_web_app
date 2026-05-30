import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

type ExplainerLinkSectionProps = {
  title?: string;
  description?: string;
  links: {
    title: string;
    summary: string;
    href: string;
  }[];
};

export function ExplainerLinkSection({
  title = "Not technical? Start here.",
  description = "These short guides explain what the service does, when it helps, and what a real project can look like.",
  links
}: ExplainerLinkSectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-pad">
        <SectionHeader align="center" title={title} description={description} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
            >
              <h2 className="text-lg font-semibold text-white">{link.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{link.summary}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                Read the simple guide
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
