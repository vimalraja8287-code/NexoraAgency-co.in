import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { MessageSquare, Scissors, Zap, BarChart, Check, Calendar, RefreshCw } from "lucide-react";

const weeks = [
  {
    week: "WEEK 1",
    title: "Foundation",
    icon: MessageSquare,
    items: ["Business Meeting", "Planning", "Shoot Session"],
  },
  {
    week: "WEEK 2",
    title: "Production",
    icon: Scissors,
    items: ["Editing", "Approval", "Publishing"],
  },
  {
    week: "WEEK 3",
    title: "Momentum",
    icon: Zap,
    items: ["Second Shoot", "Editing", "Publishing"],
  },
  {
    week: "WEEK 4",
    title: "Optimization",
    icon: BarChart,
    items: ["Analytics", "Optimization", "Monthly Report"],
  },
];

export default function ExecutionCadence() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedSection className="mx-auto max-w-7xl">
        <AnimatedItem className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-primary flex items-center justify-center mb-3">
            <span className="pdf-dash" />
            EXECUTION CADENCE · MONTHLY TIMELINE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            How A Typical <span className="gradient-text-cyan">Month Runs</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            A predictable four-week cadence keeps production moving and performance improving, month after month.
          </p>
        </AnimatedItem>

        {/* 4-Week Cards Grid matching Page 11 of PDF */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {weeks.map((w) => {
            const Icon = w.icon;
            return (
              <AnimatedItem
                key={w.week}
                className="glass-card rounded-3xl p-7 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="cyan-icon-btn group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-primary font-mono">
                      {w.week}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white mb-4">{w.title}</h3>

                  <div className="space-y-2.5 border-t border-white/10 pt-4">
                    {w.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-200">
                        <Check size={14} className="text-primary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </div>

        {/* Timeline Bar */}
        <div className="glass-card rounded-2xl p-4 border border-white/10 flex items-center justify-between text-xs font-bold text-slate-300 mb-10">
          <span>CYCLE START</span>
          <div className="h-1 flex-1 mx-4 bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 rounded-full" />
          <span className="text-primary">REPORT & RENEW</span>
        </div>

        {/* Bottom Callouts matching Page 11 of PDF */}
        <div className="grid sm:grid-cols-2 gap-6">
          <AnimatedItem className="glass-strong rounded-2xl p-6 border border-white/10 flex items-center gap-4">
            <div className="cyan-icon-btn shrink-0">
              <Calendar size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">Same cadence, every month</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                No surprises — the same four-week rhythm repeats so you always know what stage production is at.
              </p>
            </div>
          </AnimatedItem>

          <AnimatedItem className="glass-strong rounded-2xl p-6 border border-white/10 flex items-center gap-4">
            <div className="cyan-icon-btn shrink-0">
              <RefreshCw size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">Data closes the loop</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Week four turns into next month’s plan — every cycle gets sharper than the last.
              </p>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </section>
  );
}
