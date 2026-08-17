"use client";

import { useEffect, useRef } from "react";

type Pt = { x: number; y: number };
type Rect = { s0: number; s1: number; t0: number; t1: number };

/*
 * Bütün gövde izometrik izdüşümle çizilir: (s, t) kasa tabanı üzerindeki yerel
 * koordinat, lift ise ekrana dik yüksekliktir. Kasa, PCB katmanları, çipler ve
 * konektörler aynı iki yardımcı fonksiyondan üretildiği için geometri tek
 * yerde tanımlı kalır.
 */
const ORIGIN: Pt = { x: 280, y: 180 };
const AXIS_S: Pt = { x: 178, y: 95 };
const AXIS_T: Pt = { x: -178, y: 95 };

/** Yükseklik katmanları */
const CASE_FLOOR = 2;
const CASE_RIM = 44;
const PCB_DEEP = 17;
const PCB_MID = 29;
const PCB_TOP = 41;
const PIN_LIFT = PCB_TOP + 2;

/** globals.css içindeki --brand-* token'larının SVG karşılıkları */
const BLUE = {
  bright: "#22d3ff",
  primary: "#00aeef",
  strong: "#0077ff",
  pale: "#9fd9ef",
};

const round = (n: number) => Math.round(n * 10) / 10;

function bp(s: number, t: number, lift = 0): Pt {
  return {
    x: ORIGIN.x + s * AXIS_S.x + t * AXIS_T.x,
    y: ORIGIN.y + s * AXIS_S.y + t * AXIS_T.y - lift,
  };
}

const toPoints = (pts: Pt[]) => pts.map((p) => `${round(p.x)},${round(p.y)}`).join(" ");
const toPath = (pts: Pt[]) =>
  pts.map((p, i) => `${i ? "L" : "M"}${round(p.x)} ${round(p.y)}`).join(" ");

const rect = (s0: number, s1: number, t0: number, t1: number): Rect => ({ s0, s1, t0, t1 });

const topFace = (r: Rect, lift: number) =>
  toPoints([bp(r.s0, r.t0, lift), bp(r.s1, r.t0, lift), bp(r.s1, r.t1, lift), bp(r.s0, r.t1, lift)]);

/** Görünen yan yüzeyler her zaman alt köşeye (s1, t1) komşu iki kenardır. */
const sideFace = (a: Pt2, b: Pt2, top: number, bottom: number) =>
  toPoints([bp(a[0], a[1], top), bp(b[0], b[1], top), bp(b[0], b[1], bottom), bp(a[0], a[1], bottom)]);

type Pt2 = [number, number];

/** Kasa, konektör ve çiplerin tamamı bu tek bileşenden üretilir. */
function Slab({
  r,
  top,
  height,
  fill,
  right,
  front,
  stroke,
  strokeOpacity = 0.5,
}: {
  r: Rect;
  top: number;
  height: number;
  fill: string;
  right: string;
  front: string;
  stroke?: string;
  strokeOpacity?: number | string;
}) {
  const bottom = top - height;

  return (
    <>
      <polygon points={sideFace([r.s1, r.t0], [r.s1, r.t1], top, bottom)} fill={right} />
      <polygon points={sideFace([r.s0, r.t1], [r.s1, r.t1], top, bottom)} fill={front} />
      <polygon
        points={topFace(r, top)}
        fill={fill}
        stroke={stroke}
        strokeOpacity={stroke ? strokeOpacity : undefined}
        strokeWidth={stroke ? 1 : undefined}
      />
    </>
  );
}

/** Çip bacakları: verilen kenar boyunca eşit aralıklı kısa çizgiler. */
function pinRow(r: Rect, edge: "s0" | "s1" | "t0" | "t1", count: number, len = 0.03): [Pt, Pt][] {
  const alongS = edge === "s0" || edge === "s1";
  const [from, to] = alongS ? [r.t0, r.t1] : [r.s0, r.s1];

  return Array.from({ length: count }, (_, i) => {
    const f = from + ((i + 0.5) / count) * (to - from);
    if (edge === "s0") return [bp(r.s0, f, PIN_LIFT), bp(r.s0 - len, f, PIN_LIFT)];
    if (edge === "s1") return [bp(r.s1, f, PIN_LIFT), bp(r.s1 + len, f, PIN_LIFT)];
    if (edge === "t0") return [bp(f, r.t0, PIN_LIFT), bp(f, r.t0 - len, PIN_LIFT)];
    return [bp(f, r.t1, PIN_LIFT), bp(f, r.t1 + len, PIN_LIFT)];
  });
}

/** Konektör üstündeki pin yuvaları. */
function slots(r: Rect, rows: number, cols: number, lift: number, hs: number, ht: number) {
  return Array.from({ length: rows * cols }, (_, i) => {
    const s = r.s0 + ((Math.floor(i / cols) + 0.5) / rows) * (r.s1 - r.s0);
    const t = r.t0 + (((i % cols) + 0.5) / cols) * (r.t1 - r.t0);
    return topFace(rect(s - hs, s + hs, t - ht, t + ht), lift);
  });
}

const FULL = rect(0, 1, 0, 1);
const CAVITY = rect(0.075, 0.925, 0.075, 0.925);
const BOARD = rect(0.1, 0.9, 0.1, 0.9);

const MCU = rect(0.4, 0.615, 0.4, 0.615);
const MCU_TOP = 56;
const CONN_A = rect(0.115, 0.245, 0.3, 0.72);
const CONN_B = rect(0.3, 0.72, 0.115, 0.245);
const CONN_TOP = 62;
const IC1 = rect(0.685, 0.805, 0.35, 0.5);
const IC2 = rect(0.35, 0.5, 0.685, 0.805);
const IC_TOP = 49;
const CAPS: Rect[] = [rect(0.7, 0.765, 0.6, 0.665), rect(0.595, 0.66, 0.72, 0.785)];
const PASSIVES: Rect[] = [
  rect(0.3, 0.365, 0.55, 0.585),
  rect(0.55, 0.585, 0.3, 0.365),
  rect(0.78, 0.86, 0.62, 0.655),
  rect(0.62, 0.655, 0.78, 0.86),
];

/** Bakır yollar: MCU'dan konektörlere, yardımcı entegrelere ve kondansatörlere. */
const TRACES: Pt2[][] = [
  [[0.4, 0.44], [0.3, 0.44], [0.25, 0.44]],
  [[0.4, 0.56], [0.29, 0.56], [0.29, 0.66], [0.25, 0.66]],
  [[0.44, 0.4], [0.44, 0.3], [0.44, 0.25]],
  [[0.56, 0.4], [0.56, 0.29], [0.66, 0.29], [0.66, 0.25]],
  [[0.615, 0.42], [0.685, 0.42]],
  [[0.615, 0.47], [0.685, 0.47]],
  [[0.42, 0.615], [0.42, 0.685]],
  [[0.47, 0.615], [0.47, 0.685]],
  [[0.615, 0.55], [0.73, 0.55], [0.73, 0.6]],
  [[0.55, 0.615], [0.55, 0.72], [0.6, 0.72]],
  [[0.805, 0.44], [0.86, 0.44], [0.86, 0.62]],
  [[0.44, 0.805], [0.44, 0.86], [0.62, 0.86]],
];

/** Bağımsız lehim gözleri */
const VIAS: Pt2[] = [
  [0.19, 0.15], [0.15, 0.19], [0.26, 0.15],
  [0.85, 0.17], [0.87, 0.28], [0.79, 0.15],
  [0.15, 0.79], [0.17, 0.87], [0.28, 0.87],
  [0.84, 0.76], [0.72, 0.86],
];

const LEDS: Pt2[] = [[0.3, 0.86], [0.36, 0.86]];

const NODES: { label: string; pos: Pt; line: Pt[] }[] = [
  {
    label: "ABS",
    pos: { x: 78, y: 128 },
    line: [bp(0.28, 0.34, PIN_LIFT), { x: 152, y: 141 }, { x: 95, y: 128 }],
  },
  {
    label: "CAN-BUS",
    pos: { x: 484, y: 128 },
    line: [bp(0.34, 0.28, PIN_LIFT), { x: 412, y: 141 }, { x: 467, y: 128 }],
  },
  {
    label: "İMMOBİLİZER",
    pos: { x: 96, y: 438 },
    line: [bp(0.3, 0.7, PIN_LIFT), { x: 140, y: 340 }, { x: 96, y: 423 }],
  },
  {
    label: "ŞANZIMAN",
    pos: { x: 466, y: 438 },
    line: [bp(0.7, 0.3, PIN_LIFT), { x: 424, y: 340 }, { x: 466, y: 423 }],
  },
];

const MCU_PINS = [
  ...pinRow(MCU, "s0", 6),
  ...pinRow(MCU, "s1", 6),
  ...pinRow(MCU, "t0", 6),
  ...pinRow(MCU, "t1", 6),
];

const IC_PINS = [
  ...pinRow(IC1, "t0", 4, 0.022),
  ...pinRow(IC1, "t1", 4, 0.022),
  ...pinRow(IC2, "s0", 4, 0.022),
  ...pinRow(IC2, "s1", 4, 0.022),
];

function Pad({ p, r = 4 }: { p: Pt; r?: number }) {
  return (
    <>
      <ellipse cx={round(p.x)} cy={round(p.y)} rx={r} ry={r * 0.54} fill={BLUE.pale} fillOpacity="0.55" />
      <ellipse cx={round(p.x)} cy={round(p.y)} rx={r * 0.4} ry={r * 0.22} fill="#04141f" fillOpacity="0.85" />
    </>
  );
}

export default function HeroEcuSchematic() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (reducedMotion.matches || !finePointer.matches) {
      return;
    }

    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const bounds = element.getBoundingClientRect();
        const clamp = (value: number) => Math.max(-0.6, Math.min(0.6, value));
        const x = clamp((event.clientX - bounds.left) / bounds.width - 0.5);
        const y = clamp((event.clientY - bounds.top) / bounds.height - 0.5);
        element.style.setProperty("--ecu-x", x.toFixed(3));
        element.style.setProperty("--ecu-y", y.toFixed(3));
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div ref={containerRef} aria-hidden="true" className="relative mx-auto w-full max-w-[32rem] lg:max-w-none">
      <div className="pointer-events-none absolute inset-[10%] rounded-full bg-brand-strong/12 blur-3xl" />
      <div className="pointer-events-none absolute inset-[28%] rounded-full bg-brand-primary/10 blur-3xl" />

      <svg
        viewBox="20 100 520 396"
        className="relative block h-auto w-full"
        fill="none"
        focusable="false"
        role="presentation"
      >
        <defs>
          <pattern id="ecu-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0v28" fill="none" stroke={BLUE.strong} strokeWidth="0.5" />
          </pattern>
          <radialGradient id="ecu-grid-fade">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.34" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <mask id="ecu-grid-mask">
            <rect width="560" height="560" fill="url(#ecu-grid-fade)" />
          </mask>

          {/* Fırçalanmış alüminyum kasa */}
          <linearGradient id="ecu-metal" x1="0.08" y1="0" x2="0.92" y2="1">
            <stop offset="0%" stopColor="#9aa3ad" />
            <stop offset="26%" stopColor="#666e78" />
            <stop offset="58%" stopColor="#434a53" />
            <stop offset="100%" stopColor="#2b3037" />
          </linearGradient>
          <pattern
            id="ecu-brush"
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(28)"
          >
            <line x1="0" y1="0" x2="0" y2="5" stroke="#ffffff" strokeOpacity="0.09" strokeWidth="1.2" />
            <line x1="2.6" y1="0" x2="2.6" y2="5" stroke="#000000" strokeOpacity="0.18" strokeWidth="0.9" />
          </pattern>

          {/* Yarı saydam PCB katmanları */}
          <linearGradient id="ecu-pcb" x1="0.1" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor="#0f4f78" stopOpacity="0.92" />
            <stop offset="52%" stopColor="#08304e" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#04202f" stopOpacity="0.94" />
          </linearGradient>

          {/* Epoksi gövdeli entegreler */}
          <linearGradient id="ecu-chip" x1="0.15" y1="0" x2="0.85" y2="1">
            <stop offset="0%" stopColor="#414b57" />
            <stop offset="46%" stopColor="#232b34" />
            <stop offset="100%" stopColor="#151a20" />
          </linearGradient>
          <linearGradient id="ecu-die" x1="0.2" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor={BLUE.bright} stopOpacity="0.38" />
            <stop offset="100%" stopColor={BLUE.strong} stopOpacity="0.16" />
          </linearGradient>

          <linearGradient id="ecu-scan-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={BLUE.bright} stopOpacity="0" />
            <stop offset="50%" stopColor={BLUE.bright} stopOpacity="0.4" />
            <stop offset="100%" stopColor={BLUE.bright} stopOpacity="0" />
          </linearGradient>

          <radialGradient id="ecu-core-glow">
            <stop offset="0%" stopColor={BLUE.bright} stopOpacity="0.42" />
            <stop offset="45%" stopColor={BLUE.primary} stopOpacity="0.14" />
            <stop offset="100%" stopColor={BLUE.primary} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ecu-under-glow">
            <stop offset="0%" stopColor={BLUE.strong} stopOpacity="0.34" />
            <stop offset="100%" stopColor={BLUE.strong} stopOpacity="0" />
          </radialGradient>

          <clipPath id="ecu-board-clip">
            <polygon points={topFace(BOARD, PCB_TOP)} />
          </clipPath>
        </defs>

        {/* Arka katman — teknik ızgara */}
        <g className="hero-ecu-layer hero-ecu-far">
          <rect width="560" height="560" fill="url(#ecu-grid)" mask="url(#ecu-grid-mask)" />
        </g>

        {/* Orta katman — araç sistemlerine giden tesisat */}
        <g className="hero-ecu-layer hero-ecu-mid">
          {NODES.map((node, index) => {
            const d = toPath(node.line);

            return (
              <g key={node.label}>
                <path d={d} stroke={BLUE.strong} strokeOpacity="0.34" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d={d}
                  stroke={BLUE.bright}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={100}
                  strokeDasharray="7 93"
                  className="hero-ecu-signal"
                  style={{
                    animationDelay: `${index * 1.6}s`,
                    animationDuration: `${6.5 + index * 0.5}s`,
                  }}
                />

                <circle
                  cx={node.pos.x}
                  cy={node.pos.y}
                  r="15"
                  stroke={BLUE.primary}
                  strokeOpacity="0.3"
                  strokeWidth="1"
                  className="hero-ecu-blink"
                  style={{ animationDelay: `${index * 0.9}s` }}
                />
                <circle
                  cx={node.pos.x}
                  cy={node.pos.y}
                  r="7.5"
                  fill="#08131c"
                  stroke={BLUE.primary}
                  strokeOpacity="0.75"
                  strokeWidth="1.2"
                />
                <circle cx={node.pos.x} cy={node.pos.y} r="2.6" fill={BLUE.bright} />

                <text
                  x={node.pos.x}
                  y={node.pos.y + 30}
                  textAnchor="middle"
                  className="font-mono"
                  fontSize="10.5"
                  letterSpacing="1.6"
                  fontWeight="600"
                  fill={BLUE.pale}
                  fillOpacity="0.75"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </g>

        {/* Ön katman — ECU gövdesi */}
        <g className="hero-ecu-layer hero-ecu-near">
          <ellipse cx="280" cy="374" rx="196" ry="30" fill="url(#ecu-under-glow)" />

          {/* Fırçalanmış metal kasa */}
          <Slab r={FULL} top={CASE_RIM} height={CASE_RIM - CASE_FLOOR} fill="url(#ecu-metal)" right="#20242a" front="#171a1e" />
          <polygon points={topFace(FULL, CASE_RIM)} fill="url(#ecu-brush)" />
          <polygon
            points={topFace(FULL, CASE_RIM)}
            stroke="#c3cad3"
            strokeOpacity="0.4"
            strokeWidth="1.1"
          />

          {/* Soğutma kanatları */}
          {Array.from({ length: 9 }, (_, i) => {
            const f = (i + 1) / 10;
            const a = bp(1, f, CASE_RIM - 5);
            const b = bp(1, f, CASE_FLOOR + 3);
            const c = bp(f, 1, CASE_RIM - 5);
            const d = bp(f, 1, CASE_FLOOR + 3);

            return (
              <g key={`fin-${i}`} stroke="#000000" strokeOpacity="0.4" strokeWidth="1.6">
                <line x1={round(a.x)} y1={round(a.y)} x2={round(b.x)} y2={round(b.y)} />
                <line x1={round(c.x)} y1={round(c.y)} x2={round(d.x)} y2={round(d.y)} />
              </g>
            );
          })}

          {/* Montaj vidaları */}
          {([[0.03, 0.5], [0.5, 0.03], [0.97, 0.5]] as Pt2[]).map(([s, t], i) => {
            const p = bp(s, t, CASE_RIM);
            return (
              <g key={`screw-${i}`}>
                <ellipse cx={round(p.x)} cy={round(p.y)} rx="5" ry="2.7" fill="#0e1216" fillOpacity="0.8" />
                <ellipse cx={round(p.x)} cy={round(p.y)} rx="5" ry="2.7" fill="none" stroke="#aeb6bf" strokeOpacity="0.5" strokeWidth="0.9" />
              </g>
            );
          })}

          {/* Kasa boşluğu ve yarı saydam PCB katmanları */}
          <polygon points={topFace(CAVITY, CASE_RIM)} fill="#05141f" fillOpacity="0.94" />
          <polygon points={topFace(BOARD, PCB_DEEP)} fill="url(#ecu-pcb)" fillOpacity="0.34" />
          <polygon points={topFace(BOARD, PCB_MID)} fill="url(#ecu-pcb)" fillOpacity="0.55" />
          <polygon
            points={topFace(BOARD, PCB_TOP)}
            fill="url(#ecu-pcb)"
            stroke={BLUE.primary}
            strokeOpacity="0.5"
            strokeWidth="1.2"
          />

          {/* Bakır yollar ve üzerlerinde ilerleyen veri sinyalleri */}
          {TRACES.map((trace, index) => {
            const pts = trace.map(([s, t]) => bp(s, t, PCB_TOP));
            const d = toPath(pts);

            return (
              <g key={`trace-${index}`}>
                <path d={d} stroke={BLUE.primary} strokeOpacity="0.42" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d={d}
                  stroke={BLUE.bright}
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={100}
                  strokeDasharray="6 94"
                  className={`hero-ecu-signal${index % 2 ? " hero-ecu-dense" : ""}`}
                  style={{
                    animationDelay: `${index * 0.55}s`,
                    animationDuration: `${4.4 + (index % 3) * 0.8}s`,
                  }}
                />
                <Pad p={pts[pts.length - 1]} r={3.4} />
              </g>
            );
          })}

          {VIAS.map(([s, t], index) => (
            <Pad key={`via-${index}`} p={bp(s, t, PCB_TOP)} r={3.2} />
          ))}

          {/* Durum ledleri */}
          {LEDS.map(([s, t], index) => {
            const p = bp(s, t, PCB_TOP + 1);
            return (
              <ellipse
                key={`led-${index}`}
                cx={round(p.x)}
                cy={round(p.y)}
                rx="4"
                ry="2.2"
                fill={BLUE.bright}
                className="hero-ecu-blink"
                style={{ animationDelay: `${index * 1.2}s` }}
              />
            );
          })}

          {/* Bacaklar */}
          <g stroke={BLUE.pale} strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round">
            {MCU_PINS.map(([a, b], index) => (
              <line key={`mcu-pin-${index}`} x1={round(a.x)} y1={round(a.y)} x2={round(b.x)} y2={round(b.y)} />
            ))}
          </g>
          <g stroke={BLUE.pale} strokeOpacity="0.45" strokeWidth="1.1" strokeLinecap="round">
            {IC_PINS.map(([a, b], index) => (
              <line key={`ic-pin-${index}`} x1={round(a.x)} y1={round(a.y)} x2={round(b.x)} y2={round(b.y)} />
            ))}
          </g>

          {/* Pasif bileşenler */}
          {PASSIVES.map((r, index) => (
            <Slab key={`passive-${index}`} r={r} top={PCB_TOP + 5} height={5} fill="#a7b1bb" right="#6a727b" front="#4e555d" />
          ))}
          {CAPS.map((r, index) => (
            <Slab key={`cap-${index}`} r={r} top={PCB_TOP + 16} height={16} fill="#2f363f" right="#1b2027" front="#12161b" />
          ))}

          {/* Yardımcı entegreler */}
          <Slab r={IC1} top={IC_TOP} height={IC_TOP - PCB_TOP} fill="url(#ecu-chip)" right="#191f26" front="#111519" stroke={BLUE.pale} strokeOpacity="0.32" />
          <Slab r={IC2} top={IC_TOP} height={IC_TOP - PCB_TOP} fill="url(#ecu-chip)" right="#191f26" front="#111519" stroke={BLUE.pale} strokeOpacity="0.32" />

          {/* Ana işlemci */}
          <circle
            cx={round(bp(0.5075, 0.5075, PCB_TOP).x)}
            cy={round(bp(0.5075, 0.5075, PCB_TOP).y)}
            r="62"
            fill="url(#ecu-core-glow)"
            className="hero-ecu-core"
          />
          <Slab r={MCU} top={MCU_TOP} height={MCU_TOP - PCB_TOP} fill="url(#ecu-chip)" right="#1c232b" front="#12171c" stroke={BLUE.pale} strokeOpacity="0.4" />
          <polygon
            points={topFace(rect(0.44, 0.575, 0.44, 0.575), MCU_TOP)}
            fill="url(#ecu-die)"
            stroke={BLUE.bright}
            strokeOpacity="0.45"
            strokeWidth="0.8"
          />
          <circle
            cx={round(bp(0.425, 0.425, MCU_TOP).x)}
            cy={round(bp(0.425, 0.425, MCU_TOP).y)}
            r="2"
            fill={BLUE.bright}
            fillOpacity="0.7"
          />

          {/* Konektörler */}
          <Slab r={CONN_A} top={CONN_TOP} height={CONN_TOP - PCB_TOP} fill="#272d35" right="#171c22" front="#0f1317" stroke={BLUE.pale} strokeOpacity="0.28" />
          <Slab r={CONN_B} top={CONN_TOP} height={CONN_TOP - PCB_TOP} fill="#272d35" right="#171c22" front="#0f1317" stroke={BLUE.pale} strokeOpacity="0.28" />
          <g fill="#050c12" stroke={BLUE.pale} strokeOpacity="0.3" strokeWidth="0.6">
            {slots(CONN_A, 2, 6, CONN_TOP, 0.02, 0.026).map((points, index) => (
              <polygon key={`slot-a-${index}`} points={points} />
            ))}
            {slots(CONN_B, 2, 6, CONN_TOP, 0.026, 0.02).map((points, index) => (
              <polygon key={`slot-b-${index}`} points={points} />
            ))}
          </g>

          {/* Tarama ışığı */}
          <g clipPath="url(#ecu-board-clip)" className="hero-ecu-dense">
            <rect x="120" y="140" width="320" height="40" fill="url(#ecu-scan-fill)" className="hero-ecu-scan" />
          </g>
        </g>
      </svg>
    </div>
  );
}
