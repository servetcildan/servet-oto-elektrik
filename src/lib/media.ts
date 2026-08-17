export type WorkMedia = {
  id: string;
  title: string;
  description: string;
  /** public/videos altındaki dosya adı */
  file: string;
  /** Kapak JPEG adı; önce /videos, yoksa /videos/posters içinde aranır */
  poster: string;
};

/**
 * "Gerçek Çalışmalarımız" bölümünde gösterilen atölye kayıtları.
 * Dosyalar public/videos ve public/videos/posters klasörlerine eklendiğinde
 * kartlar otomatik olarak oynatılabilir hâle gelir; kod değişikliği gerekmez.
 */
export const workMedia: WorkMedia[] = [
  {
    id: "ford-focus-gosterge",
    title: "Ford Focus Gösterge Kartı Tamiri",
    description: "Gösterge paneli elektronik kart onarımı ve yazılım işlemi.",
    file: "ford-focus-gosterge.mp4",
    poster: "ford-focus-gosterge.jpg",
  },
  {
    id: "kia-sportage-ecu-boot",
    title: "Kia Sportage ECU Boot Çalışması",
    description: "Motor kontrol ünitesinde boot yöntemiyle okuma ve yazma.",
    file: "kia-sportage-ecu-boot.mp4",
    poster: "kia-sportage-ecu-boot.jpg",
  },
  {
    id: "ecu-programlama",
    title: "ECU Programlama — Elektronik Tezgâh",
    description: "Tezgâh üzerinde kontrol ünitesi programlama ve test süreci.",
    file: "ecu-programlama.mp4",
    poster: "ecu-programlama.jpg",
  },
  {
    id: "abs-tamiri",
    title: "ABS Modül Onarımı",
    description: "Fren güvenlik modülünde arıza tespiti ve kart seviyesi onarım.",
    file: "abs-tamiri.mp4",
    poster: "abs-tamiri.jpg",
  },
  {
    id: "ford-transit-ariza",
    title: "Ford Transit Arıza Çözümü",
    description: "Teşhis cihazıyla arıza analizi ve elektronik onarım.",
    file: "ford-transit-ariza.mp4",
    poster: "ford-transit-ariza.jpg",
  },
  {
    id: "dsg-optimizasyon",
    title: "DSG Şanzıman Optimizasyonu",
    description: "Çift kavramalı şanzımanda adaptasyon ve kalibrasyon çalışması.",
    file: "dsg-optimizasyon.mp4",
    poster: "dsg-optimizasyon.jpg",
  },
  {
    id: "volvo-xc40-destek-akusu",
    title: "Volvo XC40 Destek Aküsü Montajı",
    description: "Destek aküsü değişimi ve sistem üzerinde tanıtma işlemi.",
    file: "volvo-xc40-destek-akusu.mp4",
    poster: "volvo-xc40-destek-akusu.jpg",
  },
  {
    id: "isletme-tabela",
    title: "Servet Oto Elektrik-Elektronik",
    description: "Osmancık Küçük Sanayi Sitesi'ndeki işletmemiz.",
    file: "isletme-tabela.mp4",
    poster: "isletme-tabela.jpg",
  },
];

export const VIDEO_DIR = "/videos";
export const POSTER_DIR = "/videos/posters";
