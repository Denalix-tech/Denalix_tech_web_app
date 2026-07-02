import Link from "next/link";
import { ArrowRight } from "lucide-react";

type GuideLinksProps = {
  intro: string;
  links: { title: string; href: string }[];
};

export function GuideLinks({ intro, links }: GuideLinksProps) {
  return (
    <div className="border-b border-white/10 py-8">
      <div className="container-pad flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
        <span className="text-slate-400">{intro}</span>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex items-center gap-2 font-semibold text-cyan-200 transition hover:text-cyan-100"
          >
            {link.title}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  );
}
