import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';
import { motion } from "framer-motion"

const ContactMe = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);

        formData.append("access_key", "d454cf13-943c-4291-9d56-e74ed6d6f3a3");
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
            });

            const data = await response.json();

            if (data.success) {
            toast.success('Thank you for your submission!')
            event.target.reset();
            } else {
            toast.error(data.message)
            }

        }catch(error) {
            toast.error(error.message)
        }

       
  };

  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{once: true}}
    transition={{straggerChildren: 0.2}}
    id='contact-me'
    className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
    <Title title='Get in Touch' desc='I’m open to placement opportunities, internships, and collaborations. Feel free to reach out!' />

    <motion.form 
        initial={{opacity:0 , y:30}}
        whileInView={{opacity:1 , y: 0}}
        transition={{duration: 0.5, delay:0.4}}
        viewport={{once: true}}
        onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
        <div>
        <p className='mb-2 text-sm font-medium'>Your name</p>
        <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.person_icon} alt="" />
            <input
            type="text"
            name="name"
            placeholder='Enter your name'
            className='w-full p-3 text-sm outline-none'
            required
            />
        </div>
      </div>

       <div>
        <p className='mb-2 text-sm font-medium'>Email id</p>
        <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.email_icon} alt="" />
            <input
            type="email"
            name="email"
            placeholder='Enter your email'
            className='w-full p-3 text-sm outline-none'
            required
            />
        </div>
    </div>

    <div className='sm:col-span-2'>
        <p className='mb-2 text-sm font-medium'>Message</p>
        <textarea
            rows={8}
            name="message"
            placeholder='Enter your message'
            className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600'
            required
        />
        </div>

        <button
        type="submit"
        className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'
        >
        Submit <img src={assets.arrow_icon} alt="" className='w-4' />
        </button>

    </motion.form>

    {/* Extra Info Section */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6 space-y-2">
        <p>📍 Ranchi, India</p>
        <p>📧 <a href="mailto:dm.mehta567@gmail.com" className="hover:text-primary">dm.mehta567@gmail.com</a></p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://github.com/DMDeepakMehta"><img className="h-6" src={assets.icons_github} alt="GitHub"/></a>
          <a href="https://www.linkedin.com/in/deepak-mehta-016864223"><img className="h-6" src={assets.linkedin_icon} alt="LinkedIn"/></a>
          <a href="https://www.instagram.com/dm__deepak__mehta/"><img className="h-6" src={assets.instagram_icon} alt="Instagram"/></a>
        </div>
      </div>
   
    </motion.div>
  )
}
export default ContactMe

