import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/providers/theme-provider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jomitechnologiesinstitute.com"),
  title: {
    default:
      "JOMI TECHNOLOGIES INSTITUTE | ICT Training, Software & Systems",
    template: "%s | JOMI TECHNOLOGIES INSTITUTE",
  },
  description:
    "JOMI TECHNOLOGIES INSTITUTE is a computer and digital skills training institution and software systems provider. We deliver practical ICT training — computer basics, Microsoft Office, typing, internet and email, digital literacy and essential ICT skills — alongside ERP, CRM, e-commerce websites, POS, school management systems, LMS platforms, and custom web and mobile applications for businesses and organizations.",
  keywords: [
    "JOMI TECHNOLOGIES INSTITUTE",
    "ICT training institute",
    "computer training",
    "computer basics",
    "computer packages",
    "Microsoft Office training",
    "typing and data entry",
    "internet and email training",
    "digital literacy",
    "essential ICT skills",
    "software and systems",
    "ERP systems",
    "CRM systems",
    "e-commerce websites",
    "online stores",
    "POS and inventory",
    "school management system",
    "learning management system",
    "custom web and mobile apps",
    "hosting and IT support",
    "digital transformation",
    "software development",
    "web development",
    "mobile app development",
    "digital solutions",
  ],
  authors: [{ name: "JOMI TECHNOLOGIES INSTITUTE" }],
  creator: "JOMI TECHNOLOGIES INSTITUTE",
  publisher: "JOMI TECHNOLOGIES INSTITUTE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/logo.jpeg", type: "image/jpeg" },
    ],
    shortcut: "/favicon.ico",
    apple: "/assets/logo.jpeg",
  },
  openGraph: {
    title:
      "JOMI TECHNOLOGIES INSTITUTE | ICT Training, Software & Systems",
    description:
      "Practical ICT training and modern software systems — computer packages, Microsoft Office, digital literacy, ERP, CRM, e-commerce, POS, school systems, LMS platforms, and custom web and mobile apps for learners, businesses, and organizations.",
    url: "https://jomitechnologiesinstitute.com",
    siteName: "JOMI TECHNOLOGIES INSTITUTE",
    images: [
      {
        url: "/assets/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "JOMI TECHNOLOGIES INSTITUTE official brand logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "JOMI TECHNOLOGIES INSTITUTE | ICT Training, Software & Systems",
    description:
      "Practical ICT training and modern software systems — computer packages, Microsoft Office, ERP, CRM, e-commerce, POS, school systems, LMS platforms, and custom web and mobile apps.",
    images: ["/assets/logo.jpeg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5FAFF" },
    { media: "(prefers-color-scheme: dark)", color: "#06153A" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col text-foreground transition-colors duration-300"
        style={{ background: "none" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}