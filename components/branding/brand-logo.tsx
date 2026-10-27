"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LOGO_SOURCES = [
  "/assets/logo.jpeg",
  "/assets/logo.jpg",
  "/assets/logo.png",
  "/assets/logo.svg",
];

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  href?: string;
  circular?: boolean;
  label?: React.ReactNode;
  labelClassName?: string;
};

export function BrandLogo({
  className = "h-10 w-auto",
  priority = false,
  href = "/",
  circular = false,
  label,
  labelClassName,
}: BrandLogoProps) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  const src = LOGO_SOURCES[sourceIndex];

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-brand-navy)]"
    >
      <span
        className={[
          circular
            ? "inline-flex aspect-square items-center justify-center overflow-hidden rounded-full border border-foreground/15 bg-white dark:bg-foreground/5 shadow-[0_0_0_1px_rgba(46,216,243,0.24)]"
            : "inline-flex items-center justify-center overflow-hidden",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {failed ? (
          <span
            aria-hidden
            className="flex h-full w-full items-center justify-center text-[clamp(0.7rem,2.4vw,1rem)] font-bold tracking-wider text-[#001026]"
            style={{
              background:
                "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-cyan))",
            }}
          >
            TST
          </span>
        ) : (
          <Image
            src={src}
            alt="TechSwiftTrix Agency logo"
            width={160}
            height={40}
            sizes="160px"
            priority={priority}
            quality={85}
            onError={() => {
              setSourceIndex((current) => {
                if (current < LOGO_SOURCES.length - 1) return current + 1;
                setFailed(true);
                return current;
              });
            }}
            className={[
              "h-full w-auto object-center", // <--- Changed to w-auto
              circular ? "object-cover" : "object-contain",
            ].join(" ")}
          />
        )}
      </span>
      {label ? (
        <span
          className={[
            "text-sm font-semibold text-foreground",
            labelClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {label}
        </span>
      ) : null}
    </Link>
  );
}