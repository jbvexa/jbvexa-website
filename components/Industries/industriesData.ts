import {
  Car,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
  GraduationCap,
  Building2,
  type LucideIcon,
} from "lucide-react";

export interface Industry {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const industries: Industry[] = [
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Smart manufacturing, production analytics and industrial automation.",
  },
  {
    icon: Car,
    title: "Automotive",
    description:
      "Dealer analytics, connected mobility and digital automotive platforms.",
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
    description:
      "Secure digital banking, analytics, governance and compliance.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Healthcare platforms, patient analytics and secure digital systems.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Commerce",
    description:
      "Customer analytics, inventory optimization and digital commerce.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Supply chain visibility, fleet management and warehouse analytics.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Digital learning platforms, student analytics and online education.",
  },
  {
    icon: Building2,
    title: "Government",
    description:
      "Secure citizen services, digital governance and public sector modernization.",
  },
];