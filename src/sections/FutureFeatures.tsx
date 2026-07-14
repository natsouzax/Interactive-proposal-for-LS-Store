"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useRevealState } from "@/components/ui/Reveal";
import { futureFeatures } from "@/constants/future-features";

export default function FutureFeatures() {
  const { ref, isInView } = useRevealState();

  return (
    <section ref={ref} className="bg-gray-50 py-16 sm:py-20 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Evolução Contínua"
          title={
            <>
              Construído para
              <br />
              <span className="text-gray-400">crescer.</span>
            </>
          }
          description="Cada módulo é uma nova possibilidade. A plataforma evolui conforme o negócio cresce."
        />

        <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:grid-cols-4 md:gap-4">
          {futureFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, transform: "translateY(20px)" }}
                animate={
                  isInView
                    ? { opacity: 1, transform: "translateY(0px)" }
                    : { opacity: 0, transform: "translateY(20px)" }
                }
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 transition-all hover:border-gray-200"
              >
                <div className="absolute right-3 top-3">
                  <span className="rounded-full bg-gray-50 px-2 py-0.5 text-[9px] font-medium text-gray-400">
                    Em breve
                  </span>
                </div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 transition-colors group-hover:bg-gray-100">
                  <Icon size={18} className="text-gray-400" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-xs leading-relaxed text-gray-400">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
