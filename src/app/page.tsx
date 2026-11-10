import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { MobileCta } from "@/components/MobileCta";
import { Navbar } from "@/components/Navbar";
import { Privacy } from "@/components/Privacy";
import { ScrollScenes } from "@/components/ScrollScenes";
import { Reviews } from "@/components/Reviews";
import { SiteEffects } from "@/components/SiteEffects";
import { Stats } from "@/components/Stats";
import { Story } from "@/components/Story";
import { Tour } from "@/components/Tour";
import { Tutorial } from "@/components/Tutorial";
import { VideoDemo } from "@/components/VideoDemo";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Story />
        <Tour />
        <Features />
        <VideoDemo />
        <HowItWorks />
        <Tutorial />
        <Reviews />
        <Privacy />
        <Faq />
        <FinalCta />
      </main>
      <MobileCta />
      <Footer />
      <SiteEffects />
      <ScrollScenes />
    </>
  );
}
