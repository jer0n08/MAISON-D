import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PLANITY_URL } from "@/data/service-categories";

export function ReviewPlatforms() {
  const platforms = [
    { name: "Google", score: "4,8 / 5", detail: "+130 avis · Lire les avis", href: "https://share.google/1uyQrkA343bRGdB16" },
    { name: "Planity", score: "4,9 / 5", detail: "93 avis · Lire les avis", href: PLANITY_URL },
    { name: "Treatwell", score: "4,7 / 5", detail: "127 avis · Lire les avis", href: "https://www.treatwell.fr/salon/maison-d/" },
  ];
  return (
    <section aria-label="Avis sur Google, Planity et Treatwell" className="reference-platforms border-y border-line/50 bg-surface">
      <div className="container-regular py-5">
        <div>
          <div className="mx-auto grid max-w-3xl grid-cols-3 divide-x divide-line">
            {platforms.map((platform) => <a key={platform.name} href={platform.href} target="_blank" rel="noreferrer" className="group px-2 py-2 text-center focus-visible:outline-2 focus-visible:outline-offset-2">
              <p className="flex items-center justify-between gap-2 text-sm"><Image src={`/images/reviews/${platform.name.toLowerCase()}.${platform.name === "Google" ? "png" : "svg"}`} alt={platform.name} width={platform.name === "Treatwell" ? 90 : 26} height={26} className="mx-auto h-6 w-auto" /><ArrowUpRight aria-hidden="true" className="hidden" /></p>
              <p className="mt-2 text-sm">{platform.score}</p><p className="mt-1 text-xs leading-5 text-foreground/70">{platform.detail}</p>
            </a>)}
          </div>
        </div>
      </div>
      <p className="pb-6 text-center text-sm text-foreground"><span className="block text-2xl">+ 5 000</span>clientes nous font confiance</p>
    </section>
  );
}
