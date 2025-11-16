import { useState } from 'react';
import { Menu, X, Shield, LineChart, CreditCard, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/70 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#" className="group inline-flex items-center gap-2">
              <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm leading-none text-slate-500">Nova</p>
                <p className="text-lg font-semibold leading-tight">Finance</p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 text-sm md:flex">
              <a href="#solutions" className="text-slate-600 transition hover:text-slate-900">Solutions</a>
              <a href="#services" className="text-slate-600 transition hover:text-slate-900">Services</a>
              <a href="#why" className="text-slate-600 transition hover:text-slate-900">Why Us</a>
              <a href="#contact" className="text-slate-600 transition hover:text-slate-900">Contact</a>
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a href="#contact" className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white">Talk to sales</a>
              <a href="#get-started" className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
                Get started <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 md:hidden">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="grid gap-2 border-t border-slate-200/60 p-3 md:hidden">
              <a href="#solutions" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-white">Solutions</a>
              <a href="#services" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-white">Services</a>
              <a href="#why" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-white">Why Us</a>
              <a href="#contact" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-white">Contact</a>
              <a href="#get-started" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20">Get started</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
