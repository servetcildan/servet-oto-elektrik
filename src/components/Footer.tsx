import { navItems, siteConfig } from "@/lib/site-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-bold tracking-tight text-foreground">
              {siteConfig.brand}
            </p>
            <p className="mt-2 text-sm text-accent">&ldquo;{siteConfig.slogan}&rdquo;</p>
            <p className="mt-4 text-sm text-muted">{siteConfig.location}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Menü</p>
            <nav className="mt-4 flex flex-col gap-2">
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
            <div className="mt-4 space-y-2 text-sm text-muted">
              <a href={`tel:${siteConfig.phone}`} className="block hover:text-accent">
                {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="block hover:text-accent">
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted">
          <p>
            &copy; {currentYear} {siteConfig.brand}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
