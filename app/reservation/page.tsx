import type { Metadata } from "next";
import Link from "next/link";

import { PageIntro } from "@/components/home/page-intro";
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navigation/navbar";
import { PlanityWidget } from "@/components/planity/planity-widget";

export const metadata: Metadata = {
  title: "Prendre rendez-vous",
  description: "Réservez votre soin chez Maison D. à Saint-Germain-en-Laye : prestations et disponibilités avec Planity.",
  alternates: { canonical: "/reservation" },
};

export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main className="inner-page">
        <PageIntro title="Un moment pour vous" description="Choisissez votre soin, puis le créneau qui vous convient. Retrouvez les disponibilités de Maison D. et réservez avec Planity." image="/images/home/premium-corps.webp" alt="Un massage pour prendre soin de soi" booking={false} />
        <div className="container-regular py-10 md:py-12">
        <div className="reservation-panel rounded-xl border border-line bg-surface p-6 md:p-10"><PlanityWidget /></div>
        <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-2">
          <div><h2 className="text-2xl">Besoin d’un conseil ?</h2><p className="mt-3 text-sm leading-7 text-foreground/80">Vous hésitez entre deux soins ? Appelez-nous au <a href="tel:+33670152569" className="underline underline-offset-4">06 70 15 25 69</a>.</p><Link href="/prestations" className="mt-3 inline-flex min-h-11 items-center text-sm underline underline-offset-4">Consulter tous les soins et tarifs</Link></div>
          <div><h2 className="text-2xl">Vous venez avec votre enfant ?</h2><p className="mt-3 text-sm leading-7 text-foreground/80">Contactez l’équipe avant de réserver pour connaître les modalités d’accueil de la Kid Area.</p><Link href="/contact" className="mt-3 inline-flex min-h-11 items-center text-sm underline underline-offset-4">Adresse et contact</Link></div>
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
