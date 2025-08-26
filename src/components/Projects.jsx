"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SiReact,SiNextdotjs, SiTailwindcss, SiPrisma, SiPostgresql, SiMongodb, SiTypescript, SiCloudinary ,SiSupabase} from "react-icons/si";
import { FaCube } from "react-icons/fa"; // placeholder for Shadcn UI
import { MdOutlineBolt } from "react-icons/md"; // placeholder for Inngest
import { TbShieldCheck } from "react-icons/tb"; // placeholder for ArcJet
import { FiUserCheck } from "react-icons/fi";    // Clerk placeholder
const projects = [
  {
    title: "Spend",
    description:
      "A fullstack finance management application to track, analyze, and manage spending intelligently.",
    image: "/spend.png",
    github: "https://github.com/DMDeepakMehta/Spend",
    demo: "https://github.com/DMDeepakMehta/Spend",
    tech: [
      <SiNextdotjs key="next" />,
      <SiTailwindcss key="tailwind" />,
      <SiPrisma key="prisma" />,
      <SiPostgresql key="postgres" />,
      <FaCube key="shadcn" />,         // Shadcn UI
      <SiSupabase key="supabase" />,   // Supabase
      <MdOutlineBolt key="inngest" />, // Inngest
      <TbShieldCheck key="arcjet" />,  // ArcJet
      <FiUserCheck key="clerk" />,     // Clerk],
    ],
  },
  {
    title: "QuickCart",
    description:
      "A modern Full Stack E-Commerce Application built with cutting-edge technologies:",
    image: "/QuickCart.png",
    github: "https://github.com/DMDeepakMehta/QuickCart",
    demo: "https://quick-cart-teal-kappa.vercel.app/",
    tech: [<SiNextdotjs />, <SiTailwindcss />, <SiMongodb />,<FiUserCheck key="clerk" />,<MdOutlineBolt key="inngest" />,<SiCloudinary key="cloudinary" />,],
  },
  {
    title: "QuickShow",
    description:
      "A modern movie ticket booking application that allows users to browse movies, view showtimes, select seats, and book tickets.",
    image: "/QuickShow.png",
    github: "https://github.com/DMDeepakMehta/QuickShow",
    demo: "https://quick-show-chi.vercel.app/",
    tech: [<SiReact key="react" />,, <SiTailwindcss />,  <SiPostgresql />,<FiUserCheck key="clerk" />,],
  },
  {
    title: "AGENCY-AI",
    description:
       "Modern agency website with React & Tailwind — sleek, responsive, and animation-driven design to showcase services and clients.",
    image: "/agency.png",
    github: "https://github.com/DMDeepakMehta/AGENCY-AI",
    demo: "https://agency-ai-theta.vercel.app/",
    tech: [<SiReact key="react" />,, <SiTailwindcss />],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-br  blur-3xl" />

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
          My Projects
        </h2>
        <p className="text-gray-400 mt-3 text-lg">Crafted with using modern tech stacks</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            {/* Border gradient on hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition duration-500"></div>


            <div className="relative z-10 flex flex-col h-full">
              {/* Image */}
              <div className="overflow-hidden rounded-t-2xl">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-gray-400 mt-2 flex-1">{project.description}</p>

                {/* Tech Icons */}
                <div className="flex gap-3 mt-4 text-gray-300 text-xl">
                  {project.tech.map((icon, i) => (
                    <span
                      key={i}
                      className="hover:text-purple-400 transition-colors"
                    >
                      {icon}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition"
                  >
                    <Github size={16} /> Github
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-pink-400 hover:text-pink-300 transition"
                  >
                    <ExternalLink size={16} /> Live Site
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


