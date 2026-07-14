"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { scaleIn, withDelay } from "@/lib/motion";
import { LaptopFrame, PhoneFrame, TabletFrame } from "@/components/ui/DeviceFrame";

function NotebookScreen() {
  return (
    <div className="flex h-full flex-col justify-between gap-3 p-4">
      <div className="flex items-center justify-between">
        <span className="font-[family-name:var(--font-playfair)] text-sm font-bold">
          LS Store
        </span>
        <div className="flex gap-3 text-[8px] text-gray-400">
          <span>Início</span>
          <span>Categorias</span>
          <span>Novidades</span>
        </div>
      </div>
      <div className="flex h-24 items-center justify-center rounded-lg bg-gray-100">
        <span className="text-xs text-gray-400">Banner Principal</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg bg-gray-50 p-2 text-center">
            <div className="mb-1 h-12 rounded bg-gray-200" />
            <div className="mx-auto h-1.5 w-3/4 rounded bg-gray-200" />
            <div className="mx-auto mt-1 h-1 w-1/2 rounded bg-gray-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="flex h-full flex-col gap-2 p-3">
      <div className="mb-1 flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-gray-900" />
        <span className="font-[family-name:var(--font-playfair)] text-[10px] font-bold">
          LS Store
        </span>
      </div>
      <div className="rounded-lg bg-gray-100 p-2">
        <div className="mb-1 h-16 rounded bg-gray-200" />
        <div className="h-1.5 w-3/4 rounded bg-gray-200" />
        <div className="mt-1 h-1 w-1/2 rounded bg-gray-100" />
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded bg-gray-50 p-1.5">
            <div className="h-8 rounded bg-gray-200" />
            <div className="mt-1 h-1 w-3/4 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

function TabletScreen() {
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold">LS Store — Dashboard</span>
        <div className="flex gap-2 text-[8px] text-gray-400">
          <span>Visão Geral</span>
          <span>Produtos</span>
          <span>Pedidos</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-lg bg-gray-50 p-2 text-center">
            <div className="text-[8px] text-gray-400">KPI {i}</div>
            <div className="text-sm font-bold text-gray-900">
              {["R$ 12.4k", "4.7%", "847", "2.3k"][i - 1]}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="h-20 rounded-lg bg-gray-50 p-2">
          <div className="mb-1 text-[8px] text-gray-400">Vendas</div>
          <div className="flex h-12 items-end gap-1">
            {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-gray-900" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="h-20 rounded-lg bg-gray-50 p-2">
          <div className="mb-1 text-[8px] text-gray-400">Categorias</div>
          <div className="flex h-12 items-center justify-center">
            <div className="h-10 w-10 rounded-full border-4 border-gray-900 border-t-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Plataforma() {
  return (
    <section id="solucao" className="overflow-hidden bg-gray-50 py-16 sm:py-20 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="A Plataforma"
          title={
            <>
              Design que converte.
              <br />
              <span className="text-gray-400">Tecnologia que escala.</span>
            </>
          }
        />

        <div className="grid items-end gap-8 lg:grid-cols-3">
          <Reveal variants={withDelay(scaleIn, 0.3)} className="hidden lg:block">
            <PhoneFrame>
              <PhoneScreen />
            </PhoneFrame>
          </Reveal>

          <Reveal variants={withDelay(scaleIn, 0.1)} className="hidden md:block lg:col-span-2">
            <LaptopFrame>
              <NotebookScreen />
            </LaptopFrame>
          </Reveal>

          <Reveal variants={withDelay(scaleIn, 0.2)} className="md:hidden">
            <PhoneFrame>
              <PhoneScreen />
            </PhoneFrame>
          </Reveal>
        </div>

        <Reveal variants={withDelay(scaleIn, 0.4)} className="mt-10 sm:mt-12">
          <TabletFrame className="max-w-[520px]">
            <TabletScreen />
          </TabletFrame>
        </Reveal>
      </Container>
    </section>
  );
}
