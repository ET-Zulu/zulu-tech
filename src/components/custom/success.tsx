"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SuccessStory } from "@/lib/types";

const successStories: SuccessStory[] = [
  {
    id: 2,
    title: "E-Commerce Platform for Trendy Boutique",
    description:
      "Designed for the Trendy Boutique, this e-commerce platform focuses on delivering an intuitive user experience that drives conversions. By utilizing strategic calls-to-action and seamless navigation, we helped the boutique increase their online engagement and sales. The integration of analytics tools allows for ongoing performance tracking, ensuring continuous improvement in customer satisfaction.",
    image: "/project2.png",
  },
  {
    id: 3,
    title: "Performance Optimization for Tech Solutions Inc.",
    description:
      "Optimized for performance, the Tech Solutions Inc. website underwent a comprehensive redesign to enhance speed and usability. We utilized modern web technologies to reduce load times and improve mobile responsiveness. The revamped site not only elevates user experience but also supports the company's growth by attracting more clients through better search engine visibility.",
    image: "/project3.png",
  },
  {
    id: 4,
    title: "Brand Revitalization for Fresh Juice Co.",
    description:
      "This project involved a complete brand revitalization for Fresh Juice Co., including a new logo, packaging design, and website. Our approach focused on creating a vibrant and fresh aesthetic that reflects the health-conscious values of the brand. The new online presence has significantly increased customer engagement and loyalty, leading to a 30% boost in sales within the first quarter of launch.",
    image: "/project4.png",
  },
  // {
  //   id: 5,
  //   title: "Mobile App Development for Fitness Tracker",
  //   description:
  //     "We developed a cutting-edge mobile app for a leading fitness tracker brand, focusing on user-friendly features that enhance workout experiences. The app includes personalized training plans, progress tracking, and social sharing capabilities. With a sleek design and intuitive navigation, the app has garnered positive reviews, resulting in a substantial increase in user downloads and active engagement.",
  //   image: "/project5.png",
  // },
  // {
  //   id: 6,
  //   title: "Digital Marketing Campaign for Eco-Friendly Products",
  //   description:
  //     "Executed a comprehensive digital marketing campaign for an eco-friendly products company aimed at increasing brand awareness and driving online sales. Utilizing social media, content marketing, and email campaigns, we crafted a narrative that resonates with environmentally conscious consumers. The campaign led to a remarkable 50% increase in website traffic and significantly boosted online sales during the promotional period.",
  //   image: "/project6.png",
  // },
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
              <div className="aspect-square bg-gray-100 dark:bg-[#05132e] rounded-lg"></div>
              <div className="aspect-square bg-gray-100 dark:bg-[#05132e] rounded-lg"></div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold">15+</h3>
              <p className="text-gray-600">Active Projects</p>
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
                <div className="flex items-center gap-4">
                  <div className=" bg-purple-100 p-8 rounded-full flex items-center justify-center">
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
