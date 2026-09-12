"use client";

import Script from "next/script";

const CONTAINER_ID = "planity-widget-container";

const planityApiKey = process.env.NEXT_PUBLIC_PLANITY_API_KEY;
const planityPrimaryColor = process.env.NEXT_PUBLIC_PLANITY_PRIMARY_COLOR ?? "#8f6f57";

export function PlanityWidget() {
  if (!planityApiKey) {
    return (
      <section className="container-regular py-12 md:py-16">
        <div className="rounded-none border border-line bg-surface px-6 py-5 text-[#584a41]">
          <p className="text-base leading-7 md:text-[1.05rem]">
            Module Planity pret a l&apos;emploi. Ajoutez `NEXT_PUBLIC_PLANITY_API_KEY` dans votre fichier `.env.local`
            pour activer l&apos;affichage du widget ici.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="container-regular py-12 md:py-16">
      <div id={CONTAINER_ID} />

      <Script id="planity-init" strategy="afterInteractive">
        {`
          (function () {
            var container = document.getElementById('${CONTAINER_ID}');
            if (!container) return;
            window.planity = {
              key: '${planityApiKey}',
              primaryColor: '${planityPrimaryColor}',
              container: container
            };
          })();
        `}
      </Script>
      <Script
        id="planity-polyfills"
        src="https://d2skjte8udjqxw.cloudfront.net/widget/production/2/polyfills.latest.js"
        strategy="afterInteractive"
      />
      <Script
        id="planity-app"
        src="https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
