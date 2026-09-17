import { Footer } from "@/components/footer/footer";
import { Concept, LifeAtMaison } from "@/components/home/concept";
import { Hero } from "@/components/home/hero";
import { FeaturedOffers } from "@/components/home/featured-offers";
import { GiftCta } from "@/components/home/gift-cta";
import { ReviewPlatforms } from "@/components/home/review-platforms";
import { ServicesGrid } from "@/components/home/services-grid";
import { Testimonials } from "@/components/home/testimonials";
import { Navbar } from "@/components/navigation/navbar";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "BeautySalon", name: "Maison D.",
    description: "Institut de beauté et bien-être, coffee shop et kid area à Saint-Germain-en-Laye.",
    address: { "@type": "PostalAddress", streetAddress: "6 place de l’Abbé Pierre de Porcaro", addressLocality: "Saint-Germain-en-Laye", postalCode: "78100", addressCountry: "FR" },
    telephone: "+33670152569",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  };
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ReviewPlatforms />
        <FeaturedOffers />
        <ServicesGrid />
        <LifeAtMaison />
        <Concept />
        <Testimonials />
        <GiftCta />
      </main>
      <Footer />
      <script type="application/ld+json">{JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>
    </>
  );
}
