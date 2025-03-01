import React from 'react';
import { Calendar, MapPin, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <img 
              src="C:\Users\mvino\Downloads\Vinod_pic.jpg" 
              alt="John Doe" 
              className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
            />
          </div>
          
          <div className="md:w-2/3">
            <p className="text-gray-700 text-lg mb-6">
              I'm a third-year Computer Science student at KL University Vijayawada with a passion for web development , data science and artificial intelligence. I enjoy solving complex problems and turning ideas into reality through elegant code.
            </p>
            <p className="text-gray-700 text-lg mb-8">
               I believe in continuous learning and pushing my boundaries to grow both personally and professionally.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="text-indigo-600" size={20} />
                <span className="text-gray-700">Born: May 22, 2004</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-indigo-600" size={20} />
                <span className="text-gray-700">Vijayawada,Andhra Pradesh
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-indigo-600" size={20} />
                <span className="text-gray-700">mvinodkumar202gmail.com</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;