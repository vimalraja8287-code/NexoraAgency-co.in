import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { ExternalLink, TrendingUp, Sparkles, Globe } from "lucide-react";

const projects = [
  {
    title: "Tailor Shop Web Platform",
    category: "Custom Web Application",
    desc: "Designed and built an elegant digital showcase and custom booking workflow for a bespoke tailoring house.",
    result: "300% increase in local digital discovery & orders",
    tag: "Live Production",
    accent: "from-indigo-600/40 to-violet-600/30",
    url: "https://jothikatailoring.netlify.app/",
  },
  {
    title: "Athics Fitness Center",
    category: "High-Converting Landing Experience",
    desc: "Built a high-impact, performance-driven web platform with membership funnel and lead capture.",
    result: "20+ qualified leads generated in week 1",
    tag: "Live Production",
    accent: "from-cyan-600/40 to-emerald-600/30",
    url: "https://athicsfitness.com/",
  },
  {
    title: "Culinary Restaurant Experience",
    category: "Interactive Menu & Dining App",
    desc: "Crafted an immersive digital menu experience with location routing and online reservation links.",
    result: "Enhanced customer retention & zero bounce rate",
    tag: "Live Production",
    accent: "from-pink-600/40 to-purple-600/30",
    url: "https://monumental-kangaroo-4c9333.netlify.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedSection className="mx-auto max-w-7xl">
        <AnimatedItem className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            <Sparkles size={13} /> Case Studies & Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Featured <span className="gradient-text">Client Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Real products shipped into production. Engineered for speed, aesthetics, and business growth.
          </p>
        </AnimatedItem>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <AnimatedItem key={p.title}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live ${p.title}`}
                className="glass-card rounded-3xl overflow-hidden group block h-full flex flex-col justify-between"
              >
                {/* Visual Header Mockup */}
                <div className={`h-48 bg-gradient-to-br ${p.accent} relative p-5 flex flex-col justify-between overflow-hidden`}>
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                      <Globe size={12} className="text-emerald-400" />
                      {p.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:scale-110 group-hover:bg-primary transition-all">
                      <ExternalLink size={14} />
                    </div>
                  </div>

                  <div className="z-10">
                    <span className="text-[11px] font-semibold text-white/80 uppercase tracking-wider block">
                      {p.category}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-white">{p.title}</h3>
                  </div>

                  {/* Decorative background circle */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                </div>

                {/* Card Content Body */}
                <div className="p-7 space-y-5 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  
                  <div className="space-y-4">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2.5 text-xs text-primary font-semibold">
                      <TrendingUp size={16} className="text-accent shrink-0" />
                      <span className="text-foreground">{p.result}</span>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs font-bold text-primary group-hover:text-accent transition-colors">
                      <span>View Live Site</span>
                      <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
