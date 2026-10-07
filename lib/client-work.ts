export type ClientProject = {
  id: string;
  name: string;
  industry: string;
  description: string;
  tags: string[];
  isPublic: boolean;
  url?: string;
  hue: number;
};

export const CLIENT_PROJECTS: ClientProject[] = [
  {
    id: "retail-pos",
    name: "Retail Chain POS & Inventory",
    industry: "Retail",
    description:
      "Custom point-of-sale and inventory management system for a multi-branch retail operation — covering stock, sales, staff, and daily reconciliation.",
    tags: ["POS", "Inventory", "Multi-branch"],
    isPublic: false,
    hue: 0,
  },
  {
    id: "county-ecommerce",
    name: "County E-commerce Platform",
    industry: "E-commerce",
    description:
      "A localized online marketplace connecting sellers and buyers within a single county, with mobile payments, delivery tracking, and vendor dashboards.",
    tags: ["E-commerce", "Marketplace", "Mobile Money"],
    isPublic: true,
    url: "https://example.com",
    hue: 45,
  },
  {
    id: "school-management",
    name: "School Management System",
    industry: "Education",
    description:
      "Full school administration platform — students, staff, fees, exams, timetabling, and parent communication — deployed for a private institution.",
    tags: ["School", "Fees", "Exams"],
    isPublic: false,
    hue: 90,
  },
  {
    id: "lms-platform",
    name: "Learning Management System",
    industry: "Education",
    description:
      "An LMS built for course delivery, learner tracking, assessments, and certification — used for structured training programmes and blended learning.",
    tags: ["LMS", "E-learning", "Certification"],
    isPublic: true,
    url: "https://example.com",
    hue: 130,
  },
  {
    id: "hospitality-booking",
    name: "Hospitality Booking System",
    industry: "Hospitality",
    description:
      "Reservations, rooms, rates, and guest management for a hospitality operator — with online booking, front-desk workflows, and occupancy reporting.",
    tags: ["Booking", "Hospitality", "Payments"],
    isPublic: false,
    hue: 170,
  },
  {
    id: "sacco-platform",
    name: "SACCO Management Platform",
    industry: "Finance",
    description:
      "Member accounts, savings, loans, repayments, and statements for a SACCO — built with the accuracy and auditability that financial operations demand.",
    tags: ["SACCO", "Loans", "Finance"],
    isPublic: false,
    hue: 200,
  },
  {
    id: "legal-firm-site",
    name: "Corporate Website — Legal Firm",
    industry: "Professional Services",
    description:
      "A corporate website for a legal practice — services, team profiles, insights, and contact workflows — designed for credibility and lead generation.",
    tags: ["Corporate Site", "Legal", "Lead Gen"],
    isPublic: true,
    url: "https://example.com",
    hue: 230,
  },
  {
    id: "hrm-payroll",
    name: "HRM & Payroll Platform",
    industry: "Enterprise",
    description:
      "Human resource management and payroll system — employee records, attendance, leave, statutory deductions, and payslip generation.",
    tags: ["HRM", "Payroll", "Compliance"],
    isPublic: false,
    hue: 270,
  },
  {
    id: "pharmacy-pos",
    name: "Pharmacy Inventory & POS",
    industry: "Health",
    description:
      "Inventory, prescriptions, expiry tracking, and point-of-sale for a pharmacy — with alerts for low stock and near-expiry items.",
    tags: ["Pharmacy", "POS", "Inventory"],
    isPublic: false,
    hue: 300,
  },
  {
    id: "logistics-crm",
    name: "Business CRM — Logistics Company",
    industry: "Logistics",
    description:
      "A CRM tailored to a logistics operator — leads, clients, shipments, follow-ups, and pipeline visibility for the sales and operations teams.",
    tags: ["CRM", "Logistics", "Pipeline"],
    isPublic: false,
    hue: 330,
  },
];