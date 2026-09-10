import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { whatsappUrl } from "@/lib/whatsapp";

interface CTABannerProps {
  text?: string;
  urgency?: string;
}

export default function CTABanner({
  text = "Ready to build your product and grow your revenue?",
  urgency = "Custom proposals — tailored to your goals and budget",
}: CTABannerProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="mx-auto max-w-5xl glass-strong rounded-3xl p-10 sm:p-14 text-center border border-white/15 shadow-2xl relative overflow-hidden">
        <div className="ambient-glow-purple top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70" />
        
        <div className="relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <Sparkles size={14} /> Start Your Journey Today
          </span>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-foreground max-w-2xl mx-auto leading-tight">
            {text}
          </h3>

          <p className="text-muted-foreground text-sm sm:text-base flex items-center justify-center gap-2">
            <Clock size={16} className="text-accent" />
            {urgency}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              hash="contact"
              className="gradient-primary text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2"
            >
              Get Custom Proposal <ArrowRight size={18} />
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card text-foreground px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
            >
              Book Free Discovery Call
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            Custom scope · Fast turnaround · Transparent milestones
          </p>
        </div>
      </div>
    </section>
  );
}
