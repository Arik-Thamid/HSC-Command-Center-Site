import { CalendarCheck, CalendarDays, ClipboardCheck, LayoutDashboard, Map, PenLine, RefreshCw, Settings, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { IconBadge } from "@/components/IconBadge";
import { FEATURES, LEGEND, SUBJECTS } from "@/content/site";
import type { Feature } from "@/content/site";

const ICONS: Record<string, LucideIcon> = {
  "01": LayoutDashboard,
  "02": CalendarCheck,
  "03": BookOpen,
  "04": RefreshCw,
  "05": ClipboardCheck,
  "06": PenLine,
  "07": CalendarDays,
  "08": Map,
  "09": Settings,
};

function FeatureIcon({ id }: { id: string }) {
  const Icon = ICONS[id];
  return Icon ? (<IconBadge><Icon size={20} strokeWidth={1.75} /></IconBadge>) : null;
}

const sizeClass = { wide: "bc x rv", half: "bc w rv", small: "bc rv" } as const;

function FeatureImage({ f }: { f: Feature }) {
  if (!f.img) return null;
  return (
    <Image src={`/img/${f.img}.webp`} alt={f.alt ?? ""} width={2184} height={980} sizes="(max-width: 860px) 100vw, 560px" loading="lazy" unoptimized />
  );
}

export function Features() {
  return (
    <section id="features">
      <div className="wrap">
        <div className="sec-eye mono rv">Features</div>
        <h2 className="rv">Everything important.<br />One workspace.</h2>
        <p className="sub rv">Nine pages, built around how an HSC 2027 Science student actually prepares.</p>
        <div className="bento">
          {FEATURES.map((f) => {
            const text = (
              <div>
                <FeatureIcon id={f.id} />
                <span className="mono">{f.label}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
                {f.legend && (
                  <div className="leg">
                    {LEGEND.map((l) => (<span key={l.label}><i style={{ background: l.color }}></i>{l.label}</span>))}
                  </div>
                )}
              </div>
            );
            if (f.size !== "wide") {
              return (
                <div className={sizeClass[f.size]} key={f.id}>
                  <FeatureIcon id={f.id} />
                  <span className="mono">{f.label}</span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              );
            }
            return (
              <div className={sizeClass.wide} key={f.id}>
                {f.imgFirst ? (<><FeatureImage f={f} />{text}</>) : (<>{text}<FeatureImage f={f} /></>)}
              </div>
            );
          })}
        </div>
        <div className="center">
          <p className="sub rv" style={{ marginTop: 56 }}>13 papers across six subject groups, already in the app:</p>
          <div className="subj rv">{SUBJECTS.map((s) => (<span key={s}>{s}</span>))}</div>
        </div>
      </div>
    </section>
  );
}
