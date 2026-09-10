import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import {
  MessageSquare,
  Search,
  Calendar,
  FileCode,
  Video,
  Scissors,
  Image,
  CheckCircle,
  Upload,
  BarChart,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Client Discussion",
    desc: "Understanding your goals, audience and brand voice.",
  },
  {
    step: "02",
    icon: Search,
    title: "Business Analysis",
    desc: "Studying your market, competitors and positioning.",
  },
  {
    step: "03",
    icon: Calendar,
    title: "Content Planning",
    desc: "Mapping topics and formats into a monthly calendar.",
  },
  {
    step: "04",
    icon: FileCode,
    title: "Script Writing",
    desc: "Crafting hooks and narratives for every piece of content.",
  },
  {
    step: "05",
    icon: Video,
    title: "Video Shoot",
    desc: "Professional, on-brand shoot sessions each month.",
  },
  {
    step: "06",
    icon: Scissors,
    title: "Professional Editing",
    desc: "Cutting, grading and pacing footage for maximum impact.",
  },
  {
    step: "07",
    icon: Image,
    title: "Thumbnail Design",
    desc: "Designing scroll-stopping thumbnails for every video.",
  },
  {
    step: "08",
    icon: CheckCircle,
    title: "Review",
    desc: "A quality and brand-alignment check before it goes live.",
  },
  {
    step: "09",
    icon: Upload,
    title: "Publishing",
    desc: "Scheduled, platform-optimised publishing across channels.",
  },
  {
    step: "10",
    icon: BarChart,
    title: "Performance Report",
    desc: "Monthly numbers, insights and clear next steps.",
  },
];

export default function ProductionWorkflow() {
  return (
    <section id="workflow" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedSection className="mx-auto max-w-7xl">
        <AnimatedItem className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-primary flex items-center justify-center mb-3">
            <span className="pdf-dash" />
            HOW WE OPERATE · OUR WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            A Repeatable, <span className="gradient-text-cyan">Ten-Step Production Cycle</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every project moves through the same disciplined process — so quality and consistency never depend on luck.
          </p>
        </AnimatedItem>

        {/* 10-Step Grid matching Page 6 of PDF */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-12">
          {workflowSteps.map((s) => {
            const Icon = s.icon;
            return (
              <AnimatedItem
                key={s.step}
                className="glass-card rounded-2xl p-5 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="cyan-icon-btn group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </div>
                    <span className="text-xs font-extrabold text-slate-400 font-mono">
                      {s.step}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold font-heading text-white mb-1.5">{s.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedItem>
            );
          })}
        </div>

        {/* Process Flow Line Bar */}
        <div className="glass-card rounded-2xl p-4 border border-white/10 mb-10 overflow-x-auto">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-300 min-w-[650px] px-2">
            <span>Discussion</span> ➔
            <span>Analysis</span> ➔
            <span>Planning</span> ➔
            <span>Production</span> ➔
            <span>Review</span> ➔
            <span>Publishing</span> ➔
            <span className="text-primary font-bold">Reporting</span>
          </div>
        </div>

        {/* Bottom Callout Boxes matching Page 6 of PDF */}
        <div className="grid sm:grid-cols-2 gap-6">
          <AnimatedItem className="glass-strong rounded-2xl p-6 border border-white/10 flex items-center gap-4">
            <div className="cyan-icon-btn shrink-0">
              <CalendarCheck size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">Planned, not improvised</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every deliverable traces back to a monthly content calendar agreed with you in advance.
              </p>
            </div>
          </AnimatedItem>

          <AnimatedItem className="glass-strong rounded-2xl p-6 border border-white/10 flex items-center gap-4">
            <div className="cyan-icon-btn shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">Reviewed before it’s live</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nothing publishes without a brand-alignment and quality check first.
              </p>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </section>
  );
}
