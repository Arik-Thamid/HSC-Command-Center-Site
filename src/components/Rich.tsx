import { Fragment } from "react";

/** Renders a string where <b>…</b> marks bold text, without using dangerouslySetInnerHTML. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(<b>.*?<\/b>)/g).filter(Boolean);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("<b>") ? <b key={i}>{p.slice(3, -4)}</b> : <Fragment key={i}>{p}</Fragment>,
      )}
    </>
  );
}
