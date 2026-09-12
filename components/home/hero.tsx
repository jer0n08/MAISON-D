"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      gsap.set("[data-hero-title],[data-hero-text],[data-hero-cta-wrap]", { transformOrigin: "50% 50%" });

      tl.fromTo(
        "[data-hero-title]",
        { y: 54, autoAlpha: 0, scale: 0.975, filter: "blur(7px)" },
        { y: 0, autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" },
      )
        .fromTo(
          "[data-hero-text]",
          { y: 34, autoAlpha: 0, scale: 0.985, filter: "blur(6px)" },
          { y: 0, autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 0.75, ease: "power2.out" },
        )
        .fromTo(
          "[data-hero-cta-wrap]",
          { y: 12, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.5, ease: "sine.out" },
        );
    },
    { scope: heroRef },
  );

  return (
    <section id="hero" ref={heroRef} className="w-full">
      <div className="relative h-[100svh] min-h-[680px] w-full overflow-hidden border-b border-line md:h-[100vh]">
        <Image
          src="/images/home/hero-bg.png"
          alt="Intérieur Maison D."
          fill
          unoptimized
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,20,12,0.82),rgba(32,20,12,0.46),rgba(32,20,12,0.18))]" />

        <div className="container-regular relative z-10 flex h-full items-center justify-center">
          <div className="max-w-xl py-10 text-center text-white md:py-16">
            <h1 data-hero-title className="text-5xl leading-[1.02] md:text-7xl mt-6">
              Votre institut de beauté à
              <br />
              <span className="font-didot-italic">Saint-Germain-en-Laye</span>
            </h1>
            <p data-hero-text className="mx-auto mt-5 max-w-md text-base leading-7 text-white/85 md:text-[1.05rem]">
              Soin du visage, beauté des mains, ongles, massages et relaxation naturelle dans une atmosphère apaisante.
            </p>

            <div data-hero-cta-wrap className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="https://www.planity.com/maison-d-78100-saint-germain-en-laye-dsr"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-primary px-5 py-3 text-base text-white transition hover:bg-primary-dark md:text-[1.05rem]"
              >
                Prendre rendez-vous
              </a>
              <a
                href="#prestations"
                className="rounded-md border border-white/60 px-5 py-3 text-base text-white transition hover:bg-white/10 md:text-[1.05rem]"
              >
                Découvrir nos prestations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
