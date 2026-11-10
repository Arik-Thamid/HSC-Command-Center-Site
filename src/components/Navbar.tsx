import { ArrowRight, Moon, Sun } from "lucide-react";
import { NAV, SITE } from "@/content/site";

export function Navbar() {
  return (
    <>
      <nav id="nav" aria-label="Primary">
        <div className="wrap">
          <a className="logo" href="#top"><i></i>{SITE.name}</a>
          <div className="links">
            {NAV.map((n) => (<a key={n.href} href={n.href}>{n.label}</a>))}
          </div>
          <div className="nr">
            <button className="th" id="th" type="button" aria-label="Switch to light mode">
              <Sun className="th-sun" size={18} aria-hidden="true" />
              <Moon className="th-moon" size={18} aria-hidden="true" />
            </button>
            <a className="btn p" href={SITE.appUrl}>Open Command Center</a>
            <button className="burger" id="bg" type="button" aria-label="Open menu" aria-expanded="false"><i></i><i></i></button>
          </div>
        </div>
      </nav>
      <div className="menu" id="mn">
        {NAV.map((n) => (<a key={n.href} href={n.href}>{n.label}</a>))}
        <a className="btn p" style={{ marginTop: 16 }} href={SITE.appUrl}>Open Command Center <ArrowRight size={16} aria-hidden="true" /></a>
        <button className="btn" id="th2" type="button" style={{ marginTop: 12 }}>Switch to light mode</button>
      </div>
    </>
  );
}
