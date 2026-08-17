/**
 * Yalnızca tip tanımları. İstemci bileşenleri bu dosyadan okur; böylece
 * "server-only" işaretli veri modülüne hiçbir istemci dosyası bağımlı olmaz.
 * Burada gizli bilgi veya çalışma zamanı kodu bulunmaz.
 */

export type GoogleReview = {
  id: string;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime: string | null;
  authorName: string;
  authorUri: string | null;
  authorPhotoUri: string | null;
  sourceUri: string | null;
};

export type GooglePlaceReviews = {
  displayName: string | null;
  rating: number | null;
  userRatingCount: number | null;
  /** Profilin Google Haritalar sayfası */
  placeUri: string | null;
  /** Tüm yorumların listelendiği bağlantı */
  reviewsUri: string | null;
  /** Yeni yorum yazma bağlantısı */
  writeReviewUri: string | null;
  reviews: GoogleReview[];
};
