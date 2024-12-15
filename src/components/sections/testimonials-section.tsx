"use client";

import { testimonials } from "@/lib/data";
// import StarRatingTestimonial from "../custom/testimonials";
import { useTheme } from "next-themes";
import { Testimonials } from "../custom/testimonials";

export default function TestimonialsSection() {
  const { theme } = useTheme();
  return (
    <div>
      <Testimonials />
      {/* <StarRatingTestimonial mode={theme} testimonials={testimonials} /> */}
    </div>
  );
}
