import type { LucideIcon } from "lucide-react";
import {
  ArrowRightLeft,
  BarChart3,
  Coins,
  Download,
  HardDrive,
  Shield,
  Upload,
  Users,
  WifiOff,
} from "lucide-react";

export interface WorkflowItem {
  title: string;
  description: string;
}

export interface WorkflowGroup {
  id: string;
  title: string;
  lead: string;
  icon: LucideIcon;
  items: WorkflowItem[];
}

export const WORKFLOW_GROUPS: WorkflowGroup[] = [
  {
    id: "clients",
    title: "Clients",
    lead: "Every contact, note, and document history — in one calm place.",
    icon: Users,
    items: [
      {
        title: "Client profiles",
        description:
          "Store contacts, billing details, and notes so you never hunt through email again.",
      },
      {
        title: "Document history",
        description:
          "See every quote, invoice, and receipt you’ve sent — tied to the right person.",
      },
      {
        title: "Multiple companies",
        description:
          "Run separate brands or businesses without mixing up records.",
      },
      {
        title: "Products & services",
        description:
          "Save what you sell once, reuse it on the next document in seconds.",
      },
    ],
  },
  {
    id: "quotes-invoices",
    title: "Quotes → Invoices",
    lead: "Win the work, then bill for it — without retyping anything.",
    icon: ArrowRightLeft,
    items: [
      {
        title: "Quotes that convert",
        description:
          "Send polished estimates clients actually want to open — then turn them into invoices in one click.",
      },
      {
        title: "Invoices & receipts",
        description:
          "Line items, taxes, and payment terms handled. Receipts when money lands.",
      },
      {
        title: "Purchase orders & credit notes",
        description:
          "Track what you’re buying and handle adjustments without starting over.",
      },
      {
        title: "Recurring billing",
        description:
          "Set retainers and subscriptions once — Paperline remembers the schedule.",
      },
    ],
  },
  {
    id: "getting-paid",
    title: "Getting Paid",
    lead: "Know what’s owed, what’s late, and what landed — at a glance.",
    icon: Coins,
    items: [
      {
        title: "Payment tracking",
        description:
          "See paid, overdue, and pending without a spreadsheet.",
      },
      {
        title: "Friendly reminders",
        description:
          "Nudge clients about overdue invoices without awkward copy-paste.",
      },
      {
        title: "Taxes handled",
        description:
          "US sales tax, UK VAT, and German MwSt — applied the way you configured them.",
      },
      {
        title: "Multi-currency",
        description:
          "Bill international clients in their currency, keep your books clear.",
      },
    ],
  },
  {
    id: "business-overview",
    title: "Business Overview",
    lead: "A clear picture of how the business is doing — without exporting to Excel.",
    icon: BarChart3,
    items: [
      {
        title: "Revenue at a glance",
        description:
          "See what you’ve earned, what’s outstanding, and what’s overdue.",
      },
      {
        title: "Reports you’ll use",
        description:
          "Summaries that help at tax time and client reviews — not vanity charts.",
      },
      {
        title: "Beautiful exports",
        description:
          "PDFs and templates that look as good attached to an email as on screen.",
      },
      {
        title: "Your document designer",
        description:
          "Match your brand — logo, colors, typography — like a design tool, not a form.",
      },
    ],
  },
];

export const PRIVACY_OWNERSHIP_ITEMS: WorkflowItem[] = [
  {
    title: "Your data stays on your computer",
    description:
      "No cloud account. No one else holds your client list or invoices — they live on your machine.",
  },
  {
    title: "Works without Wi-Fi",
    description:
      "On a plane, at a job site, or when the connection drops — keep working.",
  },
  {
    title: "Backup anywhere, anytime",
    description:
      "Save a full snapshot to a drive, USB stick, or storage you already trust. Restore in minutes.",
  },
  {
    title: "Export on your terms",
    description:
      "Move data in and out freely. Leave anytime — your records come with you.",
  },
  {
    title: "Pay once, yours forever",
    description:
      "No subscription. No annual renewal. Unlock export when you’re ready — then it’s yours.",
  },
];

export const PRIVACY_ICONS: LucideIcon[] = [
  Shield,
  WifiOff,
  HardDrive,
  Upload,
  Download,
];

/** Below-the-fold optional assistant — plain language only */
export const OPTIONAL_ASSISTANT_MODES = [
  { label: "Off", description: "Create documents yourself. Always available." },
  { label: "On your machine", description: "Optional drafting help that never sends data elsewhere." },
  { label: "Your API key", description: "Connect a service you already use — only if you want to." },
] as const;

/** Legacy re-exports for any remaining imports */
export const FEATURES = WORKFLOW_GROUPS.flatMap((group) =>
  group.items.map((item) => ({
    title: item.title,
    description: item.description,
    icon: group.icon,
    category: group.title,
  })),
);
