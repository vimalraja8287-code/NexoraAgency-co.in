import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { XCircle, CheckCircle2, ArrowRight, Sparkles, AlertTriangle, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";

const problems = [
  "Stuck with a slow static site that fails to generate leads",
  "No dedicated mobile app or modern product UI for users",
  "Ad spend & SEO running without unified conversion tracking",
  "Outdated brand presence across search, social, and web",
];

const outcomes = [
  "High-speed web & mobile products engineered for conversion",
  "Autonomous AI agents integrated into daily support & product flows",
  "Multi-channel growth engines driving predictable user acquisition",
  "Cohesive, premium brand identity that builds instant client trust",
];

export default function ProblemsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <AnimatedSection className="mx-auto max-w-7xl relative z-10">
        <AnimatedItem className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            <Sparkles size={13} /> The Nexora Advantage
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            From <span className="text-destructive/90">scattered execution</span> to{" "}
            <span className="gradient-text">scale</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Stop juggling fragmented freelancers. We unify product engineering, AI automation, and performance marketing under one roof.
          </p>
        </AnimatedItem>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Problem Side */}
          <div className="glass-card rounded-3xl p-8 border border-red-500/20 bg-red-950/10 space-y-6">
            <div className="flex items-center justify-between border-b border-red-500/20 pb-4">
              <div className="flex items-center gap-2 text-destructive font-bold font-heading text-lg">
                <AlertTriangle size={20} />
                <span>The Traditional Struggle</span>
              </div>
              <span className="text-[11px] font-semibold text-destructive uppercase tracking-widest bg-destructive/10 px-3 py-1 rounded-full border border-destructive/20">
                Fragmented
              </span>
            </div>

            <div className="space-y-4">
              {problems.map((p) => (
                <AnimatedItem key={p} className="flex items-start gap-3.5 bg-black/20 rounded-2xl p-4 border border-red-500/10">
                  <XCircle size={20} className="text-destructive mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{p}</span>
                </AnimatedItem>
              ))}
            </div>
          </div>

          {/* Solution Side */}
          <div className="glass-card rounded-3xl p-8 border border-primary/30 bg-primary/5 space-y-6">
            <div className="flex items-center justify-between border-b border-primary/20 pb-4">
              <div className="flex items-center gap-2 text-primary font-bold font-heading text-lg">
                <ShieldCheck size={20} />
                <span>The Nexora Approach</span>
              </div>
              <span className="text-[11px] font-semibold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                Unified & AI-Driven
              </span>
            </div>

            <div className="space-y-4">
              {outcomes.map((o) => (
                <AnimatedItem
                  key={o}
                  className="flex items-start gap-3.5 bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-primary/40 transition-colors"
                >
                  <CheckCircle2 size={20} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground font-medium leading-relaxed">{o}</span>
                </AnimatedItem>
              ))}
            </div>
          </div>
        </div>

        <AnimatedItem className="mt-12 text-center">
          <Link
            to="/"
            hash="contact"
            className="gradient-primary text-white px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2 shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all"
          >
            Transform Your Digital Stack <ArrowRight size={18} />
          </Link>
        </AnimatedItem>
      </AnimatedSection>
    </section>
  );
}
