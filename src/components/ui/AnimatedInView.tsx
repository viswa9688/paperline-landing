import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function AnimatedInView({
  children,
  className = "",
  delay = 0,
  y = 24,
}: AnimatedInViewProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.5,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
