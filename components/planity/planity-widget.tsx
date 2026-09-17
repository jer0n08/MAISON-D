import { PLANITY_URL } from "@/data/service-categories";

const planityApiKey = process.env.NEXT_PUBLIC_PLANITY_API_KEY?.trim();
const planityPrimaryColor = process.env.NEXT_PUBLIC_PLANITY_PRIMARY_COLOR ?? "#8f6f57";

function scriptValue(value: string) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function PlanityWidget() {
  // A separate document gives the widget a fresh lifecycle on each visit and
  // keeps the vendor scripts in their documented execution order.
  const document = planityApiKey ? `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<style>body{margin:0;font-family:Arial,sans-serif;background:#fefcf9;color:#2f2621}#planity-error{padding:20px;line-height:1.6}a{color:inherit}</style></head>
<body><div id="planity-container"></div><p id="planity-error" hidden>Le module ne peut pas se charger. Utilisez le lien « Ouvrir Planity » sous cet espace pour réserver.</p>
<script>window.planity={key:${scriptValue(planityApiKey)},primaryColor:${scriptValue(planityPrimaryColor)},container:document.getElementById("planity-container")};</script>
<script src="https://d2skjte8udjqxw.cloudfront.net/widget/production/2/polyfills.latest.js" onerror="document.getElementById('planity-error').hidden=false"></script>
<script src="https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js" onerror="document.getElementById('planity-error').hidden=false"></script>
</body></html>` : null;

  return (
    <section aria-label="Réservation avec Planity">
      {document ? <iframe title="Choisir un soin et un créneau avec Planity" srcDoc={document} className="h-[780px] w-full border-0 md:h-[900px]" data-lenis-prevent /> : (
        <div className="max-w-xl">
          <h2 className="text-3xl">Choisissez votre soin et votre créneau.</h2>
          <p className="mt-4 text-base leading-7 text-foreground/80">Retrouvez les prestations, les tarifs et les disponibilités de Maison D. sur notre espace Planity.</p>
        </div>
      )}
      <a href={PLANITY_URL} target="_blank" rel="noreferrer" className="reference-button mt-6">
        {document ? "Ouvrir Planity dans un nouvel onglet" : "Choisir mon rendez-vous sur Planity"}
      </a>
      {!document && <p className="mt-3 text-xs leading-5 text-foreground/70">Planity s’ouvre dans un nouvel onglet pour finaliser votre réservation.</p>}
    </section>
  );
}
