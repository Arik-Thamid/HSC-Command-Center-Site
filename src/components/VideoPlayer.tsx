"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";
import { VIDEO_CHAPTERS } from "@/content/site";

/** Demo video with a chapter list that jumps to each scene. */
export function VideoPlayer() {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(-1);

  const update = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { setActive(-1); return; }
    let k = 0;
    VIDEO_CHAPTERS.forEach((c, i) => { if (v.currentTime >= c.start) k = i; });
    setActive(k);
  };

  const jump = (start: number) => {
    const v = ref.current;
    if (!v) return;
    v.currentTime = start;
    void v.play();
  };

  return (
    <>
      <div className="vw rv">
        <div className="bar"><b></b><b></b><b></b><span className="mono">hsc-command-center.vercel.app</span></div>
        <video
          ref={ref}
          controls
          playsInline
          preload="metadata"
          poster="/img/dash.webp"
          aria-label="Demo video of the HSC Command Center app"
          onTimeUpdate={update}
          onPlay={update}
          onPause={update}
        >
          <source src="/media/demo.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </div>
      <div className="vch" role="group" aria-label="Jump to a part of the video">
        {VIDEO_CHAPTERS.map((c, i) => (
          <button key={c.label} type="button" className={i === active ? "on" : undefined} onClick={() => jump(c.start)}>
            <Play size={12} aria-hidden="true" className="mr-2 inline-block align-[-1px]" />{c.label}
          </button>
        ))}
      </div>
      <p className="mono" style={{ fontSize: 12, color: "var(--mu)", marginTop: 14 }}>Turn the sound on for the full demo.</p>
    </>
  );
}
