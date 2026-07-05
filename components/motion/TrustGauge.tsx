"use client";

import { motion, useReducedMotion } from "framer-motion";

const RADIUS = 90;
const ARC_LENGTH = Math.PI * RADIUS;

export function TrustGauge({
  value,
  outOf = 5,
  label,
}: {
  value: number;
  outOf?: number;
  label: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const fraction = Math.max(0, Math.min(1, value / outOf));
  const filledOffset = ARC_LENGTH * (1 - fraction);

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 200 116"
        className="w-64 sm:w-72"
        role="img"
        aria-label={`${value} von ${outOf} Sternen bei ${label}`}
      >
        <path
          d="M 10 100 A 90 90 0 0 1 190 100"
          fill="none"
          stroke="var(--color-border)"
          strokeWidth={14}
          strokeLinecap="round"
        />
        <motion.path
          d="M 10 100 A 90 90 0 0 1 190 100"
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth={14}
          strokeLinecap="round"
          strokeDasharray={ARC_LENGTH}
          initial={{ strokeDashoffset: shouldReduceMotion ? filledOffset : ARC_LENGTH }}
          animate={{ strokeDashoffset: filledOffset }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
        />
        <circle
          cx={100 - Math.cos(fraction * Math.PI) * RADIUS}
          cy={100 - Math.sin(fraction * Math.PI) * RADIUS}
          r={7}
          fill="var(--color-accent)"
        />
        <text
          x="100"
          y="82"
          textAnchor="middle"
          className="font-display"
          style={{ fontSize: "40px", fontWeight: 600, fill: "var(--color-ink)" }}
        >
          {value.toString().replace(".", ",")}
        </text>
        <text
          x="100"
          y="102"
          textAnchor="middle"
          style={{ fontSize: "13px", fill: "var(--color-muted)" }}
        >
          von {outOf} Sternen
        </text>
      </svg>
      <span className="mt-1 text-sm font-medium text-muted">{label}</span>
    </div>
  );
}
