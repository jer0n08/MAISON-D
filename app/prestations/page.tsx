import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer/footer";
import { CtaBand } from "@/components/home/cta-band";
import { GiftCta } from "@/components/home/gift-cta";
import { Navbar } from "@/components/navigation/navbar";
import { PlanityWidget } from "@/components/planity/planity-widget";
import { PrestationsList } from "@/components/prestations/prestations-list";

export const metadata: Metadata = {
  title: "Prestations",
  description:
    "Découvrez les prestations Maison D. : soins du visage, onglerie, beauté des mains et des pieds, épilation et massages.",
  alternates: {
    canonical: "/prestations",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/prestations",
    siteName: "Maison D.",
    title: "Prestations | Maison D.",
    description:
      "Explorez les soins Maison D. et réservez votre moment bien-être : onglerie, soins visage, massages et plus.",
    images: [
      {
        url: "/og/maison-d-og.png",
        width: 1200,
        height: 630,
        alt: "Prestations Maison D.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestations | Maison D.",
    description: "Toutes les prestations Maison D. pour sublimer votre beauté au quotidien.",
    images: ["/og/maison-d-og.png"],
  },
};

export default function PrestationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Maison D.",
    description: "Prestations de beauté : onglerie, soins visage, massages, épilation.",
    areaServed: "France",
    serviceType: ["Onglerie", "Soins visage", "Massages", "Épilation"],
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/prestations`,
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[54svh] overflow-hidden border-b border-line md:min-h-[60svh]">
          <Image
            src="/images/services/massages-services.png"
            alt="Massage Maison D."
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,20,14,0.72),rgba(29,20,14,0.46),rgba(29,20,14,0.24))]" />

          <div className="container-regular relative z-10 flex min-h-[54svh] items-center justify-center py-12 text-center text-white md:min-h-[60svh]">
            <div className="max-w-2xl">
              <h1 className="text-5xl leading-[1.02] md:text-7xl">
                Nos soins
                <br />
                sur-mesure
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/85 md:text-[1.05rem]">
                Soin du visage, beauté des mains, onglerie, et instants bien-être dans un cadre raffiné et apaisant.
              </p>
              <Link
                href="https://www.planity.com/maison-d-78100-saint-germain-en-laye-dsr"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-block rounded-none bg-primary px-5 py-3 text-base text-white transition hover:bg-primary-dark md:text-[1.05rem]"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </section>

        <PrestationsList />
        <PlanityWidget />
        <GiftCta />
        <CtaBand />
      </main>
      <Footer />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}
