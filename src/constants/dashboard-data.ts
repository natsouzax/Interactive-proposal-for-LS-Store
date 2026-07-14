export const kpiData = [
  { label: "Visitantes", value: 12847, prefix: "", suffix: "", icon: "Users" },
  { label: "Conversão", value: 4.7, prefix: "", suffix: "%", icon: "TrendingUp" },
  { label: "Ticket Médio", value: 287, prefix: "R$ ", suffix: "", icon: "DollarSign" },
  { label: "Produtos Vistos", value: 34521, prefix: "", suffix: "", icon: "Eye" },
  { label: "Carrinhos", value: 1893, prefix: "", suffix: "", icon: "ShoppingCart" },
  { label: "Pedidos", value: 604, prefix: "", suffix: "", icon: "Package" },
];

export const weeklySales = [
  { day: "Seg", vendas: 42, receita: 8400 },
  { day: "Ter", vendas: 38, receita: 7600 },
  { day: "Qua", vendas: 55, receita: 11000 },
  { day: "Qui", vendas: 47, receita: 9400 },
  { day: "Sex", vendas: 68, receita: 13600 },
  { day: "Sáb", vendas: 73, receita: 14600 },
  { day: "Dom", vendas: 31, receita: 6200 },
];

export const categoryPerformance = [
  { name: "Camisas", vendas: 187, percentual: 31 },
  { name: "Calças", vendas: 142, percentual: 23 },
  { name: "Tênis", vendas: 129, percentual: 21 },
  { name: "Acessórios", vendas: 89, percentual: 15 },
  { name: "Vestidos", vendas: 35, percentual: 6 },
  { name: "Jaquetas", vendas: 22, percentual: 4 },
];

export const topProducts = [
  { name: "Tênis Urban Run", views: 3420, conversions: 8.2, trend: "up" as const },
  { name: "Camisa Oxford Premium", views: 2891, conversions: 6.7, trend: "up" as const },
  { name: "Calça Slim Comfort", views: 2344, conversions: 5.9, trend: "up" as const },
  { name: "Vestido Flow Midi", views: 1876, conversions: 4.3, trend: "down" as const },
  { name: "Jaqueta Bomber", views: 1543, conversions: 3.8, trend: "up" as const },
];

export const trafficSource = [
  { name: "Instagram", value: 45 },
  { name: "Google", value: 25 },
  { name: "Direto", value: 15 },
  { name: "WhatsApp", value: 10 },
  { name: "Outros", value: 5 },
];

export const hourlyAccess = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i.toString().padStart(2, "0")}h`,
  acessos:
    40 +
    ((i * 37 + 83) % 120) +
    (i >= 9 && i <= 22 ? 150 : 20) +
    (i >= 12 && i <= 14 ? 100 : 0) +
    (i >= 19 && i <= 21 ? 180 : 0),
}));

export const conversionFunnel = [
  { stage: "Visitantes", count: 12847, percentual: 100 },
  { stage: "Visualizaram Produto", count: 8432, percentual: 65.6 },
  { stage: "Adicionaram ao Carrinho", count: 1893, percentual: 14.7 },
  { stage: "Iniciaram Checkout", count: 943, percentual: 7.3 },
  { stage: "Completaram Compra", count: 604, percentual: 4.7 },
];

export const chatResponses: Record<string, string> = {
  "Produtos com menor conversão":
    "📊 Análise dos dados revela que Vestidos (4.3% de conversão) e Jaquetas (3.8%) estão com desempenho abaixo da média. Sugestão: revisar preços e criar combos com produtos de alta performance para aumentar o ticket médio.",
  "Qual categoria vende mais":
    "🏆 Camisas lideram com 31% das vendas (187 unidades), seguidas por Calças (23%) e Tênis (21%). Recomendação: expandir o catálogo de Camisas com novos estilos e cores da temporada.",
  "Melhor horário para anunciar":
    "⏰ Pico de acessos entre 19h e 21h, com segundo pico ao meio-dia. Recomendação: programar campanhas para 11h30 e 18h30, com foco em Instagram (45% do tráfego). Segunda e sexta geram 35% mais engajamento.",
  "O que colocar em promoção":
    "🎯 Recomendo promocionar: 1) Vestidos Flow (estoque alto, baixa conversão) com 15% OFF, 2) Jaquetas Bomber com frete grátis, 3) Criar combo 'Look Completo' com Calça + Camisa com 10% de desconto. Projeção: aumento de 23% nas vendas.",
};
