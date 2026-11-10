import type { ReactNode } from "react";

/** Small rounded badge that holds a Lucide icon. Styled with Tailwind utilities. */
export function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="mb-3 inline-flex size-10 items-center justify-center rounded-xl border border-[var(--ln)] bg-[color-mix(in_srgb,var(--sf)_60%,transparent)] text-[var(--ac)]"
    >
      {children}
    </span>
  );
}
