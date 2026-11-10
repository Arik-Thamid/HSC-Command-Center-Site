import { TryDemo } from "@/components/TryDemo";
import { STEPS } from "@/content/site";

export function HowItWorks() {
  return (
    <section className="flat" id="how">
      <div className="wrap">
        <div className="sec-eye mono rv">How it works</div>
        <h2 className="rv">A clearer way to prepare.</h2>
        <div className="steps" id="steps">
          {STEPS.map((s) => (
            <div className="st" key={s.n}>
              <b className="mono">{s.n}</b>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
        <TryDemo />
      </div>
    </section>
  );
}
