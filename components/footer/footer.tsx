import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

import { SERVICE_CATEGORIES } from "@/data/service-categories";

export function Footer() {
  return (
    <footer className="">
      <div className="container-regular py-8 md:py-10">
        <div className="flex justify-center">
          <Image
            src="/images/brand/maison-d-monogramme.svg"
            alt="Maison D. Monogramme"
            width={220}
            height={101}
            className="h-auto w-full max-w-[220px]"
          />
        </div>

        <nav aria-label="Prestations en pied de page" className="mt-8 border-y border-line py-7 md:py-8">
          <h2 className="text-xl leading-tight text-foreground md:text-2xl">Nos prestations</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 md:grid-cols-4">
            {SERVICE_CATEGORIES.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/prestations/${category.slug}`}
                  className="inline-flex min-h-11 items-center rounded-none py-2 text-base leading-6 text-foreground/80 transition-colors hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {category.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/prestations" className="inline-flex min-h-11 items-center rounded-none py-2 text-base leading-6 text-foreground underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">
                Tous les soins et tarifs
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-6">
          <div className="space-y-3 text-base leading-6 text-[#584a41]">
            <h2 className="text-xl leading-tight text-foreground md:text-2xl">Notre adresse</h2>
            <p className="flex items-center gap-2">
              <MapPin className="size-5 shrink-0 text-primary-dark" aria-hidden="true" />
              <a
                href="https://share.google/1uyQrkA343bRGdB16"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-primary-dark hover:underline"
              >
                6 place de l&apos;abbé de Porcaro, Saint-Germain-en-Laye, 78100
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="size-5 shrink-0 text-primary-dark" aria-hidden="true" />
              <a href="tel:+33670152569" className="transition hover:text-primary-dark">
                06 70 15 25 69
              </a>
            </p>
          </div>

          <div className="space-y-3 text-base leading-6 text-[#584a41] md:text-center">
            <h2 className="text-xl leading-tight text-foreground md:text-2xl">Nos réseaux</h2>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-primary-dark md:justify-center"
            >
              <svg viewBox="0 0 24 24" className="size-5 shrink-0 text-primary-dark" fill="currentColor" aria-hidden="true">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-primary-dark md:justify-center"
            >
              <svg viewBox="0 0 24 24" className="size-5 shrink-0 text-primary-dark" fill="currentColor" aria-hidden="true">
                <path d="M13.48 21.5v-8.18h2.75l.41-3.19h-3.16V8.08c0-.93.26-1.56 1.58-1.56h1.69V3.66a22.31 22.31 0 0 0-2.46-.13c-2.44 0-4.1 1.49-4.1 4.23v2.36H7.44v3.19h2.75v8.18h3.29Z" />
              </svg>
              <span>Facebook</span>
            </a>
          </div>

          <div className="space-y-3 text-base leading-6 text-[#584a41]">
            <h2 className="text-xl leading-tight text-foreground md:text-2xl">Nos horaires</h2>
            <p>Lundi - Samedi: 10h - 20h</p>
            <p>Dimanche: 10h - 18h</p>
          </div>
        </div>
      </div>
      <div className="border-t border-line mb-18 py-4 text-sm text-[#7b6b5f] md:mb-0">
        <div className="container-regular flex items-center justify-between gap-4">
          <p>© 2026 Maison D. Tous droits reserves.</p>
          <Link href="/mentions-legales" className="transition hover:text-primary-dark">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
