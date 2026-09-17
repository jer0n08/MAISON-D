import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/home/page-intro";
import { CtaBand } from "@/components/home/cta-band";
import { GiftCta } from "@/components/home/gift-cta";
import { Mail, MapPin, Phone } from "lucide-react";
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navigation/navbar";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Maison D. par email, téléphone ou via nos réseaux sociaux.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/contact",
    siteName: "Maison D.",
    title: "Contact | Maison D.",
    description: "Contactez Maison D. et retrouvez nos coordonnées ainsi que notre adresse.",
    images: [
      {
        url: "/og/maison-d-og.png",
        width: 1200,
        height: 630,
        alt: "Contact Maison D.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Maison D.",
    description: "Email, téléphone, réseaux sociaux et adresse de Maison D.",
    images: ["/og/maison-d-og.png"],
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Maison D.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 place Abbé Pierre de Porcaro",
      postalCode: "78100",
      addressLocality: "Saint-Germain-en-Laye",
      addressCountry: "FR",
    },
    telephone: "+33 6 70 15 25 69",
    email: "contact@maisond-institut.fr",
    sameAs: ["https://www.instagram.com", "https://www.facebook.com"],
  };

  return (
    <>
      <Navbar />
      <main className="inner-page">
        <PageIntro title="Venez nous rencontrer" description="Une question, une envie de soin ou une pause au Coffee Shop ? Retrouvez Maison D. au cœur de Saint-Germain-en-Laye." image="/images/home/premium-hero.webp" alt="L’accueil chaleureux de Maison D." />
        <div className="container-regular py-10 md:py-12">
          <section className="grid gap-8 md:grid-cols-2 md:items-stretch">
            <div className="h-full rounded-xl border border-line bg-surface p-6 md:p-8">
              <h2 className="text-2xl text-[#2f241b] md:text-3xl">Coordonnées</h2>

              <div className="mt-6 space-y-5 text-[#584a41]">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary-dark" aria-hidden="true" />
                  <a
                    href="https://share.google/1uyQrkA343bRGdB16"
                    target="_blank"
                    rel="noreferrer"
                    className="leading-7 transition hover:text-primary-dark hover:underline"
                  >
                    6 place Abbé Pierre de Porcaro, 78100 Saint-Germain-en-Laye
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <Phone className="size-5 shrink-0 text-primary-dark" aria-hidden="true" />
                  <a href="tel:+33670152569" className="leading-7 transition hover:text-primary-dark">
                    06 70 15 25 69
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <Mail className="size-5 shrink-0 text-primary-dark" aria-hidden="true" />
                  <a href="mailto:contact@maisond-institut.fr" className="leading-7 transition hover:text-primary-dark hover:underline">
                    contact@maisond-institut.fr
                  </a>
                </p>
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <h3 className="text-lg text-[#2f241b]">Réseaux sociaux</h3>
                <div className="mt-4 flex items-center gap-3">
                  <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="inline-flex size-11 items-center justify-center rounded-xl border border-line text-[#584a41] transition hover:text-primary-dark"
                  >
                    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="inline-flex size-11 items-center justify-center rounded-xl border border-line text-[#584a41] transition hover:text-primary-dark"
                  >
                    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
                      <path d="M13.48 21.5v-8.18h2.75l.41-3.19h-3.16V8.08c0-.93.26-1.56 1.58-1.56h1.69V3.66a22.31 22.31 0 0 0-2.46-.13c-2.44 0-4.1 1.49-4.1 4.23v2.36H7.44v3.19h2.75v8.18h3.29Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="h-full min-h-[460px] overflow-hidden rounded-xl border border-line bg-surface">
              <iframe
                title="Carte Google Maps - Maison D"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.9410036651643!2d2.0905830761219804!3d48.897461497956634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f62a1cb31f3%3A0x1f04435f4190a11a!2sMaison%20D%20-%20Institut%20de%20beaut%C3%A9%20%26%20onglerie%20%C3%A0%20Saint-Germain-en-Laye!5e0!3m2!1sfr!2sfr!4v1789636573379!5m2!1sfr!2sfr"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full min-h-[460px] w-full border-0"
              />
            </div>
          </section>
        </div>
        <GiftCta />
        <CtaBand />
      </main>
      <Footer />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}
