import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const TimelineItem = ({ year, title, institution, description, icon: Icon }) => (
  <div className="relative pl-8 pb-8 border-l-2 border-indigo-200 last:border-0">
    <div className="absolute -left-3 top-0 bg-indigo-600 rounded-full p-1.5">
      <Icon size={20} className="text-white" />
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <span className="text-sm font-semibold text-indigo-600">{year}</span>
      <h3 className="text-xl font-bold mt-1">{title}</h3>
      <p className="text-gray-600 font-medium">{institution}</p>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  </div>
);

const Education = () => {
  const educationItems = [
    {
      year: "2022 - 2026",
      title: "Bachelor of Science in Computer Science",
      institution: "KL University",
      description: "Focusing on software engineering, artificial intelligence, and data structures. Currently maintaining a 9.4 GPA.",
      icon: GraduationCap
    },
    {
      year: "Jan-Mar 2024",
      title: "Data Engineering Virtual Internship",
      institution: "AICTE",
      description: "Gained hands-on experience in data engineering, including data processing, ETL pipelines, and database management.",
      icon: BookOpen
    },
    {
      year: "2024",
      title: "Oracle SE 11 Certification",
      institution: "Oracle University",
      description: "Demonstrated proficiency in Java programming, object-oriented principles, and application development.",
      icon: Award
    },
    {
      year: "2020 - 2022",
      title: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      description: "Completed Intermediate with MPC, actively participated in science fairs and math competitions.",
      icon: GraduationCap
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education & Certifications</h2>
        <div className="max-w-3xl mx-auto">
          {educationItems.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;