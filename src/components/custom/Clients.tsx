// components/sections/Clients.tsx
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const clientLogos = [
  { name: "Music", logo: "🎵" },
  { name: "Slack", logo: "📱" },
  { name: "Watch", logo: "⌚" },
  { name: "Spotify", logo: "🎧" },
  { name: "Microsoft", logo: "💻" },
];

export const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Clients</h2>
          <p className="text-gray-600">
            Trusted by top companies across the world
          </p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              className="grayscale hover:grayscale-0 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <span className="text-4xl">{client.logo}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
