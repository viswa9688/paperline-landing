import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { AnimatedInView } from "./ui/AnimatedInView";

const MONTHLY_PAYMENTS = ["$30", "$30", "$30", "$30", "$30"];

export function ForeverPayment() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="chapter relative overflow-hidden px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(37,99,235,0.08),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-5xl">
        <AnimatedInView>
          <div className="grid gap-20 md:grid-cols-2 md:gap-8">
            <div className="text-center md:text-left md:pr-12 md:border-r md:border-border">
              <p className="text-xs font-medium tracking-[0.2em] text-subtle uppercase">
                Monthly Software
              </p>
              <div className="mt-10 flex flex-col items-center md:items-start">
                {MONTHLY_PAYMENTS.map((amount, index) => (
                  <div key={`${amount}-${index}`} className="flex flex-col items-center md:items-start">
                    <motion.span
                      initial={prefersReducedMotion ? false : { opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.4,
                        delay: prefersReducedMotion ? 0 : index * 0.15,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="font-display text-6xl font-semibold tracking-tighter text-zinc-600 md:text-7xl"
                    >
                      {amount}
                    </motion.span>
                    <ArrowDown className="my-4 h-5 w-5 text-zinc-700" />
                  </div>
                ))}
                <motion.p
                  initial={prefersReducedMotion ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : 0.9 }}
                  className="font-display text-4xl font-semibold text-zinc-500 md:text-5xl"
                >
                  Forever.
                </motion.p>
              </div>
            </div>

            <div className="text-center md:pl-12 md:text-left">
              <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
                Paperline
              </p>
              <div className="mt-10 flex flex-col items-center md:items-start">
                <motion.span
                  initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-6xl font-semibold tracking-tighter text-text md:text-7xl"
                >
                  $79
                </motion.span>
                <ArrowDown className="my-4 h-5 w-5 text-accent/60" />
                <motion.p
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : 0.2 }}
                  className="font-display text-4xl font-semibold text-accent md:text-5xl"
                >
                  Own it forever.
                </motion.p>
              </div>
            </div>
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
}
