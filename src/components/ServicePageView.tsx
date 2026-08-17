import Link from "next/link";
import type { ServicePageData } from "@/lib/service-pages";
import { servicePages } from "@/lib/service-pages";
import Breadcrumb from "./Breadcrumb";
import ServiceCta from "./ServiceCta";
import { BreadcrumbJsonLd } from "./JsonLd";
import { IconChevronRight } from "./Icons";

export default function ServicePageView({ page }: { page: ServicePageData }) {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hizmetler", href: "/#hizmetler" },
    { label: page.breadcrumbTitle, href: `/${page.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <article className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <Breadcrumb items={breadcrumbItems} />

        <header>
          <span className="section-label">Hizmetler</span>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {page.h1}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
            {page.intro}
          </p>
        </header>

        {page.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-lg font-semibold text-foreground sm:text-xl">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {p}
              </p>
            ))}
            {section.list && (
              <ul className="mt-4 space-y-2">
                {section.list.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted sm:text-base">
                    <IconChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">Sık Görülen Belirtiler</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {page.symptoms.map((symptom) => (
              <li
                key={symptom}
                className="rounded-lg border border-border bg-surface/60 px-4 py-3 text-sm text-muted"
              >
                {symptom}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">Ne Zaman Servise Başvurmalısınız?</h2>
          <ul className="mt-4 space-y-2">
            {page.whenToVisit.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted sm:text-base">
                <IconChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">Yapılan İşlemler</h2>
          <ol className="mt-4 space-y-2">
            {page.procedures.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted sm:text-base">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </section>

        {page.relatedSlugs.length > 0 && (
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-foreground sm:text-xl">İlgili Hizmetler</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {page.relatedSlugs.map((slug) => {
                const related = servicePages[slug];
                return (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="rounded-lg border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors hover:border-accent/30 hover:text-accent"
                  >
                    {related.breadcrumbTitle}
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <ServiceCta />

        <p className="mt-8 text-center text-sm text-muted">
          <Link href="/" className="transition-colors hover:text-accent">
            ← Ana Sayfaya Dön
          </Link>
        </p>
      </article>
    </>
  );
}
