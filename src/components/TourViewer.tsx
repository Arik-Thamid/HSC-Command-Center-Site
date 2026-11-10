"use client";

import { AnimatePresence, MotionConfig, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { TOUR } from "@/content/site";

const AUTO_MS = 7000;

/** Tabbed tour of real app screenshots. Auto-plays until the visitor picks a tab. */
export function TourViewer() {
  const [cur, setCur] = useState(0);
  const [auto, setAuto] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const visible = useRef(true);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver((e) => { visible.current = e[0].isIntersecting; });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => { if (visible.current) setCur((c) => (c + 1) % TOUR.length); }, AUTO_MS);
    return () => clearInterval(id);
  }, [auto]);

  const pick = (i: number) => { setAuto(false); setCur(i); };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let n: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") n = (i + 1) % TOUR.length;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") n = (i + TOUR.length - 1) % TOUR.length;
    if (n === null) return;
    e.preventDefault();
    pick(n);
    tabs.current[n]?.focus();
  };

  const t = TOUR[cur];
  return (
    <div className="tour" ref={rootRef}>
      <div className={auto ? "tl" : "tl stop"} role="tablist" aria-label="Product pages">
        {TOUR.map((item, i) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-selected={i === cur}
            ref={(el) => { tabs.current[i] = el; }}
            onClick={() => pick(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            <span className="mono">{`0${i + 1}`}</span>
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      <div className="tw">
        <div className="bar"><b></b><b></b><b></b><span className="mono">hsc-command-center.vercel.app{t.path}</span></div>
        <div className="shot">
          {TOUR.map((item, i) => (
            <Image
              key={item.img}
              src={`/img/${item.img}.webp`}
              alt={`Screenshot of the ${item.title} page`}
              width={2184}
              height={980}
              sizes="(max-width: 860px) 100vw, 900px"
              className={i === cur ? "on" : undefined}
              unoptimized
            />
          ))}
        </div>
        <MotionConfig reducedMotion="user">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={t.title}
              className="tc"
              aria-live="polite"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <h3>{t.heading}</h3>
              <p>{t.lead}</p>
              <ul>{t.points.map((p) => (<li key={p}>{p}</li>))}</ul>
            </motion.div>
          </AnimatePresence>
        </MotionConfig>
      </div>
    </div>
  );
}
