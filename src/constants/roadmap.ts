import {
  Search,
  BarChart3,
  Bot,
  Users,
  Brain,
  Heart,
  CreditCard,
  Settings,
  Store,
  Smartphone,
  Globe,
  Layers,
  type LucideIcon,
} from "lucide-react";

export const visionSteps: {
  icon: LucideIcon;
  label: string;
  desc: string;
  active?: boolean;
}[] = [
  { icon: Search, label: "Hoje", desc: "Plataforma Base", active: true },
  { icon: Store, label: "Catálogo Inteligente", desc: "Busca, filtros, IA" },
  { icon: BarChart3, label: "LS Vision", desc: "Dashboard BI completo" },
  { icon: Bot, label: "LS Match", desc: "Auxiliar de Moda IA" },
  { icon: Brain, label: "IA Generativa", desc: "Conteúdo automático" },
  { icon: Users, label: "CRM", desc: "Gestão de clientes" },
  { icon: Heart, label: "Fidelidade", desc: "Programa de pontos" },
  { icon: CreditCard, label: "Pagamentos", desc: "Checkout online" },
  { icon: Settings, label: "ERP", desc: "Gestão completa" },
  { icon: Globe, label: "Marketplace", desc: "Multi-vendedor" },
  { icon: Smartphone, label: "Aplicativo", desc: "Mobile nativo" },
  { icon: Layers, label: "Multi-Lojas", desc: "Plataforma escalável" },
];
