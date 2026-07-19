import type { ReactNode } from "react";
import type { TemplateInvoice } from "../../lib/templateData";
import {
  formatUsd,
  templateGrandTotal,
  templateSubtotal,
  templateTax,
} from "../../lib/templateData";
import { QrWithLabel } from "../invoices/QrCode";

const BASE_W = 420;
const BASE_H = 600;

export function TemplateScaler({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children: ReactNode;
}) {
  const scale = Math.min(width / BASE_W, height / BASE_H);
  const scaledW = BASE_W * scale;
  const scaledH = BASE_H * scale;

  return (
    <div
      className="relative overflow-hidden bg-white"
      style={{ width, height }}
    >
      <div
        className="absolute overflow-hidden"
        style={{
          width: scaledW,
          height: scaledH,
          left: (width - scaledW) / 2,
          top: (height - scaledH) / 2,
        }}
      >
        <div
          style={{
            width: BASE_W,
            height: BASE_H,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function Logo({
  initials,
  color,
  className = "h-11 w-11 text-xs",
}: {
  initials: string;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl font-bold text-white ${className}`}
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
}

function ItemsTable({
  invoice,
  headClass = "border-zinc-200 text-zinc-400",
  rowClass = "border-zinc-100",
  headBg = "",
  dark = false,
  compact = false,
}: {
  invoice: TemplateInvoice;
  headClass?: string;
  rowClass?: string;
  headBg?: string;
  dark?: boolean;
  compact?: boolean;
}) {
  const text = dark ? "text-[#E7D5A8]" : "text-zinc-800";

  return (
    <table className={`w-full table-fixed ${text}`}>
      <colgroup>
        {compact ? (
          <>
            <col style={{ width: "54%" }} />
            <col style={{ width: "12%" }} />
            <col style={{ width: "34%" }} />
          </>
        ) : (
          <>
            <col style={{ width: "40%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "24%" }} />
            <col style={{ width: "26%" }} />
          </>
        )}
      </colgroup>
      <thead>
        <tr className={`border-b ${headBg} ${headClass}`}>
          <th className="px-3 pb-3 pt-1 text-left text-[9px] font-semibold tracking-wider uppercase">
            Description
          </th>
          <th className="px-2 pb-3 pt-1 text-right text-[9px] font-semibold tracking-wider uppercase">
            Qty
          </th>
          {!compact && (
            <th className="px-2 pb-3 pt-1 text-right text-[9px] font-semibold tracking-wider uppercase">
              Rate
            </th>
          )}
          <th className="px-3 pb-3 pt-1 text-right text-[9px] font-semibold tracking-wider uppercase">
            Amount
          </th>
        </tr>
      </thead>
      <tbody className="text-[10px]">
        {invoice.lineItems.map((item) => (
          <tr key={item.description} className={`border-b ${rowClass}`}>
            <td className="px-3 py-3.5 leading-snug">{item.description}</td>
            <td className="px-2 py-3.5 text-right tabular-nums">{item.quantity}</td>
            {!compact && (
              <td className="px-2 py-3.5 text-right tabular-nums">{formatUsd(item.rate)}</td>
            )}
            <td className="px-3 py-3.5 text-right font-semibold tabular-nums">
              {formatUsd(item.quantity * item.rate)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function TotalsBlock({
  invoice,
  className = "",
  dark = false,
  accent,
}: {
  invoice: TemplateInvoice;
  className?: string;
  dark?: boolean;
  accent?: string;
}) {
  const sub = templateSubtotal(invoice);
  const tax = templateTax(invoice);
  const total = templateGrandTotal(invoice);
  const muted = dark ? "text-white/65" : "text-zinc-500";
  const strong = dark ? "text-white" : "text-zinc-900";

  return (
    <div className={`shrink-0 space-y-2 text-[11px] ${className}`}>
      {invoice.taxRate > 0 && (
        <div className={`flex justify-between gap-6 ${muted}`}>
          <span>Subtotal</span>
          <span className="tabular-nums">{formatUsd(sub)}</span>
        </div>
      )}
      {invoice.taxRate > 0 && (
        <div className={`flex justify-between gap-6 ${muted}`}>
          <span>{invoice.taxLabel}</span>
          <span className="tabular-nums">{formatUsd(tax)}</span>
        </div>
      )}
      <div
        className={`flex justify-between gap-6 text-[12px] font-bold ${strong} ${
          invoice.taxRate > 0 ? "border-t pt-3" : ""
        }`}
        style={{
          borderColor: dark ? "rgba(255,255,255,0.15)" : "#e4e4e7",
          color: accent,
        }}
      >
        <span>Total</span>
        <span className="tabular-nums">{formatUsd(total)}</span>
      </div>
    </div>
  );
}

function MetaRow({
  label,
  value,
  muted = false,
}: {
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className={`flex justify-between gap-4 text-[11px] ${muted ? "text-zinc-500" : ""}`}>
      <span className="text-zinc-400">{label}</span>
      <span className="font-medium text-zinc-800">{value}</span>
    </div>
  );
}

export function DocumentTemplate({ invoice }: { invoice: TemplateInvoice }) {
  switch (invoice.id) {
    case "modern-saas":
      return (
        <div className="flex h-full w-full min-w-0 overflow-hidden font-sans">
          <aside className="flex w-[132px] shrink-0 flex-col gap-6 bg-[#2563EB] p-5 text-white">
            <Logo initials={invoice.company.initials} color="rgba(255,255,255,0.2)" />
            <div className="space-y-2">
              <p className="text-[13px] font-semibold leading-snug">{invoice.company.name}</p>
              <p className="text-[10px] leading-relaxed text-white/75">{invoice.company.tagline}</p>
            </div>
            <div className="mt-auto space-y-1 text-[10px] leading-relaxed text-white/60">
              <p>{invoice.company.email}</p>
              <p>{invoice.company.phone}</p>
            </div>
            <QrWithLabel size={48} layout="column" label="Scan to pay" sublabel="" labelClassName="text-white/55" />
          </aside>

          <main className="flex min-w-0 flex-1 flex-col gap-4 bg-zinc-50 p-5 text-zinc-900">
            <div className="flex min-w-0 items-start justify-between gap-3">
              <div>
                <p className="text-[9px] font-semibold tracking-wider text-zinc-400 uppercase">Invoice</p>
                <p className="mt-1 text-[15px] font-bold text-[#2563EB]">{invoice.invoiceNumber}</p>
              </div>
              <div className="text-right text-[10px] text-zinc-500">
                <p>{invoice.date}</p>
                <p className="mt-1">Due {invoice.dueDate}</p>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-100 bg-white p-4 shadow-sm">
              <p className="text-[9px] font-semibold tracking-wider text-zinc-400 uppercase">Bill to</p>
              <p className="mt-2 text-[12px] font-semibold">{invoice.client.name}</p>
              <p className="mt-0.5 text-[10px] text-zinc-500">{invoice.client.contact}</p>
              <p className="mt-1 text-[10px] text-zinc-400">{invoice.client.email}</p>
            </div>

            <div className="flex-1 overflow-hidden rounded-xl border border-zinc-100 bg-white shadow-sm">
              <ItemsTable
                invoice={invoice}
                compact
                headClass="border-zinc-100 text-zinc-400"
                headBg="bg-zinc-50/80"
              />
            </div>

            <div className="flex justify-end rounded-xl border border-zinc-100 bg-white p-3 shadow-sm">
              <TotalsBlock invoice={invoice} accent="#2563EB" />
            </div>
          </main>
        </div>
      );

    case "corporate-blue":
      return (
        <div className="flex h-full flex-col overflow-hidden font-sans text-zinc-900">
          <header className="bg-[#1E40AF] px-7 py-6 text-white">
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-1">
                <p className="text-[14px] font-bold">{invoice.company.name}</p>
                <p className="text-[10px] leading-relaxed text-blue-100">{invoice.company.address}</p>
                <p className="text-[10px] text-blue-200">{invoice.company.email}</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-semibold tracking-[0.2em] text-blue-200">TAX INVOICE</p>
                <p className="mt-2 font-mono text-[12px]">{invoice.invoiceNumber}</p>
              </div>
            </div>
          </header>

          <div className="flex flex-1 flex-col gap-5 p-6">
            <div className="grid grid-cols-2 gap-6 border-b border-zinc-200 pb-5">
              <div className="space-y-2">
                <p className="text-[9px] font-bold tracking-wider text-[#1E40AF] uppercase">Bill to</p>
                <p className="text-[12px] font-semibold">{invoice.client.name}</p>
                <p className="text-[10px] text-zinc-500">{invoice.client.contact}</p>
                <p className="text-[10px] leading-relaxed text-zinc-400">{invoice.client.address}</p>
              </div>
              <div className="space-y-2 text-right">
                <MetaRow label="Issue date" value={invoice.date} />
                <MetaRow label="Due date" value={invoice.dueDate} />
                <MetaRow label="Terms" value={invoice.paymentTerms} />
              </div>
            </div>

            <div className="flex-1 overflow-hidden">
              <ItemsTable invoice={invoice} headClass="border-blue-100 text-blue-800" headBg="bg-blue-50/60" />
            </div>

            <div className="flex min-w-0 items-end justify-between gap-4 border-t border-zinc-100 pt-5">
              <div className="min-w-0 flex-1 space-y-2 text-[10px] leading-relaxed text-zinc-500">
                <p>{invoice.notes}</p>
                {invoice.bankDetails && <p>{invoice.bankDetails}</p>}
                {invoice.signatureName && (
                  <p className="italic text-zinc-400">
                    {invoice.signatureName}, {invoice.signatureTitle}
                  </p>
                )}
              </div>
              <TotalsBlock invoice={invoice} accent="#1E40AF" />
            </div>
          </div>
        </div>
      );

    case "elegant-serif":
      return (
        <div className="flex h-full flex-col border-[3px] border-double border-stone-300 bg-[#FDFCF8] p-7 font-serif text-stone-800">
          <header className="border-b border-stone-300 pb-5 text-center">
            <p className="text-[16px] font-medium tracking-wide">{invoice.company.name}</p>
            <p className="mt-2 text-[10px] text-stone-500">{invoice.company.address}</p>
            <p className="mt-4 text-[11px] italic text-stone-600">Invoice {invoice.invoiceNumber}</p>
          </header>

          <div className="mt-6 grid grid-cols-2 gap-0 border border-stone-200 text-center text-[11px]">
            <div className="space-y-2 border-r border-stone-200 px-4 py-5">
              <p className="text-[9px] tracking-[0.15em] text-stone-400 uppercase">Prepared for</p>
              <p className="font-semibold">{invoice.client.name}</p>
              <p className="text-[10px] text-stone-500">{invoice.client.contact}</p>
            </div>
            <div className="space-y-2 px-4 py-5">
              <p className="text-[9px] tracking-[0.15em] text-stone-400 uppercase">Payment due</p>
              <p className="font-semibold">{invoice.dueDate}</p>
              <p className="text-[10px] text-stone-500">{invoice.paymentTerms}</p>
            </div>
          </div>

          <div className="mt-6 flex-1 overflow-hidden">
            <ItemsTable invoice={invoice} headClass="border-stone-300 text-stone-500" rowClass="border-stone-200" />
          </div>

          <div className="mt-6 flex min-w-0 items-end justify-between gap-4 border-t border-stone-200 pt-5">
            <p className="min-w-0 flex-1 text-[10px] leading-relaxed text-stone-500">{invoice.notes}</p>
            <TotalsBlock invoice={invoice} />
          </div>

          {invoice.signatureName && (
            <p className="mt-5 text-center text-[10px] italic text-stone-500">
              {invoice.signatureName}, {invoice.signatureTitle}
            </p>
          )}
        </div>
      );

    case "german-minimal":
      return (
        <div className="flex h-full flex-col gap-6 bg-[#FAFAFA] p-7 font-sans text-stone-800">
          <header className="flex items-start justify-between gap-6 border-b border-stone-200 pb-6">
            <div className="space-y-2">
              <p className="text-[13px] font-medium tracking-[0.12em] uppercase">{invoice.company.name}</p>
              <p className="text-[10px] text-stone-500">{invoice.company.tagline}</p>
              <p className="text-[10px] leading-relaxed text-stone-400">{invoice.company.address}</p>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#1E3A5F] text-[11px] font-bold text-[#1E3A5F]">
              {invoice.company.initials}
            </div>
          </header>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="text-[9px] font-semibold tracking-wider text-stone-400 uppercase">Rechnungsempfänger</p>
              <p className="text-[12px] font-semibold">{invoice.client.name}</p>
              <p className="text-[10px] text-stone-500">{invoice.client.contact}</p>
              <p className="text-[10px] text-stone-400">{invoice.client.address}</p>
            </div>
            <div className="space-y-2 text-right text-[10px]">
              <p className="font-mono text-stone-600">{invoice.invoiceNumber}</p>
              <p className="text-stone-500">{invoice.date}</p>
              <p className="text-stone-400">Fällig {invoice.dueDate}</p>
            </div>
          </div>

          <div className="flex-1 overflow-hidden rounded-lg border border-stone-200 bg-white">
            <ItemsTable invoice={invoice} headClass="border-stone-200 text-stone-400" headBg="bg-stone-50" />
          </div>

          <div className="flex min-w-0 items-end justify-between gap-4">
            <div className="min-w-0 flex-1 space-y-1.5 text-[10px] leading-relaxed text-stone-400">
              <p>{invoice.notes}</p>
              <p>{invoice.bankDetails}</p>
            </div>
            <TotalsBlock invoice={invoice} accent="#1E3A5F" />
          </div>
        </div>
      );

    case "luxury-black-gold":
      return (
        <div className="flex h-full flex-col gap-6 bg-[#0A0A0A] p-7 font-serif text-[#C9A962]">
          <header className="border-b border-[#C9A962]/25 pb-5 text-center">
            <p className="text-[15px] tracking-[0.18em] uppercase">{invoice.company.name}</p>
            <p className="mt-2 text-[10px] text-[#C9A962]/55">{invoice.company.tagline}</p>
          </header>

          <div className="grid grid-cols-2 gap-8 text-[#E7D5A8]">
            <div className="space-y-2">
              <p className="text-[9px] tracking-[0.15em] text-[#C9A962]/50 uppercase">Prepared for</p>
              <p className="text-[12px] font-semibold">{invoice.client.name}</p>
              <p className="text-[10px] leading-relaxed text-[#C9A962]/65">{invoice.client.address}</p>
            </div>
            <div className="space-y-2 text-right text-[10px]">
              <p className="font-mono text-[#E7D5A8]">{invoice.invoiceNumber}</p>
              <p className="text-[#C9A962]/60">{invoice.date}</p>
              <p className="text-[#C9A962]/60">Due {invoice.dueDate}</p>
            </div>
          </div>

          <div className="flex-1 overflow-hidden">
            <ItemsTable
              invoice={invoice}
              headClass="border-[#C9A962]/25 text-[#C9A962]/55"
              rowClass="border-[#C9A962]/10"
              dark
            />
          </div>

          <div className="flex min-w-0 items-end justify-between gap-4 border-t border-[#C9A962]/20 pt-5">
            <p className="min-w-0 flex-1 text-[10px] leading-relaxed text-[#C9A962]/55">{invoice.notes}</p>
            <TotalsBlock invoice={invoice} dark accent="#C9A962" />
          </div>

          {invoice.signatureName && (
            <p className="text-right text-[10px] italic text-[#C9A962]/70">{invoice.signatureName}</p>
          )}
        </div>
      );

    default:
      return null;
  }
}

export function ScaledDocumentTemplate({
  invoice,
  width,
  height,
}: {
  invoice: TemplateInvoice;
  width: number;
  height: number;
}) {
  return (
    <TemplateScaler width={width} height={height}>
      <div className="h-full w-full overflow-hidden">
        <DocumentTemplate invoice={invoice} />
      </div>
    </TemplateScaler>
  );
}
