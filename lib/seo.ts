import type { Metadata } from "next";

const SITE_NAME = "TechSwiftTrix";
const SITE_URL = "https://techswifttrix.com";
const DEFAULT_IMAGE = "/assets/branding/logo.jpeg";

const DEFAULT_KEYWORDS = [
  "TechSwiftTrix",
  "software development",
  "web development",
  "mobile app development",
  "digital solutions",
];

type PageSeoConfig = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageSeoConfig): Metadata {
  const canonicalPath = path === "/" ? "/" : path.replace(/\/+$/, "");
  const absoluteUrl = canonicalPath === "/" ? SITE_URL : `${SITE_URL}${canonicalPath}`;
  const mergedKeywords = [...new Set([...keywords, ...DEFAULT_KEYWORDS])];
  const openGraphTitle =
    canonicalPath === "/" ? `${SITE_NAME} | Web, Mobile, Solutions` : `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: canonicalPath,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: openGraphTitle,
      description,
      url: absoluteUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: DEFAULT_IMAGE,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_NAME}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle,
      description,
      images: [DEFAULT_IMAGE],
    },
  };
}
