"use client";
import Image from "next/image";

interface Testimonial {
  image: string;
  name: string;
  jobtitle: string;
  text: string;
  rating: number;
}

interface TestimonialProps {
  testimonials: Testimonial[];
  mode?: string;
}

export default function StarRatingTestimonial({
  testimonials,
  mode = "dark",
}: TestimonialProps) {
  const maxDisplayedTestimonials = 6;

  return (
    <div className="mx-4">
      <h1 className="text-3xl md:text-4xl text-center font-bold dark:text-white mb-8">
        Read What Others Say About Us
      </h1>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-stretch"
        >
          {testimonials
            .slice(0, maxDisplayedTestimonials)
            .map((testimonial, index) => (
              <div
                key={index}
                className={`${
                  mode === "dark" ? "bg-black" : "bg-white"
                } border border-slate-400 w-full h-full rounded-2xl p-5 relative flex flex-col`}
              >
                <div className="flex-grow mb-5">
                  <span
                    className={`${
                      mode === "dark" ? "text-slate-100" : "text-black"
                    }`}
                  >
                    {testimonial.text}
                  </span>
                </div>
                <hr className="mb-5" />
                <div className="flex items-center mt-auto">
                  <Image
                    src={
                      testimonial.image ||
                      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt="profile"
                    width={50}
                    height={50}
                    className="rounded-full w-12 h-12 object-cover"
                  />
                  <div className="flex flex-col pl-4">
                    <span
                      className={`${
                        mode === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      {testimonial.name}
                    </span>
                    <span
                      className={`text-sm ${
                        mode === "dark" ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {testimonial.jobtitle}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
    </div>
  );
}