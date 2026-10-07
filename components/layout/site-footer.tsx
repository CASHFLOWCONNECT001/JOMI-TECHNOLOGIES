import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
  TikTokIcon,
  WhatsAppIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/ui/social-icons";
import { stagger } from "@/lib/animation";
import { getPublicFooterSettings } from "@/lib/api";

const iconByPlatform: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  whatsapp: WhatsAppIcon,
  tiktok: TikTokIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  x: XIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
  telegram: TelegramIcon,
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/developers", label: "Developers" },
];

const SERVICE_LINKS = [
  { href: "/services", label: "All Services" },
  { href: "/services/computer-basics", label: "Computer Training" },
  { href: "/services/erp-systems", label: "ERP Systems" },
  { href: "/services/crm-systems", label: "CRM Systems" },
  { href: "/services/ecommerce", label: "E-commerce Websites" },
  { href: "/services/pos-inventory", label: "POS & Inventory" },
  { href: "/services/school-lms", label: "School & LMS Platforms" },
  { href: "/services/web-mobile-apps", label: "Web & Mobile Apps" },
];

export async function SiteFooter() {
  const footerSettings = await getPublicFooterSettings();
  const activeSocials = footerSettings.socials.filter(
    (social) => social.isActive && social.url
  );

  return (
    <footer
      className="site-footer relative z-10 mt-auto w-full overflow-x-clip border-t border-[var(--color-brand-blue)]/24 bg-background"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Animated gradient top edge */}
      <span
        aria-hidden
        className="site-footer-glow-line pointer-events-none absolute inset-x-0 top-0 h-px"
      />

      {/* Ambient orbs */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-24 h-64 w-64 rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "var(--color-brand-cyan)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-32 -bottom-24 h-64 w-64 rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "var(--color-brand-green)" }}
      />

      <Container className="relative py-10 md:py-12">
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* ---------------- NAVIGATION ---------------- */}
          <Reveal from="up" delay={0}>
            <div>
              <h3 className="footer-heading text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-aqua)]">
                Navigation
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {NAV_LINKS.map((link, i) => (
                  <li
                    key={link.href}
                    className="footer-item"
                    style={{ animationDelay: `${stagger(i, 40, 200)}ms` }}
                  >
                    <Link href={link.href} className="footer-link">
                      <span className="footer-link-dot" aria-hidden />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* ---------------- SERVICES ---------------- */}
          <Reveal from="up" delay={80}>
            <div>
              <h3 className="footer-heading text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-aqua)]">
                Services
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {SERVICE_LINKS.map((link, i) => (
                  <li
                    key={link.href}
                    className="footer-item"
                    style={{ animationDelay: `${stagger(i, 40, 220)}ms` }}
                  >
                    <Link href={link.href} className="footer-link">
                      <span className="footer-link-dot" aria-hidden />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* ---------------- CONTACT ---------------- */}
          <Reveal from="up" delay={160}>
            <div>
              <h3 className="footer-heading text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-aqua)]">
                Contact
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-[var(--foreground)]/82">
                <li className="footer-contact-row">
                  <span className="footer-contact-label">Email</span>
                  <span>{footerSettings.contactEmail}</span>
                </li>
                <li className="footer-contact-row">
                  <span className="footer-contact-label">Support</span>
                  <span>{footerSettings.supportEmail}</span>
                </li>
                <li className="footer-contact-row">
                  <span className="footer-contact-label">Ops</span>
                  <span>{footerSettings.operationsLabel}</span>
                </li>
                <li className="footer-contact-row">
                  <span className="footer-contact-label">Coverage</span>
                  <span>{footerSettings.coverageLabel}</span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* ---------------- SOCIALS ---------------- */}
          <Reveal from="up" delay={240}>
            <div>
              <h3 className="footer-heading text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-aqua)]">
                Connect
              </h3>
              {activeSocials.length === 0 ? (
                <p className="mt-3 text-xs text-[var(--foreground)]/68">
                  No social links are currently active.
                </p>
              ) : (
                <div className="mt-3 flex flex-col items-start gap-2">
                  {activeSocials.map((social, index) => {
                    const Icon =
                      iconByPlatform[social.platform.toLowerCase()] ??
                      InstagramIcon;
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-row group/social inline-flex shrink-0 items-center gap-2 text-sm"
                        style={{ animationDelay: `${stagger(index, 50, 300)}ms` }}
                      >
                        <span className="social-icon-wrap">
                          <Icon className="relative z-10 h-4 w-4" />
                        </span>
                        <span className="social-label">{social.label}</span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* ---------------- BOTTOM BAR ---------------- */}
        <Reveal from="up" delay={320}>
          <div className="mt-8 flex flex-col gap-3 border-t border-[var(--color-brand-blue)]/24 pt-4 text-xs text-[var(--foreground)]/65 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} JOMI TECHNOLOGIES INSTITUTE. All
              rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="footer-link-sm">
                About
              </Link>
              <Link href="/services" className="footer-link-sm">
                Services
              </Link>
              <Link href="/portfolio" className="footer-link-sm">
                Portfolio
              </Link>
              <Link href="/contact" className="footer-link-sm">
                Start a Project
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>

      <style>{`
        /* Animated gradient top border */
        .site-footer-glow-line {
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--color-brand-blue) 25%,
            var(--color-brand-cyan) 50%,
            var(--color-brand-green) 75%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: footer-line-drift 8s linear infinite;
        }
        @keyframes footer-line-drift {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        /* Underline slide-in on heading hover */
        .footer-heading {
          position: relative;
          display: inline-block;
        }
        .footer-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 1px;
          width: 28px;
          background: linear-gradient(
            90deg,
            var(--color-brand-cyan),
            transparent
          );
          transition: width 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .footer-heading:hover::after {
          width: 100%;
        }

        /* Nav links — arrow slide + dot pulse */
        .footer-item {
          opacity: 0;
          animation: footer-item-in 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes footer-item-in {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: color-mix(in oklab, var(--foreground) 82%, transparent);
          transition: color 260ms ease, transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
        }
        .footer-link-dot {
          width: 4px;
          height: 4px;
          border-radius: 9999px;
          background: color-mix(in oklab, var(--color-brand-cyan) 60%, transparent);
          transition: width 260ms ease, background 260ms ease, box-shadow 260ms ease;
          flex-shrink: 0;
        }
        .footer-link:hover {
          color: var(--color-brand-cyan);
          transform: translateX(4px);
        }
        .footer-link:hover .footer-link-dot {
          width: 14px;
          background: var(--color-brand-cyan);
          box-shadow: 0 0 8px color-mix(in oklab, var(--color-brand-cyan) 70%, transparent);
        }

        /* Contact rows — subtle left accent */
        .footer-contact-row {
          display: flex;
          gap: 0.5rem;
          align-items: baseline;
          padding-left: 0.5rem;
          border-left: 2px solid transparent;
          transition: border-color 300ms ease, padding-left 300ms ease;
        }
        .footer-contact-row:hover {
          border-left-color: var(--color-brand-cyan);
          padding-left: 0.75rem;
        }
        .footer-contact-label {
          display: inline-block;
          min-width: 62px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: color-mix(in oklab, var(--color-brand-cyan) 70%, transparent);
        }

        /* Social icons — glow halo + lift + colour shift */
        .social-row {
          color: color-mix(in oklab, var(--foreground) 82%, transparent);
          transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .social-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 1.85rem;
          height: 1.85rem;
          border-radius: 0.55rem;
          background: color-mix(in oklab, var(--color-brand-cyan) 10%, transparent);
          border: 1px solid color-mix(in oklab, var(--color-brand-cyan) 25%, transparent);
          color: var(--color-brand-cyan);
          position: relative;
          transition:
            background 300ms ease,
            border-color 300ms ease,
            transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 400ms ease;
        }
        .social-icon-wrap::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: radial-gradient(
            circle,
            color-mix(in oklab, var(--color-brand-cyan) 55%, transparent),
            transparent 70%
          );
          opacity: 0;
          transition: opacity 400ms ease;
          z-index: -1;
          filter: blur(6px);
        }
        .social-row:hover {
          transform: translateX(4px);
        }
        .social-row:hover .social-icon-wrap {
          background: var(--color-brand-cyan);
          border-color: var(--color-brand-cyan);
          color: #001026;
          transform: scale(1.12) rotate(-4deg);
          box-shadow: 0 8px 20px -6px color-mix(in oklab, var(--color-brand-cyan) 75%, transparent);
        }
        .social-row:hover .social-icon-wrap::before {
          opacity: 1;
        }
        .social-row:hover .social-label {
          color: var(--color-brand-cyan);
        }
        .social-label {
          transition: color 260ms ease;
        }

        /* Bottom bar links */
        .footer-link-sm {
          color: color-mix(in oklab, var(--foreground) 65%, transparent);
          position: relative;
          transition: color 260ms ease;
        }
        .footer-link-sm::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background: var(--color-brand-cyan);
          transition: width 300ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .footer-link-sm:hover {
          color: var(--color-brand-cyan);
        }
        .footer-link-sm:hover::after {
          width: 100%;
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .site-footer-glow-line,
          .footer-item {
            animation: none !important;
          }
          .footer-item {
            opacity: 1 !important;
            transform: none !important;
          }
          .footer-heading::after,
          .footer-link,
          .footer-link-dot,
          .social-icon-wrap,
          .social-row,
          .footer-contact-row,
          .footer-link-sm,
          .footer-link-sm::after {
            transition: none !important;
          }
        }
      `}</style>
    </footer>
  );
}