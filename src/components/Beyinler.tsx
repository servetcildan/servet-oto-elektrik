import { brainUnits } from "@/lib/site-data";
import { IconCpu } from "./Icons";

export default function Beyinler() {
  return (
    <section id="beyinler" className="relative border-y border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            Beyinler
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            ECU & Elektronik Modül Onarımı
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Araç beyinlerinde arıza tespiti, onarım ve test işlemlerini profesyonel
            ekipmanlarla gerçekleştiriyoruz.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brainUnits.map((unit) => (
            <article
              key={unit.name}
              className="group rounded-2xl border border-border bg-surface-elevated p-6 transition-all hover:border-accent/30"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-lg bg-accent/10 p-2.5 text-accent">
                  <IconCpu className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-muted">ECU</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{unit.name}</h3>
              <p className="mt-2 text-sm text-muted">{unit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
