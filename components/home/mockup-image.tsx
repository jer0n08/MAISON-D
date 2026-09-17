import Image from "next/image";

type Crop = "hero" | "visage" | "corps" | "ongles" | "epilation" | "coffee" | "kids";
const crops: Record<Crop, readonly [number, number, number, number]> = {
  hero: [395, 66, 398, 270],
  visage: [27, 616, 182, 122],
  corps: [222, 616, 180, 122],
  ongles: [412, 616, 180, 122],
  epilation: [605, 616, 181, 122],
  coffee: [231, 838, 186, 277],
  kids: [652, 838, 141, 277],
};

// Display the selected photograph from the supplied mockup without regenerating it.
export function MockupImage({ crop, alt, priority = false }: Readonly<{ crop: Crop; alt: string; priority?: boolean }>) {
  const [x, y, width, height] = crops[crop];
  return (
    <div className="relative w-full overflow-hidden bg-primary/10" style={{ aspectRatio: `${width}/${height}` }}>
      <Image src="/images/home/maquette-direction-v2.png" alt={alt} width={1024} height={1536}
        priority={priority} sizes="(min-width: 1024px) 1600px, 1200px"
        className="absolute max-w-none"
        style={{ width: `${1024 / width * 100}%`, height: "auto", left: `${-x / width * 100}%`, top: `${-y / height * 100}%` }} />
    </div>
  );
}
