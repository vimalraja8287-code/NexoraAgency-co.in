import { ArrowRight, Check, TrendingUp, Code2, Smartphone, Bot, Layers, BarChart3 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { whatsappUrl } from "@/lib/whatsapp";

export default function HeroSection() {
  return (
    <section className="relative pt-32 lg:pt-36 pb-20 overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Proposal & Status Badge */}
        <div className="flex justify-between items-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-primary border border-cyan-500/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            FULL-STACK ENGINEERING & DIGITAL GROWTH AGENCY
          </div>
          <span className="text-xs text-muted-foreground hidden sm:block font-mono">
            NEXORAAGENCY.COM
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-primary flex items-center">
                <span className="pdf-dash" />
                WEB APPS · MOBILE APPS · AI · DIGITAL MARKETING
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold font-heading leading-[1.1] text-white tracking-tight">
                We build web & mobile apps and scale brands with{" "}
                <span className="gradient-text-cyan">AI & marketing.</span>
              </h1>

              <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl pt-1">
                Full-stack web applications, dynamic portals, native-feel mobile apps, site redesigns, AI agent workflows, SEO, Meta Ads, and digital branding — scoped under custom proposals.
              </p>
            </div>

            {/* Check Tag Pills */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-white">
                <Check size={14} className="text-primary" /> FULL-STACK WEB & MOBILE
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-white">
                <Check size={14} className="text-primary" /> DYNAMIC WEB PAGES
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-white">
                <Check size={14} className="text-primary" /> AI & DIGITAL GROWTH
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/"
                hash="services"
                className="gradient-primary text-primary-foreground px-8 py-4 rounded-xl text-sm font-bold shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                Explore Developer Services
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={whatsappUrl("Hi Nexora Agency, I'd like to discuss a web app / mobile app project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card hover:border-primary/50 text-white px-7 py-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2"
              >
                Book Free Tech Consultation
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Developer Interactive Code & Growth Visual */}
          <div className="lg:col-span-5">
            <div className="space-y-5">
              {/* Developer Code & Architecture Mockup */}
              <div className="glass-card rounded-3xl p-6 border border-white/15 relative overflow-hidden shadow-2xl space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-0.5 rounded-full">
                    nexora.engine v2.0
                  </span>
                </div>

                <div className="font-mono text-xs text-slate-300 space-y-2 bg-black/40 p-4 rounded-2xl border border-white/10">
                  <div className="text-slate-500">// Full-Stack Architecture</div>
                  <div>
                    <span className="text-purple-400">const</span> <span className="text-cyan-300">stack</span> = &#123;
                  </div>
                  <div className="pl-4 text-emerald-300">
                    web: <span className="text-amber-300">"Dynamic Pages & Web Apps"</span>,
                  </div>
                  <div className="pl-4 text-emerald-300">
                    mobile: <span className="text-amber-300">"iOS & Android Platforms"</span>,
                  </div>
                  <div className="pl-4 text-emerald-300">
                    ai: <span className="text-amber-300">"Autonomous LLM Agents"</span>,
                  </div>
                  <div className="pl-4 text-emerald-300">
                    growth: <span className="text-amber-300">"SEO & Meta Ads Engine"</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <div className="text-sm font-bold text-white font-heading">Production SLA</div>
                    <div className="text-xs text-muted-foreground">High-performance architecture</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-primary flex items-center justify-end gap-1">
                      <TrendingUp size={16} /> 99.9%
                    </div>
                    <div className="text-xs text-muted-foreground">Optimization Rate</div>
                  </div>
                </div>
              </div>

              {/* Developer Pillars Badges */}
              <div className="grid grid-cols-3 gap-3">
                <div className="glass-card rounded-2xl p-3.5 text-center space-y-1">
                  <Code2 size={20} className="text-primary mx-auto" />
                  <div className="text-[11px] font-bold text-white">Web Apps</div>
                  <div className="text-[9px] text-slate-400">Dynamic UI</div>
                </div>
                <div className="glass-card rounded-2xl p-3.5 text-center space-y-1">
                  <Smartphone size={20} className="text-cyan-400 mx-auto" />
                  <div className="text-[11px] font-bold text-white">Mobile Apps</div>
                  <div className="text-[9px] text-slate-400">iOS & Android</div>
                </div>
                <div className="glass-card rounded-2xl p-3.5 text-center space-y-1">
                  <Bot size={20} className="text-blue-400 mx-auto" />
                  <div className="text-[11px] font-bold text-white">AI Workflows</div>
                  <div className="text-[9px] text-slate-400">Smart Agents</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Stats Row */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
            <div className="cyan-icon-btn shrink-0">
              <Code2 size={22} />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-primary">FULL-STACK ENGINE</div>
              <div className="text-2xl font-extrabold font-heading text-white">Web & Mobile</div>
              <div className="text-xs text-muted-foreground">Dynamic apps, portals & redesigns</div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
            <div className="cyan-icon-btn shrink-0">
              <Bot size={22} />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-primary">AI INTEGRATION</div>
              <div className="text-2xl font-extrabold font-heading text-white">Autonomous AI</div>
              <div className="text-xs text-muted-foreground">LLMs, Chatbots & Automation</div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
            <div className="cyan-icon-btn shrink-0">
              <BarChart3 size={22} />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-primary">GROWTH MARKETING</div>
              <div className="text-2xl font-extrabold font-heading text-white">SEO & Paid Ads</div>
              <div className="text-xs text-muted-foreground">Full-funnel lead generation</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
