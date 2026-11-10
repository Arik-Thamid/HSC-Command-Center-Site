import { Rich } from "@/components/Rich";
import { TUTORIAL } from "@/content/site";

export function Tutorial() {
  return (
    <section id="tutorial">
      <div className="wrap center">
        <div className="sec-eye mono rv">Tutorial</div>
        <h2 className="rv">Learn it in ten minutes.</h2>
        <p className="sub rv">A step-by-step guide, from the first visit to your weekly routine.</p>
        <div className="tut rv">
          {TUTORIAL.map((g, i) => (
            <details key={g.title} open={i === 0}>
              <summary><span className="n mono">{String(i + 1).padStart(2, "0")}</span>{g.title}</summary>
              <span className="wh">{g.where}</span>
              <ol>{g.steps.map((s) => (<li key={s}><Rich text={s} /></li>))}</ol>
              {g.tip && <p className="tp">{g.tip}</p>}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
