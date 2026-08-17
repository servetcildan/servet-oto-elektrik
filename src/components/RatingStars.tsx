import { IconStar, IconStarOutline } from "./Icons";

/**
 * Google'dan gelen puanı görsel olarak yansıtır. Puan yuvarlanmaz, yalnızca
 * dolu yıldız sayısı hesaplanır; sayısal değer her zaman metin olarak da verilir.
 */
export default function RatingStars({
  rating,
  size = "sm",
  label,
}: {
  rating: number;
  size?: "sm" | "md";
  label?: string;
}) {
  const filled = Math.round(rating);
  const starClass = size === "md" ? "h-5 w-5" : "h-4 w-4";

  return (
    <span className="inline-flex items-center gap-0.5 text-accent-text" role="img" aria-label={label ?? `${rating} / 5 puan`}>
      {Array.from({ length: 5 }, (_, index) =>
        index < filled ? (
          <IconStar key={index} className={starClass} />
        ) : (
          <IconStarOutline key={index} className={`${starClass} opacity-40`} />
        ),
      )}
    </span>
  );
}
