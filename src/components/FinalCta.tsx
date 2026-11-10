import { ArrowRight } from "lucide-react";
import { SITE } from "@/content/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <h2 className="rv">Make every study day count.</h2>
        <p className="sub rv" style={{ margin: "0 auto 12px" }}>Bring your HSC preparation into one organized workspace.</p>
        <p className="bn rv" style={{ margin: "0 0 32px" }}>আপনার এইচএসসি প্রস্তুতি, এক জায়গায়।</p>
        <div className="cta">
          <a className="btn p gl" href={SITE.appUrl}>Launch Command Center <ArrowRight size={16} aria-hidden="true" /></a>
          <a className="btn" href="#features">Explore the Features</a>
        </div>
      </div>
    </section>
  );
}
