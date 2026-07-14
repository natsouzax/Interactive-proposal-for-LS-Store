import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { fadeUp, fadeIn, withDelay } from "@/lib/motion";

export default function Encerramento() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 md:py-48">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100/30 via-white to-white" />

      <Container size="narrow" className="relative z-10 text-center">
        <Reveal
          as="p"
          variants={withDelay(fadeIn, 0.2)}
          className="mb-6 text-sm uppercase tracking-widest text-gray-400 sm:mb-8"
        >
          O início de uma jornada
        </Reveal>

        <Reveal as="h2" variants={withDelay(fadeUp, 0.4)}>
          <span className="block font-[family-name:var(--font-playfair)] text-[clamp(1.875rem,6vw,4.5rem)] font-bold leading-[1.1] text-gray-900">
            Não estamos desenvolvendo
            <br />
            apenas um site.
          </span>
        </Reveal>

        <Reveal
          as="p"
          variants={withDelay(fadeUp, 0.6)}
          className="mx-auto mb-10 mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 sm:mb-12 md:text-xl"
        >
          Estamos criando o{" "}
          <span className="font-medium text-gray-900">vendedor digital da LS Store</span>. Uma
          plataforma inteligente que trabalha 24 horas por dia, entende seus clientes e
          transforma visitas em vendas.
        </Reveal>

        <Reveal variants={withDelay(fadeUp, 0.8)}>
          <Button as="a" href="#investimento" size="lg">
            <Sparkles size={16} />
            Vamos construir juntos
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
