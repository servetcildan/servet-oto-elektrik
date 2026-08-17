"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ResolvedMedia } from "@/lib/media-server";
import MediaPlaceholder from "./MediaPlaceholder";
import { IconClose, IconPlay } from "./Icons";

type WorkGalleryProps = {
  items: ResolvedMedia[];
};

export default function WorkGallery({ items }: WorkGalleryProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const active = items.find((item) => item.id === activeId) ?? null;

  const close = useCallback(() => {
    setActiveId(null);
    triggerRef.current?.focus();
    triggerRef.current = null;
  }, []);

  useEffect(() => {
    if (!active) {
      return;
    }

    closeRef.current?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, video, [href], [tabindex]:not([tabindex="-1"])',
      );

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [active, close]);

  const open = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    triggerRef.current = event.currentTarget;
    setActiveId(id);
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {items.map((item, index) => {
          const featured = index === 0;
          const playable = Boolean(item.videoSrc);

          const media = (
            <>
              {item.posterSrc ? (
                <Image
                  src={item.posterSrc}
                  alt={item.title}
                  fill
                  sizes={featured ? "(max-width: 640px) 92vw, 62vw" : "(max-width: 640px) 92vw, 31vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              ) : (
                <MediaPlaceholder subtle={!featured} />
              )}

              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
                aria-hidden="true"
              />

              {playable ? (
                <span
                  className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-on sm:h-16 sm:w-16"
                  aria-hidden="true"
                >
                  <IconPlay className="ml-0.5 h-6 w-6" />
                </span>
              ) : (
                <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white/70 backdrop-blur-sm">
                  Yakında
                </span>
              )}

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3 className="text-sm font-semibold leading-snug text-white sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/65 sm:text-sm">
                  {item.description}
                </p>
              </div>
            </>
          );

          // Öne çıkan kart satır yüksekliğini belirler; diğerleri o satıra uzar.
          const frameClass = `media-frame group relative w-full overflow-hidden rounded-2xl ${
            featured ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[4/3] lg:aspect-auto lg:min-h-64"
          }`;
          const spanClass = featured ? "sm:col-span-2" : "";

          if (!playable) {
            return (
              <div key={item.id} className={`${frameClass} ${spanClass}`}>
                {media}
              </div>
            );
          }

          return (
            <button
              key={item.id}
              type="button"
              onClick={(event) => open(event, item.id)}
              aria-label={`${item.title} videosunu oynat`}
              className={`${frameClass} ${spanClass} cursor-pointer text-left transition-colors hover:border-accent/60`}
            >
              {media}
            </button>
          );
        })}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-6"
          onClick={close}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-video-title"
            className="media-frame relative w-full max-w-4xl overflow-hidden rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border px-4 py-3 sm:px-5 sm:py-4">
              <div className="min-w-0">
                <h3
                  id="work-video-title"
                  className="truncate text-sm font-semibold text-foreground sm:text-base"
                >
                  {active.title}
                </h3>
                <p className="mt-0.5 truncate text-xs text-muted sm:text-sm">{active.description}</p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Video penceresini kapat"
                className="shrink-0 rounded-lg border border-border p-2 text-muted transition-colors hover:border-accent/50 hover:text-foreground"
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>

            <div className="aspect-video w-full bg-black">
              {active.videoSrc ? (
                <video
                  key={active.id}
                  className="h-full w-full"
                  src={active.videoSrc}
                  poster={active.posterSrc ?? undefined}
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                />
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
