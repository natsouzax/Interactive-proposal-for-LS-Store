import {
  Camera,
  MessageCircle,
  Clock,
  UserX,
  Globe,
  Search,
  Bot,
  Shirt,
  Phone,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";

export type FlowStep = { icon: LucideIcon; label: string; color: string };

export const antesSteps: FlowStep[] = [
  { icon: Camera, label: "Instagram", color: "text-pink-500" },
  { icon: MessageCircle, label: "Perguntas", color: "text-gray-400" },
  { icon: Clock, label: "Espera", color: "text-yellow-500" },
  { icon: UserX, label: "Cliente desiste", color: "text-red-400" },
];

export const depoisSteps: FlowStep[] = [
  { icon: Globe, label: "Site", color: "text-gray-900" },
  { icon: Search, label: "Catálogo", color: "text-gray-900" },
  { icon: Bot, label: "IA", color: "text-gray-900" },
  { icon: Shirt, label: "Pedido", color: "text-gray-900" },
  { icon: Phone, label: "WhatsApp", color: "text-green-500" },
  { icon: CheckCircle, label: "Venda", color: "text-gray-900" },
];
