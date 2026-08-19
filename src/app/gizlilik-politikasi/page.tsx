import Link from "next/link";
import PageShell from "@/components/PageShell";
import { siteConfig } from "@/lib/site-data";
import { privacyMetadata } from "@/lib/seo";

export const metadata = privacyMetadata;

export default function GizlilikPolitikasiPage() {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <header>
          <span className="section-label">Bilgilendirme</span>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Gizlilik Politikası / KVKK
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Bu sayfa, {siteConfig.businessName} web sitesini kullanırken kişisel verilerin
            hangi durumlarda işlenebileceğini sade bir dille açıklar. Buradaki metin genel
            bir bilgilendirmedir; hukuki danışmanlık niteliği taşımaz.
          </p>
        </header>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">Veri sorumlusu</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Site, {siteConfig.address} adresindeki {siteConfig.businessName} işletmesi
            tarafından sunulur. İletişim:{" "}
            <a href={`tel:${siteConfig.phone}`} className="text-accent-text hover:underline">
              {siteConfig.phoneDisplay}
            </a>
            .
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">
            Sitede hangi veriler işlenir?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Sitede üyelik, iletişim formu, bülten kaydı veya çevrimiçi ödeme bulunmaz.
            Sizden form üzerinden ad, e-posta veya mesaj toplanmaz.
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted sm:text-base">
            <li>
              Telefon veya WhatsApp bağlantısına tıkladığınızda arama ya da mesajlaşma
              ilgili uygulamanın kendi ortamında yürür.
            </li>
            <li>
              Google Haritalar bağlantısı ve sitedeki harita görünümü Google tarafından
              sunulur; yol tarifi için Google hizmetlerine yönlendirilirsiniz.
            </li>
            <li>
              Ana sayfadaki Google yorumları, Google Places üzerinden işletme profilinden
              okunur. Yorum metinleri, yazar adları ve varsa profil fotoğrafları Google’dan
              gelir; sitemizde ayrıca yorum formu yoktur.
            </li>
            <li>
              Site, barındırma altyapısı (Vercel) nedeniyle teknik erişim kayıtları
              üretebilir (örneğin IP adresi, tarayıcı bilgisi, ziyaret edilen sayfa).
              Bu kayıtlar sitenin çalışması ve güvenlik için kullanılır.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">Çerezler</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Sitede reklam veya analitik amacıyla ayrı bir çerez yönetimi kurulmamıştır.
            Tarayıcınız veya barındırma altyapısı, sitenin çalışması için teknik çerez
            bırakabilir. Üçüncü taraf gömülü içerikler (Google Haritalar, Google yorum
            görselleri) kendi çerez veya benzeri teknolojilerini kullanabilir.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">Üçüncü taraflar</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Telefon uygulaması, WhatsApp, Google Haritalar ve Google yorumları kendi
            gizlilik politikalarına tabidir. Bu hizmetlere geçtiğinizde veri işleme
            ilgili sağlayıcının kurallarına göre devam eder.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">Haklarınız</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki talepleriniz
            için {siteConfig.phoneDisplay} numaralı telefondan veya WhatsApp üzerinden
            bize ulaşabilirsiniz. Talebin konusu, kimlik doğrulama ve yasal süreler
            somut başvuruya göre değerlendirilir.
          </p>
        </section>

        <p className="mt-10 text-center text-sm text-muted">
          <Link href="/" className="transition-colors hover:text-accent-text">
            ← Ana Sayfaya Dön
          </Link>
        </p>
      </article>
    </PageShell>
  );
}
