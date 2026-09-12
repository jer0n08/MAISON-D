"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Plus } from "lucide-react";

import { SERVICE_CATEGORIES } from "@/data/service-categories";

type Props = Readonly<{
  mobile?: boolean;
  onNavigate?: () => void;
}>;

export function ServicesDropdown({ mobile = false, onNavigate }: Props) {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !detailsRef.current?.contains(event.target)) {
        detailsRef.current?.removeAttribute("open");
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const close = () => {
    detailsRef.current?.removeAttribute("open");
    onNavigate?.();
  };


  return (
    <details
      ref={detailsRef}
      className={`group/services relative ${mobile ? "border-b border-line/70 pb-4" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && detailsRef.current?.open) {
          event.stopPropagation();
          detailsRef.current.open = false;
          summaryRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          event.currentTarget.open = false;
        }
      }}
    >
      <summary
        ref={summaryRef}
        className={`flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden ${mobile ? "justify-between" : `border-b text-sm ${pathname.startsWith("/prestations") ? "border-foreground" : "border-transparent hover:border-primary"}`}`}
      >
        Nos soins
        <Plus aria-hidden="true" className="size-4 shrink-0 transition-transform group-open/services:rotate-45 motion-reduce:transition-none" />
      </summary>
      <div className="absolute left-0 top-full z-[120] mt-5 w-[620px] overflow-hidden rounded-none border border-line bg-surface text-foreground shadow-[0_16px_48px_rgba(47,38,33,0.12)]">
        <ul className="grid max-h-[65vh] grid-cols-2 gap-1 overflow-y-auto p-4">
          {SERVICE_CATEGORIES.map((category) => {
            const href = `/prestations/${category.slug}`;
            return (
              <li key={category.slug}>
                <Link href={href} aria-current={pathname === href ? "page" : undefined} onClick={close}
                  className={`group/link flex h-full items-center justify-between gap-3 rounded-none p-4 transition-colors hover:bg-background focus-visible:outline-2 focus-visible:outline-foreground ${pathname === href ? "bg-background" : ""}`}>
                  <span><span className={`block text-base ${pathname === href ? "underline underline-offset-4" : ""}`}>{category.label}</span><span className="mt-1 block text-sm leading-5 text-foreground/65">{category.description}</span></span>
                  <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-primary-dark transition-transform group-hover/link:translate-x-1 motion-reduce:transition-none" />
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href="/prestations" onClick={close} className="flex min-h-14 items-center justify-between border-t border-line bg-background px-8 py-4 text-sm hover:underline focus-visible:outline-2 focus-visible:outline-foreground">Toutes les prestations et tarifs <ArrowRight aria-hidden="true" className="size-4" /></Link>
      </div>
    </details>
  );
}
