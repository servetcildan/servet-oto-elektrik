export const siteConfig = {
  brand: "SERVET OTO ELEKTRİK-ELEKTRONİK",
  brandShort: "SERVET OTO ELEKTRİK-ELEKTRONİK",
  slogan: "Arızayı Okuyor, Çözümü Kodluyoruz",
  heroSubtitle: "Oto Elektrik • Oto Elektronik • ECU • Beyin • Yazılım",
  location: "Osmancık / Çorum",
  phone: "+905321234567",
  phoneDisplay: "0532 123 45 67",
  whatsapp: "905321234567",
  email: "info@servetotoelectrik.com",
  address: "Osmancık / Çorum",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Osmanc%C4%B1k%2C+%C3%87orum&t=&z=14&ie=UTF8&iwloc=&output=embed",
} as const;

export const navItems = [
  { label: "Ana Sayfa", href: "#ana-sayfa" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Yedek Parça", href: "#yedek-parca" },
  { label: "Beyinler", href: "#beyinler" },
  { label: "ECU Yazılım", href: "#ecu-yazilim" },
  { label: "İletişim", href: "#iletisim" },
] as const;

export const services = [
  {
    title: "Oto Elektrik",
    description:
      "Alternatör, marş, akü, kablo tesisatı ve elektrik arızalarında profesyonel teşhis ve onarım.",
    icon: "zap",
  },
  {
    title: "Oto Elektronik",
    description:
      "Sensör, aktüatör, kontrol modülleri ve elektronik sistem arızalarında uzman çözüm.",
    icon: "chip",
  },
  {
    title: "ECU / Motor Beyni",
    description:
      "Motor kontrol ünitelerinde arıza analizi, onarım, programlama ve test işlemleri.",
    icon: "cpu",
  },
  {
    title: "ABS Beyni",
    description:
      "ABS/ESP modül arızalarında profesyonel teşhis, onarım ve güvenlik testleri.",
    icon: "shield",
  },
  {
    title: "DPF / EGR / AdBlue",
    description:
      "Emisyon sistemleri, partikül filtresi, EGR ve AdBlue yazılım/onarım çözümleri.",
    icon: "filter",
  },
  {
    title: "İmmobilizer",
    description:
      "Anahtar kodlama, immobilizer eşleştirme ve güvenlik sistemi çözümleri.",
    icon: "key",
  },
  {
    title: "ECU Yazılım",
    description:
      "Stage kalibrasyon, emisyon yazılımı, performans optimizasyonu ve özel tuning.",
    icon: "code",
  },
  {
    title: "Şanzıman Adaptasyon",
    description:
      "Otomatik şanzıman öğrenme, adaptasyon ve TCU yazılım/kalibrasyon hizmetleri.",
    icon: "gear",
  },
] as const;

export const brainUnits = [
  {
    name: "Motor ECU",
    description: "Benzin ve dizel motor kontrol üniteleri — arıza tespiti ve onarım.",
    code: "ECU-001",
    gradient: "from-blue-600/20 to-cyan-500/10",
  },
  {
    name: "ABS / ESP Modülü",
    description: "Fren ve stabilite kontrol beyinleri — güvenlik odaklı onarım.",
    code: "ABS-002",
    gradient: "from-blue-500/20 to-indigo-500/10",
  },
  {
    name: "Airbag Modülü",
    description: "Güvenlik sistemi kontrol üniteleri — SRS modül onarımı.",
    code: "SRS-003",
    gradient: "from-sky-500/20 to-blue-600/10",
  },
  {
    name: "Şanzıman TCU",
    description: "Otomatik şanzıman kontrol modülleri — adaptasyon ve yazılım.",
    code: "TCU-004",
    gradient: "from-cyan-500/20 to-blue-500/10",
  },
  {
    name: "Body Control Module",
    description: "Kapı, cam, aydınlatma ve konfor kontrol üniteleri.",
    code: "BCM-005",
    gradient: "from-indigo-500/20 to-blue-600/10",
  },
  {
    name: "İmmobilizer / BSI",
    description: "Anahtar, güvenlik ve erişim kontrol modülleri.",
    code: "BSI-006",
    gradient: "from-blue-600/20 to-sky-500/10",
  },
] as const;

export const ecuSoftwareServices = [
  {
    title: "Stage 1",
    description: "Fabrika güvenliği korunarak performans ve tork artışı.",
    badge: "Performans",
  },
  {
    title: "Stage 2",
    description: "Donanım destekli ileri seviye güç ve tork optimizasyonu.",
    badge: "Premium",
  },
  {
    title: "DPF Yazılım",
    description: "Partikül filtresi sorunlarına yazılım tabanlı çözümler.",
    badge: "Emisyon",
  },
  {
    title: "EGR Yazılım",
    description: "EGR kaynaklı arıza ve performans kayıplarına kalıcı çözüm.",
    badge: "Emisyon",
  },
  {
    title: "AdBlue Yazılım",
    description: "AdBlue/SCR sistem arızalarında profesyonel yazılım desteği.",
    badge: "Emisyon",
  },
  {
    title: "Performans Yazılımı",
    description: "Yakıt ekonomisi, tork eğrisi ve sürüş karakteristiği optimizasyonu.",
    badge: "Tuning",
  },
] as const;

export const sparePartProducts = [
  {
    name: "ECU Modülleri",
    description: "Motor, şanzıman ve gövde kontrol üniteleri.",
    category: "Beyin",
  },
  {
    name: "Sensörler",
    description: "MAP, MAF, lambda, ABS hız ve basınç sensörleri.",
    category: "Elektronik",
  },
  {
    name: "Aktüatörler",
    description: "EGR, turbo, enjektör ve valf kontrol üniteleri.",
    category: "Elektronik",
  },
  {
    name: "Kablo & Konnektör",
    description: "Tesisat, soket ve bağlantı parçaları.",
    category: "Elektrik",
  },
  {
    name: "Alternatör & Marş",
    description: "Şarj ve çalıştırma sistemleri.",
    category: "Elektrik",
  },
  {
    name: "Emisyon Parçaları",
    description: "DPF, EGR, AdBlue ve ilgili bileşenler.",
    category: "Emisyon",
  },
] as const;
