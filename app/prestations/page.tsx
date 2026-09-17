import type { Metadata } from "next";
import { Footer } from "@/components/footer/footer";
import { CtaBand } from "@/components/home/cta-band";
import { GiftCta } from "@/components/home/gift-cta";
import { Navbar } from "@/components/navigation/navbar";
import { PageIntro } from "@/components/home/page-intro";
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
      <main className="inner-page">
        <PageIntro title="Nos soins" description="Des protocoles sur mesure, pour révéler votre beauté naturelle. Retrouvez tous nos soins, leurs durées et leurs tarifs." image="/images/home/premium-visage.webp" alt="Soin du visage Maison D." />

        <PrestationsList />
        <GiftCta />
        <CtaBand />
      </main>
      <Footer />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}
