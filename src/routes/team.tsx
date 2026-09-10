import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Nexora Agency" },
      {
        name: "description",
        content:
          "Meet Nexora’s leadership, developers, AI team, digital marketing, and business development partners.",
      },
      { property: "og:title", content: "Team — Nexora Agency" },
      {
        property: "og:description",
        content:
          "Developers, AI specialists, marketers, and BD leads — the people behind Nexora.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-8">
        <TeamSection />
      </div>
      <CTABanner
        text="Want to work with our team?"
        urgency="Get a custom proposal tailored to your project"
      />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
