import Link from "next/link";
import { services } from "@/lib/site-data";
import { ServiceIcon, IconChevronRight } from "./Icons";

export default function Services() {
  return (
    <section id="hizmetler" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="section-label">Hizmetler</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            <span className="text-metal">Oto Elektrik ve Araç Elektroniği</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Osmancık ve Çorum çevresinde teşhisten onarıma kadar tüm süreci tek
            atölyede yürütüyoruz.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="card-premium group relative flex flex-col overflow-hidden rounded-2xl p-6 sm:p-7"
            >
              <span
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/[0.07] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <span className="relative mb-5 inline-flex w-fit rounded-xl border border-border bg-surface p-3 text-accent-text transition-colors group-hover:border-accent/40">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </span>

              <h3 className="relative text-base font-semibold leading-snug text-foreground sm:text-lg">
                {service.title}
              </h3>
              <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                {service.description}
              </p>

              <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text">
                Detaylı Bilgi
                <IconChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>

              <span
                className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-accent to-transparent transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
