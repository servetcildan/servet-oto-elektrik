import { ecuSoftwareServices } from "@/lib/site-data";
import { IconChevronRight, IconCode } from "./Icons";

export default function EcuYazilim() {
  return (
    <section id="ecu-yazilim" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-surface">
          <div className="grid lg:grid-cols-2">
            <div className="relative p-8 sm:p-12 lg:p-16">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="relative">
                <span className="text-sm font-semibold tracking-widest text-accent uppercase">
                  ECU Yazılım
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Yazılımda Güç, Performansta Fark
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted">
                  ECU yazılım çözümlerimizle emisyon sistemlerinden performans
                  optimizasyonuna kadar ihtiyaçlarınıza özel kalibrasyonlar
                  sunuyoruz. Orijinal yazılım yedekleme ve güvenli uygulama
                  garantisiyle hizmet veriyoruz.
                </p>
                <ul className="mt-8 space-y-3">
                  {ecuSoftwareServices.map((feature) => (
                    <li key={feature.title} className="flex items-start gap-3">
                      <IconChevronRight className="mt-0.5 w-5 h-5 shrink-0 text-accent" />
                      <span className="text-sm text-foreground sm:text-base">{feature.title}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#iletisim"
                  className="mt-10 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-accent-dim"
                >
                  Yazılım Danışmanlığı
                  <IconChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="relative flex min-h-[320px] items-center justify-center bg-surface-elevated p-8 sm:min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
              <div className="relative text-center">
                <div className="mx-auto mb-6 inline-flex rounded-2xl border border-accent/20 bg-accent/10 p-6 text-accent">
                  <IconCode className="w-16 h-16" />
                </div>
                <p className="font-mono text-sm text-muted sm:text-base">
                  <span className="text-accent">&gt;</span> diagnose()
                </p>
                <p className="font-mono text-sm text-muted sm:text-base">
                  <span className="text-accent">&gt;</span> analyze_fault()
                </p>
                <p className="font-mono text-sm text-accent sm:text-base">
                  <span className="text-muted">&gt;</span> deploy_solution() ✓
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
