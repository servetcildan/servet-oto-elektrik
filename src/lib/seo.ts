import type { Metadata } from "next";
import { siteConfig } from "./site-data";
import type { ServicePageData } from "./service-pages";

/** Domain taşınınca yalnızca NEXT_PUBLIC_SITE_URL değiştirilir. */
export const STABLE_PRODUCTION_URL = "https://www.servetotoelektrikosmancik.com";

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
      siteName: siteConfig.businessName,
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

export function buildPageMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = absoluteUrl(input.path);
  const social = buildSocialMetadata(input);

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical },
    ...social,
    robots: { index: true, follow: true },
  };
}

export function buildServiceMetadata(page: ServicePageData): Metadata {
  return buildPageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${page.slug}`,
  });
}

export const homeMetadata: Metadata = buildPageMetadata({
  title: "Servet Oto Elektrik Elektronik Osmancık",
  description:
    "Servet Oto Elektrik Elektronik Osmancık, Küçük Sanayi Sitesi’ndeki atölyesinde oto tamir, ECU, motor beyni, ABS, akü, DPF, EGR ve arıza tespiti hizmeti verir.",
  path: "/",
});

export const repairMetadata: Metadata = buildPageMetadata({
  title: "Osmancık Oto Tamir | Servet Oto Elektrik Elektronik",
  description:
    "Osmancık Küçük Sanayi Sitesi’nde oto tamir, elektrik-elektronik arıza tespiti ve buna bağlı araç onarımı. Servet Oto Elektrik Elektronik Osmancık atölyesinde gerçek kapsam.",
  path: "/osmancik-oto-tamir",
});

export const adblueMetadata: Metadata = buildPageMetadata({
  title: "Osmancık AdBlue Arıza Tespiti | Servet Oto Elektrik Elektronik",
  description:
    "Osmancık’ta AdBlue uyarısı, SCR ve NOx sistem arıza tespiti. Sensör ve hat kontrolü; emisyon sistemini devre dışı bırakma vaadi yoktur.",
  path: "/adblue",
});

export const starterMetadata: Metadata = buildPageMetadata({
  title: "Osmancık Marş Dinamosu | Servet Oto Elektrik Elektronik",
  description:
    "Osmancık’ta marş basmama, tık sesi ve yavaş marş şikâyetlerinde marş dinamosu, akü ve elektrik bağlantısı birlikte test edilir.",
  path: "/mars-dinamosu",
});

export const chargingMetadata: Metadata = buildPageMetadata({
  title: "Osmancık Şarj Dinamosu | Servet Oto Elektrik Elektronik",
  description:
    "Osmancık’ta akü lambası, şarj olmama ve voltaj düşmesinde şarj dinamosu (alternatör) ile akü ilişkisi test edilir.",
  path: "/sarj-dinamosu",
});

export const workshopMetadata: Metadata = {
  title: "Osmancık Küçük Sanayi Sitesi | Servet Oto Elektrik Elektronik Osmancık",
  description:
    "Çiftlikler Mahallesi Küçük Sanayi Sitesi B Blok No:8, Osmancık/Çorum adresindeki oto elektrik atölyesi. Yol tarifi, telefon ve hizmetler.",
  alternates: { canonical: absoluteUrl("/osmancik-kucuk-sanayi-sitesi") },
  ...buildSocialMetadata({
    title: "Osmancık Küçük Sanayi Sitesi | Servet Oto Elektrik Elektronik Osmancık",
    description:
      "Çiftlikler Mahallesi Küçük Sanayi Sitesi B Blok No:8, Osmancık/Çorum adresindeki oto elektrik atölyesi. Yol tarifi, telefon ve hizmetler.",
    path: "/osmancik-kucuk-sanayi-sitesi",
  }),
  robots: { index: true, follow: true },
};

export const roadsideMetadata: Metadata = {
  title: "Osmancık Yol Yardım | Servet Oto Elektrik Elektronik",
  description:
    "Osmancık ve uygun yakın çevrede yolda kalan araçlara, elektrik-elektronik arızalar kapsamında yerinde yol yardım. Akü, marş ve elektronik arızalarda değerlendirme.",
  alternates: { canonical: absoluteUrl("/osmancik-yol-yardim") },
  ...buildSocialMetadata({
    title: "Osmancık Yol Yardım | Servet Oto Elektrik Elektronik",
    description:
      "Osmancık ve uygun yakın çevrede yolda kalan araçlara, elektrik-elektronik arızalar kapsamında yerinde yol yardım. Akü, marş ve elektronik arızalarda değerlendirme.",
    path: "/osmancik-yol-yardim",
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
