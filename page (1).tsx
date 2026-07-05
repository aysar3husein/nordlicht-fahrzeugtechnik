@import "tailwindcss";

:root {
  --color-ink: #0f172a;
  --color-body: #334155;
  --color-muted: #64748b;

  --color-brand: #1d5d8c;
  --color-brand-dark: #14476b;
  --color-brand-light: #e7f0f7;

  --color-accent: #d97706;
  --color-accent-light: #fef3e2;

  --color-bg: #f8fafc;
  --color-surface: #ffffff;
  --color-border: #e2e8f0;
}

@theme inline {
  --color-ink: var(--color-ink);
  --color-body: var(--color-body);
  --color-muted: var(--color-muted);

  --color-brand: var(--color-brand);
  --color-brand-dark: var(--color-brand-dark);
  --color-brand-light: var(--color-brand-light);

  --color-accent: var(--color-accent);
  --color-accent-light: var(--color-accent-light);

  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-border: var(--color-border);

  --font-display: var(--font-lexend);
  --font-body: var(--font-source-sans);
}

@layer base {
  body {
    background: var(--color-bg);
    color: var(--color-body);
    font-family: var(--font-body), ui-sans-serif, system-ui, sans-serif;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--font-display), ui-sans-serif, system-ui, sans-serif;
    color: var(--color-ink);
  }
}

.shadow-soft {
  box-shadow:
    0 1px 2px 0 rgb(15 23 42 / 0.04),
    0 8px 24px -8px rgb(15 23 42 / 0.12);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
