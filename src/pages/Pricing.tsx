import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-16">
      <header className="text-center mb-16">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-black font-extrabold text-xl mx-auto mb-4 shadow-lg shadow-amber-500/20">
          G
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">Pricing</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Simple, transparent pricing for AI brand visibility audits.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Free */}
        <div className="bg-[#141923] border border-slate-800 rounded-2xl p-8 text-center flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2">Free</h3>
          <div className="text-4xl font-black text-white mb-6">$0</div>
          <ul className="text-slate-400 text-sm space-y-3 mb-8 flex-1">
            <li className="flex items-center justify-center space-x-2">
              <span className="text-emerald-400">✓</span> Single domain scan
            </li>
            <li className="flex items-center justify-center space-x-2">
              <span className="text-emerald-400">✓</span> 5 AI platforms analyzed
            </li>
            <li className="flex items-center justify-center space-x-2">
              <span className="text-emerald-400">✓</span> AI Brand Visibility Score
            </li>
            <li className="flex items-center justify-center space-x-2 text-rose-400">✗ Competitor analysis</li>
            <li className="flex items-center justify-center space-x-2 text-rose-400">✗ GEO action plan</li>
          </ul>
          <Link to="/" className="px-6 py-2 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 transition">
            Start free scan
          </Link>
        </div>

        {/* Pro */}
        <div className="bg-[#141923] border border-amber-500/30 rounded-2xl p-8 text-center flex flex-col relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
          <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
          <div className="text-4xl font-black text-white mb-6">$49<span className="text-sm text-slate-400 font-normal">/mo</span></div>
          <ul className="text-slate-400 text-sm space-y-3 mb-8 flex-1">
            <li className="flex items-center justify-center space-x-2">
              <span className="text-emerald-400">✓</span> Up to 5 domain scans
            </li>
            <li className="flex items-center justify-center space-x-2">
              <span className="text-emerald-400">✓</span> 5 AI platforms analyzed
            </li>
            <li className="flex items-center justify-center space-x-2">
              <span className="text-emerald-400">✓</span> AI Brand Visibility Score
            </li>
            <li className="flex items-center justify-center space-x-2">
              <span className="text-emerald-400">✓</span> Competitor analysis
            </li>
            <li className="flex items-center justify-center space-x-2">
              <span className="text-emerald-400">✓</span> GEO action plan
            </li>
          </ul>
          <Link to="/" className="px-6 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold transition shadow-md shadow-amber-500/20">
            Get started
          </Link>
        </div>

        {/* Enterprise */}
        <div className="bg-[#141923] border border-slate-800 rounded-2xl p-8 text-center flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
          <div className="text-4xl font-black text-white mb-6">Custom</div>
          <ul className="text-slate-400 text-sm space-y-3 mb-8 flex-1">
            <li className="flex items-center justify-center space-x-2">
              <span className="text-emerald-400">✓</span> Unlimited domain scans
            </li>
            <li className="flex items-center justify-center space-x-2">
              <span className="text-emerald-400">✓</span> All AI platforms
            </li>
            <li className="flex items-center justify-center space-x-2">
              <span className="text-emerald-400">✓</span> AI Brand Visibility Score
            </li>
            <li className="flex items-center justify-center space-x-2">
              <span className="text-emerald-400">✓</span> Competitor analysis
            </li>
            <li className="flex items-center justify-center space-x-2">
              <span className="text-emerald-400">✓</span> GEO action plan
            </li>
            <li className="flex items-center justify-center space-x-2">
              <span className="text-emerald-400">✓</span> Dedicated support
            </li>
          </ul>
          <button className="px-6 py-2 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 transition">
            Contact sales
          </button>
        </div>
      </div>

      <div className="mt-16 bg-[#141923] border border-slate-800 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-white mb-4">Frequently asked questions</h2>
        <div className="max-w-xl mx-auto space-y-4 text-left">
          <div className="border-b border-slate-800 pb-4 last:border-0 last:pb-0">
            <h4 className="text-white font-semibold mb-2">How does the AI visibility audit work?</h4>
            <p className="text-slate-400 text-sm">
              We query five major AI platforms (ChatGPT, Claude, Gemini, Perplexity, Grok) with 5 high-intent buyer questions about your niche and track whether your domain is named in their responses.
            </p>
          </div>
          <div className="border-b border-slate-800 pb-4 last:border-0 last:pb-0">
            <h4 className="text-white font-semibold mb-2">Can I upgrade or cancel anytime?</h4>
            <p className="text-slate-400 text-sm">
              Yes. You can upgrade or cancel your Pro plan at any time from your account settings.
            </p>
          </div>
          <div className="border-b border-slate-800 pb-4 last:border-0 last:pb-0">
            <h4 className="text-white font-semibold mb-2">How often should I run an audit?</h4>
            <p className="text-slate-400 text-sm">
              We recommend running an audit monthly to track changes in your AI brand visibility as models and the web evolve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}