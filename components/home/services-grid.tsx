import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  { title: "Soins visage", href: "/prestations/soins-visage", text: "Kobido, soins sur mesure, anti-âge, éclat", image: "visage" },
  { title: "Soins corps", href: "/prestations/massages", text: "Massages, drainage lymphatique, minceur et relaxation", image: "corps" },
  { title: "Onglerie", href: "/prestations/onglerie-mains", text: "Manucure russe, semi-permanent, gainage, rallongements", image: "ongles" },
  { title: "Épilation", href: "/prestations/epilation", text: "Au fil ou à la cire, pour une peau douce", image: "epilation" },
  { title: "Beauté des pieds", href: "/prestations/onglerie-pieds", text: "Beauté des pieds, vernis et massage", image: "pieds" },
  { title: "Blanchiment dentaire", href: "/prestations/blanchiment-dentaire", text: "Séances de blanchiment dentaire esthétique", image: "sourire" },
] as const;

export function ServicesGrid() {
  return (
    <section id="prestations" aria-labelledby="soins-title" className="scroll-mt-20 reference-services py-10 text-foreground md:py-12">
      <div className="container-regular">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <div><h2 id="soins-title" className="text-4xl leading-tight md:text-5xl">Nos soins</h2></div>
          <div className="max-w-xl"><p className="text-sm leading-7 text-foreground/75">Des protocoles sur mesure, pour révéler votre beauté naturelle.</p><Link href="/prestations" className="mt-1 inline-flex min-h-11 items-center gap-4 text-sm underline decoration-primary underline-offset-8">La carte des soins <ArrowUpRight aria-hidden="true" className="size-4" /></Link></div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="reference-service-card group block bg-surface text-center focus-visible:outline-2 focus-visible:outline-offset-8">
              <div className="relative aspect-[4/3] overflow-hidden bg-primary/20">
                <Image src={`/images/home/premium-${service.image}.webp`} alt={service.text} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none" />
                <span className="absolute bottom-3 right-3 flex size-11 items-center justify-center rounded-full bg-surface text-foreground transition-transform group-hover:-rotate-45 motion-reduce:transition-none"><ArrowUpRight aria-hidden="true" className="size-5" /></span>
              </div>
              <h3 className="mt-4 text-2xl">{service.title}</h3><p className="mx-auto mt-2 max-w-xs px-4 pb-5 text-sm leading-6 text-foreground/75">{service.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
