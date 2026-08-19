import { siteConfig } from "./site-data";

export type TopicFaq = {
  question: string;
  answer: string;
};

export type TopicPageData = {
  path: string;
  breadcrumbLabel: string;
  h1: string;
  intro: string;
  whatsappText: string;
  serviceName: string;
  serviceType: string;
  serviceDescription: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  relatedLinks: { label: string; href: string }[];
  faqs: TopicFaq[];
};

export const repairTopic: TopicPageData = {
  path: "/osmancik-oto-tamir",
  breadcrumbLabel: "Oto Tamir",
  h1: "Osmancık Oto Tamir",
  intro: `${siteConfig.businessName}, Osmancık Küçük Sanayi Sitesi’ndeki fiziksel atölyesinde oto tamir hizmeti de verir. Araç tamiri burada genel bir mekanik servis vaadi değil; arıza tespitinden sonra elektrik-elektronik sistemlere bağlı, atölyenin gerçekten yaptığı onarım işleridir.`,
  whatsappText: "Merhaba, Osmancık’ta oto tamir için bilgi almak istiyorum.",
  serviceName: "Osmancık Oto Tamir",
  serviceType: "Oto Tamir",
  serviceDescription:
    "Osmancık Küçük Sanayi Sitesi’nde oto tamir, elektrik-elektronik arıza tespiti ve buna bağlı araç onarım hizmeti. Kapsam, atölyenin gerçek işleridir; her mekanik işlem iddia edilmez.",
  sections: [
    {
      heading: "Osmancık’ta oto tamir nasıl ilerler?",
      paragraphs: [
        "Osmancık oto tamir talebi geldiğinde önce belirtinin kaynağı okunur. Gösterge uyarısı, çalışmama, marş almama veya emisyon lambası gibi şikâyetler; ölçüm ve kontrol olmadan parça değişimine bağlanmaz. Oto tamirci olarak işin ilk adımı, aracın elektrik-elektronik tarafını netleştirmektir.",
        "Atölye Osmancık oto sanayi içindeki Küçük Sanayi Sitesi’ndedir. Servise gelen araçta arıza tespit, ardından uygun görülen onarım aynı adreste planlanır. Her şikâyet aynı işlemle bitmez; sonuç, ölçülen duruma göre konuşulur.",
      ],
    },
    {
      heading: "Arıza tespiti sonrası onarım",
      paragraphs: [
        "Bilgisayarlı arıza tespiti, oto tamirhanesinde körlemesine iş yapılmasını azaltır. Kod ve canlı veri, fiziksel kontrol ile birlikte yorumlanır. Teşhis, onarımın yerini tutmaz; hangi sistemin bakılacağını gösterir.",
        "Onarım kararı çıktığında elektrik tesisatı, akü, marş ve şarj sistemi, ECU / araç beyni, ABS veya DPF / EGR / AdBlue gibi mevcut hizmet hatlarına bağlanır. Bu listenin dışında kalan her mekanik iş otomatik olarak yapılmış sayılmaz.",
      ],
    },
    {
      heading: "Hangi işler bu atölyenin kapsamındadır?",
      paragraphs: [
        "Kapsam; oto elektrik ve elektronik arızalar, akü, marş/şarj, kontrol üniteleri ve emisyon sistemine bağlı teşhis-onarım ile bunlara uygun genel araç onarım işlemleridir. Osmancık oto tamirhanesi ifadesi, bu gerçek işlerin atölyede yapıldığını anlatır; kaporta, motor revizyonu veya her mekanik kalemin tek elden bittiği bir genel tamirhane iddiası değildir.",
        "Şüpheli bir iş atölyenin tezgâhına veya teşhis ekipmanına uymuyorsa bu sitede vaat edilmez. Netleştirmek için telefon veya WhatsApp yeterlidir.",
      ],
    },
    {
      heading: "Yolda kalan araçlar",
      paragraphs: [
        "Servise gelemeyen araçlarda elektrik-elektronik kaynaklı durumlar yerinde değerlendirilebilir. Yol yardım, oto tamirin sahadaki uzantısıdır; her arıza yol kenarında bitmez. Tezgâh, yazılım veya kart tamiri gerektiren işler atölyede sürer.",
      ],
    },
  ],
  relatedLinks: [
    { label: "Ana sayfa", href: "/" },
    { label: "Küçük Sanayi Sitesi", href: "/osmancik-kucuk-sanayi-sitesi" },
    { label: "Oto elektrik servisi", href: "/osmancik-oto-elektrik" },
    { label: "Arıza tespiti", href: "/ariza-tespit" },
    { label: "Akü kontrolü", href: "/aku" },
    { label: "ECU / motor beyni", href: "/ecu-motor-beyni" },
    { label: "ABS beyni", href: "/abs-beyni" },
    { label: "DPF / EGR", href: "/dpf-egr" },
    { label: "AdBlue arıza tespiti", href: "/adblue" },
    { label: "Marş dinamosu", href: "/mars-dinamosu" },
    { label: "Şarj dinamosu", href: "/sarj-dinamosu" },
    { label: "Yol yardım", href: "/osmancik-yol-yardim" },
  ],
  faqs: [
    {
      question: "Osmancık'ta oto tamir hizmeti veriyor musunuz?",
      answer: `Evet. ${siteConfig.businessName}, Küçük Sanayi Sitesi’ndeki atölyesinde oto tamir de yapar. Kapsam elektrik-elektronik arıza tespiti ve buna bağlı uygun onarımdır; her mekanik iş bu atölyede bitmez.`,
    },
    {
      question: "Arıza tespiti sonrası tamir işlemi yapılıyor mu?",
      answer:
        "Evet. Önce teşhis okunur; onarım, ölçülen arızanın atölyenin gerçek işine uyduğu durumlarda planlanır. Teşhis tek başına tamir anlamına gelmez.",
    },
    {
      question: "Oto elektrik ve elektronik arızaları da tamir ediliyor mu?",
      answer:
        "Evet. Oto elektrik, elektronik, akü, marş/şarj, ECU, ABS ve emisyon sistemine bağlı arızalar asıl uzmanlık alanıdır. Oto tamir bu işlerin atölyedeki onarım tarafını da kapsar.",
    },
    {
      question: "Aracımı servise getirmeden önce aramam gerekir mi?",
      answer: `Belirtileri ${siteConfig.phoneDisplay} veya WhatsApp üzerinden paylaşmanız işi netleştirir. Zorunlu bir randevu sistemi bu sitede vaat edilmez; uygunluk telefonda konuşulur.`,
    },
    {
      question: "Yolda kalan araçlar için yol yardım hizmetiniz var mı?",
      answer:
        "Evet. Elektrik-elektronik kaynaklı durumlarda yerinde değerlendirme yapılabilir. Her arıza yol kenarında çözülmez; gerekirse araç atölyeye alınır.",
    },
  ],
};

export const adblueTopic: TopicPageData = {
  path: "/adblue",
  breadcrumbLabel: "AdBlue",
  h1: "Osmancık AdBlue Arıza Tespiti",
  intro: `${siteConfig.businessName}, Osmancık atölyesinde AdBlue ve SCR sistemindeki uyarıları arıza tespiti ile okur. Amaç, NOx / AdBlue hattındaki sorunu ölçmek ve uygun onarımı planlamaktır; emisyon sistemini devre dışı bırakmak bu hizmetin parçası değildir.`,
  whatsappText: "Merhaba, Osmancık’ta AdBlue arızası için bilgi almak istiyorum.",
  serviceName: "Osmancık AdBlue Arıza Tespiti",
  serviceType: "AdBlue Arıza Tespiti",
  serviceDescription:
    "Osmancık’ta AdBlue, SCR ve NOx sensörü uyarılarında arıza tespiti ve uygun onarım değerlendirmesi. Emisyon sistemini devre dışı bırakma vaadi yoktur.",
  sections: [
    {
      heading: "AdBlue uyarısı ne anlama gelir?",
      paragraphs: [
        "Gösterge panelindeki AdBlue, SCR veya emisyon uyarısı; üre sıvısı seviyesi, kalitesi, pompa, enjektör veya NOx ölçümünden kaynaklanabilir. Uyarı tek başına “sadece sıvı ekle” anlamına gelmez. Osmancık AdBlue kontrolünde önce kod ve canlı veri okunur.",
        "Sıvı bittiğinde araç gitgide kısıtlı moda girebilir. Seviye dolu olduğu hâlde lamba yanıyorsa sensör, hortum, ısıtıcı veya kontrol yazılımı tarafı da bakılmalıdır.",
      ],
    },
    {
      heading: "SCR, NOx ve sistem teşhisi",
      paragraphs: [
        "AdBlue, dizel araçta NOx’u düşüren SCR devresinin parçasıdır. Teşhiste pompa basıncı, enjektör komutu, tank ısıtıcısı ve NOx sensör değerleri birlikte yorumlanır. Tek bir kod, parçayı değiştirmek için yeterli olmayabilir.",
        "DPF ve EGR aynı emisyon zincirinde olduğu için AdBlue arızası bazen bu sistemlerle birlikte görülür. Bu yüzden AdBlue sayfası DPF / EGR teşhisi ile bağlantılıdır; işlemler ayrı ayrı, ölçüme göre planlanır.",
      ],
    },
    {
      heading: "Ne zaman servis kontrolü gerekir?",
      paragraphs: [
        "AdBlue lambası yanıyor, menzil uyarısı hızla düşüyor, motor arıza ışığı emisyon kodu veriyor veya araç tork kısıtına giriyorsa servis kontrolü gerekir. Kendi başına sıvı eklemek bazı durumlarda yeterli olsa da, tekrarlayan uyarıda ölçüm şarttır.",
        "Yolda kalan veya kısıtlı moda giren araçlarda elektrik-elektronik yol yardım uygunsa yerinde ön bakış yapılabilir. Kesin SCR teşhisi çoğu zaman atölye cihazı ister.",
      ],
    },
  ],
  relatedLinks: [
    { label: "Arıza tespiti", href: "/ariza-tespit" },
    { label: "DPF / EGR", href: "/dpf-egr" },
    { label: "Oto tamir", href: "/osmancik-oto-tamir" },
    { label: "ECU / motor beyni", href: "/ecu-motor-beyni" },
    { label: "Yol yardım", href: "/osmancik-yol-yardim" },
    { label: "Küçük Sanayi Sitesi", href: "/osmancik-kucuk-sanayi-sitesi" },
  ],
  faqs: [
    {
      question: "Osmancık’ta AdBlue arızasına bakılıyor mu?",
      answer:
        "Evet. AdBlue uyarısı, SCR ve NOx hattı arıza tespiti ile okunur. Uygunsa onarım planlanır. Emisyon sistemini kapatma veya silme işlemi yapılmaz.",
    },
    {
      question: "Sadece AdBlue eklemek yeterli olur mu?",
      answer:
        "Seviye gerçekten düşükse eklemek yeterli olabilir. Lamba sıvı doluyken yanıyorsa pompa, sensör veya hat arızası da bakılmalıdır.",
    },
    {
      question: "AdBlue arızası DPF ile ilgili olabilir mi?",
      answer:
        "Aynı emisyon zincirinde oldukları için birlikte görülebilir. Teşhis, hangi sistemin asıl kaynak olduğunu ayırmaya çalışır.",
    },
    {
      question: "Arıza lambası yanınca hemen gelmeli miyim?",
      answer:
        "Kısıtlı mod veya tekrarlayan uyarıda bekletmeden kontrol etmek daha güvenlidir. Kesin süre vaadi verilmez; uygunluk telefonda konuşulur.",
    },
  ],
};

export const starterTopic: TopicPageData = {
  path: "/mars-dinamosu",
  breadcrumbLabel: "Marş Dinamosu",
  h1: "Osmancık Marş Dinamosu",
  intro: `${siteConfig.businessName}, Osmancık’ta marş dinamosu arızalarında akü, kablo ve marş motorunu birlikte test eder. Marş basmama, tık sesi veya yavaş dönüş çoğu zaman tek parçaya indirgenemez; önce kaynak netleştirilir.`,
  whatsappText: "Merhaba, Osmancık’ta marş dinamosu için bilgi almak istiyorum.",
  serviceName: "Osmancık Marş Dinamosu",
  serviceType: "Marş Dinamosu",
  serviceDescription:
    "Osmancık’ta marş basmama, tık sesi ve yavaş marş şikâyetlerinde marş dinamosu, akü ve elektrik bağlantısının birlikte testi.",
  sections: [
    {
      heading: "Marş basmama ve tık sesi",
      paragraphs: [
        "Kontak çevrilince tek tık gelip motor hiç dönmüyorsa akü klemensi, marş rölesi veya marş dinamosu dişlisi şüpheye girer. Sürekli tık-tık sesi çoğu zaman zayıf akü veya kötü bağlantıdır; marş motorunu hemen suçlamak yanıltır.",
        "Osmancık marş dinamosu kontrolünde voltaj, kablo düşümü ve marş çekişi ölçülür. Ses tek başına teşhis değildir.",
      ],
    },
    {
      heading: "Yavaş marş ve akü ayrımı",
      paragraphs: [
        "Motor ağır ve yavaş dönüyorsa akü yaşlanmış olabilir, soğukta kapasite düşmüş olabilir veya marş dinamosu mekanik olarak zorlanıyor olabilir. Akü ile marş dinamosu ayrımı, yük testi ve marş sırasındaki voltaj düşümü ile yapılır.",
        "Yeni akü takıldığı hâlde marş hâlâ zayıfsa kablo kesiti, şase ve marş motoru bakılır. Tersi de geçerlidir: marş dinamosu değişmeden önce akü gerçekten yeterli mi bakılır.",
      ],
    },
    {
      heading: "Elektrik bağlantısı ve yerinde destek",
      paragraphs: [
        "Oksitli klemen, gevşek şase veya yanmış marş kablosu, sağlam marş dinamosunu işe yaramaz gösterir. Oto elektrik tarafında bağlantı kontrolü, parça değişiminden önce gelir.",
        "Araç yolda marş almıyorsa elektrik-elektronik yol yardım uygun koşullarda yerinde bakılabilir. Her marş arızası yol kenarında bitmez; söküm ve tezgâh işi atölyede yapılır.",
      ],
    },
  ],
  relatedLinks: [
    { label: "Oto elektrik", href: "/osmancik-oto-elektrik" },
    { label: "Akü kontrolü", href: "/aku" },
    { label: "Şarj dinamosu", href: "/sarj-dinamosu" },
    { label: "Arıza tespiti", href: "/ariza-tespit" },
    { label: "Oto tamir", href: "/osmancik-oto-tamir" },
    { label: "Yol yardım", href: "/osmancik-yol-yardim" },
  ],
  faqs: [
    {
      question: "Osmancık’ta marş dinamosu bakılıyor mu?",
      answer:
        "Evet. Marş basmama, tık sesi ve yavaş marş şikâyetlerinde akü ile marş dinamosu birlikte test edilir. Gerekirse onarım veya değişim değerlendirilir.",
    },
    {
      question: "Tık sesi her zaman marş dinamosu arızası mıdır?",
      answer:
        "Hayır. Zayıf akü ve kötü klemen aynı sesi üretebilir. Ölçüm olmadan marş motoru değişimi doğru olmayabilir.",
    },
    {
      question: "Yolda marş almayan araca bakılır mı?",
      answer:
        "Elektrik-elektronik yol yardım kapsamında uygunsa yerinde bakılır. Söküm gerektiren işler atölyede sürer.",
    },
    {
      question: "Akü değişince marş düzelmezse ne olur?",
      answer:
        "Kablo, şase ve marş dinamosu sırayla kontrol edilir. Şarj sistemi de akünün tekrar bitmemesi için bakılabilir.",
    },
  ],
};

export const chargingTopic: TopicPageData = {
  path: "/sarj-dinamosu",
  breadcrumbLabel: "Şarj Dinamosu",
  h1: "Osmancık Şarj Dinamosu",
  intro: `${siteConfig.businessName}, Osmancık’ta şarj dinamosu (alternatör) arızalarında akü lambası, şarj voltajı ve bağlantıları birlikte kontrol eder. Akünün şarj olmaması her zaman aküden kaynaklanmaz; şarj sistemi de aynı zincirdedir.`,
  whatsappText: "Merhaba, Osmancık’ta şarj dinamosu için bilgi almak istiyorum.",
  serviceName: "Osmancık Şarj Dinamosu",
  serviceType: "Şarj Dinamosu",
  serviceDescription:
    "Osmancık’ta akü lambası, şarj olmama ve voltaj düşmesi şikâyetlerinde şarj dinamosu ve akü ilişkisinin testi.",
  sections: [
    {
      heading: "Akü lambası ve şarj olmama",
      paragraphs: [
        "Kontak açıkken veya motor çalışırken yanan akü / şarj lambası, genellikle şarj dinamosu, kayış, regülatör veya kablo hattına işaret eder. Lamba sönük olsa bile akü yolculukta bitiyorsa çıkış voltajı yine ölçülmelidir.",
        "Osmancık şarj dinamosu kontrolünde rölanti ve yükte voltaj bakılır. Düşük voltaj aküyü doldurmaz; yüksek ve dalgalı voltaj elektronik modülleri zorlar.",
      ],
    },
    {
      heading: "Voltaj düşmesi ve alternatör",
      paragraphs: [
        "Far, klima veya cam rezistansı açılınca voltaj hızla düşüyorsa alternatör yetişmiyor veya kayış kayıyor olabilir. Şarj dinamosu fırça, diyot veya regülatör arızası bu tabloyu üretir.",
        "Akü ve şarj dinamosu ilişkisi tek yönlü değildir. Bitmiş akü alternatörü zorlar; zayıf şarj da yeni aküyü kısa sürede yorar. Bu yüzden iki sistem aynı seferde okunur.",
      ],
    },
    {
      heading: "Arıza tespit ve yol yardım",
      paragraphs: [
        "Bazı araçlarda şarj arızası gösterge kodu veya iletişim hatası olarak da düşer. Bilgisayarlı arıza tespiti, yalnızca lamba bakarak karar vermeyi azaltır.",
        "Yolda akü bitmesi veya şarj lambası ile durma durumunda yerinde ön kontrol uygunsa yapılır. Alternatör sökümü ve tezgâh testi atölyede tamamlanır.",
      ],
    },
  ],
  relatedLinks: [
    { label: "Oto elektrik", href: "/osmancik-oto-elektrik" },
    { label: "Akü kontrolü", href: "/aku" },
    { label: "Marş dinamosu", href: "/mars-dinamosu" },
    { label: "Arıza tespiti", href: "/ariza-tespit" },
    { label: "Oto tamir", href: "/osmancik-oto-tamir" },
    { label: "Yol yardım", href: "/osmancik-yol-yardim" },
  ],
  faqs: [
    {
      question: "Osmancık’ta şarj dinamosu bakılıyor mu?",
      answer:
        "Evet. Akü lambası, şarj olmama ve voltaj düşmesi şikâyetlerinde alternatör, kayış ve akü birlikte test edilir.",
    },
    {
      question: "Akü lambası yanınca sadece akü mü değişir?",
      answer:
        "Hayır. Lamba çoğu zaman şarj sistemini işaret eder. Akü değişmeden önce şarj dinamosu voltajı ölçülmelidir.",
    },
    {
      question: "Yeni akü neden tekrar biter?",
      answer:
        "Zayıf şarj dinamosu, kaçak akım veya kötü bağlantı yeni aküyü de boşaltır. Şarj ve deşarj birlikte bakılır.",
    },
    {
      question: "Yolda şarj lambası yanarsa ne yapmalıyım?",
      answer: `Güvenli yere çekin ve ${siteConfig.phoneDisplay} numarasını arayın. Uygunsa yol yardım ile ön kontrol planlanır; söküm işi atölyede yapılır.`,
    },
  ],
};
