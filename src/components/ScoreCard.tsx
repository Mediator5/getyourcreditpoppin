"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

/** Animated credit-score gauge used in the hero. Illustrative only. */
export function ScoreCard({ from = 540, to = 724 }: { from?: number; to?: number }) {
  const min = 300;
  const max = 850;
  const v = useMotionValue(from);
  const [score, setScore] = useState(from);
  const progress = useTransform(v, (s) => (s - min) / (max - min));

  useEffect(() => {
    const c = animate(v, to, {
      duration: 2.6,
      delay: 0.9,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (s) => setScore(Math.round(s)),
    });
    return () => c.stop();
  }, [v, to]);

  const label = score >= 700 ? "Good" : score >= 640 ? "Fair" : "Poor";
  const color = score >= 700 ? "#16c79a" : score >= 640 ? "#ffb020" : "#f08c00";

  return (
    <div className="w-60 rounded-3xl border border-white/60 bg-white/85 p-5 shadow-lift backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold tracking-wide text-muted uppercase">Credit score</span>
        <span className="rounded-full bg-cloud px-2 py-0.5 text-[0.65rem] font-semibold text-muted">Example</span>
      </div>
      <div className="relative mt-3">
        <svg viewBox="0 0 200 110" className="w-full">
          <defs>
            <linearGradient id="gauge" x1="0" x2="1">
              <stop offset="0" stopColor="#ff7a00" />
              <stop offset="0.55" stopColor="#ffb020" />
              <stop offset="1" stopColor="#16c79a" />
            </linearGradient>
          </defs>
          <path d="M15 100 A85 85 0 0 1 185 100" fill="none" stroke="#eef1f8" strokeWidth="16" strokeLinecap="round" />
          <motion.path
            d="M15 100 A85 85 0 0 1 185 100"
            fill="none"
            stroke="url(#gauge)"
            strokeWidth="16"
            strokeLinecap="round"
            style={{ pathLength: progress }}
          />
        </svg>
        <div className="absolute inset-x-0 bottom-0 text-center">
          <div className="text-4xl font-extrabold tracking-tight tabular-nums">{score}</div>
          <div className="text-xs font-bold transition-colors" style={{ color }}>
            {label}
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-2xl bg-mint-500/10 px-3 py-2 text-xs font-semibold text-mint-500">
        <TrendingUp className="h-4 w-4" /> Trending up
      </div>
    </div>
  );
}
