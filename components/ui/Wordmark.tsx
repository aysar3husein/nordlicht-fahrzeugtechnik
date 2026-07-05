import { Wrench } from "lucide-react";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-white">
        <Wrench size={18} strokeWidth={2.25} aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight text-ink">
          Nordlicht Fahrzeugtechnik
        </span>
        <span className="text-xs font-medium tracking-wide text-muted">
          GmbH
        </span>
      </span>
    </span>
  );
}
