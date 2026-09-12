import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { MobileStickyCta } from "@/components/home/mobile-sticky-cta";
import { LenisProvider } from "@/components/providers/lenis-provider";
import "./globals.css";

const didotRoman = localFont({
  src: "../public/fonts/Didot LT W01 Roman.woff2",
  variable: "--font-didot-roman",
  display: "swap",
});

const didotItalic = localFont({
  src: "../public/fonts/Didot LT Std Italic.otf",
  variable: "--font-didot-italic",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

function getMetadataBase() {
  try {
    return new URL(siteUrl);
  } catch {
    return new URL("http://localhost:3000");
  }
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Maison D. | Institut de beauté et onglerie",
    template: "%s | Maison D.",
  },
  description:
    "Maison D. est un institut de beauté et onglerie dédié à la mise en beauté des mains, des ongles et du visage avec une approche soignée et élégante.",
  keywords: [
    "Maison D.",
    "institut de beauté",
    "onglerie",
    "beauté des ongles",
    "manucure",
    "pose de gel",
    "nail art",
    "soins beauté",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Maison D.",
    title: "Maison D. | Institut de beauté et onglerie",
    description:
      "Découvrez l'univers Maison D. : onglerie, manucure et soins beauté dans une ambiance raffinée.",
    images: [
      {
        url: "/og/maison-d-og.png",
        width: 1200,
        height: 630,
        alt: "Maison D. institut de beauté et onglerie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison D. | Institut de beauté et onglerie",
    description:
      "Maison D. propose des prestations d'onglerie et de beauté pour sublimer votre style avec précision.",
    images: ["/og/maison-d-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${didotRoman.variable} ${didotItalic.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LenisProvider />
        {children}
        <MobileStickyCta />
      </body>
    </html>
  );
}
