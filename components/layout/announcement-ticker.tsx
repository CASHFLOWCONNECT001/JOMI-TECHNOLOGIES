"use client";

const MESSAGES = [
  "TechSwiftTrix Agency — ICT training and software systems under one roof.",
  "We train in computer basics, Microsoft Office, programming, databases, and networking — with real self-employment paths.",
  "We build ERP, CRM, e-commerce, POS, school LMS, and custom web and mobile systems for businesses across Africa.",
  "One institute. Two arms. Training that builds people, software that builds businesses.",
  "Our flagships — CashFlowHubs, NetOppsTrix, JOMI Mall, and SepiSwift — run in production today.",
  "Practical skills. Enterprise systems. Local support. Global standards.",
];

export function AnnouncementTicker() {
  return (
    <div
      className="announcement-ticker"
      role="region"
      aria-label="About TechSwiftTrix Agency"
    >
      {/* Status dot */}
      <span aria-hidden="true" className="ticker-dot" />

      {/* Scrolling viewport */}
      <div className="ticker-viewport">
        <div className="ticker-track">
          {[0, 1].map((group) => (
            <div
              className="ticker-group"
              key={group}
              aria-hidden={group === 1 || undefined}
            >
              {MESSAGES.map((msg, i) => (
                <span className="ticker-item" key={i}>
                  {msg}
                  <span aria-hidden="true" className="ticker-sep" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .announcement-ticker {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          height: 38px;
          overflow: hidden;
          background: #ffffff;
          color: #1a1a1a;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.005em;
          line-height: 1;
          border-bottom: 1px solid rgba(0, 0, 0, 0.10);
        }

        .ticker-dot {
          position: relative;
          z-index: 3;
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          margin-left: 14px;
          margin-right: 12px;
          border-radius: 9999px;
          background: #0891b2;
          box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.16);
        }

        .ticker-viewport {
          position: relative;
          z-index: 3;
          flex: 1;
          min-width: 0;
          overflow: hidden;
          white-space: nowrap;
          height: 100%;
          display: flex;
          align-items: center;
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0,
            #000 28px,
            #000 calc(100% - 44px),
            transparent 100%
          );
          mask-image: linear-gradient(
            90deg,
            transparent 0,
            #000 28px,
            #000 calc(100% - 44px),
            transparent 100%
          );
        }

        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker-scroll 65s linear infinite;
          will-change: transform;
        }

        .ticker-group {
          display: flex;
          flex: 0 0 auto;
          align-items: center;
        }

        .announcement-ticker:hover .ticker-track,
        .announcement-ticker:focus-within .ticker-track {
          animation-play-state: paused;
        }

        .ticker-item {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
        }

        .ticker-sep {
          flex-shrink: 0;
          width: 3px;
          height: 3px;
          margin: 0 30px;
          border-radius: 9999px;
          background: currentColor;
          opacity: 0.3;
        }

        @keyframes ticker-scroll {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }

        @media (max-width: 640px) {
          .announcement-ticker { height: 34px; font-size: 12px; }
          .ticker-sep { margin: 0 20px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; transform: none; }
          .ticker-viewport {
            overflow-x: auto;
            -webkit-mask-image: none;
            mask-image: none;
            scrollbar-width: none;
          }
          .ticker-viewport::-webkit-scrollbar { display: none; }
        }
      `}</style>
    </div>
  );
}