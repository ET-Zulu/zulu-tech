"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "How We Went from Zero to $2,000/Week in Just 2 Months ",
    description:
      "They said freelancing would be tough. They said building a team would be harder. But here we are, started making $2,000 per week and just crossed $5,000 on Upwork! 🎉\nWhat's the secret sauce? ",
    add: "  It's simple:\n1️⃣ Find the right team.\n2️⃣ Fly to the sky. ✈️\n...and occasionally yell \"SHOW ME THE MONEY!\" for motivation. 💼✨\nAt this rate, we're wondering:\n🤔 When do we hit the millionaire milestone? Next year? Next month? Next week?\n(Hey, math is hard, but freelancing isn't when you love what you do!)\nTo anyone out there hustling:\nKeep grinding.\nSurround yourself with rockstars.\nAnd remember, the sky's the limit (or at least until we run out of coffee ☕).\nHere's to smashing more milestones and, who knows, maybe launching our own rocket someday. 🚀💼 #Teamwork #Success #ZuluTech\nWhat's your favorite freelancing moment? Drop it below 👇",
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQHossJ0_iuQOA/feedshare-shrink_800/feedshare-shrink_800/0/1733815154041?e=2147483647&v=beta&t=pAfp_zB0tsSLuVssG6u5FpKOraaV4kK_Q2gfGx89T9Y",
    date: "December 13, 2024",
    author: "Ketema G ",
    readTime: "5 min read",
  },
  {
    id: 2,
    title:
      "🌟 Together We Achieve More: 100% JSS, 3 New Contracts, and New Zuluwers! 🚀",
    description:
      "This Monday was a testament to the power of collaboration:\n✅ Secured three new contracts 📝\n✅ Maintained an inspiring 100% Job Success Score 🌟\n✅ Welcomed brilliant new Zuluwers to the family! Henok Belachew and Abel Kidanemariam🥳 \nWhen great minds come together,",
    add: 'the possibilities are endless. As the African proverb says, "If you want to go fast, go alone. If you want to go far, go together."\nBy collaborating, supporting one another, and sharing our strengths, we can achieve extraordinary things. Here\'s to making Zulu Tech a force to be reckoned with! 💪',
    image:
      "https://images.ctfassets.net/pdf29us7flmy/dnl4o6zfF0zRWbY441wV0/f25aacef71cf7b39eb3126ee6c7f846d/datawarehouse1_GettyImages-482872096_.jpeg?w=720&q=100&fm=jpg",
    date: "November 28, 2024",
    author: "Admasu A.",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: " 🎉From $150 to $600 to $20/hour! 🎉",
    description:
      'Our first Upwork project was like stepping into the ring! The client started at $150, but one bold Zuluwer came in swinging with a $1000 offer. The client countered, "How about $500 and done in a week?"\nWith McGregor-like confidence, we replied, "Listen, mate.',
    add: " It's $600 for top-quality, delivered in two weeks. You want cheap, you'll get knocked out in round one!\" The client agreed, and even though it took four weeks, we delivered a project they absolutely loved.\nNow? They've signed us for $20/hour and left us glowing feedback. 🥳\nRemember you decide your worth, not the client. Don't fall for cheap; show them what you're worth, and they'll pay for it! 💪✨\nAs McGregor would say, \"We're not here to take part; we're here to take OVER!\" 🥂\n#KnowYourWorth #UpworkSuccess #ZuluAgency",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhZamBXaYeXmChQ7nMTF8RlFhTULcw43FAQ&sg",
    date: "October 15, 2024",
    author: "Tesfaye A",
    readTime: "6 min read",
  },
];

export default function BlogDetailPage() {
  const { theme } = useTheme();
  const params = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const blogId = parseInt(params.id);
    const foundBlog = blogs.find((b) => b.id === blogId);
    setBlog(foundBlog);
  }, [params.id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  const bgColor =
    theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800";

  return (
    <section className={`${bgColor} min-h-screen`}>
      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <img
          src={blog.image}
          alt={blog.title}
          //  layout="fill"
          //objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold mb-4"
            >
              {blog.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl"
            >
              {blog.description}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Link
          href="/blogs"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Blogs
        </Link>

        <div className="flex flex-wrap items-center justify-between mb-8">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Calendar size={18} className="mr-2" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <User size={18} className="mr-2" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Clock size={18} className="mr-2" />
              <span>{blog.readTime}</span>
            </div>
          </div>
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Share2 size={18} className="mr-2" />
            Share
          </button>
        </div>

        <article className="prose lg:prose-xl dark:prose-invert max-w-none">
          <div className="whitespace-pre-line">
            {blog.description + blog.add}
          </div>
        </article>
      </div>
    </section>
  );
}
