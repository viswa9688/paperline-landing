import { ExternalLink, MessageSquarePlus } from "lucide-react";
import { ROADMAP_ITEMS, ROADMAP_URL, SECTION_IDS } from "../lib/constants";
import { AnimatedInView } from "./ui/AnimatedInView";
import { Button } from "./ui/Button";

const COLUMNS = [
  { key: "planned" as const, label: "Planned", accent: "text-zinc-400" },
  { key: "inProgress" as const, label: "In progress", accent: "text-accent" },
  { key: "shipped" as const, label: "Shipped", accent: "text-emerald-400" },
];

export function Roadmap() {
  return (
    <section id={SECTION_IDS.roadmap} className="chapter-tight px-6">
      <div className="mx-auto max-w-7xl">
        <AnimatedInView>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
                Roadmap
              </p>
              <h2 className="display-lg mt-4 text-text">
                Actively building. Listening out loud.
              </h2>
              <p className="prose-narrow mt-4 text-muted">
                Vote on what ships next. Request features. See what&apos;s
                already landed — no black box.
              </p>
            </div>
            <Button variant="secondary" href={ROADMAP_URL}>
              <MessageSquarePlus className="h-4 w-4" />
              Request a feature
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </Button>
          </div>
        </AnimatedInView>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {COLUMNS.map((column, colIndex) => (
            <AnimatedInView key={column.key} delay={colIndex * 0.08}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <p
                  className={`text-xs font-medium tracking-[0.15em] uppercase ${column.accent}`}
                >
                  {column.label}
                </p>
                <ul className="mt-5 space-y-3">
                  {ROADMAP_ITEMS[column.key].map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedInView>
          ))}
        </div>

        <AnimatedInView delay={0.2}>
          <p className="mt-8 text-center text-xs text-subtle">
            Public board — updated as we ship.{" "}
            <a
              href={ROADMAP_URL}
              className="text-accent transition-colors hover:text-accent-hover"
            >
              Open full roadmap →
            </a>
          </p>
        </AnimatedInView>
      </div>
    </section>
  );
}
