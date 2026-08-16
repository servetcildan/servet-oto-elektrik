import { brainUnits } from "@/lib/site-data";
import { IconCpu } from "./Icons";

export default function Beyinler() {
  return (
    <section id="beyinler" className="relative overflow-hidden border-y border-border bg-surface py-20 sm:py-28">
      <div className="absolute inset-0 ecu-lines opacity-40" />
      <div className="absolute inset-0 circuit-pattern opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Beyinler</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            ECU & Elektronik Modül Onarımı
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
            Araç beyinlerinde arıza tespiti, onarım ve test işlemlerini profesyonel
            ekipmanlarla gerçekleştiriyoruz.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {brainUnits.map((unit) => (
            <article
              key={unit.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated/80 p-5 backdrop-blur-sm transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 sm:p-6"
            >
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-accent/5 transition-colors group-hover:bg-accent/10" />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-lg bg-accent/10 p-2.5 text-accent">
                    <IconCpu className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-accent/70 sm:text-xs">
                    {unit.code}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground sm:text-lg">{unit.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{unit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
