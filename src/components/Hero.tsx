import { heroTrustItems, siteConfig } from "@/lib/site-data";
import HeroEcuSchematic from "./HeroEcuSchematic";
import { IconClock, IconMapPin, IconPhone, IconScan } from "./Icons";

const trustIcons = {
  clock: IconClock,
  pin: IconMapPin,
  scan: IconScan,
} as const;

export default function Hero() {
  return (
    <section
      id="ana-sayfa"
      className="relative flex min-h-[92svh] items-center overflow-hidden pt-20 lg:min-h-svh"
    >
      <div className="absolute inset-0 hero-backdrop" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14 xl:gap-20">
          <div className="min-w-0">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted sm:text-xs">
              {siteConfig.brand}
            </p>

            <h1 className="mt-4 text-[2rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem] xl:text-6xl">
              <span className="text-metal block">Osmancık Oto Elektrik</span>
              <span className="mt-1 block text-foreground">
                &amp; <span className="text-accent-gradient">Elektronik</span> Servisi
              </span>
            </h1>

            <div className="accent-rule mt-6 w-24" aria-hidden="true" />

            <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-muted sm:text-lg">
              ECU, ABS ve araç elektroniğinde modern teşhis cihazlarıyla uzman onarım.
              <span className="block text-foreground/80">
                &ldquo;{siteConfig.slogan}&rdquo;
              </span>
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-accent px-6 py-4 text-base font-semibold text-accent-on shadow-lg shadow-accent/25 transition-all hover:bg-accent-hover hover:shadow-accent/40"
              >
                <IconPhone className="h-5 w-5" />
                Hemen Ara
              </a>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-base font-semibold text-foreground transition-all hover:border-border-strong hover:text-white"
              >
                <IconMapPin className="h-5 w-5 text-accent-text" />
                Yol Tarifi Al
              </a>
            </div>

            <ul className="mt-9 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {heroTrustItems.map((item) => {
                const Icon = trustIcons[item.icon];

                return (
                  <li
                    key={item.label}
                    className="flex items-center gap-2.5 border-l border-border pl-3.5 sm:block sm:border-l-0 sm:border-t sm:pl-0 sm:pt-3.5"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-accent-text sm:mb-2" />
                    <span className="text-sm font-semibold text-foreground">{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="min-w-0">
            <HeroEcuSchematic />
          </div>
        </div>
      </div>
    </section>
  );
}
