"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Onglerie Mains",
    text: "Manucure, gainage, semi-permanent et soin des mains.",
    image: "/images/services/onglerie-mains-services.png",
    icon: "/icons/onglerie-mains.svg",
  },
  {
    title: "Onglerie Pieds",
    text: "Soin complet des pieds avec finitions élégantes.",
    image: "/images/services/onglerie-pieds-services.png",
    icon: "/icons/onglerie-pieds.svg",
  },
  {
    title: "Massages",
    text: "Massages décontraction et confort musculaire.",
    image: "/images/services/massages-services.png",
    icon: "/icons/massages.svg",
  },
  {
    title: "Soins Visage",
    text: "Routines adaptées aux besoins spécifiques de votre peau.",
    image: "/images/services/visages-soins-services.png",
    icon: "/icons/soins-visages.svg",
  },
  {
    title: "Épilation",
    text: "Épilation précise pour une peau douce et nette.",
    image: "/images/services/epilation-services.png",
    icon: "/icons/epilations.svg",
  },
  {
    title: "Blanchiment Dentaire",
    text: "Technique de blanchiment pour un sourire lumineux.",
    image: "/images/services/blanchiment-services.png",
    icon: "/icons/dentaire.svg",
  },
];

export function ServicesGrid() {
  return (
    <section id="prestations" className="container-regular py-18 md:py-24">
      <div className="mx-auto mb-10 max-w-lg text-center">

        <h2 className="mt-4 text-5xl text-[#2a2018]">Nos prestations</h2>
        <Image src="/images/ui/separator.svg" alt="Séparateur" width={222} height={15} className="mx-auto mt-3" />
      </div>

      <div className="grid gap-x-4 gap-y-16 pt-20 md:auto-rows-fr md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="relative h-full pb-4">
            <div className="absolute -top-11 left-1/2 z-20 -translate-x-1/2 overflow-hidden rounded-full border-2 border-line bg-surface">
              <Image src={service.icon} alt={`Icône ${service.title}`} width={80} height={80} className="block" />
            </div>

            <div className="flex h-full flex-col overflow-hidden rounded-xl border-2 border-line bg-surface">
              <div
                className="relative aspect-[1.35] overflow-hidden"
                onContextMenu={(event) => event.preventDefault()}
                onDragStart={(event) => event.preventDefault()}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  draggable={false}
                  className="pointer-events-none select-none object-cover"
                />
              </div>
              <h3 className="mt-4 px-4 text-center text-3xl text-[#2f241b]">{service.title}</h3>
              <p className="mx-auto mt-2 max-w-[26ch] flex-1 px-4 text-center text-base text-[#635448] md:text-[1.05rem]">{service.text}</p>
              <Link
                href="/prestations"
                className="mt-3 px-4 pb-4 text-center text-sm tracking-[0.24em] text-primary-dark uppercase transition hover:opacity-75"
              >
                En savoir plus
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
