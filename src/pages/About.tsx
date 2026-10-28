import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-16">
      <div className="bg-[#141923] border border-slate-800 rounded-2xl p-8">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-black font-extrabold text-xl mb-6 shadow-lg shadow-amber-500/20">
          G
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">About Us</h1>
        <p className="text-lg text-slate-400 max-w-2xl mb-8">
          We help brands understand how they show up in AI-generated answers — and how to get cited more often.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white mb-4">Why AI visibility matters</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              When users ask ChatGPT, Claude, Gemini, Perplexity, or Grok for recommendations in your niche, those answers are increasingly shaping purchase decisions. If your brand isn't mentioned, you're invisible to a growing share of buyers.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              We built getintelligence.online to give every brand a clear view of their AI presence — what's being said, who's being named instead, and exactly what to do about it.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white mb-4">Our mission</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              To make AI brand visibility measurable, actionable, and accessible — so businesses of any size can compete in the generative search era.
            </p>

            <div className="bg-[#1A202C] border border-slate-800 rounded-xl p-6 mt-8">
              <h3 className="text-white font-semibold mb-4">Powered by Slicky Media</h3>
              <p className="text-slate-400 text-sm mb-4">
                A digital media company focused on performance marketing, AI-driven growth, and brand visibility engineering.
              </p>
              <a
                href="https://services.slickymedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium"
              >
                Visit services.slickymedia.com
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.5 9.5l-4.5 4.5m0 0l-4.5-4.5m4.5 4.5h9" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} getintelligence.online - Powered by <a href="https://services.slickymedia.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">Slicky Media</a>
          </p>
        </div>
      </div>
    </div>
  );
}