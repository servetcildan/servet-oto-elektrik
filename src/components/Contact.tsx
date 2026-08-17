import { siteConfig } from "@/lib/site-data";
import { IconClock, IconMapPin, IconPhone, IconWhatsApp } from "./Icons";

export default function Contact() {
  return (
    <section id="iletisim" className="relative border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">İletişim</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Bize Ulaşın
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">
            Arıza tespiti, onarım veya yedek parça için hemen iletişime geçin.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-surface-elevated p-5 sm:p-6">
              <p className="text-lg font-bold text-foreground">{siteConfig.businessName}</p>
              <p className="mt-1 text-sm text-accent">&ldquo;{siteConfig.slogan}&rdquo;</p>
              <div className="mt-4 flex items-start gap-3">
                <div className="shrink-0 rounded-xl bg-accent/10 p-2.5 text-accent">
                  <IconMapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">Adres</p>
                  <p className="mt-0.5 font-medium text-foreground">{siteConfig.address}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="card-premium flex flex-col items-center gap-3 rounded-2xl p-5 text-center"
              >
                <div className="rounded-xl bg-accent/10 p-3 text-accent">
                  <IconPhone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted">Telefon</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{siteConfig.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Merhaba,%20bilgi%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-premium flex flex-col items-center gap-3 rounded-2xl p-5 text-center"
              >
                <div className="rounded-xl bg-[#25D366]/10 p-3 text-[#25D366]">
                  <IconWhatsApp className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted">WhatsApp</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">Mesaj Gönder</p>
                </div>
              </a>
            </div>

            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-premium flex items-center justify-center gap-3 rounded-2xl p-4"
            >
              <div className="rounded-xl bg-accent/10 p-2.5 text-accent">
                <IconMapPin className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted">Google Maps</p>
                <p className="text-sm font-semibold text-foreground">Yol Tarifi Al</p>
              </div>
            </a>

            <div className="rounded-2xl border border-border bg-surface-elevated p-5">
              <div className="flex gap-3">
                <div className="shrink-0 rounded-xl bg-accent/10 p-2.5 text-accent">
                  <IconClock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">Çalışma Saatleri</p>
                  <p className="mt-1 text-sm font-medium text-foreground">{siteConfig.workingHours}</p>
                  <p className="mt-0.5 text-xs text-muted">{siteConfig.workingHoursNote}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Servet Oto Elektrik Konum"
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[360px] w-full grayscale-[25%] contrast-[1.05] sm:min-h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
