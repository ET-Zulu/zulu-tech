import { motion } from "framer-motion";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { TestimonialType } from "@/lib/types";

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Client Name",
    role: "CEO",
    comment: "Best of the best! Great experience working with this team.",
    rating: 5,
    image: "/avatar1.png",
  },
  // Add more testimonials here
];

export const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Customer Testimonial</h2>
          <p className="text-gray-600">
            Our Customers Think, Our Greatest Asset
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    {/* Avatar image would go here */}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
