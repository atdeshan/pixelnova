import type { MetadataRoute } from "next";
import { STUDIO } from "@/lib/content";

const SITE_URL = `https://${STUDIO.website}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
