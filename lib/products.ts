export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  features: string[];
  liveUrl?: string;
  detailUrl?: string;
  hue: number;
  initials: string;
};

export const FLAGSHIP_PRODUCTS: Product[] = [
  {
    id: "cashflowhubs",
    name: "CashFlowHubs",
    tagline: "Online earning opportunities for Africa",
    description:
      "An online platform that connects African users with legitimate, flexible ways to earn online. Localized payout methods — M-Pesa, MTN MoMo, and Flutterwave — make withdrawals fast and accessible.",
    category: "Fintech · Opportunity Platform",
    features: [
      "Verified online earning opportunities",
      "Localized payouts: M-Pesa, MTN MoMo, Flutterwave",
      "Fast, low-friction withdrawals",
      "Built for African users and mobile-first access",
    ],
    liveUrl: "https://www.cashflowhubs.com",
    hue: 150,
    initials: "CF",
  },
  {
    id: "netoppstrix",
    name: "NetOppsTrix",
    tagline: "Networking & billing system",
    description:
      "A networking and billing platform for ISPs, hotspot operators, and service providers. Manages subscriber accounts, bandwidth, invoicing, and payments in one system built to run lean operations at scale.",
    category: "Networking · Billing · ISP",
    features: [
      "Subscriber and account management",
      "Automated billing and invoicing",
      "Bandwidth and service tracking",
      "Payment reconciliation and reporting",
    ],
    liveUrl: "https://netoppstrix.com",
    hue: 210,
    initials: "NT",
  },
  {
    id: "jomimall",
    name: "JOMI Mall",
    tagline: "Online marketplace, live in 3 counties",
    description:
      "An online marketplace operating across Machakos, Makueni, and Kitui counties. Connects local sellers and buyers with a clean storefront, product catalog, and delivery workflow designed for Kenyan commerce.",
    category: "E-commerce · Marketplace",
    features: [
      "Multi-vendor storefront and catalog",
      "Order, cart, and checkout flow",
      "Local delivery coordination",
      "Live across Machakos, Makueni, and Kitui",
    ],
    liveUrl: "https://jomimall.com",
    hue: 45,
    initials: "JM",
  },
  {
    id: "sepiswift",
    name: "SepiSwift",
    tagline: "Business ERP with CRM and POS",
    description:
      "A full business management platform combining ERP, CRM, and POS in one system. Handles inventory, sales, customers, invoicing, and reporting for small and mid-sized businesses that need the essentials without the complexity.",
    category: "ERP · CRM · POS",
    features: [
      "ERP core: inventory, sales, invoicing",
      "Built-in CRM for customers and pipelines",
      "POS for retail and service counters",
      "Unified reporting across all modules",
    ],
    liveUrl: "https://sepiswift.com",
    hue: 270,
    initials: "SS",
  },
];