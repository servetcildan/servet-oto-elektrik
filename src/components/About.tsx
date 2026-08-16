import { siteConfig } from "@/lib/site-data";
import { IconCpu, IconShield, IconZap } from "./Icons";

const highlights = [
  {
    icon: IconCpu,
    title: "Gelişmiş Teşhis",
    description: "Profesyonel cihazlarla hızlı ve doğru arıza tespiti",
  },
  {
    icon: IconShield,
    title: "Güvenilir Onarım",
    description: "ECU ve elektronik modül onarımında uzman kadro",
  },
  {
    icon: IconZap,
    title: "Hızlı Çözüm",
    description: "Minimum bekleme süresi, maksimum verimlilik",
  },
];

export default function About() {
  return (
    <section id="hakkimizda" className="relative border-y border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold tracking-widest text-accent uppercase">
              Hakkımızda
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Arızayı Okuyor, Çözümü Kodluyoruz
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              <strong className="text-foreground">{siteConfig.brand}</strong> olarak{" "}
              {siteConfig.location} bölgesinde oto elektrik ve elektronik alanında
              profesyonel hizmet sunuyoruz. Motor beyni, ABS modülü, immobilizer ve
              emisyon sistemlerinde uzmanlaşmış ekibimizle aracınızın elektronik
              altyapısına güvenilir çözümler üretiyoruz.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Teşhisten onarıma, yazılımdan yedek parça teminine kadar tüm süreçleri
              tek çatı altında yönetiyor; her aracı titizlikle analiz ederek kalıcı
              çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-1">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-border bg-surface-elevated p-6"
              >
                <div className="shrink-0 rounded-xl bg-accent/10 p-3 text-accent">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
