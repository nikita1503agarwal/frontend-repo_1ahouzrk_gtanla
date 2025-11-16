import { useState } from 'react';

export default function TheShift() {
  const [value, setValue] = useState(60);

  return (
    <section id="the-shift" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">The Shift You’ll Feel with Clari.Fi</h2>
          <p className="mt-3 text-lg text-slate-600">
            Most businesses scale faster than their financial systems. Reports come late, cash flow feels uncertain, and decisions are made on instinct. Clari.Fi changes that.
          </p>
        </div>

        <div className="mt-10">
          <p className="mb-2 text-center text-sm font-medium text-slate-700">From Guesswork to Clarity</p>

          <div className="relative mx-auto h-56 w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* Before/After layers */}
            <div className="absolute inset-0 grid grid-cols-2">
              <div className="flex items-center justify-center bg-slate-100">
                <div className="text-center">
                  <div className="mb-2 h-24 w-40 rounded bg-slate-300/70 blur-sm" />
                  <p className="text-xs text-slate-500">Reports delayed</p>
                  <p className="text-xs text-slate-500">Decisions: Instinct / Gut</p>
                </div>
              </div>
              <div className="flex items-center justify-center bg-teal-50">
                <div className="text-center">
                  <div className="mb-2 h-24 w-40 rounded bg-gradient-to-br from-teal-400 to-emerald-500" />
                  <p className="text-xs text-slate-700">Reports: On time, every time</p>
                  <p className="text-xs text-slate-700">Decisions: Data-backed & confident</p>
                </div>
              </div>
            </div>

            {/* Slider mask */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-full" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
              <div className="absolute inset-0 bg-teal-50/60" />
            </div>

            {/* Handle */}
            <div className="absolute inset-y-0" style={{ left: `${value}%` }}>
              <div className="absolute top-1/2 -mt-6 -ml-2 h-12 w-1 rounded bg-slate-400" />
            </div>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="mt-6 block w-full max-w-3xl mx-auto accent-teal-500"
          />

          <ul className="mx-auto mt-6 grid max-w-3xl gap-2 text-center text-slate-700 sm:grid-cols-3">
            <li>See where every rupee is going</li>
            <li>Know your runway, not just today’s balance</li>
            <li>Turn monthly chaos into a repeatable rhythm</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
