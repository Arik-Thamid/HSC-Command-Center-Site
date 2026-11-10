import { FAQ } from "@/content/site";

export function Faq() {
  return (
    <section className="flat" id="faq">
      <div className="wrap faq">
        <div className="sec-eye mono rv">FAQ</div>
        <h2 className="rv">Questions, answered.</h2>
        {FAQ.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
