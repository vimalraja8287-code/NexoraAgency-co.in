import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  { 
    label: "01. Initial Problem", 
    title: "Zero Online Presence",
    text: "Bespoke tailoring shop had no digital storefront — reliant purely on foot traffic and losing digital orders.", 
    color: "text-destructive",
    bg: "bg-destructive/10 border-destructive/20"
  },
  { 
    label: "02. Nexora Execution", 
    title: "Full Digital Platform",
    text: "Engineered a high-performance showcase website with integrated WhatsApp order booking and location maps.", 
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20"
  },
  { 
    label: "03. Proven Outcome", 
    title: "+300% Inquiries",
    text: "Generated immediate online inquiry flow, dramatic boost in local search ranking, and consistent walk-ins.", 
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20"
  },
];

export default function CaseStudy() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedSection className="mx-auto max-w-6xl">
        <AnimatedItem className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            <Sparkles size={13} /> Featured Transformation
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            How we transformed a <span className="gradient-text">local enterprise</span>
          </h2>
        </AnimatedItem>

        <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((s, i) => (
              <AnimatedItem key={s.label} className="relative flex flex-col justify-between space-y-4">
                <div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border inline-block mb-3 ${s.bg} ${s.color}`}>
                    {s.label}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight size={20} className="hidden md:block absolute top-1/2 -right-5 text-primary/40 -translate-y-1/2" />
                )}
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
