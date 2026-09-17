export interface ServiceCategory {
  key: string;
  slug: string;
  label: string;
  description: string;
  image: string;
  introduction: string;
  detailTitle: string;
  detail: string;
  metaDescription: string;
}

export const SERVICE_CATEGORIES: readonly ServiceCategory[] = [
  {
    key: "l'impeccable",
    slug: "l-impeccable",
    label: "L’Impeccable",
    description: "Les rituels mains et pieds",
    image: "/images/home/premium-pieds.webp",
    introduction: "Vos mains et vos pieds réunis dans un même rituel. Ce soin associe la manucure russe à la beauté des pieds, avec une finition au vernis classique ou semi-permanent selon vos envies.",
    detailTitle: "Un rendez-vous, deux attentions",
    detail: "Le rituel L’Impeccable réunit les prestations mains et pieds dans une formule complète. Choisissez le vernis classique pour une séance d’une heure trente, ou le semi-permanent pour un rendez-vous de deux heures. Les deux formules et leurs tarifs sont présentés ci-dessous.",
    metaDescription: "Découvrez L’Impeccable chez Maison D. à Saint-Germain-en-Laye : manucure russe et beauté des pieds, vernis classique ou semi-permanent. Tarifs et réservation.",
  },
  {
    key: "onglerie mains",
    slug: "onglerie-mains",
    label: "Beauté des mains",
    description: "Manucure, vernis et finitions",
    image: "/images/home/premium-ongles.webp",
    introduction: "Une finition naturelle, une couleur qui vous ressemble ou une nouvelle longueur : découvrez l’onglerie Maison D. Manucure russe, vernis semi-permanent, gainage et rallongement composent notre carte pour les mains.",
    detailTitle: "À chaque envie, sa finition",
    detail: "Notre carte comprend la manucure sans vernis, le vernis Manucurist et le semi-permanent. Pour travailler la structure ou la longueur, retrouvez le gainage sur ongles naturels et les rallongements au gel ou à la Dip Powder. French, baby boomer et nail art sont proposés en option ; la dépose dispose de son propre créneau.",
    metaDescription: "Onglerie à Saint-Germain-en-Laye : manucure russe, semi-permanent, gainage et rallongement chez Maison D. Consultez les durées, tarifs et disponibilités.",
  },
  {
    key: "onglerie pieds",
    slug: "onglerie-pieds",
    label: "Beauté des pieds",
    description: "Soins, vernis et détente",
    image: "/images/home/premium-pieds.webp",
    introduction: "Accordez une attention particulière à vos pieds chez Maison D. Beauté des pieds sans vernis, couleur Manucurist ou semi-permanent : choisissez votre finition et découvrez aussi notre massage des pieds.",
    detailTitle: "Du naturel à la couleur",
    detail: "La beauté des pieds se décline en trois formules, de trente minutes à une heure. Vous pouvez également réserver une dépose, une option French, baby boomer ou nail art, ou un massage des pieds de dix minutes. Les durées et les prix de chaque prestation sont détaillés dans la carte.",
    metaDescription: "Beauté des pieds à Saint-Germain-en-Laye chez Maison D. : sans vernis, Manucurist, semi-permanent et massage. Découvrez les durées et tarifs.",
  },
  {
    key: "massages",
    slug: "massages",
    label: "Massages",
    description: "Relaxation et soins du corps",
    image: "/images/home/premium-corps.webp",
    introduction: "Prenez le temps d’une pause chez Maison D. Massage relaxant sur mesure, Deep Tissue, drainage lymphatique ou rituel future maman : explorez nos différentes séances et choisissez le temps que vous souhaitez vous accorder.",
    detailTitle: "Choisir votre moment",
    detail: "Le massage relaxant existe en trente minutes, une heure ou deux heures. Les séances Deep Tissue et future maman se déclinent en une ou deux heures. Notre carte propose aussi le drainage lymphatique, la madérothérapie et le palper-rouler, ainsi que Le Parfait, qui associe Kobido japonais et drainage lymphatique.",
    metaDescription: "Massages à Saint-Germain-en-Laye : relaxant, Deep Tissue, drainage lymphatique et future maman chez Maison D. Durées, tarifs et réservation en ligne.",
  },
  {
    key: "visage",
    slug: "soins-visage",
    label: "Soins du visage",
    description: "Éclat et rituels sur mesure",
    image: "/images/home/premium-visage.webp",
    introduction: "Offrez à votre visage un moment d’attention chez Maison D. Kobido japonais, Vague de lumière by Greenspa ou L’Or Marin : découvrez nos rituels visage, du format express à la séance d’une heure trente.",
    detailTitle: "Quatre rituels à découvrir",
    detail: "Le Kobido japonais est proposé en version express de trente minutes ou en séance d’une heure. Vague de lumière by Greenspa occupe un créneau de trente minutes, tandis que L’Or Marin se déroule sur une heure trente. Retrouvez les tarifs ci-dessous et contactez l’institut si vous souhaitez être orientée dans votre choix.",
    metaDescription: "Soins du visage à Saint-Germain-en-Laye : Kobido japonais, Vague de lumière Greenspa et L’Or Marin chez Maison D. Découvrez la carte et réservez.",
  },
  {
    key: "épilation",
    slug: "epilation",
    label: "Épilation",
    description: "Au fil ou à la cire",
    image: "/images/home/premium-epilation.webp",
    introduction: "Visage, jambes, bras ou maillot : retrouvez les épilations Maison D. Au fil pour les zones du visage ou à la cire pour le visage et le corps, choisissez la prestation qui correspond à vos envies.",
    detailTitle: "Vos zones, votre formule",
    detail: "Pour le visage, la carte distingue les sourcils, les lèvres ou le menton du visage complet. À la cire, le maillot se décline en classique, brésilien ou échancré, et intégral avec interfessier. La formule L’Impeccable réunit aisselles, maillot au choix et jambes entières dans un rendez-vous d’une heure.",
    metaDescription: "Épilation à Saint-Germain-en-Laye chez Maison D. : visage au fil, cire, maillot, jambes et aisselles. Consultez les prix et réservez votre séance.",
  },
  {
    key: "blanchiment dentaire",
    slug: "blanchiment-dentaire",
    label: "Blanchiment dentaire",
    description: "Les séances esthétiques",
    image: "/images/home/premium-sourire.webp",
    introduction: "Découvrez les séances de blanchiment dentaire esthétique proposées par Maison D. La carte distingue une première et une deuxième séance, chacune sur un créneau de quarante-cinq minutes.",
    detailTitle: "Préparer votre rendez-vous",
    detail: "Consultez les deux tarifs ci-dessous et sélectionnez la séance correspondant à votre rendez-vous. Pour connaître le déroulement de la prestation et ses modalités, contactez directement l’équipe de Maison D. avant de réserver.",
    metaDescription: "Blanchiment dentaire esthétique chez Maison D. à Saint-Germain-en-Laye. Première et deuxième séances : durées, tarifs et réservation sur Planity.",
  },
];

export const PLANITY_URL = "https://www.planity.com/maison-d-78100-saint-germain-en-laye-dsr";
