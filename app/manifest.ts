import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maison D.",
    short_name: "Maison D.",
    description: "Institut de beauté et onglerie Maison D.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f3ee",
    theme_color: "#a47449",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
