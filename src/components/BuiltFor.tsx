import { AUDIENCES } from "../lib/builtFor";
import { AnimatedInView } from "./ui/AnimatedInView";

export function BuiltFor() {
  return (
    <section className="chapter px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <AnimatedInView>
            <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
              Built for
            </p>
            <h2 className="display-xl mt-4 max-w-md text-text">
              People who send documents for a living.
            </h2>
          </AnimatedInView>

          <AnimatedInView delay={0.08}>
            <p className="prose-medium text-base leading-relaxed text-muted lg:pb-2">
              Whether you bill by the hour or run a growing team, Paperline fits
              how you actually work — without a monthly bill.
            </p>
          </AnimatedInView>
        </div>

        <div className="accent-line mt-16" />

        <div className="mt-16 divide-y divide-border">
          {AUDIENCES.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <AnimatedInView key={audience.title} delay={index * 0.06}>
                <div className="group grid gap-6 py-8 transition-colors duration-200 hover:bg-white/[0.02] md:grid-cols-[200px_1fr] md:items-center md:py-10 md:pl-4">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-4xl font-semibold text-border-hover transition-colors group-hover:text-accent/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-5 w-5 text-accent" />
                    <h3 className="font-display text-xl font-medium text-text md:hidden">
                      {audience.title}
                    </h3>
                  </div>
                  <div>
                    <h3 className="hidden font-display text-xl font-medium text-text md:block">
                      {audience.title}
                    </h3>
                    <p className="mt-1 max-w-lg text-base text-muted md:mt-2">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </AnimatedInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
