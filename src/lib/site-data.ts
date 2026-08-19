export const siteConfig = {
  businessName: "Servet Oto Elektrik Elektronik Osmancık",
  brand: "SERVET OTO ELEKTRİK-ELEKTRONİK",
  brandShort: "SERVET",
  brandSub: "OTO ELEKTRİK-ELEKTRONİK",
  slogan: "Arızayı Okuyor, Çözümü Kodluyoruz",
  location: "Osmancık / Çorum",
  city: "Osmancık",
  district: "Osmancık",
  region: "Çorum",
  country: "TR",
  phone: "+905303994019",
  phoneDisplay: "0530 399 40 19",
  whatsapp: "905303994019",
  address: "Çiftlikler Mahallesi Küçük Sanayi Sitesi B Blok No:8, 19500 Osmancık / Çorum",
  streetAddress: "Çiftlikler Mahallesi Küçük Sanayi Sitesi B Blok No:8",
  postalCode: "19500",
  latitude: 40.969036,
  longitude: 34.876399,
  workingHours: "7/24 Açık",
  workingHoursNote: "Pazartesi – Pazar",
  openingHoursSchema: "Mo-Su 00:00-23:59",
  mapsUrl: "https://maps.app.goo.gl/MF3aMMqmnMkeUGew9",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=40.969036,34.876399&hl=tr&z=16&output=embed",
  instagramUrl: "https://www.instagram.com/servetotoelektrikelektronik/",
  ogImage: "/videos/isletme-tabela.jpg",
} as const;

export const navItems = [
  { label: "Ana Sayfa", href: "/#ana-sayfa" },
  { label: "Hizmetler", href: "/#hizmetler" },
  { label: "Çalışmalarımız", href: "/#calismalar" },
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "Beyinler", href: "/#beyinler" },
  { label: "ECU Yazılım", href: "/#ecu-yazilim" },
  { label: "Yedek Parça", href: "/#yedek-parca" },
  { label: "İletişim", href: "/#iletisim" },
] as const;

export const servicePageLinks = [
  { label: "Osmancık Oto Elektrik", href: "/osmancik-oto-elektrik" },
  { label: "Arıza Tespiti", href: "/ariza-tespit" },
  { label: "ECU / Motor Beyni", href: "/ecu-motor-beyni" },
  { label: "ABS Beyni", href: "/abs-beyni" },
  { label: "Akü Servisi", href: "/aku" },
  { label: "DPF / EGR", href: "/dpf-egr" },
  { label: "Immobilizer", href: "/immobilizer" },
  { label: "ECU Yazılım", href: "/ecu-yazilim" },
] as const;

export const workshopPageLink = {
  label: "Küçük Sanayi Sitesi",
  href: "/osmancik-kucuk-sanayi-sitesi",
} as const;

export const roadsidePageLink = {
  label: "Yol Yardım",
  href: "/osmancik-yol-yardim",
} as const;

export const repairPageLink = {
  label: "Oto Tamir",
  href: "/osmancik-oto-tamir",
} as const;

export const adbluePageLink = {
  label: "AdBlue",
  href: "/adblue",
} as const;

export const starterPageLink = {
  label: "Marş Dinamosu",
  href: "/mars-dinamosu",
} as const;

export const chargingPageLink = {
  label: "Şarj Dinamosu",
  href: "/sarj-dinamosu",
} as const;

export const headerServiceLinks = [
  repairPageLink,
  ...servicePageLinks,
  roadsidePageLink,
  workshopPageLink,
] as const;

export const heroTrustItems = [
  { label: "7/24 Açık", icon: "clock" },
  { label: "Osmancık / Çorum", icon: "pin" },
  { label: "Uzman Arıza Teşhisi", icon: "scan" },
] as const satisfies readonly { label: string; icon: "clock" | "pin" | "scan" }[];

export const trustPoints = [
  {
    title: "Gerçek Atölye Çalışmaları",
    description: "Sitedeki görüntüler kendi tezgâhımızda yapılan işlemlere aittir.",
    icon: "scan",
  },
  {
    title: "Uzman Elektronik Onarım",
    description: "ECU, ABS ve gövde modüllerinde kart seviyesinde onarım deneyimi.",
    icon: "cpu",
  },
  {
    title: "Modern Teşhis ve Yazılım",
    description: "Güncel teşhis cihazları ve orijinal yazılım yedekleme altyapısı.",
    icon: "chip",
  },
  {
    title: "Şeffaf İşlem Süreci",
    description: "Teşhis sonucu, yapılacak işlem ve süre önceden net şekilde paylaşılır.",
    icon: "shield",
  },
] as const;

export const services = [
  {
    title: "Oto Tamir",
    description:
      "Küçük Sanayi Sitesi’ndeki atölyede arıza tespiti sonrası elektrik-elektronik odaklı araç onarımı.",
    icon: "gear",
    href: "/osmancik-oto-tamir",
  },
  {
    title: "Bilgisayarlı Arıza Tespiti",
    description: "Profesyonel teşhis cihazlarıyla hızlı ve doğru sistem analizi.",
    icon: "scan",
    href: "/ariza-tespit",
  },
  {
    title: "ECU / Motor Beyni",
    description: "Motor kontrol ünitesinde arıza analizi, onarım ve programlama.",
    icon: "cpu",
    href: "/ecu-motor-beyni",
  },
  {
    title: "ABS Beyni",
    description: "ABS ve ESP modüllerinde güvenlik odaklı teşhis ve onarım.",
    icon: "shield",
    href: "/abs-beyni",
  },
  {
    title: "EGR – DPF Arıza Çözümleri",
    description: "Partikül filtresi ve EGR devresi arızalarında teşhis ve onarım.",
    icon: "filter",
    href: "/dpf-egr",
  },
  {
    title: "AdBlue / NOx Sistem Çözümleri",
    description: "SCR, AdBlue ve NOx sensörü arızalarında profesyonel teşhis desteği.",
    icon: "droplet",
    href: "/adblue",
  },
  {
    title: "İmmobilizer",
    description: "Anahtar kodlama, transponder eşleştirme ve güvenlik modülü çözümleri.",
    icon: "key",
    href: "/immobilizer",
  },
  {
    title: "Şanzıman Adaptasyonu ve DSG Optimizasyonu",
    description: "Otomatik ve çift kavramalı şanzımanlarda adaptasyon ve kalibrasyon.",
    icon: "gear",
    href: "/ecu-yazilim",
  },
  {
    title: "Marş ve Şarj Dinamosu",
    description: "Marş motoru ve alternatör arızalarında test, onarım ve değişim.",
    icon: "zap",
    href: "/osmancik-oto-elektrik",
  },
  {
    title: "Yol Yardım",
    description:
      "Yolda kalan araçlara elektrik-elektronik arızalar kapsamında yerinde değerlendirme ve destek.",
    icon: "clock",
    href: "/osmancik-yol-yardim",
  },
  {
    title: "Akü Kontrolü ve Değişimi",
    description: "Akü sağlık testi, değişim ve kaçak akım kaynaklı deşarj analizi.",
    icon: "battery",
    href: "/aku",
  },
] as const;

export const faqItems = [
  {
    question: "Aracın aküsü neden sürekli bitiyor?",
    answer:
      "Akünün sık boşalması yaşlanmış akü, zayıf alternatör şarjı, marş sonrası devreye giren bir tüketici veya paralel kaçak akımdan kaynaklanabilir. Önce akü ve şarj sistemi test edilmesi önerilir.",
  },
  {
    question: "Şarj dinamosu arızası nasıl anlaşılır?",
    answer:
      "Akü veya şarj uyarı lambası, sönük farlar ve sık akü bitmesi alternatör arızası belirtisi olabilir. Alternatör çıkış voltajı ölçümü ile durum netleştirilebilir.",
  },
  {
    question: "Marş dinamosu arızası nasıl anlaşılır?",
    answer:
      "Tek tık sesi gelip motor dönmemesi, yavaş ve ağır marş veya gıcırtılı ses marş motoru arızasına işaret edebilir. Akü ve marş sistemi birlikte test edilmelidir.",
  },
  {
    question: "Motor beyni (ECU) arızası nasıl anlaşılır?",
    answer:
      "Araç çalışmama, stop etme, rölanti dalgalanması veya birden fazla sensör hatası ECU sorununa işaret edebilir. Kesin teşhis için teşhis cihazı ile detaylı analiz gerekir.",
  },
  {
    question: "ABS ışığı neden yanar?",
    answer:
      "Tekerlek hız sensörü, modül bağlantısı veya ABS hidrolik ünitesi kaynaklı olabilir. Arıza kodu okunarak sorunun kaynağı belirlenmeye çalışılır.",
  },
  {
    question: "DPF arızası neden oluşur?",
    answer:
      "Kısa mesafe kullanım, düşük egzoz sıcaklığı ve filtre tıkanması rejenerasyonu engelleyebilir. DPF uyarı ışığı ve güç kaybı sık görülen belirtilerdir.",
  },
  {
    question: "EGR arızası nasıl anlaşılır?",
    answer:
      "Rölanti dalgalanması, duman artışı ve motor arıza lambası EGR sorununa işaret edebilir. Teşhis cihazı ile EGR akış verileri incelenir.",
  },
  {
    question: "Arıza tespit cihazı her arızayı gösterir mi?",
    answer:
      "Teşhis cihazı arıza kodlarını ve sistem verilerini gösterir; ancak her kod tek başına kesin teşhis anlamına gelmez. Kod yorumlaması ve fiziksel kontrol birlikte yapılmalıdır.",
  },
  {
    question: "Immobilizer arızasında araç çalışmaz mı?",
    answer:
      "Evet, immobilizer devredeyken araç marş alsa bile yakıt veya ateşleme kesilebilir. Anahtar, transponder ve güvenlik modülü birlikte kontrol edilir.",
  },
  {
    question: "Araçta akü lambası neden yanar?",
    answer:
      "Genellikle şarj sistemindeki bir soruna işaret eder. Alternatör, kayış, regülatör veya akü bağlantıları kontrol edilmelidir.",
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
    href: "/ecu-motor-beyni",
  },
  {
    name: "ABS Beyni",
    description: "Fren ve stabilite kontrol modülleri — güvenlik odaklı teşhis ve onarım.",
    code: "ABS-002",
    href: "/abs-beyni",
  },
  {
    name: "Airbag Beyni",
    description: "SRS güvenlik sistemi kontrol üniteleri — modül analizi ve onarım.",
    code: "SRS-003",
    href: "/ariza-tespit",
  },
  {
    name: "Şanzıman Beyni",
    description: "Otomatik şanzıman kontrol modülleri — adaptasyon ve yazılım desteği.",
    code: "TCU-004",
    href: "/ecu-yazilim",
  },
  {
    name: "BCM / BSI",
    description: "Gövde kontrol, kapı, aydınlatma ve erişim güvenlik modülleri.",
    code: "BCM-005",
    href: "/immobilizer",
  },
  {
    name: "Elektronik Kontrol Modülleri",
    description: "Klima, park sensörü, direksiyon ve diğer yardımcı kontrol üniteleri.",
    code: "ECM-006",
    href: "/osmancik-oto-elektrik",
  },
] as const;

export const ecuSoftwareServices = [
  {
    title: "Stage 1",
    description: "Fabrika güvenlik sınırları gözetilerek yapılan temel performans kalibrasyonu.",
    badge: "Kalibrasyon",
    href: "/ecu-yazilim",
  },
  {
    title: "Stage 2",
    description: "Donanım uyumluluğu kontrol edilerek uygulanan ileri seviye kalibrasyon.",
    badge: "İleri Seviye",
    href: "/ecu-yazilim",
  },
  {
    title: "DPF Çözümleri",
    description: "Partikül filtresi kaynaklı arıza ve performans sorunlarına yazılım desteği.",
    badge: "Emisyon",
    href: "/dpf-egr",
  },
  {
    title: "EGR Çözümleri",
    description: "EGR sisteminden kaynaklanan arıza ve verim kayıplarına yönelik çözümler.",
    badge: "Emisyon",
    href: "/dpf-egr",
  },
  {
    title: "AdBlue Çözümleri",
    description: "SCR/AdBlue sistem arızalarında profesyonel yazılım ve teşhis desteği.",
    badge: "Emisyon",
    href: "/adblue",
  },
  {
    title: "ECU Okuma / Yazma",
    description: "Orijinal yazılım yedekleme, okuma ve güvenli yazılım uygulama hizmetleri.",
    badge: "Temel",
    href: "/ecu-yazilim",
  },
  {
    title: "İmmobilizer Çözümleri",
    description: "Anahtar eşleştirme ve güvenlik sistemi yazılım işlemleri.",
    badge: "Güvenlik",
    href: "/immobilizer",
  },
  {
    title: "Şanzıman Adaptasyonları",
    description: "TCU öğrenme, adaptasyon ve şanzıman kontrol yazılım işlemleri.",
    badge: "Şanzıman",
    href: "/ecu-yazilim",
  },
] as const;
