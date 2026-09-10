import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const payments = [
  { amount: "5,000", from: "Rajesh K.", date: "12 Mar 2025, 4:32 PM", ref: "UPI/4528xxxx7821", app: "GPay" },
  { amount: "8,500", from: "Priya S.", date: "28 Feb 2025, 11:18 AM", ref: "UPI/9921xxxx3340", app: "PhonePe" },
  { amount: "12,000", from: "Arjun M.", date: "19 Feb 2025, 2:05 PM", ref: "UPI/7710xxxx9985", app: "Paytm" },
  { amount: "3,500", from: "Meera V.", date: "08 Feb 2025, 6:47 PM", ref: "UPI/3320xxxx1175", app: "GPay" },
];

const appColor: Record<string, string> = {
  GPay: "oklch(0.65 0.2 145)",
  PhonePe: "oklch(0.55 0.22 290)",
  Paytm: "oklch(0.6 0.22 230)",
};

export default function PaymentProofSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="mx-auto max-w-7xl">
        <AnimatedItem className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Payment Proof</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Trusted by <span className="gradient-text">Clients</span>
          </h2>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full glass text-sm">
            <ShieldCheck size={16} className="text-primary" />
            <span className="text-muted-foreground">Verified Payments from Real Clients</span>
          </div>
        </AnimatedItem>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {payments.map((p, i) => (
            <AnimatedItem
              key={i}
              className="glass rounded-2xl p-5 hover:scale-[1.03] glow-border-hover transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-[10px] font-bold px-2 py-1 rounded-md"
                  style={{ background: `${appColor[p.app]} / 0.2`, color: appColor[p.app] }}
                >
                  {p.app}
                </span>
                <CheckCircle2 size={18} className="text-[oklch(0.7_0.18_145)]" />
              </div>

              <div className="text-center py-4 border-y border-white/10">
                <p className="text-xs text-muted-foreground mb-1">Amount Received</p>
                <p className="text-3xl font-bold gradient-text">₹{p.amount}</p>
                <p className="text-xs text-[oklch(0.7_0.18_145)] font-semibold mt-2 flex items-center justify-center gap-1">
                  <CheckCircle2 size={12} /> Successful
                </p>
              </div>

              <div className="mt-4 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">From</span>
                  <span className="font-semibold blur-[3px] hover:blur-0 transition-all">{p.from}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium">{p.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ref</span>
                  <span className="font-mono blur-[2px] hover:blur-0 transition-all">{p.ref}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-center gap-1.5 text-[11px] text-primary font-semibold">
                <ShieldCheck size={12} /> Verified
              </div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
