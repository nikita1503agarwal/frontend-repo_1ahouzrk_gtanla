export default function SocialProof() {
  const logos = ['Acme', 'Orbit', 'Lambda', 'Pioneer', 'Vertex', 'Nimbus'];
  const quotes = [
    'We finally know our cash position before payroll hits.',
    'I don’t open Excel anymore. I open Clari.Fi.',
    'Reports arrive on time — every time.',
  ];

  return (
    <section id="social-proof" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Trusted by Businesses That Build Boldly.</h2>
          <p className="mt-3 text-lg text-slate-600">From lean startups to scaling SMEs, Clari.Fi supports builders who want their money moves to match their ambition.</p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
          <div className="animate-[scroll_30s_linear_infinite] whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            {logos.concat(logos).map((name, i) => (
              <span key={i} className="mx-6 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {quotes.map((q) => (
            <div key={q} className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm">“{q}”</div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm text-slate-600">
          <div>₹50+ Cr tracked across clients</div>
          <div>120+ monthly reports delivered</div>
          <div>600+ founder hours freed</div>
        </div>
      </div>

      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
