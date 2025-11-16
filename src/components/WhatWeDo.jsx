import { Wallet, Target, BarChart3, CalendarClock } from 'lucide-react';

const pillars = [
  {
    title: 'Daily Control',
    desc: 'Reconciliations, inflows, outflows — always up to date.',
    icon: Wallet,
  },
  {
    title: 'Budget & Cash Discipline',
    desc: 'Simple, living budgets and a clear view of cash runway.',
    icon: CalendarClock,
  },
  {
    title: 'Reporting That Actually Helps',
    desc: 'Clean MIS, on-time reports, and insights you can act on.',
    icon: BarChart3,
  },
  {
    title: 'Forward-Looking Strategy',
    desc: 'Forecasts and what-if scenarios that support big decisions.',
    icon: Target,
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative py-24">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_10%_0%,rgba(0,255,209,0.10),transparent)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">We Run Your Finance. You Run Your Business.</h2>
          <p className="mt-3 text-lg text-slate-600">
            Clari.Fi runs your entire finance function — end to end. We handle daily reconciliations, payment tracking, budgets, reports, and forecasts through structured systems built for scale. You get clarity, control, and consistency without hiring a full in-house finance team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-slate-200/70 bg-white/75 p-6 shadow-sm backdrop-blur transition hover:border-slate-300 hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A0F1F] text-[#00FFD1] shadow-lg">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-1.5 text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
