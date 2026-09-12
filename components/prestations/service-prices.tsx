interface Prestation {
  id: string;
  title: string;
  category: string;
  duration: string;
  price: number;
}

interface ServiceGroup {
  title: string;
  variants: Prestation[];
}

const priceFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

function groupServices(services: readonly Prestation[]): ServiceGroup[] {
  const groups = new Map<string, ServiceGroup>();

  for (const service of services) {
    const title = service.id === "massage-relaxant-express"
      ? "Massage relaxant - sur mesure"
      : service.title;
    const group = groups.get(title);

    if (group) {
      group.variants.push(service);
    } else {
      groups.set(title, { title, variants: [service] });
    }
  }

  return [...groups.values()];
}

function ServiceItem({ group }: Readonly<{ group: ServiceGroup }>) {
  const [first] = group.variants;

  return (
    <li className="py-5 first:pt-0 last:pb-0 md:py-6">
      <div className="flex items-start justify-between gap-5">
        <p className="max-w-2xl text-base leading-relaxed text-foreground">{group.title}</p>
        {group.variants.length === 1 && (
          <p className="shrink-0 whitespace-nowrap text-base tabular-nums text-foreground">
            {priceFormatter.format(first.price)}
          </p>
        )}
      </div>
      {group.variants.length === 1 ? (
        <p className="mt-1.5 text-sm text-primary-dark">{first.duration}</p>
      ) : (
        <ul className="mt-3 space-y-2.5" aria-label="Durées et tarifs">
          {group.variants.map((variant) => (
            <li key={variant.id} className="flex items-center justify-between gap-5">
              <span className="text-sm text-primary-dark">{variant.duration}</span>
              <span className="whitespace-nowrap text-base tabular-nums text-foreground">
                {priceFormatter.format(variant.price)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function ServicePrices({ services }: Readonly<{ services: readonly Prestation[] }>) {
  return (
    <ul className="divide-y divide-line">
      {groupServices(services).map((group) => <ServiceItem key={group.title} group={group} />)}
    </ul>
  );
}
