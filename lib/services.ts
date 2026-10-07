import type { ReactNode } from "react";

export type SoftwareService = {
  slug: string;
  title: string;
  short: string;
  description: string;
  longDescription: string;
  summaryFeatures: string[];
  features: string[];
  deliverables: string[];
  idealFor: string[];
  hue: number;
  icon:
    | "database"
    | "users"
    | "cart"
    | "store"
    | "school"
    | "phone"
    | "code"
    | "cloud"
    | "shield"
    | "sparkles"
    | "palette"
    | "cpu";
};

export const SOFTWARE_SERVICES: SoftwareService[] = [
  {
    slug: "erp-systems",
    title: "ERP Systems",
    short: "Enterprise Resource Planning",
    description:
      "Enterprise Resource Planning platforms that unify finance, inventory, HR, procurement, and operations.",
    longDescription:
      "We build and deploy Enterprise Resource Planning systems that bring your entire operation onto a single platform — finance, inventory, HR, procurement, sales, and reporting. Instead of juggling spreadsheets and disconnected tools, your team works from one source of truth. Our ERP builds are modular: start with the parts you need today, and add more as you grow.",
    summaryFeatures: [
      "Finance & Accounting",
      "Inventory Control",
      "HR & Payroll",
      "Procurement",
      "Sales & Invoicing",
      "Executive Reporting",
    ],
    features: [
      "Finance, accounting, and general ledger",
      "Inventory and multi-warehouse tracking",
      "HR, payroll, and staff records",
      "Procurement and supplier management",
      "Sales orders and invoicing",
      "Reporting dashboards and audits",
    ],
    deliverables: [
      "Discovery and requirements document",
      "Configured ERP platform",
      "Data migration from existing tools",
      "Staff training and handover",
      "30-day post-launch support",
    ],
    idealFor: [
      "Mid-size businesses with 10+ staff",
      "Manufacturers and distributors",
      "Retail chains with multiple branches",
      "Organizations replacing spreadsheets",
    ],
    hue: 220,
    icon: "database",
  },
  {
    slug: "crm-systems",
    title: "CRM Systems",
    short: "Customer Relationship Management",
    description:
      "Customer Relationship Management for leads, sales pipelines, support, and long-term retention.",
    longDescription:
      "A CRM system built around how your team actually sells and supports customers. We design pipelines, lead scoring, follow-up workflows, and support ticketing that match your process — not the other way around. Every interaction, call, email, and note lives in one place, so your team never loses a lead to a forgotten follow-up again.",
    summaryFeatures: [
      "Lead Capture",
      "Sales Pipelines",
      "Contact History",
      "Follow-up Reminders",
      "Support Ticketing",
      "Sales Forecasting",
    ],
    features: [
      "Lead capture and pipeline management",
      "Contact and account history",
      "Email and call logging",
      "Task and follow-up reminders",
      "Support ticketing and SLAs",
      "Sales dashboards and forecasting",
    ],
    deliverables: [
      "Pipeline design workshop",
      "Configured CRM",
      "Import of existing contacts",
      "Team onboarding and training",
      "Ongoing support options",
    ],
    idealFor: [
      "Sales teams of 3+ people",
      "Service businesses with repeat clients",
      "B2B sales operations",
      "Companies losing leads to poor follow-up",
    ],
    hue: 200,
    icon: "users",
  },
  {
    slug: "ecommerce",
    title: "E-commerce Websites",
    short: "Online stores and marketplaces",
    description:
      "Online stores and marketplaces with product catalogs, cart, checkout, and payment gateway integration.",
    longDescription:
      "We build e-commerce websites that turn browsers into buyers — with clean catalogs, fast cart and checkout, mobile-first design, and payment integration that just works. Whether you're selling 10 products or 10,000, launching a marketplace or a single-brand store, we build the storefront, the admin panel, and the integrations that make selling online simple.",
    summaryFeatures: [
      "Product Catalogs",
      "Cart & Checkout",
      "Mobile Money Payments",
      "Delivery Options",
      "Customer Accounts",
      "Admin & Analytics",
    ],
    features: [
      "Product catalog and categories",
      "Cart, checkout, and order management",
      "M-Pesa, card, and mobile money payments",
      "Delivery and shipping options",
      "Customer accounts and order history",
      "Admin panel and analytics",
    ],
    deliverables: [
      "Storefront design and build",
      "Admin panel for managing products",
      "Payment gateway integration",
      "Order fulfillment workflow",
      "Launch support",
    ],
    idealFor: [
      "Retail businesses going online",
      "Startups launching products",
      "Marketplaces with multiple sellers",
      "Local brands wanting direct sales",
    ],
    hue: 150,
    icon: "cart",
  },
  {
    slug: "pos-inventory",
    title: "POS & Inventory",
    short: "Point of Sale & Inventory Management",
    description:
      "Point of Sale and inventory management for retail, hospitality, and multi-branch operations.",
    longDescription:
      "A POS and inventory system designed to run your counter and back-of-house without friction — fast checkouts, accurate stock counts, real-time sync between branches, and reporting that tells you what's selling and what isn't. Works on the devices you already have: tablets, desktop, or dedicated terminals.",
    summaryFeatures: [
      "Fast Checkout",
      "Barcode Scanning",
      "Multi-Branch Stock",
      "Stock Transfers",
      "Staff & Shift Tracking",
      "Sales Reports",
    ],
    features: [
      "Fast checkout and receipt printing",
      "Barcode scanning and label printing",
      "Real-time inventory across branches",
      "Stock transfers and stocktake",
      "Staff accounts and shift tracking",
      "Sales and profit reports",
    ],
    deliverables: [
      "Terminal setup and configuration",
      "Product and stock data import",
      "Staff training on checkout and admin",
      "Printer and scanner setup",
      "Ongoing support",
    ],
    idealFor: [
      "Retail shops and supermarkets",
      "Restaurants and cafes",
      "Pharmacies and minimarts",
      "Multi-branch retail chains",
    ],
    hue: 130,
    icon: "store",
  },
  {
    slug: "school-lms",
    title: "School & LMS Platforms",
    short: "Education Management Systems",
    description:
      "School Management, Student Information Systems, and Learning Management Systems for modern institutions.",
    longDescription:
      "We build school management systems and learning platforms that handle everything a modern institution needs — students, staff, fees, exams, attendance, timetables, parent communication, and course delivery. Built for private schools, colleges, training centers, and universities that want to run on software, not paper.",
    summaryFeatures: [
      "Student Records",
      "Fees & Payments",
      "Exam Management",
      "Attendance",
      "Parent Portal",
      "Online Courses",
    ],
    features: [
      "Student enrollment and records",
      "Fees, invoicing, and payments",
      "Exam management and results",
      "Attendance and timetabling",
      "Parent and staff portals",
      "Course delivery and assessments (LMS)",
    ],
    deliverables: [
      "Customized school system",
      "Data import (students, staff, fees)",
      "Staff and admin training",
      "Parent portal setup",
      "Academic calendar integration",
    ],
    idealFor: [
      "Private primary and secondary schools",
      "Colleges and training centers",
      "Universities and institutions",
      "E-learning and course providers",
    ],
    hue: 90,
    icon: "school",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "Android, iOS & Cross-Platform",
    description:
      "Native Android and iOS apps plus cross-platform builds — designed, engineered, and shipped to app stores.",
    longDescription:
      "We design, build, and ship mobile apps for Android, iOS, or both. Whether you need a native app with full device access or a cross-platform build in Flutter or React Native for faster time-to-market, we handle the design, development, testing, and app store submission — start to finish.",
    summaryFeatures: [
      "Native Android",
      "Native iOS",
      "Cross-Platform",
      "Push Notifications",
      "In-App Payments",
      "App Store Launch",
    ],
    features: [
      "Native Android (Kotlin/Java)",
      "Native iOS (Swift)",
      "Cross-platform (Flutter, React Native)",
      "Push notifications and analytics",
      "In-app payments and mobile money",
      "App store submission and updates",
    ],
    deliverables: [
      "UI/UX design mockups",
      "Working app (Android and/or iOS)",
      "Backend API and database",
      "App store submission",
      "Post-launch maintenance plan",
    ],
    idealFor: [
      "Startups launching their first app",
      "Businesses moving services to mobile",
      "Organizations with field or delivery teams",
      "Brands wanting to own the app store presence",
    ],
    hue: 285,
    icon: "phone",
  },
  {
    slug: "website-design",
    title: "Website Design & Development",
    short: "Business Websites & Web Portals",
    description:
      "Business websites, corporate sites, portfolios, landing pages, and web portals built for speed, clarity, and conversion.",
    longDescription:
      "Modern websites built to do real work — attract the right visitors, communicate clearly, and convert. We design and build business websites, corporate sites, portfolios, and web portals using modern frameworks, with an emphasis on speed, accessibility, and clean structure that Google loves.",
    summaryFeatures: [
      "Custom Design",
      "Mobile-First Layout",
      "SEO Structure",
      "Blog & CMS",
      "Lead Capture",
      "Hosting & Analytics",
    ],
    features: [
      "Custom design or premium template",
      "Responsive mobile-first layout",
      "SEO-optimized structure",
      "Blog and content management",
      "Contact forms and lead capture",
      "Hosting setup and analytics",
    ],
    deliverables: [
      "Design mockups for approval",
      "Fully built website",
      "CMS for content updates",
      "Domain and hosting setup",
      "Basic SEO configuration",
    ],
    idealFor: [
      "Businesses without a website",
      "Companies with outdated sites",
      "Professionals needing a portfolio",
      "Organizations wanting better lead flow",
    ],
    hue: 260,
    icon: "code",
  },
  {
    slug: "hosting-cloud",
    title: "Hosting & Cloud Infrastructure",
    short: "Domains, Hosting & Cloud",
    description:
      "Domains, hosting, SSL, email, cloud storage, backups, servers, and API integration for reliable delivery.",
    longDescription:
      "The infrastructure layer that keeps your systems online and your data safe — domains, hosting, SSL certificates, business email, cloud storage, automated backups, and API integrations. We set it up, keep it running, and provide support when something needs attention.",
    summaryFeatures: [
      "Domains & DNS",
      "Managed Hosting",
      "SSL & HTTPS",
      "Business Email",
      "Automated Backups",
      "API Integrations",
    ],
    features: [
      "Domain registration and management",
      "Shared, VPS, or dedicated hosting",
      "SSL certificates and HTTPS",
      "Business email setup",
      "Cloud storage and automated backups",
      "API development and integration",
    ],
    deliverables: [
      "Domain and DNS setup",
      "Hosting configuration",
      "SSL and email setup",
      "Backup schedule and monitoring",
      "Ongoing maintenance plan",
    ],
    idealFor: [
      "Businesses launching a website",
      "Organizations with email or hosting issues",
      "Companies needing reliable backups",
      "Startups wanting managed infrastructure",
    ],
    hue: 230,
    icon: "cloud",
  },
  {
    slug: "it-support-security",
    title: "IT Support & Cybersecurity",
    short: "Networks, Security & Support",
    description:
      "Networks, CCTV, access control, biometrics, cybersecurity, IT support, data recovery, and system audits.",
    longDescription:
      "Full IT support and security services — from setting up your office network and installing CCTV to protecting your systems from cyber threats and recovering lost data. We do site visits, audits, installations, and ongoing support so your business stays online and secure.",
    summaryFeatures: [
      "Office Networks",
      "CCTV & Surveillance",
      "Access Control",
      "Security Audits",
      "Data Recovery",
      "IT Support",
    ],
    features: [
      "Office and enterprise networks",
      "CCTV installation and monitoring",
      "Access control and biometric systems",
      "Cybersecurity assessments",
      "Data recovery and backups",
      "IT support and system audits",
    ],
    deliverables: [
      "Site survey and proposal",
      "Equipment supply and installation",
      "Configuration and testing",
      "Staff training",
      "Ongoing support contract",
    ],
    idealFor: [
      "Offices setting up infrastructure",
      "Businesses with security concerns",
      "Organizations needing compliance",
      "Companies without in-house IT",
    ],
    hue: 0,
    icon: "shield",
  },
  {
    slug: "data-ai-automation",
    title: "Data, AI & Automation",
    short: "Data, AI & Workflow Automation",
    description:
      "Data entry, analysis, reporting, AI and machine learning solutions, chatbots, and workflow automation.",
    longDescription:
      "We help businesses make use of their data — from clean data entry and dashboarding, to AI-powered tools like chatbots and automated workflows that eliminate repetitive work. Whether you're digitizing paper records or building an AI assistant for customer support, we deliver solutions that save real time and money.",
    summaryFeatures: [
      "Data Digitization",
      "Analytics Dashboards",
      "AI Solutions",
      "Chatbots",
      "Workflow Automation",
      "Custom Reporting",
    ],
    features: [
      "Data entry and digitization",
      "Data analysis and reporting dashboards",
      "AI / machine learning solutions",
      "Chatbots and virtual assistants",
      "Workflow and process automation",
      "Custom reports and analytics",
    ],
    deliverables: [
      "Data assessment and cleanup plan",
      "Dashboards or automation system",
      "Integration with existing tools",
      "Team training on new workflows",
      "Documentation and handover",
    ],
    idealFor: [
      "Businesses with lots of manual work",
      "Organizations with paper records",
      "Teams needing better reporting",
      "Companies exploring AI tools",
    ],
    hue: 330,
    icon: "sparkles",
  },
  {
    slug: "design-marketing",
    title: "Design, Branding & Marketing",
    short: "UI/UX, Branding & Digital Marketing",
    description:
      "UI/UX design, graphic design, brand identity, digital marketing, SEO, and social media management.",
    longDescription:
      "Design and marketing services that build and grow your brand — from logo and visual identity, to UI/UX for digital products, to SEO and social media management that drives real traffic and customers. We handle both the look and the reach.",
    summaryFeatures: [
      "UI/UX Design",
      "Brand Identity",
      "Marketing Graphics",
      "SEO Optimization",
      "Social Media",
      "Campaign Design",
    ],
    features: [
      "UI/UX design for web and mobile",
      "Logo and brand identity",
      "Graphic design and marketing materials",
      "SEO optimization",
      "Social media management",
      "Content and campaign design",
    ],
    deliverables: [
      "Brand or design system",
      "Delivered assets (logos, graphics)",
      "SEO or social media plan",
      "Monthly content or campaign setup",
      "Performance reporting",
    ],
    idealFor: [
      "New brands launching",
      "Businesses rebranding",
      "Companies wanting more online traffic",
      "Startups needing UI/UX for products",
    ],
    hue: 25,
    icon: "palette",
  },
];

export function getSoftwareService(slug: string): SoftwareService | undefined {
  return SOFTWARE_SERVICES.find((s) => s.slug === slug);
}