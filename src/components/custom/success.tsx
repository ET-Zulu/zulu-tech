"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SuccessStory } from "@/lib/types";

const successStories: SuccessStory[] = [
  {
    id: 1,
    title: "Project 1",
    description: "Engineered for personal portfolio",
    image: "/project1.png",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Designed for business growth",
    image: "/project2.png",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Optimized for performance",
    image: "/project3.png",
  },
];

export const Success = () => {
  return (
    <section className="py-20 bg-gray-50">
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
            className="bg-white rounded-lg p-6 shadow-lg"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Project Screenshots */}
              <div className="aspect-square bg-gray-100 rounded-lg"></div>
              <div className="aspect-square bg-gray-100 rounded-lg"></div>
              <div className="aspect-square bg-gray-100 rounded-lg"></div>
              <div className="aspect-square bg-gray-100 rounded-lg"></div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold">15,000+</h3>
              <p className="text-gray-600">Active Laravel Projects</p>
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
                className="p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{story.title}</h4>
                    <p className="text-gray-600">{story.description}</p>
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
