export const occasions = [
  { id: "Casual", emoji: "😎", label: "Casual" },
  { id: "Trabalho", emoji: "💼", label: "Trabalho" },
  { id: "Festa", emoji: "🎉", label: "Festa" },
  { id: "Academia", emoji: "🏋️", label: "Academia" },
];

export const styles = [
  { id: "Minimalista", emoji: "◼️", label: "Minimalista" },
  { id: "Street", emoji: "🛹", label: "Street" },
  { id: "Classico", emoji: "🎩", label: "Clássico" },
  { id: "Esportivo", emoji: "⚡", label: "Esportivo" },
];

export const prices = [
  { id: "economico", label: "Até R$ 300", emoji: "💰" },
  { id: "medio", label: "R$ 300 – R$ 600", emoji: "💳" },
  { id: "premium", label: "Acima de R$ 600", emoji: "💎" },
];

export const auxiliarModaSteps = [
  { key: "occasion", label: "Ocasião", num: 1 },
  { key: "style", label: "Estilo", num: 2 },
  { key: "price", label: "Faixa", num: 3 },
  { key: "result", label: "Look", num: 4 },
] as const;
