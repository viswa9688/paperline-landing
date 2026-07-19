import { useEffect, useState } from "react";
import { DEMO_PROMPTS, SECTION_IDS } from "../lib/constants";
import { parseDocumentInput } from "../lib/demoParser";
import { parsedToMockDocument } from "../lib/mockDocuments";
import { RichInvoicePreview } from "./invoices/RichInvoicePreview";
import { AnimatedInView } from "./ui/AnimatedInView";

export function Demo() {
  const [input, setInput] = useState<string>(DEMO_PROMPTS[0]);
  const [document, setDocument] = useState(() =>
    parsedToMockDocument(parseDocumentInput(DEMO_PROMPTS[0])),
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDocument(parsedToMockDocument(parseDocumentInput(input)));
    }, 300);

    return () => window.clearTimeout(timer);
  }, [input]);

  return (
    <section
      id={SECTION_IDS.demo}
      className="chapter relative overflow-hidden px-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_50%,rgba(37,99,235,0.06),transparent)]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[2fr_3fr] lg:items-start lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <AnimatedInView>
            <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
              See it work
            </p>
            <h2 className="display-lg mt-4 text-text">
              Type what you need.
              <span className="block text-muted">Watch the document appear.</span>
            </h2>
            <p className="prose-narrow mt-6 text-base leading-relaxed text-muted">
              Describe an invoice, quote, or receipt in plain language. Paperline
              builds the draft beside you.
            </p>
          </AnimatedInView>

          <AnimatedInView delay={0.1} className="mt-10">
            <label
              htmlFor="demo-input"
              className="mb-3 block text-xs tracking-wide text-subtle uppercase"
            >
              What do you need?
            </label>
            <textarea
              id="demo-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              rows={5}
              className="w-full resize-none rounded-2xl border border-border bg-surface px-5 py-4 text-sm leading-relaxed text-text placeholder:text-subtle focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="Invoice Acme Corp for 10 hours of consulting at $150/hr..."
            />

            <div className="mt-4 flex flex-col gap-2">
              {DEMO_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => setInput(prompt)}
                  className={`rounded-xl border px-4 py-2.5 text-left text-xs transition-all duration-150 ${
                    input === prompt
                      ? "border-accent/40 bg-accent/5 text-text"
                      : "border-border text-muted hover:border-accent/30 hover:bg-surface hover:text-text"
                  }`}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </AnimatedInView>
        </div>

        <AnimatedInView delay={0.15}>
          <RichInvoicePreview document={document} />
        </AnimatedInView>
      </div>
    </section>
  );
}
