import { heroTags, siteConfig } from "@/lib/site-data";
import { IconChevronRight, IconPhone, IconWhatsApp } from "./Icons";

const ecuLabels = [
  { text: "ECU", x: "8%", y: "18%" },
  { text: "ABS", x: "78%", y: "14%" },
  { text: "CAN-BUS", x: "72%", y: "72%" },
  { text: "IMMOBILIZER", x: "4%", y: "68%", hideMobile: true },
  { text: "DIAGNOSTIC", x: "62%", y: "88%", hideMobile: true },
  { text: "TRANSMISSION", x: "10%", y: "88%", hideTablet: true },
] as const;

function HeroEcuVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="absolute inset-0 rounded-3xl bg-accent/5 blur-3xl" aria-hidden="true" />

      <div className="hero-ecu-float relative aspect-square max-h-[420px] w-full sm:max-h-[480px] lg:max-h-[520px]">
        {/* Circuit lines */}
        <svg
          className="absolute inset-0 h-full w-full text-accent/25"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M60 200 H140 M140 200 V120 M140 120 H260 M260 120 V200 M260 200 H340"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="hero-circuit-flow motion-reduce:animate-none"
          />
          <path
            d="M200 60 V140 M200 260 V340 M80 280 H160 M240 120 H320"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.5"
          />
          <circle cx="140" cy="200" r="3" fill="currentColor" className="hero-status-blink" />
          <circle cx="260" cy="120" r="3" fill="currentColor" className="hero-status-blink [animation-delay:1s]" />
          <circle cx="200" cy="260" r="2.5" fill="currentColor" opacity="0.6" />
        </svg>

        {/* Floating labels */}
        {ecuLabels.map((label) => (
          <span
            key={label.text}
            className={`absolute rounded border border-border/80 bg-surface/80 px-2 py-0.5 font-mono text-[9px] tracking-wider text-accent/80 backdrop-blur-sm sm:text-[10px] ${
              "hideMobile" in label && label.hideMobile ? "hidden sm:inline-flex" : ""
            } ${"hideTablet" in label && label.hideTablet ? "hidden lg:inline-flex" : ""}`}
            style={{ left: label.x, top: label.y }}
          >
            {label.text}
          </span>
        ))}

        {/* Central ECU card */}
        <div className="absolute left-1/2 top-1/2 w-[62%] max-w-[240px] -translate-x-1/2 -translate-y-1/2">
          <div className="overflow-hidden rounded-xl border border-accent/25 bg-gradient-to-br from-surface-elevated to-surface shadow-lg shadow-accent/5">
            {/* Card header */}
            <div className="flex items-center justify-between border-b border-border/80 bg-surface/90 px-3 py-2">
              <div className="flex items-center gap-1.5">
                <span className="hero-status-blink h-1.5 w-1.5 rounded-full bg-success" />
                <span className="font-mono text-[10px] font-medium text-muted sm:text-xs">ECU MODULE</span>
              </div>
              <span className="font-mono text-[9px] text-accent/70 sm:text-[10px]">ONLINE</span>
            </div>

            {/* Chip body */}
            <div className="relative p-4 sm:p-5">
              <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
              <div className="relative mx-auto aspect-[4/3] max-w-[160px] rounded-lg border border-accent/20 bg-surface p-3">
                {/* Pin rows */}
                <div className="absolute -left-1 top-3 flex flex-col gap-1.5">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={`l-${i}`} className="h-0.5 w-2 rounded-full bg-accent/40" />
                  ))}
                </div>
                <div className="absolute -right-1 top-3 flex flex-col gap-1.5">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={`r-${i}`} className="h-0.5 w-2 rounded-full bg-accent/40" />
                  ))}
                </div>

                {/* Inner chip */}
                <div className="flex h-full flex-col items-center justify-center gap-2">
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="h-2 w-2 rounded-sm border border-accent/15 bg-accent/8"
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] font-semibold tracking-widest text-accent">
                    ECU
                  </span>
                </div>
              </div>

              {/* Status rows */}
              <div className="relative mt-4 space-y-1.5 font-mono text-[9px] sm:text-[10px]">
                <div className="flex justify-between text-muted">
                  <span>CAN-BUS</span>
                  <span className="text-success">OK</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>DIAGNOSTIC</span>
                  <span className="text-accent">READY</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>FAULT CODE</span>
                  <span className="text-foreground/70">NONE</span>
                </div>
              </div>
            </div>

            {/* Card footer */}
            <div className="border-t border-border/60 px-3 py-2">
              <div className="flex items-center gap-2">
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-border">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-accent/60 to-accent" />
                </div>
                <span className="font-mono text-[9px] text-muted">74%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="ana-sayfa"
      className="relative flex min-h-screen items-center overflow-x-hidden pt-16"
    >
      <div className="absolute inset-0 hero-circuit" aria-hidden="true" />
      <div className="absolute inset-0 circuit-pattern opacity-30" aria-hidden="true" />
      <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-accent/8 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-24 h-72 w-72 rounded-full bg-accent-secondary/5 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left column */}
          <div className="min-w-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-3.5 py-1.5 backdrop-blur-sm">
              <span className="hero-status-blink h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium text-muted sm:text-sm">{siteConfig.location}</span>
            </div>

            <p className="text-[1.75rem] font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
              <span className="block text-foreground">
                SERVET <span className="hero-title-accent">OTO</span>
              </span>
              <span className="mt-0.5 block text-foreground">
                ELEKTRİK-<span className="hero-title-accent">ELEKTRONİK</span>
              </span>
            </p>

            <h1 className="mt-4 text-xl font-semibold leading-snug text-foreground sm:text-2xl lg:text-3xl">
              Osmancık Oto Elektrik &amp; Elektronik Servisi
            </h1>

            <p className="mt-5 text-base font-medium leading-snug text-accent sm:text-lg lg:text-xl">
              &ldquo;{siteConfig.slogan}&rdquo;
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
              Modern arıza tespit ekipmanları ve uzman teknik çözümlerle oto elektrik,
              elektronik, ECU ve araç beyin sistemlerinde profesyonel hizmet.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Merhaba,%20bilgi%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-sm shadow-[#25D366]/20 transition-all hover:bg-[#20bd5a] hover:shadow-md hover:shadow-[#25D366]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-6 sm:py-4 sm:text-base"
              >
                <IconWhatsApp className="h-5 w-5" />
                WhatsApp ile Yazın
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-surface/70 px-5 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-surface-elevated hover:shadow-sm hover:shadow-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-6 sm:py-4 sm:text-base"
              >
                <IconPhone className="h-5 w-5 text-accent" />
                Hemen Arayın
              </a>
            </div>
          </div>

          {/* Right column — ECU visual */}
          <div className="lg:col-start-2 lg:row-start-1">
            <HeroEcuVisual />
          </div>
        </div>

        {/* Service tags — full width below */}
        <div className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:mt-14 lg:grid-cols-4">
          {heroTags.map((tag) => (
            <div
              key={tag}
              className="hero-tag group flex items-center gap-2 rounded-lg px-3 py-2.5 sm:rounded-xl sm:px-4 sm:py-3"
            >
              <IconChevronRight className="h-3.5 w-3.5 shrink-0 text-accent opacity-40 transition-all group-hover:opacity-100 group-hover:drop-shadow-[0_0_4px_rgba(0,136,255,0.4)] sm:h-4 sm:w-4" />
              <span className="text-[11px] font-medium leading-tight text-foreground sm:text-sm">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
