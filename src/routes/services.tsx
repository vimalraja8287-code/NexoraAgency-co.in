import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nexora Agency" },
      {
        name: "description",
        content:
          "Nexora builds web apps, mobile apps, and AI-powered products — plus SEO, ads, email, social, branding, and video. Custom proposals only.",
      },
      { property: "og:title", content: "Services — Nexora Agency" },
      {
        property: "og:description",
        content:
          "Build, grow, and create with one agency: development, AI, and digital marketing. Get a custom proposal.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-8">
        <ServicesSection />
      </div>
      <CTABanner
        text="Ready for a custom proposal?"
        urgency="Tell us your goals — we’ll recommend the right mix"
      />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
