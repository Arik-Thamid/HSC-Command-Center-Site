"use client";

import { useEffect } from "react";
import { initEffects } from "@/lib/effects";

/** Mounts page-wide effects (theme, nav, scroll motion, reveals). Renders nothing. */
export function SiteEffects() {
  useEffect(() => initEffects(), []);
  return null;
}
