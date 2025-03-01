import React from 'react';
import { Code, Database, Layout, Server, Smartphone, Cpu } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
    <div className="flex items-center mb-4">
      <Icon className="text-indigo-600 mr-3" size={24} />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-indigo-600 h-2.5 rounded-full" 
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
          <span className="ml-3 text-gray-700 min-w-20">{skill.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Layout,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 75 }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "Python", level: 65 },
        { name: "Django", level: 60 }
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 70 },
        { name: "MySQL", level: 65 },
        { name: "PostgreSQL", level: 60 },
        { name: "Firebase", level: 75 }
      ]
    },
    {
      title: "Programming",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "Python", level: 70 },
        { name: "Java", level: 65 }
      ]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 65 },
        { name: "Flutter", level: 50 },
        { name: "Responsive Design", level: 85 }
      ]
    },
    {
      title: "Other",
      icon: Cpu,
      skills: [
        { name: "Git", level: 80 },
        { name: "Docker", level: 60 },
        { name: "AWS", level: 55 },
        { name: "UI/UX Design", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;