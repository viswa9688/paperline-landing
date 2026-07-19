export const PRODUCT_NAME = "Paperline";

export const PRICING = {
  lifetime: 79,
  currency: "USD",
  guarantee: "30-day money-back guarantee",
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const PILLAR_BADGES = [
  "Offline First",
  "One Lifetime License",
  "Your Data Stays on Your Computer",
  "No Monthly Subscription",
] as const;

export const DEMO_PROMPTS = [
  "Invoice Acme Corp for 10 hours of consulting at $150/hr, due in 30 days",
  "Quote Northwind Design for 3 logo concepts at $800 each, 50% deposit",
  "Receipt for payment received from Meridian Studio — $2,400 for brand identity",
] as const;

export const SECTION_IDS = {
  demo: "demo",
  features: "features",
  workflow: "workflow",
  pricing: "pricing",
  faq: "faq",
} as const;
