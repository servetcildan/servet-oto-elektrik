import "server-only";
import type { GooglePlaceReviews, GoogleReview } from "./google-reviews-types";

export type { GooglePlaceReviews, GoogleReview };

/**
 * Google İşletme Profili verisi yalnızca resmî Places API (New) üzerinden,
 * yalnızca sunucuda okunur. API anahtarı istek başlığında gider; hiçbir zaman
 * istemci paketine, URL'e veya log kaydına yazılmaz.
 *
 * Dokümantasyon: https://developers.google.com/maps/documentation/places/web-service/place-details
 */

const PLACES_ENDPOINT = "https://places.googleapis.com/v1/places";

/** Places API tek çağrıda en fazla 5 yorum döndürür. */
const MAX_REVIEWS = 5;

/** Kota ve gereksiz istek olmaması için sonuç 6 saat önbelleğe alınır. */
const CACHE_SECONDS = 6 * 60 * 60;

type LocalizedText = { text?: string; languageCode?: string };

type PlaceDetailsResponse = {
  displayName?: LocalizedText;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  googleMapsLinks?: {
    placeUri?: string;
    reviewsUri?: string;
    writeAReviewUri?: string;
    directionsUri?: string;
  };
  reviews?: {
    name?: string;
    rating?: number;
    text?: LocalizedText;
    originalText?: LocalizedText;
    relativePublishTimeDescription?: string;
    publishTime?: string;
    googleMapsUri?: string;
    authorAttribution?: {
      displayName?: string;
      uri?: string;
      photoUri?: string;
    };
  }[];
};

function normalize(data: PlaceDetailsResponse): GooglePlaceReviews {
  const placeUri = data.googleMapsLinks?.placeUri ?? data.googleMapsUri ?? null;

  const reviews = (data.reviews ?? [])
    .map((review, index): GoogleReview | null => {
      const text = review.text?.text?.trim() || review.originalText?.text?.trim();
      const authorName = review.authorAttribution?.displayName?.trim();

      // Metni veya yazar atfı olmayan yorum gösterilmez; atıf zorunludur.
      if (!text || !authorName || typeof review.rating !== "number") {
        return null;
      }

      return {
        id: review.name ?? `review-${index}`,
        rating: review.rating,
        text,
        relativeTime: review.relativePublishTimeDescription?.trim() ?? "",
        publishTime: review.publishTime ?? null,
        authorName,
        authorUri: review.authorAttribution?.uri ?? null,
        authorPhotoUri: review.authorAttribution?.photoUri ?? null,
        sourceUri: review.googleMapsUri ?? placeUri,
      };
    })
    .filter((review): review is GoogleReview => review !== null)
    .slice(0, MAX_REVIEWS);

  return {
    displayName: data.displayName?.text ?? null,
    rating: typeof data.rating === "number" ? data.rating : null,
    userRatingCount: typeof data.userRatingCount === "number" ? data.userRatingCount : null,
    placeUri,
    reviewsUri: data.googleMapsLinks?.reviewsUri ?? placeUri,
    writeReviewUri: data.googleMapsLinks?.writeAReviewUri ?? null,
    reviews,
  };
}

/**
 * Anahtar, Place ID veya bağlantı eksikse null döner. Çağıran bölüm bu durumda
 * yedek kartı gösterir, site hata vermez.
 */
export async function getGooglePlaceReviews(): Promise<GooglePlaceReviews | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
  const placeId = process.env.GOOGLE_PLACE_ID?.trim();

  if (!apiKey || !placeId) {
    return null;
  }

  const url = new URL(`${PLACES_ENDPOINT}/${encodeURIComponent(placeId)}`);
  url.searchParams.set("languageCode", "tr");
  url.searchParams.set("regionCode", "TR");

  try {
    const response = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "displayName,rating,userRatingCount,reviews,googleMapsUri,googleMapsLinks",
      },
      next: { revalidate: CACHE_SECONDS },
    });

    if (!response.ok) {
      // Yanıt gövdesi anahtarı içerebileceği için yalnızca durum kodu bildirilir.
      console.warn(`Google Places isteği başarısız oldu (HTTP ${response.status}).`);
      return null;
    }

    const data = (await response.json()) as PlaceDetailsResponse;
    const place = normalize(data);

    return place.reviews.length > 0 || place.rating !== null ? place : null;
  } catch {
    console.warn("Google Places verisi alınamadı.");
    return null;
  }
}
