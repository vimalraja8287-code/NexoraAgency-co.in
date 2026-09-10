import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { ShieldCheck, Award, Filter, Eye, Users, TrendingUp, Sparkles } from "lucide-react";

const brandingBenefits = [
  {
    icon: ShieldCheck,
    title: "Builds Trust",
    desc: "A consistent presence makes people believe in you before they even meet you.",
  },
  {
    icon: Award,
    title: "Creates Authority",
    desc: "Positions you as the recognised, go-to expert in your industry.",
  },
  {
    icon: Filter,
    title: "Generates Leads",
    desc: "Turns everyday content into a steady, predictable pipeline.",
  },
  {
    icon: Eye,
    title: "Improves Online Visibility",
    desc: "Keeps you top of mind across every platform your audience uses.",
  },
  {
    icon: Users,
    title: "Builds Customer Relationships",
    desc: "Turns followers into a community that trusts and refers you.",
  },
  {
    icon: TrendingUp,
    title: "Helps Business Growth",
    desc: "Strong personal brands convert directly into business results.",
  },
];

export default function WhyBrandingSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedSection className="mx-auto max-w-7xl">
        <AnimatedItem className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-primary flex items-center justify-center mb-3">
            <span className="pdf-dash" />
            WHY PERSONAL BRANDING?
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Your Reputation Is Now A <span className="gradient-text-cyan">Digital Asset</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Here’s what a deliberate, consistently managed personal brand does for you and your business.
          </p>
        </AnimatedItem>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {brandingBenefits.map((b) => {
            const Icon = b.icon;
            return (
              <AnimatedItem
                key={b.title}
                className="glass-card rounded-2xl p-7 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="cyan-icon-btn mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white mb-2">{b.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{b.desc}</p>
                </div>
              </AnimatedItem>
            );
          })}
        </div>

        {/* Quote Banner & Consistency Banner from Page 5 PDF */}
        <div className="space-y-6">
          <AnimatedItem className="glass-card rounded-3xl p-8 sm:p-10 border border-white/15 text-center">
            <p className="text-xl sm:text-2xl font-bold font-heading text-white max-w-3xl mx-auto leading-relaxed">
              “In 2026, your personal brand is often the first impression —{" "}
              <span className="text-primary">long before any sales conversation happens</span>.”
            </p>
          </AnimatedItem>

          <AnimatedItem className="glass-strong rounded-2xl p-6 border border-white/10 flex items-center gap-4">
            <div className="cyan-icon-btn shrink-0">
              <Users size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">Consistency compounds</h4>
              <p className="text-xs text-slate-300">
                People don’t buy from the loudest brand — they buy from the one that shows up reliably, month after month.
              </p>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </section>
  );
}
