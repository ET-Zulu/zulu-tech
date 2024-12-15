"use client";

import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br p-6">
      <div className="mx-auto max-w-7xl mt-10">
        <div className=" rounded-3xl p-8  overflow-hidden">
          {/* White curved shapes for decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-white/10 transform -skew-y-6" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-white/5 transform -skew-y-6" />

          <div className="bg-white rounded-lg shadow-xl p-8 relative">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="absolute max-sm:top-0 max-sm:sticky top-[50%] right-2 transform -translate-y-1/2  w-12 bg-blue-500 rounded-l-lg p-2 space-y-4">
                  <Link
                    href="#"
                    className="block text-white hover:text-gray-200"
                  >
                    <Facebook className="w-6 h-6" />
                  </Link>
                  <Link
                    href="#"
                    className="block text-white hover:text-gray-200"
                  >
                    <Twitter className="w-6 h-6" />
                  </Link>
                  <Link
                    href="#"
                    className="block text-white hover:text-gray-200"
                  >
                    <Linkedin className="w-6 h-6" />
                  </Link>
                </div>
                <h2 className="text-[#7B7FF6] text-3xl font-semibold mb-4">
                  Get In Touch &#128075;
                </h2>
                <p className="text-gray-600 mb-8">
                  We are here for you! How can we help?
                </p>

                <form className="space-y-6">
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    className="bg-[#F4F4FE] border-0 outline-none  focus:outline-none py-7"
                  />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-[#F4F4FE] border-0 outline-none py-7"
                  />
                  <Textarea
                    placeholder="Go ahead, we are listening..."
                    className="bg-[#F4F4FE] border-0 min-h-[120px] resize-none"
                  />
                  <Button className="w-full bg-blue-500 hover:bg-[#6366F1] py-5 text-white">
                    Submit
                  </Button>
                </form>
              </div>

              <div className="flex flex-col justify-between">
                <div className="relative h-64 mb-8">
                  <Image
                    src="/images/contact-us.avif"
                    alt="Contact illustration"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-4 text-gray-600">
                  {/* <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#F4F4FE] flex items-center justify-center">
                      <span className="text-[#7B7FF6]">📍</span>
                    </div>
                    22 Bole Denber Building
                  </div> */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#F4F4FE] flex items-center justify-center">
                      <span className="text-[#7B7FF6]">📞</span>
                    </div>
                    +251-912-323811
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#F4F4FE] flex items-center justify-center">
                      <span className="text-[#7B7FF6]">📞</span>
                    </div>
                    +251-73350968
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#F4F4FE] flex items-center justify-center">
                      <span className="text-[#7B7FF6]">✉️</span>
                    </div>
                    zulu.tech@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
        </div>
      </div>
    </div>
  );
}
