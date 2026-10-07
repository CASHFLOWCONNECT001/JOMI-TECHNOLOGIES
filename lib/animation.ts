/* Animation utility for applying animation classes to components */
export const animation = {
  /* Entrance animations */
  fadeInUp: "animate-fade-in-up",
  fadeInDown: "animate-fade-in-down",
  slideInLeft: "animate-slide-in-left",
  slideInRight: "animate-slide-in-right",
  scaleIn: "animate-scale-in",

  /* Interaction animations */
  pulseGlow: "animate-brand-pulse",
  glow: "animate-glow",
  shimmer: "animate-shimmer",

  /* State animations */
  successCheck: "animate-success-check",
  errorShake: "animate-error-shake",
  spin: "animate-spin",

  /* Hover animations */
  hoverLift: "animate-hover-lift",
  hoverScale: "animate-hover-scale",
  hoverGlow: "animate-hover-glow",

  /* Press animations */
  press: "animate-press",
  pressGlow: "animate-press-glow",
};

/* Stagger delay utility for list items */
export const staggerDelay = (index: number, baseDelay = 50) => ({
  style: { animationDelay: `${index * baseDelay}ms` },
});

/* Numeric stagger for Reveal delays (returns a number in ms, capped). */
export function stagger(index: number, step = 60, max = 480) {
  return Math.min(index * step, max);
}