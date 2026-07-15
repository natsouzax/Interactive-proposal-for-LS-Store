export const developmentFeatures: { text: string }[] = [
  { text: "Plataforma Completa" },
  { text: "Catálogo Inteligente" },
  { text: "LS Vision — Dashboard BI" },
  { text: "Painel Administrativo" },
  { text: "WhatsApp Inteligente" },
  { text: "LS Match — Auxiliar de Moda MVP" },
  { text: "SEO Otimizado" },
  { text: "Performance Extrema" },
  { text: "Responsividade Total" },
];

export const maintenanceFeatures = [
  "Hospedagem Premium",
  "Backups Diários",
  "Monitoramento 24/7",
  "Atualizações Contínuas",
  "Correções de Bugs",
  "Pequenas Melhorias",
];

export const investmentPlans = {
  development: {
    price: "R$ 2.500",
    label: "Investimento único",
  },
  maintenance: {
    price: "R$ 200",
    period: "/mês",
    label: "Mensal, cancele quando quiser",
  },
};

export const hourlyRate = 40;
export const estimatedHours = 80;
export const regularPrice = hourlyRate * estimatedHours;

export const developmentDays = 20;
export const developmentDeadlineNote =
  "Contados a partir da aprovação da proposta e do recebimento de todo o material necessário (logo, identidade visual, informações da empresa, catálogo de produtos, fotos e demais conteúdos).";

export const deliveryWeeks = [
  {
    week: 1,
    description: "Planejamento, UX/UI, arquitetura e identidade visual.",
  },
  {
    week: 2,
    description: "Desenvolvimento do site, catálogo inteligente e painel administrativo.",
  },
  {
    week: 3,
    description:
      "Dashboard (BI), integrações, testes, responsividade, otimizações e publicação.",
  },
];
