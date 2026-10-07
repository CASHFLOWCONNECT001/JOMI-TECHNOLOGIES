import { cookies } from "next/headers";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";
const LINKEDIN_URL = "https://www.linkedin.com/in/joshua-ngala-6440633a8/";

async function getLocaleHeader() {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
  return { "X-Locale": locale };
}

export type PortfolioItem = {
  id: string;
  title: string;
  slug: string;
  clientName: string;
  summary: string;
  projectUrl: string;
  thumbnailUrl: string;
  thumbnailFileUrl?: string;
  /** Resolved by the backend serializer: whichever of thumbnailUrl or thumbnailFileUrl is available first. */
  thumbnailImageUrl?: string;
  tags: string[];
  displayOrder: number;
  isFeatured: boolean;
  status: "published" | "draft";
  createdAt: string;
  updatedAt: string;
};

export type DeveloperResourceItem = {
  id: string;
  title: string;
  slug: string;
  type: "guide" | "code-sample" | "integration" | "documentation" | "tooling";
  summary: string;
  content: string;
  codeExamples: {
    typescript?: string;
    javascript?: string;
    python?: string;
  };
  resourceUrl: string;
  repositoryUrl: string;
  tags: string[];
  displayOrder: number;
  status: "published" | "draft";
  createdAt: string;
  updatedAt: string;
};

export type FooterSocialLink = {
  platform: string;
  label: string;
  url: string;
  isActive: boolean;
};

export type FooterSettings = {
  contactEmail: string;
  supportEmail: string;
  operationsLabel: string;
  coverageLabel: string;
  socials: FooterSocialLink[];
  updatedAt?: string;
};

export type CompanyStats = {
  projectsDelivered: string;
  projectsDescription: string;
  serviceAreasCount: string;
  serviceAreasDescription: string;
  approachLabel: string;
  approachDescription: string;
  updatedAt?: string;
};

type ApiEnvelope<T> = {
  success: boolean;
  message: string;
  data: T;
};

/**
 * Fetch published portfolio items for the public portfolio page.
 * Returns an empty array on any failure so the page degrades gracefully.
 */
export async function getPublishedPortfolio(): Promise<PortfolioItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/portfolio/`, {
      cache: "no-store",
      headers: await getLocaleHeader(),
    });

    if (!res.ok) return [];

    const payload = (await res.json()) as ApiEnvelope<{ items: PortfolioItem[] }>;
    return payload?.data?.items ?? [];
  } catch {
    return [];
  }
}

export async function getPublishedDeveloperResources(): Promise<DeveloperResourceItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/developers/`, {
      cache: "no-store",
      headers: await getLocaleHeader(),
    });

    if (!res.ok) return [];

    const payload = (await res.json()) as ApiEnvelope<{ resources: DeveloperResourceItem[] }>;
    return payload?.data?.resources ?? [];
  } catch {
    return [];
  }
}

const fallbackFooterSettings: FooterSettings = {
  contactEmail: "info@techswifttrix.com",
  supportEmail: "support@techswifttrix.com",
  operationsLabel: "Remote-first operations",
  coverageLabel: "Africa • Global Delivery",
  socials: [
    { platform: "whatsapp", label: "WhatsApp", url: "", isActive: false },
    { platform: "tiktok", label: "TikTok", url: "", isActive: false },
    { platform: "instagram", label: "Instagram", url: "", isActive: false },
    { platform: "facebook", label: "Facebook", url: "", isActive: false },
    { platform: "x", label: "X", url: "", isActive: false },
    { platform: "linkedin", label: "LinkedIn", url: LINKEDIN_URL, isActive: true },
    { platform: "youtube", label: "YouTube", url: "", isActive: false },
    { platform: "telegram", label: "Telegram", url: "", isActive: false },
  ],
};

function ensureLinkedInSocials(socials: FooterSocialLink[]): FooterSocialLink[] {
  const normalized = socials.map((social) => ({ ...social }));
  const existingIndex = normalized.findIndex(
    (social) => social.platform.toLowerCase() === "linkedin",
  );

  if (existingIndex >= 0) {
    const existing = normalized[existingIndex];
    normalized[existingIndex] = {
      ...existing,
      label: existing.label || "LinkedIn",
      url: existing.url?.trim() || LINKEDIN_URL,
      isActive: true,
    };
    return normalized;
  }

  normalized.push({
    platform: "linkedin",
    label: "LinkedIn",
    url: LINKEDIN_URL,
    isActive: true,
  });
  return normalized;
}

function normalizeFooterSettings(footer: Partial<FooterSettings> | undefined): FooterSettings {
  const safeSocials = Array.isArray(footer?.socials)
    ? footer.socials
    : fallbackFooterSettings.socials;

  return {
    contactEmail: footer?.contactEmail ?? fallbackFooterSettings.contactEmail,
    supportEmail: footer?.supportEmail ?? fallbackFooterSettings.supportEmail,
    operationsLabel: footer?.operationsLabel ?? fallbackFooterSettings.operationsLabel,
    coverageLabel: footer?.coverageLabel ?? fallbackFooterSettings.coverageLabel,
    socials: ensureLinkedInSocials(safeSocials),
    updatedAt: footer?.updatedAt,
  };
}

export async function getPublicFooterSettings(): Promise<FooterSettings> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/site/footer/`, {
      cache: "no-store",
      headers: await getLocaleHeader(),
    });

    if (!res.ok) return normalizeFooterSettings(fallbackFooterSettings);

    const payload = (await res.json()) as ApiEnvelope<{ footer: Partial<FooterSettings> }>;
    return normalizeFooterSettings(payload?.data?.footer);
  } catch {
    return normalizeFooterSettings(fallbackFooterSettings);
  }
}
const fallbackCompanyStats: CompanyStats = {
  projectsDelivered: "30+",
  projectsDescription: "Projects delivered with production-ready quality.",
  serviceAreasCount: "6",
  serviceAreasDescription: "Core service areas across product and growth.",
  approachLabel: "End-to-End",
  approachDescription: "From architecture to optimization support.",
};

export async function getPublicCompanyStats(): Promise<CompanyStats> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/site/stats/`, {
      cache: "no-store",
      headers: await getLocaleHeader(),
    });

    if (!res.ok) return fallbackCompanyStats;

    const payload = (await res.json()) as ApiEnvelope<{ stats: CompanyStats }>;
    return payload?.data?.stats ?? fallbackCompanyStats;
  } catch {
    return fallbackCompanyStats;
  }
}
