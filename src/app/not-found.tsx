import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { siteConfig } from "@/lib/site-data";
import { IconMapPin, IconPhone, IconWhatsApp } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı | Servet Oto Elektrik-Elektronik",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageShell>
      <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <span className="section-label">404</span>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Aradığınız sayfa bulunamadı
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Bağlantı hatalı olabilir veya sayfa taşınmış olabilir. Ana sayfaya dönebilir
          ya da doğrudan bize ulaşabilirsiniz.
        </p>

        <div className="mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-accent-on transition-colors hover:bg-accent-hover"
          >
            Ana Sayfa
          </Link>
          <a
            href={`tel:${siteConfig.phone}`}
            className="glass-panel inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-border-strong"
          >
            <IconPhone className="h-4 w-4" />
            Hemen Ara
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Merhaba,%20bilgi%20almak%20istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#128C4A] px-5 py-3.5 text-sm font-semibold text-white"
          >
            <IconWhatsApp className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-border-strong"
          >
            <IconMapPin className="h-4 w-4 text-accent-text" />
            Yol Tarifi
          </a>
        </div>
      </section>
    </PageShell>
  );
}
