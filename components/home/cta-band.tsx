import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return <section className="border-y border-line/60 bg-[#efe2d6]">
    <div className="container-regular flex flex-col items-center gap-6 py-9 text-center md:flex-row md:justify-between md:text-left">
      <div><h2 className="text-3xl">L’art de prendre soin de soi</h2><p className="mt-3 text-sm leading-7">Votre prochain rendez-vous chez Maison D., à Saint-Germain-en-Laye.</p></div>
      <Link href="/reservation" className="reference-button shrink-0">Prendre rendez-vous <ArrowRight aria-hidden="true" className="size-4" /></Link>
    </div>
  </section>;
}
