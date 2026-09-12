import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navigation/navbar";
import { ServicePrices } from "@/components/prestations/service-prices";
import prestationsData from "@/data/prestations.json";
import { PLANITY_URL, SERVICE_CATEGORIES } from "@/data/service-categories";

type Props = Readonly<{ params: Promise<{ slug: string }> }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map(({ slug }) => ({ slug }));
}

function getCategory(slug: string) {
  const category = SERVICE_CATEGORIES.find((item) => item.slug === slug);
  if (!category) notFound();
  return category;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).slug);
  const title = `${category.label} à Saint-Germain-en-Laye`;
  const url = `/prestations/${category.slug}`;

  return {
    title,
    description: category.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: "Maison D.",
      title: `${title} | Maison D.`,
      description: category.metaDescription,
      url,
      images: [{ url: category.image, alt: category.label }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Maison D.`,
      description: category.metaDescription,
      images: [category.image],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const category = getCategory((await params).slug);
  const services = prestationsData.filter((service) => service.category === category.key);
  const relatedCategories = SERVICE_CATEGORIES.filter((item) => item.slug !== category.slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: category.label,
    description: category.introduction,
    url: `${siteUrl}/prestations/${category.slug}`,
    serviceType: category.label,
    areaServed: { "@type": "City", name: "Saint-Germain-en-Laye" },
    provider: {
      "@type": "BeautySalon",
      name: "Maison D.",
      url: siteUrl,
      telephone: "+33670152569",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6 place de l’Abbé Pierre de Porcaro",
        addressLocality: "Saint-Germain-en-Laye",
        postalCode: "78100",
        addressCountry: "FR",
      },
    },
  };

  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <div className="container-regular">
          <nav aria-label="Fil d’Ariane" className="py-5 text-sm text-primary-dark">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/" className="inline-flex min-h-6 items-center hover:underline">Accueil</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/prestations" className="inline-flex min-h-6 items-center hover:underline">Nos soins</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">{category.label}</li>
            </ol>
          </nav>

          <section aria-labelledby="service-title" className="overflow-hidden rounded-none border border-line bg-surface">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[480px]">
                <Image
                  src={category.image}
                  alt={`${category.label} chez Maison D.`}
                  fill
                  priority
                  sizes="(min-width: 1280px) 590px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-9 lg:p-12">
                <h1 id="service-title" className="text-4xl leading-[1.08] text-foreground md:text-5xl lg:text-6xl">
                  {category.label}
                </h1>
                <p className="mt-5 text-base leading-7 text-foreground/80">{category.introduction}</p>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href={PLANITY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-none bg-foreground px-5 py-3 text-sm text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                  >
                    Prendre rendez-vous
                  </a>
                  <a href="#tarifs" className="inline-flex min-h-11 items-center gap-2 text-sm text-foreground underline underline-offset-4">
                    Voir les tarifs <ArrowRight aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="tarifs" aria-label="Soins et tarifs" className="scroll-mt-32 py-14 md:py-20">
            <div className="grid items-start gap-8 lg:grid-cols-[1fr_2fr] lg:gap-14">
              <div>
                <p className="text-base leading-7 text-foreground/80">{category.detail}</p>
                <Link href="/contact" className="mt-5 inline-flex min-h-11 items-center text-sm text-foreground underline underline-offset-4">
                  Une question ? Contactez-nous
                </Link>
              </div>
              <div className="rounded-none border border-line bg-surface p-5 md:p-8">
                <ServicePrices services={services} />
                <a
                  href={PLANITY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-none bg-foreground px-4 py-3 text-center text-sm text-white transition-colors hover:bg-primary-dark"
                >
                  Voir les disponibilités sur Planity <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
                </a>
              </div>
            </div>
          </section>

          <section aria-labelledby="autres-soins-title" className="border-t border-line py-12 md:py-16">
            <h2 id="autres-soins-title" className="text-3xl text-foreground md:text-4xl">Découvrez aussi</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCategories.map((item) => (
                <Link
                  key={item.slug}
                  href={`/prestations/${item.slug}`}
                  className="flex items-center justify-between gap-3 rounded-none border border-line bg-surface p-5 text-foreground transition-colors hover:border-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {item.label}<ArrowRight aria-hidden="true" className="size-4 shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <script type="application/ld+json">{JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>
    </>
  );
}
