"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

const projects = [
  {
    id: 1,
    title: "Sulala Farm Management System",
    description:
      "Sulala is an advanced animal management platform that simplifies tracking breeding details, medical records, and overall farm operations.",
    techStack: ["Flutter", "NextJS", "Django"],
    image: "/images/project_1.png", // Replace with real image
    liveUrl: "https://example.com/sulala",
    category: "SaaS Development",
  },
  {
    id: 2,
    title: "Scholarship Owl",
    description:
      "ScholarshipOwl makes education affordable and accessible through AI-powered tools and technology.",
    techStack: ["NodeJS", "ReactJS", "Docker", "Figma"],
    image: "/images/carbon.png", // Replace with real image
    liveUrl: "https://example.com/scholarship-owl",
    category: "Webapp Development",
  },
  {
    id: 3,
    title: "Coca-Cola Family Trivia Challenge App",
    description:
      "A beautifully designed application to connect family members while having fun at holiday reunions.",
    techStack: ["NodeJS", "ReactJS", "Firebase", "MediaPipe"],
    image: "/images/e-com.png", // Replace with real image
    liveUrl: "https://example.com/coca-cola",
    category: "Webapp Development",
  },
];

export const ProjectsPage = () => {
  return (
    <section className="min-h-screen dark:bg-[#05132e]">
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
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-200"
          >
            Selected success stories from our project portfolio
          </motion.p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl flex flex-col justify-between shadow-lg bg-gray-100 dark:bg-gray-800 overflow-hidden"
            >
              {/* Project Image */}
              <div className="h-56 w-full relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full px-3 py-1 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Footer */}
                <div className=" mt-6 flex items-center justify-between">
                  <span className="text-blue-500 text-sm font-semibold">
                    {project.category}
                  </span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
