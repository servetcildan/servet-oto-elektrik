import { services } from "@/lib/site-data";
import { ServiceIcon } from "./Icons";

export default function Services() {
  return (
    <section id="hizmetler" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            Hizmetlerimiz
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Profesyonel Oto Elektrik & Elektronik Çözümleri
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Arızayı doğru teşhis ediyor, güvenilir onarım ve yazılım çözümleriyle
            aracınızı yola hazır hale getiriyoruz.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent/20">
                <ServiceIcon name={service.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
