"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Trial = () => {
  return (
    <section className="py-20 bg-blue-600 text-white ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8"></h2>

          <div className="flex justify-center gap-8 mb-8">
            {[1, 2, 3, 4].map((step) => (
              <motion.div
                key={step}
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
              >
                <span className="text-purple-600 font-bold">{step}</span>
              </motion.div>
            ))}
          </div>

          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
