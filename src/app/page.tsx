import Hero from "@/components/sections/hero"
import Features from "@/components/sections/Features"
import TestimonialsSection from "@/components/sections/testimonials-section"

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-y-12">
      <Hero />
      <Features />
      <TestimonialsSection />
    </div>
  )
}
