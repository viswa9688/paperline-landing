import { OPTIONAL_ASSISTANT_MODES } from "../lib/features";
import { AnimatedInView } from "./ui/AnimatedInView";

export function AIAssistant() {
  return (
    <section id="ai" className="chapter-tight border-y border-border px-6">
      <div className="mx-auto max-w-7xl">
        <AnimatedInView>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <p className="text-xs font-medium tracking-[0.2em] text-subtle uppercase">
                Optional
              </p>
              <h2 className="display-lg mt-3 text-text">
                Want help drafting? Turn it on later.
              </h2>
              <p className="prose-narrow mt-4 text-sm text-muted">
                Paperline works great without it. If you want a hand writing
                line items or filling in details, you choose when — and how.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:gap-4">
              {OPTIONAL_ASSISTANT_MODES.map((mode, index) => (
                <div
                  key={mode.label}
                  className={`rounded-2xl border px-6 py-5 transition-colors ${
                    index === 0
                      ? "border-accent/30 bg-accent/5"
                      : "border-border bg-surface"
                  }`}
                >
                  <p className="font-display text-lg font-medium text-text">
                    {mode.label}
                  </p>
                  <p className="mt-1 max-w-[200px] text-xs text-muted">
                    {mode.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
}
