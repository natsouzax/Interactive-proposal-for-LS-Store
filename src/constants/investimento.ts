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

export const hourlyRate = 30;
export const estimatedHours = 100;
export const hoursPerDay = 4;
export const workDays = ["Seg", "Ter", "Qua", "Qui", "Sex"] as const;
export const regularPrice = hourlyRate * estimatedHours;
export const weeksEstimate = estimatedHours / (hoursPerDay * workDays.length);
