import Link from "next/link";
import { ecuSoftwareServices } from "@/lib/site-data";
import { IconChevronRight } from "./Icons";

export default function EcuYazilim() {
  return (
    <section id="ecu-yazilim" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">ECU Yazılım</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            <span className="text-metal">Profesyonel ECU Yazılım Hizmetleri</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Her işlem öncesinde orijinal yazılım yedeklenir; aracınıza uygun, güvenli
            ve kurumsal çözümler uygulanır.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {ecuSoftwareServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="card-premium group relative flex flex-col rounded-2xl p-5 sm:p-6"
            >
              <span className="mb-3 inline-flex w-fit rounded-full border border-border bg-surface px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-text sm:text-[11px]">
                {service.badge}
              </span>
              <h3 className="text-base font-semibold text-foreground sm:text-lg">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="media-frame relative mt-10 overflow-hidden rounded-2xl px-6 py-8 sm:px-10 sm:py-10">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              Yazılım işlemleri öncesinde detaylı teşhis yapılır. Aracınızın marka, model ve
              mevcut yazılım durumuna göre en uygun çözüm önerilir; emisyon ve güvenlik
              sistemlerinde sorumlu bir yaklaşım benimsenir.
            </p>
            <Link
              href="/ecu-yazilim"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-on transition-colors hover:bg-accent-hover"
            >
              Yazılım Danışmanlığı
              <IconChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
