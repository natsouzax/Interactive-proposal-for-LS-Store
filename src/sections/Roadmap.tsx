"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useRevealState } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { visionSteps } from "@/constants/roadmap";

export default function Roadmap() {
  const { ref, isInView } = useRevealState();

  return (
    <section ref={ref} id="roadmap" className="overflow-hidden py-16 sm:py-20 md:py-32">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Visão de Futuro"
          title={
            <>
              Muito além
              <br />
              <span className="text-gray-400">de um site.</span>
            </>
          }
          description="Esta plataforma foi pensada para crescer junto com a LS Store. Cada módulo é uma etapa na evolução do negócio."
        />

        <div className="relative">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gray-200 md:left-1/2" />

          <div className="space-y-8 md:space-y-12">
            {visionSteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, transform: "translateY(30px)" }}
                  animate={
                    isInView
                      ? { opacity: 1, transform: "translateY(0px)" }
                      : { opacity: 0, transform: "translateY(30px)" }
                  }
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className={cn(
                    "relative flex items-center gap-6 md:gap-0",
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  <div
                    className={cn(
                      "min-w-0 flex-1 md:w-1/2 md:flex-none",
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                    )}
                  >
                    <div
                      className={cn(
                        "inline-flex w-full max-w-full items-center gap-3 rounded-2xl border p-4 transition-all md:w-auto",
                        step.active
                          ? "border-gray-900 bg-gray-900 text-white shadow-lg"
                          : "border-gray-100 bg-white hover:border-gray-200"
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                          step.active ? "bg-white/20" : "bg-gray-50"
                        )}
                      >
                        <Icon size={18} className={step.active ? "text-white" : "text-gray-500"} />
                      </div>
                      <div className="min-w-0 text-left">
                        <p className={cn("text-sm font-semibold", step.active ? "text-white" : "text-gray-900")}>
                          {step.label}
                        </p>
                        <p className={cn("text-xs", step.active ? "text-gray-300" : "text-gray-400")}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-6 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gray-200 bg-white md:left-1/2 md:flex">
                    {step.active && <div className="h-full w-full animate-pulse-soft rounded-full bg-gray-900" />}
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
