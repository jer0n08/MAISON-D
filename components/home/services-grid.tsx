"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Onglerie Mains",
    href: "/prestations/onglerie-mains",
    text: "Manucure, gainage, semi-permanent et soin des mains.",
    image: "/images/services/onglerie-mains-services.png",
    icon: "/icons/onglerie-mains.svg",
  },
  {
    title: "Onglerie Pieds",
    href: "/prestations/onglerie-pieds",
    text: "Soin complet des pieds avec finitions élégantes.",
    image: "/images/services/onglerie-pieds-services.png",
    icon: "/icons/onglerie-pieds.svg",
  },
  {
    title: "Massages",
    href: "/prestations/massages",
    text: "Massages décontraction et confort musculaire.",
    image: "/images/services/massages-services.png",
    icon: "/icons/massages.svg",
  },
  {
    title: "Soins Visage",
    href: "/prestations/soins-visage",
    text: "Routines adaptées aux besoins spécifiques de votre peau.",
    image: "/images/services/visages-soins-services.png",
    icon: "/icons/soins-visages.svg",
  },
  {
    title: "Épilation",
    href: "/prestations/epilation",
    text: "Épilation précise pour une peau douce et nette.",
    image: "/images/services/epilation-services.png",
    icon: "/icons/epilations.svg",
  },
  {
    title: "Blanchiment Dentaire",
    href: "/prestations/blanchiment-dentaire",
    text: "Technique de blanchiment pour un sourire lumineux.",
    image: "/images/services/blanchiment-services.png",
    icon: "/icons/dentaire.svg",
  },
];

export function ServicesGrid() {
  return (
    <section id="prestations" className="container-regular scroll-mt-28 py-14 md:py-20">
      <div className="mx-auto mb-6 max-w-2xl text-center">

        <h2 className="mt-4 text-3xl leading-tight text-balance text-[#2a2018] md:text-4xl">Nos prestations</h2>
        <Image src="/images/ui/separator.svg" alt="" width={222} height={15} className="mx-auto mt-3" />
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-foreground/75">
          Une manucure, un soin du visage ou une pause massage : découvrez nos six univers et trouvez le soin qui vous ressemble.
        </p>
      </div>

      <div className="grid gap-x-5 gap-y-16 pt-12 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="relative h-full">
            <div className="absolute -top-11 left-1/2 z-20 -translate-x-1/2 overflow-hidden rounded-full border-2 border-line bg-surface">
              <Image src={service.icon} alt="" width={80} height={80} className="block" />
            </div>

            <div className="flex h-full flex-col overflow-hidden rounded-none border border-line bg-surface">
              <div
                className="relative aspect-[1.35] overflow-hidden"
                onContextMenu={(event) => event.preventDefault()}
                onDragStart={(event) => event.preventDefault()}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  draggable={false}
                  className="pointer-events-none select-none object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="text-xl leading-tight text-balance text-foreground md:text-2xl">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-foreground/75">{service.text}</p>
              </div>
              <Link
                href={service.href}
                aria-label={`Découvrir les soins : ${service.title.toLocaleLowerCase("fr")}`}
                className="flex min-h-14 items-center justify-between gap-3 border-t border-line bg-background px-5 py-4 text-sm text-foreground transition-colors hover:bg-foreground hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground md:px-6"
              >
                Découvrir les soins
                <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
