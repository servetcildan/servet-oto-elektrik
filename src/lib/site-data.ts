export const siteConfig = {
  businessName: "Servet Oto Elektrik Elektronik",
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
} as const;

export const navItems = [
  { label: "Ana Sayfa", href: "/#ana-sayfa" },
  { label: "Hizmetler", href: "/#hizmetler" },
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "Yedek Parça", href: "/#yedek-parca" },
  { label: "Beyinler", href: "/#beyinler" },
  { label: "ECU Yazılım", href: "/#ecu-yazilim" },
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
    href: "/osmancik-oto-elektrik",
  },
  {
    title: "Oto Elektronik",
    description:
      "Sensör, aktüatör, kontrol modülleri ve elektronik sistem arızalarında uzman çözüm.",
    icon: "chip",
    href: "/osmancik-oto-elektrik",
  },
  {
    title: "Bilgisayarlı Arıza Tespiti",
    description:
      "OBD ve profesyonel teşhis cihazlarıyla hızlı, doğru ve detaylı arıza analizi.",
    icon: "scan",
    href: "/ariza-tespit",
  },
  {
    title: "ECU / Motor Beyni",
    description:
      "Motor kontrol ünitelerinde arıza analizi, onarım, programlama ve test işlemleri.",
    icon: "cpu",
    href: "/ecu-motor-beyni",
  },
  {
    title: "ABS Beyni",
    description:
      "ABS/ESP modül arızalarında profesyonel teşhis, onarım ve güvenlik testleri.",
    icon: "shield",
    href: "/abs-beyni",
  },
  {
    title: "Şarj Dinamosu",
    description:
      "Alternatör arızalarında şarj devresi testi, onarım ve değişim hizmetleri.",
    icon: "gear",
    href: "/osmancik-oto-elektrik",
  },
  {
    title: "Marş Dinamosu",
    description:
      "Marş motoru arızalarında teşhis, onarım ve sistemin birlikte kontrol edilmesi.",
    icon: "gear",
    href: "/osmancik-oto-elektrik",
  },
  {
    title: "Akü Kontrol ve Değişimi",
    description:
      "Akü sağlık testi, değişim ve şarj sistemi kaynaklı deşarj sorunlarının analizi.",
    icon: "battery",
    href: "/aku",
  },
  {
    title: "DPF / Partikül Arızaları",
    description:
      "Partikül filtresi tıkanması ve emisyon sistemlerinde teşhis ve onarım desteği.",
    icon: "filter",
    href: "/dpf-egr",
  },
  {
    title: "EGR Arızaları",
    description:
      "EGR valfi ve emisyon devresi arızalarında profesyonel teşhis ve çözüm.",
    icon: "filter",
    href: "/dpf-egr",
  },
  {
    title: "Immobilizer",
    description:
      "Anahtar kodlama, immobilizer eşleştirme ve güvenlik sistemi çözümleri.",
    icon: "key",
    href: "/immobilizer",
  },
  {
    title: "ECU Yazılım",
    description:
      "ECU okuma/yazma, kalibrasyon ve emisyon sistemlerine yönelik yazılım hizmetleri.",
    icon: "code",
    href: "/ecu-yazilim",
  },
  {
    title: "Şanzıman Adaptasyonları",
    description:
      "Otomatik şanzıman öğrenme, adaptasyon ve TCU yazılım/kalibrasyon hizmetleri.",
    icon: "gear",
    href: "/ecu-yazilim",
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
