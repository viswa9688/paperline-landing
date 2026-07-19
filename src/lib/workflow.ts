import type { LucideIcon } from "lucide-react";
import {
  ArrowRightLeft,
  FileCheck,
  FileText,
  Handshake,
  Receipt,
  Wallet,
} from "lucide-react";

export interface WorkflowStep {
  label: string;
  description: string;
  icon: LucideIcon;
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    label: "Lead",
    description: "Capture a new opportunity.",
    icon: Handshake,
  },
  {
    label: "Proposal",
    description: "Outline scope and pricing.",
    icon: FileText,
  },
  {
    label: "Quote",
    description: "Send a formal estimate.",
    icon: FileCheck,
  },
  {
    label: "Invoice",
    description: "Bill for completed work.",
    icon: Wallet,
  },
  {
    label: "Payment",
    description: "Track what's received.",
    icon: ArrowRightLeft,
  },
  {
    label: "Receipt",
    description: "Confirm the transaction.",
    icon: Receipt,
  },
];
