"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "254788060447";

type ServiceGroup = {
  id: string;
  label: string;
  short: string;
  description: string;
  icon: React.ReactNode;
  hue: number;
  options: string[];
};

const Icon = {
  Training: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6" />
      <path d="M2 10l10-5 10 5-10 5L2 10z" />
      <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
    </svg>
  ),
  Business: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      <path d="M3 12h18" />
      <path d="M12 12v3" />
    </svg>
  ),
  Web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18l-2 13H5L3 6z" />
      <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" />
      <path d="M12 10v6" />
      <path d="M9 13h6" />
    </svg>
  ),
  Education: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10l9-5 9 5-9 5-9-5z" />
      <path d="M7 12v5c0 1 2.24 2 5 2s5-1 5-2v-5" />
      <path d="M21 10v6" />
    </svg>
  ),
  Industry: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 008 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H2a2 2 0 110-4h.09A1.65 1.65 0 004.6 8a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V2a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H22a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
  Mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  ),
  Communication: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
  Cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
    </svg>
  ),
  Security: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  Data: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6" rx="9" ry="3" />
      <path d="M3 6v6c0 1.66 4.03 3 9 3s9-1.34 9-3V6" />
      <path d="M3 12v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
    </svg>
  ),
  Design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="10.5" r="2.5" />
      <circle cx="8.5" cy="7.5" r="2.5" />
      <circle cx="6.5" cy="12.5" r="2.5" />
      <path d="M12 22a10 10 0 110-20 10 10 0 018.5 15" />
    </svg>
  ),
  Other: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
};

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "training",
    label: "Training — Computer & Digital Skills",
    short: "Training",
    description: "Computer basics, Microsoft Office, typing, digital literacy and ICT skills.",
    icon: Icon.Training,
    hue: 210,
    options: [
      "Computer Basics",
      "Computer Packages",
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Microsoft Access",
      "Microsoft Publisher",
      "Typing & Data Entry",
      "Internet & Email",
      "Digital Literacy",
      "Advanced ICT Skills",
      "Other Training",
    ],
  },
  {
    id: "business",
    label: "Business & Enterprise Systems",
    short: "Business Systems",
    description: "ERP, CRM, HRM, payroll, accounting, inventory, POS and operations.",
    icon: Icon.Business,
    hue: 190,
    options: [
      "ERP — Enterprise Resource Planning",
      "CRM — Customer Relationship Management",
      "HRM / HRIS",
      "Payroll Management System",
      "Accounting & Finance System",
      "Inventory Management System",
      "POS — Point of Sale",
      "Supply Chain Management",
      "Procurement Management System",
      "Asset Management System",
      "Project Management System",
      "Business Intelligence & Dashboards",
      "Document Management System",
      "Workflow Automation",
      "Fleet Management System",
    ],
  },
  {
    id: "web",
    label: "Web & E-commerce",
    short: "Web & E-commerce",
    description: "Websites, online stores, portals, booking, payments and CMS.",
    icon: Icon.Web,
    hue: 150,
    options: [
      "E-commerce Website",
      "Online Store / Marketplace",
      "Business Website",
      "Corporate Website",
      "Portfolio Website",
      "Landing Page",
      "Web Portal (Customer / Staff / Admin)",
      "Booking & Reservation System",
      "Payment Gateway Integration",
      "Content Management System (CMS)",
      "Blog / Content Platform",
    ],
  },
  {
    id: "education",
    label: "Education & Training Systems",
    short: "Education Systems",
    description: "School management, LMS, SIS, exams, e-learning and fees.",
    icon: Icon.Education,
    hue: 85,
    options: [
      "School Management System",
      "Learning Management System (LMS)",
      "Student Information System",
      "Examination & Results Management",
      "E-learning Platform",
      "Course Registration Portal",
      "Library Management System",
      "Attendance Management System",
      "Fees & Billing Management",
    ],
  },
  {
    id: "industry",
    label: "Industry-Specific Systems",
    short: "Industry Systems",
    description: "Hospitality, health, property, transport, SACCO and more.",
    icon: Icon.Industry,
    hue: 45,
    options: [
      "Hospital / Clinic Management",
      "Hotel & Hospitality Management",
      "Restaurant Management",
      "Pharmacy Management",
      "Real Estate / Property Management",
      "Transport & Ticketing System",
      "Salon & Spa Management",
      "Gym & Fitness Management",
      "Agriculture Management",
      "Church / NGO Management",
      "SACCO / Microfinance Management",
      "Insurance Management",
    ],
  },
  {
    id: "mobile",
    label: "Mobile & Cross-Platform",
    short: "Mobile Apps",
    description: "Android, iOS, Flutter, React Native, USSD and mobile money.",
    icon: Icon.Mobile,
    hue: 270,
    options: [
      "Android App",
      "iOS App",
      "Cross-Platform App (Flutter / React Native)",
      "USSD Application",
      "Mobile Money Integration",
    ],
  },
  {
    id: "communication",
    label: "Communication & Collaboration",
    short: "Communication",
    description: "Bulk SMS, WhatsApp Business, helpdesk, chat and conferencing.",
    icon: Icon.Communication,
    hue: 300,
    options: [
      "Bulk SMS Platform",
      "WhatsApp Business Integration",
      "Helpdesk / Ticketing System",
      "Live Chat System",
      "Video Conferencing Solution",
      "Email & Messaging System",
      "Internal Communication Portal",
    ],
  },
  {
    id: "cloud",
    label: "Cloud, Hosting & Infrastructure",
    short: "Cloud & Hosting",
    description: "Hosting, domains, SSL, servers, backups and API integration.",
    icon: Icon.Cloud,
    hue: 220,
    options: [
      "Web Hosting",
      "Domain Registration",
      "SSL Certificates",
      "Cloud Storage & Backup",
      "Email Hosting",
      "Server Setup & Management",
      "VPS / Dedicated Server",
      "API Development & Integration",
      "Database Design & Management",
    ],
  },
  {
    id: "security",
    label: "Security & IT Services",
    short: "Security & IT",
    description: "Cybersecurity, networks, CCTV, access control and IT support.",
    icon: Icon.Security,
    hue: 0,
    options: [
      "Cybersecurity Solutions",
      "Network Setup & Management",
      "CCTV & Surveillance Systems",
      "Access Control Systems",
      "Biometric Systems",
      "IT Support & Maintenance",
      "Data Recovery",
      "System Audits",
    ],
  },
  {
    id: "data",
    label: "Data, AI & Automation",
    short: "Data & AI",
    description: "Data entry, analysis, AI, chatbots and automation.",
    icon: Icon.Data,
    hue: 330,
    options: [
      "Data Entry & Digitization",
      "Data Analysis & Reporting",
      "AI / Machine Learning Solutions",
      "Chatbots & Virtual Assistants",
      "Automation Tools",
    ],
  },
  {
    id: "design",
    label: "Design, Branding & Marketing",
    short: "Design & Marketing",
    description: "UI/UX, graphics, branding, SEO and social media.",
    icon: Icon.Design,
    hue: 25,
    options: [
      "UI/UX Design",
      "Graphic Design",
      "Logo & Brand Identity",
      "Digital Marketing",
      "SEO — Search Engine Optimization",
      "Social Media Management",
    ],
  },
  {
    id: "other",
    label: "Other",
    short: "Other",
    description: "Custom projects, consultations or something not listed.",
    icon: Icon.Other,
    hue: 240,
    options: [
      "Custom Project",
      "Consultation Only",
      "Other (please describe in message)",
    ],
  },
];

const BUDGET_OPTIONS = [
  "Under KES 50,000",
  "KES 50,000 – 100,000",
  "KES 100,000 – 250,000",
  "KES 250,000 – 500,000",
  "KES 500,000 – 1,000,000",
  "Above KES 1,000,000",
  "Not sure yet",
  "Training only (no project budget)",
];

type Selection = {
  groupId: string;
  groupShort: string;
  hue: number;
  option: string;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  budget: "",
  message: "",
};

function buildWhatsAppMessage(data: FormState, selections: Selection[]): string {
  const lines: string[] = [];

  lines.push("*NEW INQUIRY — JOMI TECHNOLOGIES INSTITUTE*");
  lines.push("━━━━━━━━━━━━━━━━━━━━━━━━");
  lines.push("");

  lines.push("*CONTACT DETAILS*");
  lines.push(`• Name: ${data.name}`);
  lines.push(`• Email: ${data.email}`);
  lines.push(`• Phone: ${data.phone}`);
  lines.push("");

  lines.push("*SERVICES INTERESTED IN*");
  if (selections.length === 0) {
    lines.push("• —");
  } else {
    const grouped = new Map<string, string[]>();
    for (const s of selections) {
      if (!grouped.has(s.groupShort)) grouped.set(s.groupShort, []);
      grouped.get(s.groupShort)!.push(s.option);
    }
    let idx = 1;
    for (const [groupShort, opts] of grouped) {
      lines.push(`${idx}. ${groupShort}`);
      for (const opt of opts) {
        lines.push(`   - ${opt}`);
      }
      idx++;
    }
  }
  lines.push("");

  lines.push("*PROJECT BUDGET*");
  lines.push(`• ${data.budget || "Not specified"}`);
  lines.push("");

  lines.push("*MESSAGE*");
  lines.push(data.message);
  lines.push("");
  lines.push("━━━━━━━━━━━━━━━━━━━━━━━━");

  return lines.join("\n");
}

export function ContactForm({ whatsappNumber }: { whatsappNumber?: string }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState | "service", string>>
  >({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);
  const [selections, setSelections] = useState<Selection[]>([]);

  const number = whatsappNumber || WHATSAPP_NUMBER;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function toggleGroup(group: ServiceGroup) {
    setOpenGroupId((prev) => (prev === group.id ? null : group.id));
    setErrors((prev) => ({ ...prev, service: undefined }));
  }

  function isSelected(groupId: string, option: string) {
    return selections.some(
      (s) => s.groupId === groupId && s.option === option
    );
  }

  function toggleOption(group: ServiceGroup, option: string) {
    setSelections((prev) => {
      const exists = prev.some(
        (s) => s.groupId === group.id && s.option === option
      );
      if (exists) {
        return prev.filter(
          (s) => !(s.groupId === group.id && s.option === option)
        );
      }
      return [
        ...prev,
        {
          groupId: group.id,
          groupShort: group.short,
          hue: group.hue,
          option,
        },
      ];
    });
    setErrors((prev) => ({ ...prev, service: undefined }));
  }

  function removeSelection(target: Selection) {
    setSelections((prev) =>
      prev.filter(
        (s) => !(s.groupId === target.groupId && s.option === target.option)
      )
    );
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState | "service", string>> = {};

    if (!form.name.trim()) next.name = "Please enter your name.";
    else if (form.name.trim().length < 2)
      next.name = "Name must be at least 2 characters.";

    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Please enter a valid email address.";

    if (!form.phone.trim()) next.phone = "Please enter your phone number.";
    else if (!/^[+\d][\d\s\-()]{6,}$/.test(form.phone.trim()))
      next.phone = "Please enter a valid phone number.";

    if (selections.length === 0)
      next.service = "Please select at least one service.";

    if (!form.message.trim()) next.message = "Please enter a message.";
    else if (form.message.trim().length < 10)
      next.message = "Message must be at least 10 characters.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) {
      const firstError = document.querySelector("[data-error='true']");
      if (firstError) {
        (firstError as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
      return;
    }
    setSending(true);

    const text = buildWhatsAppMessage(form, selections);
    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }

    setSending(false);
    setSent(true);
    setForm(initialState);
    setSelections([]);
    setOpenGroupId(null);
    setTimeout(() => setSent(false), 6000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {sent && (
        <div className="rounded-[var(--radius-cta)] border border-[var(--color-brand-cyan)]/40 bg-[var(--color-brand-cyan)]/10 p-3 text-sm">
          Opening WhatsApp… If nothing happens, allow pop-ups or message us
          directly at <strong>+254788060447</strong>.
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Name"
          required
          error={errors.name}
          htmlFor="cf-name"
          hasError={!!errors.name}
        >
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="input-premium"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
          />
        </Field>

        <Field
          label="Email"
          required
          error={errors.email}
          htmlFor="cf-email"
          hasError={!!errors.email}
        >
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="input-premium"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
          />
        </Field>
      </div>

      <Field
        label="Phone"
        required
        error={errors.phone}
        htmlFor="cf-phone"
        hasError={!!errors.phone}
      >
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          className="input-premium"
          placeholder="e.g. 0712 345 678"
          aria-invalid={!!errors.phone}
        />
      </Field>

      <div className="space-y-3" data-error={!!errors.service}>
        <div className="flex items-baseline justify-between gap-3">
          <label className="block text-sm font-medium">
            Services Interested In{" "}
            <span className="text-[var(--color-brand-cyan)]">*</span>
            <span className="ml-2 text-xs font-normal text-foreground/55">
              Select one or more
            </span>
          </label>
          {selections.length > 0 && (
            <button
              type="button"
              onClick={() => setSelections([])}
              className="text-xs text-foreground/60 underline-offset-2 hover:text-foreground hover:underline"
            >
              Clear all
            </button>
          )}
        </div>

        {selections.length > 0 && (
          <div className="rounded-[var(--radius-card)] border border-foreground/15 bg-foreground/[0.03] p-3">
            <p className="mb-2 text-xs font-medium text-foreground/65">
              Selected ({selections.length})
            </p>
            <div className="flex flex-wrap gap-1.5">
              {selections.map((s) => (
                <button
                  key={`${s.groupId}-${s.option}`}
                  type="button"
                  onClick={() => removeSelection(s)}
                  className="group/chip inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-all"
                  style={{
                    borderColor: `hsl(${s.hue} 65% 55% / 0.45)`,
                    background: `hsl(${s.hue} 65% 55% / 0.10)`,
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: `hsl(${s.hue} 75% 55%)` }}
                  />
                  <span className="max-w-[220px] truncate">
                    {s.groupShort} — {s.option}
                  </span>
                  <span className="text-foreground/50 group-hover/chip:text-foreground">
                    ×
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_GROUPS.map((group, i) => {
            const isOpen = openGroupId === group.id;
            const groupSelectedCount = selections.filter(
              (s) => s.groupId === group.id
            ).length;
            return (
              <div
                key={group.id}
                className={isOpen ? "sm:col-span-2 lg:col-span-3" : "contents"}
              >
                {isOpen ? (
                  <div
                    className="rounded-[var(--radius-card)] border p-4"
                    style={{
                      borderColor: `hsl(${group.hue} 60% 55% / 0.45)`,
                      background: `linear-gradient(180deg, hsl(${group.hue} 60% 55% / 0.06), transparent)`,
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-9 w-9 items-center justify-center rounded-lg"
                          style={{
                            background: `linear-gradient(135deg, hsl(${group.hue} 72% 52%), hsl(${
                              (group.hue + 30) % 360
                            } 72% 58%))`,
                            color: "#001026",
                          }}
                        >
                          <span className="h-4 w-4">{group.icon}</span>
                        </span>
                        <div>
                          <p className="text-sm font-semibold leading-tight">
                            {group.short}
                          </p>
                          <p className="text-xs text-foreground/65">
                            {group.label}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleGroup(group)}
                        className="text-xs text-foreground/60 underline-offset-2 hover:text-foreground hover:underline"
                      >
                        Close
                      </button>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.options.map((opt) => {
                        const selected = isSelected(group.id, opt);
                        return (
                          <button
                            key={opt}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => toggleOption(group, opt)}
                            className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
                            style={
                              selected
                                ? {
                                    borderColor: `hsl(${group.hue} 72% 52%)`,
                                    background: `hsl(${group.hue} 72% 52%)`,
                                    color: "#001026",
                                    boxShadow: `0 4px 14px -4px hsl(${group.hue} 72% 52% / 0.55)`,
                                  }
                                : {
                                    borderColor: `hsl(${group.hue} 40% 50% / 0.30)`,
                                    background: "transparent",
                                  }
                            }
                          >
                            {selected && (
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-3 w-3"
                              >
                                <path d="M5 12l5 5L20 7" />
                              </svg>
                            )}
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <ServiceCard
                    group={group}
                    index={i}
                    selectedCount={groupSelectedCount}
                    onToggle={() => toggleGroup(group)}
                  />
                )}
              </div>
            );
          })}
        </div>

        {errors.service && (
          <p className="text-xs text-red-500">{errors.service}</p>
        )}
      </div>

      <Field label="Project Budget" htmlFor="cf-budget">
        <select
          id="cf-budget"
          name="budget"
          value={form.budget}
          onChange={(e) => update("budget", e.target.value)}
          className="input-premium"
        >
          <option value="">Select a budget range (optional)</option>
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Message"
        required
        error={errors.message}
        htmlFor="cf-message"
        hasError={!!errors.message}
      >
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="input-premium resize-y"
          placeholder="Tell us about your training needs, project, or question…"
          aria-invalid={!!errors.message}
        />
      </Field>

      <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={sending}
          className="btn-brand inline-flex items-center justify-center rounded-[var(--radius-cta)] px-6 py-2.5 text-sm font-semibold disabled:opacity-60"
        >
          {sending
            ? "Sending…"
            : `Send via WhatsApp${
                selections.length > 0 ? ` (${selections.length})` : ""
              }`}
        </button>
        <p className="text-xs text-foreground/60">
          Opens in WhatsApp — nothing is stored on our servers.
        </p>
      </div>

      <style jsx global>{`
        .input-premium {
          width: 100%;
          border-radius: var(--radius-cta);
          border: 1px solid color-mix(in oklab, currentColor 20%, transparent);
          background: color-mix(in oklab, currentColor 3%, transparent);
          padding: 0.55rem 0.75rem;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 180ms ease, box-shadow 180ms ease,
            background 180ms ease;
        }
        .input-premium:focus {
          border-color: var(--color-brand-cyan);
          background: color-mix(in oklab, var(--color-brand-cyan) 6%, transparent);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-brand-cyan) 22%, transparent);
        }
        .input-premium[aria-invalid="true"] {
          border-color: #ef4444;
          background: color-mix(in oklab, #ef4444 5%, transparent);
        }
        .input-premium[aria-invalid="true"]:focus {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px color-mix(in oklab, #ef4444 20%, transparent);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  hasError,
  children,
}: {
  label: string;
  htmlFor?: string;
  required?: boolean;
  error?: string;
  hasError?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5" data-error={hasError ? "true" : undefined}>
      <label htmlFor={htmlFor} className="block text-sm font-medium">
        {label}
        {required && (
          <span className="ml-1 text-[var(--color-brand-cyan)]">*</span>
        )}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-xs text-red-500">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3 w-3 shrink-0"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

function ServiceCard({
  group,
  index,
  selectedCount,
  onToggle,
}: {
  group: ServiceGroup;
  index: number;
  selectedCount: number;
  onToggle: () => void;
}) {
  const hue = group.hue;
  const hue2 = (hue + 30) % 360;

  return (
    <button
      type="button"
      onClick={onToggle}
      style={
        {
          "--hue": hue,
          "--hue2": hue2,
          animationDelay: `${index * 30}ms`,
        } as React.CSSProperties
      }
      className="service-card group/svc relative flex flex-col items-start gap-3 overflow-hidden rounded-[var(--radius-card)] border p-4 text-left opacity-0 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[var(--radius-card)] opacity-0 transition-opacity duration-300 group-hover/svc:opacity-100 group-focus-visible/svc:opacity-100"
        style={{
          padding: "1px",
          background: `conic-gradient(from var(--angle, 0deg), transparent 0deg, hsl(${hue} 75% 55% / 0.75) 120deg, transparent 240deg)`,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          animation: "svc-rotate 6s linear infinite",
        }}
      />

      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-[0.07] blur-2xl transition-opacity duration-300 group-hover/svc:opacity-[0.18]"
        style={{ background: `hsl(${hue} 80% 55%)` }}
      />

      <span
        className="relative flex h-10 w-10 items-center justify-center rounded-xl text-[color:#001026] transition-transform duration-300 group-hover/svc:scale-105"
        style={{
          background: `linear-gradient(135deg, hsl(${hue} 75% 58%), hsl(${hue2} 75% 62%))`,
          boxShadow: `0 8px 22px -10px hsl(${hue} 75% 55% / 0.7)`,
        }}
      >
        <span className="h-5 w-5">{group.icon}</span>
      </span>

      <div className="relative min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className="truncate text-sm font-semibold leading-tight">
            {group.short}
          </p>
          {selectedCount > 0 && (
            <span
              className="flex h-5 min-w-[1.25rem] items-center justify-center rounded-full px-1.5 text-[10px] font-bold"
              style={{
                background: `hsl(${hue} 75% 55%)`,
                color: "#001026",
              }}
            >
              {selectedCount}
            </span>
          )}
        </div>
        <p className="mt-0.5 line-clamp-2 text-xs text-foreground/60">
          {group.description}
        </p>
        <p className="mt-1.5 text-[11px] font-medium text-foreground/45">
          {group.options.length} options
        </p>
      </div>

      <style jsx>{`
        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        .service-card {
          border-color: color-mix(in oklab, currentColor 12%, transparent);
          background: color-mix(in oklab, currentColor 2%, transparent);
          animation: svc-enter 420ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes svc-enter {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes svc-rotate {
          to {
            --angle: 360deg;
          }
        }
      `}</style>
    </button>
  );
}