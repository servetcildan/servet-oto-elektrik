import { siteConfig } from "./site-data";

export const roadsideFaqs = [
  {
    question: "Aracım Osmancık’ta yolda kaldı, ne yapmalıyım?",
    answer: `Güvenli bir yere çekilebiliyorsanız orada bekleyin. ${siteConfig.phoneDisplay} numarayı arayın veya WhatsApp’tan konum paylaşın. Elektrik-elektronik kaynaklı bir arıza görünüyorsa yerinde değerlendirme planlanır.`,
  },
  {
    question: "Akü biterse yol yardım hizmeti veriyor musunuz?",
    answer:
      "Evet. Akü bitmesi, Osmancık’ta yol yardım kapsamında en sık bakılan durumlardan biridir. Yerinde kontrol edilir; gerekirse atölyede şarj sistemi de incelenir.",
  },
  {
    question: "Marş basmayan araca yol yardım yapılabilir mi?",
    answer:
      "Marş almama akü, marş dinamosu veya elektrik bağlantısından kaynaklanabilir. Uygun koşullarda yerinde bakılır. Her marş arızası yol kenarında giderilemez.",
  },
  {
    question: "Her arıza yol kenarında giderilebilir mi?",
    answer:
      "Hayır. Yerinde yapılan iş, elektrik-elektronik arızanın ön kontrolü ve uygunsa müdahaledir. Kart tamiri, yazılım veya tezgâh gerektiren işler atölyede yapılır.",
  },
  {
    question: "Osmancık dışında yol yardım hizmeti veriyor musunuz?",
    answer:
      "Asıl hizmet Osmancık’tadır. Yakın çevre talepleri konuma göre telefonla değerlendirilir; sabit bir kilometre sınırı bu sitede yayınlanmaz.",
  },
] as const;

export const roadsideRelatedLinks = [
  { label: "Oto tamir atölyesi", href: "/osmancik-oto-tamir" },
  { label: "Oto elektrik servisi", href: "/osmancik-oto-elektrik" },
  { label: "Akü kontrolü", href: "/aku" },
  { label: "Bilgisayarlı arıza tespiti", href: "/ariza-tespit" },
  { label: "Marş dinamosu", href: "/mars-dinamosu" },
  { label: "Şarj dinamosu", href: "/sarj-dinamosu" },
  { label: "Atölye konumu", href: "/osmancik-kucuk-sanayi-sitesi" },
  { label: "İletişim", href: "/#iletisim" },
] as const;
