import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import {
  BreadcrumbJsonLd,
  GenericFaqJsonLd,
  NamedServiceJsonLd,
} from "@/components/JsonLd";
import { IconChevronRight, IconMapPin, IconPhone, IconWhatsApp } from "@/components/Icons";
import { siteConfig } from "@/lib/site-data";
import type { TopicPageData } from "@/lib/topic-pages";

export default function TopicPageView({ data }: { data: TopicPageData }) {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: data.breadcrumbLabel, href: data.path },
  ];
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    data.whatsappText,
  )}`;

  return (
    <PageShell>
      <NamedServiceJsonLd
        name={data.serviceName}
        serviceType={data.serviceType}
        description={data.serviceDescription}
        path={data.path}
      />
      <GenericFaqJsonLd items={data.faqs} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <article className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <Breadcrumb items={breadcrumbItems} />

        <header>
          <span className="section-label">Hizmetler</span>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {data.h1}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
            {data.intro}
          </p>
        </header>

        <section className="mt-8 grid gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-base font-semibold text-accent-on transition-colors hover:bg-accent-hover"
          >
            <IconPhone className="h-5 w-5" />
            Hemen Ara · {siteConfig.phoneDisplay}
          </a>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl bg-[#128C4A] px-5 py-3.5 text-sm font-semibold text-white"
            >
              <IconWhatsApp className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/30 hover:text-accent-text"
            >
              <IconMapPin className="h-5 w-5 text-accent-text" />
              Konum / Yol Tarifi
            </a>
          </div>
        </section>

        {data.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-lg font-semibold text-foreground sm:text-xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="mt-3 text-sm leading-relaxed text-muted sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">İlgili sayfalar</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {data.relatedLinks.map((item) => (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors hover:border-accent/30 hover:text-accent-text"
              >
                {item.label}
                <IconChevronRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">Sık Sorulan Sorular</h2>
          <div className="mt-4 space-y-4">
            {data.faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-border bg-surface/60 px-4 py-4 sm:px-5"
              >
                <h3 className="text-sm font-semibold text-foreground sm:text-base">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-8 text-center text-sm text-muted">
          <Link href="/" className="transition-colors hover:text-accent-text">
            ← Ana Sayfaya Dön
          </Link>
        </p>
      </article>
    </PageShell>
  );
}
