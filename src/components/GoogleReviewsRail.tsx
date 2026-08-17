"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GoogleReview } from "@/lib/google-reviews-types";
import RatingStars from "./RatingStars";
import { IconChevronLeft, IconChevronRight, IconExternal } from "./Icons";

function Avatar({ review }: { review: GoogleReview }) {
  if (review.authorPhotoUri) {
    return (
      <Image
        src={review.authorPhotoUri}
        alt={`${review.authorName} profil fotoğrafı`}
        width={44}
        height={44}
        className="h-11 w-11 shrink-0 rounded-full border border-border object-cover"
        unoptimized
      />
    );
  }

  return (
    <span
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface-elevated text-sm font-semibold text-accent-text"
      aria-hidden="true"
    >
      {review.authorName.charAt(0).toUpperCase()}
    </span>
  );
}

export default function GoogleReviewsRail({ reviews }: { reviews: GoogleReview[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncEdges = useCallback(() => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }

    setAtStart(rail.scrollLeft <= 8);
    setAtEnd(rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 8);
  }, []);

  useEffect(() => {
    syncEdges();
    window.addEventListener("resize", syncEdges);
    return () => window.removeEventListener("resize", syncEdges);
  }, [syncEdges]);

  const scrollByCard = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }

    rail.scrollBy({ left: direction * Math.min(rail.clientWidth * 0.8, 400), behavior: "smooth" });
  };

  const showControls = reviews.length > 1;

  return (
    <div className="relative">
      <div
        ref={railRef}
        onScroll={syncEdges}
        tabIndex={0}
        role="region"
        aria-label="Google yorumları"
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-2 sm:mx-0 sm:px-0 lg:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => (
          <article
            key={review.id}
            className="card-premium flex w-[85vw] max-w-sm shrink-0 snap-center flex-col rounded-2xl p-5 sm:w-[21rem] sm:snap-start sm:p-6 lg:w-[23rem]"
          >
            <div className="flex items-center gap-3">
              <Avatar review={review} />
              <div className="min-w-0">
                {review.authorUri ? (
                  <a
                    href={review.authorUri}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block truncate text-sm font-semibold text-foreground transition-colors hover:text-accent-text"
                  >
                    {review.authorName}
                  </a>
                ) : (
                  <p className="truncate text-sm font-semibold text-foreground">{review.authorName}</p>
                )}
                {review.relativeTime ? (
                  <p className="mt-0.5 truncate text-xs text-muted">{review.relativeTime}</p>
                ) : null}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <RatingStars rating={review.rating} label={`${review.rating} / 5 puan`} />
              <span className="text-xs font-medium text-muted">{review.rating}/5</span>
            </div>

            <blockquote className="mt-3 line-clamp-[8] flex-1 text-sm leading-relaxed text-muted">
              {review.text}
            </blockquote>

            {review.sourceUri ? (
              <a
                href={review.sourceUri}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-text transition-colors hover:text-foreground"
              >
                Google&apos;da görüntüle
                <IconExternal className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </article>
        ))}
      </div>

      {showControls ? (
        <div className="mt-6 hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Önceki yorumlar"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-elevated text-accent-text transition-colors hover:border-accent disabled:cursor-not-allowed disabled:opacity-35"
          >
            <IconChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Sonraki yorumlar"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-elevated text-accent-text transition-colors hover:border-accent disabled:cursor-not-allowed disabled:opacity-35"
          >
            <IconChevronRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
