import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { TEMPLATE_INVOICES } from "../lib/templateData";
import { AnimatedInView } from "./ui/AnimatedInView";
import { Button } from "./ui/Button";
import { Section } from "./ui/Section";
import { ScaledDocumentTemplate } from "./templates/DocumentTemplates";

/** Matches template canvas ratio 420:600 */
const CARD_W_ACTIVE = 360;
const CARD_H_ACTIVE = 514;
const CARD_W_SIDE = 300;
const CARD_H_SIDE = 429;

export function TemplateShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    const item = itemRefs.current[index];
    if (!container || !item) return;

    const offset =
      item.offsetLeft - container.clientWidth / 2 + item.clientWidth / 2;
    container.scrollTo({ left: offset, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const center = container.scrollLeft + container.clientWidth / 2;
      let closest = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const itemCenter = item.offsetLeft + item.clientWidth / 2;
        const distance = Math.abs(center - itemCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = index;
        }
      });

      setActiveIndex(closest);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section
      variant="band"
      label="Templates"
      title="Documents your clients will remember."
      description="Premium designs for US, UK, EU, and German businesses — each with distinct typography, spacing, and character."
      className="overflow-hidden"
    >
      <AnimatedInView>
        <div className="relative -mx-6 md:-mx-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-surface to-transparent md:w-40"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-surface to-transparent md:w-40"
          />

          <div
            ref={scrollRef}
            className="template-scroll flex items-center gap-8 overflow-x-auto px-8 py-12 md:gap-10 md:px-16 md:py-16"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {TEMPLATE_INVOICES.map((template, index) => {
              const isActive = index === activeIndex;
              const isHovered = hoveredIndex === index;
              const w = isActive ? CARD_W_ACTIVE : CARD_W_SIDE;
              const h = isActive ? CARD_H_ACTIVE : CARD_H_SIDE;

              return (
                <div
                  key={template.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="shrink-0"
                  style={{ width: w, scrollSnapAlign: "center" }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.button
                    type="button"
                    onClick={() => scrollToIndex(index)}
                    className="relative block w-full text-left outline-none focus:outline-none focus-visible:outline-none"
                    animate={{
                      y: isActive ? -12 : isHovered ? -6 : 0,
                      scale: isActive ? 1 : isHovered ? 0.96 : 0.9,
                      opacity: isActive ? 1 : isHovered ? 0.88 : 0.6,
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div
                      className={`overflow-hidden rounded-2xl border bg-white transition-shadow duration-300 ${
                        isActive
                          ? "border-accent/30 shadow-[0_40px_100px_rgba(0,0,0,0.45)]"
                          : "border-zinc-200/80 shadow-xl"
                      }`}
                      style={{ height: h }}
                    >
                      <ScaledDocumentTemplate invoice={template} width={w} height={h} />
                    </div>
                  </motion.button>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-center gap-5">
            <button
              type="button"
              aria-label="Previous template"
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-hover hover:text-text"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex gap-2">
              {TEMPLATE_INVOICES.map((template, index) => (
                <button
                  key={template.id}
                  type="button"
                  aria-label={`View ${template.name}`}
                  onClick={() => scrollToIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-8 bg-accent" : "w-1.5 bg-border-hover"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next template"
              onClick={() =>
                scrollToIndex(Math.min(TEMPLATE_INVOICES.length - 1, activeIndex + 1))
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-hover hover:text-text"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-muted">
            <span className="font-medium text-text">{TEMPLATE_INVOICES[activeIndex].name}</span>
            {" · "}
            {TEMPLATE_INVOICES[activeIndex].style}
          </p>
        </div>
      </AnimatedInView>

      <AnimatedInView delay={0.15}>
        <div className="mt-12 text-center">
          <Button variant="secondary">Open the document designer</Button>
        </div>
      </AnimatedInView>
    </Section>
  );
}
