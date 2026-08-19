"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ResolvedMedia } from "@/lib/media-server";
import { IconClose } from "./Icons";
import WorkCardPreview from "./WorkCardPreview";

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
              <WorkCardPreview item={item} featured={featured} suspended={Boolean(active)} />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] p-4 sm:p-5">
                <h3 className="text-sm font-semibold leading-snug text-white sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/70 sm:text-sm">
                  {item.description}
                </p>
              </div>
            </>
          );

          // Öne çıkan kart satır yüksekliğini belirler; diğerleri o satıra uzar.
          const frameClass = `group relative w-full overflow-hidden rounded-2xl border border-border-strong bg-black ${
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
              className={`${frameClass} ${spanClass} cursor-pointer text-left transition-colors hover:border-accent/50`}
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
                  title={active.title}
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                />
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
