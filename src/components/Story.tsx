import type { CSSProperties } from "react";
import { FRAGMENTS } from "@/content/site";

export function Story() {
  return (
    <section id="story">
      <div className="wrap center">
        <div className="sec-eye mono rv">The shift</div>
        <h2 className="rv">Too many things to manage.<br />One place to take control.</h2>
        <p className="sub rv">Scroll to watch scattered study fragments fall into place.</p>
        <div className="frags" id="fr" aria-hidden="true">
          {FRAGMENTS.map((f) => (
            <div className="fr" key={f.title} style={{ "--dx": f.dx, "--dy": f.dy, "--r": f.r } as CSSProperties}>
              <b>{f.title}</b>{f.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
