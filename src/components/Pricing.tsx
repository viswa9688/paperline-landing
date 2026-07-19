import { Check } from "lucide-react";
import { PRICING, SECTION_IDS } from "../lib/constants";
import { AnimatedInView } from "./ui/AnimatedInView";
import { Button } from "./ui/Button";

const FREE_INCLUDES = [
  "Download and install — no credit card",
  "Create quotes, invoices, and receipts",
  "Preview documents and try every template",
  "Full client and product management",
  "Works offline on your computer",
];

const PAID_INCLUDES = [
  "Everything in free",
  "Export PDFs and send to clients",
  "Email reminders for overdue invoices",
  "Unlimited companies and documents",
  "Free updates for v1.x",
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

      <div className="relative mx-auto max-w-7xl">
        <AnimatedInView>
          <div className="text-center">
            <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
              Pricing
            </p>
            <h2 className="display-xl mt-4 text-text">
              Download free. Pay when you&apos;re ready to send.
            </h2>
            <p className="prose-medium mx-auto mt-5 text-muted">
              Try everything without risk. Unlock export once — then own it
              forever. No subscription.
            </p>
          </div>
        </AnimatedInView>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          <AnimatedInView delay={0.05}>
            <div className="h-full rounded-3xl border border-border bg-surface p-8 md:p-10">
              <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
                Free
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl font-semibold tracking-tighter text-text">
                  $0
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">
                Build, preview, and organize — no time limit.
              </p>
              <ul className="mt-8 space-y-3">
                {FREE_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="secondary" className="mt-10 w-full">
                Download free for Mac
              </Button>
            </div>
          </AnimatedInView>

          <AnimatedInView delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-accent/30 bg-surface p-8 md:p-10">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
              />
              <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
                Full version
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl font-semibold tracking-tighter text-text">
                  ${PRICING.lifetime}
                </span>
                <span className="text-muted">once</span>
              </div>
              <p className="mt-3 text-sm text-muted">
                Unlock export and send — yours forever.
              </p>
              <ul className="mt-8 space-y-3">
                {PAID_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-10 w-full">
                Unlock export — ${PRICING.lifetime}
              </Button>
              <p className="mt-4 text-center text-xs text-subtle">
                {PRICING.guarantee}
              </p>
            </div>
          </AnimatedInView>
        </div>

        <AnimatedInView delay={0.15}>
          <p className="mx-auto mt-10 max-w-lg text-center text-sm text-subtle">
            Not ready to commit?{" "}
            <a
              href={`#${SECTION_IDS.demo}`}
              className="text-accent transition-colors hover:text-accent-hover"
            >
              Try the in-browser demo
            </a>{" "}
            — no download required.
          </p>
        </AnimatedInView>
      </div>
    </section>
  );
}
