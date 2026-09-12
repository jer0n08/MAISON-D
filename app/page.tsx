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
          <section id="institut" aria-labelledby="institut-title" className="container-regular py-14 md:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="institut-title" className="text-3xl leading-tight text-balance text-foreground md:text-4xl">
                Une maison pour prendre soin de vous
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-foreground/80">
                <p>
                  Au cœur de Saint-Germain-en-Laye, Maison D. réunit soins de beauté et petits plaisirs du quotidien.
                  Une manucure, un massage, un soin du visage… puis le temps de savourer une boisson au coffee shop.
                </p>
                <p>
                  Pensé pour les femmes comme pour les hommes, l’institut vous accueille dans une atmosphère chaleureuse,
                  avec un espace enfants et des expériences à partager à deux.
                </p>
              </div>
            </div>
          </section>
        </Reveal>
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
