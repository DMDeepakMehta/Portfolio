import React from "react";
import { motion } from "framer-motion"
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGithub,  FaJava, FaCode ,FaCogs,FaProjectDiagram
} from "react-icons/fa";

import { 
  SiMongodb, SiExpress,  SiC, 
  SiTailwindcss, SiNextdotjs, SiPrisma, SiPostgresql, SiDocker 
} from "react-icons/si";



const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <SiC className="text-blue-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      ],
    },
    {
      title: "IT Constructs",
      skills: [
        { name: "Data Structures & Algorithms", icon: <FaCode className="text-green-500" /> },
        { name: "OOP", icon: <FaProjectDiagram className="text-purple-500 text-4xl" /> },
        { name: "DBMS", icon: <SiMongodb className="text-green-400" /> },
        { name: "Operating System", icon: <FaCogs className="text-purple-500 text-4xl" />, },
        { name: "Version Control (Git/GitHub)", icon: <FaGithub className="text-gray-700" /> },
      ],
    },
    {
      title: "Technologies",
      skills: [
          { name: "React.js", icon: <FaReact className="text-blue-400" /> },
          { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
          { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
          { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
          { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
          { name: "Prisma ORM", icon: <SiPrisma className="text-indigo-500" /> },
          { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
          { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
          { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
          { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
          { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
      ],
    },
  ];

  return (
    
    <motion.section id="skills" className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        My <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {categories.map((category, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-purple-500">{category.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2 text-lg">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;



