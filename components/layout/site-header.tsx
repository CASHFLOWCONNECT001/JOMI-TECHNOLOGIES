"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/branding/brand-logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Container } from "@/components/ui/container";

const topNavItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/training", label: "Training" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/developers", label: "Developers" },
  { href: "/contact", label: "Contact" },
];

const TICKER_MESSAGES = [
  "JOMI TECHNOLOGIES INSTITUTE — ICT training and software systems under one roof.",
  "We train in computer basics, Microsoft Office, programming, databases, and networking — with real self-employment paths.",
  "We build ERP, CRM, e-commerce, POS, school, LMS, and custom web and mobile systems for businesses across Africa.",
  "One institute. Two arms. Training that builds people, software that builds businesses.",
  "Our flagships — CashFlowHubs, NetOppsTrix, JOMI Mall, and SepiSwift — run in production today.",
  "Practical skills. Enterprise systems. Local support. Global standards.",
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileMenuOpen(false);
    }
    if (mobileMenuOpen) {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [mobileMenuOpen]);

  function isActiveLink(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  function navLinkClass(href: string) {
    const active = isActiveLink(href);
    return `header-link relative rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
      active
        ? "text-[var(--color-brand-cyan)] header-link-active"
        : "text-[var(--color-brand-navy)]/80 hover:text-[var(--color-brand-cyan)] dark:text-[var(--color-brand-offwhite)]/82 dark:hover:text-[var(--color-brand-cyan)]"
    }`;
  }

  return (
    <header
      className={`site-header sticky top-0 z-[80] w-full border-b transition-all duration-500 ${
        scrolled
          ? "border-[var(--color-brand-blue)]/40 shadow-[0_8px_32px_-16px_color-mix(in_oklab,var(--color-brand-cyan)_35%,transparent)]"
          : "border-transparent"
      }`}
      style={{
        backgroundColor: scrolled
          ? "color-mix(in oklab, var(--background) 78%, transparent)"
          : "color-mix(in oklab, var(--background) 92%, transparent)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      {/* Animated gradient bottom edge — appears on scroll */}
      <span
        aria-hidden
        className={`header-glow-line pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <Container className="py-2">
        <div className="flex items-center justify-between gap-3">
          {/* Left: hamburger + logo */}
          <div className="flex min-w-0 items-center gap-2.5 md:gap-3">
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-primary-nav"
              className="hamburger-button relative z-[95] inline-flex h-9 w-9 cursor-pointer touch-manipulation items-center justify-center rounded-md border border-[var(--color-brand-blue)]/35 bg-[var(--color-brand-blue)]/12 text-[var(--foreground)] transition hover:bg-[var(--color-brand-blue)]/20 active:scale-95 lg:hidden"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              <span
                className={`hamburger-bar absolute h-0.5 w-4 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`hamburger-bar absolute h-0.5 w-4 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`hamburger-bar absolute h-0.5 w-4 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>

            <BrandLogo
              priority
              className="h-10 w-10 md:h-11 md:w-11"
              label={
                <span className="hidden sm:flex flex-col leading-tight">
                  <span className="text-sm font-semibold tracking-[0.06em] text-foreground">
                    JOMI TECHNOLOGIES INSTITUTE
                  </span>
                  <span className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-[var(--foreground)]/72">
                    ICT Training · Software · Systems
                  </span>
                </span>
              }
            />
          </div>

          {/* Center: desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1 ml-6"
            aria-label="Primary"
          >
            {topNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActiveLink(item.href) ? "page" : undefined}
                className={navLinkClass(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: theme toggle */}
          <div className="ml-auto flex shrink-0 items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </Container>

      {/* ================================================================ */}
      {/* RUNNING TICKER — blue strip, scrolling institute + USP messages  */}
      {/* ================================================================ */}
      <div
        className="announcement-ticker"
        role="region"
        aria-label="About JOMI TECHNOLOGIES INSTITUTE"
      >
        <span aria-hidden className="ticker-led" />

        <div className="ticker-viewport">
          <div className="ticker-track">
            {TICKER_MESSAGES.map((msg, i) => (
              <span key={`a-${i}`} className="ticker-item">
                {msg}
                <span aria-hidden className="ticker-sep">•</span>
              </span>
            ))}
            {TICKER_MESSAGES.map((msg, i) => (
              <span key={`b-${i}`} className="ticker-item" aria-hidden>
                {msg}
                <span aria-hidden className="ticker-sep">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu — rendered OUTSIDE the flex row so it can't affect layout */}
      <div
        className={`mobile-menu-wrap absolute inset-x-0 top-full lg:hidden ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <nav
          id="mobile-primary-nav"
          aria-label="Mobile Primary"
          className={`mobile-menu mx-3 mt-2 overflow-hidden rounded-xl border border-[var(--color-brand-blue)]/35 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)] transition-all duration-300 ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }`}
          style={{
            backgroundColor:
              "color-mix(in oklab, var(--background) 92%, transparent)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          <ul className="flex flex-col p-2">
            {topNavItems.map((item, i) => (
              <li
                key={item.href}
                className="mobile-menu-item"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <Link
                  href={item.href}
                  aria-current={isActiveLink(item.href) ? "page" : undefined}
                  className={`mobile-menu-link block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActiveLink(item.href)
                      ? "bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)]"
                      : "text-foreground/82 hover:bg-[var(--color-brand-cyan)]/8 hover:text-[var(--color-brand-cyan)]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={mobileMenuOpen ? 0 : -1}
        className={`fixed inset-0 z-[70] bg-black/40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <style>{`
        /* ============================================================ */
        /* HEADER EDGE + LINK + HAMBURGER                                */
        /* ============================================================ */
        .header-glow-line {
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--color-brand-blue) 25%,
            var(--color-brand-cyan) 50%,
            var(--color-brand-green) 75%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: header-line-drift 10s linear infinite;
        }
        @keyframes header-line-drift {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        .header-link::after {
          content: "";
          position: absolute;
          left: 0.625rem;
          right: 0.625rem;
          bottom: 4px;
          height: 1.5px;
          border-radius: 1px;
          background: linear-gradient(
            90deg,
            var(--color-brand-blue),
            var(--color-brand-cyan)
          );
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 380ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .header-link:hover::after {
          transform: scaleX(1);
        }
        .header-link-active::after {
          transform: scaleX(1);
          background: linear-gradient(
            90deg,
            var(--color-brand-cyan),
            var(--color-brand-green)
          );
        }

        .hamburger-button:hover .hamburger-bar {
          background-color: var(--color-brand-cyan);
        }

        .mobile-menu-item {
          opacity: 0;
          animation: mobile-item-in 420ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes mobile-item-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ============================================================ */
        /* ANNOUNCEMENT TICKER — BLUE RUNNING STRIP                     */
        /* ============================================================ */
        .announcement-ticker {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          height: 34px;
          overflow: hidden;
          background: linear-gradient(
            90deg,
            var(--color-brand-blue) 0%,
            var(--color-brand-cyan) 100%
          );
          color: #001026;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        /* Subtle LED scanlines */
        .announcement-ticker::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.05) 0px,
            rgba(255, 255, 255, 0.05) 1px,
            transparent 1px,
            transparent 3px
          );
          z-index: 2;
        }

        /* Soft fade at the left + right edges */
        .announcement-ticker::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          background: linear-gradient(
            90deg,
            color-mix(in oklab, var(--color-brand-blue) 90%, transparent) 0%,
            transparent 6%,
            transparent 94%,
            color-mix(in oklab, var(--color-brand-cyan) 90%, transparent) 100%
          );
        }

        .ticker-led {
          position: relative;
          z-index: 3;
          flex-shrink: 0;
          width: 8px;
          height: 8px;
          margin-left: 14px;
          margin-right: 12px;
          border-radius: 9999px;
          background: #001026;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.45);
          animation: ticker-led-blink 1.2s steps(2, end) infinite;
        }
        @keyframes ticker-led-blink {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.35; }
        }

        .ticker-viewport {
          position: relative;
          z-index: 3;
          flex: 1;
          overflow: hidden;
          white-space: nowrap;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .ticker-track {
          display: inline-flex;
          align-items: center;
          gap: 40px;
          animation: ticker-scroll 70s linear infinite;
          will-change: transform;
        }

        .announcement-ticker:hover .ticker-track {
          animation-play-state: paused;
        }

        .ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 40px;
          white-space: nowrap;
        }

        .ticker-sep {
          opacity: 0.55;
          font-size: 14px;
          margin-left: 40px;
        }

        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ============================================================ */
        /* REDUCED MOTION                                                */
        /* ============================================================ */
        @media (prefers-reduced-motion: reduce) {
          .header-glow-line,
          .mobile-menu-item,
          .ticker-track,
          .ticker-led {
            animation: none !important;
          }
          .mobile-menu-item {
            opacity: 1 !important;
            transform: none !important;
          }
          .header-link::after,
          .hamburger-bar,
          .mobile-menu {
            transition: none !important;
          }
        }
      `}</style>
    </header>
  );
}