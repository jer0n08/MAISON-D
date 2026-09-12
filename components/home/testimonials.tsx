"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Avis Google courts et complets consultés le 12 septembre 2026 ; prénoms uniquement.
const reviews = [
  { name: "Coralie", text: "Super expérience dans ce nouveau salon ! Merci encore pour tout le moment était parfait ! Je recommande 😊" },
  { name: "Jenny", text: "Petit moment de qualité avec ma petite sœur : Ube latte et Drainage lymphatique 👯‍♀️" },
  { name: "Lau", text: "Magnifique prestation verni semi permanent et beauté des mains et pieds! Bravo à la dame qui s’est occupée de moi 👏" },
  { name: "Emilie", text: "Accueil très chaleureux et aux petits soins. Un moment de détente et relaxation adaptée à nos besoins. Milles merci" },
  { name: "Noemie", text: "De passage à Paris, j’ai découvert le Kobido Japonais et j’ai adoré. Service au top." },
  { name: "Flora", text: "Superbe institut ! L'accueil était chaleureux et l'épilation au fil est diablement efficace ! Je recommande ! 🥰" },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = () => {
    const track = trackRef.current;
    if (!track) return;
    const start = track.scrollLeft <= 2;
    const end = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    setEdges((previous) => previous.start === start && previous.end === end ? previous : { start, end });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(updateEdges);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  const scrollReviews = (direction: number) => {
    const track = trackRef.current;
    const card = track?.firstElementChild;
    if (!track || !card) return;
    const distance = card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap);
    track.scrollBy({ left: direction * distance, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };

  const buttonClass = "inline-flex size-11 items-center justify-center border border-line bg-surface text-foreground transition-colors hover:bg-foreground hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-default disabled:opacity-30 disabled:hover:bg-surface disabled:hover:text-foreground";

  return (
    <section id="avis" aria-labelledby="avis-title" className="container-regular scroll-mt-28 py-16 md:py-20">
      <div className="mx-auto max-w-xl text-center">
        <h2 id="avis-title" className="text-3xl leading-tight text-balance text-foreground md:text-4xl">Elles nous font confiance</h2>
        <Image src="/images/ui/separator.svg" alt="" width={222} height={15} className="mx-auto mt-3" />
      </div>

      <div
        ref={trackRef}
        id="avis-carousel"
        role="region"
        aria-label="Avis clients Google"
        aria-roledescription="carrousel"
        tabIndex={0}
        onScroll={updateEdges}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            scrollReviews(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
        className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        {reviews.map((review, index) => (
          <figure key={review.name} role="group" aria-roledescription="diapositive" aria-label={`${index + 1} sur ${reviews.length}`} className="flex min-w-0 basis-full shrink-0 snap-start flex-col border border-line bg-surface p-6 sm:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/3)]">
            <p aria-label="5 sur 5" className="text-primary-dark"><span aria-hidden="true">★★★★★</span></p>
            <blockquote className="mt-4 flex-1 text-base leading-7 text-foreground/80">
              <p>« {review.text} »</p>
            </blockquote>
            <figcaption className="mt-6 border-t border-line pt-4 text-base text-foreground">{review.name}</figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-end gap-4">
        <div className="flex gap-3">
          <button type="button" aria-label="Avis précédent" aria-controls="avis-carousel" disabled={edges.start} onClick={() => scrollReviews(-1)} className={buttonClass}><ChevronLeft aria-hidden="true" className="size-5" /></button>
          <button type="button" aria-label="Avis suivant" aria-controls="avis-carousel" disabled={edges.end} onClick={() => scrollReviews(1)} className={buttonClass}><ChevronRight aria-hidden="true" className="size-5" /></button>
        </div>
      </div>
    </section>
  );
}
