"use client";

import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mjkvqylb");
  const [showPopup, setShowPopup] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const validateForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const message = formData.get("message") as string | null;

    const errors: FormErrors = {};

    if (!name) {
      errors.name = "Name is required.";
    }
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email address.";
    }
    if (!message) {
      errors.message = "Message is required.";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      try {
        await handleSubmit(event);
        setShowPopup(true);
        form.reset();
        setTimeout(() => setShowPopup(false), 3000);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br p-6">
      <div className="mx-auto max-w-7xl mt-10">
        <div className="rounded-3xl p-8 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-white/10 transform -skew-y-6" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-white/5 transform -skew-y-6" />

          <div className="bg-white rounded-lg shadow-xl p-8 relative">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-black">
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

                <form className="space-y-6" onSubmit={validateForm}>
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="bg-[#F4F4FE] border-0 outline-none py-7"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      className="bg-[#F4F4FE] border-0 outline-none py-7"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Go ahead, we are listening..."
                      className="bg-[#F4F4FE] border-0 min-h-[120px] resize-none"
                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-sm">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-[#6366F1] py-5 text-white"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </div>

              <div className="flex flex-col justify-between">
                <div className="relative h-64 mb-8">
                  <Image
                    src="/images/contact-us.avif"
                    alt="Contact illustration"
                    className="object-contain"
                    width={400}
                    height={400}
                  />
                </div>

                <div className="space-y-4 text-gray-600">
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

          {showPopup && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
              <div className="bg-white p-8 rounded shadow-lg text-center">
                <p className="text-lg font-semibold text-gray-700 mb-4">
                  Thanks for your submission!
                </p>
                <Button
                  onClick={() => setShowPopup(false)}
                  className="bg-blue-500 hover:bg-[#6366F1] py-2 px-4 text-white rounded"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
