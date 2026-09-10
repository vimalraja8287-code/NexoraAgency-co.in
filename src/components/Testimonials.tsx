import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { Star, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh K.",
    business: "Retail Business Founder",
    text: "Got 15+ high-intent inquiries within the first week of launch. The platform design completely transformed how clients find and perceive our brand.",
    stars: 5,
    avatar: "RK",
  },
  {
    name: "Priya S.",
    business: "Boutique Owner",
    text: "Extremely professional team, delivered in record time. They understood our exact requirement without complex back-and-forth. Communication was 10/10.",
    stars: 5,
    avatar: "PS",
  },
  {
    name: "Arjun M.",
    business: "Fitness & Performance Coach",
    text: "Our online lead pipeline completely changed — clients convert effortlessly now. The sleek modern interface gives our business instant authority.",
    stars: 5,
    avatar: "AM",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedSection className="mx-auto max-w-7xl">
        <AnimatedItem className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            <Sparkles size={13} /> Client Verification
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Loved by <span className="gradient-text">founders & businesses</span>
          </h2>
        </AnimatedItem>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <AnimatedItem
              key={t.name}
              className="glass-card rounded-3xl p-8 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold text-xs text-white shadow-md shadow-primary/30">
                    {t.avatar}
                  </div>
                  <Quote size={24} className="text-primary/40 group-hover:text-primary transition-colors" />
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-foreground/90 leading-relaxed mb-6 italic">"{t.text}"</p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-base font-bold font-heading text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.business}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
