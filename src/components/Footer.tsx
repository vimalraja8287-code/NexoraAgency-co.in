import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Sparkles, Phone, MapPin } from "lucide-react";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "Team", to: "/team" as const },
  { label: "Contact", to: "/" as const, hash: "contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl gradient-primary flex items-center justify-center text-white shadow-md">
                <Sparkles size={16} />
              </div>
              <span className="text-xl font-bold font-heading tracking-tight gradient-text">
                Nexora
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Engineering full-stack products, autonomous AI agent workflows, and data-driven digital growth engines.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-4 font-heading">
              Navigation
            </p>
            <div className="space-y-2.5">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  hash={l.hash}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Capabilities */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-4 font-heading">
              Capabilities
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Web & Mobile Apps</li>
              <li>Autonomous AI Agents</li>
              <li>SEO & Performance Ads</li>
              <li>Brand Identity & Creative</li>
            </ul>
          </div>

          {/* Column 4: Social & Direct */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-4 font-heading">
              Connect With Us
            </p>
            <div className="flex gap-3 mb-5">
              <a
                href="https://www.instagram.com/nexoraagency_startup?igsh=MTFxOG5vdmQ3cWIzeg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/143789901"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>

            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                <span>+91 6385880259</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                <span>Puducherry, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nexora Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <span>Engineering</span>
            <span>AI Automation</span>
            <span>Growth Marketing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
