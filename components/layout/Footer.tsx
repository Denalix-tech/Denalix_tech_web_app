import Link from "next/link";
import { Mountain } from "lucide-react";
import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="container-pad grid gap-10 py-12 md:grid-cols-[1.2fr_2fr]">
        <div className="max-w-md space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-cyan-400 text-slate-950">
              <Mountain className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">Denali Tech</span>
          </Link>
          <p className="text-sm leading-6 text-slate-400">
            AI and software consulting for teams that need intelligent workflows,
            scalable platforms, geospatial systems, and cloud-ready digital products.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold text-white">Company</h2>
            <div className="mt-4 grid gap-3">
              {navItems.slice(0, 4).map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-400 hover:text-cyan-200">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Solutions</h2>
            <div className="mt-4 grid gap-3">
              {navItems.slice(4, 8).map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-400 hover:text-cyan-200">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Start</h2>
            <div className="mt-4 grid gap-3">
              <Link href="/contact" className="text-sm text-slate-400 hover:text-cyan-200">
                Book a Consultation
              </Link>
              <a href="mailto:hello@denalitech.ai" className="text-sm text-slate-400 hover:text-cyan-200">
                hello@denalitech.ai
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-pad text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Denali Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
