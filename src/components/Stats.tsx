import { STATS } from "@/content/site";

export function Stats() {
  return (
    <section className="statsec">
      <div className="wrap">
        <div className="sg rv">
          {STATS.map((s) => (
            <div key={s.label}><b data-n={s.n}>0</b><span>{s.label}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
