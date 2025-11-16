import { useState } from 'react';
import { Layers, BarChart3, RefreshCw, FilePieChart, PiggyBank, Sparkles } from 'lucide-react';

const faces = [
  { title: 'Budgeting', desc: 'From scattered spends to intentional allocations.', icon: Layers },
  { title: 'Forecasting', desc: 'See 3–6 months ahead, not 3–6 days.', icon: BarChart3 },
  { title: 'Reconciliation', desc: 'No more mystery transactions or mismatched books.', icon: RefreshCw },
  { title: 'Reporting', desc: 'MIS and dashboards that anyone can read.', icon: FilePieChart },
  { title: 'Cash Mgmt', desc: 'Buffer, reserves, and safety nets — built-in.', icon: PiggyBank },
  { title: 'Strategy', desc: 'We’re on your side of the table for big calls.', icon: Sparkles },
];

export default function HowWeWork() {
  const [index, setIndex] = useState(0);

  return (
    <section id="how-we-work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">More Than a Service. A Finance Partner That Thinks Like You.</h2>
          <p className="mt-3 text-lg text-slate-600">We work as your internal finance team — proactive, fast, and fully synced with your goals.</p>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          <div className="relative mx-auto h-80 w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-56 w-56 animate-[spin_16s_linear_infinite] rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-1">
                <div className="grid h-full w-full grid-cols-2 gap-1 rounded-2xl bg-slate-900 p-1">
                  {faces.map((f, i) => (
                    <div key={f.title} className={`flex items-center justify-center rounded-xl border border-slate-700/60 bg-slate-800/60 p-4 text-center ${i === index ? 'ring-2 ring-[#00FFD1]' : ''}`}>
                      <div className="text-[#00FFD1]">
                        <f.icon className="mx-auto mb-1 h-5 w-5" />
                        <p className="text-xs font-semibold text-white">{f.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{faces[index].title}</h3>
              <p className="mt-2 text-slate-600">{faces[index].desc}</p>
              <p className="mt-3 text-sm text-slate-500">Result: Brought monthly cash visibility from T+30 to T+3 days.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {faces.map((f, i) => (
                  <button key={f.title} onClick={() => setIndex(i)} className={`rounded-full border px-3 py-1 text-sm ${i === index ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}`}>
                    {f.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="#contact" className="inline-block rounded-xl bg-[#00FFD1] px-6 py-3 font-semibold text-slate-900 shadow hover:brightness-95">Meet Your Finance Team</a>
        </div>
      </div>
    </section>
  );
}
