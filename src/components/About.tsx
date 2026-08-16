import { siteConfig } from "@/lib/site-data";
import { IconCpu, IconShield, IconScan } from "./Icons";

const highlights = [
  {
    icon: IconScan,
    title: "Modern Teşhis Ekipmanları",
    description: "Profesyonel cihazlarla hızlı ve doğru arıza tespiti",
  },
  {
    icon: IconCpu,
    title: "ECU & Beyin Uzmanlığı",
    description: "Motor, ABS ve elektronik modül onarımında deneyimli kadro",
  },
  {
    icon: IconShield,
    title: "Güvenilir Hizmet",
    description: "Teşhisten onarıma kadar şeffaf ve kalıcı çözümler",
  },
];

export default function About() {
  return (
    <section id="hakkimizda" className="relative border-y border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="section-label">Hakkımızda</span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Teknoloji ve Tecrübe Bir Arada
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
              <strong className="font-semibold text-foreground">{siteConfig.brand}</strong>,{" "}
              {siteConfig.location} bölgesinde oto elektrik-elektronik alanında profesyonel
              servis hizmeti sunmaktadır. Modern arıza teşhis ekipmanlarımız ve uzman
              ekibimizle ECU, motor beyni, ABS modülü ve immobilizer sistemlerinde güvenilir
              çözümler üretiyoruz.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Teşhisten onarıma, yazılımdan yedek parça teminine kadar tüm süreçleri tek
              çatı altında yöneterek her araca titizlikle yaklaşıyoruz.
            </p>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="card-premium flex gap-4 rounded-2xl p-5 sm:p-6"
              >
                <div className="shrink-0 rounded-xl bg-accent/10 p-3 text-accent">
                  <item.icon className="h-6 w-6" />
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
