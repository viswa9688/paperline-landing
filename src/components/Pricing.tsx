import { Check } from "lucide-react";
import { PRICING, PRODUCT_NAME, SECTION_IDS } from "../lib/constants";
import { AnimatedInView } from "./ui/AnimatedInView";
import { Button } from "./ui/Button";

const INCLUDED = [
  "All document types — invoices, quotes, POs, receipts, credit notes",
  "Unlimited companies and unlimited documents",
  "Drag-and-drop document designer",
  "Offline-first with local SQLite storage",
  "Free updates for v1.x",
  "Optional assistant — local or your API key",
];

export function Pricing() {
  return (
    <section
      id={SECTION_IDS.pricing}
      className="chapter relative overflow-hidden px-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(37,99,235,0.08),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-7xl text-center">
        <AnimatedInView>
          <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
            Pricing
          </p>
          <h2 className="display-xl mt-4 text-text">One price. Own it forever.</h2>
          <p className="prose-medium mx-auto mt-5 text-muted">
            No monthly fees. No annual renewals. No surprise price increases.
          </p>
        </AnimatedInView>

        <AnimatedInView delay={0.1}>
          <div className="mx-auto mt-16 max-w-md">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 md:p-12">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
              />

              <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
                Lifetime License
              </p>
              <div className="mt-6 flex items-baseline justify-center gap-3">
                <span className="font-display text-7xl font-semibold tracking-tighter text-text">
                  ${PRICING.lifetime}
                </span>
                <span className="text-muted">once</span>
              </div>
              <p className="mt-4 text-sm text-muted">
                Pay once. Use {PRODUCT_NAME} forever.
              </p>

              <ul className="mt-10 space-y-3 text-left">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="mt-10 w-full">
                Buy {PRODUCT_NAME} — Own it forever
              </Button>
              <p className="mt-4 text-xs text-subtle">{PRICING.guarantee}</p>
            </div>
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
}
