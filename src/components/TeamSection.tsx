import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import {
  Crown,
  Code2,
  Megaphone,
  Bot,
  Handshake,
  UserRound,
  Sparkles,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import imgVimalRaja from "@/assets/team-vimalraja.jpg";
import imgVelan from "@/assets/team-velan.jpeg";
import imgSarvalakshmi from "@/assets/team-sarvalakshmi.jpg";
import imgSrigaythiridevi from "@/assets/team-srigaythiridevi.jpg";
import imgVishnumedhini from "@/assets/team-vishnumedhini.png";
import imgRevathi from "@/assets/team-revathi.jpg";
import imgVijayaKumar from "@/assets/team-vijayakumar.png";
import imgKasthuri from "@/assets/team-kasthuri.jpg";

const NEXORA_INSTAGRAM_URL = "https://www.instagram.com/nexoraagency_startup?igsh=MTFxOG5vdmQ3cWIzeg%3D%3D";

type TeamMember = {
  name: string;
  role: string;
  desc: string;
  initials: string;
  image?: string;
  instagram?: string;
  linkedin?: string;
  email?: string;
  empty?: false;
};

type EmptySlot = {
  empty: true;
  label?: string;
};

type Card = TeamMember | EmptySlot;

type TeamGroup = {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  members: Card[];
};

function getInitials(name: string) {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

const groups: TeamGroup[] = [
  {
    id: "leadership",
    title: "Leadership",
    subtitle: "The founders guiding Nexora’s vision and delivery.",
    icon: Crown,
    members: [
      {
        name: "VimalRaja A.S",
        role: "Founder & CEO",
        desc: "Leads strategy, product direction, and client outcomes across teams.",
        initials: "VR",
        image: imgVimalRaja,
        instagram: NEXORA_INSTAGRAM_URL,
        linkedin: "https://www.linkedin.com/in/vimal-raja-a7718a2b3",
        email: "vimalraja8287@gmail.com",
      },
      {
        name: "Velan .S",
        role: "Co-Founder",
        desc: "Drives design-led product quality and frontend craftsmanship.",
        initials: "VS",
        image: imgVelan,
        instagram: NEXORA_INSTAGRAM_URL,
        linkedin: "https://www.linkedin.com/in/velan-s-bb8113332/",
        email: "velan55@gmail.com",
      },
    ],
  },
  {
    id: "developers",
    title: "Developers",
    subtitle: "Engineers who build web apps, platforms, and reliable systems.",
    icon: Code2,
    members: [
      {
        name: "Sarvalakshmi",
        role: "Fullstack Developer",
        desc: "Builds end-to-end features across frontend and backend.",
        initials: getInitials("Sarvalakshmi"),
        image: imgSarvalakshmi,
        instagram: NEXORA_INSTAGRAM_URL,
        linkedin: "https://www.linkedin.com/in/sarvalakshmi-s-b4583a32b/",
        email: "sarvalakshmi70@gmail.com",
      },
      {
        name: "Srigaythiridevi",
        role: "Backend Developer · Product Builder",
        desc: "Owns APIs, data layers, and product-ready backend systems.",
        initials: getInitials("Srigaythiridevi"),
        image: imgSrigaythiridevi,
        instagram: NEXORA_INSTAGRAM_URL,
        linkedin: "https://www.linkedin.com/in/srigayathridevi-e-a76b4a331/",
        email: "esrigayathridevi@gmail.com",
      },
      {
        name: "Vishnumedhini",
        role: "Software Engineer",
        desc: "Delivers clean, maintainable software across the stack.",
        initials: getInitials("Vishnumedhini"),
        image: imgVishnumedhini,
        instagram: NEXORA_INSTAGRAM_URL,
        linkedin: "https://www.linkedin.com/in/vishnu-medhini-3487ba32b/",
        email: "vishnumedhini25@gmail.com",
      },
      {
        name: "Revathi",
        role: "Product · Architecture · DevOps",
        desc: "Plans product architecture and shipping reliability.",
        initials: getInitials("Revathi"),
        image: imgRevathi,
        instagram: NEXORA_INSTAGRAM_URL,
        linkedin: "https://www.linkedin.com/in/revathi08/",
        email: "revathimuthu2004@gmail.com",
      },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Growth specialists for ads, content, and brand reach.",
    icon: Megaphone,
    members: [{ empty: true }, { empty: true }],
  },
  {
    id: "ai-team",
    title: "AI Team",
    subtitle: "Integrating intelligent features into real products.",
    icon: Bot,
    members: [
      {
        name: "VimalRaja",
        role: "AI Lead",
        desc: "Shapes AI product strategy and client-facing solutions.",
        initials: "VR",
        image: imgVimalRaja,
        instagram: NEXORA_INSTAGRAM_URL,
        linkedin: "https://www.linkedin.com/in/vimal-raja-a7718a2b3",
        email: "vimalraja8287@gmail.com",
      },
      {
        name: "Sarvalakshmi",
        role: "AI Developer",
        desc: "Implements AI features into fullstack applications.",
        initials: getInitials("Sarvalakshmi"),
        image: imgSarvalakshmi,
        instagram: NEXORA_INSTAGRAM_URL,
        linkedin: "https://www.linkedin.com/in/sarvalakshmi-s-b4583a32b/",
        email: "sarvalakshmi70@gmail.com",
      },
      {
        name: "Srigaythiridevi",
        role: "AI Developer",
        desc: "Builds backend pipelines and intelligent product logic.",
        initials: getInitials("Srigaythiridevi"),
        image: imgSrigaythiridevi,
        instagram: NEXORA_INSTAGRAM_URL,
        linkedin: "https://www.linkedin.com/in/srigayathridevi-e-a76b4a331/",
        email: "esrigayathridevi@gmail.com",
      },
      {
        name: "Vishnumedhini",
        role: "AI Engineer",
        desc: "Engineers reliable AI-powered experiences.",
        initials: getInitials("Vishnumedhini"),
        image: imgVishnumedhini,
        instagram: NEXORA_INSTAGRAM_URL,
        linkedin: "https://www.linkedin.com/in/vishnu-medhini-3487ba32b/",
        email: "vishnumedhini25@gmail.com",
      },
      {
        name: "Revathi",
        role: "AI Systems · DevOps",
        desc: "Architects and operates AI-ready infrastructure.",
        initials: getInitials("Revathi"),
        image: imgRevathi,
        instagram: NEXORA_INSTAGRAM_URL,
        linkedin: "https://www.linkedin.com/in/revathi08/",
        email: "revathimuthu2004@gmail.com",
      },
      { empty: true },
      { empty: true },
    ],
  },
  {
    id: "sales",
    title: "Sales · Business Development",
    subtitle: "Partners who help you find the right solution and start strong.",
    icon: Handshake,
    members: [
      {
        name: "VijayaKumar.M",
        role: "Business Development Executive Lead",
        desc: "Owns lead partnerships and client discovery conversations.",
        initials: "VM",
        image: imgVijayaKumar,
        instagram: NEXORA_INSTAGRAM_URL,
        linkedin: "https://www.linkedin.com/in/vijayakumar-m-56b17b333/",
        email: "mvijayakumar268@gmail.com",
      },
      {
        name: "Kasthuri",
        role: "Business Development Executive Lead",
        desc: "Guides prospects from first chat to a clear proposal path.",
        initials: getInitials("Kasthuri"),
        image: imgKasthuri,
        instagram: NEXORA_INSTAGRAM_URL,
        linkedin: "https://www.linkedin.com/in/kasthuri-p-2295b6435?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "pkasthuri204@gmail.com",
      },
      { empty: true },
      { empty: true },
    ],
  },
];

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="glass-card rounded-3xl p-7 text-center group h-full flex flex-col justify-between">
      <div>
        <div className="relative mx-auto mb-6 w-24 h-24">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-md opacity-30 group-hover:opacity-70 transition-opacity" />
          <div className="relative w-24 h-24 rounded-full gradient-primary p-1 shadow-lg shadow-primary/30">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-2xl font-extrabold font-heading gradient-text">{member.initials}</span>
              )}
            </div>
          </div>
        </div>
        <h3 className="text-lg font-bold font-heading text-foreground">{member.name}</h3>
        <p className="text-xs text-primary font-bold uppercase tracking-wider mb-3 mt-1">{member.role}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{member.desc}</p>
      </div>

      {(member.instagram || member.linkedin || member.email) && (
        <div className="flex items-center justify-center gap-3 mt-5 pt-4 border-t border-white/10">
          {member.instagram && (
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all"
              title="Instagram"
            >
              <Instagram size={15} />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all"
              title="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all"
              title={member.email}
            >
              <Mail size={15} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function EmptyCard({ label = "Coming soon" }: { label?: string }) {
  return (
    <div className="rounded-3xl p-6 text-center border border-dashed border-white/10 bg-white/5 h-full flex flex-col items-center justify-center min-h-[260px]">
      <div className="w-20 h-20 rounded-full border border-dashed border-white/20 flex items-center justify-center mb-4">
        <UserRound size={28} className="text-muted-foreground/40" />
      </div>
      <h3 className="text-base font-bold text-muted-foreground">{label}</h3>
      <span className="text-[11px] text-accent font-semibold uppercase tracking-wider block mt-1">Expanding Role</span>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="py-28 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedSection className="mx-auto max-w-7xl">
        <AnimatedItem className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            <Sparkles size={13} /> Engineering & Growth Team
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading tracking-tight">
            Meet the minds behind <span className="gradient-text">Nexora</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            Fullstack developers, AI engineers, and growth architects collaborating under one agency umbrella.
          </p>
        </AnimatedItem>

        <div className="space-y-24">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.id} id={group.id}>
                <AnimatedItem className="mb-10 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/25">
                    <Icon size={26} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-extrabold font-heading text-foreground">{group.title}</h2>
                    <p className="mt-1 text-muted-foreground text-sm max-w-xl">{group.subtitle}</p>
                  </div>
                </AnimatedItem>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {group.members.map((m, i) => (
                    <AnimatedItem key={"empty" in m && m.empty ? `${group.id}-empty-${i}` : (m as TeamMember).name + group.id}>
                      {"empty" in m && m.empty ? (
                        <EmptyCard />
                      ) : (
                        <MemberCard member={m as TeamMember} />
                      )}
                    </AnimatedItem>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}
