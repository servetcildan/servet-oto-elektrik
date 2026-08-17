import { siteConfig } from "@/lib/site-data";
import { IconMapPin, IconPhone, IconWhatsApp } from "./Icons";

export default function MobileContactBar() {
  return (
    <>
      {/* Sabit çubuğun içeriği kapatmaması için alt boşluk */}
      <div className="h-[4.75rem] sm:hidden" aria-hidden="true" />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-md sm:hidden">
        <div className="grid grid-cols-3 gap-2 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex min-h-[3.25rem] flex-col items-center justify-center gap-1 rounded-xl bg-accent font-semibold text-accent-on"
          >
            <IconPhone className="h-5 w-5" />
            <span className="text-[0.7rem]">Hemen Ara</span>
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Merhaba,%20bilgi%20almak%20istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[3.25rem] flex-col items-center justify-center gap-1 rounded-xl bg-[#128C4A] font-semibold text-white"
          >
            <IconWhatsApp className="h-5 w-5" />
            <span className="text-[0.7rem]">WhatsApp</span>
          </a>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[3.25rem] flex-col items-center justify-center gap-1 rounded-xl border border-border bg-surface-elevated font-semibold text-foreground"
          >
            <IconMapPin className="h-5 w-5 text-accent-text" />
            <span className="text-[0.7rem]">Yol Tarifi</span>
          </a>
        </div>
      </div>
    </>
  );
}
