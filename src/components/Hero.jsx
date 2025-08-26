import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";
import HeroTyping from "./HeroTyping";


const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12
      lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-800 dark:text-white"
    >
      {/* Profile Image */}
      <div className="p-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          src={assets.profile2}
          alt="Profile"
          className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover bg-white"
        />
      </div>

      {/* Title / Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl md:text-6xl font-bold"
      >
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Deepak Mehta
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-base sm:text-lg font-medium text-gray-600 dark:text-white/70 max-w-2xl"
      >
        MCA Student | Aspiring Software Developer 💻 | Passionate about building
        modern web applications and solving real-world problems.
      </motion.p>

      <HeroTyping />

     

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        viewport={{ once: true }}
        className="flex gap-4 mt-4"
      >
        <a
          href="#contact-us"
          className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:shadow-lg transition"
        >
          Contact Me
        </a>
        <a
          href="/Resume.pdf"
          download
          className="px-6 py-2 rounded-full border border-purple-500 text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-50 dark:hover:bg-purple-900 transition"
        >
          Download CV
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;

