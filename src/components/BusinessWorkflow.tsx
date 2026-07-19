import { WORKFLOW_STEPS } from "../lib/workflow";
import { SECTION_IDS } from "../lib/constants";
import { AnimatedInView } from "./ui/AnimatedInView";

export function BusinessWorkflow() {
  return (
    <section id={SECTION_IDS.workflow} className="chapter overflow-hidden px-6">
      <div className="mx-auto max-w-7xl">
        <AnimatedInView>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
                Workflow
              </p>
              <h2 className="display-xl mt-4 max-w-xl text-text">
                From first contact to final receipt
              </h2>
            </div>
            <p className="prose-narrow text-base text-muted lg:pb-2">
              One place for every step — not five different tools.
            </p>
          </div>
        </AnimatedInView>

        <div className="relative mt-20">
          <div
            aria-hidden
            className="absolute top-6 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          />

          <div className="flex gap-4 overflow-x-auto pb-4 lg:gap-0 lg:overflow-visible">
            {WORKFLOW_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedInView
                  key={step.label}
                  delay={index * 0.1}
                  className="min-w-[160px] flex-1 lg:min-w-0"
                >
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background text-accent shadow-[0_0_0_8px_var(--color-background)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-6 font-display text-base font-medium text-text">
                      {step.label}
                    </p>
                    <p className="mt-2 max-w-[140px] text-xs leading-relaxed text-muted">
                      {step.description}
                    </p>
                    {index < WORKFLOW_STEPS.length - 1 && (
                      <span className="absolute top-7 -right-2 hidden text-subtle lg:block">
                        →
                      </span>
                    )}
                  </div>
                </AnimatedInView>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
