import Image from "next/image";

export function CtaBand() {
  return (
    <section id="contact" className="relative min-h-[180px] overflow-hidden">
      <Image
        src="/images/home/massage-bg.png"
        alt="Soin et relaxation"
        fill
        sizes="100vw"
        className="object-cover object-[50%_70%]"
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="container-regular relative z-10 flex min-h-[400px] flex-col items-center justify-center py-8 text-center text-white">
        <h3 className="text-4xl md:text-5xl">Offrez-vous un moment d&apos;exception</h3>
        <p className="mt-2 text-base text-white/85 md:text-[1.05rem]">
          Maison D. vous accueille pour une parenthèse bien-être, où chaque soin est pensé pour révéler votre beauté
          naturelle, apaiser le corps et offrir un véritable moment de lâcher-prise.
        </p>
        <a
          href="https://www.planity.com/maison-d-78100-saint-germain-en-laye-dsr"
          target="_blank"
          rel="noreferrer"
          className="mt-4 rounded-md border border-white/80 px-5 py-2 text-base transition hover:bg-white/15 md:text-[1.05rem]"
        >
          Prendre rendez-vous
        </a>
      </div>
    </section>
  );
}
