"use client";

import { useState } from "react";

type BeforeAfterComparison = {
  treatment: string;
  area: string;
  beforeLabel: string;
  afterLabel: string;
  sliderLabel: string;
  description: string;
  beforeTone: string;
  afterTone: string;
};

type BeforeAfterSliderProps = {
  comparison: BeforeAfterComparison;
};

export function BeforeAfterSlider({ comparison }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(52);

  return (
    <article className="overflow-hidden rounded-3xl bg-[#fbf7f0]/86 p-4 shadow-border">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-editorial text-2xl font-medium tracking-[-0.96px] text-[#2a1b14]">{comparison.treatment}</p>
          <p className="mt-1 text-sm font-medium text-[#725746]">{comparison.area}</p>
        </div>
        <span className="rounded-full bg-[#ead8c4] px-3 py-1 text-xs font-semibold text-[#744532]">Before/After</span>
      </div>

      <div className="relative h-80 overflow-hidden rounded-3xl bg-[#ead8c4] shadow-border" aria-label={`${comparison.treatment} Vorher-Nachher-Vergleich`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${comparison.beforeTone}`}>
          <FacePlaceholder treatment={comparison.treatment} phase="vorher" />
          <PhotoLabel label={comparison.beforeLabel} align="left" />
        </div>
        <div
          className={`absolute inset-0 bg-gradient-to-br ${comparison.afterTone}`}
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <FacePlaceholder treatment={comparison.treatment} phase="nachher" />
          <PhotoLabel label={comparison.afterLabel} align="right" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_24px_rgba(42,27,20,0.45)]" style={{ left: `${position}%` }}>
          <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#3b261d] text-xs font-bold text-[#ead6c1] shadow-warm">
            ↔
          </div>
        </div>
      </div>

      <label className="mt-4 block text-xs font-semibold uppercase tracking-[0.16em] text-[#8a563d]" htmlFor={`slider-${comparison.treatment.toLowerCase()}`}>
        {comparison.sliderLabel}
      </label>
      <input
        id={`slider-${comparison.treatment.toLowerCase()}`}
        aria-label={comparison.sliderLabel}
        className="mt-3 w-full accent-[#744532]"
        min="0"
        max="100"
        type="range"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
      />
      <p className="mt-4 text-sm leading-6 text-[#6f5a4d]">{comparison.description}</p>
    </article>
  );
}

function PhotoLabel({ label, align }: { label: string; align: "left" | "right" }) {
  return (
    <div className={`absolute top-4 ${align === "left" ? "left-4" : "right-4"} rounded-full bg-[#2a1b14]/72 px-3 py-1 text-xs font-semibold text-white backdrop-blur`}>
      {label}
    </div>
  );
}

function FacePlaceholder({ treatment, phase }: { treatment: string; phase: "vorher" | "nachher" }) {
  const smoothness = phase === "nachher" ? "opacity-25" : "opacity-55";

  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="relative h-64 w-52 rounded-[42%] bg-[#f8dfc6]/72 shadow-[inset_0_-30px_60px_rgba(116,69,50,0.18)]">
        <div className="absolute left-1/2 top-14 h-3 w-3 -translate-x-8 rounded-full bg-[#3b261d]/65" />
        <div className="absolute left-1/2 top-14 h-3 w-3 translate-x-6 rounded-full bg-[#3b261d]/65" />
        <div className="absolute left-1/2 top-24 h-10 w-5 -translate-x-1/2 rounded-full border-l border-[#744532]/35" />
        <div className="absolute left-1/2 top-40 h-6 w-20 -translate-x-1/2 rounded-b-full border-b-2 border-[#744532]/45" />
        <div className={`absolute left-1/2 top-9 h-0.5 w-28 -translate-x-1/2 rounded-full bg-[#744532] ${smoothness}`} />
        <div className={`absolute left-1/2 top-28 h-0.5 w-24 -translate-x-1/2 rounded-full bg-[#744532] ${treatment === "Filler" ? "opacity-20" : smoothness}`} />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#744532]">
          {phase}
        </div>
      </div>
    </div>
  );
}
