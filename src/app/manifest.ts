import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Native macOS, iOS & Safari Apps`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#06080d",
    theme_color: "#4f46e5",
    icons: [
      {
        src: "/brand/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/brand/logo_white.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
