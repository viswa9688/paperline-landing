import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Building,
  Camera,
  Compass,
  PenTool,
  Users,
} from "lucide-react";

export interface Audience {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const AUDIENCES: Audience[] = [
  {
    title: "Freelancers",
    description: "Send polished documents without monthly overhead.",
    icon: PenTool,
  },
  {
    title: "Agencies",
    description: "Manage multiple clients and companies from one place.",
    icon: Users,
  },
  {
    title: "Consultants",
    description: "Quotes to invoices to receipts in one workflow.",
    icon: Briefcase,
  },
  {
    title: "Architects",
    description: "Professional estimates and purchase orders, beautifully formatted.",
    icon: Compass,
  },
  {
    title: "Creators",
    description: "Invoices and receipts that match your brand.",
    icon: Camera,
  },
  {
    title: "Small Businesses",
    description: "Everything your business sends — without a subscription.",
    icon: Building,
  },
];
