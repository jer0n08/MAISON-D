import Image from "next/image";

const reviews = [
  {
    text: "Tout était vraiment super à Maison D. : le cadre est très agréable, le personnel très sympatique, tout est propre.",
    name: "Léa",
  },
  {
    text: "Deuxième fois que je vais me faire épiler chez Maison D et c’est vraiment super ! Je le conseille fortement !",
    name: "Tifaine",
  },
  {
    text: "Très belle manucure et très bon moment passé dans le salon. L’accueil est sympathique et l’endroit agréable!",
    name: "Hélène R.",
  },
  {
    text: "Meilleur massage de toutes mes expériences; c'était absolument exceptionnel.",
    name: "Marine B.",
  },
];

export function Testimonials() {
  return (
    <section className="container-regular py-16 md:py-20">
      <div className="mx-auto max-w-xl text-center">
        <h3 className="text-5xl text-[#2f241b]">Elles nous font confiance</h3>
        <Image src="/images/ui/separator.svg" alt="Séparateur" width={222} height={15} className="mx-auto mt-3" />
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-4">
        {reviews.map((review) => (
          <article key={review.text} className="rounded-xl border border-line bg-surface p-4">
            <p className="text-primary">★★★★★</p>
            <p className="mt-2 text-base leading-7 text-[#594a40] md:text-[1.05rem]">{review.text}</p>
            <p className="mt-2 text-sm text-[#7a6759]">- {review.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
