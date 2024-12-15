"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

const teamMembers = [
  {
    id: 1,
    name: "Ketema G",
    role: "CEO & Founder",
    image: "/images/ketema.jpg",
  },
  {
    id: 2,
    name: "Tesfaye A.",
    role: "Chief Technology Officer",
    image: "/images/tesfish.jpg",
  },
  {
    id: 3,
    name: "Admas G",
    role: "Senior Dev",
    image: "/team-placeholder-3.png",
  },
];

const achievements = [
  {
    id: 1,
    title: "10,000+",
    description: "Happy Clients",
  },
  {
    id: 2,
    title: "500+",
    description: "Projects Delivered",
  },
  {
    id: 3,
    title: "20+",
    description: "Countries Served",
  },
];

export const AboutUs = () => {
  const { theme } = useTheme();
  const bgColor =
    theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800";

  return (
    <section className={`${bgColor} min-h-screen`}>
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] bg-[url(
'/images/project_2.png')]
             bg-cover bg-center z-0 flex items-center justify-center bg-blue-500 "
      >
        <div
          className="absolute inset-0 "
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 80%)" }}
        ></div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-white mb-4"
          >
            Welcome to Zulu Tech
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-200"
          >
            Empowering Innovation and Driving Success
          </motion.p>
        </div>
      </div>

      <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Company Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Our Story</h2>
          <p className="text-lg leading-7 text-gray-600 dark:text-white">
            Zulu Tech was founded in 2015 with a vision to bring innovative
            solutions to the tech industry. What started as a small group of
            passionate developers has grown into a global company serving
            thousands of clients worldwide. Our mission is to empower businesses
            through cutting-edge technology and exceptional customer support.
          </p>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Our Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="p-6 bg-gray-100 dark:text-white  dark:bg-[#05132e] shadow rounded-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 dark:bg-[#05132e]">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-white">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gray-100  dark:text-white dark:bg-[#05132e] shadow rounded-lg p-6 text-center"
              >
                <Image
                  src={member.image}
                  alt={`Team Member ${member.name}`}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-500 dark:text-white">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision and Mission */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-blue-800 dark:text-white">
            Our Vision & Mission
          </h2>
          <p className="text-lg leading-7 text-gray-600 mb-4 dark:text-white">
            Our vision is to become a global leader in providing technology
            solutions that drive transformation and success for businesses of
            all sizes.
          </p>
          <p className="text-lg leading-7 text-gray-600 dark:text-white">
            Our mission is to deliver exceptional value to our clients through
            innovative solutions, dedicated support, and an unwavering
            commitment to quality.
          </p>
        </section>
      </div>
    </section>
  );
};
