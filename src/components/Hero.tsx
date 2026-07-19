import { ArrowDown, Sparkles } from "lucide-react";
import { PILLAR_BADGES, SECTION_IDS } from "../lib/constants";
import { AnimatedInView } from "./ui/AnimatedInView";
import { Button } from "./ui/Button";
import { PillarBadge } from "./ui/PillarBadge";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-24 md:pt-44 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[800px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.12),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative mx-auto max-w-5xl">
        <AnimatedInView>
          <p className="mb-8 text-center text-xs font-medium tracking-[0.25em] text-accent uppercase">
            Free to try · Yours to keep
          </p>
        </AnimatedInView>

        <AnimatedInView delay={0.05}>
          <h1 className="text-center font-display text-[clamp(3rem,6.5vw,5.25rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-text">
            Send invoices you&apos;re proud of.
            <span className="block mt-2 text-muted">
              Keep every record yours.
            </span>
          </h1>
        </AnimatedInView>

        <AnimatedInView delay={0.1}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg leading-relaxed text-muted md:text-xl">
            Look professional when you bill. Sleep well knowing your client list
            never lives on someone else&apos;s servers.
          </p>
        </AnimatedInView>

        <div className="accent-line mx-auto mt-12 max-w-md" />

        <AnimatedInView delay={0.14}>
          <p className="prose-narrow mx-auto mt-10 text-center text-base text-subtle">
            Quotes, invoices, and receipts — beautiful enough to impress,
            private enough to trust.
          </p>
        </AnimatedInView>

        <AnimatedInView delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {PILLAR_BADGES.map((badge) => (
              <PillarBadge key={badge} label={badge} />
            ))}
          </div>
        </AnimatedInView>

        <AnimatedInView delay={0.22}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button href={`#${SECTION_IDS.demo}`}>
              <Sparkles className="h-4 w-4" />
              Try the demo — free
            </Button>
            <Button variant="secondary" href={`#${SECTION_IDS.pricing}`}>
              Download free
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-4 text-center text-xs text-subtle">
            No credit card · Pay once when you&apos;re ready to export
          </p>
        </AnimatedInView>
      </div>
    </section>
  );
}
