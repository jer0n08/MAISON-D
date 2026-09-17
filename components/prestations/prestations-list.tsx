import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { ServicePrices } from "@/components/prestations/service-prices";
import prestationsData from "@/data/prestations.json";
import { SERVICE_CATEGORIES } from "@/data/service-categories";

const priceFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function PrestationsList() {
  const offers = prestationsData.filter((service) => service.category === "offre du moment");

  return (
    <section className="container-regular py-10 md:py-12" aria-labelledby="carte-soins-title">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="carte-soins-title" className="text-4xl text-foreground md:text-5xl">La carte des soins</h2>
        <p className="mt-4 text-base leading-7 text-primary-dark">
          Ouvrez un univers pour découvrir ses soins, leurs durées et leurs tarifs.
        </p>
      </div>

      <div className="mt-7 space-y-4">
        {offers.map((offer) => (
          <article key={offer.id} className="rounded-xl border border-line bg-surface p-6 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="text-xl leading-tight text-balance text-foreground md:text-2xl">
                {offer.id === "offre-duo-beauty" ? "Duo Beauty" : offer.title}
              </h3>
              <p className="text-lg tabular-nums text-foreground">
                {priceFormatter.format(offer.price)} <span className="text-sm text-primary-dark">· {offer.duration}</span>
              </p>
            </div>
            {offer.id === "offre-duo-beauty" && (
              <p className="mt-3 max-w-2xl text-base leading-7 text-primary-dark">
                Massage, pose de vernis ou soin visage, pause gourmande et photo souvenir :
                une parenthèse à deux, avec une remise de 10 % sur un prochain rendez-vous pris le jour même.
              </p>
            )}
          </article>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {SERVICE_CATEGORIES.map((category, index) => {
          const services = prestationsData.filter((service) => service.category === category.key);
          if (services.length === 0) return null;

          return (
            <details key={category.key} open={index === 0} className="group rounded-xl border border-line bg-surface">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl p-5 transition-colors hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground md:p-7 [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="text-xl leading-tight text-balance text-foreground md:text-2xl">{category.label}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-primary-dark">
                    {category.description} <span className="whitespace-nowrap">· {services.length} prestations</span>
                  </p>
                </div>
                <ChevronDown aria-hidden="true" className="size-5 shrink-0 text-primary-dark transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" />
              </summary>
              <div className="px-5 pb-6 md:px-7 md:pb-7">
                <div className="border-t border-line pt-5 md:pt-6">
                  <ServicePrices services={services} />
                </div>
                <Link
                  href={`/prestations/${category.slug}`}
                  className="mt-6 inline-flex min-h-11 items-center text-sm text-foreground underline underline-offset-4 hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  Découvrir {category.label.toLocaleLowerCase("fr")}
                </Link>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
