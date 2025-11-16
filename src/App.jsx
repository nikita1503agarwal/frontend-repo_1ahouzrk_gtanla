import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Features />
        <CallToAction />
        <footer id="contact" className="border-t border-slate-200/70 bg-white/60">
          <div className="mx-auto max-w-7xl px-4 py-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-lg font-semibold">Nova Finance</p>
                <p className="mt-2 text-sm text-slate-600">Financial management for modern businesses.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Product</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  <li><a href="#solutions" className="hover:text-slate-900">Features</a></li>
                  <li><a href="#" className="hover:text-slate-900">Security</a></li>
                  <li><a href="#" className="hover:text-slate-900">Integrations</a></li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Company</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  <li><a href="#" className="hover:text-slate-900">About</a></li>
                  <li><a href="#" className="hover:text-slate-900">Careers</a></li>
                  <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Subscribe</p>
                <form className="mt-2 flex gap-2">
                  <input type="email" placeholder="Work email" className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-blue-400 focus:outline-none" />
                  <button className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white">Join</button>
                </form>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-slate-200/70 pt-6 text-sm text-slate-500">
              <p>© {new Date().getFullYear()} Nova Finance. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-slate-700">Privacy</a>
                <a href="#" className="hover:text-slate-700">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
