export type ServiceSlug =
  | "osmancik-oto-elektrik"
  | "ariza-tespit"
  | "ecu-motor-beyni"
  | "abs-beyni"
  | "aku"
  | "dpf-egr"
  | "immobilizer"
  | "ecu-yazilim";

export type ServicePageData = {
  slug: ServiceSlug;
  breadcrumbTitle: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
    list?: string[];
  }[];
  symptoms: string[];
  whenToVisit: string[];
  procedures: string[];
  relatedSlugs: ServiceSlug[];
};

export const servicePageSlugs: ServiceSlug[] = [
  "osmancik-oto-elektrik",
  "ariza-tespit",
  "ecu-motor-beyni",
  "abs-beyni",
  "aku",
  "dpf-egr",
  "immobilizer",
  "ecu-yazilim",
];

export const servicePages: Record<ServiceSlug, ServicePageData> = {
  "osmancik-oto-elektrik": {
    slug: "osmancik-oto-elektrik",
    breadcrumbTitle: "Osmancık Oto Elektrik",
    metaTitle: "Osmancık Oto Elektrik | Servet Oto Elektrik Elektronik",
    metaDescription:
      "Osmancık oto elektrikçi. Marş dinamosu, şarj dinamosu, akü ve elektrik tesisatı arızalarında teşhis ve onarım. Küçük Sanayi Sitesi, Osmancık.",
    h1: "Osmancık Oto Elektrik Servisi",
    intro:
      "Osmancık’ta oto elektrikçi olarak şarj dinamosu, marş dinamosu, akü ve tesisat kaynaklı arızalarda teşhis ve onarım yapıyoruz. Atölyemiz Küçük Sanayi Sitesi’ndedir; işlemler aracın elektrik sistemine göre planlanır.",
    sections: [
      {
        heading: "Oto Elektrikçi Hizmeti",
        paragraphs: [
          "Osmancık oto elektrikçi ihtiyacında aracın elektrik devresini adım adım kontrol ediyoruz. Sigorta, röle, kablo tesisatı ve gösterge uyarıları birlikte değerlendirilir. Amaç, belirtinin kaynağını tahminle değil ölçümle netleştirmektir.",
        ],
      },
      {
        heading: "Marş Dinamosu",
        paragraphs: [
          "Marş dinamosu arızasında araç zor çalışır, tık sesi gelir veya motor hiç dönmez. Akü sağlığı ile marş motoru birlikte bakılır; ayrıntılı belirtiler ve test ayrımı marş dinamosu sayfasındadır.",
        ],
      },
      {
        heading: "Şarj Dinamosu",
        paragraphs: [
          "Şarj dinamosu zayıf kaldığında akü sık boşalır veya şarj uyarı lambası yanabilir. Voltaj ve kayış kontrolünün ayrıntısı şarj dinamosu sayfasındadır; bu sayfa oto elektrik çatısını özetler.",
        ],
      },
      {
        heading: "Oto Elektronik Destek",
        paragraphs: [
          "Sensör, aktüatör ve kontrol modüllerinde elektronik arıza tespiti yapıyoruz. CAN-BUS iletişim hattı, bağlantı noktaları ve modül uyumluluğu değerlendirilerek sorunun kaynağı belirlenmeye çalışılır.",
        ],
      },
      {
        heading: "Yolda kalan araçlar",
        paragraphs: [
          "Araç çalışmıyor, marş almıyor veya elektrik arızası yüzünden yolda kaldıysa yerinde değerlendirme yapılabilir. Her arıza yol kenarında çözülmez; gerekirse atölyeye alınması gerekir.",
        ],
      },
    ],
    symptoms: [
      "Akü ışığı veya şarj uyarı lambasının yanması",
      "Araç marş almıyor veya zor çalışıyor",
      "Farlar ve iç aydınlatmada zayıflama",
      "Sigorta veya röle kaynaklı devre kesintileri",
      "Kontak açıkken anormal elektrik tüketimi",
    ],
    whenToVisit: [
      "Akünüz sık sık bitiyorsa ve şarj dinamosu şüphesi varsa",
      "Marş alırken tık sesi geliyor ancak motor dönmüyorsa",
      "Elektrik aksamlarında koku, duman veya ısınma fark ederseniz",
      "Gösterge panelinde birden fazla elektrik uyarısı yanıyorsa",
    ],
    procedures: [
      "Görsel ve elektriksel ön kontrol",
      "Akü, alternatör ve marş sistemi testleri",
      "Kablo tesisatı ve bağlantı noktası incelemesi",
      "Gerekli parça değişimi veya onarım önerisi",
      "Onarım sonrası sistem doğrulama testi",
    ],
    relatedSlugs: ["ariza-tespit", "aku", "ecu-motor-beyni"],
  },

  "ariza-tespit": {
    slug: "ariza-tespit",
    breadcrumbTitle: "Arıza Tespiti",
    metaTitle: "Osmancık Bilgisayarlı Arıza Tespiti | Servet Oto Elektrik",
    metaDescription:
      "Osmancık oto arıza tespit servisi. OBD ve profesyonel teşhis cihazlarıyla motor, ECU, ABS ve elektronik sistem arızalarının analizi.",
    h1: "Osmancık Bilgisayarlı Arıza Tespiti",
    intro:
      "Modern arıza tespit ekipmanlarıyla aracınızın elektronik sistemlerinden okunan veriler analiz edilir. Teşhis süreci, onarım kararı vermeden önce sorunun kaynağını anlamaya yöneliktir.",
    sections: [
      {
        heading: "Arıza Tespiti Nasıl Yapılır?",
        paragraphs: [
          "OBD bağlantı noktası üzerinden veya marka/model uyumlu teşhis cihazlarıyla arıza kodları okunur. Canlı veri akışı, sensör değerleri ve sistem durumları birlikte değerlendirilir.",
        ],
      },
      {
        heading: "Hangi Sistemler Test Edilir?",
        paragraphs: [
          "Motor yönetim, emisyon, ABS, airbag, immobilizer ve şanzıman kontrol üniteleri gibi farklı modüller teşhis kapsamına alınabilir. Her arıza kodu tek başına kesin teşhis anlamına gelmez; kod yorumlaması deneyim gerektirir.",
        ],
        list: [
          "Motor ve emisyon sistemleri",
          "ABS / ESP modülleri",
          "ECU ve yardımcı kontrol üniteleri",
          "Elektrik devresi ve sensör hatları",
        ],
      },
      {
        heading: "Teşhis sonrası onarım",
        paragraphs: [
          "Arıza tespiti, hangi sistemin bakılacağını gösterir; onarım ayrı bir adımdır. Elektrik-elektronik kaynaklı ve atölyenin gerçekten yaptığı işler, aynı adresteki oto tamir kapsamında planlanır. Teşhis raporu tek başına tamir vaadi değildir.",
        ],
      },
      {
        heading: "Yolda elektronik uyarı",
        paragraphs: [
          "Arıza lambası yanarak yolda kalan araçlarda, uygun koşullarda yerinde ön kontrol yapılabilir. Kesin teşhis ve onarım çoğu zaman atölye ekipmanı gerektirir.",
        ],
      },
    ],
    symptoms: [
      "Motor arıza lambasının (MIL) yanması",
      "ABS veya ESP uyarı ışıkları",
      "Performans düşüşü veya anormal çalışma",
      "Yakıt tüketiminde artış",
      "Araç teşhis cihazında hata kodu görülmesi",
    ],
    whenToVisit: [
      "Gösterge panelinde uyarı ışığı yanıyorsa",
      "Araç anormal ses, titreme veya güç kaybı yaşıyorsa",
      "Başka serviste teşhis yapıldı ancak sorun devam ediyorsa",
      "Satın alma öncesi ikinci el araç kontrolü gerekiyorsa",
    ],
    procedures: [
      "Arıza kodu okuma ve silme (uygun durumlarda)",
      "Canlı veri analizi",
      "Sensör ve devre kontrolü",
      "Teşhis raporu ve onarım yönlendirmesi",
    ],
    relatedSlugs: ["ecu-motor-beyni", "abs-beyni", "dpf-egr", "osmancik-oto-elektrik"],
  },

  "ecu-motor-beyni": {
    slug: "ecu-motor-beyni",
    breadcrumbTitle: "ECU / Motor Beyni",
    metaTitle: "Osmancık ECU ve Motor Beyni Tamiri | Servet Oto Elektrik Elektronik",
    metaDescription:
      "Osmancık’ta ECU, motor beyni ve araç beyni tamiri. Motor kontrol ünitesinde arıza tespiti, onarım ve programlama.",
    h1: "Osmancık ECU / Motor Beyni Servisi",
    intro:
      "Motor beyni (ECU), yakıt, ateşleme ve emisyon sistemlerini yöneten ana elektronik kontroldür. Osmancık’ta araç beyni tamiri; teşhis, kart incelemesi ve uygun onarım yöntemiyle planlanır. Bu iş halk arasında “beyinci” olarak da anılır.",
    sections: [
      {
        heading: "Araç Beyni Tamiri",
        paragraphs: [
          "Araç beyni tamiri, motor beyni ve bağlı kontrol ünitelerinde iletişim, voltaj ve kart hasarının birlikte değerlendirilmesini kapsar. Su girişi, voltaj dalgalanması veya oksitlenme sık karşılaşılan nedenlerdendir. Belirtiler marka ve modele göre değişebilir.",
        ],
      },
      {
        heading: "ECU Arızalarında Sık Karşılaşılan Durumlar",
        paragraphs: [
          "Motor beyni arızasında araç çalışmayabilir, stop edebilir veya birden fazla sensör hatası görülebilir. Kesin sonuç için teşhis cihazı ve fiziksel kontrol birlikte kullanılır.",
        ],
      },
      {
        heading: "Yapılan İşlemler",
        paragraphs: [
          "ECU sökme-takma öncesinde orijinal yazılım yedekleme yapılması önemlidir. Onarım, test ve programlama süreçleri aracın sistemine uygun şekilde planlanır.",
        ],
        list: [
          "ECU arıza analizi ve devre kontrolü",
          "Yazılım okuma ve yedekleme",
          "Onarım veya modül değişim değerlendirmesi",
          "Montaj sonrası sistem testi",
        ],
      },
    ],
    symptoms: [
      "Araç çalışmıyor veya stop ediyor",
      "Motor arıza lambası sürekli yanık",
      "Rölanti dalgalanması veya güç kaybı",
      "Birden fazla sensör hatası aynı anda görülmesi",
      "ECU su alması veya fiziksel hasar şüphesi",
    ],
    whenToVisit: [
      "Motor beyni arızası teşhisi konulduysa",
      "ECU değişimi veya programlama gerekiyorsa",
      "Araç elektronik sisteminde tekrarlayan arızalar varsa",
    ],
    procedures: [
      "Teşhis cihazı ile ECU iletişim testi",
      "Devre kartı ve konnektör incelemesi",
      "Yazılım yedekleme ve gerekli programlama",
      "Montaj ve fonksiyon doğrulama",
    ],
    relatedSlugs: ["ariza-tespit", "immobilizer", "ecu-yazilim", "osmancik-oto-elektrik"],
  },

  "abs-beyni": {
    slug: "abs-beyni",
    breadcrumbTitle: "ABS Beyni",
    metaTitle: "Osmancık ABS Beyni Onarımı | Servet Oto Elektrik",
    metaDescription:
      "Osmancık ABS ve ESP modül arızalarında teşhis, onarım ve test. Fren güvenlik sistemlerinde profesyonel elektronik servis.",
    h1: "Osmancık ABS Beyni Servisi",
    intro:
      "ABS ve ESP modülleri fren güvenliğinin kritik parçalarıdır. Modül arızalarında uyarı ışıkları, sensör hataları veya hidrolik ünite sorunları birlikte değerlendirilir.",
    sections: [
      {
        heading: "ABS Modül Arızaları",
        paragraphs: [
          "Tekerlek hız sensörleri, modül iç devresi veya bağlantı sorunları ABS ışığının yanmasına neden olabilir. Teşhis sırasında tüm fren sistemi bileşenleri göz önünde bulundurulur.",
        ],
      },
      {
        heading: "Güvenlik Odaklı Yaklaşım",
        paragraphs: [
          "Fren sistemi arızalarında sürüş güvenliği önceliklidir. Onarım veya modül değişimi sonrasında sistem testleri yapılması önerilir.",
        ],
      },
    ],
    symptoms: [
      "ABS veya ESP uyarı lambasının yanması",
      "Fren pedalında anormal his veya sertlik",
      "Tekerlek hız sensörü arıza kodları",
      "Fren sistemi anormal sesler çıkarıyorsa",
    ],
    whenToVisit: [
      "ABS ışığı yanıyorsa veya araç teşhiste ABS hatası görülüyorsa",
      "Fren sistemiyle ilgili elektronik uyarı alıyorsanız",
      "Kaza sonrası ABS modülü şüphesi varsa",
    ],
    procedures: [
      "Arıza kodu okuma ve sensör testleri",
      "Modül ve bağlantı noktası kontrolü",
      "Onarım veya değişim değerlendirmesi",
      "Sistem fonksiyon testi",
    ],
    relatedSlugs: ["ariza-tespit", "ecu-motor-beyni"],
  },

  aku: {
    slug: "aku",
    breadcrumbTitle: "Akü Servisi",
    metaTitle: "Osmancık Akü Kontrol ve Değişimi | Servet Oto Elektrik",
    metaDescription:
      "Osmancık akü kontrol, değişim ve şarj sistemi testi. Akü bitmesi, şarj dinamosu ve marş sistemi arızalarında profesyonel servis.",
    h1: "Osmancık Akü Kontrol ve Değişimi",
    intro:
      "Akü sorunları yalnızca akünün kendisinden kaynaklanmayabilir. Şarj dinamosu, marş motoru veya paralel kaçak akım gibi faktörler de değerlendirilir.",
    sections: [
      {
        heading: "Akü Neden Sık Biter?",
        paragraphs: [
          "Yaşlanmış akü, zayıf alternatör şarjı, kısa devre veya araçta kapalıyken devreye giren bir tüketici akünün hızla boşalmasına neden olabilir.",
        ],
      },
      {
        heading: "Akü Lambası Neden Yanar?",
        paragraphs: [
          "Gösterge panelindeki akü veya şarj uyarı ışığı genellikle şarj sistemindeki bir soruna işaret eder. Alternatör kayışı, regülatör veya akü bağlantıları kontrol edilmelidir.",
        ],
      },
      {
        heading: "Yolda akü bitmesi",
        paragraphs: [
          "Akü yolda biterse araç çalışmayabilir. Elektrik-elektronik kapsamında yerinde bakılabilir; her durumda yol kenarında tam çözüm mümkün olmayabilir.",
        ],
      },
    ],
    symptoms: [
      "Araç sabahları marş almıyor",
      "Akü veya şarj uyarı lambası yanıyor",
      "Farlar sönük yanıyor",
      "Akü klemenslerinde oksitlenme",
      "Yeni akü kısa sürede tekrar bitiyor",
    ],
    whenToVisit: [
      "Akünüz 3–5 yıllık ve performans düşüşü yaşıyorsa",
      "Sık sık takviye ile çalıştırma gerekiyorsa",
      "Şarj dinamosu arızası şüphesi varsa",
    ],
    procedures: [
      "Akü voltaj ve yük testi (CAC)",
      "Alternatör şarj testi",
      "Paralel kaçak akım ölçümü",
      "Uygun akü seçimi ve montaj",
    ],
    relatedSlugs: ["osmancik-oto-elektrik", "ariza-tespit"],
  },

  "dpf-egr": {
    slug: "dpf-egr",
    breadcrumbTitle: "DPF / EGR",
    metaTitle: "Osmancık DPF ve EGR Arıza Tespiti | Servet Oto Elektrik Elektronik",
    metaDescription:
      "Osmancık’ta DPF arıza tespiti, EGR arıza tespiti ve partikül temizleme değerlendirmesi. Emisyon sisteminde teşhis ve onarım; iptal veya silme vaadi yoktur.",
    h1: "Osmancık DPF / EGR Arıza Tespiti",
    intro:
      "Dizel araçlarda DPF (partikül filtresi) ve EGR (egzoz gazı devridaim) emisyon kontrolünün parçasıdır. Osmancık atölyemizde DPF arıza tespiti ve EGR arıza tespiti ile sorunun kaynağı okunur; partikül temizleme veya onarım, ölçüme göre değerlendirilir.",
    sections: [
      {
        heading: "DPF Arıza Tespiti",
        paragraphs: [
          "DPF arıza tespiti, uyarı lambası, güç kaybı ve basınç farkı verilerinin birlikte okunmasını kapsar. Kısa mesafe kullanım veya düşük egzoz sıcaklığı rejenerasyonu zorlaştırabilir. Teşhis, filtreyi körlemesine sökmeden önce sistem durumunu anlamaya yöneliktir.",
        ],
      },
      {
        heading: "Partikül Temizleme",
        paragraphs: [
          "Partikül temizleme, tıkanan veya rejenerasyonu tamamlanamayan DPF için değerlendirilen bir onarım yoludur. Uygunluk; arıza kodu, basınç verisi ve filtrenin fiziksel durumuna bağlıdır. Bu sayfa DPF veya EGR iptali, yazılımla sistem silme ya da emisyon cihazını etkisizleştirme vaadi içermez.",
        ],
      },
      {
        heading: "EGR Arıza Tespiti",
        paragraphs: [
          "EGR arıza tespiti, valf akışı, pozisyon verisi ve motor arıza kodlarının incelenmesiyle yapılır. Tıkanma veya valf arızası rölanti dalgalanması, duman artışı ve güç kaybı olarak görülebilir. Çözüm, ölçülen arızaya göre temizlik, onarım veya parça değişimi olabilir.",
        ],
      },
      {
        heading: "AdBlue / SCR kontrolü",
        paragraphs: [
          "AdBlue uyarıları, NOx sensörü ve SCR hattı DPF/EGR ile aynı emisyon zincirindedir. AdBlue arıza tespiti ayrı sayfada anlatılır. Bu sayfa AdBlue iptali veya emisyon sistemini devre dışı bırakma vaadi içermez.",
        ],
      },
    ],
    symptoms: [
      "DPF veya motor uyarı lambası",
      "Güç kaybı veya anormal egzoz dumanı",
      "Yakıt tüketiminde artış",
      "Rejenerasyon hatası kodları",
      "EGR akış veya pozisyon hataları",
    ],
    whenToVisit: [
      "DPF uyarı ışığı yanıyorsa",
      "EGR arıza kodu okunduysa",
      "Emisyon sisteminden kaynaklı performans sorunu yaşıyorsanız",
    ],
    procedures: [
      "Arıza kodu ve canlı veri analizi",
      "DPF basınç farkı ve EGR valf kontrolü",
      "Uygun görülen durumlarda partikül temizleme veya onarım",
      "Sistem test sürüşü",
    ],
    relatedSlugs: ["ariza-tespit", "ecu-yazilim", "ecu-motor-beyni"],
  },

  immobilizer: {
    slug: "immobilizer",
    breadcrumbTitle: "Immobilizer",
    metaTitle: "Osmancık Immobilizer Servisi | Servet Oto Elektrik",
    metaDescription:
      "Osmancık immobilizer arıza tespiti, anahtar kodlama ve güvenlik sistemi çözümleri. Araç çalışmama sorunlarında profesyonel servis.",
    h1: "Osmancık Immobilizer Servisi",
    intro:
      "Immobilizer sistemi aracın yetkisiz çalıştırılmasını engeller. Anahtar, transponder, ECU ve BSI/BCM modülleri arasındaki iletişim bozulduğunda araç marş alabilir ancak çalışmayabilir.",
    sections: [
      {
        heading: "Immobilizer Arızasında Araç Çalışmaz mı?",
        paragraphs: [
          "Evet, immobilizer devreye girdiğinde araç marş alsa bile yakıt veya ateşleme sistemi devre dışı kalabilir. Gösterge panelinde immobilizer veya anahtar simgesi yanabilir.",
        ],
      },
      {
        heading: "Anahtar Kodlama",
        paragraphs: [
          "Yedek anahtar yapımı, anahtar kaybı veya ECU değişimi sonrasında immobilizer eşleştirmesi gerekebilir. İşlem aracın marka ve sistemine göre planlanır.",
        ],
      },
    ],
    symptoms: [
      "Araç marş alıyor ama çalışmıyor",
      "Anahtar veya immobilizer uyarı simgesi",
      "Yedek anahtar çalışmıyor",
      "ECU veya BSI değişimi sonrası çalışmama",
    ],
    whenToVisit: [
      "Araç kontak açıkken immobilizer ışığı yanıyorsa",
      "Anahtar değişimi veya kaybı sonrası eşleştirme gerekiyorsa",
      "Güvenlik modülü arıza kodu okunduysa",
    ],
    procedures: [
      "Immobilizer durum okuma",
      "Anahtar ve transponder testi",
      "Modül eşleştirme ve kodlama",
      "Sistem fonksiyon doğrulama",
    ],
    relatedSlugs: ["ecu-motor-beyni", "ariza-tespit", "ecu-yazilim"],
  },

  "ecu-yazilim": {
    slug: "ecu-yazilim",
    breadcrumbTitle: "ECU Yazılım",
    metaTitle: "Osmancık ECU Yazılım Servisi | Servet Oto Elektrik",
    metaDescription:
      "Osmancık ECU okuma, yazma, kalibrasyon ve şanzıman adaptasyon hizmetleri. Emisyon ve performans yazılımlarında profesyonel servis.",
    h1: "Osmancık ECU Yazılım Servisi",
    intro:
      "ECU yazılım işlemleri aracın mevcut durumuna ve sistem gereksinimlerine göre planlanır. Her işlem öncesinde orijinal yazılım yedeklemesi yapılması standart uygulamamızdır.",
    sections: [
      {
        heading: "ECU Okuma / Yazma",
        paragraphs: [
          "Orijinal yazılım yedekleme, okuma ve güvenli yazılım uygulama işlemleri marka/model uyumlu ekipmanlarla gerçekleştirilir.",
        ],
      },
      {
        heading: "Emisyon Yazılımları",
        paragraphs: [
          "DPF, EGR ve AdBlue sistemlerine yönelik yazılım desteği, teşhis sonrasında uygun görülen durumlarda değerlendirilir. Her araç için aynı çözüm geçerli olmayabilir.",
        ],
      },
      {
        heading: "Şanzıman Adaptasyonları",
        paragraphs: [
          "Otomatik şanzıman kontrol ünitelerinde adaptasyon, öğrenme ve kalibrasyon işlemleri TCU yazılımı üzerinden yapılabilir.",
        ],
        list: [
          "Stage 1 / Stage 2 kalibrasyon değerlendirmesi",
          "DPF / EGR / AdBlue yazılım desteği",
          "TCU adaptasyon ve öğrenme",
          "Immobilizer yazılım işlemleri",
        ],
      },
    ],
    symptoms: [
      "ECU değişimi sonrası yazılım uyumsuzluğu",
      "Emisyon sistemi arıza kodları",
      "Şanzıman vites geçiş sorunları",
      "Performans kalibrasyonu talebi",
    ],
    whenToVisit: [
      "ECU yazılım güncellemesi veya yedekleme gerekiyorsa",
      "Emisyon sistemi yazılım desteği değerlendirilmek isteniyorsa",
      "Şanzıman adaptasyonu yapılması gerekiyorsa",
    ],
    procedures: [
      "Mevcut yazılım okuma ve yedekleme",
      "Araç ve sistem uyumluluk kontrolü",
      "Yazılım uygulama veya kalibrasyon",
      "Test sürüşü ve veri doğrulama",
    ],
    relatedSlugs: ["ecu-motor-beyni", "dpf-egr", "immobilizer"],
  },
};

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages[slug as ServiceSlug];
}

export function getServiceFaqs(page: ServicePageData) {
  const symptoms = page.symptoms.slice(0, 4).join("; ");

  return [
    {
      question: `${page.breadcrumbTitle} kapsamında neler yapılır?`,
      answer: page.intro,
    },
    {
      question: "Hangi belirtilerde bu servise başvurulur?",
      answer: `${symptoms}.`,
    },
    {
      question: "Serviste hangi işlemler uygulanır?",
      answer: page.procedures.join(" "),
    },
  ];
}
