"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronRight, Menu, Phone, X } from "lucide-react";

import { ServicesDropdown } from "@/components/navigation/services-dropdown";
import { PLANITY_URL, SERVICE_CATEGORIES } from "@/data/service-categories";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const isHome = pathname === "/" || pathname === "/index" || pathname === "/index.html";

  const alignMenu = () => {
    const bounds = navRef.current?.getBoundingClientRect();
    const menu = menuRef.current;
    if (bounds && menu) {
      menu.style.left = `${bounds.left}px`;
      menu.style.top = `${bounds.bottom - 1}px`;
      menu.style.width = `${bounds.width}px`;
      menu.style.maxHeight = `${Math.max(0, window.innerHeight - bounds.bottom - 8)}px`;
    }
  };
  const closeMenu = () => menuRef.current?.hidePopover();

  useEffect(() => {
    const menu = menuRef.current;
    const onResize = () => {
      if (window.innerWidth >= 1024) menu?.hidePopover();
      else if (menu?.matches(":popover-open")) alignMenu();
    };
    const onScroll = () => menu?.hidePopover();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      menu?.hidePopover();
    };
  }, [pathname]);

  const navClass = "inline-flex min-h-11 items-center border-b text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4";
  const bookingClass = "inline-flex min-h-11 items-center justify-center gap-2 rounded-none bg-foreground px-5 py-3 text-sm text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground";

  return (
    <header className={`${isHome ? "fixed" : "sticky"} top-0 z-[80] w-full py-2 lg:py-4`}>
      <nav ref={navRef} aria-label="Navigation principale" className="container-regular relative flex h-16 items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr] rounded-none border border-line/50 bg-surface/95 px-4 lg:border-white/60 lg:bg-surface/85 text-foreground shadow-[0_4px_24px_rgba(47,38,33,0.04)] backdrop-blur-xl md:px-6 lg:h-[76px]">
        <Link href="/" aria-label="Maison D. — Accueil" className="shrink-0 rounded-none lg:col-start-2 lg:row-start-1 lg:justify-self-center focus-visible:outline-2 focus-visible:outline-offset-4">
          <Image src="/images/brand/maison-d.svg" alt="Maison D." width={196} height={68} priority className="h-auto w-[148px] sm:w-40 lg:w-44" />
        </Link>
        <ul className="col-start-1 row-start-1 hidden items-center gap-7 lg:flex">
          <li><Link href="/" aria-current={isHome ? "page" : undefined} className={`${navClass} ${isHome ? "border-foreground text-foreground" : "border-transparent text-foreground/75 hover:border-primary"}`}>Accueil</Link></li>
          <li><ServicesDropdown key={pathname} /></li>
        </ul>
        <div className="col-start-3 row-start-1 hidden items-center justify-end gap-6 lg:flex">
          <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} className={`${navClass} hidden lg:inline-flex ${pathname === "/contact" ? "border-foreground" : "border-transparent text-foreground/75 hover:border-primary"}`}>Contact</Link>
          <a href={PLANITY_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 rounded-none text-xs text-foreground underline underline-offset-4 transition-colors hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 sm:gap-2 sm:text-sm">
            Réserver <ArrowUpRight aria-hidden="true" className="hidden size-4 sm:block" />
          </a>
        </div>
        <button type="button" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} popoverTarget="mobile-navigation" onClick={alignMenu} className="ml-auto inline-flex size-11 shrink-0 items-center justify-end rounded-none text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 lg:hidden">
          {menuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </nav>

      <div ref={menuRef} id="mobile-navigation" data-lenis-prevent popover="auto" onToggle={(event) => { if (event.target === event.currentTarget) setMenuOpen(event.newState === "open"); }} className="fixed right-auto bottom-auto m-0 overflow-y-auto overscroll-contain rounded-none border border-line/50 bg-surface/95 p-0 text-foreground shadow-[0_12px_24px_rgba(47,38,33,0.08)] backdrop-blur-xl [&:popover-open]:block">
        <nav aria-label="Navigation mobile" className="px-4 py-2 md:px-6">
          <Link href="/" onClick={closeMenu} aria-current={isHome ? "page" : undefined} className="flex min-h-16 items-center border-b border-line text-xl">Accueil</Link>
          <details open={pathname.startsWith("/prestations")} className="group border-b border-line">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between text-xl [&::-webkit-details-marker]:hidden">Nos soins <span aria-hidden="true" className="inline-flex size-6 shrink-0 items-center justify-center text-xl leading-none transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none">+</span></summary>
            <ul className="mb-4 space-y-2">
              {SERVICE_CATEGORIES.map((category) => (
                <li key={category.slug}><Link href={`/prestations/${category.slug}`} onClick={closeMenu} aria-current={pathname === `/prestations/${category.slug}` ? "page" : undefined} className={`flex min-h-12 items-center justify-between gap-3 rounded-none px-3 py-3 text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${pathname === `/prestations/${category.slug}` ? "bg-primary/15 text-foreground" : "bg-background/70 text-foreground/80 hover:bg-primary/10 hover:text-foreground"}`}><span>{category.label}</span><ChevronRight aria-hidden="true" className="size-4 shrink-0 text-primary-dark" /></Link></li>
              ))}
              <li><Link href="/prestations" onClick={closeMenu} className="mt-2 flex min-h-11 items-center px-3 text-sm underline underline-offset-4">Toutes les prestations et tarifs</Link></li>
            </ul>
          </details>
          <Link href="/contact" onClick={closeMenu} className="flex min-h-16 items-center text-xl">Contact</Link>
        </nav>
        <div className="shrink-0 bg-surface px-6 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <a href={PLANITY_URL} target="_blank" rel="noreferrer" onClick={closeMenu} className={`${bookingClass} w-full`}>Prendre rendez-vous <ArrowUpRight aria-hidden="true" className="size-4" /></a>
          <a href="tel:+33670152569" className="mt-2 flex min-h-11 items-center justify-center gap-2 text-sm"><Phone aria-hidden="true" className="size-4" />06 70 15 25 69</a>
        </div>
      </div>
    </header>
  );
}
