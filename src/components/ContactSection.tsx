import { useState } from "react";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { Phone, Mail, Globe, Instagram, Send, Sparkles } from "lucide-react";
import { WHATSAPP_NUMBER, whatsappUrl } from "@/lib/whatsapp";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", business: "", interest: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${formData.name}. Interested in a proposal for ${formData.business}. Package interest: ${formData.interest}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedSection className="mx-auto max-w-7xl">
        <AnimatedItem className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-primary flex items-center justify-center mb-3">
            <span className="pdf-dash" />
            GET IN TOUCH · LET'S BUILD YOUR BRAND
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Ready to grow your <span className="gradient-text-cyan">digital presence?</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            NEXORA AGENCY — Digital Personal Branding & Content Management. Let’s discuss which package fits your goals.
          </p>
        </AnimatedItem>

        {/* 3 Cards Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <AnimatedItem className="glass-card rounded-2xl p-6 border border-white/10 flex items-center gap-4">
            <div className="cyan-icon-btn shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">PHONE</div>
              <a href="tel:+916385880259" className="text-sm font-bold text-white hover:text-primary transition-colors">
                +91 6385880259
              </a>
            </div>
          </AnimatedItem>

          <AnimatedItem className="glass-card rounded-2xl p-6 border border-white/10 flex items-center gap-4">
            <div className="cyan-icon-btn shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">EMAIL</div>
              <a href="mailto:nexoraagencystartup@gmail.com" className="text-xs font-bold text-white hover:text-primary transition-colors">
                nexoraagencystartup@gmail.com
              </a>
            </div>
          </AnimatedItem>

          <AnimatedItem className="glass-card rounded-2xl p-6 border border-white/10 flex items-center gap-4">
            <div className="cyan-icon-btn shrink-0">
              <Instagram size={20} />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">INSTAGRAM</div>
              <a href="https://www.instagram.com/nexoraagency_startup?igsh=MTFxOG5vdmQ3cWIzeg==" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white hover:text-primary transition-colors">
                @nexoraagency_startup
              </a>
            </div>
          </AnimatedItem>
        </div>

        {/* Quick Booking Form Container */}
        <AnimatedItem className="glass-strong rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto border border-white/15 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold font-heading text-white">Start Your Booking Discovery</h3>
              <p className="text-xs text-slate-300">Submit your details for a 1-on-1 strategy call.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 block">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-primary"
                  placeholder="e.g. Alex Morgan"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 block">
                  Business Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-primary"
                  placeholder="e.g. Nexora Enterprise"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 block">
                Select Package Interest
              </label>
              <select
                required
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-primary"
              >
                <option value="" className="bg-slate-900">Select a package option</option>
                <option value="Starter Package (₹8,000/mo)" className="bg-slate-900">Starter Package (₹8,000/mo)</option>
                <option value="Growth Package (₹15,000/mo)" className="bg-slate-900">Growth Package (₹15,000/mo) - Recommended</option>
                <option value="Premium Package (₹25,000/mo)" className="bg-slate-900">Premium Package (₹25,000/mo)</option>
                <option value="Custom Scope / Full Stack App" className="bg-slate-900">Custom Scope / Full Stack App & AI</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full gradient-primary text-primary-foreground py-4 rounded-xl font-extrabold shadow-lg shadow-cyan-500/30 hover:opacity-95 transition-all text-xs flex items-center justify-center gap-2"
            >
              Send Request via WhatsApp <Send size={15} />
            </button>
          </form>
        </AnimatedItem>

      </AnimatedSection>
    </section>
  );
}
