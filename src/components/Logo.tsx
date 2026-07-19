type LogoSize = "sm" | "md" | "lg";

const sizeStyles: Record<
  LogoSize,
  { word: string; bar: string; barWidth: string; tagline: string; offset: string }
> = {
  sm: {
    word: "text-lg",
    bar: "h-[2px]",
    barWidth: "w-7",
    tagline: "text-[7px] tracking-[0.2em]",
    offset: "-ml-1",
  },
  md: {
    word: "text-xl",
    bar: "h-[2.5px]",
    barWidth: "w-9",
    tagline: "text-[8px] tracking-[0.22em]",
    offset: "-ml-1.5",
  },
  lg: {
    word: "text-3xl md:text-4xl",
    bar: "h-[3px]",
    barWidth: "w-11",
    tagline: "text-[10px] tracking-[0.24em]",
    offset: "-ml-2",
  },
};

export function Logo({
  size = "sm",
  showTagline = false,
  className = "",
}: {
  size?: LogoSize;
  showTagline?: boolean;
  className?: string;
}) {
  const styles = sizeStyles[size];

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div className="relative inline-block pb-1">
        <span
          className={`font-display ${styles.word} font-bold leading-none tracking-tight`}
        >
          <span className="text-text">Paper</span>
          <span className="bg-gradient-to-r from-[#2563eb] to-[#60a5fa] bg-clip-text text-transparent">
            line
          </span>
        </span>
        <span
          aria-hidden
          className={`absolute bottom-0 left-1/2 ${styles.bar} ${styles.barWidth} ${styles.offset} -translate-x-1/2 rounded-full bg-gradient-to-r from-[#2563eb] to-[#60a5fa]`}
        />
      </div>
      {showTagline && (
        <p
          className={`mt-1.5 font-medium uppercase text-subtle ${styles.tagline}`}
        >
          Business documents. Beautifully done.
        </p>
      )}
    </div>
  );
}
