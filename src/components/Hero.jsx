import Spline from '@splinetool/react-spline';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/90" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-4">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-white/70 px-3 py-1 text-xs font-medium text-blue-700 shadow backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            New: AI-powered financial insights
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-6xl">
            Modern financial management for growing businesses
          </h1>
          <p className="mt-4 text-lg text-slate-700 sm:text-xl">
            Streamline cash flow, forecasting, and reporting with one beautiful, secure platform.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#get-started" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
              Get started free
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:border-slate-300">
              View live demo
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 ring-2 ring-white" />
              ))}
            </div>
            <p className="text-sm text-slate-600">
              Trusted by 1,200+ finance teams • Rated 4.9/5
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
