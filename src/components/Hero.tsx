import { siteConfig } from "@/lib/site-data";
import { IconChevronRight, IconPhone, IconWhatsApp } from "./Icons";
const heroTags = [
  "Oto Elektrik",
  "Oto Elektronik",
  "ECU / Motor Beyni",
  "ABS Beyni",
  "DPF / EGR / AdBlue",
  "İmmobilizer",
  "ECU Yazılım",
  "Şanzıman Adaptasyon",
];
export default function Hero() {
  return (
    <section
      id="ana-sayfa"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span className="text-sm font-medium text-muted">
              {siteConfig.location}
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-gradient">SERVET OTO</span>
            <span className="block text-gradient">ELEKTRİK-ELEKTRONİK</span>
          </h1>

          <p className="mt-6 text-xl font-medium text-accent sm:text-2xl lg:text-3xl">
            &ldquo;{siteConfig.slogan}&rdquo;
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Modern teşhis ekipmanları ve uzman kadromuzla araç elektrik-elektronik
            arızalarınızda profesyonel çözüm sunuyoruz. ECU onarımından yazılım
            optimizasyonuna kadar tüm ihtiyaçlarınız tek adreste.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Merhaba,%20bilgi%20almak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-[#20bd5a]"
            >
              <IconWhatsApp className="w-5 h-5" />
              WhatsApp ile Yazın
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 py-4 text-base font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-surface-elevated"              
            >
              <IconPhone className="w-5 h-5 text-accent" />
              Hemen Arayın
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {heroTags.map((tag) => (
            <div
              key={tag}
              className="group flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-4 py-3 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-surface-elevated"
            >
              <IconChevronRight className="w-4 h-4 shrink-0 text-accent opacity-60 transition-opacity group-hover:opacity-100" />
              <span className="text-xs font-medium text-foreground sm:text-sm">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
