import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { Check, Minus, Sparkles } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

const comparisonRows = [
  { feature: "Monthly Reels", starter: "8", growth: "16", premium: "20" },
  { feature: "Shoot Sessions", starter: "4", growth: "4", premium: "4" },
  { feature: "Video Editing", starter: "Basic", growth: "Premium", premium: "Cinematic" },
  { feature: "Thumbnail Design", starter: "Basic", growth: "Premium", premium: "Premium" },
  { feature: "Script Writing", starter: "Assistance", growth: "Professional", premium: "Professional" },
  { feature: "Content Writing", starter: "Standard", growth: "Standard", premium: "Advanced" },
  { feature: "Instagram Management", starter: "Posting Support", growth: "Full Management", premium: "Full Management" },
  { feature: "Facebook Management", starter: false, growth: true, premium: true },
  { feature: "LinkedIn Repurposing", starter: false, growth: false, premium: true },
  { feature: "Personal Branding Strategy", starter: false, growth: false, premium: true },
  { feature: "Meta Ads Management", starter: false, growth: "Basic", premium: "Advanced" },
  { feature: "Campaign Optimization", starter: false, growth: "1 Campaign / mo", premium: "Multiple Campaigns" },
  { feature: "Competitor Analysis", starter: false, growth: false, premium: true },
  { feature: "Content Calendar", starter: "Monthly", growth: "Monthly", premium: "Advanced" },
  { feature: "Performance Report", starter: false, growth: "Monthly", premium: "Monthly + Strategy Call" },
  { feature: "Support", starter: false, growth: "WhatsApp", premium: "Priority" },
];

export default function ComparisonTable() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedSection className="mx-auto max-w-7xl">
        <AnimatedItem className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-primary flex items-center justify-center mb-3">
            <span className="pdf-dash" />
            SIDE BY SIDE · COMPARE PLANS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Find The Right Package <span className="gradient-text-cyan">For You</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            A side-by-side look at what’s included in every plan. The Growth package remains our most recommended.
          </p>
        </AnimatedItem>

        {/* Table Container matching Page 10 of PDF */}
        <AnimatedItem className="glass-card rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/15 bg-blue-950/80">
                  <th className="py-5 px-6 font-bold text-white font-heading text-base">Features</th>
                  <th className="py-5 px-6 font-bold text-slate-300 text-center">
                    Starter<div className="text-xs font-normal text-slate-400 font-mono">₹8,000</div>
                  </th>
                  <th className="py-5 px-6 font-bold text-primary text-center bg-cyan-500/10 border-x border-cyan-500/30">
                    Growth<div className="text-xs font-bold text-cyan-300 font-mono">₹15,000</div>
                    <span className="inline-block px-2 py-0.5 text-[9px] font-extrabold bg-primary text-primary-foreground rounded-full uppercase ml-1">POPULAR</span>
                  </th>
                  <th className="py-5 px-6 font-bold text-slate-300 text-center">
                    Premium<div className="text-xs font-normal text-slate-400 font-mono">₹25,000</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {comparisonRows.map((row, idx) => (
                  <tr key={row.feature} className={idx % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}>
                    <td className="py-4 px-6 font-medium text-slate-200">{row.feature}</td>
                    
                    {/* Starter */}
                    <td className="py-4 px-6 text-center text-slate-300 text-xs">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? <Check size={16} className="text-primary mx-auto" /> : <Minus size={16} className="text-slate-600 mx-auto" />
                      ) : (
                        row.starter
                      )}
                    </td>

                    {/* Growth (Highlighted) */}
                    <td className="py-4 px-6 text-center text-cyan-200 font-semibold text-xs bg-cyan-500/5 border-x border-cyan-500/20">
                      {typeof row.growth === "boolean" ? (
                        row.growth ? <Check size={16} className="text-primary mx-auto" /> : <Minus size={16} className="text-slate-600 mx-auto" />
                      ) : (
                        row.growth
                      )}
                    </td>

                    {/* Premium */}
                    <td className="py-4 px-6 text-center text-slate-300 text-xs">
                      {typeof row.premium === "boolean" ? (
                        row.premium ? <Check size={16} className="text-primary mx-auto" /> : <Minus size={16} className="text-slate-600 mx-auto" />
                      ) : (
                        row.premium
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedItem>

        <div className="mt-8 text-center text-xs text-slate-400">
          Growth column highlights our most recommended plan for consistent, all-round results.
        </div>
      </AnimatedSection>
    </section>
  );
}
