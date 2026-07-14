import type { Transition, Variants } from "framer-motion";

export const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, transform: "translateY(24px)" },
  visible: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: EASE_OUT } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, transform: "scale(0.94)" },
  visible: {
    opacity: 1,
    transform: "scale(1)",
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export function withDelay(variants: Variants, delay: number): Variants {
  const visible = variants.visible;
  if (typeof visible !== "object" || visible === null) return variants;
  const transition =
    "transition" in visible && typeof visible.transition === "object"
      ? visible.transition
      : {};
  return {
    ...variants,
    visible: { ...visible, transition: { ...transition, delay } },
  };
}

export const viewportOnce = { once: true, margin: "-80px" } as const;
