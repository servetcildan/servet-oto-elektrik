import Link from "next/link";
import { brainUnits } from "@/lib/site-data";
import { IconCpu } from "./Icons";

export default function Beyinler() {
  return (
    <section id="beyinler" className="relative overflow-hidden border-y border-border bg-surface py-20 sm:py-28">
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Beyinler</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            <span className="text-metal">ECU &amp; Elektronik Modül Onarımı</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Araç beyinlerinde arıza tespiti, onarım ve test işlemleri.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {brainUnits.map((unit) => (
            <Link
              key={unit.name}
              href={unit.href}
              className="card-premium group relative overflow-hidden rounded-2xl p-5 sm:p-6"
            >
              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-lg border border-border bg-surface p-2.5 text-accent-text">
                    <IconCpu className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-muted sm:text-xs">
                    {unit.code}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground sm:text-lg">{unit.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{unit.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
