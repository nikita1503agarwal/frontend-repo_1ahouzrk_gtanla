import { ArrowRight, Shield } from 'lucide-react';

export default function CallToAction() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.10),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4">
        <div className="overflow-hidden rounded-3xl border border-blue-200/50 bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-xl">
          <div className="rounded-3xl bg-white/90 p-10 text-center backdrop-blur">
            <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-blue-200/60 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              <Shield className="h-3.5 w-3.5" /> SOC2, GDPR, ISO 27001
            </div>
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Ready to modernize your finance stack?</h3>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">Join thousands of growing companies using Nova Finance to run leaner, smarter operations.</p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
                Request a demo <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
              </a>
              <a href="#" className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-slate-300">Explore pricing</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
