export const PRODUCT_NAME = "Paperline";

export const PRICING = {
  lifetime: 79,
  currency: "USD",
  guarantee: "30-day money-back guarantee",
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Our Story", href: "#story" },
  { label: "FAQ", href: "#faq" },
] as const;

export const PILLAR_BADGES = [
  "Your data stays on your computer",
  "Works without Wi-Fi",
  "Backup anywhere, anytime",
  "No monthly bill",
] as const;

export const DEMO_PROMPTS = [
  "Invoice Acme Corp for 10 hours of consulting at $150/hr, due in 30 days",
  "Quote Northwind Design for 3 logo concepts at $800 each, 50% deposit",
  "Receipt for payment received from Meridian Studio — $2,400 for brand identity",
] as const;

export const SECTION_IDS = {
  demo: "demo",
  features: "features",
  pricing: "pricing",
  story: "story",
  roadmap: "roadmap",
  faq: "faq",
} as const;

/** Public feature board — swap when live */
export const ROADMAP_URL = "https://github.com/paperline-app/paperline/discussions/categories/ideas";

export const ROADMAP_ITEMS = {
  planned: [
    "Stripe payment links on invoices",
    "Bulk PDF export",
    "Client portal for quote approval",
  ],
  inProgress: [
    "Windows & Linux builds",
    "Import from FreshBooks & Wave",
  ],
  shipped: [
    "Quote → invoice in one click",
    "Five premium templates",
    "Offline-first desktop app",
  ],
} as const;
