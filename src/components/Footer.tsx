import React from 'react';
import { GraduationCap, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <GraduationCap className="h-8 w-8 text-indigo-400 mr-2" />
            <span className="text-xl font-bold">Vinod Kumar</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-indigo-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Vinod Kumar. All rights reserved.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;