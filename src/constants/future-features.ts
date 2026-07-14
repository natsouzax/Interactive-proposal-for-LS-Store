import {
  Brain,
  Heart,
  Users,
  Smartphone,
  Settings,
  BarChart3,
  Mail,
  CreditCard,
  type LucideIcon,
} from "lucide-react";

export const futureFeatures: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Brain,
    title: "IA Generativa",
    desc: "Descrições de produto, conteúdo e recomendações criadas automaticamente.",
  },
  {
    icon: Heart,
    title: "Programa de Fidelidade",
    desc: "Pontos, recompensas e engajamento contínuo com seus clientes.",
  },
  {
    icon: Users,
    title: "CRM Inteligente",
    desc: "Histórico de compras, preferências e comunicação personalizada.",
  },
  {
    icon: Smartphone,
    title: "Aplicativo Mobile",
    desc: "Experiência nativa para iOS e Android com push notifications.",
  },
  {
    icon: Settings,
    title: "ERP Integrado",
    desc: "Gestão de estoque, fornecedores e financeiro em um só lugar.",
  },
  {
    icon: BarChart3,
    title: "Analytics Avançado",
    desc: "Métricas preditivas, cohort analysis e machine learning.",
  },
  {
    icon: Mail,
    title: "Marketing Automation",
    desc: "Campanhas automáticas, segmentação e remarketing inteligente.",
  },
  {
    icon: CreditCard,
    title: "Pagamentos Online",
    desc: "Checkout integrado, PIX, cartão e boleto em segundos.",
  },
];
