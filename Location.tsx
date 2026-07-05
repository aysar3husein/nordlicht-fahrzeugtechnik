import type { LucideIcon } from "lucide-react";

export function IconBadge({
  icon: Icon,
  size = "md",
}: {
  icon: LucideIcon;
  size?: "md" | "lg";
}) {
  const dimensions = size === "lg" ? "h-14 w-14" : "h-12 w-12";
  const iconSize = size === "lg" ? 26 : 22;

  return (
    <div
      className={`flex ${dimensions} shrink-0 items-center justify-center rounded-full bg-brand-light text-brand`}
    >
      <Icon size={iconSize} strokeWidth={2} aria-hidden="true" />
    </div>
  );
}
