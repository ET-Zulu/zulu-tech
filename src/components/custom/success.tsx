"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SuccessStory } from "@/lib/types";

const successStories: SuccessStory[] = [
  {
    id: 2,
    title: "E-Commerce Platform ",
    description:
      "We develop fully customized e-commerce applications that cater to your specific business needs. From small online stores to large marketplaces, we design and develop solutions that scale with your business growth. Cross-Platform Solutions: We create cross-platform e-commerce applications that provide a consistent shopping experience across web, iOS, and Android platforms. Our apps are designed to work smoothly on any device, ensuring accessibility and convenience for your customers. User Persona Integration:    ",
    image: "/images/e-com.png",
    liveUrl: "https://trendyboutique.com",
    techStack: ["React", "Next.js", "TailwindCSS", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "C02 footprint Analysis.",
    description:
      "The CO2 Footprint application is a web platform built with a Solidity backend for storing analysis results, a React.js frontend for user interaction, and Python for running the LLM model to perform data analysis.",
    image: "/images/carbon.png",
    liveUrl: "https://techsolutions.com",
    techStack: ["Vue.js", "Nuxt.js", "PostgreSQL", "AWS"],
  },
  {
    id: 4,
    title: "Brand Revitalization for Fresh Juice Co.",
    description:
      "This project involved a complete brand revitalization for Fresh Juice Co., including a new logo, packaging design, and website. Our approach focused on creating a vibrant and fresh aesthetic that reflects the health-conscious values of the brand.",
    image: "/project4.png",
    liveUrl: "https://freshjuice.com",
    techStack: ["React", "Express", "MySQL", "Redux"],
  },
];

export const Success = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#05132e]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Customer Success Stories{" "}
            <span className="text-blue-500 underline italic font-serif">
              @Zulu
            </span>
          </h2>
          <p className="text-gray-600">
            Real-world stories of our client achievements in software
            development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#0b224d] rounded-lg p-6 shadow-lg"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Project Screenshots */}
              <div
                className="aspect-square bg-gray-100 dark:bg-[#05132e] rounded-lg"
                style={{
                  backgroundImage: "url(/images/carbon.png)",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="aspect-square bg-gray-100 dark:bg-[#05132e] rounded-lg"
                style={{
                  backgroundImage: "url(/images/e-com.png)",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold">15+</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Active Projects
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {successStories.map((story) => (
              <Card
                key={story.id}
                className="p-4 hover:shadow-lg transition-shadow duration-300 dark:bg-[#05132e] dark:border-gray-400"
              >
                <div className="flex max-sm:flex-col items-center gap-4">
                  <div className=" bg-purple-100 p-8 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{story.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {story.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
