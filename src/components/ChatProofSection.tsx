import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { Check, CheckCheck, Instagram } from "lucide-react";

const whatsappChats = [
  {
    name: "Rajesh K.",
    time: "10:42 AM",
    messages: [
      { from: "client", text: "Hi, I saw your work. Need a website for my shop", time: "10:40 AM" },
      { from: "us", text: "Sure! I'll send a free homepage sample today 👍", time: "10:41 AM" },
      { from: "client", text: "Looks great 🔥 Let's go ahead", time: "10:42 AM" },
    ],
  },
  {
    name: "Priya S.",
    time: "Yesterday",
    messages: [
      { from: "client", text: "Website is live! 😍", time: "6:12 PM" },
      { from: "client", text: "We are getting more customers now, thank you!", time: "6:12 PM" },
      { from: "us", text: "So happy to hear that 🙌", time: "6:15 PM" },
    ],
  },
];

const instagramDMs = [
  {
    name: "fitness_arjun",
    messages: [
      { from: "client", text: "Bro your designs are 🔥🔥" },
      { from: "client", text: "How much for a gym landing page?" },
      { from: "us", text: "DM'd you the details ✅" },
    ],
  },
  {
    name: "cafe_meera",
    messages: [
      { from: "client", text: "Very fast delivery 👌" },
      { from: "client", text: "Customers loving the new menu page" },
    ],
  },
];

export default function ChatProofSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="mx-auto max-w-7xl">
        <AnimatedItem className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Social Proof</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Real Client <span className="gradient-text">Results & Feedback</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Genuine messages from clients we've helped grow online
          </p>
        </AnimatedItem>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* WhatsApp chats */}
          {whatsappChats.map((chat) => (
            <AnimatedItem key={chat.name} className="glass rounded-2xl overflow-hidden glow-border-hover transition-all duration-300">
              <div className="flex items-center gap-3 px-4 py-3 bg-[oklch(0.25_0.08_155)]/40 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[oklch(0.65_0.18_155)] to-[oklch(0.55_0.15_155)] flex items-center justify-center text-white font-bold">
                  {chat.name[0]}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold blur-[2px] hover:blur-0 transition-all">{chat.name}</p>
                  <p className="text-xs text-muted-foreground">online</p>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-[oklch(0.55_0.15_155)]/20 text-[oklch(0.75_0.18_155)] font-semibold">WhatsApp</span>
              </div>
              <div className="p-4 space-y-2 bg-background/40 min-h-[220px]">
                {chat.messages.map((m, i) => (
                  <div key={i} className={`flex ${m.from === "us" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm ${
                        m.from === "us"
                          ? "bg-[oklch(0.45_0.15_155)]/60 text-white rounded-br-sm"
                          : "bg-secondary text-foreground rounded-bl-sm"
                      }`}
                    >
                      <p>{m.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[10px] opacity-70">{m.time}</span>
                        {m.from === "us" && <CheckCheck size={12} className="text-[oklch(0.75_0.2_220)]" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedItem>
          ))}

          {/* Instagram DMs */}
          {instagramDMs.map((chat) => (
            <AnimatedItem key={chat.name} className="glass rounded-2xl overflow-hidden glow-border-hover transition-all duration-300">
              <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[oklch(0.55_0.2_330)]/30 to-[oklch(0.6_0.2_30)]/30 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[oklch(0.6_0.22_330)] via-[oklch(0.65_0.22_30)] to-[oklch(0.7_0.2_60)] flex items-center justify-center">
                  <Instagram size={18} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold blur-[2px] hover:blur-0 transition-all">@{chat.name}</p>
                  <p className="text-xs text-muted-foreground">Active now</p>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-[oklch(0.6_0.22_330)]/20 text-[oklch(0.75_0.2_330)] font-semibold">Instagram</span>
              </div>
              <div className="p-4 space-y-2 bg-background/40 min-h-[220px]">
                {chat.messages.map((m, i) => (
                  <div key={i} className={`flex ${m.from === "us" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm ${
                        m.from === "us"
                          ? "bg-gradient-to-br from-[oklch(0.55_0.22_330)] to-[oklch(0.6_0.22_30)] text-white rounded-br-sm"
                          : "bg-secondary text-foreground rounded-bl-sm"
                      }`}
                    >
                      <p>{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedItem className="text-center text-xs text-muted-foreground mt-6 flex items-center justify-center gap-2">
          <Check size={14} className="text-primary" />
          Names slightly blurred for client privacy
        </AnimatedItem>
      </AnimatedSection>
    </section>
  );
}
