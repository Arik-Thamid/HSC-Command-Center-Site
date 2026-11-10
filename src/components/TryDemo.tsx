"use client";

import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useRef, useState } from "react";
import { DEMO_TASKS } from "@/content/site";

type Piece = { id: number; dx: number; dy: number; r: number; color: string };
const COLORS = ["#6ea8ff", "#64d89b", "#e8b86d", "#f5f5f7"];

/** Small "try the idea" checklist. Sample data only, nothing is saved. */
export function TryDemo() {
  const [tasks, setTasks] = useState(() => DEMO_TASKS.map((t) => ({ ...t })));
  const [pieces, setPieces] = useState<Piece[]>([]);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const done = tasks.filter((t) => t.done).length;
  const pct = Math.round((done / tasks.length) * 100);

  const burst = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setPieces(
      Array.from({ length: 34 }, (_, id) => {
        const a = Math.random() * Math.PI * 2;
        const d = 60 + Math.random() * 130;
        return { id, dx: Math.cos(a) * d, dy: Math.sin(a) * d - 40, r: Math.random() * 720 - 360, color: COLORS[id % 4] };
      }),
    );
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setPieces([]), 1200);
  };

  const toggle = (i: number) => {
    const next = tasks.map((t, j) => (j === i ? { ...t, done: !t.done } : t));
    setTasks(next);
    if (next.every((t) => t.done)) burst();
  };

  return (
    <MotionConfig reducedMotion="user">
    <div className="dm rv">
      <div className="mono" style={{ fontSize: 12, color: "var(--ac)", marginBottom: 12 }}>TRY THE IDEA · SAMPLE TASKS</div>
      <div className="top"><span>{done} of {tasks.length} tasks done</span><span>{pct}%</span></div>
      <div className="tr">
        <motion.i initial={false} animate={{ width: `${pct}%` }} transition={{ type: "spring", stiffness: 160, damping: 24 }} />
      </div>
      <div>
        {tasks.map((t, i) => (
          <motion.button
            key={t.label}
            type="button"
            className={t.done ? "tk d" : "tk"}
            onClick={() => toggle(i)}
            whileTap={{ scale: 0.985 }}
          >
            <u></u><span>{t.label}</span><em>{t.time}</em>
          </motion.button>
        ))}
      </div>
      <p className="mono" style={{ fontSize: 11, color: "var(--mu)", margin: "14px 0 0" }}>Demo only. Nothing here is saved to the real app.</p>
      <AnimatePresence>
        {pieces.map((p) => (
          <motion.i
            key={p.id}
            className="cf"
            style={{ left: "88%", top: 56, background: p.color }}
            initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
            animate={{ x: p.dx, y: p.dy + 130, rotate: p.r, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.2, 0.7, 0.3, 1] }}
          />
        ))}
      </AnimatePresence>
    </div>
    </MotionConfig>
  );
}
