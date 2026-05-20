import type { MetadataRoute } from "next";
import { STUDIO } from "@/lib/content";

const SITE_URL = `https://${STUDIO.website}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = ["", "#about", "#services", "#why", "#contact"];

  return sections.map((s) => ({
    url: `${SITE_URL}/${s}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: s === "" ? 1.0 : 0.7,
  }));
}
