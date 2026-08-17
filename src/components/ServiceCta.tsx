import { siteConfig } from "@/lib/site-data";
import { IconPhone, IconWhatsApp } from "./Icons";

export default function ServiceCta() {
  return (
    <div className="mt-12 rounded-2xl border border-border bg-surface-elevated p-6 sm:p-8">
      <h2 className="text-xl font-bold text-foreground sm:text-2xl">
        {siteConfig.location} — Hemen İletişime Geçin
      </h2>
      <p className="mt-2 text-sm text-muted sm:text-base">
        Arıza tespiti veya onarım için telefon veya WhatsApp üzerinden bize ulaşabilirsiniz.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={`tel:${siteConfig.phone}`}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-accent-on transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <IconPhone className="h-5 w-5" />
          {siteConfig.phoneDisplay}
        </a>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=Merhaba,%20bilgi%20almak%20istiyorum.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <IconWhatsApp className="h-5 w-5" />
          WhatsApp ile Yazın
        </a>
      </div>
    </div>
  );
}
