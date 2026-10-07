"use client";

const MESSAGES = [
  "JOMI TECHNOLOGIES INSTITUTE — ICT training and software systems under one roof.",
  "We train in computer basics, Microsoft Office, programming, databases, and networking — with real self-employment paths.",
  "We build ERP, CRM, e-commerce, POS, school LMS, and custom web and mobile systems for businesses across Africa.",
  "One institute. Two arms. Training that builds people, software that builds businesses.",
  "Our flagships — CashFlowHubs, NetOppsTrix, JOMI Mall, and SepiSwift — run in production today.",
  "Practical skills. Enterprise systems. Local support. Global standards.",
];

export function AnnouncementTicker() {
  return (
    <div className="announcement-ticker" role="region" aria-label="About JOMI TECHNOLOGIES INSTITUTE">
      {/* LED indicator */}
      <span aria-hidden className="ticker-led" />

      {/* Scrolling track */}
      <div className="ticker-viewport">
        <div className="ticker-track">
          {MESSAGES.map((msg, i) => (
            <span key={i} className="ticker-item">
              {msg}
              <span aria-hidden className="ticker-sep">•</span>
            </span>
          ))}
          {/* duplicate for seamless loop */}
          {MESSAGES.map((msg, i) => (
            <span key={`dup-${i}`} className="ticker-item" aria-hidden>
              {msg}
              <span aria-hidden className="ticker-sep">•</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
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

        /* Subtle scanlines so it reads like an LED strip */
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

        /* Left + right fade masks */
        .announcement-ticker::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          background: linear-gradient(
            90deg,
            color-mix(in oklab, var(--color-brand-blue) 90%, transparent) 0%,
            transparent 8%,
            transparent 92%,
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
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
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
          padding-left: 0;
          animation: ticker-scroll 60s linear infinite;
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

        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; }
          .ticker-led   { animation: none; }
        }
      `}</style>
    </div>
  );
}