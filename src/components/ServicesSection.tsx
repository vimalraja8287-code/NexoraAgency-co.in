import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { whatsappUrl } from "@/lib/whatsapp";
import {
  Code2,
  Smartphone,
  RefreshCw,
  Bot,
  Globe,
  Search,
  Target,
  UserCheck,
  Share2,
  Scissors,
  MessageSquare,
  ArrowRight,
  Layers,
  Sparkles,
  Check,
} from "lucide-react";

const engineeringServices = [
  {
    icon: Code2,
    title: "Website Building & Dynamic Web Apps",
    desc: "Custom, scalable web applications with dynamic pages, dashboards, user authentication, and admin controls.",
    badge: "CORE ENGINEERING",
    benefits: ["Dynamic Page Rendering", "Full-Stack Architecture", "Custom Database & APIs"],
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    desc: "Native-feel mobile app experiences for iOS and Android platforms engineered for speed and offline UX.",
    badge: "MOBILE ENGINE",
    benefits: ["iOS & Android Ready", "Push Notifications", "Seamless Performance"],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign & Modernization",
    desc: "Transform outdated static sites into ultra-fast, modern web applications built to convert visitors into clients.",
    badge: "UI/UX OVERHAUL",
    benefits: ["Modern Aesthetics", "Sub-second Page Speeds", "Conversion Optimization"],
  },
  {
    icon: Bot,
    title: "Autonomous AI & Agent Integration",
    desc: "Embed intelligent LLMs, automated support chatbots, and custom AI workflows directly into your web products.",
    badge: "AI AUTOMATION",
    benefits: ["Custom AI Assistants", "Automated Customer Support", "LLM Workflows"],
  },
  {
    icon: Globe,
    title: "Custom Web Portals & Platforms",
    desc: "Client management portals, SaaS backends, membership platforms, and custom business software.",
    badge: "ENTERPRISE SOFTWARE",
    benefits: ["Secure Auth", "Payment Gateways", "Custom Logic"],
  },
];

const marketingServices = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    desc: "Rank on page one for high-intent Google search queries that drive qualified sales traffic to your web app.",
    badge: "ORGANIC GROWTH",
    benefits: ["Technical SEO Audits", "Keyword Strategy", "On-Page & Off-Page"],
  },
  {
    icon: Target,
    title: "Meta & Google Paid Ads (SEM)",
    desc: "Paid customer acquisition campaigns on Meta and Google with continuous testing and high ROAS target.",
    badge: "PAID ACQUISITION",
    benefits: ["Campaign Setup", "Creative Testing", "Conversion Tracking"],
  },
  {
    icon: UserCheck,
    title: "Digital Personal Branding",
    desc: "Position founders, doctors, executives, and professionals as recognizable industry leaders online.",
    badge: "BRAND AUTHORITY",
    benefits: ["Executive Positioning", "Thought Leadership", "Authority Content"],
  },
  {
    icon: Share2,
    title: "Social Media & Content Management",
    desc: "End-to-end management for Instagram, Facebook, and LinkedIn with consistent calendar execution.",
    badge: "SOCIAL GROWTH",
    benefits: ["Content Calendar", "Multi-Platform Posting", "Community Growth"],
  },
  {
    icon: Scissors,
    title: "Professional Video Editing & Motion",
    desc: "Polished short-form video edits, Reels, ad video creatives, and scroll-stopping thumbnail graphics.",
    badge: "CREATIVE ENGINE",
    benefits: ["Reels & Short Edits", "Performance Ad Edits", "Thumbnail Design"],
  },
  {
    icon: MessageSquare,
    title: "Brand Consultation & Strategy",
    desc: "Strategic guidance to refine your brand positioning, marketing mix, and monthly growth numbers.",
    badge: "STRATEGY & AUDITS",
    benefits: ["Monthly Strategy Meetings", "Performance Audits", "Growth Roadmap"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedSection className="mx-auto max-w-7xl">
        
        {/* Header */}
        <AnimatedItem className="text-center mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-primary flex items-center justify-center mb-3">
            <span className="pdf-dash" />
            OUR CAPABILITIES & SERVICES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Full-Stack Software <span className="gradient-text-cyan">& Digital Growth</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Software engineering is our primary foundation, backed by multi-channel digital marketing.
          </p>
        </AnimatedItem>

        {/* SECTION 1: SOFTWARE ENGINEERING & DEVELOPMENT (PRIMARY FOCUS) */}
        <div className="mb-20 space-y-8">
          <AnimatedItem className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold">
              <Code2 size={22} />
            </div>
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block">
                PRIMARY CAPABILITY #1
              </span>
              <h3 className="text-2xl font-extrabold font-heading text-white">
                Software Engineering & App Development
              </h3>
            </div>
          </AnimatedItem>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringServices.map((s) => {
              const Icon = s.icon;
              return (
                <AnimatedItem
                  key={s.title}
                  className="glass-card rounded-3xl p-7 relative group flex flex-col justify-between border-t-2 border-t-primary"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="cyan-icon-btn group-hover:scale-110 transition-transform">
                        <Icon size={22} />
                      </div>
                      <span className="text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase">
                        {s.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold font-heading text-white mb-2">{s.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-5">{s.desc}</p>

                    <div className="space-y-2 mb-6">
                      {s.benefits.map((b) => (
                        <div key={b} className="flex items-center gap-2 text-xs text-slate-200">
                          <Check size={13} className="text-primary shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={whatsappUrl(`Hi Nexora Agency, I am interested in building: ${s.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-primary text-primary-foreground py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-md shadow-cyan-500/20"
                  >
                    Discuss Tech Scope <ArrowRight size={14} />
                  </a>
                </AnimatedItem>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: DIGITAL MARKETING & BRAND GROWTH (SECONDARY FOCUS) */}
        <div className="space-y-8">
          <AnimatedItem className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-300 font-bold">
              <Share2 size={22} />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">
                SECONDARY CAPABILITY #2
              </span>
              <h3 className="text-2xl font-extrabold font-heading text-white">
                Digital Marketing, SEO & Personal Branding
              </h3>
            </div>
          </AnimatedItem>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingServices.map((s) => {
              const Icon = s.icon;
              return (
                <AnimatedItem
                  key={s.title}
                  className="glass-card rounded-3xl p-7 relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="cyan-icon-btn group-hover:scale-110 transition-transform">
                        <Icon size={22} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase">
                        {s.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-heading text-white mb-2">{s.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-5">{s.desc}</p>

                    <div className="space-y-2 mb-6">
                      {s.benefits.map((b) => (
                        <div key={b} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check size={13} className="text-primary shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={whatsappUrl(`Hi Nexora Agency, I am interested in growth marketing for: ${s.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card hover:border-primary/50 text-white py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    Inquire Service <ArrowRight size={14} />
                  </a>
                </AnimatedItem>
              );
            })}
          </div>
        </div>

        {/* Custom Engineering & Proposal Callout Box */}
        <AnimatedItem className="mt-16 glass-strong rounded-3xl p-8 sm:p-10 border border-white/15 shadow-2xl flex flex-col sm:flex-row items-center gap-6">
          <div className="cyan-icon-btn shrink-0 w-16 h-16 rounded-2xl">
            <Layers size={28} />
          </div>
          <div className="flex-1 space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold font-heading text-white">Need a Custom Web App or Mobile Project?</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We provide milestone-based software proposals for startups, businesses, and founders requiring full-stack development, dynamic databases, and custom AI integrations.
            </p>
          </div>
          <a
            href={whatsappUrl("Hi Nexora Agency, I want to request a custom proposal for software engineering.")}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-primary text-primary-foreground px-6 py-3.5 rounded-xl text-xs font-bold shrink-0 flex items-center gap-2 hover:opacity-95 transition-all shadow-lg"
          >
            Get Custom Software Proposal <ArrowRight size={14} />
          </a>
        </AnimatedItem>
      </AnimatedSection>
    </section>
  );
}
