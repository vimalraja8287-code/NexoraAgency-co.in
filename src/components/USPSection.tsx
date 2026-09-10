import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { MessageSquareQuote, Eye, Bot, Target, Sparkles } from "lucide-react";

const usps = [
  {
    icon: MessageSquareQuote,
    title: "Tailored Proposals Only",
    desc: "No cookie-cutter packages — every project proposal is scoped to your exact goals, timeline, and ROI expectations.",
  },
  {
    icon: Eye,
    title: "Interactive Prototype Walkthroughs",
    desc: "Test prototypes, view architecture blueprints, and align on UX concepts before writing a line of code.",
  },
  {
    icon: Bot,
    title: "AI Engineered for Impact",
    desc: "We embed autonomous LLMs and workflows directly into your operational stack — no gimmick slides.",
  },
  {
    icon: Target,
    title: "Outcome-Driven Execution",
    desc: "Engineering, design, and performance marketing aligned specifically to conversion rates and user LTV.",
  },
];

export default function USPSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedSection className="mx-auto max-w-7xl">
        <AnimatedItem className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            <Sparkles size={13} /> The Nexora Standard
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            We go far <span className="gradient-text">beyond ordinary web dev</span>
          </h2>
        </AnimatedItem>

        <div className="grid sm:grid-cols-2 gap-8">
          {usps.map((u) => {
            const Icon = u.icon;
            return (
              <AnimatedItem
                key={u.title}
                className="glass-card rounded-3xl p-8 flex gap-6 items-start group"
              >
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform">
                  <Icon size={26} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-foreground mb-2">{u.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
                </div>
              </AnimatedItem>
            );
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}
