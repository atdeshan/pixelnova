import type { MetadataRoute } from "next";

const SITE_URL = "https://pixelnova.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = ["", "#about", "#services", "#work", "#process", "#contact"];

  return sections.map((s) => ({
    url: `${SITE_URL}/${s}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: s === "" ? 1.0 : 0.7,
  }));
}
