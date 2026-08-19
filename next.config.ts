import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Google yorumlarındaki yazar profil fotoğrafları bu alan adlarından gelir.
    remotePatterns: [
      { protocol: "https", hostname: "*.googleusercontent.com" },
      { protocol: "https", hostname: "*.ggpht.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/post/osmancik-arac-akusu-seciminde-dogru-adimlar",
        destination: "/aku",
        permanent: true,
      },
      {
        source: "/post/osmancik-oto-elektrik-dogru-aku-secimi-ve-bakim-i-puclari",
        destination: "/aku",
        permanent: true,
      },
      {
        source: "/post/osmancik-aku-rehberi-dogru-karar",
        destination: "/aku",
        permanent: true,
      },
      {
        source: "/post/osmancik-oto-elektrik-aku-kullanimi-ve-avantajlari",
        destination: "/aku",
        permanent: true,
      },
      {
        source: "/post/arac-elektrikleri-hakkinda-sik-yapilan-6-hata",
        destination: "/osmancik-oto-elektrik",
        permanent: true,
      },
      {
        source: "/post/osmancik-aku-rehberi-aku-secimi-ve-bakimi",
        destination: "/aku",
        permanent: true,
      },
      {
        source: "/post/osmancik-aku-tavsiyeleri-aku-seciminde-nelere-dikkat-edilmeli",
        destination: "/aku",
        permanent: true,
      },
      {
        source: "/post/osmancik-arac-akusu-dogru-secim-ve-bakim-rehberi",
        destination: "/aku",
        permanent: true,
      },
      {
        source: "/product-page/doblo-16-sarj-dinamosu",
        destination: "/sarj-dinamosu",
        permanent: true,
      },
      {
        source: "/service-page/sarj-dinamo-tamiri",
        destination: "/sarj-dinamosu",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
