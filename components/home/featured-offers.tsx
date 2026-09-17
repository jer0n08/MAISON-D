"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";

// Tarifs et intitulés fournis par la cliente dans sa capture Planity.
const offers = [
  { title: "Offre Duo Beauty", description: "Massage, pose de vernis, soin visage, pause gourmande, photo et remise de 10 %.", detail: "Ne cherchez plus quoi faire à deux !", duration: "3 h", price: "250 €", image: "premium-corps", alt: "Massage dans une ambiance douce et chaleureuse" },
  { title: "L’Impeccable — vernis classique", description: "Manucure russe, beauté des mains et des pieds avec vernis classique.", detail: "", duration: "1 h 30", price: "80 €", image: "premium-pieds", alt: "Beauté des pieds et vernis naturel" },
  { title: "L’Impeccable — semi-permanent", description: "Manucure russe, beauté des mains et des pieds avec vernis semi-permanent.", detail: "", duration: "2 h", price: "90 €", image: "premium-ongles", alt: "Manucure soignée et vernis nude" },
] as const;

export function FeaturedOffers() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const arrowClass = "flex size-11 items-center justify-center rounded-full border border-line bg-surface text-foreground transition-colors hover:bg-primary/20";
  return (
    <section id="a-la-une" aria-labelledby="offers-title" className="container-regular scroll-mt-24 py-10 md:py-12">
      <h2 id="offers-title" className="mb-7 text-center text-4xl md:text-5xl">Nos rendez-vous à la une</h2>
      <Swiper id="offers-carousel" modules={[A11y]} slidesPerView={1} spaceBetween={24} rewind grabCursor speed={reducedMotion ? 0 : 450}
        a11y={{ containerMessage: "Trois prestations à la une", containerRoleDescriptionMessage: "carrousel", itemRoleDescriptionMessage: "prestation", slideLabelMessage: "{{index}} sur {{slidesLength}}" }}
        onSwiper={(swiper) => { swiperRef.current = swiper; }} onSlideChange={(swiper) => setActive(swiper.realIndex)}
        tabIndex={0} onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowRight") { event.preventDefault(); swiperRef.current?.slideNext(); }
          if (event.key === "ArrowLeft") { event.preventDefault(); swiperRef.current?.slidePrev(); }
        }} className="offers-swiper rounded-lg" data-lenis-prevent>
        {offers.map((offer, index) => (
          <SwiperSlide key={offer.title} inert={active !== index}>
            <article className="grid h-full overflow-hidden bg-[#efe2d6] md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-52 md:min-h-80">
                <Image src={`/images/home/${offer.image}.webp`} alt={offer.alt} fill sizes="(min-width:768px) 45vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col items-start justify-center p-6 md:p-10">
                <h3 className="text-3xl leading-tight md:text-4xl">{offer.title}</h3>
                <p className="mt-4 max-w-lg text-sm leading-7">{offer.description}</p>
                {offer.detail && <p className="mt-2 text-sm leading-7">{offer.detail}</p>}
                <div className="mt-6 flex items-center gap-6">
                  <span className="flex items-center gap-2 text-sm"><Clock aria-hidden="true" className="size-4" />{offer.duration}</span>
                  <span className="text-2xl">{offer.price}</span>
                </div>
                <Link href="/reservation" aria-label={`Réserver ${offer.title}`} className="reference-button mt-6">Réserver ce soin <ArrowRight aria-hidden="true" className="size-4" /></Link>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-5 flex items-center justify-center gap-5">
        <button type="button" onClick={() => swiperRef.current?.slidePrev()} aria-label="Prestation précédente" aria-controls="offers-carousel" className={arrowClass}><ChevronLeft aria-hidden="true" className="size-5" /></button>
        <div className="flex gap-1">{offers.map((offer, index) => <button key={offer.title} type="button" aria-label={`Afficher ${offer.title}`} aria-current={active === index ? "true" : undefined} onClick={() => swiperRef.current?.slideTo(index)} className="flex size-11 items-center justify-center"><span className={`h-2 rounded-full transition-all motion-reduce:transition-none ${active === index ? "w-6 bg-primary-dark" : "w-2 bg-line"}`} /></button>)}</div>
        <button type="button" onClick={() => swiperRef.current?.slideNext()} aria-label="Prestation suivante" aria-controls="offers-carousel" className={arrowClass}><ChevronRight aria-hidden="true" className="size-5" /></button>
        <span className="sr-only" aria-live="polite" aria-atomic="true">Prestation {active + 1} sur 3</span>
      </div>
    </section>
  );
}
