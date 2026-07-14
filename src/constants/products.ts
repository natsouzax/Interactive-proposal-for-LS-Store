export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors: string[];
  sizes: string[];
  brand: string;
  badge?: string;
}

export const categories = [
  "Todos",
  "Camisas",
  "Calças",
  "Tênis",
  "Acessórios",
  "Vestidos",
  "Jaquetas",
] as const;

export const brands = ["LS Store", "Nike", "Adidas", "Zara", "Hering", "Reserva"] as const;

export const products: Product[] = [
  {
    id: "1",
    name: "Camisa Oxford Premium",
    category: "Camisas",
    price: 189.9,
    originalPrice: 249.9,
    image: "👔",
    colors: ["#FFFFFF", "#111111", "#4A90D9"],
    sizes: ["P", "M", "G", "GG"],
    brand: "LS Store",
    badge: "Novo",
  },
  {
    id: "2",
    name: "Calça Slim Comfort",
    category: "Calças",
    price: 229.9,
    image: "👖",
    colors: ["#111111", "#333333", "#555555"],
    sizes: ["38", "40", "42", "44"],
    brand: "LS Store",
  },
  {
    id: "3",
    name: "Tênis Urban Run",
    category: "Tênis",
    price: 349.9,
    originalPrice: 449.9,
    image: "👟",
    colors: ["#FFFFFF", "#111111", "#E74C3C"],
    sizes: ["38", "39", "40", "41", "42", "43"],
    brand: "Nike",
    badge: "Promo",
  },
  {
    id: "4",
    name: "Boné Classic Logo",
    category: "Acessórios",
    price: 79.9,
    image: "🧢",
    colors: ["#111111", "#FFFFFF", "#444444"],
    sizes: ["Único"],
    brand: "LS Store",
  },
  {
    id: "5",
    name: "Vestido Flow Midi",
    category: "Vestidos",
    price: 279.9,
    image: "👗",
    colors: ["#111111", "#D4A574", "#FFFFFF"],
    sizes: ["P", "M", "G"],
    brand: "Zara",
  },
  {
    id: "6",
    name: "Jaqueta Bomber Premium",
    category: "Jaquetas",
    price: 399.9,
    originalPrice: 499.9,
    image: "🧥",
    colors: ["#111111", "#2D5016", "#4A3728"],
    sizes: ["M", "G", "GG"],
    brand: "Reserva",
    badge: "Novo",
  },
  {
    id: "7",
    name: "Camiseta Básica Pima",
    category: "Camisas",
    price: 89.9,
    image: "👕",
    colors: ["#FFFFFF", "#111111", "#999999", "#C4A882"],
    sizes: ["P", "M", "G", "GG", "XG"],
    brand: "Hering",
  },
  {
    id: "8",
    name: "Tênis Classic Leather",
    category: "Tênis",
    price: 549.9,
    image: "👟",
    colors: ["#FFFFFF", "#111111", "#8B7355"],
    sizes: ["39", "40", "41", "42", "43"],
    brand: "Adidas",
  },
];

export const fashionOutfits: Record<string, { name: string; emoji: string; price: number }[]> = {
  Casual: [
    { name: "Camiseta Básica Pima", emoji: "👕", price: 89.9 },
    { name: "Calça Slim Comfort", emoji: "👖", price: 229.9 },
    { name: "Tênis Urban Run", emoji: "👟", price: 349.9 },
    { name: "Boné Classic Logo", emoji: "🧢", price: 79.9 },
  ],
  Trabalho: [
    { name: "Camisa Oxford Premium", emoji: "👔", price: 189.9 },
    { name: "Calça Slim Comfort", emoji: "👖", price: 229.9 },
    { name: "Tênis Classic Leather", emoji: "👟", price: 549.9 },
    { name: "Jaqueta Bomber Premium", emoji: "🧥", price: 399.9 },
  ],
  Festa: [
    { name: "Vestido Flow Midi", emoji: "👗", price: 279.9 },
    { name: "Tênis Classic Leather", emoji: "👟", price: 549.9 },
    { name: "Boné Classic Logo", emoji: "🧢", price: 79.9 },
    { name: "Jaqueta Bomber Premium", emoji: "🧥", price: 399.9 },
  ],
  Academia: [
    { name: "Camiseta Básica Pima", emoji: "👕", price: 89.9 },
    { name: "Calça Slim Comfort", emoji: "👖", price: 229.9 },
    { name: "Tênis Urban Run", emoji: "👟", price: 349.9 },
    { name: "Boné Classic Logo", emoji: "🧢", price: 79.9 },
  ],
};
