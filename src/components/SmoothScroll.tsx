"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

/** Buttery smooth scrolling for the whole page (skipped for reduced-motion users). */
export function SmoothScroll() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    setEnabled(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  if (!enabled) return null;
  return <ReactLenis root options={{ lerp: 0.1, anchors: { offset: -90 }, autoRaf: true }} />;
}
