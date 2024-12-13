"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ServiceCard } from "@/lib/types";

const services: ServiceCard[] = [
  {
    title: "Custom Web Development",
    description:
      "Tailored web solutions to meet your unique business needs with a focus on user experience and scalability.",
    icon: "🌍",
  },
  {
    title: "Content Management Systems",
    description:
      "Powerful and flexible content management systems designed to give you full control over your website's content.",
    icon: "📝",
  },
  {
    title: "Consultancy Services",
    description:
      "Expert advice and strategic guidance to help you navigate the complexities of digital transformation.",
    icon: "💡",
  },
  {
    title: "Mobile App Development",
    description:
      "End-to-end mobile app development services, creating intuitive and high-performance apps for iOS and Android.",
    icon: "📱",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Custom e-commerce platforms designed to deliver a seamless shopping experience, driving business growth.",
    icon: "🛒",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance and support services to ensure your applications stay updated, secure, and perform at their best.",
    icon: "🔧",
  },
  {
    title: "AI Solutions",
    description:
      "Innovative AI solutions tailored to your business needs, enhancing efficiency and decision-making through intelligent automation.",
    icon: "🤖",
  },
  {
    title: "LLM Development",
    description:
      "Custom large language model development services to create conversational agents and enhance user interactions on your platforms.",
    icon: "📜",
  },
];
export const Services = () => {
  return (
    <section className=" bg-white cursor-pointer">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Customized Services for Your Path,
            <br />
            Your Success is Our Goal
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="h-full"
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
