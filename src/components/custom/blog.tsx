"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

const blogs = [
  {
    id: 1,
    title: "How Zulu Tech is Revolutionizing the Tech Industry",
    description:
      "Discover how Zulu Tech has been at the forefront of technological innovation, transforming the way businesses operate.",
    image:
      "https://www.applify.com.sg/blog/wp-content/uploads/2023/06/10-Top-Tech-Companies-in-Singapore-1024x684-1.jpg",
    date: "December 13, 2024",
    author: "Ketema G ",
  },
  {
    id: 2,
    title: "The Journey of Zulu Tech: From Startup to Industry Leader",
    description:
      "Explore the story of Zulu Tech's growth, challenges, and achievements over the years.",
    image:
      "https://images.ctfassets.net/pdf29us7flmy/dnl4o6zfF0zRWbY441wV0/f25aacef71cf7b39eb3126ee6c7f846d/datawarehouse1_GettyImages-482872096_.jpeg?w=720&q=100&fm=jpg",
    date: "November 28, 2024",
    author: "Admasu A.",
  },
  {
    id: 3,
    title: "Top 5 Innovations by Zulu Tech You Should Know About",
    description:
      "A deep dive into the most impactful innovations introduced by Zulu Tech.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhZamBXaYeXmChQ7nMTF8RlFhTULcw43FAQ&sg",
    date: "October 15, 2024",
    author: "Tesfaye A",
  },
];

export const BlogsPage = () => {
  const { theme } = useTheme();
  const bgColor =
    theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800";

  return (
    <section className={`${bgColor} min-h-screen`}>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
        <div
          className="absolute inset-0"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 80%)" }}
        ></div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-white mb-4"
          >
            Zulu Tech Blogs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-200"
          >
            Insights, Innovations, and Stories from Zulu Tech
          </motion.p>
        </div>
      </div>

      <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Blog List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover h-52 w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-400">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {blog.description}
                </p>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{blog.date}</span>
                  <span>By {blog.author}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
