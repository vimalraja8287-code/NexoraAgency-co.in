import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { AlertCircle, CreditCard, RefreshCw, HelpCircle, MessageSquare } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

const terms = [
  { num: "01", text: "Monthly payment should be made in advance." },
  { num: "02", text: "Advertising budget paid to Meta / Facebook is NOT included in the package price." },
  { num: "03", text: "Clients will pay Meta directly for all advertising expenses." },
  { num: "04", text: "Nexora Agency manages campaigns according to the selected package." },
  { num: "05", text: "Additional work outside the package scope will be charged separately." },
];

const faqs = [
  { q: "Do you provide scripts?", a: "Yes. Professional scripts are included according to your selected package." },
  { q: "Do you manage Instagram?", a: "Yes, Instagram management is included from the Growth package upward, with posting support on Starter." },
  { q: "Can you manage Facebook?", a: "Yes. Facebook management is included in the Growth and Premium packages." },
  { q: "Do you run Meta Ads?", a: "Yes. Growth and Premium packages include Meta Ads setup and management." },
  { q: "Will I receive monthly reports?", a: "Yes. Every package includes visibility into performance, with detailed analytics on Growth and Premium." },
  { q: "Can packages be customized?", a: "Yes. Custom packages are available based on your specific business requirements." },
];

export default function ImportantNotes() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedSection className="mx-auto max-w-7xl">
        {/* FAQ Section matching Page 13 of PDF */}
        <AnimatedItem className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-primary flex items-center justify-center mb-3">
            <span className="pdf-dash" />
            COMMON QUESTIONS · FAQ
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Frequently Asked <span className="gradient-text-cyan">Questions</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Quick answers to the questions we hear most often from new clients.
          </p>
        </AnimatedItem>

        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {faqs.map((faq) => (
            <AnimatedItem key={faq.q} className="glass-card rounded-2xl p-6 border border-white/10">
              <h3 className="text-base font-bold font-heading text-white mb-2 flex items-center gap-2">
                <HelpCircle size={18} className="text-primary shrink-0" />
                {faq.q}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed pl-6">{faq.a}</p>
            </AnimatedItem>
          ))}
        </div>

        {/* Terms & Ad Spend Section matching Page 14 of PDF */}
        <AnimatedItem className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-primary flex items-center justify-center mb-3">
            <span className="pdf-dash" />
            PLEASE NOTE · TERMS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Important Notes & Scope
          </h2>
        </AnimatedItem>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 01 to 05 List */}
          <div className="lg:col-span-7 space-y-4">
            {terms.map((t) => (
              <AnimatedItem
                key={t.num}
                className="glass-card rounded-2xl p-5 border border-white/10 flex items-center gap-4"
              >
                <span className="text-sm font-extrabold font-mono text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-xl shrink-0">
                  {t.num}
                </span>
                <p className="text-xs sm:text-sm text-slate-200 font-medium">{t.text}</p>
              </AnimatedItem>
            ))}
          </div>

          {/* Right Column: Ad Spend & Billing Cycle Cards */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatedItem className="glass-card rounded-3xl p-7 border border-white/15 bg-gradient-to-b from-blue-950/80 to-slate-950/90">
              <div className="cyan-icon-btn mb-4">
                <CreditCard size={22} />
              </div>
              <h4 className="text-lg font-bold font-heading text-white mb-2">A Note On Ad Spend</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nexora manages your campaigns end-to-end, but the media budget itself is paid directly to Meta by you — keeping full transparency and control over your ad account.
              </p>
            </AnimatedItem>

            <AnimatedItem className="glass-card rounded-3xl p-7 border border-white/15">
              <div className="cyan-icon-btn mb-4">
                <RefreshCw size={22} />
              </div>
              <h4 className="text-lg font-bold font-heading text-white mb-2">Billing Cycle</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your monthly package renews automatically at the start of each cycle once the advance payment is received, keeping production moving without gaps.
              </p>
            </AnimatedItem>
          </div>
        </div>

        {/* Still Have Questions Box */}
        <AnimatedItem className="mt-16 glass-strong rounded-3xl p-8 text-center border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-xl font-bold font-heading text-white">Still have a question?</h3>
            <p className="text-xs text-slate-300">
              Reach out any time — our team is happy to walk through the right package for your goals.
            </p>
          </div>
          <a
            href={whatsappUrl("Hi Nexora Agency, I have a question about scope and packages.")}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-primary text-primary-foreground px-6 py-3.5 rounded-xl text-xs font-bold shrink-0 flex items-center gap-2 hover:opacity-95 shadow-lg"
          >
            Contact Team <MessageSquare size={15} />
          </a>
        </AnimatedItem>
      </AnimatedSection>
    </section>
  );
}
