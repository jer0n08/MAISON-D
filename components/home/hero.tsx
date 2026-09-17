import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Coffee, Heart, Leaf, UsersRound } from "lucide-react";

export function Hero() {
  return (
    <section id="institut" className="reference-hero scroll-mt-24">
      <div className="reference-hero-banner">
        <div className="container-regular reference-hero-grid">
          <div className="reference-hero-copy">
            <h1><span className="reference-brand">Maison D.</span>L’art de prendre<br />soin de soi</h1>
            <p className="reference-subtitle">Institut de beauté & bien-être<br />à Saint-Germain-en-Laye</p>
            <p className="mt-5 max-w-lg text-sm leading-7">Soins d’exception, expert Kobido, drainage lymphatique, onglerie, épilation… dans un lieu unique avec Coffee Shop et Kid Area, pour toute la famille.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/reservation" className="reference-button">Prendre rendez-vous <ArrowRight aria-hidden="true" className="size-4" /></Link>
              <a href="#coffee-shop" className="reference-button reference-button-outline">Découvrir notre univers <ArrowRight aria-hidden="true" className="size-4" /></a>
            </div>
          </div>
        </div>
        <div className="reference-hero-image">
          <Image src="/images/maison/institut-vie.webp" alt="Les professionnelles de Maison D. accueillent leurs clientes pour une manucure" fill preload sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
        </div>
      </div>
      <nav aria-label="Les univers Maison D." className="container-regular reference-universes">
        {[{icon:Leaf,label:"Soins experts et naturels",href:"#prestations"},{icon:Coffee,label:"Coffee Shop healthy & gourmand",href:"#coffee-shop"},{icon:UsersRound,label:"Kid Area pour toute la famille",href:"#kid-area"},{icon:Heart,label:"Une parenthèse pour vous",href:"/reservation"}].map(({icon:Icon,label,href}) => <a key={label} href={href}><Icon aria-hidden="true" size={28} strokeWidth={1} /><span>{label}</span></a>)}
      </nav>
    </section>
  );
}
