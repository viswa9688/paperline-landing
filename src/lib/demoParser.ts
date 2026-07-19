export interface LineItem {
  description: string;
  quantity: number;
  rate: number;
}

export interface ParsedDocument {
  type: "Invoice" | "Quote" | "Receipt";
  client: string;
  lineItems: LineItem[];
  dueDays: number;
  currency: string;
  notes: string;
}

const DEFAULT_DOCUMENT: ParsedDocument = {
  type: "Invoice",
  client: "Acme Corporation",
  lineItems: [
    { description: "Consulting services", quantity: 10, rate: 150 },
  ],
  dueDays: 30,
  currency: "$",
  notes: "Thank you for your business.",
};

function detectType(input: string): ParsedDocument["type"] {
  const lower = input.toLowerCase();
  if (/\b(receipt|payment received|paid)\b/.test(lower)) return "Receipt";
  if (/\b(quote|estimate|proposal)\b/.test(lower)) return "Quote";
  return "Invoice";
}

function detectClient(input: string): string | null {
  const patterns = [
    /(?:invoice|quote|receipt|bill)\s+(?:for\s+)?([A-Z][A-Za-z0-9\s&'.-]{2,40}?)(?:\s+for|\s+at|\s*—|\s*-|,|\.|$)/i,
    /(?:for|from|to)\s+([A-Z][A-Za-z0-9\s&'.-]{2,40}?)(?:\s+for|\s+at|\s*—|,|\.|$)/i,
    /(?:client|customer):\s*([A-Za-z0-9\s&'.-]{2,40})/i,
  ];

  for (const pattern of patterns) {
    const match = input.match(pattern);
    if (match?.[1]) {
      return match[1].trim().replace(/\s+/g, " ");
    }
  }

  return null;
}

function detectCurrency(input: string): string {
  if (/€|eur/i.test(input)) return "€";
  if (/£|gbp/i.test(input)) return "£";
  return "$";
}

function detectDueDays(input: string): number {
  const match = input.match(/due\s+in\s+(\d+)\s+days?/i);
  if (match?.[1]) return Number.parseInt(match[1], 10);

  const netMatch = input.match(/net\s+(\d+)/i);
  if (netMatch?.[1]) return Number.parseInt(netMatch[1], 10);

  return 30;
}

function parseLineItems(input: string, currency: string): LineItem[] {
  const items: LineItem[] = [];

  const hourMatch = input.match(
    /(\d+(?:\.\d+)?)\s*hours?\s+(?:of\s+)?(.+?)\s+at\s+([€£$]?\d+(?:\.\d+)?)/i,
  );
  if (hourMatch) {
    items.push({
      description: hourMatch[2].trim(),
      quantity: Number.parseFloat(hourMatch[1]),
      rate: Number.parseFloat(hourMatch[3].replace(/[€£$]/, "")),
    });
  }

  const conceptMatch = input.matchAll(
    /(\d+)\s+(.+?)\s+at\s+([€£$]?\d+(?:\.\d+)?)\s*(?:each)?/gi,
  );
  for (const match of conceptMatch) {
    if (hourMatch && match[0] === hourMatch[0]) continue;
    items.push({
      description: match[2].trim(),
      quantity: Number.parseInt(match[1], 10),
      rate: Number.parseFloat(match[3].replace(/[€£$]/, "")),
    });
  }

  const flatMatch = input.match(/([€£$])(\d+(?:,\d{3})*(?:\.\d+)?)/);
  if (items.length === 0 && flatMatch) {
    items.push({
      description: "Professional services",
      quantity: 1,
      rate: Number.parseFloat(flatMatch[2].replace(/,/g, "")),
    });
  }

  if (items.length === 0) {
    return DEFAULT_DOCUMENT.lineItems;
  }

  void currency;
  return items;
}

export function parseDocumentInput(input: string): ParsedDocument {
  const trimmed = input.trim();
  if (!trimmed) return DEFAULT_DOCUMENT;

  const currency = detectCurrency(trimmed);
  const client = detectClient(trimmed) ?? DEFAULT_DOCUMENT.client;
  const type = detectType(trimmed);
  const dueDays = detectDueDays(trimmed);
  const lineItems = parseLineItems(trimmed, currency);

  const notes =
    type === "Receipt"
      ? "Payment confirmed. Thank you."
      : type === "Quote"
        ? "Valid for 30 days. 50% deposit required to begin."
        : "Thank you for your business.";

  return {
    type,
    client,
    lineItems,
    dueDays,
    currency,
    notes,
  };
}

export function formatMoney(currency: string, amount: number): string {
  return `${currency}${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function documentTotal(document: ParsedDocument): number {
  return document.lineItems.reduce(
    (sum, item) => sum + item.quantity * item.rate,
    0,
  );
}
