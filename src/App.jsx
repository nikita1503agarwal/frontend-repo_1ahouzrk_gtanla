import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import TheShift from './components/TheShift';
import HowWeWork from './components/HowWeWork';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <WhatWeDo />
        <TheShift />
        <HowWeWork />
        <SocialProof />
        <Features />
        <CallToAction />
        <footer id="contact" className="border-t border-slate-200/70 bg-white/60">
          <div className="mx-auto max-w-7xl px-4 py-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-lg font-semibold">Clari.Fi</p>
                <p className="mt-2 text-sm text-slate-600">We turn your money into a story you can read, ride, and scale.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Explore</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  <li><a href="#what-we-do" className="hover:text-slate-900">How FaaS Works</a></li>
                  <li><a href="#social-proof" className="hover:text-slate-900">Who We Work With</a></li>
                  <li><a href="#the-shift" className="hover:text-slate-900">The Shift</a></li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Resources</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  <li><a href="#" className="hover:text-slate-900">Download sample MIS</a></li>
                  <li><a href="#" className="hover:text-slate-900">Security</a></li>
                  <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Stay in the loop</p>
                <form className="mt-2 flex gap-2">
                  <input type="email" placeholder="Work email" className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-teal-400 focus:outline-none" />
                  <button className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white">Join</button>
                </form>
                <div className="mt-3">
                  <a href="#" className="rounded-xl bg-[#00FFD1] px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:brightness-95">Book a Clarity Call</a>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-slate-200/70 pt-6 text-sm text-slate-500">
              <p>© {new Date().getFullYear()} Clari.Fi. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-slate-700">Privacy</a>
                <a href="#" className="hover:text-slate-700">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <StickyCTA />
    </div>
  );
}

export default App;
