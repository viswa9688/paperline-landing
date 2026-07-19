import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { FAQ_ITEMS } from "../lib/faq";
import { SECTION_IDS } from "../lib/constants";
import { AnimatedInView } from "./ui/AnimatedInView";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-base font-medium text-text md:text-lg">
          {question}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
            className="overflow-hidden"
          >
            <p className="prose-medium pb-6 text-sm leading-relaxed text-muted">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={SECTION_IDS.faq} className="chapter px-6">
      <div className="mx-auto max-w-3xl">
        <AnimatedInView>
          <div className="text-center">
            <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
              FAQ
            </p>
            <h2 className="display-lg mt-4 text-text">Common questions</h2>
          </div>
        </AnimatedInView>

        <AnimatedInView delay={0.1} className="mt-16">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
            />
          ))}
        </AnimatedInView>
      </div>
    </section>
  );
}
