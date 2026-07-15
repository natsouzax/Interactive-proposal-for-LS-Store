import { Sparkles, Shield, Check, Headphones, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { withDelay, fadeUp } from "@/lib/motion";
import { formatCurrency } from "@/lib/utils";
import {
  developmentFeatures,
  maintenanceFeatures,
  investmentPlans,
  hourlyRate,
  estimatedHours,
  regularPrice,
  developmentDays,
  developmentDeadlineNote,
  deliveryWeeks,
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

            <div className="mb-2 flex flex-wrap items-baseline gap-3">
              <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-gray-900">
                {investmentPlans.development.price}
              </span>
              <span className="text-base text-gray-400 line-through">
                {formatCurrency(regularPrice)}
              </span>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-900">
                Condição especial
              </span>
            </div>
            <p className="mb-8 text-xs text-gray-400">
              {formatCurrency(hourlyRate)}/hora × {estimatedHours}h estimadas ={" "}
              {formatCurrency(regularPrice)} — valor fechado em {investmentPlans.development.price}
            </p>

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

        <Reveal
          variants={withDelay(fadeUp, 0.6)}
          className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8"
        >
          <div className="mb-6 flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-50">
              <Clock size={18} className="text-gray-500" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">Prazo de desenvolvimento</h3>
              <p className="mt-1 font-[family-name:var(--font-playfair)] text-2xl font-bold text-gray-900">
                {developmentDays} dias corridos
              </p>
            </div>
          </div>

          <p className="mb-8 text-xs leading-relaxed text-gray-400">{developmentDeadlineNote}</p>

          <div className="border-t border-gray-100 pt-6">
            <p className="mb-4 text-sm font-medium text-gray-700">Entregas previstas</p>
            <div className="space-y-4">
              {deliveryWeeks.map((item) => (
                <div key={item.week} className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
                    {item.week}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Semana {item.week}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
