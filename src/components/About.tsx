import Link from "next/link";
import { siteConfig, trustPoints, repairPageLink, workshopPageLink } from "@/lib/site-data";
import { ServiceIcon, IconMapPin, IconPhone, IconWhatsApp } from "./Icons";

export default function About() {
  return (
    <section id="hakkimizda" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <span className="section-label">Neden Biz</span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              <span className="text-metal">Gerçek İşçilik, Ölçülebilir Sonuç</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              <strong className="font-semibold text-foreground">{siteConfig.businessName}</strong>,{" "}
              {siteConfig.location} bölgesinde{" "}
              <Link
                href="/osmancik-oto-elektrik"
                className="font-medium text-foreground underline-offset-4 transition-colors hover:text-accent-text hover:underline"
              >
                oto elektrik
              </Link>
              , oto elektronik, uygun oto tamir, ECU ve araç beyin sistemlerinde
              hizmet veriyor.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Atölyemiz{" "}
              <Link
                href={workshopPageLink.href}
                className="font-medium text-foreground underline-offset-4 transition-colors hover:text-accent-text hover:underline"
              >
                {siteConfig.address}
              </Link>{" "}
              adresinde, {siteConfig.workingHours.toLowerCase()} hizmet verir. Osmancık ve
              Çorum çevresinden gelen araçlarda teşhis,{" "}
              <Link
                href={repairPageLink.href}
                className="font-medium text-foreground underline-offset-4 transition-colors hover:text-accent-text hover:underline"
              >
                oto tamir
              </Link>{" "}
              ve onarım aynı atölyede yürütülür.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-on transition-colors hover:bg-accent-hover"
              >
                <IconPhone className="h-4 w-4" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Merhaba,%20bilgi%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-border-strong"
              >
                <IconWhatsApp className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-border-strong"
              >
                <IconMapPin className="h-4 w-4 text-accent-text" />
                Yol Tarifi
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustPoints.map((item) => (
              <div key={item.title} className="card-premium rounded-2xl p-6">
                <span className="mb-4 inline-flex rounded-xl border border-border bg-surface p-2.5 text-accent-text">
                  <ServiceIcon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
