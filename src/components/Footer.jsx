import React from 'react'
import assets from '../assets/assets'
import { motion } from "framer-motion"

const Footer = ({theme}) => {
  return (
    <motion.div 
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.8}}
      viewport={{once: true}}
      className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 
      mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'
    >

      {/* Footer Top */}
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        
        {/* Left Section (Logo + About) */}
        <motion.div 
          initial={{opacity: 0, x: -30}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.6, delay:0.2}}
          viewport={{once: true}}
          className='space-y-5 text-sm text-gray-700 dark:text-gray-400'
        >
           <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            Deepak Mehta
          </h2>

          <p className='max-w-md'>
            Master of Computer Applications student passionate about Web Development, AI, and creating innovative digital solutions.
          </p>
          
          {/* Navigation Links */}
          <ul className='flex gap-8'>
            <li><a className='hover:text-primary' href="#">Home</a></li>
            <li><a className='hover:text-primary' href="#projects">Projects</a></li>
            <li><a className='hover:text-primary' href="#skills">Skills</a></li>
            <li><a className='hover:text-primary' href="#contact-me">Contact</a></li>
          </ul>
        </motion.div>

        {/* Right Section - can keep blank or small note */}
        <motion.div 
          initial={{opacity: 0, x: 30}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.6, delay:0.3}}
          viewport={{once: true}}
          className='text-gray-600 dark:text-gray-400'
        >
          <h3 className='font-semibold'>Let’s Connect</h3>
          <p>Open to internships, projects, and collaborations.</p>
        </motion.div>
      </div>

      <hr className='border-gray-300 dark:border-gray-600 my-6' />

      {/* Footer Bottom */}
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay:0.4}}
        viewport={{once: true}}
        className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'
      >
        <p>© 2025 Deepak Mehta - All Rights Reserved.</p>

        {/* Social Icons */}
        <div className='flex items-center justify-between gap-4'>
          <a href='https://www.linkedin.com/in/deepak-mehta-016864223'><img src={assets.linkedin_icon} alt="LinkedIn"/></a>
          <a href="https://github.com/DMDeepakMehta"><img className="h-6.5" src={assets.icons_github} alt="GitHub"/></a>
          <a href='https://leetcode.com/u/Deepak18mehta/'><img src={assets.icons_leetcode} alt="Leetcode"/></a>
          <a href='https://www.instagram.com/dm__deepak__mehta/'><img src={assets.instagram_icon} alt="Instagram"/></a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Footer
