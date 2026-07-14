"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, useRevealState } from "@/components/ui/Reveal";
import { chatResponses } from "@/constants/dashboard-data";

const questions = Object.keys(chatResponses);

export default function CopilotoIA() {
  const { ref, isInView } = useRevealState();
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const handleQuestion = (q: string) => {
    setMessages((prev) => [...prev, { role: "user", text: q }]);
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "ai", text: chatResponses[q] }]);
      setIsTyping(false);
      setActiveQuestion((prev) => (prev + 1) % questions.length);
    }, 1200);
  };

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => handleQuestion(questions[0]), 1000);
    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <section ref={ref} id="copiloto" className="overflow-hidden bg-gray-50 py-16 sm:py-20 md:py-32">
      <Container size="narrow">
        <SectionHeading
          eyebrow="LS Copilot"
          title={
            <>
              Inteligência ao seu
              <br />
              <span className="text-gray-400">alcance.</span>
            </>
          }
        />

        <Reveal delay={0.2}>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_20px_60px_-12px_rgba(0,0,0,0.1)] sm:rounded-3xl">
            <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-4 sm:px-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-900">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">LS Copilot</p>
                <p className="text-[10px] text-gray-400">AI Business Assistant</p>
              </div>
            </div>

            <div
              data-lenis-prevent
              className="h-[380px] space-y-4 overflow-y-auto p-4 sm:h-[400px] sm:p-6"
            >
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, transform: "translateY(10px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[92%] rounded-2xl px-4 py-3 sm:max-w-[80%] ${
                        msg.role === "user"
                          ? "rounded-br-sm bg-gray-900 text-white"
                          : "rounded-bl-sm bg-gray-50 text-gray-700"
                      }`}
                    >
                      <p className="whitespace-pre-line text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-sm bg-gray-50 px-4 py-3">
                    <div className="flex gap-1">
                      <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "0ms" }} />
                      <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "150ms" }} />
                      <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="border-t border-gray-100 px-4 py-4 sm:px-6">
              <p className="mb-2 text-[10px] text-gray-400">Perguntas sugeridas:</p>
              <div className="flex flex-wrap gap-1.5">
                {questions
                  .filter((_, i) => i >= activeQuestion)
                  .slice(0, 2)
                  .map((q) => (
                    <button
                      key={q}
                      onClick={() => handleQuestion(q)}
                      disabled={isTyping}
                      className="min-h-9 rounded-full border border-gray-100 bg-gray-50 px-3 text-xs text-gray-600 transition-colors hover:bg-gray-100 disabled:opacity-50"
                    >
                      {q}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
