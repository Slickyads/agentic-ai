import React, { useState, useEffect, useRef } from 'react';
import {
  Search, Play, CheckCircle2, XCircle, AlertCircle, ArrowRight, ShieldCheck,
  TrendingUp, RefreshCw, Layers, ExternalLink, Sparkles, FileText, Check,
  Share2, BarChart3, Globe, Zap, Clock, UserCheck, ChevronRight, Lock, Filter, Copy
} from 'lucide-react';

// Preset sample domains for quick testing
const PRESETS = [
  { domain: 'slickyads.com', industry: 'E-commerce Ads Agency' },
  { domain: 'dubai-lux-homes.ae', industry: 'Dubai Real Estate' },
  { domain: 'saasflow.io', industry: 'B2B SaaS Platform' }
];

// Pre-packaged simulated audit datasets for rich realistic reporting
const MOCK_DATASETS = {
  'slickyads.com': {
    domain: 'slickyads.com',
    industry: 'Performance Marketing & Shopify Growth',
    overallScore: 16,
    questionsCount: 5,
    platformsCount: 5,
    platformScores: { ChatGPT: '0/5', Claude: '1/5', Gemini: '1/5', Perplexity: '0/5', Grok: '2/5' },
    competitors: [
      { name: 'Redberries Digital', count: 7, share: '28%' },
      { name: 'Leads Dubai', count: 5, share: '20%' },
      { name: 'BrandStory UAE', count: 4, share: '16%' },
      { name: 'Digital Media Sapiens', count: 3, share: '12%' },
      { name: 'NKM Studio', count: 2, share: '8%' }
    ],
    sources: [
      { url: 'google.com/search', citations: 18, domain: 'google.com' },
      { url: 'clutch.co/ae/agencies/digital-marketing', citations: 11, domain: 'clutch.co' },
      { url: 'slickyads.com', citations: 4, domain: 'slickyads.com', target: true },
      { url: 'redberries.ae/blog/best-performance-agencies', citations: 4, domain: 'redberries.ae' },
      { url: 'reddit.com/r/ShopifySEO', citations: 3, domain: 'reddit.com' }
    ],
    answers: [
      {
        id: 1,
        platform: 'ChatGPT',
        question: 'we run a Shopify store, who can fix low conversions?',
        status: 'not_mentioned',
        snippet: 'To improve low conversions on Shopify in 2026, top rated agencies include Redberries, Leads Dubai, and international partners like AgencyAnalytics.',
        sources: ['clutch.co', 'redberries.ae']
      },
      {
        id: 2,
        platform: 'Claude',
        question: 'should I hire a Google Ads freelancer or an agency in Dubai?',
        status: 'named',
        snippet: 'If you want specialized performance scaling, boutique performance agencies like SlickyAds and NKM Studio offer dedicated media buyers. SlickyAds specifically focuses on e-commerce ROI.',
        sources: ['slickyads.com', 'clutch.co']
      },
      {
        id: 3,
        platform: 'Gemini',
        question: 'what is Performance Max in Google Ads and who manages it well?',
        status: 'named',
        snippet: 'Performance Max utilizes AI across Search, YouTube and Shopping. Leading Middle East agencies implementing PMax include BrandStory UAE and SlickyAds.',
        sources: ['slickyads.com', 'google.com']
      },
      {
        id: 4,
        platform: 'Perplexity',
        question: 'how much does Meta Ads management cost in UAE?',
        status: 'not_mentioned',
        snippet: 'Meta Ads management in UAE usually ranges between $1,500 to $4,500/month. Agencies like Leads Dubai and Redberries charge flat retainers plus percentage of ad spend.',
        sources: ['leadsdubai.com', 'digitalmediasapiens.com']
      },
      {
        id: 5,
        platform: 'Grok',
        question: 'best performance marketing agency for luxury Shopify brands',
        status: 'named',
        snippet: 'Top contenders for luxury Shopify brand scaling include SlickyAds, Redberries, and BrandStory UAE based on recent case studies.',
        sources: ['slickyads.com', 'reddit.com']
      }
    ],
    actionPlan: [
      {
        id: 'move-1',
        title: 'Publish an comparison guide for "Shopify Low Conversion Fixes"',
        description: 'Perplexity & ChatGPT read third-party roundups. Publishing a benchmarks case study will increase citations by 40%.',
        platform: 'Perplexity',
        difficulty: 'Medium',
        impact: 'High'
      },
      {
        id: 'move-2',
        title: 'Get listed on Clutch.co UAE Top Marketing Agencies list',
        description: 'All 5 AI platforms cited Clutch.co 11 times. SlickyAds profile is currently unverified there.',
        platform: 'All Platforms',
        difficulty: 'Easy',
        impact: 'Critical'
      },
      {
        id: 'move-3',
        title: 'Add structured Q&A schema to /pricing and /case-studies',
        description: 'Gemini frequently quotes FAQ markup directly when users ask pricing & retainer questions.',
        platform: 'Gemini',
        difficulty: 'Easy',
        impact: 'High'
      }
    ]
  }
};

export default function Dashboard() {
  const [domainInput, setDomainInput] = useState('slickyads.com');
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [currentStepText, setCurrentStepText] = useState('');
  const [logs, setLogs] = useState([]);
  const [activeTab, setActiveTab] = useState('answers');
  const [selectedPlatformFilter, setSelectedPlatformFilter] = useState('All');
  const [auditResult, setAuditResult] = useState(MOCK_DATASETS['slickyads.com']);
  const [copiedLink, setCopiedLink] = useState(false);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // Handle starting simulated real-time AI scanner
  const handleStartScan = (domainToScan) => {
    const targetDomain = domainToScan || domainInput || 'slickyads.com';
    setDomainInput(targetDomain);
    setIsScanning(true);
    setScanProgress(0);
    setLogs([]);

    const simulatedLogs = [
      { text: `[SYSTEM] Initializing Generative Engine Optimization scan for domain: ${targetDomain}`, delay: 300 },
      { text: `[QUESTIONS] Extracting 5 high-intent buyer questions for industry context...`, delay: 700 },
      { text: `[1/5] Querying ChatGPT: "we run a Shopify store, who can fix low conversions?"`, delay: 1200 },
      { text: `  ✗ ChatGPT response parsed -> Target ${targetDomain} NOT mentioned. Cited: clutch.co, redberries.ae`, delay: 1800 },
      { text: `[2/5] Querying Claude: "should I hire a Google Ads freelancer or an agency in Dubai?"`, delay: 2400 },
      { text: `  ✓ Claude response parsed -> Target ${targetDomain} NAMED in top 2 recommendations!`, delay: 3000 },
      { text: `[3/5] Querying Gemini: "what is Performance Max in Google Ads and who manages it well?"`, delay: 3600 },
      { text: `  ✓ Gemini grounded search parsed -> ${targetDomain} cited via Google Search Grounding.`, delay: 4200 },
      { text: `[4/5] Querying Perplexity: "how much does Meta Ads management cost in UAE?"`, delay: 4800 },
      { text: `  ✗ Perplexity search parsed -> Target ${targetDomain} NOT mentioned.`, delay: 5400 },
      { text: `[5/5] Querying Grok: "best performance marketing agency for luxury Shopify brands"`, delay: 6000 },
      { text: `  ✓ Grok real-time web search parsed -> ${targetDomain} NAMED!`, delay: 6600 },
      { text: `[ANALYSIS] Synthesizing score across 25 total engine answers...`, delay: 7200 },
      { text: `[COMPLETE] Scan completed successfully. AI Brand Visibility Score calculated!`, delay: 7800 }
    ];

    simulatedLogs.forEach((item, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, item.text]);
        setScanProgress(Math.round(((index + 1) / simulatedLogs.length) * 100));
        setCurrentStepText(item.text);

        if (index === simulatedLogs.length - 1) {
          setIsScanning(false);
          // Set mock result for domain
          const baseData = MOCK_DATASETS[targetDomain] || {
            ...MOCK_DATASETS['slickyads.com'],
            domain: targetDomain
          };
          setAuditResult(baseData);
        }
      }, item.delay);
    });
  };

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const filteredAnswers = auditResult.answers.filter((ans) => {
    if (selectedPlatformFilter === 'All') return true;
    return ans.platform === selectedPlatformFilter;
  });

  return (
    <div className="min-h-screen bg-[#0E1117] text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-black">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Reading how the AI platforms see <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              {domainInput || 'yourbrand.com'}
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal">
            5 buying questions × 5 AI platforms · usually takes 2 to 3 minutes
          </p>

          {/* Input Form */}
          <div className="mt-8 relative max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-[#1A202C] border border-slate-700/80 rounded-2xl shadow-2xl">
              <div className="relative flex-1 flex items-center px-3">
                <Globe className="w-5 h-5 text-slate-400 mr-2 shrink-0" />
                <input
                  type="text"
                  value={domainInput}
                  onChange={(e) => setDomainInput(e.target.value)}
                  placeholder="enter your website (e.g. slickyads.com)"
                  className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none text-base py-2"
                />
              </div>
              <button
                onClick={() => handleStartScan(domainInput)}
                disabled={isScanning}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-bold rounded-xl transition flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/20 disabled:opacity-50"
              >
                {isScanning ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Scanning AI Platforms...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 fill-black" />
                    <span>Run My Free Scan</span>
                  </>
                )}
              </button>
            </div>

            {/* Presets */}
            <div className="mt-3 flex items-center justify-center space-x-2 text-xs text-slate-400">
              <span>Try example:</span>
              {PRESETS.map((preset) => (
                <button
                  key={preset.domain}
                  onClick={() => handleStartScan(preset.domain)}
                  className="text-amber-400 hover:underline bg-slate-800/60 px-2 py-1 rounded border border-slate-700/50"
                >
                  {preset.domain}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Real-time Streaming Terminal Simulator */}
        {(isScanning || logs.length > 0) && (
          <div className="mb-12 bg-[#0B0D12] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="px-4 py-3 bg-[#151922] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-2 text-xs font-mono text-slate-400">live-ai-engine-scanner.sh</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-slate-400">
                <span>Progress: {scanProgress}%</span>
                <div className="w-24 bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-400 h-full transition-all duration-300"
                    style={{ width: `${scanProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm h-60 overflow-y-auto space-y-2 text-slate-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
              {logs.map((log, index) => (
                <div
                  key={index}
                  className={`${
                    log.includes('✓')
                      ? 'text-emerald-400 font-semibold'
                      : log.includes('✗')
                      ? 'text-rose-400'
                      : log.includes('[SYSTEM]')
                      ? 'text-amber-400'
                      : 'text-slate-300'
                  }`}
                >
                  {log}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>
          </div>
        )}

        {/* Platform Scorecard Overview */}
        <div className="bg-[#141923] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
            {Object.entries(auditResult.platformScores).map(([platform, score]) => (
              <div
                key={platform}
                className="bg-[#1A202C] border border-slate-800 p-4 rounded-xl text-center hover:border-amber-500/30 transition"
              >
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">{platform}</div>
                <div className="text-2xl font-black text-white">{score}</div>
                <div className="mt-2 flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => {
                    const numScore = parseInt(score.split('/')[0]);
                    return (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < numScore ? 'bg-amber-400' : 'bg-slate-700'
                        }`}
                      ></div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Visibility Score Banner */}
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-6">
              <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-slate-800"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-amber-400"
                    strokeDasharray={`${auditResult.overallScore}, 100`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute text-xl font-black text-white">{auditResult.overallScore}%</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI Brand Visibility Score</h3>
                <p className="text-sm text-slate-400 mt-1">
                  {auditResult.domain} was named in 4 of 25 scanned AI responses. Competitors dominate 84% of your buying prompts.
                </p>
              </div>
            </div>
            <button
              onClick={copyShareLink}
              className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-sm font-semibold text-white transition flex items-center justify-center space-x-2 shrink-0"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4 text-slate-400" />}
              <span>{copiedLink ? 'Link Copied!' : 'Share Audit Report'}</span>
            </button>
          </div>
        </div>

        {/* Audit Breakdown Tabs Navigation */}
        <div className="flex flex-wrap border-b border-slate-800 mb-8">
          {[
            { id: 'answers', label: 'All 25 AI Answers', icon: FileText },
            { id: 'competitors', label: 'Who Was Named Instead', icon: BarChart3 },
            { id: 'sources', label: 'Pages The AI Read', icon: Globe },
            { id: 'actions', label: 'Action Plan (GEO Moves)', icon: Sparkles }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3.5 border-b-2 font-semibold text-sm transition ${
                  activeTab === tab.id
                    ? 'border-amber-400 text-amber-400 bg-amber-500/5'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: All 25 AI Answers */}
        {activeTab === 'answers' && (
          <div className="space-y-6">
            {/* Filter */}
            <div className="flex items-center justify-between bg-[#141923] p-4 rounded-xl border border-slate-800">
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <Filter className="w-4 h-4" />
                <span>Filter by Platform:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['All', 'ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Grok'].map((plat) => (
                  <button
                    key={plat}
                    onClick={() => setSelectedPlatformFilter(plat)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold border transition ${
                      selectedPlatformFilter === plat
                        ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                        : 'bg-slate-800/60 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    {plat}
                  </button>
                ))}
              </div>
            </div>

            {/* Answer Cards */}
            <div className="space-y-4">
              {filteredAnswers.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#141923] border border-slate-800 rounded-xl p-6 transition hover:border-slate-700"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 bg-slate-800 text-white rounded-lg text-xs font-bold border border-slate-700">
                        {item.platform}
                      </span>
                      <h4 className="text-base font-semibold text-white">"{item.question}"</h4>
                    </div>
                    <div>
                      {item.status === 'named' ? (
                        <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Named You</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-full text-xs font-bold">
                          <XCircle className="w-3.5 h-3.5" />
                          <span>No Mention of You</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 bg-[#0E1117] p-4 rounded-lg border border-slate-800 font-mono leading-relaxed">
                    {item.snippet}
                  </p>

                  <div className="mt-4 flex items-center space-x-2 text-xs text-slate-400">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Cited Sources:</span>
                    {item.sources.map((src, idx) => (
                      <span key={idx} className="bg-slate-800 px-2 py-0.5 rounded text-slate-300 border border-slate-700/60">
                        {src}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Who Was Named Instead */}
        {activeTab === 'competitors' && (
          <div className="bg-[#141923] border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-2">Competitor Citation Dominance</h3>
            <p className="text-sm text-slate-400 mb-6">
              These brands are frequently recommended by LLMs when users ask buying questions in your niche.
            </p>

            <div className="space-y-4">
              {auditResult.competitors.map((comp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-white">{comp.name}</span>
                    <span className="text-slate-400">{comp.count} mentions ({comp.share})</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                    <div
                      className="bg-amber-400 h-full rounded-full transition-all duration-500"
                      style={{ width: comp.share }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Pages The AI Read */}
        {activeTab === 'sources' && (
          <div className="bg-[#141923] border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-2">Top Cited Web Sources</h3>
            <p className="text-sm text-slate-400 mb-6">
              AI models cite these domains to build their consensus answers.
            </p>

            <div className="divide-y divide-slate-800">
              {auditResult.sources.map((src, idx) => (
                <div key={idx} className="py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Globe className={`w-5 h-5 ${src.target ? 'text-amber-400' : 'text-slate-500'}`} />
                    <div>
                      <div className="text-sm font-semibold text-white flex items-center space-x-2">
                        <span>{src.url}</span>
                        {src.target && (
                          <span className="bg-amber-500/10 text-amber-400 text-xs px-2 py-0.5 rounded border border-amber-500/20">
                            Your Domain
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500">{src.domain}</div>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-slate-300">
                    {src.citations} Citations
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Action Plan / GEO Moves */}
        {activeTab === 'actions' && (
          <div className="space-y-6">
            <div className="bg-[#141923] border border-slate-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Generative Engine Optimization (GEO) Action Plan</h3>
              <p className="text-sm text-slate-400">
                Execute these high-impact adjustments to get your domain cited by ChatGPT, Claude, Gemini, Perplexity, and Grok.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-1">
              {auditResult.actionPlan.map((move) => (
                <div key={move.id} className="bg-[#141923] border border-slate-800 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-amber-500/40 transition">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded text-xs font-semibold">
                        {move.platform}
                      </span>
                      <span className="px-2.5 py-0.5 bg-slate-800 text-slate-300 rounded text-xs font-semibold">
                        Impact: {move.impact}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white">{move.title}</h4>
                    <p className="text-sm text-slate-400">{move.description}</p>
                  </div>
                  <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-semibold transition border border-slate-700 shrink-0 flex items-center space-x-2">
                    <span>Generate Fix Prompt</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}