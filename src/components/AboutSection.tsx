import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="mx-auto max-w-5xl text-center">
        <AnimatedItem>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            About Nexora
          </p>
        </AnimatedItem>
        <AnimatedItem>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            A full-stack agency for the <span className="gradient-text">next era of growth</span>
          </h2>
        </AnimatedItem>
        <AnimatedItem>
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
            Nexora brings together developers, AI builders, digital marketers, and business
            development leads to help startups and growing businesses ship products and get found.
          </p>
        </AnimatedItem>
        <AnimatedItem>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            Our mission: help every business move from a basic online presence to a connected system
            of apps, AI, brand, and growth channels that bring real customers.
          </p>
        </AnimatedItem>
      </AnimatedSection>
    </section>
  );
}
