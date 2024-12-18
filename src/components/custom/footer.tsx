import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./logo";
import { Facebook, Linkedin, Twitter, Mail } from "lucide-react";
import { FaLinkedin, FaTiktok, FaInstagram } from "react-icons/fa";


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

              <Link href="https://www.linkedin.com/company/zulu-software/" target="_blank"
                rel="noopener noreferrer" className="block text-white hover:text-gray-200">
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link href="https://www.tiktok.com/@zulu_tech?_t=8sJIKXbjuI2&_r=1" target="_blank"
                rel="noopener noreferrer" className="block text-white hover:text-gray-200">
                <FaTiktok className="w-6 h-6" />
              </Link>
              <Link href="https://www.instagram.com/zulutech_/profilecard/?igsh=MXhkOW02ejNpZnRicQ==" target="_blank"
                rel="noopener noreferrer" className="block text-white hover:text-gray-200">
                <FaInstagram className="w-6 h-6" />
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
