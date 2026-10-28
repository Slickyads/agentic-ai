import React from 'react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-16">
      <header className="text-center mb-16">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-black font-extrabold text-xl mx-auto mb-4 shadow-lg shadow-amber-500/20">
          G
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">How it works</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Get an instant AI brand visibility report in three simple steps.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="bg-[#141923] border border-slate-800 rounded-2xl p-8 text-center hover:border-amber-500/40 transition">
          <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-6 text-amber-400 font-bold text-xl">1</div>
          <h3 className="text-xl font-bold text-white mb-4">Enter your domain</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Provide your website URL. We'll scan how ChatGPT, Claude, Gemini, Perplexity, and Grok perceive your brand across 25 high-intent buyer questions.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-[#141923] border border-slate-800 rounded-2xl p-8 text-center hover:border-amber-500/40 transition">
          <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-6 text-amber-400 font-bold text-xl">2</div>
          <h3 className="text-xl font-bold text-white mb-4">Run the AI scan</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Our GEO engine queries five major AI platforms simultaneously, tracking whether your domain is named or cited in each response — and who your competitors are instead.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-[#141923] border border-slate-800 rounded-2xl p-8 text-center hover:border-amber-500/40 transition">
          <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-6 text-amber-400 font-bold text-xl">3</div>
          <h3 className="text-xl font-bold text-white mb-4">Get your visibility score</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Receive a detailed audit report with your AI Brand Visibility Score, competitor analysis, cited sources, and a prioritized action plan to improve your AI mentions.
          </p>
        </div>
      </div>

      {/* What you get */}
      <div className="mt-16 bg-[#141923] border border-slate-800 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">What your audit report includes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <span className="text-amber-400 w-5 h-5 mt-1">✓</span>
            <div>
              <h4 className="text-white font-semibold mb-1">AI Brand Visibility Score</h4>
              <p className="text-sm text-slate-400">An overall score showing how often your brand is cited across all five AI platforms.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-amber-400 w-5 h-5 mt-1">✓</span>
            <div>
              <h4 className="text-white font-semibold mb-1">Platform Breakdown</h4>
              <p className="text-sm text-slate-400">Per-platform scores for ChatGPT, Claude, Gemini, Perplexity, and Grok.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-amber-400 w-5 h-5 mt-1">✓</span>
            <div>
              <h4 className="text-white font-semibold mb-1">Competitor Analysis</h4>
              <p className="text-sm text-slate-400">See which brands are being recommended instead of yours, and their citation dominance.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-amber-400 w-5 h-5 mt-1">✓</span>
            <div>
              <h4 className="text-white font-semibold mb-1">Cited Sources</h4>
              <p className="text-sm text-slate-400">A list of web pages that AI platforms cite when answering questions about your niche.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-amber-400 w-5 h-5 mt-1">✓</span>
            <div>
              <h4 className="text-white font-semibold mb-1">GEO Action Plan</h4>
              <p className="text-sm text-slate-400">Prioritized recommendations to get your domain cited more often by AI engines.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <Link to="/" className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-bold rounded-xl transition shadow-lg shadow-amber-500/20">
          <span>Run your free scan</span>
          <svg className="w-5 h-5 fill-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </Link>
      </div>
    </div>
  );
}