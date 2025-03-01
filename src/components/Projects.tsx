import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, image, tags, githubLink, liveLink }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-3">
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
        >
          <Github size={18} className="mr-1" />
          <span>Code</span>
        </a>
        <a 
          href={liveLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
        >
          <ExternalLink size={18} className="mr-1" />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "E-Learning Platform",
      description: "A responsive web application for online courses with user authentication and progress tracking.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application that displays forecast data using a third-party API.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["JavaScript", "API", "CSS", "HTML"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "A productivity tool for organizing tasks with drag-and-drop functionality and user authentication.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      tags: ["React", "Firebase", "Tailwind CSS"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills with a responsive design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
      tags: ["React", "Tailwind CSS", "Responsive Design"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      title: "Recipe Finder",
      description: "A web application that allows users to search for recipes based on ingredients they have.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["JavaScript", "API", "CSS", "HTML"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with private messaging and group chat functionality.",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      tags: ["React", "Socket.io", "Node.js", "MongoDB"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;