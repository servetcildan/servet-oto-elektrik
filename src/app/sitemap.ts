import type { MetadataRoute } from "next";
import { servicePageSlugs } from "@/lib/service-pages";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const now = new Date();
  const paths = ["", ...servicePageSlugs.map((slug) => `/${slug}`)];

  return paths.map((path) => ({
    url: baseUrl ? `${baseUrl}${path}` : path || "/",
    lastModified: now,
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));
}
