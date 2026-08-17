import { getResolvedMedia } from "@/lib/media-server";
import WorkGallery from "./WorkGallery";

export default function WorkShowcase() {
  const items = getResolvedMedia();

  return (
    <section
      id="calismalar"
      className="relative overflow-hidden border-y border-border bg-surface py-20 sm:py-28"
    >
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
      <div
        className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-accent/[0.07] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="section-label">Gerçek Çalışmalarımız</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            <span className="text-metal">Atölyemizden Kayıtlar</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Gösterge kartı onarımından ECU boot çalışmasına kadar kendi tezgâhımızda
            yaptığımız işlemler.
          </p>
        </div>

        <div className="mt-12">
          <WorkGallery items={items} />
        </div>
      </div>
    </section>
  );
}
