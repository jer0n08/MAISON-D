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
    default: "Maison D. | Beauté, Coffee Shop & Kid Area",
    template: "%s | Maison D.",
  },
  description:
    "À Saint-Germain-en-Laye, Maison D. réunit un institut de beauté et bien-être, un coffee shop et une kid area. Découvrez les soins et réservez votre rendez-vous.",
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
    title: "Maison D. | Beauté, Coffee Shop & Kid Area",
    description:
      "Soins de beauté et bien-être, coffee shop et espace enfants : découvrez Maison D. à Saint-Germain-en-Laye.",
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
    title: "Maison D. | Beauté, Coffee Shop & Kid Area",
    description:
      "Un soin, un café, du temps pour vous. Découvrez l’institut, le coffee shop et la kid area Maison D. à Saint-Germain-en-Laye.",
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
