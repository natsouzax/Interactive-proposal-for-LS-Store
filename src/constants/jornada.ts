import {
  Camera,
  Globe,
  Search,
  Bot,
  Shirt,
  ShoppingCart,
  Phone,
  CreditCard,
  type LucideIcon,
} from "lucide-react";

export const journeySteps: { icon: LucideIcon; label: string; desc: string }[] = [
  { icon: Camera, label: "Instagram", desc: "Descoberta" },
  { icon: Globe, label: "Site", desc: "Navegação" },
  { icon: Search, label: "Explorar", desc: "Busca" },
  { icon: Bot, label: "IA", desc: "Recomendação" },
  { icon: Shirt, label: "Outfit", desc: "Look" },
  { icon: ShoppingCart, label: "Carrinho", desc: "Seleção" },
  { icon: Phone, label: "WhatsApp", desc: "Contato" },
  { icon: CreditCard, label: "Compra", desc: "Conversão" },
];
