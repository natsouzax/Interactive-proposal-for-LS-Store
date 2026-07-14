"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Users,
  TrendingUp,
  DollarSign,
  Eye,
  ShoppingCart,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  Lightbulb,
  Activity,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, useRevealState } from "@/components/ui/Reveal";
import {
  kpiData,
  weeklySales,
  categoryPerformance,
  topProducts,
  trafficSource,
  hourlyAccess,
  conversionFunnel,
} from "@/constants/dashboard-data";
import { useCountUp } from "@/hooks/use-count-up";
import { formatCurrency, formatNumber, cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Users,
  TrendingUp,
  DollarSign,
  Eye,
  ShoppingCart,
  Package,
};

const insights = [
  { text: "Categoria Masculina cresceu 18% esta semana", type: "positive" as const },
  { text: "Camisa Polo Azul: muitas visualizações, pouca conversão", type: "warning" as const },
  { text: "Sexta 18h–21h concentrou o maior número de acessos", type: "neutral" as const },
  { text: "Clientes de camisetas também visualizaram bonés", type: "insight" as const },
  { text: "Ticket médio subiu 12% com combos inteligentes", type: "positive" as const },
];

const PIE_COLORS = ["#111111", "#444444", "#999999", "#EAEAEA", "#CCCCCC"];

function KPICard({ kpi, index }: { kpi: (typeof kpiData)[0]; index: number }) {
  const { count, ref } = useCountUp(kpi.value, 2000, true);
  const Icon = iconMap[kpi.icon] || Package;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, transform: "translateY(20px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group rounded-2xl border border-gray-100 bg-white p-5 transition-colors hover:border-gray-200"
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 transition-colors group-hover:bg-gray-100">
          <Icon size={16} className="text-gray-500" />
        </div>
        <ArrowUpRight size={14} className="text-green-500" />
      </div>
      <p className="text-[clamp(1.25rem,5vw,1.5rem)] font-bold tracking-tight text-gray-900">
        {kpi.prefix}
        {kpi.suffix === "%" ? count.toFixed(1) : formatNumber(Math.round(count))}
        {kpi.suffix}
      </p>
      <p className="mt-1 text-xs text-gray-400">{kpi.label}</p>
    </motion.div>
  );
}

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg bg-gray-900 px-3 py-2 text-xs text-white shadow-lg">
      <p className="font-medium">{label}</p>
      {payload.map((p, i) => (
        <p key={i} className="text-gray-300">
          {p.name}: {typeof p.value === "number" ? formatCurrency(p.value) : p.value}
        </p>
      ))}
    </div>
  );
}

export default function Dashboard() {
  const { ref, isInView } = useRevealState();
  const [activeInsight, setActiveInsight] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveInsight((prev) => (prev + 1) % insights.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={ref} id="dashboard" className="overflow-hidden py-16 sm:py-20 md:py-32">
      <Container size="wide">
        <SectionHeading
          eyebrow="LS Vision"
          title={
            <>
              Inteligência que
              <br />
              <span className="text-gray-400">move o negócio.</span>
            </>
          }
        />

        <div className="mb-8 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {kpiData.map((kpi, i) => (
            <KPICard key={kpi.label} kpi={kpi} index={i} />
          ))}
        </div>

        <div className="mb-4 grid gap-4 lg:grid-cols-3">
          <Reveal delay={0.3} className="rounded-2xl border border-gray-100 bg-white p-5 lg:col-span-2">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-gray-900">Vendas da Semana</p>
                <p className="text-xs text-gray-400">Receita por dia</p>
              </div>
              <div className="flex items-center gap-1 text-xs font-medium text-green-600">
                <ArrowUpRight size={12} />
                +12% vs semana anterior
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={weeklySales}>
                <defs>
                  <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#111111" stopOpacity={0.08} />
                    <stop offset="95%" stopColor="#111111" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#F5F5F5" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#999" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#999" }} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="receita" stroke="#111111" strokeWidth={2} fill="url(#salesGrad)" name="Receita" />
              </AreaChart>
            </ResponsiveContainer>
          </Reveal>

          <Reveal delay={0.4} className="rounded-2xl border border-gray-100 bg-white p-5">
            <p className="mb-1 text-sm font-semibold text-gray-900">Origem dos Acessos</p>
            <p className="mb-4 text-xs text-gray-400">Por canal</p>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie data={trafficSource} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={2} dataKey="value">
                  {trafficSource.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-2 space-y-1.5">
              {trafficSource.map((source, i) => (
                <div key={source.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: PIE_COLORS[i] }} />
                    <span className="text-gray-600">{source.name}</span>
                  </div>
                  <span className="font-medium text-gray-900">{source.value}%</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mb-4 grid gap-4 lg:grid-cols-3">
          <Reveal delay={0.5} className="rounded-2xl border border-gray-100 bg-white p-5">
            <p className="mb-1 text-sm font-semibold text-gray-900">Performance por Categoria</p>
            <p className="mb-4 text-xs text-gray-400">Vendas por seção</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={categoryPerformance} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#F5F5F5" horizontal={false} />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#999" }} />
                <YAxis
                  type="category"
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#666" }}
                  width={80}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="vendas" fill="#111111" radius={[0, 4, 4, 0]} name="Vendas" />
              </BarChart>
            </ResponsiveContainer>
          </Reveal>

          <Reveal delay={0.6} className="rounded-2xl border border-gray-100 bg-white p-5">
            <p className="mb-1 text-sm font-semibold text-gray-900">Acessos por Hora</p>
            <p className="mb-4 text-xs text-gray-400">Hoje</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={hourlyAccess}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F5F5F5" />
                <XAxis dataKey="hour" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: "#999" }} interval={3} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#999" }} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="acessos" stroke="#111111" strokeWidth={2} dot={false} name="Acessos" />
              </LineChart>
            </ResponsiveContainer>
          </Reveal>

          <Reveal delay={0.7} className="rounded-2xl border border-gray-100 bg-white p-5">
            <p className="mb-1 text-sm font-semibold text-gray-900">Funil de Conversão</p>
            <p className="mb-4 text-xs text-gray-400">Da visita à compra</p>
            <div className="space-y-2">
              {conversionFunnel.map((stage, i) => (
                <div key={stage.stage}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-gray-600">{stage.stage}</span>
                    <span className="font-medium text-gray-900">{formatNumber(stage.count)}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stage.percentual}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                      className="h-full rounded-full bg-gray-900"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal delay={0.8} className="rounded-2xl border border-gray-100 bg-white p-5">
            <div className="mb-4 flex items-center gap-2">
              <Lightbulb size={16} className="text-gray-900" />
              <p className="text-sm font-semibold text-gray-900">Insights da Semana</p>
            </div>
            <div className="min-h-[140px] space-y-2">
              {insights.map((insight, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: activeInsight === i ? 1 : 0.4 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "flex items-start gap-3 rounded-xl p-3 transition-colors",
                    activeInsight === i && "bg-gray-50"
                  )}
                >
                  <div
                    className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", {
                      "bg-green-500": insight.type === "positive",
                      "bg-yellow-500": insight.type === "warning",
                      "bg-blue-500": insight.type === "insight",
                      "bg-gray-400": insight.type === "neutral",
                    })}
                  />
                  <p className="text-sm text-gray-700">{insight.text}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.9} className="rounded-2xl border border-gray-100 bg-white p-5">
            <div className="mb-4 flex items-center gap-2">
              <Activity size={16} className="text-gray-900" />
              <p className="text-sm font-semibold text-gray-900">Produtos em Alta</p>
            </div>
            <div className="space-y-3">
              {topProducts.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, transform: "translateY(10px)" }}
                  whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-4 text-xs text-gray-400">{i + 1}</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900">{product.name}</p>
                    <p className="text-xs text-gray-400">{formatNumber(product.views)} visualizações</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    {product.trend === "up" ? (
                      <ArrowUpRight size={12} className="text-green-500" />
                    ) : (
                      <ArrowDownRight size={12} className="text-red-400" />
                    )}
                    <span className="text-xs font-medium text-gray-900">{product.conversions}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
