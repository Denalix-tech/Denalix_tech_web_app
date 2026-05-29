import {
  BarChart3,
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  LockKeyhole,
  Map,
  Network,
  PlugZap,
  Rocket,
  Settings2,
  Workflow
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "Software", href: "/software-development" },
  { label: "GIS", href: "/gis-geospatial-solutions" },
  { label: "Automation", href: "/automation-workflow-systems" },
  { label: "SaaS", href: "/saas-products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const services = [
  {
    title: "AI Applications & Intelligent Agents",
    description:
      "LLM-powered workflows, copilots, retrieval systems, and autonomous agents that move business processes forward.",
    icon: Bot,
    href: "/ai-solutions"
  },
  {
    title: "Full-Stack Software Development",
    description:
      "Modern web applications, portals, dashboards, and internal platforms designed for scale and usability.",
    icon: Code2,
    href: "/software-development"
  },
  {
    title: "Backend APIs & Cloud Systems",
    description:
      "Secure APIs, data services, cloud infrastructure, authentication, and deployment pipelines.",
    icon: Cloud,
    href: "/software-development"
  },
  {
    title: "GIS & Geospatial Platforms",
    description:
      "Map-based products, spatial analytics, GeoJSON pipelines, and location intelligence systems.",
    icon: Map,
    href: "/gis-geospatial-solutions"
  },
  {
    title: "Workflow Automation",
    description:
      "Automations that connect tools, reduce manual handoffs, and standardize repeatable operations.",
    icon: Workflow,
    href: "/automation-workflow-systems"
  },
  {
    title: "Analytics Dashboards",
    description:
      "Operational dashboards, reporting layers, and business intelligence views for better decisions.",
    icon: BarChart3,
    href: "/services"
  },
  {
    title: "SaaS Product Development",
    description:
      "Product strategy, MVP builds, multi-tenant architecture, subscription flows, and iteration roadmaps.",
    icon: Rocket,
    href: "/saas-products"
  },
  {
    title: "CRM & Third-Party API Integrations",
    description:
      "HubSpot, Zapier, payment, scheduling, CRM, and domain-specific integrations that keep systems aligned.",
    icon: PlugZap,
    href: "/automation-workflow-systems"
  }
];

export const whyDenali = [
  "End-to-end product development",
  "AI-first engineering",
  "Scalable architecture",
  "Cloud-ready systems",
  "Startup-speed execution",
  "Consulting + product mindset"
];

export const aiFeatures = [
  "LLM integrations",
  "RAG systems",
  "AI agents",
  "Voice agents",
  "Workflow orchestration",
  "Document intelligence",
  "Business automation"
];

export const softwareFeatures = [
  "Frontend apps",
  "Backend systems",
  "Databases",
  "APIs",
  "Authentication",
  "Role-based access",
  "Dashboards",
  "DevOps deployment"
];

export const gisFeatures = [
  "Map-based applications",
  "Spatial analytics",
  "GeoJSON data workflows",
  "ArcGIS, Mapbox, and Leaflet-style solutions",
  "Location-based business intelligence"
];

export const processSteps = [
  {
    title: "Discover",
    description:
      "Clarify the business goal, current systems, users, risks, and technical constraints."
  },
  {
    title: "Design",
    description:
      "Shape the product architecture, data flows, UX, AI approach, and delivery roadmap."
  },
  {
    title: "Build",
    description:
      "Develop the application, automation, model workflow, integrations, and backend systems."
  },
  {
    title: "Integrate",
    description:
      "Connect CRMs, databases, APIs, cloud services, analytics tools, and operational systems."
  },
  {
    title: "Deploy",
    description:
      "Launch on production-ready infrastructure with monitoring, security, and performance in mind."
  },
  {
    title: "Support",
    description:
      "Iterate with the business, improve workflows, and keep systems healthy as needs evolve."
  }
];

export const capabilities = [
  { label: "Generative AI", icon: BrainCircuit },
  { label: "Cloud Platforms", icon: Cloud },
  { label: "Data Systems", icon: Database },
  { label: "Geospatial Apps", icon: Globe2 },
  { label: "Secure Access", icon: LockKeyhole },
  { label: "Product Delivery", icon: Layers3 },
  { label: "Automation", icon: Settings2 },
  { label: "Integrations", icon: Network },
  { label: "DevOps", icon: GitBranch }
];

export const productIdeas = [
  "AI-powered intake and triage systems",
  "Industry-specific analytics workspaces",
  "Agentic workflow platforms",
  "Document processing and compliance tools",
  "Location intelligence products",
  "Operations dashboards for growing teams"
];

export const projectTypes = [
  { label: "AI solution or intelligent agent", value: "ai-solution" },
  { label: "Custom software platform", value: "software-platform" },
  { label: "GIS or geospatial application", value: "gis-application" },
  { label: "Automation or workflow system", value: "automation" },
  { label: "SaaS product build", value: "saas-product" },
  { label: "Analytics dashboard", value: "analytics-dashboard" },
  { label: "Not sure yet", value: "not-sure" }
];

export const budgetRanges = [
  { label: "Under $10k", value: "under-10k" },
  { label: "$10k - $25k", value: "10k-25k" },
  { label: "$25k - $75k", value: "25k-75k" },
  { label: "$75k - $150k", value: "75k-150k" },
  { label: "$150k+", value: "150k-plus" },
  { label: "Need guidance", value: "need-guidance" }
];
