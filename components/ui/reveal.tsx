"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade" | "scale";

type Props = {
  children: ReactNode;
  from?: Direction;
  delay?: number;
  distance?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
};

export function Reveal({
  children,
  from = "up",
  delay = 0,
  distance = 24,
  duration = 800,
  once = true,
  className = "",
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const fromStyle: React.CSSProperties = (() => {
    if (visible) {
      return { opacity: 1, transform: "none" };
    }
    switch (from) {
      case "up":
        return { opacity: 0, transform: `translate3d(0, ${distance}px, 0)` };
      case "down":
        return { opacity: 0, transform: `translate3d(0, -${distance}px, 0)` };
      case "left":
        return { opacity: 0, transform: `translate3d(${distance}px, 0, 0)` };
      case "right":
        return { opacity: 0, transform: `translate3d(-${distance}px, 0, 0)` };
      case "scale":
        return { opacity: 0, transform: "scale(0.96)" };
      case "fade":
      default:
        return { opacity: 0 };
    }
  })();

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        ...fromStyle,
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}