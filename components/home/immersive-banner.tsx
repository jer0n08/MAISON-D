"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function ImmersiveBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !bgRef.current) {
        return;
      }

      gsap.fromTo(
        bgRef.current,
        { yPercent: -14 },
        {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative min-h-[700px] overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 scale-[1.18]">
        <Image
          src="/images/home/mains-et-pieds-bg.png"
          alt="Beauté des mains et pieds"
          fill
          sizes="100vw"
          className="object-cover object-[70%_center] md:object-[72%_center]"
        />
      </div>
      <div className="absolute inset-0 bg-black/20" />

      <div className="container-regular relative z-10 flex min-h-[700px] items-center justify-center py-10">
        <article className="mx-auto w-full max-w-xl border rounded-none  border-white/40 bg-white/80 px-8 py-8 text-center backdrop-blur-[2px] md:px-12">
          <Image
            src="/images/ui/badge.svg"
            alt="Badge Maison D"
            width={50}
            height={50}
            className="mx-auto"
          />
          <h2 className="mt-3 text-3xl leading-tight text-balance text-[#2f241b] md:text-4xl">Beauté des mains et des pieds</h2>
          <p className="mt-3 text-base leading-7 text-[#5d4f45] md:text-[1.05rem]">
            Des rituels esthétiques précis pour sublimer vos mains et vos pieds avec une finition élégante.
          </p>
          <button className="mt-5 rounded-none bg-primary px-5 py-2 text-base text-white transition hover:bg-primary-dark md:text-[1.05rem]">Réserver une séance</button>
        </article>
      </div>
    </section>
  );
}
