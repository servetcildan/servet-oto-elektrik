import { heroTags, siteConfig } from "@/lib/site-data";
import { IconChevronRight, IconPhone, IconWhatsApp } from "./Icons";

export default function Hero() {
  return (
    <section
      id="ana-sayfa"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 hero-circuit" />
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-accent/8 blur-3xl" />
      <div className="absolute bottom-1/4 -right-24 h-72 w-72 rounded-full bg-accent-secondary/5 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute right-0 top-1/4 h-64 w-64 text-accent/30 sm:h-96 sm:w-96" viewBox="0 0 200 200" fill="none">
          <path d="M20 100 H80 M80 100 V60 M80 60 H140 M140 60 V100 M140 100 H180" stroke="currentColor" strokeWidth="1" />
          <circle cx="80" cy="100" r="4" fill="currentColor" />
          <circle cx="140" cy="60" r="4" fill="currentColor" />
          <rect x="160" y="90" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            <span className="text-xs font-medium text-muted sm:text-sm">{siteConfig.location}</span>
          </div>

          <h1 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            <span className="block text-gradient">SERVET OTO</span>
            <span className="block text-gradient">ELEKTRİK-ELEKTRONİK</span>
          </h1>

          <p className="mt-5 text-lg font-medium text-accent sm:text-xl lg:text-2xl">
            &ldquo;{siteConfig.slogan}&rdquo;
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
            Modern arıza tespit ekipmanları ve uzman teknik çözümlerle oto elektrik,
            elektronik, ECU ve araç beyin sistemlerinde profesyonel hizmet.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Merhaba,%20bilgi%20almak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#20bd5a] sm:px-6 sm:py-4 sm:text-base"
            >
              <IconWhatsApp className="h-5 w-5" />
              WhatsApp ile Yazın
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface/80 px-5 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-accent/50 hover:bg-surface-elevated sm:px-6 sm:py-4 sm:text-base"
            >
              <IconPhone className="h-5 w-5 text-accent" />
              Hemen Arayın
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
          {heroTags.map((tag) => (
            <div
              key={tag}
              className="group flex items-center gap-2 rounded-lg border border-border/80 bg-surface/50 px-3 py-2.5 backdrop-blur-sm transition-all hover:border-accent/25 hover:bg-surface-elevated/80 sm:rounded-xl sm:px-4 sm:py-3"
            >
              <IconChevronRight className="h-3.5 w-3.5 shrink-0 text-accent opacity-50 transition-opacity group-hover:opacity-100 sm:h-4 sm:w-4" />
              <span className="text-[11px] font-medium text-foreground sm:text-sm">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
