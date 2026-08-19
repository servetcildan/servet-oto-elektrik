import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import {
  BreadcrumbJsonLd,
  GenericFaqJsonLd,
  RoadsideServiceJsonLd,
} from "@/components/JsonLd";
import { IconChevronRight, IconMapPin, IconPhone, IconWhatsApp } from "@/components/Icons";
import { siteConfig } from "@/lib/site-data";
import { roadsideFaqs, roadsideRelatedLinks } from "@/lib/roadside";
import { roadsideMetadata } from "@/lib/seo";

export const metadata = roadsideMetadata;

const breadcrumbItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Yol Yardım", href: "/osmancik-yol-yardim" },
];

const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Merhaba, Osmancık’ta yolda kaldım. Yol yardım istiyorum.",
)}`;

export default function OsmancikYolYardimPage() {
  return (
    <PageShell>
      <RoadsideServiceJsonLd />
      <GenericFaqJsonLd items={roadsideFaqs} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <article className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <Breadcrumb items={breadcrumbItems} />

        <header>
          <span className="section-label">Hizmetler</span>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Osmancık Yol Yardım
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
            {siteConfig.businessName}, Osmancık’ta yolda kalan araçlara elektrik-elektronik
            arızalar kapsamında yerinde yol yardım verir. İşletme sahibi veya servis,
            aracın bulunduğu yere giderek durumu yerinde değerlendirir. Google İşletme
            kaydımızdaki gibi atölye 7/24 açıktır; Osmancık 7/24 yol yardım talepleri
            bu çalışma düzenine göre karşılanır.
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

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">
            Hangi durumlarda yerinde bakılır?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Yol yardım, oto elektrik ve elektronik işimizin sahadaki uzantısıdır. Sık
            görülen talepler: araç çalışmıyor, akü problemi, marş problemi, şarj
            sistemi / alternatör şüphesi, elektrik-elektronik arıza ve arıza lambası.
            Uygunsa yerinde arıza kontrolü yapılır.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">
            Ne yapılır, ne vaat edilmez?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Servise gelemeyen araç için yerinde değerlendirme yapılır. Her arıza yol
            kenarında çözülmez. Kart tamiri, yazılım veya tezgâh gerektiren işlerde
            aracın atölyeye alınması gerekir. Süre veya her noktaya anında varış
            vaadi verilmez; uygunluk telefonda netleştirilir.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">İlgili sayfalar</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {roadsideRelatedLinks.map((item) => (
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
            {roadsideFaqs.map((item) => (
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
