import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { Eye, Code2, Cpu, BarChart } from "lucide-react";

const targetAudience = [
  "STARTUPS",
  "FOUNDERS",
  "BUSINESSES",
  "DOCTORS",
  "ENTREPRENEURS",
];

export default function AboutAgencySection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Mission & Stats */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary flex items-center mb-3">
                <span className="pdf-dash" />
                ABOUT NEXORA AGENCY
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Engineering & Growth Partner, <span className="gradient-text-cyan">Not Just A Vendor</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Nexora Agency is a full-stack software development and digital marketing agency dedicated to engineering high-performance web applications, dynamic platforms, native mobile applications, and AI integrations.
              </p>
              <p>
                Beyond software engineering, we specialize in multi-channel acquisition: SEO, Meta & Google Ads, digital personal branding, and consistent content management for startups, founders, doctors, and businesses.
              </p>
              <p>
                Our mission is to build robust software products and transform businesses into recognizable market brands by combining code craftsmanship, AI technology, and data-driven growth.
              </p>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              <div>
                <div className="text-3xl font-extrabold font-heading text-primary">Web & App</div>
                <div className="text-xs text-muted-foreground font-medium">Development Core</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold font-heading text-primary">12</div>
                <div className="text-xs text-muted-foreground font-medium">Core Capabilities</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold font-heading text-primary">AI Agent</div>
                <div className="text-xs text-muted-foreground font-medium">Integrations</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold font-heading text-primary">100%</div>
                <div className="text-xs text-muted-foreground font-medium">Custom Scope</div>
              </div>
            </div>

            {/* Our Approach (Engineering, AI, Growth) */}
            <div className="pt-6">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                OUR TRI-FACTOR APPROACH
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="glass-card rounded-2xl p-5 border border-white/10">
                  <div className="cyan-icon-btn mb-3">
                    <Code2 size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Engineering</h4>
                  <p className="text-xs text-muted-foreground">Scalable web apps, dynamic pages & mobile platforms.</p>
                </div>

                <div className="glass-card rounded-2xl p-5 border border-white/10">
                  <div className="cyan-icon-btn mb-3">
                    <Cpu size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">AI Automation</h4>
                  <p className="text-xs text-muted-foreground">Autonomous agents & intelligent LLM workflows.</p>
                </div>

                <div className="glass-card rounded-2xl p-5 border border-white/10">
                  <div className="cyan-icon-btn mb-3">
                    <BarChart size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Growth Marketing</h4>
                  <p className="text-xs text-muted-foreground">SEO, Meta Ads & personal brand authority.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Card & Target Audience */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-8 border border-white/15 bg-gradient-to-b from-blue-950/60 to-slate-950/80 space-y-8 shadow-2xl">
              <div className="cyan-icon-btn">
                <Eye size={22} />
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-white mb-3">Our Mission</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  To build world-class digital products and scale businesses into recognizable market leaders through full-stack software development, artificial intelligence, and disciplined growth execution.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                  WHO WE ENGINEER & SCALE FOR
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {targetAudience.map((audience) => (
                    <span
                      key={audience}
                      className="px-4 py-2 rounded-full text-xs font-bold bg-blue-900/40 text-blue-200 border border-blue-500/30"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
