import type { Metadata, Viewport } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { SITE } from "@/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const hind = Hind_Siliguri({ subsets: ["bengali", "latin"], weight: ["500"], display: "swap", variable: "--font-bn" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hsc.readnap.com";
const shareDescription =
  "Plan your study days, track your syllabus, manage revision, and log your tests. Free, saves in your browser, no account needed.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: SITE.title,
    description: shareDescription,
    url: "/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "HSC Command Center dashboard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: "A free study command center for HSC  Science students.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/** Sets the theme before first paint to avoid a flash (saved choice, else the device setting). */
const THEME_INIT = `(function(){var t="dark";try{t=localStorage.getItem("hsc-theme")||(matchMedia("(prefers-color-scheme:light)").matches?"light":"dark")}catch(e){}document.documentElement.setAttribute("data-theme",t)})()`;

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: SITE.name,
  description: "A free study command center for HSC Science students: syllabus tracker, daily planner, revision system and test log.",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any web browser",
  url: SITE.appUrl,
  offers: { "@type": "Offer", price: "0", priceCurrency: "BDT" },
};

const NOSCRIPT = "<style>#ld{display:none!important}*{animation:none!important}.rv,.sw{opacity:1!important;transform:none!important}</style>";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${hind.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <noscript dangerouslySetInnerHTML={{ __html: NOSCRIPT }} />
      </head>
      <body>
        <a className="skip" href="#top">Skip to content</a>
        <div id="ld" aria-hidden="true"><i></i><b>{SITE.name}</b></div>
        <div className="bgfx" aria-hidden="true"></div>
        <div id="pr" aria-hidden="true"></div>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </body>
    </html>
  );
}
