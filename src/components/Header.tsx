"use client";

import { useState, useEffect } from "react";
import { navItems, siteConfig } from "@/lib/site-data";
import { IconMenu, IconClose, IconPhone } from "./Icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/92 backdrop-blur-md border-b border-border shadow-lg shadow-black/25"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#ana-sayfa"
          className="group flex min-w-0 flex-col"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-lg font-bold tracking-wide text-foreground transition-colors group-hover:text-accent sm:text-xl">
            {siteConfig.brandShort}
          </span>
          <span className="truncate text-[10px] font-medium tracking-[0.12em] text-muted uppercase sm:text-xs">
            {siteConfig.brandSub}
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-0.5 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link rounded-lg px-2.5 py-2 text-[13px] font-medium text-muted lg:px-3"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden items-center gap-2 rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-dim sm:flex lg:px-4 lg:py-2.5"
          >
            <IconPhone className="h-4 w-4 shrink-0" />
            <span className="hidden lg:inline">{siteConfig.phoneDisplay}</span>
            <span className="lg:hidden">Ara</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-border bg-surface p-2 text-foreground transition-colors hover:border-accent/30 xl:hidden"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 top-[60px] z-40 bg-black/50 xl:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed inset-x-0 top-[60px] z-50 max-h-[calc(100vh-60px)] overflow-y-auto border-b border-border bg-background/98 backdrop-blur-lg xl:hidden">
            <nav className="flex flex-col gap-1 p-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl border border-border bg-surface px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-surface-elevated"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3.5 text-base font-semibold text-background"
              >
                <IconPhone className="h-5 w-5" />
                {siteConfig.phoneDisplay}
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
