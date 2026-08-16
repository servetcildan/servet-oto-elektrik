"use client";

import { useState, useEffect } from "react";
import { navItems, siteConfig } from "@/lib/site-data";
import { IconMenu, IconClose, IconPhone } from "./Icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#ana-sayfa" className="group flex flex-col gap-0.5" onClick={() => setMenuOpen(false)}>
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Servet
          </span>
          <span className="text-sm font-bold tracking-tight text-foreground sm:text-base">
            OTO ELEKTRİK-ELEKTRONİK
          </span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-elevated hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-accent-dim sm:flex"
          >
            <IconPhone className="w-4 h-4" />
            {siteConfig.phoneDisplay}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-border bg-surface p-2.5 text-foreground xl:hidden"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {menuOpen ? <IconClose className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-background/95 backdrop-blur-lg xl:hidden">
          <nav className="flex flex-col gap-1 p-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-border bg-surface px-4 py-4 text-base font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-surface-elevated"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-4 text-base font-semibold text-background"
            >
              <IconPhone className="w-5 h-5" />
              {siteConfig.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
