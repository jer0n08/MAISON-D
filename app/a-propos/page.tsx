import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navigation/navbar";
import { PLANITY_URL } from "@/data/service-categories";

export const metadata: Metadata = {
  title: "À propos — Le concept Maison D.",
  description: "Découvrez Maison D. à Saint-Germain-en-Laye : institut de beauté et bien-être, Coffee Shop et espace pour votre enfant pendant votre rendez-vous.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "Le concept Maison D.",
    description: "Des soins, une pause gourmande et un espace pour les enfants, réunis dans un même lieu.",
    url: "/a-propos",
    images: [{ url: "/images/about/institut-hero-wide.webp", alt: "L’univers Maison D." }],
  },
};

const reviewLinks = [
  { name: "Google", logo: "google.png", href: "https://share.google/1uyQrkA343bRGdB16" },
  { name: "Planity", logo: "planity.svg", href: PLANITY_URL },
  { name: "Treatwell", logo: "treatwell.svg", href: "https://www.treatwell.fr/salon/maison-d/" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="inner-page">
        <section aria-label="Bienvenue chez Maison D.">
          <div className="container-regular grid gap-6 py-10 md:py-14">
            <h1 className="max-w-3xl text-5xl leading-[1.05] text-balance md:text-7xl">Maison D.,<br />institut de beauté<br /><em className="text-primary-dark">& bien-être.</em></h1>
            <p className="max-w-3xl text-base leading-8">Un institut de beauté & bien-être, un Coffee Shop et une Kid Area pensée pour votre enfant. À Saint-Germain-en-Laye, Maison D. réunit ces trois univers pour que votre rendez-vous trouve naturellement sa place dans votre journée.</p>
          </div>
        </section>

        <section aria-label="Quelques détails de Maison D." className="container-regular grid grid-cols-[1.4fr_1fr] gap-3 pb-12 md:grid-cols-[1.5fr_0.8fr_0.8fr] md:gap-5 md:pb-20">
          <div className="relative row-span-2 min-h-72 md:row-span-1 md:min-h-[440px]">
            <Image src="/images/maison/institut-equipe.webp" alt="L’équipe et les clientes autour des tables de manucure de Maison D." fill sizes="(min-width:1280px) 570px, (min-width:768px) 48vw, 58vw" className="object-cover" />
          </div>
          <div className="relative min-h-36 md:mt-14">
            <Image src="/images/maison/detail-serviettes.webp" alt="Vasque en pierre et serviettes préparées à l’institut" fill sizes="(min-width:1280px) 305px, (min-width:768px) 25vw, 40vw" className="object-cover" />
          </div>
          <div className="relative min-h-36 md:mb-14">
            <Image src="/images/about/jeux.webp" alt="Cubes en bois et livre illustré sur une table pour enfants" fill sizes="(min-width:1280px) 305px, (min-width:768px) 25vw, 40vw" className="object-cover" />
          </div>
        </section>

        <section className="border-y border-line bg-surface">
          <div className="container-regular grid gap-6 py-10 md:grid-cols-[1fr_1.3fr] md:gap-20 md:py-16">
            <h2 className="text-3xl leading-tight md:text-5xl">Un institut de beauté avec espace enfants à Saint-Germain-en-Laye</h2>
            <div className="space-y-4 text-base leading-8">
              <p>Un soin, puis un café. Un rendez-vous beauté pendant que votre enfant profite d’un espace qui lui est dédié. Ou simplement une pause gourmande : ici, les moments peuvent se prolonger et se partager.</p>
              <p>C’est cette rencontre entre beauté, détente et vie de famille qui fait le concept Maison D.</p>
            </div>
          </div>
        </section>

        <section className="container-regular py-12 md:py-20" aria-label="Les trois univers Maison D.">
          <article className="grid items-center gap-7 md:grid-cols-2 md:gap-16">
            <div className="relative aspect-[4/5] max-h-[560px] overflow-hidden rounded-t-[45%]"><Image src="/images/about/soin.webp" alt="Gestes d’un soin du visage" fill sizes="(min-width:768px) 45vw, 100vw" className="object-cover" /></div>
            <div className="md:py-10">
              <h2 className="text-4xl leading-tight md:text-5xl">Soins du visage, massages et onglerie</h2>
              <p className="mt-6 text-base leading-8">Kobido, soins du visage, drainage lymphatique, massages… L’institut est le point de départ de Maison D. Un temps pour vous, entre les mains d’une équipe à votre écoute.</p>
              <p className="mt-4 text-base leading-8">La beauté des mains et des pieds et l’épilation complètent la carte, pour vos habitudes beauté comme pour une envie particulière.</p>
              <Link href="/prestations" className="mt-7 inline-flex min-h-11 items-center gap-5 border-b border-primary-dark py-2">Explorer la carte des soins <ArrowRight aria-hidden="true" className="size-4" /></Link>
            </div>
          </article>

          <article className="mt-14 grid items-center gap-7 border-t border-line pt-12 md:mt-20 md:grid-cols-[1fr_1.2fr] md:gap-16 md:pt-16">
            <div>
              <h2 className="text-4xl leading-tight md:text-5xl">Le Coffee Shop Maison D. : matcha et ube latte</h2>
              <p className="mt-6 text-base leading-8">Le Coffee Shop fait partie de la maison. Pour prolonger un soin, se retrouver ou savourer une boisson, sans regarder tout de suite l’heure.</p>
              <p className="mt-4 text-base leading-8">Matcha latte, ube latte et chocolats signatures : une pause gourmande, avec des options végétales et sans lactose.</p>
            </div>
            <figure>
              <div className="relative aspect-[5/4]"><Image src="/images/maison/ube-maison.webp" alt="Ube latte et chocolat servis sur une table en pierre de Maison D." fill sizes="(min-width:768px) 52vw, 100vw" className="object-cover" /></div>
              <figcaption className="mt-3 text-sm text-foreground/75">Le Coffee Shop, une autre façon de profiter de Maison D.</figcaption>
            </figure>
          </article>

          <article className="mt-14 grid overflow-hidden bg-surface md:mt-20 md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative aspect-[4/3] self-center"><Image src="/images/maison/kid-activites.webp" alt="Dessin et jeux de construction dans la Kid Area de Maison D." fill sizes="(min-width:768px) 43vw, 100vw" className="object-cover" /></div>
            <div className="self-center p-6 md:p-12">
              <h2 className="text-4xl leading-tight md:text-5xl">La Kid Area : un espace pour votre enfant pendant votre soin</h2>
              <p className="mt-6 text-base leading-8">Parce que prendre soin de soi ne devrait pas être compliqué à organiser, la Kid Area accueille l’univers des enfants au sein de la maison.</p>
              <p className="mt-4 text-base leading-8">Un espace dédié aux enfants pendant votre rendez-vous. Pour préparer votre venue, l’équipe vous renseigne sur les modalités d’accueil des enfants.</p>
            </div>
          </article>
        </section>

        <section className="border-y border-line bg-surface">
          <div className="container-regular grid gap-10 py-12 md:grid-cols-[1.3fr_1fr] md:gap-20 md:py-16">
            <div>
              <h2 className="text-3xl md:text-4xl">Les avis Maison D. sur Google, Planity et Treatwell</h2>
              <figure className="mt-7">
                <blockquote className="text-xl leading-relaxed md:text-2xl">« Petit moment de qualité avec ma petite sœur : Ube latte et Drainage lymphatique 👯‍♀️ »</blockquote>
                <figcaption className="mt-5 text-sm text-foreground/75">Jenny, sur Google</figcaption>
              </figure>
            </div>
            <div className="self-center">
              <p className="mb-4 text-base leading-7">Découvrez les expériences de nos clientes sur les trois plateformes.</p>
              {reviewLinks.map((platform) => (
                <a key={platform.name} href={platform.href} target="_blank" rel="noreferrer" className="flex min-h-16 items-center gap-4 border-b border-line py-4 transition-colors hover:text-primary-dark">
                  <Image src={`/images/reviews/${platform.logo}`} alt={platform.name === "Treatwell" ? "Treatwell" : ""} width={platform.name === "Treatwell" ? 104 : 26} height={26} className="h-6 w-auto" />
                  {platform.name !== "Treatwell" && <span>{platform.name}</span>}
                  <ArrowUpRight aria-hidden="true" className="ml-auto size-5" />
                  <span className="sr-only"> : lire les avis, nouvel onglet</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="container-regular py-14 text-center md:py-20">
          <h2 className="text-4xl md:text-5xl">Votre rendez-vous beauté à Saint-Germain-en-Laye</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8">Pour un soin, un café ou un moment en famille,<br className="hidden md:block" /> retrouvez-nous à Saint-Germain-en-Laye.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link href="/reservation" className="reference-button">Prendre rendez-vous <ArrowRight aria-hidden="true" className="size-4" /></Link>
            <Link href="/contact" className="inline-flex min-h-11 items-center gap-3 px-4 py-3 underline underline-offset-4">Nous rendre visite</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
