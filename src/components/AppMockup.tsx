import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { APP_MOCK_DOCUMENTS } from "../lib/mockDocuments";
import { RichInvoicePreview } from "./invoices/RichInvoicePreview";
import { AnimatedInView } from "./ui/AnimatedInView";

const DOCUMENT_TABS = ["Invoice", "Quote", "Purchase Order", "Receipt"] as const;

export function AppMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [60, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.4], prefersReducedMotion ? [1, 1] : [0.94, 1]);

  const activeDoc = APP_MOCK_DOCUMENTS[activeTab];

  return (
    <section className="relative pb-4 md:pb-8">
      <div className="accent-line mx-auto mb-12 max-w-7xl px-6" />

      <motion.div ref={ref} style={{ y, scale }} className="px-4 md:px-8">
        <AnimatedInView y={40}>
          <div className="mx-auto max-w-[1400px] overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_40px_120px_rgba(0,0,0,0.55)] min-h-[75vh] md:min-h-[88vh]">
            <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-4 text-xs text-subtle">
                Paperline — {activeDoc.type} {activeDoc.number}
              </span>
            </div>

            <div className="grid min-h-[calc(75vh-53px)] md:min-h-[calc(88vh-53px)] md:grid-cols-[240px_1fr]">
              <aside className="hidden border-r border-border bg-[#0a0a0c] p-5 md:block">
                <p className="mb-5 text-[10px] font-medium tracking-[0.2em] text-subtle uppercase">
                  Workspace
                </p>
                <ul className="space-y-1 text-sm">
                  {[
                    { label: "All Documents", count: 24 },
                    { label: "Customers", count: 18 },
                    { label: "Products", count: 42 },
                    { label: "Reports", count: null },
                    { label: "Settings", count: null },
                  ].map((item, index) => (
                    <li
                      key={item.label}
                      className={`flex items-center justify-between rounded-lg px-3 py-2.5 ${
                        index === 0 ? "bg-accent/10 text-accent" : "text-muted"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.count != null && (
                        <span className="text-xs text-subtle">{item.count}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </aside>

              <div className="flex flex-col">
                <div className="flex gap-0.5 overflow-x-auto border-b border-border px-5 pt-4">
                  {DOCUMENT_TABS.map((tab, index) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(index)}
                      className={`shrink-0 rounded-t-lg px-5 py-2.5 text-sm transition-colors ${
                        index === activeTab
                          ? "border border-b-0 border-border bg-surface-elevated text-text"
                          : "text-subtle hover:text-muted"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="flex flex-1 items-start justify-center overflow-auto bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.04),transparent_70%)] p-6 md:p-10">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-2xl"
                  >
                    <RichInvoicePreview document={activeDoc} />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedInView>
      </motion.div>

      <AnimatedInView delay={0.12}>
        <p className="mt-14 text-center text-sm tracking-wide text-subtle uppercase">
          Professional documents, designed on your machine
        </p>
      </AnimatedInView>
    </section>
  );
}
