import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './index.tsx';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import Privacy from './pages/Privacy';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0E1117] text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-black">
        {/* Header Bar */}
        <header className="border-b border-slate-800 bg-[#141923]/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-black font-extrabold text-xl shadow-lg shadow-amber-500/20">
                G
              </div>
              <div>
                <Link to="/" className="font-bold text-lg text-white tracking-tight hover:text-amber-400 transition-colors">getintelligence<span className="text-amber-400">.online</span></Link>
                <span className="ml-2 px-2 py-0.5 text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full">
                  GEO Engine v2.4
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm font-medium">
              <Link to="/how-it-works" className="hidden sm:inline-flex text-slate-400 hover:text-white transition">How it works</Link>
              <Link to="/pricing" className="hidden sm:inline-flex text-slate-400 hover:text-white transition">Pricing</Link>
              <Link to="/privacy" className="hidden sm:inline-flex text-slate-400 hover:text-white transition">Privacy</Link>
              <Link to="/about" className="hidden sm:inline-flex text-slate-400 hover:text-white transition">About</Link>
              <Link to="/" className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-semibold transition shadow-md shadow-amber-500/20">
                Free Scan
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800 bg-[#141923] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-slate-400 text-sm">
                © {new Date().getFullYear()} getintelligence.online - All rights reserved
              </div>
              <div className="text-slate-400 text-sm">
                Powered by <a href="https://services.slickymedia.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">Slicky Media</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}