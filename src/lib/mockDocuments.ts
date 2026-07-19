export interface MockLineItem {
  description: string;
  detail?: string;
  quantity: number;
  rate: number;
}

export interface MockDocument {
  type: "Invoice" | "Quote" | "Purchase Order" | "Receipt";
  number: string;
  status: "Draft" | "Sent" | "Paid";
  date: string;
  dueDate: string;
  from: {
    name: string;
    tagline?: string;
    address: string;
    email: string;
    phone?: string;
    initials: string;
    color: string;
  };
  to: {
    name: string;
    contact?: string;
    address: string;
    email: string;
  };
  lineItems: MockLineItem[];
  taxRate: number;
  taxLabel: string;
  notes: string;
  paymentTerms: string;
  bankDetails?: string;
}

export function docSubtotal(doc: MockDocument) {
  return doc.lineItems.reduce((s, i) => s + i.quantity * i.rate, 0);
}

export function docTax(doc: MockDocument) {
  return docSubtotal(doc) * doc.taxRate;
}

export function docTotal(doc: MockDocument) {
  return docSubtotal(doc) + docTax(doc);
}

export function fmtUsd(n: number) {
  return `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export const APP_MOCK_DOCUMENTS: MockDocument[] = [
  {
    type: "Invoice",
    number: "INV-1042",
    status: "Sent",
    date: "July 20, 2026",
    dueDate: "August 19, 2026",
    from: {
      name: "Paperline Studio",
      tagline: "Design & Strategy",
      address: "548 Market St, Suite 320, San Francisco, CA 94104",
      email: "hello@paperline.app",
      phone: "+1 (415) 555-0142",
      initials: "PS",
      color: "#2563EB",
    },
    to: {
      name: "Acme Corporation",
      contact: "Sarah Mitchell, Accounts Payable",
      address: "100 Main Street, Austin, TX 78701",
      email: "billing@acme.co",
    },
    lineItems: [
      { description: "Brand strategy & consulting", detail: "Q3 retainer — 10 hrs", quantity: 10, rate: 150 },
      { description: "Visual identity guidelines", detail: "Logo usage, color, typography", quantity: 1, rate: 800 },
      { description: "Presentation deck design", detail: "Investor pitch — 24 slides", quantity: 1, rate: 450 },
    ],
    taxRate: 0.1,
    taxLabel: "Sales Tax (10%)",
    notes: "Payment via bank transfer or ACH. Include invoice number in reference.",
    paymentTerms: "Net 30",
    bankDetails: "Chase Bank · Routing 322271627 · Account ****4821",
  },
  {
    type: "Quote",
    number: "QUO-2187",
    status: "Draft",
    date: "July 18, 2026",
    dueDate: "Valid until Aug 17, 2026",
    from: {
      name: "Paperline Studio",
      tagline: "Design & Strategy",
      address: "548 Market St, Suite 320, San Francisco, CA 94104",
      email: "hello@paperline.app",
      initials: "PS",
      color: "#2563EB",
    },
    to: {
      name: "Northwind Design Co.",
      contact: "James Park, Creative Director",
      address: "2200 Westlake Ave, Seattle, WA 98121",
      email: "james@northwind.design",
    },
    lineItems: [
      { description: "Logo concept exploration", detail: "3 unique directions", quantity: 3, rate: 800 },
      { description: "Brand moodboard & typography", detail: "2 revision rounds", quantity: 1, rate: 1200 },
      { description: "Social media starter kit", detail: "12 templates", quantity: 1, rate: 650 },
    ],
    taxRate: 0.1,
    taxLabel: "Sales Tax (10%)",
    notes: "50% deposit required to begin. Quote valid for 30 days.",
    paymentTerms: "50% deposit · 50% on delivery",
  },
  {
    type: "Purchase Order",
    number: "PO-0093",
    status: "Sent",
    date: "July 15, 2026",
    dueDate: "Delivery by Aug 1, 2026",
    from: {
      name: "Paperline Studio",
      address: "548 Market St, San Francisco, CA 94104",
      email: "procurement@paperline.app",
      initials: "PS",
      color: "#2563EB",
    },
    to: {
      name: "PrintCraft Supplies",
      contact: "Orders Department",
      address: "890 Industrial Blvd, Oakland, CA 94607",
      email: "orders@printcraft.com",
    },
    lineItems: [
      { description: "Premium letterhead stock A4", detail: "500 sheets, 120gsm", quantity: 2, rate: 89 },
      { description: "Embossed envelope #10", detail: "Pack of 250", quantity: 4, rate: 42 },
      { description: "Custom die-cut folders", detail: "100 units with logo", quantity: 1, rate: 340 },
    ],
    taxRate: 0.0875,
    taxLabel: "CA Sales Tax",
    notes: "Ship to Paperline Studio address. Reference PO-0093 on packing slip.",
    paymentTerms: "Net 15 upon delivery",
  },
  {
    type: "Receipt",
    number: "RCT-3301",
    status: "Paid",
    date: "July 12, 2026",
    dueDate: "Paid in full",
    from: {
      name: "Paperline Studio",
      address: "548 Market St, San Francisco, CA 94104",
      email: "hello@paperline.app",
      initials: "PS",
      color: "#16A34A",
    },
    to: {
      name: "Meridian Studio LLC",
      contact: "Alex Rivera",
      address: "45 Howard St, San Francisco, CA 94105",
      email: "alex@meridianstudio.com",
    },
    lineItems: [
      { description: "Website redesign — Phase 1", detail: "Payment received", quantity: 1, rate: 4800 },
    ],
    taxRate: 0,
    taxLabel: "Tax",
    notes: "Thank you! Payment received via wire transfer on July 12, 2026.",
    paymentTerms: "Paid · Ref #WR-8847291",
  },
];

export const DEMO_DEFAULT: MockDocument = APP_MOCK_DOCUMENTS[0];

export function parsedToMockDocument(
  parsed: {
    type: "Invoice" | "Quote" | "Receipt";
    client: string;
    lineItems: { description: string; quantity: number; rate: number }[];
    dueDays: number;
    currency: string;
    notes: string;
  },
): MockDocument {
  const isQuote = parsed.type === "Quote";
  const isReceipt = parsed.type === "Receipt";
  const base = { ...APP_MOCK_DOCUMENTS[isQuote ? 1 : isReceipt ? 3 : 0] };
  const due = new Date();
  due.setDate(due.getDate() + parsed.dueDays);

  return {
    ...base,
    type: isReceipt ? "Receipt" : isQuote ? "Quote" : "Invoice",
    number: isReceipt ? "RCT-DRAFT" : isQuote ? "QUO-DRAFT" : "INV-DRAFT",
    status: isReceipt ? "Paid" : "Draft",
    dueDate: isReceipt
      ? "Payment confirmed"
      : isQuote
        ? `Valid until ${due.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`
        : `Due ${due.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`,
    from: {
      ...base.from,
      color: isReceipt ? "#16A34A" : base.from.color,
    },
    to: {
      ...base.to,
      name: parsed.client,
    },
    lineItems: parsed.lineItems.map((item) => ({
      description: item.description,
      quantity: item.quantity,
      rate: item.rate,
    })),
    notes: parsed.notes,
  };
}
