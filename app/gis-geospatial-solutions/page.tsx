import type { Metadata } from "next";
import { BarChart3, DatabaseZap, Globe2, Layers, MapPinned } from "lucide-react";
import { gisFeatures } from "@/data/site";
import { CTASection } from "@/components/sections/CTASection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "GIS & Geospatial Solutions",
  description:
    "GIS and geospatial software consulting for map-based applications, spatial analytics, GeoJSON workflows, and location-based business intelligence."
};

export default function GISPage() {
  const solutions = [
    { title: "Interactive maps", icon: MapPinned, copy: "Operational map views, filters, layers, drawing tools, and asset visualization." },
    { title: "Spatial analytics", icon: BarChart3, copy: "Location-aware reporting, territory analysis, proximity logic, and trend discovery." },
    { title: "Data pipelines", icon: DatabaseZap, copy: "GeoJSON processing, spatial databases, import tooling, and data quality workflows." },
    { title: "Mapping stacks", icon: Layers, copy: "ArcGIS, Mapbox, Leaflet-style, and custom mapping interfaces for web platforms." },
    { title: "Location intelligence", icon: Globe2, copy: "Business context layered with spatial data for smarter operational decisions." }
  ];

  return (
    <>
      <PageHero
        eyebrow="GIS & Geospatial"
        title="Geospatial applications that make location data actionable"
        description="Denali Tech builds map-based software, spatial analytics workflows, and location intelligence platforms for organizations that depend on place, territory, routing, assets, and field operations."
      />
      <FeatureGrid
        eyebrow="Geospatial Scope"
        title="Modern GIS capabilities for web products and internal tools"
        description="We combine spatial data engineering, map UX, analytics, and business workflows into tools your team can use every day."
        features={gisFeatures}
      />
      <section className="py-16 sm:py-20">
        <div className="container-pad grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div key={solution.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <Icon className="h-6 w-6 text-cyan-300" aria-hidden="true" />
                <h2 className="mt-5 text-lg font-semibold text-white">{solution.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{solution.copy}</p>
              </div>
            );
          })}
        </div>
      </section>
      <CTASection title="Turn spatial data into operational clarity" />
    </>
  );
}
