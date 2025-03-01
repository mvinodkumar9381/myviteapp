import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-500 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm Maram Vinod Kumar
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6">
            Computer Science Student
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Passionate about Web Development, Data Science, and creating meaningful digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-white text-indigo-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-700 px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
