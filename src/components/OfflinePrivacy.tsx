import { Database, HardDrive, Shield, WifiOff } from "lucide-react";
import { AnimatedInView } from "./ui/AnimatedInView";

const POINTS = [
  {
    icon: Database,
    title: "SQLite on your disk",
    description: "Every record in a database file you control.",
  },
  {
    icon: WifiOff,
    title: "Works without Wi-Fi",
    description: "On a plane, at a job site, anywhere.",
  },
  {
    icon: Shield,
    title: "No cloud account",
    description: "No login. No remote servers.",
  },
  {
    icon: HardDrive,
    title: "Backup & restore",
    description: "One file. Full snapshot. Anywhere you trust.",
  },
];

export function OfflinePrivacy() {
  return (
    <section className="chapter relative px-6">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <AnimatedInView>
            <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
              Offline & Privacy
            </p>
            <h2 className="display-xl mt-4 text-text">
              Your data stays on your computer.
            </h2>
            <p className="prose-narrow mt-8 text-base leading-relaxed text-muted">
              Cloud tools store your records on someone else&apos;s servers.
              Paperline stores them in SQLite on your machine.
            </p>
            <p className="prose-narrow mt-4 text-base leading-relaxed text-muted">
              Work offline. Back up when you want. Restore in minutes.
              Your business, your files, your rules.
            </p>
          </AnimatedInView>
        </div>

        <div className="space-y-0">
          {POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <AnimatedInView key={point.title} delay={index * 0.1}>
                <div className="group flex gap-6 border-t border-border py-10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface transition-colors group-hover:border-accent/30 group-hover:bg-accent/5">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-text">
                      {point.title}
                    </h3>
                    <p className="prose-narrow mt-2 text-sm text-muted">
                      {point.description}
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
