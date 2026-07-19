interface PillarBadgeProps {
  label: string;
}

export function PillarBadge({ label }: PillarBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-muted">
      {label}
    </span>
  );
}
