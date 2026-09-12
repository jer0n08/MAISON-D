"use client";

import { useEffect, useState } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Prestations", href: "/prestations" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const mobilePanelBgRef = useRef<HTMLButtonElement>(null);
  const mobilePanelContentRef = useRef<HTMLDivElement>(null);
  const mobileCtaRef = useRef<HTMLAnchorElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePath = pathname === "/" || pathname === "/index" || pathname === "/index.html";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isHomeTop = isHomePath && !isScrolled && !isMenuOpen;
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "/index" || pathname === "/index.html";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useGSAP(
    () => {
      if (!isHomePath) {
        return;
      }

      gsap.fromTo(
        headerRef.current,
        { y: -34, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          delay: 2.2,
          duration: 0.95,
          ease: "power4.out",
          clearProps: "transform",
        },
      );
    },
    { scope: headerRef, dependencies: [isHomePath] },
  );

  useGSAP(
    () => {
      const panel = mobilePanelRef.current;
      const bg = mobilePanelBgRef.current;
      const content = mobilePanelContentRef.current;
      const cta = mobileCtaRef.current;

      if (!panel || !bg || !content || !cta) {
        return;
      }

      const links = gsap.utils.toArray<HTMLAnchorElement>("[data-mobile-link]", panel);

      gsap.killTweensOf([bg, content, cta, ...links]);

      if (isMenuOpen) {
        gsap.set(panel, { pointerEvents: "auto" });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(bg, { scaleY: 0, autoAlpha: 0, transformOrigin: "top center" }, { scaleY: 1, autoAlpha: 1, duration: 0.65 })
          .fromTo(content, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35 }, "<+0.22")
          .fromTo(
            links,
            { y: 22, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.1, ease: "power4.out" },
            "<+0.08",
          )
          .fromTo(cta, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, ease: "power4.out" }, "<+0.1");

        return;
      }

      const closeTl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
      closeTl
        .to([cta, ...links], { y: 10, autoAlpha: 0, duration: 0.2, stagger: 0.04 })
        .to(content, { autoAlpha: 0, duration: 0.18 }, "<")
        .to(bg, { scaleY: 0, autoAlpha: 0, transformOrigin: "top center", duration: 0.35 }, "<+0.04")
        .set(panel, { pointerEvents: "none" });
    },
    { scope: headerRef, dependencies: [isMenuOpen] },
  );

  useEffect(() => {
    const panel = mobilePanelRef.current;
    const bg = mobilePanelBgRef.current;
    const content = mobilePanelContentRef.current;
    const cta = mobileCtaRef.current;

    if (!panel || !bg || !content || !cta) {
      return;
    }

    const links = gsap.utils.toArray<HTMLAnchorElement>("[data-mobile-link]", panel);

    gsap.set(panel, { pointerEvents: "none" });
    gsap.set(bg, { scaleY: 0, autoAlpha: 0, transformOrigin: "top center" });
    gsap.set(content, { autoAlpha: 0 });
    gsap.set([...links, cta], { y: 18, autoAlpha: 0 });
  }, []);

  return (
    <header ref={headerRef} className={`${isHomePath ? "fixed" : "sticky"} top-0 z-[80] w-full`}>
      <nav
        className={`relative z-[90] w-full transition-[background-color,backdrop-filter,box-shadow] duration-300 ${
          isHomeTop ? "bg-transparent backdrop-blur-0" : "bg-surface/90 backdrop-blur"
        }`}
      >
        <div className="container-regular relative z-[100] flex items-center justify-between gap-6 py-6 md:py-6">
          <Link href="/" className="shrink-0">
            <Image
              src={isHomeTop ? "/images/brand/maison-d-white.svg" : "/images/brand/maison-d.svg"}
              alt="Maison D."
              width={186}
              height={68}
              style={{ height: "auto" }}
              className="w-[172px] transition duration-300 md:w-[196px]"
              priority
            />
          </Link>

          <ul
            className={`hidden items-center gap-8 text-base md:text-[1.05rem] md:flex ${
              isHomeTop ? "text-white" : "text-foreground"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className={`transition ${
                    isActiveLink(link.href)
                      ? isHomeTop
                        ? "text-white"
                        : "text-primary-dark"
                      : isHomeTop
                        ? "hover:text-white/75"
                        : "hover:text-primary-dark"
                  }`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`z-[110] inline-flex size-11 items-center justify-center transition md:hidden ${
              isMenuOpen ? "text-foreground" : isHomeTop ? "text-white" : "text-foreground"
            }`}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-6 origin-center transition ${
                  isMenuOpen ? "translate-y-[7px] rotate-45" : "rotate-0"
                } ${isHomeTop ? "bg-white" : "bg-current"}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-6 transition ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                } ${isHomeTop ? "bg-white" : "bg-current"}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-6 origin-center transition ${
                  isMenuOpen ? "-translate-y-[7px] -rotate-45" : "rotate-0"
                } ${isHomeTop ? "bg-white" : "bg-current"}`}
              />
            </span>
          </button>

          <Link
            href="https://www.planity.com/maison-d-78100-saint-germain-en-laye-dsr"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-md bg-primary px-4 py-2 text-base text-white transition hover:bg-primary-dark md:inline-block md:text-[1.05rem]"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </nav>

      <div
        id="mobile-nav-panel"
        ref={mobilePanelRef}
        className="fixed inset-0 z-[70] md:hidden"
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          aria-label="Fermer le menu"
          ref={mobilePanelBgRef}
          className="absolute inset-0 bg-[linear-gradient(180deg,#fdfaf6_0%,#f2e3d3_100%)]"
          onClick={() => setIsMenuOpen(false)}
        />
        <div ref={mobilePanelContentRef} className="relative h-full w-full overflow-y-auto px-3 pt-[calc(env(safe-area-inset-top)+8.75rem)] pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <div className="flex min-h-full w-full flex-col items-start text-left">
            <ul className="w-full space-y-8 text-4xl leading-[1.05] text-foreground">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-mobile-link="true"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block border-b border-line/70 pb-4 transition-colors hover:text-primary-dark ${
                      isActiveLink(link.href) ? "text-primary-dark" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="https://www.planity.com/maison-d-78100-saint-germain-en-laye-dsr"
              target="_blank"
              rel="noreferrer"
              ref={mobileCtaRef}
              onClick={() => setIsMenuOpen(false)}
              className="mt-10 block w-full rounded-md bg-primary px-6 py-3 text-center text-lg text-white transition-colors hover:bg-primary-dark"
            >
              Prendre rendez-vous
            </Link>

            <div className="mt-auto flex w-full items-center justify-center gap-5 pt-10 pb-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex size-11 items-center justify-center rounded-full border border-line/80 text-foreground transition-colors hover:text-primary-dark"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex size-11 items-center justify-center rounded-full border border-line/80 text-foreground transition-colors hover:text-primary-dark"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
                  <path d="M13.48 21.5v-8.18h2.75l.41-3.19h-3.16V8.08c0-.93.26-1.56 1.58-1.56h1.69V3.66a22.31 22.31 0 0 0-2.46-.13c-2.44 0-4.1 1.49-4.1 4.23v2.36H7.44v3.19h2.75v8.18h3.29Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
