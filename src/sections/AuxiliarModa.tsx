"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Bot, Sparkles, ShoppingBag, Check, ChevronRight, RotateCcw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { fashionOutfits } from "@/constants/products";
import { occasions, styles, prices, auxiliarModaSteps } from "@/constants/auxiliar-moda";
import { cn, formatCurrency } from "@/lib/utils";

type Step = (typeof auxiliarModaSteps)[number]["key"];

export default function AuxiliarModa() {
  const [step, setStep] = useState<Step>("occasion");
  const [occasion, setOccasion] = useState<string | null>(null);
  const [style, setStyle] = useState<string | null>(null);
  const [, setPrice] = useState<string | null>(null);

  const outfit = occasion ? fashionOutfits[occasion] || fashionOutfits.Casual : fashionOutfits.Casual;
  const totalOutfit = outfit.reduce((sum, item) => sum + item.price, 0);

  const handleReset = () => {
    setStep("occasion");
    setOccasion(null);
    setStyle(null);
    setPrice(null);
  };

  return (
    <section id="lsmatch" className="overflow-hidden bg-gray-50 py-16 sm:py-20 md:py-32">
      <Container size="narrow">
        <SectionHeading
          eyebrow="LS Match"
          title={
            <>
              Seu assistente
              <br />
              <span className="text-gray-400">de moda pessoal.</span>
            </>
          }
          description="Responda algumas perguntas e a IA monta um look completo para você."
        />

        <Reveal delay={0.2}>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_20px_60px_-12px_rgba(0,0,0,0.1)] sm:rounded-3xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-900">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">LS Match</p>
                  <p className="text-[10px] text-gray-400">Assistente de Moda IA</p>
                </div>
              </div>
              {step !== "occasion" && (
                <button
                  onClick={handleReset}
                  aria-label="Reiniciar assistente"
                  className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600"
                >
                  <RotateCcw size={14} />
                </button>
              )}
            </div>

            <div className="flex gap-1 border-b border-gray-100 px-4 py-3 sm:px-6">
              {auxiliarModaSteps.map((s, i) => (
                <div key={s.key} className="flex flex-1 items-center gap-1">
                  <div
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-medium transition-all",
                      step === s.key || auxiliarModaSteps.findIndex((x) => x.key === step) > i
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-400"
                    )}
                  >
                    {auxiliarModaSteps.findIndex((x) => x.key === step) > i ? <Check size={10} /> : s.num}
                  </div>
                  <span className="hidden text-[10px] text-gray-400 sm:inline">{s.label}</span>
                  {i < auxiliarModaSteps.length - 1 && (
                    <div className="mx-1 h-px flex-1 bg-gray-100" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex min-h-[340px] flex-col p-4 sm:p-6">
              <AnimatePresence mode="wait">
                {step === "occasion" && (
                  <motion.div
                    key="occasion"
                    initial={{ opacity: 0, transform: "translateY(12px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    exit={{ opacity: 0, transform: "translateY(-12px)" }}
                    className="flex-1"
                  >
                    <div className="mb-6 flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
                        <Bot size={14} className="text-gray-600" />
                      </div>
                      <div className="rounded-2xl rounded-tl-sm bg-gray-50 px-4 py-3">
                        <p className="text-sm text-gray-700">
                          Olá! 👋 Para qual ocasião procura um look?
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2 sm:ml-11">
                      {occasions.map((o) => (
                        <button
                          key={o.id}
                          onClick={() => {
                            setOccasion(o.id);
                            setStep("style");
                          }}
                          className="group flex min-h-14 items-center gap-3 rounded-xl border border-gray-200 p-3 text-left transition-all hover:border-gray-400 hover:bg-gray-50"
                        >
                          <span className="text-xl">{o.emoji}</span>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                            {o.label}
                          </span>
                          <ChevronRight size={14} className="ml-auto text-gray-300 transition-colors group-hover:text-gray-600" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === "style" && (
                  <motion.div
                    key="style"
                    initial={{ opacity: 0, transform: "translateY(12px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    exit={{ opacity: 0, transform: "translateY(-12px)" }}
                    className="flex-1"
                  >
                    <div className="mb-6 flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
                        <Bot size={14} className="text-gray-600" />
                      </div>
                      <div className="rounded-2xl rounded-tl-sm bg-gray-50 px-4 py-3">
                        <p className="text-sm text-gray-700">
                          Ótimo! Para {occasion?.toLowerCase()}, qual seu estilo preferido?
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2 sm:ml-11">
                      {styles.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => {
                            setStyle(s.id);
                            setStep("price");
                          }}
                          className="group flex min-h-14 items-center gap-3 rounded-xl border border-gray-200 p-3 text-left transition-all hover:border-gray-400 hover:bg-gray-50"
                        >
                          <span className="text-xl">{s.emoji}</span>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                            {s.label}
                          </span>
                          <ChevronRight size={14} className="ml-auto text-gray-300 transition-colors group-hover:text-gray-600" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === "price" && (
                  <motion.div
                    key="price"
                    initial={{ opacity: 0, transform: "translateY(12px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    exit={{ opacity: 0, transform: "translateY(-12px)" }}
                    className="flex-1"
                  >
                    <div className="mb-6 flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
                        <Bot size={14} className="text-gray-600" />
                      </div>
                      <div className="rounded-2xl rounded-tl-sm bg-gray-50 px-4 py-3">
                        <p className="text-sm text-gray-700">Perfeito! Qual faixa de preço prefere?</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 sm:ml-11">
                      {prices.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => {
                            setPrice(p.id);
                            setStep("result");
                          }}
                          className="group flex min-h-14 items-center gap-3 rounded-xl border border-gray-200 p-3 text-left transition-all hover:border-gray-400 hover:bg-gray-50"
                        >
                          <span className="text-xl">{p.emoji}</span>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                            {p.label}
                          </span>
                          <ChevronRight size={14} className="ml-auto text-gray-300 transition-colors group-hover:text-gray-600" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === "result" && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, transform: "translateY(12px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    exit={{ opacity: 0, transform: "translateY(-12px)" }}
                    className="flex-1"
                  >
                    <div className="mb-4 flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
                        <Sparkles size={14} className="text-gray-600" />
                      </div>
                      <div className="rounded-2xl rounded-tl-sm bg-gray-50 px-4 py-3">
                        <p className="text-sm text-gray-700">
                          Aqui está seu look <strong>{occasion?.toLowerCase()}</strong> estilo{" "}
                          <strong>{style?.toLowerCase()}</strong>! ✨
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 sm:ml-11">
                      {outfit.map((item, i) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, transform: "translateY(10px)" }}
                          animate={{ opacity: 1, transform: "translateY(0px)" }}
                          transition={{ delay: i * 0.15 }}
                          className="flex items-center gap-3 rounded-xl bg-gray-50 p-3"
                        >
                          <span className="text-2xl">{item.emoji}</span>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{item.name}</p>
                          </div>
                          <span className="text-sm text-gray-500">{formatCurrency(item.price)}</span>
                        </motion.div>
                      ))}

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center justify-between border-t border-gray-100 pt-3"
                      >
                        <span className="text-sm font-semibold text-gray-900">Total do Look</span>
                        <span className="text-lg font-bold text-gray-900">{formatCurrency(totalOutfit)}</span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, transform: "translateY(10px)" }}
                        animate={{ opacity: 1, transform: "translateY(0px)" }}
                        transition={{ delay: 0.8 }}
                        className="flex gap-2 pt-2"
                      >
                        <button className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                          <ShoppingBag size={14} />
                          Adicionar look completo
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
