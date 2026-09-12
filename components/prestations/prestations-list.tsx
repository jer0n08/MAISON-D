"use client";

import { useMemo, useState } from "react";
import prestationsData from "@/data/prestations.json";

const CATEGORIES = [
  "tous",
  "l'impeccable",
  "onglerie mains",
  "onglerie pieds",
  "massages",
  "visage",
  "épilation",
  "blanchiment dentaire",
] as const;

type Category = (typeof CATEGORIES)[number];

type Prestation = {
  id: string;
  title: string;
  category: Exclude<Category, "tous">;
  duration: string;
  price: number;
};

const prestations = prestationsData as Prestation[];

const CATEGORY_ORDER: Record<Exclude<Category, "tous">, number> = {
  "l'impeccable": 0,
  "onglerie mains": 1,
  "onglerie pieds": 2,
  massages: 3,
  visage: 4,
  "épilation": 5,
  "blanchiment dentaire": 6,
};

function formatCategoryLabel(category: Category) {
  if (category === "l'impeccable") {
    return "L'Impeccable";
  }

  return category
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function PrestationsList() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("tous");

  const filteredPrestations = useMemo(() => {
    if (selectedCategory === "tous") {
      return prestations.toSorted(
        (a, b) =>
          CATEGORY_ORDER[a.category] - CATEGORY_ORDER[b.category] ||
          a.price - b.price ||
          a.title.localeCompare(b.title, "fr"),
      );
    }

    return prestations
      .filter((prestation) => prestation.category === selectedCategory)
      .toSorted((a, b) => a.price - b.price || a.title.localeCompare(b.title, "fr"));
  }, [selectedCategory]);

  return (
    <section className="container-regular py-14 md:py-20" aria-labelledby="prestations-filtres-title">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="prestations-filtres-title" className="text-4xl text-[#2a2018] md:text-5xl">
          Filtrer les prestations
        </h2>
        <p className="mt-4 text-base text-[#635448] md:text-[1.05rem]">
          Choisissez une catégorie pour afficher les soins disponibles.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2 md:gap-3">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-md border px-4 py-2 text-sm tracking-[0.14em] transition md:px-5 md:py-2.5 md:text-sm ${
                isActive
                  ? "border-primary bg-primary text-white"
                  : "border-line bg-surface text-[#5f5248] hover:border-primary hover:text-primary-dark"
              }`}
            >
              {formatCategoryLabel(category)}
            </button>
          );
        })}
      </div>

      <div className="mt-10 w-full border-t border-line">
        {filteredPrestations.length === 0 ? (
          <p className="py-8 text-center text-[#635448]">Aucune prestation pour cette catégorie.</p>
        ) : (
          filteredPrestations.map((prestation) => (
            <article
              key={prestation.id}
              className="flex flex-col gap-2 border-b border-line py-5 md:flex-row md:items-center md:justify-between"
            >
              <h3 className="text-2xl text-[#2f241b] md:text-3xl">{prestation.title}</h3>
              <p className="text-base text-[#635448] md:text-[1.05rem]">
                {prestation.duration} -{" "}
                <span
                  style={{ fontFamily: '"DidotLTRomanWeb", var(--font-didot-roman), serif' }}
                  className="text-xl text-[#2f241b] md:text-2xl"
                >
                  {prestation.price}€
                </span>
              </p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
