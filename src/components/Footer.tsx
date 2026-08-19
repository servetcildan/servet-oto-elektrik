import Link from "next/link";
import { navItems, servicePageLinks, siteConfig } from "@/lib/site-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <p className="text-base font-bold text-foreground">{siteConfig.brandShort}</p>
            <p className="text-xs font-medium tracking-wide text-muted uppercase">
              {siteConfig.brandSub}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {siteConfig.location} bölgesinde oto elektrik, elektronik ve ECU çözümlerinde
              profesyonel servis hizmeti.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Hizmetler</p>
            <nav className="mt-3 flex flex-col gap-2">
              {servicePageLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-accent-text"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Hızlı Bağlantılar</p>
            <nav className="mt-3 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-accent-text"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">İletişim</p>
            <div className="mt-3 space-y-2 text-sm text-muted">
              <a href={`tel:${siteConfig.phone}`} className="block transition-colors hover:text-accent-text">
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-accent-text"
              >
                WhatsApp
              </a>
              <p>{siteConfig.address}</p>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-accent-text"
              >
                Yol Tarifi Al
              </a>
              <p className="pt-1">{siteConfig.workingHours}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-border pt-6 text-center text-xs text-muted sm:text-sm">
          <p>
            &copy; {currentYear} {siteConfig.brand}. Tüm hakları saklıdır.
          </p>
          <Link
            href="/gizlilik-politikasi"
            className="transition-colors hover:text-accent-text"
          >
            Gizlilik Politikası / KVKK
          </Link>
        </div>
      </div>
    </footer>
  );
}
