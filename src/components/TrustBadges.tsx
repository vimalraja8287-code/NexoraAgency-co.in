import { ShieldCheck, Zap, Lock, Users } from "lucide-react";

const badges = [
  { icon: Users, text: "100% Client Satisfaction" },
  { icon: Zap, text: "Apps · AI · Marketing" },
  { icon: Lock, text: "Custom Proposals Only" },
  { icon: ShieldCheck, text: "Trusted by Growing Brands" },
];

export default function TrustBadges() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-border/50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.text}
                className="glass rounded-xl px-4 py-4 flex items-center gap-3 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary-foreground" />
                </div>
                <p className="text-sm font-semibold">{b.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
