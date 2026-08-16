import { sparePartProducts } from "@/lib/site-data";
import { IconBox, IconChevronRight } from "./Icons";

export default function SpareParts() {
  return (
    <section id="yedek-parca" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl border border-border bg-surface p-8 glow-accent">
              <div className="mb-6 inline-flex rounded-xl bg-accent/10 p-4 text-accent">
                <IconBox className="w-8 h-8" />
              </div>
              <ul className="space-y-4">
                {sparePartProducts.map((part) => (
                  <li key={part} className="flex items-start gap-3">
                    <IconChevronRight className="mt-0.5 w-5 h-5 shrink-0 text-accent" />
                    <span className="text-foreground">{part.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold tracking-widest text-accent uppercase">
              Yedek Parça
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Kaliteli Parça, Hızlı Tedarik
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              ECU modüllerinden sensörlere, kablo tesisatından emisyon parçalarına
              kadar geniş ürün yelpazesiyle ihtiyacınız olan yedek parçaları
              temin ediyoruz. Orijinal ve kaliteli muadil seçeneklerle aracınızın
              performansını koruyoruz.
            </p>
            <a
              href="#iletisim"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-accent-dim"
            >
              Parça Sorgula
              <IconChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
