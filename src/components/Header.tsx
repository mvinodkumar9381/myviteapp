import React, { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-800 to-purple-700 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-white" />
          <span className="text-xl font-bold text-white">Vinod Kumar</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-gray-300 transition-colors">About</a>
          <a href="#skills" className="text-white hover:text-gray-300 transition-colors">Skills</a>
          <a href="#projects" className="text-white hover:text-gray-300 transition-colors">Projects</a>
          <a href="#education" className="text-white hover:text-gray-300 transition-colors">Education</a>
          <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-900">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a href="#about" className="text-white hover:text-gray-300 transition-colors py-2" onClick={toggleMenu}>About</a>
            <a href="#skills" className="text-white hover:text-gray-300 transition-colors py-2" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="text-white hover:text-gray-300 transition-colors py-2" onClick={toggleMenu}>Projects</a>
            <a href="#education" className="text-white hover:text-gray-300 transition-colors py-2" onClick={toggleMenu}>Education</a>
            <a href="#contact" className="text-white hover:text-gray-300 transition-colors py-2" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
