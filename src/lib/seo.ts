import type { Metadata } from "next";
import { siteConfig } from "./site-data";
import type { ServicePageData } from "./service-pages";

/** Domain taşınınca yalnızca NEXT_PUBLIC_SITE_URL değiştirilir. */
export const STABLE_PRODUCTION_URL = "https://servet-oto-elektrik.vercel.app";

const OG_IMAGE_PATH = siteConfig.ogImage;
const OG_IMAGE_ALT = "Servet Oto Elektrik-Elektronik, Osmancık Küçük Sanayi Sitesi";

export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (envUrl) {
    return envUrl;
  }

  return STABLE_PRODUCTION_URL;
}

export function absoluteUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (normalizedPath.startsWith("/#")) {
    return getSiteUrl();
  }

  return `${getSiteUrl()}${normalizedPath === "/" ? "" : normalizedPath}`;
}

function socialImages() {
  return [
    {
      url: OG_IMAGE_PATH,
      alt: OG_IMAGE_ALT,
    },
  ];
}

export function buildSocialMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Pick<Metadata, "openGraph" | "twitter"> {
  const url = absoluteUrl(input.path);

  return {
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: siteConfig.brand,
      locale: "tr_TR",
      type: "website",
      images: socialImages(),
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [OG_IMAGE_PATH],
    },
  };
}

export function buildServiceMetadata(page: ServicePageData): Metadata {
  const canonical = absoluteUrl(`/${page.slug}`);
  const social = buildSocialMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${page.slug}`,
  });

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical },
    ...social,
    robots: { index: true, follow: true },
  };
}

export const homeMetadata: Metadata = {
  title: "Servet Oto Elektrik Elektronik | Osmancık Oto Elektrik",
  description:
    "Osmancık oto elektrik ve elektronik servisi. ECU, motor beyni, ABS, akü, DPF, EGR, immobilizer, arıza tespiti ve ECU yazılım hizmetleri.",
  alternates: { canonical: absoluteUrl("/") },
  ...buildSocialMetadata({
    title: "Servet Oto Elektrik Elektronik | Osmancık Oto Elektrik",
    description:
      "Osmancık oto elektrik ve elektronik servisi. ECU, motor beyni, ABS, akü, DPF, EGR, immobilizer, arıza tespiti ve ECU yazılım hizmetleri.",
    path: "/",
  }),
  robots: { index: true, follow: true },
};

export const privacyMetadata: Metadata = {
  title: "Gizlilik Politikası / KVKK | Servet Oto Elektrik-Elektronik",
  description:
    "Servet Oto Elektrik-Elektronik sitesinde iletişim, harita ve Google yorumları kapsamında kişisel verilerin nasıl işlendiğine dair bilgilendirme.",
  alternates: { canonical: absoluteUrl("/gizlilik-politikasi") },
  ...buildSocialMetadata({
    title: "Gizlilik Politikası / KVKK | Servet Oto Elektrik-Elektronik",
    description:
      "Servet Oto Elektrik-Elektronik sitesinde iletişim, harita ve Google yorumları kapsamında kişisel verilerin nasıl işlendiğine dair bilgilendirme.",
    path: "/gizlilik-politikasi",
  }),
  robots: { index: true, follow: true },
};
