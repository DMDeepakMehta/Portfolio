import React, { useState } from "react";
import Title from "./Title";
import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";

const educationData = [
 
  {
    degree: "Postgraduate",
    school: "MCA at NIT Raipur",
    year: "2023 - 2026",
    details: [
      "Studying core subjects of Computer Application",
      "Scored an aggregate of 7.37 CGPA till now."
    ],
  },
   {
    degree: "Undergraduate",
    school: " Marwari College, Ranchi University",
    year: "2019 - 2022",
    details: [
      "Studying core subjects of Mathematics",
      "Scored 8.85 CGPA",
      
    ],
  },
   {
    degree: "12th",
    school: "Marwari College, Ranchi University",
    year: "2019",
    details: [
      "Subjects studied: Physics, Chemistry, Maths, English, Computer Science",
      "Scored 75.2%",
    ],
  },
];

const Education = () => {
  const [selected, setSelected] = useState(null);

  return (
    <motion.div
    id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 text-gray-800 dark:text-white"
    >
      <Title
        title="Education"
        desc="A brief overview of my academic background and achievements."
      />

      <div className="relative border-l-2 border-purple-500 dark:border-purple-400 pl-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            {/* Dot */}
            <div className="absolute -left-[9px] bg-purple-500 dark:bg-purple-400 w-5 h-5 rounded-full border-2 border-white dark:border-gray-900"></div>

            <h3 className="font-bold text-lg">{edu.degree}</h3>
            <p className="text-sm opacity-80">{edu.school}</p>
            <p className="flex items-center gap-2 text-xs opacity-60 mt-1">
              <FiCalendar /> {edu.year}
            </p>
            <button
              onClick={() => setSelected(edu)}
              className="text-purple-600 dark:text-purple-400 text-sm font-semibold mt-2 inline-flex items-center gap-1 hover:underline"
            >
              View More →
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">
                {selected.degree} Summary :
              </h2>
              <button
                onClick={() => setSelected(null)}
                className="text-xl font-bold hover:text-red-500"
              >
                ✕
              </button>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              {selected.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Education;


