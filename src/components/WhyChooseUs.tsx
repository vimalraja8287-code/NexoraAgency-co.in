import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { Zap, Bot, Palette, Smartphone, Search, Gauge, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "End-to-End Delivery",
    desc: "From product architecture to Google Ads & brand creative — one accountable partner.",
  },
  {
    icon: Bot,
    title: "AI That Ships & Works",
    desc: "Practical autonomous AI agents embedded directly into real products and workflows.",
  },
  {
    icon: Palette,
    title: "Modern Product UX",
    desc: "Sleek, responsive interfaces that impress users and turn traffic into loyal clients.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Ready",
    desc: "High-performance experiences tailored for every screen size and operating system.",
  },
  {
    icon: Search,
    title: "Data Growth Systems",
    desc: "Technical SEO, SEM, and social ad engines aligned directly to net revenue goals.",
  },
  {
    icon: Gauge,
    title: "Sub-Second Performance",
    desc: "Blazing fast applications built for real business metrics, not vanity counters.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedSection className="mx-auto max-w-7xl">
        <AnimatedItem className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            <Sparkles size={13} /> Why Engineering Teams Choose Us
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Why ambitious brands <span className="gradient-text">partner with Nexora</span>
          </h2>
        </AnimatedItem>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <AnimatedItem
                key={f.title}
                className="glass-card rounded-3xl p-7 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold font-heading mb-2 text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedItem>
            );
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}
