"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

/**
 * Smooth scrolling (Lenis) and scroll-scrubbed scenes (GSAP ScrollTrigger):
 *  - hero app window scales up as you scroll away from the top
 *  - story fragments fall into place
 *  - "how it works" timeline fills and lights its steps
 *  - background orbs drift (parallax)
 * With reduced motion enabled, nothing is animated and final states are shown.
 */
export function ScrollScenes() {
  useEffect(() => {
    const fr = document.getElementById("fr");
    const steps = document.getElementById("steps");
    const stepEls = Array.from(document.querySelectorAll<HTMLElement>("#steps .st"));

    const showFinal = () => {
      fr?.style.setProperty("--p", "1");
      steps?.style.setProperty("--p", "1");
      stepEls.forEach((s) => s.classList.add("on"));
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      showFinal();
      return;
    }

    let lenis: Lenis | null = null;
    let ctx: ReturnType<typeof gsap.context> | null = null;
    const tick = (time: number) => { lenis?.raf(time * 1000); };

    try {
      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({ duration: 1.1, smoothWheel: true, anchors: { offset: -70 } });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      ctx = gsap.context(() => {
        gsap.fromTo(
          "#win",
          { "--s": 0.92 },
          { "--s": 1, ease: "none", scrollTrigger: { trigger: "#top", start: "top top", end: "bottom 40%", scrub: true } },
        );

        if (fr) {
          gsap.fromTo(
            fr,
            { "--p": 0 },
            { "--p": 1, ease: "none", scrollTrigger: { trigger: fr, start: "top 85%", end: "top 35%", scrub: true } },
          );
        }

        if (steps) {
          gsap.fromTo(
            steps,
            { "--p": 0 },
            {
              "--p": 1,
              ease: "none",
              scrollTrigger: {
                trigger: steps,
                start: "top 80%",
                end: "top 30%",
                scrub: true,
                onUpdate: (self) => {
                  stepEls.forEach((s, i) => s.classList.toggle("on", self.progress >= i / 3.01));
                },
              },
            },
          );
        }

        gsap.utils.toArray<HTMLElement>(".orb").forEach((orb) => {
          gsap.to(orb, {
            y: Number(orb.dataset.s ?? 0) * 600,
            ease: "none",
            scrollTrigger: { trigger: document.body, start: "top top", end: "+=2400", scrub: true },
          });
        });
      });
    } catch (err) {
      // Never let a motion problem break the page: fall back to final states.
      console.error("ScrollScenes failed, using static layout", err);
      showFinal();
    }

    return () => {
      gsap.ticker.remove(tick);
      ctx?.revert();
      lenis?.destroy();
    };
  }, []);

  return null;
}
