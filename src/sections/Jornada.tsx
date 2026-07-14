"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useRevealState } from "@/components/ui/Reveal";
import { journeySteps } from "@/constants/jornada";

export default function Jornada() {
  const { ref, isInView } = useRevealState();

  return (
    <section ref={ref} className="overflow-hidden py-16 sm:py-20 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Jornada do Cliente"
          title={
            <>
              Do primeiro toque
              <br />
              <span className="text-gray-400">à última compra.</span>
            </>
          }
        />

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-gray-200 md:block" />

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 min-[420px]:grid-cols-4 md:grid-cols-8 md:gap-x-2">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, transform: "translateY(20px)" }}
                  animate={
                    isInView
                      ? { opacity: 1, transform: "translateY(0px)" }
                      : { opacity: 0, transform: "translateY(20px)" }
                  }
                  transition={{ duration: 0.5, delay: 0.08 * index }}
                  className="flex flex-col items-center gap-3"
                >
                  <motion.div
                    whileHover={{ transform: "scale(1.1)" }}
                    className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 shadow-lg md:h-16 md:w-16"
                  >
                    <Icon size={22} className="text-white" />
                    {index < journeySteps.length - 1 && (
                      <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-xs text-gray-300 md:block">
                        →
                      </div>
                    )}
                  </motion.div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-gray-900">{step.label}</p>
                    <p className="mt-0.5 text-[10px] text-gray-400">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
