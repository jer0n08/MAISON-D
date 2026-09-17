import type { Metadata } from "next";
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navigation/navbar";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de Maison D. : informations légales, hébergement et contact.",
  alternates: {
    canonical: "/mentions-legales",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/mentions-legales",
    siteName: "Maison D.",
    title: "Mentions légales | Maison D.",
    description: "Informations légales, hébergement et responsabilités du site Maison D.",
    images: [
      {
        url: "/og/maison-d-og.png",
        width: 1200,
        height: 630,
        alt: "Mentions légales Maison D.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentions légales | Maison D.",
    description: "Retrouvez les informations légales du site Maison D.",
    images: ["/og/maison-d-og.png"],
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main className="inner-page legal-page container-regular py-10 md:py-14">
        <header className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl text-[#2f241b] md:text-5xl">Mentions légales</h1>
        </header>

        <section className="mx-auto mt-10 max-w-4xl space-y-5 text-[#584a41]">
          <article className="space-y-3 rounded-xl border border-line bg-surface p-6 md:p-8">
            <h2 className="text-2xl text-[#2f241b] md:text-3xl">Éditeur du site</h2>
            <p className="leading-7">Le présent site est édité par :</p>
            <p className="leading-7"><strong>Maison D</strong></p>
            <p className="leading-7">Forme juridique : SAS, société par actions simplifiée</p>
            <p className="leading-7">Siège social : 6 PLACE ABBE PIERRE DE PORCARO, 78100 SAINT-GERMAIN-EN-LAYE</p>
            <p className="leading-7">SIRET : 992 552 372 00011</p>
            <p className="leading-7">Numéro de TVA intracommunautaire : FR16 992 552 372</p>
            <p className="leading-7">Adresse e-mail : contact@maisond-institut.fr</p>
            <p className="leading-7">Téléphone : 06 70 15 25 69</p>
            <p className="leading-7">Directeur de la publication : Maison D</p>
          </article>

          <article className="space-y-3 rounded-xl border border-line bg-surface p-6 md:p-8">
            <h2 className="text-2xl text-[#2f241b] md:text-3xl">Hébergement</h2>
            <p className="leading-7">Le site est hébergé par :</p>
            <p className="leading-7">
              <strong>Hostinger International Ltd.</strong>
            </p>
            <p className="leading-7">Adresse : 61 Lordou Vironos Street, 6023 Larnaca, Chypre.</p>
            <p className="leading-7">
              Site web : <a href="https://www.hostinger.com" target="_blank" rel="noreferrer" className="underline underline-offset-2">Hostinger</a>
            </p>
            <p className="leading-7">Création du site : JN+DEV STUDIO</p>
          </article>

          <article className="space-y-3 rounded-xl border border-line bg-surface p-6 md:p-8">
            <h2 className="text-2xl text-[#2f241b] md:text-3xl">Activité</h2>
            <p className="leading-7">
              Maison D propose des prestations dans le domaine de la beauté, notamment des soins esthétiques,
              soins des mains et des pieds, prestations d&apos;onglerie et services associés.
            </p>
            <p className="leading-7">
              Les informations présentées sur le site sont fournies à titre indicatif et peuvent être modifiées à
              tout moment.
            </p>
          </article>

          <article className="space-y-3 rounded-xl border border-line bg-surface p-6 md:p-8">
            <h2 className="text-2xl text-[#2f241b] md:text-3xl">Propriété intellectuelle</h2>
            <p className="leading-7">
              L&apos;ensemble des contenus présents sur le site (textes, images, graphismes, logo, éléments visuels,
              structure) est protégé par les dispositions du Code de la propriété intellectuelle. Toute
              reproduction, représentation, modification, publication, adaptation, totale ou partielle, sans
              autorisation écrite préalable de Maison D est interdite.
            </p>
          </article>

          <article className="space-y-3 rounded-xl border border-line bg-surface p-6 md:p-8">
            <h2 className="text-2xl text-[#2f241b] md:text-3xl">Limitation de responsabilité</h2>
            <p className="leading-7">
              Maison D s&apos;efforce de fournir sur ce site des informations aussi précises que possible. Toutefois,
              Maison D ne pourra être tenue responsable des omissions, inexactitudes et carences dans la mise à
              jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces
              informations.
            </p>
          </article>

          <article className="space-y-3 rounded-xl border border-line bg-surface p-6 md:p-8">
            <h2 className="text-2xl text-[#2f241b] md:text-3xl">Données personnelles</h2>
            <p className="leading-7">
              Les informations éventuellement collectées via le site sont traitées dans le respect de la
              réglementation applicable en matière de protection des données personnelles.
            </p>
            <p className="leading-7">
              Les données personnelles éventuellement collectées via le site, notamment par le biais d&apos;un
              formulaire de contact ou de prise de rendez-vous, sont utilisées uniquement pour répondre aux
              demandes des utilisateurs et assurer le suivi de la relation client.
            </p>
            <p className="leading-7">
              Les données collectées peuvent inclure : nom, prénom, adresse e-mail, numéro de téléphone et
              contenu du message envoyé.
            </p>
            <p className="leading-7">
              Conformément à la réglementation applicable, chaque utilisateur dispose d&apos;un droit d&apos;accès, de
              rectification, d&apos;opposition, d&apos;effacement et de limitation du traitement de ses données
              personnelles.
            </p>
            <p className="leading-7">
              Pour exercer ces droits, l&apos;utilisateur peut contacter Maison D à l&apos;adresse suivante :
              contact@maisond-institut.fr.
            </p>
          </article>

          <article className="space-y-3 rounded-xl border border-line bg-surface p-6 md:p-8">
            <h2 className="text-2xl text-[#2f241b] md:text-3xl">Cookies</h2>
            <p className="leading-7">
              Le site Maison D n&apos;utilise pas de cookies à des fins publicitaires ou de suivi marketing.
            </p>
            <p className="leading-7">
              Des cookies strictement nécessaires au bon fonctionnement du site peuvent toutefois être utilisés,
              le cas échéant. Si des cookies de mesure d&apos;audience, de publicité ou de personnalisation sont
              ajoutés ultérieurement, l&apos;utilisateur devra en être informé et son consentement devra être
              recueilli lorsque la loi l&apos;exige.
            </p>
          </article>

          <article className="space-y-3 rounded-xl border border-line bg-surface p-6 md:p-8">
            <h2 className="text-2xl text-[#2f241b] md:text-3xl">Contact</h2>
            <p className="leading-7">Email : contact@maisond-institut.fr</p>
            <p className="leading-7">Téléphone : 06 70 15 25 69</p>
          </article>

          <article className="space-y-3 rounded-xl border border-line bg-surface p-6 md:p-8">
            <h2 className="text-2xl text-[#2f241b] md:text-3xl">Liens externes</h2>
            <p className="leading-7">
              Le site peut contenir des liens vers des sites tiers. Maison D ne peut être tenue responsable du
              contenu, du fonctionnement ou des pratiques de ces sites externes.
            </p>
          </article>

          <article className="space-y-3 rounded-xl border border-line bg-surface p-6 md:p-8">
            <h2 className="text-2xl text-[#2f241b] md:text-3xl">Droit applicable</h2>
            <p className="leading-7">Les présentes mentions légales sont régies par le droit français.</p>
            <p className="leading-7">
              En cas de litige, et à défaut de résolution amiable, les juridictions françaises compétentes seront
              seules compétentes.
            </p>
          </article>

          <p className="pt-2 text-sm leading-6 text-[#7b6b5f]">Dernière mise à jour : 9 mai 2026.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
