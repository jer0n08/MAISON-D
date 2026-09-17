import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PageIntro({ title, description, image, alt, booking = true }: Readonly<{ title: string; description: string; image: string; alt: string; booking?: boolean }>) {
  return <section className="page-intro">
    <div className="container-regular grid md:grid-cols-2">
      <div className="flex flex-col items-start justify-center py-10 md:py-12 md:pr-12">
        <h1 className="text-4xl leading-[1.08] md:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-foreground/80">{description}</p>
        {booking && <Link href="/reservation" className="reference-button mt-6">Prendre rendez-vous <ArrowRight aria-hidden="true" className="size-4" /></Link>}
      </div>
      <div className="relative min-h-56 md:min-h-80"><Image src={image} alt={alt} fill priority sizes="(min-width:768px) 50vw, 100vw" className="object-cover" /></div>
    </div>
  </section>;
}
