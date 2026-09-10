import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutAgencySection from "@/components/AboutAgencySection";
import ServicesSection from "@/components/ServicesSection";
import WhyBrandingSection from "@/components/WhyBrandingSection";
import ProductionWorkflow from "@/components/ProductionWorkflow";
import PricingPackages from "@/components/PricingPackages";
import ComparisonTable from "@/components/ComparisonTable";
import ExecutionCadence from "@/components/ExecutionCadence";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsSection from "@/components/ProjectsSection";
import Testimonials from "@/components/Testimonials";
import ImportantNotes from "@/components/ImportantNotes";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexora Agency — Digital Personal Branding & Content Management (2026 Proposal)" },
      {
        name: "description",
        content:
          "Nexora Agency builds web platforms, mobile apps, AI workflows, and manages digital personal branding & content. Monthly packages starting at ₹8,000.",
      },
      { property: "og:title", content: "Nexora Agency — Digital Personal Branding & Content Management" },
      {
        property: "og:description",
        content:
          "Twelve services, one connected system. Explore our Starter, Growth, and Premium packages.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#0a1128] text-foreground">
      <Navbar />
      <HeroSection />
      <AboutAgencySection />
      <ServicesSection />
      <WhyBrandingSection />
      <ProductionWorkflow />
      <PricingPackages />
      <ComparisonTable />
      <ExecutionCadence />
      <WhyChooseUs />
      <ProjectsSection />
      <Testimonials />
      <ImportantNotes />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
