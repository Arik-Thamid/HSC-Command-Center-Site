import { NAV, SITE } from "@/content/site";

const APP_LINKS = [
  { label: "Open application", href: SITE.appUrl },
  { label: "Syllabus", href: `${SITE.appUrl}syllabus` },
  { label: "Tests", href: `${SITE.appUrl}tests` },
  { label: "Settings & Data", href: `${SITE.appUrl}settings` },
];

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <a className="logo" href="#top"><i></i>{SITE.name}</a>
          <p style={{ maxWidth: "36ch" }}>A free study command center for HSC Science students.</p>
          <p>© {new Date().getFullYear()} {SITE.name}</p>
        </div>
        <div className="c">
          <b style={{ color: "var(--tx)" }}>Product</b>
          {NAV.map((n) => (<a key={n.href} href={n.href}>{n.label}</a>))}
        </div>
        <div className="c">
          <b style={{ color: "var(--tx)" }}>App</b>
          {APP_LINKS.map((l) => (<a key={l.label} href={l.href}>{l.label}</a>))}
        </div>
      </div>
    </footer>
  );
}
