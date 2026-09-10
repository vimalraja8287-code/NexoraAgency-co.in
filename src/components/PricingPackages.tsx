import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { Check, Sparkles, ArrowRight, Star, Code2, Smartphone, Bot } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export default function PricingPackages() {
  return (
    <section id="packages" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedSection className="mx-auto max-w-7xl">
        
        {/* Custom Software Development Hero Box */}
        <AnimatedItem className="glass-strong rounded-3xl p-8 sm:p-10 border-2 border-cyan-500/40 bg-gradient-to-r from-blue-950/90 via-slate-950/90 to-blue-950/90 shadow-2xl mb-16 relative overflow-hidden">
          <div className="ambient-glow-purple top-1/2 left-1/4 -translate-y-1/2 opacity-50" />
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-primary/20 text-primary border border-primary/30">
                <Code2 size={14} /> CUSTOM SOFTWARE SCOPE
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
                Building a Custom Web App, Mobile App, or AI System?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                For dedicated software projects (dynamic web apps, iOS/Android mobile apps, site redesigns, or AI agent integrations), we provide milestone-based tech proposals tailored to your architecture and timeline.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={whatsappUrl("Hi Nexora Agency, I need a custom proposal for a Web / Mobile App project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-primary text-primary-foreground px-6 py-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 hover:opacity-95 transition-all"
              >
                Request Software Proposal <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </AnimatedItem>

        <AnimatedItem className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-primary flex items-center justify-center mb-3">
            <span className="pdf-dash" />
            MONTHLY BRANDING & MARKETING PACKAGES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Transparent <span className="gradient-text-cyan">Monthly Growth Plans</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Choose the monthly package that fits your personal brand or business — built for consistent content production and paid-ad acquisition.
          </p>
        </AnimatedItem>

        {/* Pricing Cards Grid matching Pages 7, 8, 9 of PDF */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-16">
          
          {/* PACKAGE 1: STARTER (₹8,000/mo) */}
          <AnimatedItem className="glass-card rounded-3xl p-8 relative flex flex-col justify-between border border-white/15">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-white/10 text-slate-200 border border-white/10">
                  STARTER
                </span>
                <span className="text-xs text-muted-foreground font-mono">01 / 03</span>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold font-heading text-white">₹8,000</span>
                  <span className="text-sm text-slate-400 font-medium">/ month</span>
                </div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Suitable for small businesses, working professionals and brands just beginning their content journey.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-white/5 border border-white/10 text-slate-300">SMALL BUSINESSES</span>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-white/5 border border-white/10 text-slate-300">PROFESSIONALS</span>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-white/5 border border-white/10 text-slate-300">BEGINNERS</span>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-3 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">WHAT'S INCLUDED</div>
                {[
                  "8 Professional Reels",
                  "4 Shoot Sessions",
                  "Basic Video Editing",
                  "Basic Thumbnail Design",
                  "Script Assistance",
                  "Caption Writing",
                  "Content Writing",
                  "Hashtag Research",
                  "Instagram Posting Support",
                  "Monthly Content Calendar",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <Check size={14} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={whatsappUrl("Hi Nexora Agency, I want to get started with the Starter Package (₹8,000/mo).")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full glass-card hover:border-primary/50 text-white py-3.5 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 transition-all"
            >
              Select Starter Package <ArrowRight size={14} />
            </a>
          </AnimatedItem>

          {/* PACKAGE 2: GROWTH (₹15,000/mo) - MOST POPULAR */}
          <AnimatedItem className="glass-card rounded-3xl p-8 relative flex flex-col justify-between border-2 border-primary bg-gradient-to-b from-blue-950/70 via-slate-950/80 to-blue-950/70 shadow-2xl scale-105 z-10">
            {/* Most Popular Top Ribbon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-extrabold flex items-center gap-1.5 shadow-lg">
              <Star size={13} className="fill-white" /> MOST POPULAR
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 pt-2">
                <span className="text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-primary border border-cyan-500/30">
                  GROWTH
                </span>
                <span className="text-xs text-primary font-mono font-bold">02 / 03</span>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold font-heading text-white">₹15,000</span>
                  <span className="text-sm text-cyan-300 font-medium">/ month</span>
                </div>
                <p className="text-xs text-slate-200 mt-2 leading-relaxed">
                  The complete package — content, management and Meta Ads working together every month.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 space-y-1 mb-6 text-xs text-cyan-200">
                <div className="font-bold flex items-center gap-1.5">
                  <Sparkles size={13} className="text-primary" /> 17 Deliverables Included
                </div>
                <div>Meta Ads campaign managed monthly</div>
                <div>Dedicated WhatsApp support</div>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-3 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">WHAT'S INCLUDED</div>
                {[
                  "16 Professional Reels",
                  "4 Shoot Sessions",
                  "Premium Video Editing",
                  "Premium Thumbnail Design",
                  "Professional Script Writing",
                  "Content Writing & Captions",
                  "Instagram & Facebook Management",
                  "Monthly Content Calendar & Hashtags",
                  "Basic Meta Ads Setup & Management",
                  "1 Meta Ads Campaign Every Month",
                  "Basic Audience Targeting",
                  "Monthly Performance Report",
                  "WhatsApp Support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-white font-medium">
                    <Check size={14} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={whatsappUrl("Hi Nexora Agency, I want to subscribe to the Growth Package (₹15,000/mo).")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full gradient-primary text-primary-foreground py-4 rounded-xl text-xs font-extrabold text-center flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 hover:opacity-95 transition-all"
            >
              Select Growth Package (Recommended) <ArrowRight size={14} />
            </a>
          </AnimatedItem>

          {/* PACKAGE 3: PREMIUM (₹25,000/mo) */}
          <AnimatedItem className="glass-card rounded-3xl p-8 relative flex flex-col justify-between border border-white/15">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-white/10 text-slate-200 border border-white/10">
                  PREMIUM
                </span>
                <span className="text-xs text-muted-foreground font-mono">03 / 03</span>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold font-heading text-white">₹25,000</span>
                  <span className="text-sm text-slate-400 font-medium">/ month</span>
                </div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Suitable for high-visibility individuals and businesses that need a fully managed brand presence.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-white/5 border border-white/10 text-slate-300">DOCTORS</span>
                <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-white/5 border border-white/10 text-slate-300">FOUNDERS</span>
                <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-white/5 border border-white/10 text-slate-300">CEOS</span>
                <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-white/5 border border-white/10 text-slate-300">INFLUENCERS</span>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-3 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">WHAT'S INCLUDED</div>
                {[
                  "20 Professional Reels",
                  "4 Shoot Sessions",
                  "Cinematic Video Editing",
                  "Premium Thumbnail Design",
                  "Professional Script Writing",
                  "Advanced Content & Captions",
                  "Instagram & Facebook Management",
                  "LinkedIn Content Repurposing",
                  "Personal Branding Strategy",
                  "Advanced Content Calendar",
                  "Advanced Meta Ads Management",
                  "Multiple Campaign Optimization",
                  "Competitor Analysis",
                  "Monthly Strategy Meeting",
                  "Priority Support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <Check size={14} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={whatsappUrl("Hi Nexora Agency, I want to subscribe to the Premium Package (₹25,000/mo).")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full glass-card hover:border-primary/50 text-white py-3.5 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 transition-all"
            >
              Select Premium Package <ArrowRight size={14} />
            </a>
          </AnimatedItem>

        </div>
      </AnimatedSection>
    </section>
  );
}
