

# Nexora Agency Website — Conversion-Optimized Build

This plan builds the entire Nexora website from scratch (the current codebase is still placeholder) with all your conversion optimization requests baked in from the start.

## Design System Updates
- Dark theme: near-black background, purple-blue gradient accents
- Glassmorphism cards, glowing borders, gradient text headings
- Custom CSS variables in `src/styles.css` for the dark palette

## Components to Create (in `src/components/`)

| Component | Purpose |
|-----------|---------|
| `Navbar` | Sticky glassmorphism nav with CTA button |
| `HeroSection` | Bold headline with problem/outcome framing, dual CTAs, trust micro-copy, mockup |
| `ProblemsSection` | "No website? Low visibility? Not getting customers?" — pain points with outcomes |
| `ProjectsSection` | 3 featured project cards with results and hover effects |
| `ServicesSection` | 5 service cards with pricing, delivery time, outcome-based benefits |
| `WhyChooseUs` | 6-feature grid with icons |
| `USPSection` | Free sample, live demos, before/after, conversion-focused callouts |
| `CaseStudy` | Tailor shop before → after story |
| `TeamSection` | 4 team member glassmorphism cards |
| `AboutSection` | Mission + tech stack badges |
| `Testimonials` | 3 realistic, result-focused testimonials |
| `ContactSection` | Form + urgency banner + WhatsApp CTA with pre-filled message |
| `Footer` | Branding, links, social icons, tagline |
| `WhatsAppButton` | Sticky floating button (bottom-right) with pre-filled "Hi, I need a website" |
| `CTABanner` | Reusable CTA strip repeated between sections |

## Conversion-Specific Details

**Hero Section:**
- Headline: "We build fast, modern websites that grow your business."
- Added line: "We don't just build websites — we build websites that bring customers."
- Trust micro-copy: "No advance needed for demo" · "Fast delivery guaranteed"
- Dual CTAs: gradient "Get Your Website" + outline "Book Free Consultation"

**Problems → Outcomes Section** (new dedicated section):
- Left: pain points ("No website", "Low online visibility", "Not getting customers")
- Right: outcomes ("Get more leads", "Increase inquiries", "Grow your business")

**Repeated CTAs:**
- CTA banners after Projects, Services, and Case Study sections
- Each with urgency: "Limited slots available this week"

**Services — outcome-based points:**
- Each card includes: "Get more customers", "Build trust online", "Mobile optimized for all users"

**Testimonials — realistic and result-focused:**
- "Got 15+ inquiries within the first week of launch"
- "Professional team, delivered in just 4 days"
- "Our online presence completely transformed — customers find us easily now"

**Contact — WhatsApp quick message:**
- Pre-filled: `https://wa.me/916385880259?text=Hi%2C%20I%20need%20a%20website%20for%20my%20business`
- Urgency banner: "Limited slots available this week"
- Trust: "No advance needed for demo"

## Route Structure
Single-page scrolling site on `src/routes/index.tsx` — appropriate for a conversion-focused landing page. All sections render on one page with smooth scroll navigation.

## Technical Approach
- All animations via CSS transitions and Tailwind utilities (no extra dependencies needed)
- Intersection Observer for scroll-triggered fade-ins via a small `useScrollAnimation` hook
- Lucide React icons for all iconography (already available)

