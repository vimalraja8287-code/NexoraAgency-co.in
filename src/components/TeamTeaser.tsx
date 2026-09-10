import { Link } from "@tanstack/react-router";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

import imgVimalRaja from "@/assets/team-vimalraja.jpg";
import imgVelan from "@/assets/team-velan.jpeg";
import imgSarvalakshmi from "@/assets/team-sarvalakshmi.jpg";
import imgVijayaKumar from "@/assets/team-vijayakumar.png";

const highlights = [
  { initials: "VR", name: "VimalRaja A.S", role: "Founder & CEO", image: imgVimalRaja },
  { initials: "VS", name: "Velan .S", role: "Co-Founder", image: imgVelan },
  { initials: "SA", name: "Sarvalakshmi", role: "Fullstack Developer", image: imgSarvalakshmi },
  { initials: "VM", name: "VijayaKumar.M", role: "BD Executive Lead", image: imgVijayaKumar },
];

export default function TeamTeaser() {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="mx-auto max-w-7xl">
        <AnimatedItem className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Builders, marketers & <span className="gradient-text">growth partners</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From product engineering to business development — meet the teams behind every proposal.
          </p>
        </AnimatedItem>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {highlights.map((m) => (
            <AnimatedItem
              key={m.name}
              className="glass rounded-2xl p-6 text-center group hover:scale-[1.03] glow-border-hover transition-all duration-300"
            >
              <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-to-br from-[oklch(0.65_0.25_280)] to-[oklch(0.55_0.22_260)] p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  {m.image ? (
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <span className="text-lg font-bold gradient-text">{m.initials}</span>
                  )}
                </div>
              </div>
              <h3 className="text-base font-bold">{m.name}</h3>
              <p className="text-xs text-primary font-semibold mt-1">{m.role}</p>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedItem className="text-center">
          <Link
            to="/team"
            className="gradient-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Meet the full team <ArrowRight size={18} />
          </Link>
        </AnimatedItem>
      </AnimatedSection>
    </section>
  );
}
