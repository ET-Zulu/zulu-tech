'use client'

import { testimonials } from "@/lib/data";
import StarRatingTestimonial from "../custom/testimonials";
import { useTheme } from "next-themes";

export default function TestimonialsSection() {
  const { theme } = useTheme();
  return (
    <div>
      <StarRatingTestimonial mode={theme} testimonials={testimonials}/>
    </div>
  )
}