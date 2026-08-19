import type { MetadataRoute } from "next";
import { servicePageSlugs } from "@/lib/service-pages";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["/", "/gizlilik-politikasi", ...servicePageSlugs.map((slug) => `/${slug}`)];

  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : path === "/gizlilik-politikasi" ? 0.3 : 0.8,
  }));
}
