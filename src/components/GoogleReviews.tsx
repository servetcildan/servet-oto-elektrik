import { getGooglePlaceReviews } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site-data";
import GoogleReviewsRail from "./GoogleReviewsRail";
import RatingStars from "./RatingStars";
import { IconExternal, IconGoogle, IconStar } from "./Icons";

function SectionFrame({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="yorumlar"
      className="relative overflow-hidden border-t border-border py-20 sm:py-28"
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 20% 0%, rgba(3, 44, 79, 0.85) 0%, transparent 60%), linear-gradient(180deg, #060b12 0%, #0a0b0d 100%)",
      }}
    >
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div
        className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-accent/[0.07] blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

function Heading() {
  return (
    <div className="max-w-2xl">
      <span className="section-label">Google Yorumları</span>
      <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
        <span className="text-metal">Müşterilerimiz Ne Diyor?</span>
      </h2>
    </div>
  );
}

/** Anahtar, Place ID veya bağlantı yoksa gösterilen sade yedek kart. */
function FallbackCard() {
  return (
    <div className="card-premium mt-10 flex flex-col items-start gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-elevated">
          <IconGoogle className="h-6 w-6" />
        </span>
        <div>
          <p className="text-base font-semibold text-foreground">
            Değerlendirmelerimiz Google İşletme Profilimizde
          </p>
          <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted">
            {siteConfig.businessName} hakkındaki güncel puan ve yorumlara Google Haritalar
            üzerinden ulaşabilirsiniz.
          </p>
        </div>
      </div>

      <a
        href={siteConfig.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-accent-on transition-colors hover:bg-accent-hover"
      >
        Google&apos;da Görüntüle
        <IconExternal className="h-4 w-4" />
      </a>
    </div>
  );
}

export default async function GoogleReviews() {
  const place = await getGooglePlaceReviews();

  if (!place) {
    return (
      <SectionFrame>
        <Heading />
        <FallbackCard />
      </SectionFrame>
    );
  }

  const { rating, userRatingCount, reviews, reviewsUri, writeReviewUri, placeUri } = place;
  const allReviewsUri = reviewsUri ?? placeUri;

  return (
    <SectionFrame>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Heading />

        {rating !== null ? (
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface/70 px-5 py-4 backdrop-blur-sm">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-elevated">
              <IconGoogle className="h-6 w-6" />
            </span>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold leading-none text-foreground">
                  {rating.toFixed(1).replace(".", ",")}
                </span>
                <RatingStars rating={rating} size="md" label={`Google puanı ${rating} / 5`} />
              </div>
              <p className="mt-1.5 text-xs text-muted">
                {userRatingCount !== null
                  ? `${userRatingCount.toLocaleString("tr-TR")} Google değerlendirmesi`
                  : "Google İşletme Profili puanı"}
              </p>
            </div>
          </div>
        ) : null}
      </div>

      {reviews.length > 0 ? (
        <>
          <div className="mt-10">
            <GoogleReviewsRail reviews={reviews} />
          </div>

          <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-muted">
            <IconStar className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-text" />
            Yorumlar Google tarafından alaka düzeyine göre sıralanmıştır. Yorum içerikleri,
            yazar adları ve profil fotoğrafları Google&apos;a aittir ve Google İşletme
            Profilimizden alınmaktadır.
          </p>
        </>
      ) : (
        <FallbackCard />
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        {allReviewsUri ? (
          <a
            href={allReviewsUri}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-accent-on transition-colors hover:bg-accent-hover"
          >
            <IconGoogle className="h-4 w-4" />
            Tüm yorumları Google&apos;da gör
          </a>
        ) : null}

        {writeReviewUri ? (
          <a
            href={writeReviewUri}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-border-strong hover:text-white"
          >
            <IconStar className="h-4 w-4 text-accent-text" />
            Google&apos;da yorum yap
          </a>
        ) : null}
      </div>
    </SectionFrame>
  );
}
