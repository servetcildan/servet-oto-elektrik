import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Servet Oto Elektrik-Elektronik | Osmancık / Çorum",
  description:
    "Arızayı Okuyor, Çözümü Kodluyoruz. Oto elektrik, ECU onarım, ABS beyin, DPF/EGR/AdBlue, immobilizer ve ECU yazılım hizmetleri.",
  keywords: [
    "oto elektrik",
    "ECU onarım",
    "motor beyni",
    "ABS beyni",
    "DPF EGR AdBlue",
    "immobilizer",
    "ECU yazılım",
    "Osmancık",
    "Çorum",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
