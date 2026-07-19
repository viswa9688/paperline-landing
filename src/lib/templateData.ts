export interface LineItem {
  description: string;
  quantity: number;
  rate: number;
}

export interface TemplateInvoice {
  id: string;
  name: string;
  style: string;
  company: {
    name: string;
    tagline?: string;
    address: string;
    email: string;
    phone?: string;
    initials: string;
    brandColor: string;
  };
  client: {
    name: string;
    contact?: string;
    address: string;
    email: string;
  };
  invoiceNumber: string;
  date: string;
  dueDate: string;
  lineItems: LineItem[];
  taxRate: number;
  taxLabel: string;
  notes: string;
  paymentTerms: string;
  bankDetails?: string;
  signatureName?: string;
  signatureTitle?: string;
}

function total(items: LineItem[]) {
  return items.reduce((sum, item) => sum + item.quantity * item.rate, 0);
}

export function templateSubtotal(invoice: TemplateInvoice) {
  return total(invoice.lineItems);
}

export function templateTax(invoice: TemplateInvoice) {
  return templateSubtotal(invoice) * invoice.taxRate;
}

export function templateGrandTotal(invoice: TemplateInvoice) {
  return templateSubtotal(invoice) + templateTax(invoice);
}

export function formatUsd(amount: number) {
  return `$${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

/** Five premium templates — US, UK, EU, Germany */
export const TEMPLATE_INVOICES: TemplateInvoice[] = [
  {
    id: "modern-saas",
    name: "Silicon",
    style: "Clean US SaaS — sidebar accent, rounded panels",
    company: {
      name: "Northflow",
      tagline: "Analytics for modern teams",
      address: "548 Market St, San Francisco, CA 94104",
      email: "billing@northflow.io",
      phone: "+1 (415) 555-0192",
      initials: "NF",
      brandColor: "#2563EB",
    },
    client: {
      name: "Beacon Health Inc.",
      contact: "Sarah Chen, VP Operations",
      address: "200 Park Ave, New York, NY 10166",
      email: "ap@beaconhealth.com",
    },
    invoiceNumber: "NF-2026-0312",
    date: "July 8, 2026",
    dueDate: "August 7, 2026",
    lineItems: [
      { description: "Northflow Pro — Annual (50 seats)", quantity: 1, rate: 18000 },
      { description: "Implementation & onboarding", quantity: 1, rate: 3500 },
    ],
    taxRate: 0,
    taxLabel: "Tax",
    notes: "Questions? billing@northflow.io",
    paymentTerms: "Due upon receipt",
    bankDetails: "Mercury · Routing 021000021 · Acct 8291047263",
  },
  {
    id: "corporate-blue",
    name: "Meridian",
    style: "UK corporate — structured header, formal grid",
    company: {
      name: "Meridian Consulting Group",
      address: "1 Canada Square, London E14 5AB",
      email: "invoices@meridianconsulting.co.uk",
      phone: "+44 20 7946 0958",
      initials: "MCG",
      brandColor: "#1E40AF",
    },
    client: {
      name: "Global Retail Partners Ltd",
      contact: "James Whitfield, CFO",
      address: "25 Old Broad Street, London EC2N 1HQ",
      email: "accounts@globalretail.co.uk",
    },
    invoiceNumber: "MCG-INV-7821",
    date: "01 July 2026",
    dueDate: "31 July 2026",
    lineItems: [
      { description: "Q2 Strategy advisory retainer", quantity: 1, rate: 45000 },
      { description: "Market expansion analysis", quantity: 1, rate: 12500 },
    ],
    taxRate: 0.2,
    taxLabel: "VAT 20%",
    notes: "PO Reference: GRP-2026-Q2-441",
    paymentTerms: "Net 30 · BACS preferred",
    bankDetails: "Barclays · Sort 20-00-00 · Acct 33445566",
    signatureName: "Eleanor Price",
    signatureTitle: "Accounts Director",
  },
  {
    id: "elegant-serif",
    name: "Whitmore",
    style: "Classic UK serif — centered masthead, refined rules",
    company: {
      name: "Whitmore & Associates",
      address: "44 Bedford Row, London WC1R 4LL",
      email: "accounts@whitmoreassociates.co.uk",
      phone: "+44 20 7242 4985",
      initials: "W&A",
      brandColor: "#44403C",
    },
    client: {
      name: "The Pembroke Trust",
      contact: "Lady Catherine Pembroke",
      address: "Pembroke Hall, Oxford OX1 4BH",
      email: "administrator@pembroketrust.org",
    },
    invoiceNumber: "WA/2026/117",
    date: "10 July 2026",
    dueDate: "9 August 2026",
    lineItems: [
      { description: "Trust administration — Q2 2026", quantity: 1, rate: 6800 },
      { description: "Charitable disbursement processing", quantity: 14, rate: 95 },
    ],
    taxRate: 0.2,
    taxLabel: "VAT 20%",
    notes: "Please quote invoice number with payment.",
    paymentTerms: "Strictly net 30 days",
    signatureName: "Richard Whitmore",
    signatureTitle: "Senior Partner",
  },
  {
    id: "german-minimal",
    name: "Hartmann",
    style: "German minimal — DIN clarity, generous whitespace",
    company: {
      name: "Hartmann Design GmbH",
      tagline: "Brand & Communication",
      address: "Torstraße 102, 10119 Berlin",
      email: "rechnung@hartmann-design.de",
      phone: "+49 30 5557 0192",
      initials: "HD",
      brandColor: "#1E3A5F",
    },
    client: {
      name: "Weber Textil AG",
      contact: "Klaus Weber, Einkauf",
      address: "Leopoldstraße 88, 80802 München",
      email: "einkauf@weber-textil.de",
    },
    invoiceNumber: "RE-2026-0847",
    date: "18.07.2026",
    dueDate: "17.08.2026",
    lineItems: [
      { description: "Packaging design — Spring collection", quantity: 1, rate: 4200 },
      { description: "Brand guidelines & asset library", quantity: 1, rate: 1800 },
    ],
    taxRate: 0.19,
    taxLabel: "MwSt 19%",
    notes: "Bitte geben Sie die Rechnungsnummer bei der Überweisung an.",
    paymentTerms: "Zahlbar innerhalb 30 Tagen netto",
    bankDetails: "Deutsche Bank · IBAN DE89 3704 0044 0532 0130 00",
  },
  {
    id: "luxury-black-gold",
    name: "Laurent",
    style: "EU luxury — dark canvas, gold accents, serif elegance",
    company: {
      name: "Maison Laurent",
      tagline: "Private client advisory",
      address: "12 Place Vendôme, 75001 Paris",
      email: "concierge@maisonlaurent.fr",
      phone: "+33 1 42 86 00 00",
      initials: "ML",
      brandColor: "#C9A962",
    },
    client: {
      name: "The Ashford Collection",
      contact: "Victoria Ashford",
      address: "Belgravia House, London SW1W 8BD",
      email: "v.ashford@ashfordcollection.com",
    },
    invoiceNumber: "ML-26-004",
    date: "20 July 2026",
    dueDate: "19 August 2026",
    lineItems: [
      { description: "Estate acquisition advisory", quantity: 1, rate: 85000 },
      { description: "Due diligence coordination", quantity: 1, rate: 22000 },
    ],
    taxRate: 0.2,
    taxLabel: "TVA 20%",
    notes: "Confidential — for addressee only.",
    paymentTerms: "Wire transfer within 30 days",
    signatureName: "Henri Laurent",
    signatureTitle: "Managing Partner",
  },
];

export type TemplateId = (typeof TEMPLATE_INVOICES)[number]["id"];
