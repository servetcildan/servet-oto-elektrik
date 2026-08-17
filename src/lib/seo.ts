import type { Metadata } from "next";
import { siteConfig } from "./site-data";
import type { ServicePageData } from "./service-pages";

export function getSiteUrl(): string | undefined {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (envUrl) return envUrl;
  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`;
  return undefined;
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${normalizedPath}` : normalizedPath;
}

export function buildServiceMetadata(page: ServicePageData): Metadata {
  const canonical = absoluteUrl(`/${page.slug}`);
  const siteUrl = getSiteUrl();

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: "website",
      locale: "tr_TR",
      ...(siteUrl ? { url: `${siteUrl}/${page.slug}` } : {}),
    },
    robots: { index: true, follow: true },
  };
}

export const homeMetadata: Metadata = {
  title: "Servet Oto Elektrik Elektronik | Osmancık Oto Elektrik",
  description:
    "Osmancık oto elektrik ve elektronik servisi. ECU, motor beyni, ABS, akü, DPF, EGR, immobilizer, arıza tespiti ve ECU yazılım hizmetleri.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: "Servet Oto Elektrik Elektronik | Osmancık Oto Elektrik",
    description:
      "Osmancık oto elektrik ve elektronik servisi. ECU, motor beyni, ABS, akü, DPF, EGR, immobilizer, arıza tespiti ve ECU yazılım hizmetleri.",
    type: "website",
    locale: "tr_TR",
    siteName: siteConfig.brand,
    ...(getSiteUrl() ? { url: getSiteUrl() } : {}),
  },
  robots: { index: true, follow: true },
};
