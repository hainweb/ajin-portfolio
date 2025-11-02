import { motion } from "framer-motion";
import { BackgroundBeams } from "../ui/Background-beams";
import Orb from "../ui/orb";

// Import Lucide icons
import { Phone, Mail, Linkedin } from "lucide-react";
import { MdArrowDownward } from "react-icons/md";

const Hero1 = () => {
  const text =
    "Passionate about crafting scalable and high-performance web applications using modern technologies, with a strong focus on solving real-world challenges through clean architecture and intuitive design.".split(
      " "
    );
  const text2 =
    "Committed to continuous learning and staying ahead with the latest in web development trends and best practices.".split(
      " "
    );

  const handleDownload = () => {
    const resumeUrl = "/AJIN_R.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Ajin_R_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between px-8 lg:px-40 py-20 min-h-fit bg-gray-900 text-white"
      id="about"
    >
      <BackgroundBeams className="absolute inset-0 opacity-60 z-0" />

      {/* Left Section */}
      <div className="relative flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2">
        {/* Orb Container with Image Inside */}
        <div className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80 mx-auto md:mx-0">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
            className="absolute w-full h-full"
          />
          <motion.img
            src="/mypic-nobg.jpeg"
            alt="Profile"
            className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full border-8 border-blue-500 shadow-xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Contact Icons */}
        <div className="flex space-x-6 lg:ml-16">
          <motion.a
            href="tel:+917306370344"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <Phone className="w-6 h-6 text-white" />
          </motion.a>

          <motion.a
            href="mailto:ajinaji6110@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <Mail className="w-6 h-6 text-white" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ajin-r/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </motion.a>
        </div>

        {/* Download Resume Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 lg:ml-8 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300 text-sm md:text-base flex items-center gap-2 justify-center"
          onClick={handleDownload}
        >
          DOWNLOAD RESUME <MdArrowDownward size={18} />
        </motion.button>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <motion.h1
          className="text-5xl font-extrabold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I&apos;m <span className="text-blue-500">Ajin</span>
        </motion.h1>

        <motion.h2
          className="text-3xl font-semibold mt-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="text-blue-400">MERN Stack</span> Developer
        </motion.h2>

        {/* Animated Description */}
        <motion.p className="mt-6 text-gray-300 text-lg leading-relaxed">
          {text.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.p>

        <motion.div className="bg-gray-800 p-6 rounded-lg mt-6 text-gray-300 text-lg shadow-md">
          {text2.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero1;
