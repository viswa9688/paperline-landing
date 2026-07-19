import type { LucideIcon } from "lucide-react";
import {
  Archive,
  BarChart3,
  Building2,
  Coins,
  CreditCard,
  Database,
  Download,
  FileText,
  Globe,
  Keyboard,
  Languages,
  LayoutTemplate,
  Mail,
  Mic,
  Moon,
  Package,
  PenLine,
  Receipt,
  RefreshCw,
  Repeat,
  Shield,
  Sparkles,
  Upload,
  Users,
  WifiOff,
  Wand2,
} from "lucide-react";

export type FeatureCategory =
  | "Documents"
  | "Business"
  | "Design"
  | "Platform"
  | "Optional";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  category: FeatureCategory;
}

export const FEATURES: Feature[] = [
  {
    title: "Invoices",
    description: "Send polished invoices with line items, taxes, and payment terms.",
    icon: FileText,
    category: "Documents",
  },
  {
    title: "Quotes & Estimates",
    description: "Win work with professional quotes that convert to invoices in one click.",
    icon: PenLine,
    category: "Documents",
  },
  {
    title: "Purchase Orders",
    description: "Track what you're buying with formatted purchase orders.",
    icon: Package,
    category: "Documents",
  },
  {
    title: "Receipts",
    description: "Confirm payments with clean, branded receipts.",
    icon: Receipt,
    category: "Documents",
  },
  {
    title: "Credit Notes",
    description: "Handle refunds and adjustments without starting over.",
    icon: CreditCard,
    category: "Documents",
  },
  {
    title: "Recurring Invoices",
    description: "Set it once. Paperline sends on schedule — even offline.",
    icon: Repeat,
    category: "Documents",
  },
  {
    title: "Unlimited Documents",
    description: "No caps, no tiers. Create as many documents as your business needs.",
    icon: Archive,
    category: "Documents",
  },
  {
    title: "Customers & CRM",
    description: "Keep contacts, notes, and document history in one place.",
    icon: Users,
    category: "Business",
  },
  {
    title: "Products & Services",
    description: "Build a catalog you reuse across every document type.",
    icon: Package,
    category: "Business",
  },
  {
    title: "Payment Tracking",
    description: "See what's paid, overdue, or pending at a glance.",
    icon: Coins,
    category: "Business",
  },
  {
    title: "Reports & Analytics",
    description: "Revenue, outstanding balances, and tax summaries — instantly.",
    icon: BarChart3,
    category: "Business",
  },
  {
    title: "Multiple Companies",
    description: "Run separate businesses from one app with isolated data.",
    icon: Building2,
    category: "Business",
  },
  {
    title: "Multiple Currencies",
    description: "Bill international clients in their currency.",
    icon: Globe,
    category: "Business",
  },
  {
    title: "Tax Management",
    description: "US sales tax, UK VAT, and German MwSt — custom rates applied automatically.",
    icon: Receipt,
    category: "Business",
  },
  {
    title: "Beautiful PDF Templates",
    description: "Export documents that look as good on paper as on screen.",
    icon: LayoutTemplate,
    category: "Design",
  },
  {
    title: "Drag-and-Drop Document Designer",
    description: "Customize layouts like a design tool — logos, colors, typography.",
    icon: Wand2,
    category: "Design",
  },
  {
    title: "Email Reminders",
    description: "Nudge clients about overdue payments without leaving the app.",
    icon: Mail,
    category: "Design",
  },
  {
    title: "Import / Export",
    description: "Move data in and out freely. Your records, your format.",
    icon: Upload,
    category: "Design",
  },
  {
    title: "Offline First",
    description: "Works on a plane, in a café, or anywhere without Wi-Fi.",
    icon: WifiOff,
    category: "Platform",
  },
  {
    title: "SQLite Local Database",
    description: "Every record lives in a database file on your computer.",
    icon: Database,
    category: "Platform",
  },
  {
    title: "Backup & Restore",
    description: "Snapshot your entire business in one file. Restore in seconds.",
    icon: Download,
    category: "Platform",
  },
  {
    title: "Dark Mode",
    description: "Easy on the eyes during late-night work sessions.",
    icon: Moon,
    category: "Platform",
  },
  {
    title: "Keyboard Shortcuts",
    description: "Fly through documents without touching the mouse.",
    icon: Keyboard,
    category: "Platform",
  },
  {
    title: "Lifetime License",
    description: "Pay once. Use forever. No subscription required.",
    icon: Shield,
    category: "Platform",
  },
  {
    title: "Natural Language Commands",
    description: "Describe what you need in plain English and get a draft.",
    icon: Languages,
    category: "Optional",
  },
  {
    title: "Voice to Invoice",
    description: "Speak your line items and let Paperline fill in the details.",
    icon: Mic,
    category: "Optional",
  },
  {
    title: "Local AI",
    description: "Run models locally with Ollama or LM Studio — nothing leaves your machine.",
    icon: Sparkles,
    category: "Optional",
  },
  {
    title: "OpenAI / Claude Support",
    description: "Bring your own API key if you prefer cloud models.",
    icon: RefreshCw,
    category: "Optional",
  },
];

export const FEATURE_CATEGORIES: FeatureCategory[] = [
  "Documents",
  "Business",
  "Design",
  "Platform",
  "Optional",
];
