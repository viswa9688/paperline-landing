import { FEATURES } from "../lib/features";
import { SECTION_IDS } from "../lib/constants";
import { AnimatedInView } from "./ui/AnimatedInView";

export function Features() {
  const documents = FEATURES.filter((f) => f.category === "Documents");
  const business = FEATURES.filter((f) => f.category === "Business");
  const design = FEATURES.filter((f) => f.category === "Design");
  const platform = FEATURES.filter((f) => f.category === "Platform");
  const optional = FEATURES.filter((f) => f.category === "Optional");

  return (
    <section id={SECTION_IDS.features} className="chapter px-6">
      <div className="mx-auto max-w-7xl">
        <AnimatedInView>
          <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
            Features
          </p>
          <h2 className="display-xl mt-4 max-w-2xl text-text">
            Everything your business sends.
          </h2>
        </AnimatedInView>

        <div className="mt-24 space-y-32">
          <AnimatedInView>
            <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
              <div>
                <h3 className="font-display text-2xl font-medium text-text">Documents</h3>
                <p className="prose-narrow mt-3 text-sm text-muted">
                  Every format you need to run a business, designed to look professional.
                </p>
              </div>
              <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                {documents.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="group flex gap-4 bg-surface p-6 transition-colors hover:bg-surface-elevated"
                    >
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <div>
                        <h4 className="text-sm font-medium text-text">{feature.title}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-muted">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedInView>

          <AnimatedInView delay={0.05}>
            <div className="grid gap-8 lg:grid-cols-3">
              {business.slice(0, 6).map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="border-t border-border pt-6"
                  >
                    <Icon className="h-4 w-4 text-accent" />
                    <h4 className="mt-4 font-display text-lg font-medium text-text">
                      {feature.title}
                    </h4>
                    <p className="prose-narrow mt-2 text-sm text-muted">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </AnimatedInView>

          <AnimatedInView delay={0.08}>
            <div className="rounded-2xl border border-border bg-surface p-8 md:p-12">
              <h3 className="font-display text-xl font-medium text-text">Business tools</h3>
              <div className="mt-8 grid gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                {business.slice(6).concat(design).map((feature) => (
                  <div key={feature.title} className="flex items-baseline gap-3">
                    <span className="text-accent">—</span>
                    <div>
                      <p className="text-sm font-medium text-text">{feature.title}</p>
                      <p className="mt-0.5 text-xs text-muted">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedInView>

          <AnimatedInView delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {platform.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`rounded-2xl border border-border p-6 ${
                      index === 0 ? "bg-accent/5 border-accent/20 lg:col-span-1" : "bg-background"
                    }`}
                  >
                    <Icon className="h-5 w-5 text-accent" />
                    <h4 className="mt-4 font-display text-base font-medium text-text">
                      {feature.title}
                    </h4>
                    <p className="mt-2 text-sm text-muted">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedInView>

          <AnimatedInView delay={0.12}>
            <div className="border-t border-dashed border-border pt-16">
              <p className="text-xs tracking-[0.2em] text-subtle uppercase">
                Optional — Assistant
              </p>
              <div className="mt-8 flex flex-wrap gap-x-12 gap-y-6">
                {optional.map((feature) => (
                  <div key={feature.title} className="min-w-[200px]">
                    <p className="text-sm font-medium text-muted">{feature.title}</p>
                    <p className="mt-1 max-w-xs text-xs text-subtle">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedInView>
        </div>
      </div>
    </section>
  );
}
