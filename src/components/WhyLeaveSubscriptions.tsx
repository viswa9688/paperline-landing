import { Check, X } from "lucide-react";
import { SUBSCRIPTION_COMPARISON } from "../lib/subscriptionComparison";
import { AnimatedInView } from "./ui/AnimatedInView";

export function WhyLeaveSubscriptions() {
  return (
    <section className="chapter-tight relative overflow-hidden border-y border-border bg-[#0c0c0e] px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_0%_50%,rgba(239,68,68,0.04),transparent),radial-gradient(ellipse_50%_80%_at_100%_50%,rgba(37,99,235,0.06),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedInView>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="display-xl text-text">
              Why people leave subscription software
            </h2>
            <p className="prose-medium mx-auto mt-6 text-base text-muted">
              Monthly fees, cloud lock-in, and generic templates add up.
            </p>
          </div>
        </AnimatedInView>

        <div className="mt-20 space-y-0">
          {SUBSCRIPTION_COMPARISON.map((row, index) => (
            <AnimatedInView key={row.problem} delay={index * 0.08}>
              <div className="grid border-t border-border py-8 md:grid-cols-2 md:gap-12 md:py-10">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                    <X className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-base text-zinc-500 md:text-lg">{row.problem}</p>
                </div>
                <div className="mt-4 flex items-start gap-4 md:mt-0">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-base font-medium text-text md:text-lg">
                    {row.solution}
                  </p>
                </div>
              </div>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  );
}
