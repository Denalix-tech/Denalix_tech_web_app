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
  { label: "Simple Guides", href: "/learn" },
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

export const whyDenalix = [
  "End-to-end product development",
  "AI-first engineering",
  "Scalable architecture",
  "Cloud-ready systems",
  "Startup-speed execution",
  "Consulting + product mindset"
];

export const explainerPages = {
  ai: {
    title: "AI Tools",
    href: "/learn/ai-tools",
    summary:
      "AI tools help your team read, summarize, answer, organize, and prepare work faster.",
    intro:
      "AI tools are like trained digital assistants for your business. They do not replace your team. They help your team handle repetitive information work, find answers faster, and prepare drafts or recommendations for a person to review.",
    goodFor: [
      "Answering common customer or staff questions",
      "Summarizing long documents, emails, or forms",
      "Helping employees find the right information quickly",
      "Drafting replies, notes, reports, or next steps",
      "Routing requests to the right person"
    ],
    examples: [
      "A clinic uploads intake forms and gets a clear summary before the appointment.",
      "A support team asks a company knowledge assistant for the right policy answer.",
      "A manager receives a short summary of customer emails and suggested follow-up actions."
    ],
    outcomes: [
      "Less time spent searching through documents",
      "Faster customer responses",
      "More consistent staff decisions",
      "Better use of existing company knowledge"
    ],
    serviceHref: "/ai-solutions"
  },
  software: {
    title: "Custom Software",
    href: "/learn/custom-software",
    summary:
      "Custom software is an app built around the way your business actually works.",
    intro:
      "Custom software is useful when spreadsheets, email chains, paper forms, or generic tools are making work harder than it needs to be. We build a secure online system that matches your process, users, and goals.",
    goodFor: [
      "Client portals",
      "Internal staff tools",
      "Admin dashboards",
      "Booking, intake, or request systems",
      "Role-based systems where different users see different things"
    ],
    examples: [
      "A customer logs in, uploads files, and checks the status of a request.",
      "Staff manage tasks, approvals, documents, and customer records in one place.",
      "Managers see current work, bottlenecks, and completed jobs without chasing updates."
    ],
    outcomes: [
      "Fewer scattered spreadsheets",
      "A smoother customer experience",
      "Clearer internal operations",
      "A system that can grow as the business grows"
    ],
    serviceHref: "/software-development"
  },
  maps: {
    title: "Map and Location Systems",
    href: "/learn/map-location-systems",
    summary:
      "Map systems help you understand customers, jobs, assets, routes, and service areas by location.",
    intro:
      "A map-based system turns addresses and location data into something your team can see and use. It helps answer questions like where demand is highest, where staff should go next, or which areas need more coverage.",
    goodFor: [
      "Service area planning",
      "Field operations",
      "Territory management",
      "Asset tracking",
      "Location-based reporting"
    ],
    examples: [
      "A service company sees every active job on a map and assigns nearby staff.",
      "A business compares demand by neighborhood before choosing where to expand.",
      "A team views boundaries, customers, assets, and priority zones in one tool."
    ],
    outcomes: [
      "Better planning by area",
      "Clearer field operations",
      "Smarter expansion decisions",
      "Less guesswork around location data"
    ],
    serviceHref: "/gis-geospatial-solutions"
  },
  automation: {
    title: "Workflow Automation",
    href: "/learn/workflow-automation",
    summary:
      "Automation connects your tools so routine steps happen without manual copy-and-paste.",
    intro:
      "Workflow automation is about making repeated business steps happen reliably. When a form is submitted, an email arrives, a payment is made, or a status changes, the right next step can happen automatically.",
    goodFor: [
      "Lead intake and follow-up",
      "CRM updates",
      "Approval processes",
      "Customer notifications",
      "Task assignment and reminders"
    ],
    examples: [
      "A website form creates a CRM record and notifies the right team member.",
      "A request moves from intake to review to approval without getting lost in email.",
      "Customers get automatic updates when their request changes status."
    ],
    outcomes: [
      "Less manual data entry",
      "Fewer missed follow-ups",
      "More consistent processes",
      "Better visibility into work status"
    ],
    serviceHref: "/automation-workflow-systems"
  },
  saas: {
    title: "SaaS Products",
    href: "/learn/saas-products",
    summary:
      "A SaaS product is online software customers can log into, use, and pay for.",
    intro:
      "SaaS stands for software as a service. In simple terms, it is a web-based product people use through an account, often with subscriptions, dashboards, saved data, and customer-specific workspaces.",
    goodFor: [
      "Turning a repeatable service into a product",
      "Launching an MVP",
      "Building customer workspaces",
      "Adding subscriptions or plans",
      "Creating industry-specific tools"
    ],
    examples: [
      "A business turns a manual consulting workflow into a self-service online platform.",
      "Customers log in, complete tasks, view reports, and manage their own data.",
      "An MVP launches with the core workflow first, then grows after customer feedback."
    ],
    outcomes: [
      "A product customers can access online",
      "A clearer path from idea to launch",
      "Reusable software instead of one-off manual work",
      "Room to add features, pricing, and analytics over time"
    ],
    serviceHref: "/saas-products"
  },
  dashboards: {
    title: "Dashboards and Reports",
    href: "/learn/dashboards-reports",
    summary:
      "Dashboards turn scattered business data into clear numbers, charts, and status views.",
    intro:
      "Dashboards help owners and teams see what is happening without digging through spreadsheets, emails, or separate systems. They bring important numbers and work status into one clear view.",
    goodFor: [
      "Sales reporting",
      "Operations tracking",
      "Appointment or workload visibility",
      "Customer activity reports",
      "Leadership scorecards"
    ],
    examples: [
      "A manager sees open requests, revenue, response times, and workload in one place.",
      "A local business tracks appointments, leads, and follow-ups by week.",
      "A team spots bottlenecks before they become customer problems."
    ],
    outcomes: [
      "Faster decisions",
      "Less time preparing reports",
      "Clearer team accountability",
      "Better understanding of business performance"
    ],
    serviceHref: "/services"
  }
};

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
