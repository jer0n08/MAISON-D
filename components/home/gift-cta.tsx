import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function GiftCta() {
  return (
    <section aria-labelledby="gift-title" className="w-full border-y border-line bg-surface py-10 md:py-16">
      <div className="container-regular py-4">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <div className="relative isolate mx-auto w-full max-w-[460px] px-3 py-6 sm:px-5">
            <div aria-hidden="true" className="absolute inset-x-6 inset-y-5 -z-10 translate-y-3 rotate-[-5deg] border border-primary-dark/20 bg-primary/25" />
            <div className="relative overflow-hidden border border-line bg-background p-3 shadow-[0_20px_45px_-20px_rgba(47,38,33,0.3)] sm:p-4">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.7)_50%,transparent_70%)]" />
              <div className="relative flex min-h-[200px] flex-col items-center justify-between border border-primary/50 px-4 py-6 text-center sm:min-h-[230px] sm:px-6">
                <Image
                  src="/images/brand/maison-d-monogramme.svg"
                  alt="Maison D."
                  width={130}
                  height={60}
                  className="h-auto w-28 sm:w-32"
                />
                <div className="my-5">
                  <p className="text-3xl leading-tight text-foreground sm:text-4xl" style={{ fontFamily: '"DidotLTRomanWeb", serif' }}>Carte cadeau</p>
                  <p className="mt-3 text-sm leading-6 text-foreground/75">Un moment rien que pour vous.</p>
                </div>
                <div className="flex w-full items-center gap-3" aria-hidden="true">
                  <span className="h-px flex-1 bg-primary/50" />
                  <span className="size-1.5 rotate-45 bg-primary" />
                  <span className="h-px flex-1 bg-primary/50" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 id="gift-title" className="text-4xl leading-tight text-balance text-foreground md:text-5xl">Offrez un moment<br /><em className="text-primary-dark">rien que pour soi.</em></h2>
            <Image
              src="/images/ui/separator.svg"
              alt=""
              width={222}
              height={15}
              className="mx-auto mt-3 md:ml-0"
            />
            <p className="mt-4 text-base leading-7 text-foreground/75 md:text-[1.05rem]">
              Un anniversaire, une attention ou simplement l’envie de faire plaisir : offrez une parenthèse de bien-être avec une carte cadeau Maison D.
            </p>
            <Link
              href="/contact"
              className="reference-button mt-6"
            >
              Demander une carte cadeau <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
