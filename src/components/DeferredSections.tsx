"use client";

import { ComponentType, useEffect, useRef, useState } from "react";

type LazySectionProps = {
  anchorId?: string;
  minHeight?: string;
  loader: () => Promise<{ default: ComponentType }>;
};

function LazySection({ anchorId, loader, minHeight = "min-h-[360px]" }: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [Component, setComponent] = useState<ComponentType | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || Component) return;

    const load = () => {
      loader().then((module) => setComponent(() => module.default));
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          load();
        }
      },
      { rootMargin: "900px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [Component, loader]);

  return (
    <div ref={ref} id={Component ? undefined : anchorId} className={Component ? undefined : minHeight}>
      {Component ? <Component /> : null}
    </div>
  );
}

export default function DeferredSections() {
  return (
    <>
      <LazySection anchorId="projeto" minHeight="min-h-[680px]" loader={() => import("@/sections/Problema")} />
      <LazySection minHeight="min-h-[520px]" loader={() => import("@/sections/Jornada")} />
      <LazySection anchorId="solucao" minHeight="min-h-[720px]" loader={() => import("@/sections/Plataforma")} />
      <LazySection anchorId="catalogo" minHeight="min-h-[760px]" loader={() => import("@/sections/Catalogo")} />
      <LazySection anchorId="lsmatch" minHeight="min-h-[680px]" loader={() => import("@/sections/AuxiliarModa")} />
      <LazySection minHeight="min-h-[720px]" loader={() => import("@/sections/ProdutoPage")} />
      <LazySection anchorId="whatsapp" minHeight="min-h-[720px]" loader={() => import("@/sections/WhatsApp")} />
      <LazySection anchorId="dashboard" minHeight="min-h-[760px]" loader={() => import("@/sections/Dashboard")} />
      <LazySection anchorId="copiloto" minHeight="min-h-[520px]" loader={() => import("@/sections/CopilotoIA")} />
      <LazySection anchorId="roadmap" minHeight="min-h-[760px]" loader={() => import("@/sections/Roadmap")} />
      <LazySection anchorId="investimento" minHeight="min-h-[520px]" loader={() => import("@/sections/Investimento")} />
      <LazySection loader={() => import("@/sections/FutureFeatures")} />
      <LazySection loader={() => import("@/sections/Encerramento")} />
      <LazySection minHeight="min-h-[280px]" loader={() => import("@/components/Footer")} />
    </>
  );
}
