"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { fadeUp, viewportOnce, withDelay } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const staticMotionTags = {
  div: motion.div,
  section: motion.section,
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
  span: motion.span,
} as const;

const staticTags = {
  div: "div",
  section: "section",
  h1: "h1",
  h2: "h2",
  p: "p",
  span: "span",
} as const;

type RevealTag = keyof typeof staticMotionTags;

type RevealProps = {
  children: ReactNode;
  as?: RevealTag;
  variants?: Variants;
  delay?: number;
  className?: string;
};

export function Reveal({
  children,
  as = "div",
  variants = fadeUp,
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewportOnce);
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    const StaticTag = staticTags[as];
    return (
      <StaticTag ref={ref} className={className}>
        {children}
      </StaticTag>
    );
  }

  const MotionComponent = staticMotionTags[as];

  return (
    <MotionComponent
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={delay ? withDelay(variants, delay) : variants}
    >
      {children}
    </MotionComponent>
  );
}

export function useRevealState() {
  const ref = useRef(null);
  const isInView = useInView(ref, viewportOnce);
  return { ref, isInView };
}
