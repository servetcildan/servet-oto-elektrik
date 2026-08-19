import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCta from "@/components/ServiceCta";
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from "@/components/JsonLd";
import { IconChevronRight, IconMapPin, IconPhone } from "@/components/Icons";
import { repairPageLink, roadsidePageLink, servicePageLinks, siteConfig } from "@/lib/site-data";
import { workshopMetadata } from "@/lib/seo";

export const metadata = workshopMetadata;

const breadcrumbItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Küçük Sanayi Sitesi", href: "/osmancik-kucuk-sanayi-sitesi" },
];

export default function OsmancikKucukSanayiSitesiPage() {
  return (
    <PageShell>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <article className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <Breadcrumb items={breadcrumbItems} />

        <header>
          <span className="section-label">Konum</span>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Osmancık Küçük Sanayi Sitesi’nde Oto Elektrik Atölyesi
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
            {siteConfig.businessName}, Osmancık oto sanayi bölgesindeki Küçük Sanayi
            Sitesi’nde fiziksel bir atölye olarak hizmet verir. Aynı adreste oto elektrik,
            uygun oto tamir ve arıza tespiti yürütülür. Adres:{" "}
            {siteConfig.address}. Başka ilçede şube veya ikinci bir işletme adresi
            bu sitede yer almaz.
          </p>
        </header>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">
            Küçük Sanayi Sitesi konumu
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Atölye, Çiftlikler Mahallesi Küçük Sanayi Sitesi B Blok No:8, 19500
            Osmancık / Çorum adresindedir. Osmancık oto sanayi içindeki bu konum,
            araçla geliş ve parça temini için sanayi sitesi düzenine uygundur.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Çalışma düzeni {siteConfig.workingHours.toLowerCase()} /{" "}
            {siteConfig.workingHoursNote}. Randevu veya yol tarifi için telefon ve
            Google Haritalar bağlantısı yeterlidir.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">
            Osmancık oto elektrik atölyesi
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Küçük Sanayi Sitesi’ndeki tezgâhta oto elektrik, araç elektroniği, ECU,
            arıza tespiti ve buna bağlı oto tamir işleri aynı adreste yürütülür. Hizmet
            kapsamı bu atölyenin gerçek işleridir; sitede listelenmeyen bir hizmet veya
            başka şehir şubesi iddiası yoktur.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">
            Oto elektrik, oto tamir ve yol yardım
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Osmancık Küçük Sanayi Sitesi’ndeki bu atölye,{" "}
            <Link
              href="/osmancik-oto-elektrik"
              className="font-medium text-foreground underline-offset-4 transition-colors hover:text-accent-text hover:underline"
            >
              oto elektrik
            </Link>
            ,{" "}
            <Link
              href={repairPageLink.href}
              className="font-medium text-foreground underline-offset-4 transition-colors hover:text-accent-text hover:underline"
            >
              oto tamir
            </Link>{" "}
            ve servise gelemeyen araçlar için{" "}
            <Link
              href={roadsidePageLink.href}
              className="font-medium text-foreground underline-offset-4 transition-colors hover:text-accent-text hover:underline"
            >
              yol yardım
            </Link>{" "}
            işlerini aynı işletme çatısında yürütür. Sanayi sitesindeki tek adres budur;
            bölgedeki tüm tamirhanelerin merkezi olunmadığı gibi böyle bir iddia da yoktur.
          </p>
        </section>

        <section className="mt-10 grid gap-3 sm:grid-cols-2">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-4 text-sm font-semibold text-foreground transition-colors hover:border-accent/30 hover:text-accent-text"
          >
            <IconPhone className="h-5 w-5 shrink-0 text-accent-text" />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-4 text-sm font-semibold text-foreground transition-colors hover:border-accent/30 hover:text-accent-text"
          >
            <IconMapPin className="h-5 w-5 shrink-0 text-accent-text" />
            Google Maps yol tarifi
          </a>
        </section>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Servet Oto Elektrik Osmancık Küçük Sanayi Sitesi konumu"
            src={siteConfig.mapEmbedUrl}
            width="100%"
            height="360"
            style={{ border: 0, minHeight: "280px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[280px] w-full sm:h-[360px]"
          />
        </div>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">İlgili hizmetler</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {servicePageLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors hover:border-accent/30 hover:text-accent-text"
              >
                {item.label}
                <IconChevronRight className="h-3.5 w-3.5" />
              </Link>
            ))}
            <Link
              href={repairPageLink.href}
              className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors hover:border-accent/30 hover:text-accent-text"
            >
              {repairPageLink.label}
              <IconChevronRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href={roadsidePageLink.href}
              className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors hover:border-accent/30 hover:text-accent-text"
            >
              {roadsidePageLink.label}
              <IconChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        <ServiceCta />

        <p className="mt-8 text-center text-sm text-muted">
          <Link href="/" className="transition-colors hover:text-accent-text">
            ← Ana Sayfaya Dön
          </Link>
        </p>
      </article>
    </PageShell>
  );
}
