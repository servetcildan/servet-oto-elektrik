import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Google yorumlarındaki yazar profil fotoğrafları bu alan adlarından gelir.
    remotePatterns: [
      { protocol: "https", hostname: "*.googleusercontent.com" },
      { protocol: "https", hostname: "*.ggpht.com" },
    ],
  },
};

export default nextConfig;
