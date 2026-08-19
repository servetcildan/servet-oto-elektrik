"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ResolvedMedia } from "@/lib/media-server";
import { IconPlay } from "./Icons";

const PREVIEW_SECONDS = 1.6;

type WorkCardPreviewProps = {
  item: ResolvedMedia;
  featured?: boolean;
  suspended?: boolean;
};

function previewTime(duration: number) {
  if (!Number.isFinite(duration) || duration <= 0) {
    return PREVIEW_SECONDS;
  }

  if (duration < 2.2) {
    return Math.max(0.15, duration * 0.45);
  }

  return Math.min(PREVIEW_SECONDS, duration - 0.2);
}

function canHoverPreview() {
  return (
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function WorkCardPreview({
  item,
  featured = false,
  suspended = false,
}: WorkCardPreviewProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [lazySrc, setLazySrc] = useState<string | undefined>(undefined);
  const [failed, setFailed] = useState(false);
  const [hovering, setHovering] = useState(false);

  const snapToPreview = useCallback(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.pause();
    const time = previewTime(video.duration || PREVIEW_SECONDS);

    try {
      video.currentTime = time;
    } catch {
      // Bazı tarayıcılar seek öncesi metadata bekler; loadeddata tekrar dener.
    }
  }, []);

  useEffect(() => {
    if (!item.videoSrc || failed) {
      return;
    }

    const frame = frameRef.current;
    if (!frame) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLazySrc(item.videoSrc ?? undefined);
          observer.disconnect();
        }
      },
      { rootMargin: "80px 0px" },
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, [failed, item.videoSrc]);

  useEffect(() => {
    if (suspended) {
      setHovering(false);
      snapToPreview();
    }
  }, [snapToPreview, suspended]);

  useEffect(() => {
    return () => {
      videoRef.current?.pause();
    };
  }, []);

  const onPointerEnter = () => {
    if (suspended || !canHoverPreview() || failed) {
      return;
    }

    const video = videoRef.current;
    if (!video || !lazySrc) {
      return;
    }

    setHovering(true);
    video.muted = true;
    void video.play().catch(() => undefined);
  };

  const onPointerLeave = () => {
    if (!canHoverPreview()) {
      return;
    }

    setHovering(false);
    snapToPreview();
  };

  if (!item.videoSrc) {
    return (
      <div className="absolute inset-0 bg-[#0c0e10]">
        <UnavailableState />
      </div>
    );
  }

  if (failed) {
    return (
      <div className="absolute inset-0 bg-[#0c0e10]">
        <ErrorState title={item.title} />
      </div>
    );
  }

  return (
    <div
      ref={frameRef}
      className="absolute inset-0 bg-black"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      {item.posterSrc ? (
        <Image
          src={item.posterSrc}
          alt={item.title}
          fill
          sizes={featured ? "(max-width: 640px) 92vw, 62vw" : "(max-width: 640px) 92vw, 31vw"}
          className={`z-0 object-cover transition-opacity duration-200 ${hovering ? "opacity-0" : "opacity-100"}`}
          fetchPriority={featured ? "high" : "low"}
        />
      ) : null}

      {lazySrc ? (
        <video
          ref={videoRef}
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${
            item.posterSrc && !hovering ? "opacity-0" : "opacity-100"
          }`}
          src={lazySrc}
          poster={item.posterSrc ?? undefined}
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          tabIndex={-1}
          aria-hidden="true"
          onLoadedMetadata={snapToPreview}
          onLoadedData={snapToPreview}
          onError={() => setFailed(true)}
        />
      ) : null}

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[42%] bg-gradient-to-t from-black/78 via-black/28 to-transparent"
        aria-hidden="true"
      />

      <span
        className={`pointer-events-none absolute left-1/2 top-[44%] z-[2] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-on shadow-[0_0_18px_rgba(0,174,239,0.55)] ring-1 ring-white/35 ${
          featured ? "h-11 w-11" : "h-9 w-9"
        }`}
        aria-hidden="true"
      >
        <IconPlay className={featured ? "ml-0.5 h-4 w-4" : "ml-px h-3.5 w-3.5"} />
      </span>
    </div>
  );
}

function UnavailableState() {
  return (
    <div className="flex h-full items-end p-4 sm:p-5">
      <span className="rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white/70">
        Yakında
      </span>
    </div>
  );
}

function ErrorState({ title }: { title: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
      <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/55">
        Video
      </span>
      <p className="max-w-[16rem] text-sm text-white/70">{title} şu anda yüklenemiyor.</p>
    </div>
  );
}
