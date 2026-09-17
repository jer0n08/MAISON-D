"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, House, MapPin, Phone } from "lucide-react";

const items = [
  { label: "Accueil", href: "/", icon: House },
  { label: "RDV", href: "/reservation", icon: CalendarDays },
  { label: "Contact", href: "/contact", icon: Phone },
  { label: "Plan", href: "https://share.google/1uyQrkA343bRGdB16", icon: MapPin },
] as const;

export function MobileStickyCta() {
  const pathname = usePathname();

  return (
    <>
      <div aria-hidden="true" className="h-[calc(4.5rem+env(safe-area-inset-bottom))] shrink-0 md:hidden" />
      <nav aria-label="Navigation rapide" className="fixed inset-x-0 bottom-0 z-[60] border-t border-line/60 bg-surface px-3 pt-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] md:hidden">
        <div className="grid grid-cols-4">
          {items.map(({ label, href, icon: Icon }) => {
            const external = label === "Plan";
            return (
              <Link key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}
                aria-current={!external && pathname === href ? "page" : undefined}
                className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-lg text-[11px] transition-colors hover:bg-primary/10 ${pathname === href ? "text-primary-dark" : "text-foreground"}`}>
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.25} />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
