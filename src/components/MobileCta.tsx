import { ArrowRight } from "lucide-react";
import { SITE } from "@/content/site";

/** Sticky call-to-action shown on phones after the hero (toggled by SiteEffects). */
export function MobileCta() {
  return <a className="mcta btn p" id="mc" href={SITE.appUrl}>Open the App <ArrowRight size={16} aria-hidden="true" /></a>;
}
