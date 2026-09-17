import Image from "next/image";
import { Check, Diamond, MapPin, Sprout, UsersRound } from "lucide-react";

export function Concept() {
  return <section aria-label="L’esprit Maison D." className="container-regular reference-values">
    {[{icon:Diamond,text:"Produits haut de gamme et naturels"},{icon:UsersRound,text:"Une équipe passionnée à votre écoute"},{icon:Sprout,text:"Un lieu élégant et chaleureux"},{icon:MapPin,text:"Au cœur de Saint-Germain-en-Laye"}].map(({icon:Icon,text})=><div key={text}><Icon aria-hidden="true" size={30} strokeWidth={1}/><p>{text}</p></div>)}
  </section>;
}

export function LifeAtMaison() {
  return <section aria-label="La vie à la maison" className="container-regular reference-life">
    <article id="coffee-shop" className="reference-life-card scroll-mt-24">
      <div className="reference-life-copy">
        <h2>Le Coffee Shop<br />Maison D.</h2>
        <p>Des boissons saines et gourmandes pour savourer chaque instant.</p>
        <ul className="mt-4 space-y-2 text-sm">
          {["Matcha latte","Ube latte","Chocolats signatures","Options végétales et sans lactose"].map(item=><li key={item} className="flex gap-2"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0" strokeWidth={1.2}/>{item}</li>)}
        </ul>
      </div>
      <div className="reference-life-image"><Image src="/images/about/ube.webp" alt="Ube latte glacé, illustration de la pause gourmande" fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" /></div>
    </article>
    <article id="kid-area" className="reference-life-card scroll-mt-24">
      <div className="reference-life-copy">
        <h2>La Kid Area</h2>
        <p>Un espace pensé pour les parents.</p>
        <p>Parce que prendre soin de soi ne devrait jamais être compliqué. Vos enfants profitent d’un espace qui leur est dédié pendant votre rendez-vous.</p>
      </div>
      <div className="reference-life-image"><Image src="/images/maison/kid-lecture-espace.webp" alt="Livres, jeux et grandes peluches dans la Kid Area de Maison D." fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" /></div>
    </article>
  </section>;
}
