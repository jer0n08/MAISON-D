import Image from "next/image";

export function GiftCta() {
  return (
    <section className="w-full bg-surface py-12 md:py-16">
      <div className="container-regular rounded-2xl px-6 py-10 md:px-10">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <div className="mx-auto w-full max-w-[380px] rotate-[-1.6deg] rounded-2xl border border-[#d7c9bc] bg-[linear-gradient(140deg,#fffaf5_0%,#f2e1cf_100%)] p-0 text-left shadow-[0_16px_32px_rgba(95,69,47,0.16)]">
            <div className="relative h-[205px] overflow-hidden rounded-2xl px-5 py-4 md:h-auto md:aspect-[1.586] md:px-6 md:py-5">
              <div className="absolute -left-10 -top-10 size-28 rounded-full bg-white/35" aria-hidden="true" />
              <div className="absolute -bottom-12 right-10 size-32 rounded-full bg-[#e4cdb8]/55" aria-hidden="true" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start">
                  <Image
                    src="/images/brand/maison-d.svg"
                    alt="Maison D."
                    width={164}
                    height={29}
                    className="w-[164px]"
                  />
                </div>

                <div>
                  <h4 className="text-[1.5rem] leading-none text-[#2f241b] md:text-[1.8rem]">Carte cadeau</h4>
                  <p className="mt-2.5 max-w-[24ch] text-sm leading-5 text-[#6a5a4d] md:mt-3">Offrez une parenthèse de beauté et de bien-être.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-4xl text-[#2f241b] md:text-5xl">Le cadeau idéal pour prendre soin de soi</h3>
            <Image
              src="/images/ui/separator.svg"
              alt="Séparateur"
              width={222}
              height={15}
              className="mx-auto mt-3"
            />
            <p className="mt-4 text-base leading-7 text-[#5d4f45] md:text-[1.05rem]">
              Faites plaisir vos proches avec nos cartes cadeaux valables sur toutes nos prestations.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-base text-white transition hover:bg-primary-dark md:text-[1.05rem]"
            >
              Offrez un bon cadeau
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
