import { LineChart, ShieldCheck, Building2, BarChart3, Sparkles, TrendingUp, Wallet } from 'lucide-react';

const features = [
  {
    title: 'Cash Flow Intelligence',
    description: 'Real-time visibility with automated reconciliation and anomaly detection.',
    icon: Wallet,
  },
  {
    title: 'Forecasting & Scenarios',
    description: 'AI-assisted forecasts with what-if analysis for hiring, pricing, and churn.',
    icon: TrendingUp,
  },
  {
    title: 'Board-ready Reports',
    description: 'One-click management reports with beautiful visuals and drilldowns.',
    icon: BarChart3,
  },
  {
    title: 'Bank-grade Security',
    description: 'SOC2 controls, SSO/SAML, and end-to-end encryption across the stack.',
    icon: ShieldCheck,
  },
  {
    title: 'ERP & Bank Integrations',
    description: 'Prebuilt connectors for QuickBooks, Xero, NetSuite, and 12,000+ banks.',
    icon: Building2,
  },
  {
    title: 'Decision Insights',
    description: 'Smart alerts that surface risks and opportunities before they matter.',
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_10%_10%,rgba(59,130,246,0.10),transparent),radial-gradient(40%_40%_at_90%_20%,rgba(14,165,233,0.10),transparent)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything your finance team needs</h2>
          <p className="mt-3 text-lg text-slate-600">Powerful features packaged in a clean, intuitive interface that teams actually love.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:border-slate-300 hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1.5 text-slate-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
