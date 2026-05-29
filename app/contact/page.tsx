import type { Metadata } from "next";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Denali Tech to discuss AI systems, automation workflows, custom software, GIS platforms, analytics dashboards, and SaaS product development."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to build, automate, or improve"
        description="Use the form below to start a conversation about your AI, software, automation, geospatial, analytics, or SaaS project."
      />
      <section className="py-16 sm:py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <aside className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Start with a practical consultation</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Share the business problem, the systems involved, and what success
                should look like. Denali Tech will help identify the right project
                shape and next steps.
              </p>
            </div>
            <div className="grid gap-4">
              <a href="mailto:hello@denalitech.ai" className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5 text-slate-200 hover:border-cyan-300/40">
                <Mail className="h-5 w-5 text-cyan-300" aria-hidden="true" />
                hello@denalitech.ai
              </a>
              <div className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5 text-slate-200">
                <Phone className="h-5 w-5 text-cyan-300" aria-hidden="true" />
                Available by appointment
              </div>
              <div className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5 text-slate-200">
                <MessageSquare className="h-5 w-5 text-cyan-300" aria-hidden="true" />
                Discovery calls, project scoping, and technical planning
              </div>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
