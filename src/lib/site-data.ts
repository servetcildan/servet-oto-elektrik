export const siteConfig = {
  brand: "SERVET OTO ELEKTRİK-ELEKTRONİK",
  brandShort: "SERVET",
  brandSub: "OTO ELEKTRİK-ELEKTRONİK",
  slogan: "Arızayı Okuyor, Çözümü Kodluyoruz",
  location: "Osmancık / Çorum",
  phone: "+905321234567",
  phoneDisplay: "0532 123 45 67",
  whatsapp: "905321234567",
  email: "info@servetotoelectrik.com",
  address: "Osmancık / Çorum",
  workingHours: "Pazartesi – Cumartesi: 08:30 – 19:00",
  workingHoursNote: "Pazar: Kapalı",
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

export const heroTags = [
  "Oto Elektrik",
  "Oto Elektronik",
  "ECU / Motor Beyni",
  "ABS Beyni",
  "DPF / EGR / AdBlue",
  "İmmobilizer",
  "ECU Yazılım",
  "Şanzıman Adaptasyon",
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
    title: "Bilgisayarlı Arıza Tespiti",
    description:
      "OBD ve profesyonel teşhis cihazlarıyla hızlı, doğru ve detaylı arıza analizi.",
    icon: "scan",
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
    title: "İmmobilizer",
    description:
      "Anahtar kodlama, immobilizer eşleştirme ve güvenlik sistemi çözümleri.",
    icon: "key",
  },
  {
    title: "DPF / EGR / AdBlue",
    description:
      "Emisyon sistemleri, partikül filtresi, EGR ve AdBlue yazılım/onarım çözümleri.",
    icon: "filter",
  },
  {
    title: "ECU Yazılım",
    description:
      "ECU okuma/yazma, kalibrasyon ve emisyon sistemlerine yönelik yazılım hizmetleri.",
    icon: "code",
  },
  {
    title: "Şanzıman Adaptasyon",
    description:
      "Otomatik şanzıman öğrenme, adaptasyon ve TCU yazılım/kalibrasyon hizmetleri.",
    icon: "gear",
  },
] as const;

export const sparePartCategories = [
  {
    name: "Akü",
    description: "Araç aküleri ve şarj sistemleri için uygun parça seçenekleri.",
    icon: "battery",
  },
  {
    name: "Sensörler",
    description: "MAP, MAF, lambda, ABS hız ve basınç sensörleri.",
    icon: "chip",
  },
  {
    name: "Elektrik-Elektronik Parçalar",
    description: "Röle, sigorta, modül ve genel elektrik-elektronik bileşenler.",
    icon: "zap",
  },
  {
    name: "Şarj ve Marş Sistemi Parçaları",
    description: "Alternatör, marş motoru ve şarj devresi parçaları.",
    icon: "gear",
  },
  {
    name: "ECU / Elektronik Modüller",
    description: "Motor, şanzıman ve gövde kontrol üniteleri.",
    icon: "cpu",
  },
  {
    name: "Kablo ve Bağlantı Ekipmanları",
    description: "Tesisat, soket, konnektör ve bağlantı parçaları.",
    icon: "box",
  },
] as const;

export const brainUnits = [
  {
    name: "Motor ECU",
    description: "Benzin ve dizel motor kontrol üniteleri — arıza tespiti ve onarım.",
    code: "ECU-001",
  },
  {
    name: "ABS Beyni",
    description: "Fren ve stabilite kontrol modülleri — güvenlik odaklı teşhis ve onarım.",
    code: "ABS-002",
  },
  {
    name: "Airbag Beyni",
    description: "SRS güvenlik sistemi kontrol üniteleri — modül analizi ve onarım.",
    code: "SRS-003",
  },
  {
    name: "Şanzıman Beyni",
    description: "Otomatik şanzıman kontrol modülleri — adaptasyon ve yazılım desteği.",
    code: "TCU-004",
  },
  {
    name: "BCM / BSI",
    description: "Gövde kontrol, kapı, aydınlatma ve erişim güvenlik modülleri.",
    code: "BCM-005",
  },
  {
    name: "Elektronik Kontrol Modülleri",
    description: "Klima, park sensörü, direksiyon ve diğer yardımcı kontrol üniteleri.",
    code: "ECM-006",
  },
] as const;

export const ecuSoftwareServices = [
  {
    title: "Stage 1",
    description: "Fabrika güvenlik sınırları gözetilerek yapılan temel performans kalibrasyonu.",
    badge: "Kalibrasyon",
  },
  {
    title: "Stage 2",
    description: "Donanım uyumluluğu kontrol edilerek uygulanan ileri seviye kalibrasyon.",
    badge: "İleri Seviye",
  },
  {
    title: "DPF Çözümleri",
    description: "Partikül filtresi kaynaklı arıza ve performans sorunlarına yazılım desteği.",
    badge: "Emisyon",
  },
  {
    title: "EGR Çözümleri",
    description: "EGR sisteminden kaynaklanan arıza ve verim kayıplarına yönelik çözümler.",
    badge: "Emisyon",
  },
  {
    title: "AdBlue Çözümleri",
    description: "SCR/AdBlue sistem arızalarında profesyonel yazılım ve teşhis desteği.",
    badge: "Emisyon",
  },
  {
    title: "ECU Okuma / Yazma",
    description: "Orijinal yazılım yedekleme, okuma ve güvenli yazılım uygulama hizmetleri.",
    badge: "Temel",
  },
  {
    title: "İmmobilizer Çözümleri",
    description: "Anahtar eşleştirme ve güvenlik sistemi yazılım işlemleri.",
    badge: "Güvenlik",
  },
  {
    title: "Şanzıman Adaptasyonları",
    description: "TCU öğrenme, adaptasyon ve şanzıman kontrol yazılım işlemleri.",
    badge: "Şanzıman",
  },
] as const;
