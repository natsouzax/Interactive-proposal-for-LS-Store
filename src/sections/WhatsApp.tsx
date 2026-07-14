"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, useRevealState } from "@/components/ui/Reveal";
import { PhoneFrame } from "@/components/ui/DeviceFrame";
import { fadeUp, withDelay } from "@/lib/motion";
import { messageLines, sellerReply, whatsappHighlights } from "@/constants/whatsapp";

function SellerMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(10px)" }}
      animate={{ opacity: 1, transform: "translateY(0px)" }}
      className="ml-6 max-w-[80%] rounded-2xl rounded-tl-sm border border-gray-100 bg-white p-3 shadow-sm"
    >
      <p className="mb-1 text-xs font-semibold text-gray-900">LS Store</p>
      <p className="text-[11px] leading-relaxed text-gray-600">{sellerReply}</p>
      <p className="mt-2 text-right text-[9px] text-gray-400">14:32</p>
    </motion.div>
  );
}

export default function WhatsApp() {
  const { ref, isInView } = useRevealState();
  const [visibleLines, setVisibleLines] = useState(0);
  const [showSellerReply, setShowSellerReply] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    let line = 0;
    const interval = setInterval(() => {
      line++;
      setVisibleLines(line);
      if (line >= messageLines.length) {
        clearInterval(interval);
        setTimeout(() => setShowSellerReply(true), 1000);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={ref} id="whatsapp" className="overflow-hidden bg-gray-50 py-16 sm:py-20 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="WhatsApp Inteligente"
          title={
            <>
              Pedido pronto.
              <br />
              <span className="text-gray-400">Venda feita.</span>
            </>
          }
          description="O cliente envia tudo de uma vez. O vendedor recebe organizado. Menos perguntas, mais vendas."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal delay={0.2} className="flex justify-center">
            <PhoneFrame className="max-w-[280px]">
              <div className="flex h-full flex-col bg-[#ECE5DD]">
                <div className="flex shrink-0 items-center gap-3 bg-[#075E54] px-4 py-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 text-[10px] font-bold text-white">
                    LS
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white">LS Store</p>
                    <p className="text-[9px] text-green-200">online</p>
                  </div>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto p-3">
                  <div className="space-y-1.5">
                    {messageLines.slice(0, visibleLines).map((line, i) => {
                      if (!line) return <div key={i} className="h-1" />;
                      const isTotal = line.includes("Total:");
                      const isProduct =
                        line.startsWith("📦") || line.startsWith("👖") || line.startsWith("👟");

                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, transform: "translateY(5px)" }}
                          animate={{ opacity: 1, transform: "translateY(0px)" }}
                          className="ml-6 inline-block max-w-[220px] rounded-lg bg-[#DCF8C6] px-2.5 py-1"
                        >
                          <p
                            className={
                              isTotal
                                ? "text-[10px] font-bold leading-relaxed text-gray-900"
                                : isProduct
                                ? "text-[10px] font-medium leading-relaxed text-gray-900"
                                : "text-[10px] leading-relaxed text-gray-800"
                            }
                            style={{ whiteSpace: "pre-line" }}
                          >
                            {line}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>

                  {showSellerReply && <div className="mt-3">{<SellerMessage />}</div>}
                </div>

                <div className="flex shrink-0 items-center gap-2 bg-[#F0F0F0] px-2 py-2">
                  <div className="flex-1 rounded-full bg-white px-3 py-1.5 text-[10px] text-gray-400">
                    Mensagem
                  </div>
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#075E54]">
                    <Send size={10} className="ml-0.5 text-white" />
                  </div>
                </div>
              </div>
            </PhoneFrame>
          </Reveal>

          <Reveal variants={withDelay(fadeUp, 0.3)} className="space-y-8">
            <div>
              <h3 className="mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold text-gray-900">
                O vendedor recebe tudo organizado
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Produto, quantidade, cor, tamanho e valor — tudo numa mensagem única.
                Sem rodinha de perguntas. Sem cliente desistindo no meio.
              </p>
            </div>

            <div className="space-y-3">
              {whatsappHighlights.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
