import { Footer } from "@/components/footer/footer";
import { CtaBand } from "@/components/home/cta-band";
import { GiftCta } from "@/components/home/gift-cta";
import { Hero } from "@/components/home/hero";
import { ImmersiveBanner } from "@/components/home/immersive-banner";
import { Reveal } from "@/components/home/reveal";
import { ServicesGrid } from "@/components/home/services-grid";
import { Testimonials } from "@/components/home/testimonials";
import { Navbar } from "@/components/navigation/navbar";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Maison D.",
    description: "Institut de beauté et onglerie dédié à la manucure, au nail art et aux soins beauté.",
    areaServed: "France",
    serviceType: ["Onglerie", "Manucure", "Nail art", "Soins beauté"],
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  };

  return (
    <>
      <Navbar />
      <main className="pb-8">
        <Hero />
        <Reveal>
          <ServicesGrid />
        </Reveal>
        <Reveal>
          <ImmersiveBanner />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <GiftCta />
        </Reveal>
        <Reveal>
          <CtaBand />
        </Reveal>
      </main>
      <Footer />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}
