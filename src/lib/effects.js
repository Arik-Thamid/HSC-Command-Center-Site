// @ts-nocheck
/**
 * Page-wide DOM effects (theme toggle, navigation, scroll-linked motion, reveals,
 * loader, pointer effects). Framework-independent; returns a cleanup function.
 */
export function initEffects() {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));
  const rm = matchMedia("(prefers-reduced-motion:reduce)").matches;
  const hover = matchMedia("(hover:hover)").matches;
  const off = [];
  const on = (t, ev, fn, o) => {
    t.addEventListener(ev, fn, o);
    off.push(() => t.removeEventListener(ev, fn, o));
  };

  /* theme (initial value is set by an inline script in <head>) */
  const root = document.documentElement;
  const th = $("#th");
  const th2 = $("#th2");
  const setTheme = (t, keep) => {
    root.setAttribute("data-theme", t);
    const next = t === "dark" ? "light" : "dark";
    th.setAttribute("aria-label", "Switch to " + next + " mode");
    th2.textContent = "Switch to " + next + " mode";
    if (keep) {
      try { localStorage.setItem("hsc-theme", t); } catch (e) {}
    }
  };
  const toggleTheme = () => setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark", true);
  setTheme(root.getAttribute("data-theme") === "light" ? "light" : "dark");
  on(th, "click", toggleTheme);
  on(th2, "click", toggleTheme);

  /* mobile menu */
  const nav = $("#nav"), bg = $("#bg"), mn = $("#mn");
  on(bg, "click", () => {
    const o = mn.classList.toggle("open");
    bg.setAttribute("aria-expanded", String(o));
    bg.setAttribute("aria-label", o ? "Close menu" : "Open menu");
  });
  on(mn, "click", (e) => {
    if (e.target.tagName === "A") {
      mn.classList.remove("open");
      bg.setAttribute("aria-expanded", "false");
      bg.setAttribute("aria-label", "Open menu");
    }
  });

  /* scroll-linked state (progress line, header, mobile CTA, active link) */
  const secs = ["tour", "features", "video", "tutorial", "faq"].map((id) => document.getElementById(id));
  const links = $$(".links a");
  const mc = $("#mc"), pr = $("#pr");
  const onScroll = () => {
    const y = scrollY, vh = innerHeight;
    nav.classList.toggle("sc", y > 30);
    pr.style.transform = "scaleX(" + Math.min(1, y / Math.max(1, document.documentElement.scrollHeight - vh)) + ")";
    mc.classList.toggle("on", y > vh * 0.7);
    secs.forEach((s, i) => {
      if (!s || !links[i]) return;
      const r = s.getBoundingClientRect();
      links[i].classList.toggle("on", r.top < vh * 0.4 && r.bottom > vh * 0.4);
    });
  };
  on(window, "scroll", onScroll, { passive: true });
  onScroll();
  /* (hero scale, story fragments, steps timeline and orbs are driven by GSAP ScrollTrigger in ScrollScenes) */

  /* pointer effects */
  const win = $("#win");
  if (!rm && hover) {
    const bf = $(".bgfx");
    on(window, "pointermove", (e) => {
      const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
      if (win) { win.style.setProperty("--ry", x * 6); win.style.setProperty("--rx", 8 - y * 4); }
      bf.style.setProperty("--mx", e.clientX + "px");
      bf.style.setProperty("--my", e.clientY + "px");
      $$("[data-d]").forEach((c) => { c.style.translate = x * +c.dataset.d + "px " + y * +c.dataset.d * 0.6 + "px"; });
    });
    $$(".btn").forEach((b) => {
      on(b, "pointermove", (e) => {
        const r = b.getBoundingClientRect();
        b.style.translate = (e.clientX - r.left - r.width / 2) * 0.2 + "px " + (e.clientY - r.top - r.height / 2) * 0.3 + "px";
      });
      on(b, "pointerleave", () => { b.style.translate = ""; });
    });
    $$(".bc,.rc").forEach((c) => {
      on(c, "pointermove", (e) => {
        const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        c.style.setProperty("--mx2", x * 100 + "%");
        c.style.setProperty("--my2", y * 100 + "%");
        c.style.setProperty("--tx2", (0.5 - y) * 5 + "deg");
        c.style.setProperty("--ty2", (x - 0.5) * 5 + "deg");
      });
      on(c, "pointerleave", () => {
        c.style.setProperty("--tx2", "0deg");
        c.style.setProperty("--ty2", "0deg");
      });
    });
  }

  /* heading word reveal (idempotent) */
  $$("h2.rv").forEach((h) => {
    let n = 0;
    Array.from(h.childNodes).forEach((c) => {
      if (c.nodeType !== 3) return;
      const f = document.createDocumentFragment();
      c.textContent.split(/(\s+)/).forEach((w) => {
        if (!w) return;
        if (/^\s+$/.test(w)) { f.appendChild(document.createTextNode(" ")); return; }
        const s = document.createElement("span");
        s.className = "sw";
        s.style.setProperty("--i", n++);
        s.textContent = w;
        f.appendChild(s);
      });
      h.replaceChild(f, c);
    });
  });

  /* intro loader (click to skip) */
  const ld = $("#ld");
  let hidden = false;
  const hideLoader = () => {
    if (hidden) return;
    hidden = true;
    document.body.classList.add("ready");
    if (ld) {
      ld.classList.add("off");
      setTimeout(() => { ld.style.display = "none"; }, 800);
    }
  };
  if (rm || !ld) hideLoader();
  else {
    on(ld, "click", hideLoader);
    const t = setTimeout(hideLoader, 1100);
    off.push(() => clearTimeout(t));
  }

  /* count-up numbers */
  const so = new IntersectionObserver((es) => {
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      so.unobserve(e.target);
      const n = +e.target.dataset.n, t0 = performance.now();
      if (rm || !n) { e.target.textContent = n; return; }
      const tick = (x) => {
        const p = Math.min(1, (x - t0) / 1200);
        e.target.textContent = Math.round(n * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 });
  $$(".sg b").forEach((b) => so.observe(b));
  off.push(() => so.disconnect());

  /* reveal on scroll */
  const io = new IntersectionObserver((es) => {
    es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  $$(".rv").forEach((el) => io.observe(el));
  off.push(() => io.disconnect());

  return () => off.forEach((f) => f());
}
