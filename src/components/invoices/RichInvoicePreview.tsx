import { motion } from "framer-motion";
import type { MockDocument } from "../../lib/mockDocuments";
import { docSubtotal, docTax, docTotal, fmtUsd } from "../../lib/mockDocuments";
import { QrWithLabel } from "./QrCode";

const STATUS_STYLES = {
  Draft: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  Sent: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  Paid: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
};

interface RichInvoicePreviewProps {
  document: MockDocument;
  compact?: boolean;
}

export function RichInvoicePreview({ document, compact = false }: RichInvoicePreviewProps) {
  const sub = docSubtotal(document);
  const tax = docTax(document);
  const total = docTotal(document);
  const pad = compact ? "p-6" : "p-8 md:p-10";

  return (
    <motion.div
      layout
      className={`overflow-hidden rounded-2xl border border-zinc-200/80 bg-white text-zinc-900 shadow-[0_24px_80px_rgba(0,0,0,0.12)] ${pad}`}
    >
      {/* Accent bar */}
      <div
        className="-mx-8 -mt-8 mb-8 h-1.5 md:-mx-10 md:-mt-10"
        style={{ backgroundColor: document.from.color }}
      />

      <div className="mb-8 flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white shadow-sm"
            style={{ backgroundColor: document.from.color }}
          >
            {document.from.initials}
          </div>
          <div>
            <p className="text-base font-semibold tracking-tight">{document.from.name}</p>
            {document.from.tagline && (
              <p className="text-xs text-zinc-500">{document.from.tagline}</p>
            )}
            <p className="mt-1 text-xs text-zinc-400">{document.from.email}</p>
          </div>
        </div>
        <div className="text-right">
          <span
            className={`inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${STATUS_STYLES[document.status]}`}
          >
            {document.status}
          </span>
          <p className="mt-2 text-[10px] font-medium tracking-[0.2em] text-zinc-400 uppercase">
            {document.type}
          </p>
          <p className="text-xl font-bold tracking-tight">{document.number}</p>
        </div>
      </div>

      <div className="mb-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl bg-zinc-50 p-4">
          <p className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">Bill to</p>
          <p className="mt-2 font-semibold">{document.to.name}</p>
          {document.to.contact && (
            <p className="text-sm text-zinc-500">{document.to.contact}</p>
          )}
          <p className="mt-1 text-xs text-zinc-400">{document.to.address}</p>
          <p className="text-xs text-zinc-400">{document.to.email}</p>
        </div>
        <div className="rounded-xl bg-zinc-50 p-4 text-sm">
          <div className="flex justify-between">
            <span className="text-zinc-400">Issue date</span>
            <span className="font-medium">{document.date}</span>
          </div>
          <div className="mt-2 flex justify-between">
            <span className="text-zinc-400">
              {document.type === "Receipt" ? "Status" : "Due date"}
            </span>
            <span className="font-medium">{document.dueDate}</span>
          </div>
          <div className="mt-2 flex justify-between">
            <span className="text-zinc-400">Terms</span>
            <span className="font-medium">{document.paymentTerms}</span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-100 bg-zinc-50 text-left text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3 text-right">Qty</th>
              <th className="px-4 py-3 text-right">Rate</th>
              <th className="px-4 py-3 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {document.lineItems.map((item) => (
              <tr key={item.description} className="border-b border-zinc-50 last:border-0">
                <td className="px-4 py-3.5">
                  <p className="font-medium">{item.description}</p>
                  {item.detail && (
                    <p className="text-xs text-zinc-400">{item.detail}</p>
                  )}
                </td>
                <td className="px-4 py-3.5 text-right text-zinc-600">{item.quantity}</td>
                <td className="px-4 py-3.5 text-right text-zinc-600">{fmtUsd(item.rate)}</td>
                <td className="px-4 py-3.5 text-right font-semibold">
                  {fmtUsd(item.quantity * item.rate)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0 flex-1 space-y-3 sm:max-w-sm">
          <p className="text-xs leading-relaxed text-zinc-500">{document.notes}</p>
          {document.bankDetails && (
            <p className="text-xs text-zinc-400">{document.bankDetails}</p>
          )}
          {!compact && (
            <QrWithLabel size={52} className="pt-2" />
          )}
        </div>

        <div className="w-full rounded-xl bg-zinc-50 p-4 sm:w-56">
          <div className="flex justify-between text-sm text-zinc-500">
            <span>Subtotal</span>
            <span>{fmtUsd(sub)}</span>
          </div>
          {document.taxRate > 0 && (
            <div className="mt-1.5 flex justify-between text-sm text-zinc-500">
              <span>{document.taxLabel}</span>
              <span>{fmtUsd(tax)}</span>
            </div>
          )}
          <div
            className="mt-3 flex justify-between border-t border-zinc-200 pt-3 text-lg font-bold"
            style={{ color: document.from.color }}
          >
            <span>Total</span>
            <span>{fmtUsd(total)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
