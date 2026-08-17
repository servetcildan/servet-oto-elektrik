import { siteConfig } from "@/lib/site-data";
import { IconMapPin, IconPhone, IconWhatsApp } from "./Icons";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 sm:right-6">
      <a
        href={siteConfig.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konuma git"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface-elevated text-accent shadow-lg shadow-black/20 transition-transform hover:scale-110 sm:h-14 sm:w-14"
      >
        <IconMapPin className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
      <a
        href={`https://wa.me/${siteConfig.whatsapp}?text=Merhaba,%20bilgi%20almak%20istiyorum.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişim"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110 hover:bg-[#20bd5a] sm:h-16 sm:w-16"
      >
        <IconWhatsApp className="h-7 w-7 sm:h-8 sm:w-8" />
      </a>
      <a
        href={`tel:${siteConfig.phone}`}
        aria-label="Telefon ile ara"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-background shadow-lg shadow-accent/30 transition-transform hover:scale-110 hover:bg-accent-dim sm:h-16 sm:w-16"
      >
        <IconPhone className="h-7 w-7 sm:h-8 sm:w-8" />
      </a>
    </div>
  );
}
