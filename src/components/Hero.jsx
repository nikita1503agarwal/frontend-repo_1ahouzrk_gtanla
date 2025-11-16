import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/75 via-white/40 to-white/90" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-4">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200/60 bg-white/70 px-3 py-1 text-xs font-medium text-teal-700 shadow backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-teal-500" />
            Built for founders who never want to ‘wing it’ with money again
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-6xl">
            You’ve Optimized Everything Else. It’s Time Your Finances Caught Up.
          </h1>
          <p className="mt-4 text-lg text-slate-700 sm:text-xl">
            Not your typical accountants or bookkeeping lads — Clari.Fi provides <strong>Finance as a Service (FaaS)</strong>.
            We build structured financial systems that track, report, and forecast seamlessly — giving you real-time control, clarity, and confidence to scale sustainably.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#get-started" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#00FFD1] px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-teal-300/40 transition hover:brightness-95">
              Activate FaaS for Your Business
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#what-we-do" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:border-slate-300">
              See how it works ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
