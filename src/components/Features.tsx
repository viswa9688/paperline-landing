import {
  PRIVACY_ICONS,
  PRIVACY_OWNERSHIP_ITEMS,
  WORKFLOW_GROUPS,
} from "../lib/features";
import { SECTION_IDS } from "../lib/constants";
import { AnimatedInView } from "./ui/AnimatedInView";

export function Features() {
  return (
    <section id={SECTION_IDS.features} className="chapter px-6">
      <div className="mx-auto max-w-7xl">
        <AnimatedInView>
          <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
            Features
          </p>
          <h2 className="display-xl mt-4 max-w-2xl text-text">
            Built around how you actually run a business.
          </h2>
          <p className="prose-medium mt-5 text-muted">
            Not a checklist of document types — real workflows from first hello
            to getting paid.
          </p>
        </AnimatedInView>

        <div className="mt-24 space-y-28">
          {WORKFLOW_GROUPS.map((group, groupIndex) => {
            const Icon = group.icon;
            return (
              <AnimatedInView key={group.id} delay={groupIndex * 0.05}>
                <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
                  <div className="lg:sticky lg:top-28 lg:self-start">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-surface">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-medium text-text">
                      {group.title}
                    </h3>
                    <p className="prose-narrow mt-3 text-sm leading-relaxed text-muted">
                      {group.lead}
                    </p>
                  </div>

                  <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                    {group.items.map((item) => (
                      <div
                        key={item.title}
                        className="bg-surface p-6 transition-colors hover:bg-surface-elevated"
                      >
                        <h4 className="text-sm font-medium text-text">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-muted">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedInView>
            );
          })}

          <AnimatedInView delay={0.1}>
            <div
              id="privacy"
              className="rounded-3xl border border-accent/20 bg-accent/[0.03] p-8 md:p-12"
            >
              <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
                Privacy & Ownership
              </p>
              <h3 className="mt-4 font-display text-2xl font-medium text-text md:text-3xl">
                Your business stays yours.
              </h3>
              <p className="prose-medium mt-4 text-muted">
                Everything about where your data lives, how you back it up, and
                what you pay — in one place.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PRIVACY_OWNERSHIP_ITEMS.map((item, index) => {
                  const Icon = PRIVACY_ICONS[index];
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                        <Icon className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-text">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedInView>
        </div>
      </div>
    </section>
  );
}
