import { navItems, siteConfig } from "@/lib/site-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
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
            <p className="text-sm font-semibold text-foreground">Hızlı Bağlantılar</p>
            <nav className="mt-3 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">İletişim</p>
            <div className="mt-3 space-y-2 text-sm text-muted">
              <a href={`tel:${siteConfig.phone}`} className="block transition-colors hover:text-accent">
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-accent"
              >
                WhatsApp
              </a>
              <a href={`mailto:${siteConfig.email}`} className="block transition-colors hover:text-accent">
                {siteConfig.email}
              </a>
              <p>{siteConfig.address}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Çalışma Saatleri</p>
            <div className="mt-3 space-y-1 text-sm text-muted">
              <p>{siteConfig.workingHours}</p>
              <p>{siteConfig.workingHoursNote}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted sm:text-sm">
          <p>
            &copy; {currentYear} {siteConfig.brand}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
