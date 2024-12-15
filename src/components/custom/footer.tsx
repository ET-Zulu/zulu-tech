import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./logo";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold ">
              <Logo />
            </h3>
            <p className="text-gray-400 mb-4">Turning Vision into Reality,</p>
            <div className="flex space-x-4">{/* Social media icons */}</div>
          </div>
          <div>
            <div className=" flex gap-5">
              <Link href="#" className="block text-white hover:text-gray-200">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="block text-white hover:text-gray-200">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="block text-white hover:text-gray-200">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>© Copyright 2024, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
