import Image from "next/image";

export function GiftCta() {
  return (
    <section className="w-full bg-surface py-12 md:py-16">
      <div className="container-regular py-6 md:py-10">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <div className="relative isolate mx-auto w-full max-w-[460px] px-3 py-6 sm:px-5">
            <div aria-hidden="true" className="absolute inset-x-6 inset-y-5 -z-10 translate-y-3 rotate-[-5deg] border border-primary-dark/20 bg-primary/25" />
            <div className="relative overflow-hidden border border-line bg-background p-3 shadow-[0_20px_45px_-20px_rgba(47,38,33,0.3)] sm:p-4">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.7)_50%,transparent_70%)]" />
              <div className="relative flex min-h-[250px] flex-col items-center justify-between border border-primary/50 px-4 py-6 text-center sm:min-h-[280px] sm:px-6">
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
            <h2 className="text-3xl leading-tight text-balance text-[#2f241b] md:text-4xl">Le cadeau idéal pour prendre soin de soi</h2>
            <Image
              src="/images/ui/separator.svg"
              alt=""
              width={222}
              height={15}
              className="mx-auto mt-3 md:ml-0"
            />
            <p className="mt-4 text-base leading-7 text-[#5d4f45] md:text-[1.05rem]">
              Faites plaisir à vos proches avec nos cartes cadeaux valables sur toutes nos prestations.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-block rounded-none bg-primary px-6 py-3 text-base text-white transition hover:bg-primary-dark md:text-[1.05rem]"
            >
              Offrez un bon cadeau
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
