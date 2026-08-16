import { siteConfig } from "@/lib/site-data";
import { IconMail, IconMapPin, IconPhone, IconWhatsApp } from "./Icons";

export default function Contact() {
  return (
    <section id="iletisim" className="relative border-t border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            İletişim
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Bize Ulaşın
          </h2>
          <p className="mt-4 text-base text-muted">
            Arıza tespiti, onarım veya yedek parça için hemen iletişime geçin.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface-elevated p-6 text-center transition-all hover:border-accent/30"
              >
                <div className="rounded-xl bg-accent/10 p-3 text-accent">
                  <IconPhone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted">Telefon</p>
                  <p className="mt-1 font-semibold text-foreground">{siteConfig.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Merhaba,%20bilgi%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface-elevated p-6 text-center transition-all hover:border-[#25D366]/50"
              >
                <div className="rounded-xl bg-[#25D366]/10 p-3 text-[#25D366]">
                  <IconWhatsApp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted">WhatsApp</p>
                  <p className="mt-1 font-semibold text-foreground">Mesaj Gönder</p>
                </div>
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-surface-elevated p-6">
              <div className="flex gap-4">
                <div className="shrink-0 rounded-xl bg-accent/10 p-3 text-accent">
                  <IconMapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted">Konum</p>
                  <p className="mt-1 font-semibold text-foreground">{siteConfig.address}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface-elevated p-6">
              <div className="flex gap-4">
                <div className="shrink-0 rounded-xl bg-accent/10 p-3 text-accent">
                  <IconMail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted">E-posta</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block font-semibold text-foreground hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
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
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[400px] w-full grayscale-[30%] contrast-[1.1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
