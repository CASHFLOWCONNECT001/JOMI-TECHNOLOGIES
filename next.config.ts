import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.24.49.195"],
  devIndicators: false,
  images: {
    qualities: [25, 50, 75, 85, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/mainabout", destination: "/about", permanent: true },
      { source: "/landing-choice", destination: "/services", permanent: true },
      { source: "/cyber", destination: "/services/other-digital-services", permanent: true },
      { source: "/cyber/about", destination: "/services/other-digital-services", permanent: true },
      { source: "/smartfix", destination: "/services/other-digital-services", permanent: true },
      { source: "/smartfix/:path*", destination: "/services/other-digital-services", permanent: true },
      { source: "/services/creative-design", destination: "/services/ui-ux-design", permanent: true },
      { source: "/services/creative-design/:path*", destination: "/services/ui-ux-design", permanent: true },
      { source: "/services/content-services", destination: "/services/professional-writing", permanent: true },
      { source: "/services/content-services/:path*", destination: "/services/professional-writing", permanent: true },
      { source: "/services/website-solutions", destination: "/services/website-design", permanent: true },
      { source: "/services/website-solutions/development", destination: "/services/website-design", permanent: true },
      { source: "/services/website-solutions/full-stack", destination: "/services/website-design", permanent: true },
      { source: "/services/website-solutions/seo", destination: "/services/seo-optimization", permanent: true },
      { source: "/services/website-solutions/testing", destination: "/services/other-digital-services", permanent: true },
      { source: "/services/website-solutions/testing-qa", destination: "/services/other-digital-services", permanent: true },
      { source: "/services/website-solutions/maintenance", destination: "/services/other-digital-services", permanent: true },
      { source: "/services/mobile-app-solutions", destination: "/services/mobile-app-development", permanent: true },
      { source: "/services/mobile-app-solutions/:path*", destination: "/services/mobile-app-development", permanent: true },
    ];
  },
};

export default nextConfig;