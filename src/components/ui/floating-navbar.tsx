"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="fixed  left-4 right-0 z-[5000]">
      {/* Mobile/Small Screen Drawer Toggle */}
      <div className="sm:hidden flex justify-between items-center px-4 py-2 bg-white w-max dark:bg-black shadow-md">
        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="text-black dark:text-white focus:outline-none"
        >
          ☰ {/* Simple menu icon, can replace with an SVG/icon */}
        </button>
      </div>

      {/* Drawer for Small Screens */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 bottom-0 w-3/4 bg-white dark:bg-black shadow-lg z-[6000] overflow-y-auto"
          >
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`drawer-link-${idx}`}
                  href={navItem.link}
                  onClick={() => setIsDrawerOpen(false)}
                  className={cn(
                    "block px-4 py-2 rounded-md text-lg transition-all",
                    pathname === navItem.link
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                  )}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop/Medium+ Screens Navbar */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "hidden sm:flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-4 py-2 items-center justify-center space-x-4",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`nav-link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative items-center flex space-x-1 text-sm px-4 py-2 rounded-full transition-all",
                "hover:text-black hover:dark:text-white hover:border dark:hover:border-white/[0.2] border-transparent",
                pathname === navItem.link
                  ? "text-black dark:text-white border dark:border-white/[0.2]"
                  : "text-neutral-600 dark:text-neutral-50"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
            </Link>
          ))}
          <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
            <span>Login</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
