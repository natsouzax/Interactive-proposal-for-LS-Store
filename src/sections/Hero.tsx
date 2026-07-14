import { ArrowDown } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp, fadeIn, withDelay } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-24 sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100/50 via-white to-white" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <Reveal variants={fadeIn} className="mb-8 sm:mb-10">
          <Eyebrow>Plataforma Digital</Eyebrow>
        </Reveal>

        <Reveal as="h1" delay={0.1} className="w-full">
          <span
            className="block font-[family-name:var(--font-playfair)] font-bold leading-[0.95] tracking-tight text-gray-900"
            style={{ fontSize: "var(--fs-hero)" }}
          >
            O futuro da
            <br />
            <span className="text-gray-400">LS Store</span> começa aqui.
          </span>
        </Reveal>

        <Reveal
          as="p"
          variants={withDelay(fadeUp, 0.25)}
          className="mt-6 max-w-2xl text-base leading-relaxed text-gray-500 sm:mt-8 sm:text-lg md:text-xl"
        >
          Uma plataforma desenvolvida para transformar visitantes em clientes
          utilizando tecnologia, experiência e inteligência artificial.
        </Reveal>

        <Reveal variants={withDelay(fadeUp, 0.4)} className="mt-10 sm:mt-12">
          <Button as="a" href="#projeto" size="lg">
            Conhecer Projeto
            <ArrowDown
              size={16}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </Button>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-10">
        <div className="animate-float flex h-10 w-6 justify-center rounded-full border-2 border-gray-300 pt-2">
          <div className="h-2 w-1 rounded-full bg-gray-400" />
        </div>
      </div>
    </section>
  );
}
