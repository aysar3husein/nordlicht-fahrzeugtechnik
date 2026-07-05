import { Star } from "lucide-react";

export function StarRating({
  value,
  outOf = 5,
  size = 18,
}: {
  value: number;
  outOf?: number;
  size?: number;
}) {
  const fillPercent = Math.max(0, Math.min(1, value / outOf)) * 100;

  return (
    <span
      className="relative inline-flex"
      role="img"
      aria-label={`${value} von ${outOf} Sternen`}
    >
      <span className="flex gap-0.5 text-border" aria-hidden="true">
        {Array.from({ length: outOf }).map((_, i) => (
          <Star key={i} size={size} fill="currentColor" strokeWidth={0} />
        ))}
      </span>
      <span
        className="absolute inset-0 flex gap-0.5 overflow-hidden text-accent"
        style={{ width: `${fillPercent}%` }}
        aria-hidden="true"
      >
        {Array.from({ length: outOf }).map((_, i) => (
          <Star key={i} size={size} fill="currentColor" strokeWidth={0} />
        ))}
      </span>
    </span>
  );
}
