import { useState, useEffect } from "react";
import { GraduationCap } from "lucide-react";

const HeroTyping = () => {
  const texts = [
    "Master of Computer Applications",
    "National Institute of Technology Raipur",
    "Aspiring Software Developer 🚀"
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000); // pause before delete
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts]);

  return (
    <div className="flex items-center space-x-3 text-xl sm:text-2xl font-medium">
      <GraduationCap className="w-6 h-6 text-purple-400" />
      <span className="text-gray-700 dark:text-white">
        {texts[index].substring(0, subIndex)}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
};

export default HeroTyping;
