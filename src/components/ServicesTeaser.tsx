import { Link } from "@tanstack/react-router";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { Code2, TrendingUp, Sparkles, ArrowRight, CheckCircle } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    label: "Build",
    title: "Web & Mobile Platforms",
    desc: "Scalable web applications, mobile apps, UI/UX redesigns, and AI features.",
    accent: "from-primary/20 to-purple-600/10",
    badge: "Engineering",
  },
  {
    icon: TrendingUp,
    label: "Grow",
    title: "Digital Growth & Traffic",
    desc: "Technical SEO, targeted Meta & Google Ads, email flows, and social growth engines.",
    accent: "from-accent/20 to-cyan-600/10",
    badge: "Acquisition",
  },
  {
    icon: Sparkles,
    label: "Create",
    title: "Brand & Video Creative",
    desc: "High-impact visual identity systems, motion graphics, and converting ad edits.",
    accent: "from-pink-500/20 to-rose-600/10",
    badge: "Creative",
  },
];

export default function ServicesTeaser() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <AnimatedSection className="mx-auto max-w-7xl relative z-10">
        <AnimatedItem className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            <Sparkles size={13} /> Comprehensive Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Three pillars to <span className="gradient-text">scale your business</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Engineering, autonomous AI systems, and multi-channel marketing — tailored under custom proposals.
          </p>
        </AnimatedItem>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <AnimatedItem
                key={p.label}
                className="glass-card rounded-3xl p-8 group relative flex flex-col justify-between overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${p.accent} rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500`} />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={26} className="text-white" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                      {p.badge}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                    {p.label}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-foreground font-semibold">
                  <CheckCircle size={14} className="text-primary" />
                  <span>Custom scope proposal included</span>
                </div>
              </AnimatedItem>
            );
          })}
        </div>

        <AnimatedItem className="text-center">
          <Link
            to="/services"
            className="gradient-primary text-white px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2 hover:opacity-95 transition-all shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
          >
            Explore Detailed Services <ArrowRight size={18} />
          </Link>
        </AnimatedItem>
      </AnimatedSection>
    </section>
  );
}
