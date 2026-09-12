"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function MobileStickyCta() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isNonHomePage = pathname !== "/";

  useEffect(() => {
    if (isNonHomePage) {
      return;
    }

    let observer: IntersectionObserver | null = null;
    let frameId = 0;
    let attempts = 0;
    const maxAttempts = 20;

    const setupObserver = () => {
      const heroSection = document.getElementById("hero");

      if (!heroSection) {
        attempts += 1;

        if (attempts >= maxAttempts) {
          setIsVisible(true);
          return;
        }

        frameId = window.requestAnimationFrame(setupObserver);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.intersectionRatio < 0.5);
        },
        { threshold: [0, 0.5, 1] },
      );

      observer.observe(heroSection);
    };

    setupObserver();

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      if (observer) {
        observer.disconnect();
      }
    };
  }, [isNonHomePage]);

  const shouldShowCta = isNonHomePage || isVisible;

  return shouldShowCta ? (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-line/70 bg-surface/95 px-4 pt-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] backdrop-blur md:hidden">
      <a
        href="https://www.planity.com/maison-d-78100-saint-germain-en-laye-dsr"
        target="_blank"
        rel="noreferrer"
        className="block w-full rounded-md bg-primary px-6 py-3 text-center text-base text-white transition-colors hover:bg-primary-dark"
      >
        Prendre rendez-vous
      </a>
    </div>
  ) : null;
}
