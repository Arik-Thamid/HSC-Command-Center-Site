"use client";

import { useEffect, useRef } from "react";
import { mountAppSim } from "@/lib/app-sim";

/** Interactive recreation of the app (sample data). The simulator renders into the container. */
export function AppSim() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return mountAppSim(el, reduced);
  }, []);
  return (
    <div
      className="app"
      id="app"
      ref={ref}
      role="application"
      aria-label="Interactive recreation of the HSC Command Center app"
    />
  );
}
