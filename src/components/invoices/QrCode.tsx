const QR_PATTERN = [
  "11110111011",
  "10001000101",
  "10111011101",
  "10001000101",
  "11110111011",
  "00101010100",
  "11010111011",
];

interface QrCodeProps {
  size?: number;
  className?: string;
}

/** Fixed-size QR mock — never overflows its box */
export function QrCode({ size = 52, className = "" }: QrCodeProps) {
  const cells = QR_PATTERN.join("");

  return (
    <div
      className={`box-border shrink-0 overflow-hidden rounded border border-zinc-200 bg-white p-1 ${className}`}
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
      }}
      aria-hidden
    >
      <div className="grid h-full w-full grid-cols-11 gap-px">
        {cells.split("").map((cell, index) => (
          <div
            key={index}
            className={`aspect-square ${cell === "1" ? "bg-zinc-900" : "bg-zinc-100"}`}
          />
        ))}
      </div>
    </div>
  );
}

interface QrWithLabelProps {
  size?: number;
  label?: string;
  sublabel?: string;
  className?: string;
  labelClassName?: string;
  layout?: "row" | "column";
}

/** QR + label with guaranteed spacing — no overlap */
export function QrWithLabel({
  size = 52,
  label = "Scan to pay",
  sublabel = "or use bank details",
  className = "",
  labelClassName = "text-zinc-400",
  layout = "row",
}: QrWithLabelProps) {
  if (layout === "column") {
    return (
      <div className={`flex flex-col items-start gap-2 ${className}`}>
        <QrCode size={size} />
        <div>
          <p className={`text-[10px] leading-snug ${labelClassName}`}>{label}</p>
          {sublabel && (
            <p className={`text-[10px] leading-snug ${labelClassName}`}>{sublabel}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-4 ${className}`}>
      <QrCode size={size} />
      <div className="pt-0.5">
        <p className={`text-[10px] leading-relaxed ${labelClassName}`}>{label}</p>
        {sublabel && (
          <p className={`text-[10px] leading-relaxed ${labelClassName}`}>{sublabel}</p>
        )}
      </div>
    </div>
  );
}
