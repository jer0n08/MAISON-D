import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin, Phone } from "lucide-react";

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

        <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-6">
          <div className="space-y-3 text-base text-[#584a41] md:text-[1.05rem]">
            <p className="flex items-center gap-2">
              <MapPin className="size-5 shrink-0 text-primary-dark" aria-hidden="true" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=6+place+de+l%27abb%C3%A9+de+Porcaro,+Saint-Germain-en-Laye,+78100"
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

          <div className="space-y-3 text-base text-[#584a41] md:text-[1.05rem] md:text-center">
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

          <div className="space-y-2 text-base text-[#584a41] md:text-[1.05rem]">
            <p className="flex items-center gap-2">
              <Clock3 className="size-5 shrink-0 text-primary-dark" aria-hidden="true" />
              <span>Horaires</span>
            </p>
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
