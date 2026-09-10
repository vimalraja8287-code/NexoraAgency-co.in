import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "Packages", to: "/" as const, hash: "packages" },
  { label: "Workflow", to: "/" as const, hash: "workflow" },
  { label: "Team", to: "/team" as const },
  { label: "Contact", to: "/" as const, hash: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300 pointer-events-none">
      <nav
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-500 pointer-events-auto ${
          scrolled
            ? "glass-strong border border-white/10 shadow-2xl py-3 px-6"
            : "glass border border-white/5 py-4 px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo with official nexora-logo.jpg */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/20 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300 bg-white">
              <img
                src="/nexora-logo.jpg"
                alt="Nexora Agency Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold font-heading tracking-tight text-white group-hover:text-primary transition-colors">
                NEXORA <span className="text-primary">AGENCY</span>
              </span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase -mt-1 font-semibold">
                Digital Growth Engine
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                activeProps={{
                  className: "bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/30",
                }}
                inactiveProps={{
                  className: "text-muted-foreground hover:text-white hover:bg-white/5",
                }}
                className="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/"
              hash="contact"
              className="gradient-primary text-primary-foreground px-5 py-2 rounded-xl text-xs font-bold hover:opacity-95 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Get Proposal <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-2 animate-in fade-in slide-in-from-top-3 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/"
                hash="contact"
                onClick={() => setMobileOpen(false)}
                className="w-full gradient-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30"
              >
                Get Proposal <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
