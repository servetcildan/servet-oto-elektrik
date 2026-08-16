import { ecuSoftwareServices } from "@/lib/site-data";
import { IconChevronRight, IconCode } from "./Icons";

export default function EcuYazilim() {
  return (
    <section id="ecu-yazilim" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">ECU Yazılım</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Profesyonel ECU Yazılım Hizmetleri
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
            ECU yazılım işlemlerinde aracınıza ve sisteminize uygun, güvenilir ve
            kurumsal çözümler sunuyoruz. Orijinal yazılım yedekleme her işlem öncesinde
            gerçekleştirilir.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {ecuSoftwareServices.map((service) => (
            <article
              key={service.title}
              className="card-premium group relative flex flex-col rounded-2xl p-5 sm:p-6"
            >
              <span className="mb-3 inline-flex w-fit rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-accent uppercase sm:text-xs">
                {service.badge}
              </span>
              <h3 className="text-base font-semibold text-foreground sm:text-lg">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="grid lg:grid-cols-[1fr_auto]">
            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="relative">
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  Yazılım işlemleri öncesinde detaylı teşhis yapılır. Aracınızın marka,
                  model ve mevcut yazılım durumuna göre en uygun çözüm önerilir.
                  Emisyon sistemleri ve güvenlik modülleri konusunda dikkatli ve
                  sorumlu bir yaklaşım benimsenir.
                </p>
                <a
                  href="#iletisim"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-dim"
                >
                  Yazılım Danışmanlığı
                  <IconChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center border-t border-border bg-surface-elevated p-8 lg:border-t-0 lg:border-l lg:p-10">
              <div className="text-center">
                <div className="mx-auto mb-4 inline-flex rounded-2xl border border-accent/20 bg-accent/10 p-5 text-accent">
                  <IconCode className="h-10 w-10 sm:h-12 sm:w-12" />
                </div>
                <p className="font-mono text-xs text-muted sm:text-sm">
                  <span className="text-accent">&gt;</span> read_ecu()
                </p>
                <p className="font-mono text-xs text-muted sm:text-sm">
                  <span className="text-accent">&gt;</span> backup_original()
                </p>
                <p className="font-mono text-xs text-accent sm:text-sm">
                  <span className="text-muted">&gt;</span> apply_calibration() ✓
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
