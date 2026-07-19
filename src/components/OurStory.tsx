import { AnimatedInView } from "./ui/AnimatedInView";

export function OurStory() {
  return (
    <section id="story" className="chapter-tight border-y border-border px-6">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <AnimatedInView>
          <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
            Our Story
          </p>
          <h2 className="display-lg mt-4 text-text">
            Built by one person who got tired of renting their client list.
          </h2>
        </AnimatedInView>

        <AnimatedInView delay={0.08}>
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              I&apos;m building Paperline because every invoice app I tried wanted
              $15–30 a month forever — and kept my data on their servers. My
              clients, my rates, my history — stored in someone else&apos;s cloud,
              behind someone else&apos;s login.
            </p>
            <p>
              That didn&apos;t feel right. Small businesses and freelancers deserve
              software that respects them: documents that look professional,
              records that stay private, and a price that doesn&apos;t creep up
              every year.
            </p>
            <p>
              Paperline is independent — no VC, no growth team, no dark patterns.
              Just a desktop app that runs on your machine, works offline, and
              costs once when you&apos;re ready to send.
            </p>
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
}
