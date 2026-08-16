import { siteConfig, sparePartCategories } from "@/lib/site-data";
import { ServiceIcon, IconChevronRight } from "./Icons";

export default function SpareParts() {
  return (
    <section id="yedek-parca" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Yedek Parça</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Kaliteli Parça, Hızlı Tedarik
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
            İhtiyacınız olan yedek parçalar için stok durumunu sorabilir, uygun parça
            seçenekleri hakkında bilgi alabilirsiniz.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {sparePartCategories.map((category) => (
            <article
              key={category.name}
              className="card-premium group flex flex-col rounded-2xl p-5 sm:p-6"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent/15">
                <ServiceIcon name={category.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-foreground sm:text-lg">{category.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{category.description}</p>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Merhaba,%20${encodeURIComponent(category.name)}%20için%20stok%20sormak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-secondary"
              >
                Stok Sor
                <IconChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#iletisim"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-accent-dim"
          >
            Bilgi Al
            <IconChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
