import { services } from "@/lib/site-data";
import { ServiceIcon } from "./Icons";

export default function Services() {
  return (
    <section id="hizmetler" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="section-label">Hizmetler</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Profesyonel Oto Elektrik & Elektronik Çözümleri
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
            Arızayı doğru teşhis ediyor, güvenilir onarım ve yazılım çözümleriyle
            aracınızı yola hazır hale getiriyoruz.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="card-premium group relative overflow-hidden rounded-2xl p-5 sm:p-6"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent/15">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-foreground sm:text-lg">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-accent/60 to-transparent transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
