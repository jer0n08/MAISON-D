"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectCards } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

import { PLANITY_URL } from "@/data/service-categories";

type Platform = "Google" | "Planity" | "Treatwell";
interface Review {
  id: string;
  platform: Platform;
  name: string;
  text: string;
  rating?: number;
}

const platforms: Record<Platform, { href: string; logo: string; width: number; height: number }> = {
  Google: { href: "https://share.google/1uyQrkA343bRGdB16", logo: "/images/reviews/google.png", width: 28, height: 28 },
  Planity: { href: PLANITY_URL, logo: "/images/reviews/planity.svg", width: 28, height: 28 },
  Treatwell: { href: "https://www.treatwell.fr/salon/maison-d/", logo: "/images/reviews/treatwell.svg", width: 108, height: 28 },
};

// Google: selection already documented in the project, consulted 12/09/2026.
// Planity and Treatwell: short complete reviews consulted 16/09/2026.
// Keep the original wording and platform; do not infer missing star ratings.
const reviews: readonly Review[] = [
  { id: "google-coralie", platform: "Google", name: "Coralie", rating: 5, text: "Super expérience dans ce nouveau salon ! Merci encore pour tout le moment était parfait ! Je recommande 😊" },
  { id: "planity-catherine", platform: "Planity", name: "Catherine", rating: 5, text: "Très bon accueil. Prestation soignée en prenant le temps ! Je conseille" },
  { id: "treatwell-noemie", platform: "Treatwell", name: "Noémie", rating: 5, text: "Parfait" },
  { id: "google-jenny", platform: "Google", name: "Jenny", rating: 5, text: "Petit moment de qualité avec ma petite sœur : Ube latte et Drainage lymphatique 👯‍♀️" },
  { id: "planity-virginie", platform: "Planity", name: "Virginie", rating: 5, text: "Superbe massage amincissant super moment merci" },
  { id: "treatwell-julia", platform: "Treatwell", name: "Julia", rating: 5, text: "Une nouvelle super expérience au salon, cette fois-ci avec un autre personnel fort sympathique, comme d’habitude." },
];

export function Testimonials() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const move = (direction: number) => {
    if (direction < 0) swiperRef.current?.slidePrev();
    else swiperRef.current?.slideNext();
  };

  const buttonClass = "inline-flex size-12 items-center justify-center rounded-full border border-line bg-surface text-foreground transition-colors hover:bg-foreground hover:text-surface focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-default disabled:opacity-30 disabled:hover:bg-surface disabled:hover:text-foreground";

  return (
    <section id="avis" aria-labelledby="avis-title" className="container-regular scroll-mt-28 py-10 md:py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="avis-title" className="text-3xl leading-tight text-balance text-foreground md:text-4xl">Elles en parlent mieux que nous</h2>
        <Image src="/images/ui/separator.svg" alt="" width={222} height={15} className="mx-auto mt-5" />
      </div>
      <div className="mx-auto mt-8 max-w-lg px-7 py-5 sm:px-10" data-lenis-prevent>
      <Swiper
        id="avis-carousel"
        modules={[EffectCards, A11y]}
        effect="cards"
        cardsEffect={{ perSlideOffset: 7, perSlideRotate: reducedMotion ? 0 : 3, rotate: !reducedMotion, slideShadows: false }}
        speed={reducedMotion ? 0 : 400}
        grabCursor
        rewind
        a11y={{ containerMessage: "Avis Google, Planity et Treatwell", containerRoleDescriptionMessage: "carrousel", itemRoleDescriptionMessage: "avis", slideLabelMessage: "{{index}} sur {{slidesLength}}" }}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
        className="reviews-swiper"
      >
        {reviews.map((review, index) => {
          const platform = platforms[review.platform];
          return (
            <SwiperSlide key={review.id} className="rounded-2xl border border-line bg-surface" inert={activeIndex !== index}>
            <figure className="flex h-full min-w-0 flex-col p-6 sm:p-8">
              <div className="flex min-h-9 items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Image src={platform.logo} alt="" width={platform.width} height={platform.height} className="h-7 w-auto object-contain" />
                  {review.platform !== "Treatwell" && <span className="text-sm">{review.platform}</span>}
                  {review.platform === "Treatwell" && <span className="sr-only">Treatwell</span>}
                </div>
                {review.rating && <span aria-label={`${review.rating} sur 5`} className="flex gap-0.5 text-amber-500">
                  {Array.from({ length: review.rating }, (_, i) => <Star key={i} aria-hidden="true" className="size-3 fill-current" />)}
                </span>}
              </div>
              <blockquote className="mt-6 flex-1 text-base leading-7 text-foreground/85">
                <p>« {review.text} »</p>
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="text-sm">{review.name}</p>
              </figcaption>
            </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
      <div className="mx-auto mt-5 flex max-w-sm items-center justify-center gap-4">
        <p aria-live="polite" aria-atomic="true" className="sr-only">
          Avis {activeIndex + 1} sur {reviews.length}
        </p>
        <div className="flex gap-3">
          <button type="button" aria-label="Avis précédent" aria-controls="avis-carousel" onClick={() => move(-1)} className={buttonClass}><ChevronLeft aria-hidden="true" className="size-5" /></button>
          <button type="button" aria-label="Avis suivant" aria-controls="avis-carousel" onClick={() => move(1)} className={buttonClass}><ChevronRight aria-hidden="true" className="size-5" /></button>
        </div>
      </div>
    </section>
  );
}
