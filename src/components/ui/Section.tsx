import type { ReactNode } from "react";

type SectionVariant = "default" | "centered" | "fullBleed" | "band";

interface SectionProps {
  id?: string;
  label?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  variant?: SectionVariant;
  tight?: boolean;
  showDivider?: boolean;
}

const variantClasses: Record<SectionVariant, string> = {
  default: "",
  centered: "text-center [&_.section-header]:mx-auto [&_.section-header]:items-center",
  fullBleed: "",
  band: "surface-band border-y border-border",
};

export function Section({
  id,
  label,
  title,
  description,
  children,
  className = "",
  variant = "default",
  tight = false,
  showDivider = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative px-6 ${tight ? "chapter-tight" : "chapter"} ${variantClasses[variant]} ${className}`}
    >
      {showDivider && (
        <div className="accent-line absolute inset-x-0 top-0 mx-auto max-w-3xl" />
      )}
      <div className={`mx-auto ${variant === "fullBleed" ? "max-w-[1400px]" : "max-w-7xl"}`}>
        {(label || title || description) && (
          <div className="section-header mb-16 flex max-w-3xl flex-col">
            {label && (
              <p className="mb-4 text-xs font-medium tracking-[0.2em] text-accent uppercase">
                {label}
              </p>
            )}
            {title && <h2 className="display-xl text-text">{title}</h2>}
            {description && (
              <p className="prose-medium mt-5 text-base leading-relaxed text-muted md:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function SectionDivider() {
  return (
    <div className="px-6">
      <div className="accent-line mx-auto max-w-7xl" />
    </div>
  );
}
