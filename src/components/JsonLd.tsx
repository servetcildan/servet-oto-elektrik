import { faqItems, siteConfig } from "@/lib/site-data";
import { absoluteUrl, getSiteUrl } from "@/lib/seo";
import { getServiceFaqs, type ServicePageData } from "@/lib/service-pages";

export function LocalBusinessJsonLd() {
  const siteUrl = getSiteUrl();
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.businessName,
    telephone: siteConfig.phone,
    url: siteUrl,
    image: absoluteUrl(siteConfig.ogImage),
    hasMap: siteConfig.mapsUrl,
    sameAs: [siteConfig.mapsUrl],
    openingHours: siteConfig.openingHoursSchema,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      postalCode: siteConfig.postalCode,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.latitude,
      longitude: siteConfig.longitude,
    },
    areaServed: [
      { "@type": "City", name: siteConfig.city },
      { "@type": "AdministrativeArea", name: siteConfig.region },
    ],
    description:
      "Osmancık oto elektrik, oto elektronik, ECU, motor beyni, ABS, akü, DPF, EGR, immobilizer ve arıza tespiti hizmetleri.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({ page }: { page: ServicePageData }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    description: page.metaDescription,
    url: absoluteUrl(`/${page.slug}`),
    areaServed: [
      { "@type": "City", name: siteConfig.city },
      { "@type": "AdministrativeArea", name: siteConfig.region },
    ],
    provider: {
      "@type": "AutoRepair",
      name: siteConfig.businessName,
      telephone: siteConfig.phone,
      url: getSiteUrl(),
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.streetAddress,
        postalCode: siteConfig.postalCode,
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.region,
        addressCountry: siteConfig.country,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceFaqJsonLd({ page }: { page: ServicePageData }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: getServiceFaqs(page).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

type BreadcrumbItem = { label: string; href: string };

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
