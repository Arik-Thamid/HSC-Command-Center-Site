import { ArrowDown, ArrowRight } from "lucide-react";
import { AppSim } from "@/components/AppSim";
import { PAGES, SITE } from "@/content/site";

export function Hero() {
  const marquee = [...PAGES, ...PAGES];
  return (
    <header className="hero" id="top">
      <i className="orb" data-s=".25" style={{ left: -80, top: 120 }}></i>
      <i className="orb" data-s="-.15" style={{ right: -100, top: 320, background: "radial-gradient(circle,#64d89b,transparent 70%)", opacity: 0.16 }}></i>
      <div className="wrap" style={{ position: "relative" }}>
        <div className="eyebrow mono">HSC Batch · Your academic command center</div>
        <h1>
          <span><b>Your HSC Journey.</b></span>
          <span><b>Under Control.</b></span>
        </h1>
        <p className="lead">
          One free workspace to plan your study days, track your syllabus, log your tests, and keep your HSC preparation on pace.
        </p>
        <div className="cta">
          <a className="btn p gl" href={SITE.appUrl}>Open Command Center <ArrowRight size={16} aria-hidden="true" /></a>
          <a className="btn" href="#tour">Explore the Product <ArrowDown size={16} aria-hidden="true" /></a>
        </div>
        <p className="trust mono">Free to use · Saves in your browser · No account needed</p>
        <div className="stage">
          <div className="win" id="win">
            <div className="bar"><b></b><b></b><b></b><span className="mono">hsc-command-center.vercel.app</span></div>
            <AppSim />
            <div className="note">Interactive recreation of the app with sample data. Click around, or let it play.</div>
          </div>
          <div className="chip" data-d="40" style={{ left: "-1%", top: "30%" }}><b>&#9679;</b>Saved automatically in this browser</div>
          <div className="chip" data-d="-30" style={{ right: "-1%", bottom: "12%", animationDelay: "-3.5s" }}><b>&#9679;</b>Export a backup in Settings</div>
          <div className="fc" data-d="70" style={{ right: "-2%", top: -34 }}>
            <svg viewBox="0 0 44 44" aria-hidden="true"><circle className="bg" cx="22" cy="22" r="18" /><circle className="fg2" cx="22" cy="22" r="18" /></svg>
            <div><small>Sample · Syllabus</small><b>30% done</b></div>
          </div>
          <div className="fc" data-d="-60" style={{ left: "-3%", bottom: "6%", animationDelay: "-4s" }}>
            <div><small>Sample · Revisions due</small><b className="mono" style={{ color: "var(--ok)" }}>3 today</b></div>
          </div>
        </div>
      </div>
      <div className="mq" aria-hidden="true">
        <div>{marquee.map((p, i) => (<span key={i}>{p}</span>))}</div>
      </div>
    </header>
  );
}
