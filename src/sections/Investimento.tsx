import { Sparkles, Shield, Check, Headphones } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { withDelay, fadeUp } from "@/lib/motion";
import {
  developmentFeatures,
  maintenanceFeatures,
  investmentPlans,
} from "@/constants/investimento";

export default function Investimento() {
  return (
    <section id="investimento" className="bg-gray-50 py-16 sm:py-20 md:py-32">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Investimento"
          title={
            <>
              Transparente.
              <br />
              <span className="text-gray-400">Sem surpresas.</span>
            </>
          }
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal
            variants={withDelay(fadeUp, 0.2)}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8"
          >
            <div className="mb-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900">
                <Sparkles size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Desenvolvimento</h3>
              <p className="mt-1 text-xs text-gray-400">{investmentPlans.development.label}</p>
            </div>

            <div className="mb-8">
              <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-gray-900">
                {investmentPlans.development.price}
              </span>
            </div>

            <div className="space-y-3">
              {developmentFeatures.map((feat) => (
                <div key={feat.text} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gray-100">
                    <Check size={10} className="text-gray-900" />
                  </div>
                  <span className="text-sm text-gray-600">{feat.text}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal
            variants={withDelay(fadeUp, 0.4)}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8"
          >
            <div className="mb-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
                <Shield size={20} className="text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Manutenção</h3>
              <p className="mt-1 text-xs text-gray-400">{investmentPlans.maintenance.label}</p>
            </div>

            <div className="mb-8 flex items-baseline gap-1">
              <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-gray-900">
                {investmentPlans.maintenance.price}
              </span>
              <span className="text-sm text-gray-400">{investmentPlans.maintenance.period}</span>
            </div>

            <div className="space-y-3">
              {maintenanceFeatures.map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gray-100">
                    <Check size={10} className="text-gray-900" />
                  </div>
                  <span className="text-sm text-gray-600">{feat}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-gray-100 pt-6">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Headphones size={14} />
                Suporte prioritário incluso
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
