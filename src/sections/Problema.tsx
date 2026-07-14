"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, useRevealState } from "@/components/ui/Reveal";
import { fadeUp, withDelay } from "@/lib/motion";
import { antesSteps, depoisSteps, type FlowStep } from "@/constants/problema";

function AnimatedFlow({ steps, isInView }: { steps: FlowStep[]; isInView: boolean }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const interval = setInterval(() => {
      setActiveIndex(i);
      i++;
      if (i >= steps.length) clearInterval(interval);
    }, 400);
    return () => clearInterval(interval);
  }, [isInView, steps.length]);

  return (
    <div className="flex flex-col items-center gap-3">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = index <= activeIndex;
        return (
          <div key={step.label} className="flex w-full max-w-xs flex-col items-center">
            <motion.div
              initial={{ opacity: 0.3, transform: "scale(0.8)" }}
              animate={
                isActive
                  ? { opacity: 1, transform: "scale(1)" }
                  : { opacity: 0.3, transform: "scale(0.8)" }
              }
              transition={{ duration: 0.4 }}
              className={`flex w-full items-center gap-3 rounded-xl border px-5 py-3 transition-colors duration-300 ${
                isActive ? "border-gray-200 bg-white shadow-sm" : "border-gray-100 bg-gray-50"
              }`}
            >
              <Icon size={18} className={step.color} />
              <span className="text-sm font-medium text-gray-700">{step.label}</span>
            </motion.div>
            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0.1 }}
                animate={{ opacity: isActive ? 0.4 : 0.1 }}
                className="my-1 text-gray-300"
              >
                ↓
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Problema() {
  const { ref, isInView } = useRevealState();

  return (
    <section
      ref={ref}
      id="projeto"
      className="overflow-hidden bg-gray-50 py-16 sm:py-20 md:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="O Problema"
          title={
            <>
              A diferença entre perder
              <br />
              <span className="text-gray-400">e conquistar</span> um cliente.
            </>
          }
        />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 sm:grid-cols-2 md:gap-16">
          <Reveal variants={withDelay(fadeUp, 0.1)}>
            <div className="mb-8 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-red-400">
                Antes
              </span>
            </div>
            <AnimatedFlow steps={antesSteps} isInView={isInView} />
          </Reveal>

          <Reveal variants={withDelay(fadeUp, 0.3)}>
            <div className="mb-8 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-green-600">
                Depois
              </span>
            </div>
            <AnimatedFlow steps={depoisSteps} isInView={isInView} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
