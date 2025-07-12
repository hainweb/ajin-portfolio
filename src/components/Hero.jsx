import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/Background-beams";
import { cn } from "../lib/utils";


const Hero = () => {

  const text = "My aim is to create impactful solutions through innovative development continuous learning and adapting to emerging technologies while contributing to meaningful projects that make a difference".split(" ");
  const text2= "Creative Full Stack Developer with 2 years of hands-on experience in designing, developing, and deploying scalable web applications.".split(" ");
    
  const handleDownload = () => {
    console.log("download");
    
    const resumeUrl = "/AJIN_R.pdf"; // ✅ Make sure the file is inside the public folder
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.setAttribute("download", "Ajin_R_Resume.pdf"); // ✅ Set the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section id="about" className="px-4 py-6  text-center bg-gradient-t from-white to-gray-800  md:flex md:items-center md:space-x-10">
 <BackgroundBeams className="opacity-200 z-0" />
      <div className="flex-1">
        <div className="relative w-64 h-84 mx-auto max-w-sm aspect-[3/4] sm:w-64 sm:h-84 sm:mx-auto">
          <img
            src="./mypic-nobg.png"
            alt="Profile"
            className="w-full h-full object-cover ml-8 filter brightness-150"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-opacity-100"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-opacity-100"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-opacity-100"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-opacity-80"></div>

        </div>


        <div className="flex justify-center mr-16 space-x-4 mt-4 text-gray-700 sm:space-x-4 sm:mt-6">
  {/* Phone Icon */}
  <a href="tel:+919037731597" className="hover:opacity-75 transform transition-transform duration-300 hover:scale-110">
    <img src="/socialmedia/call-icon.png" alt="Phone" className="w-6 h-6 sm:w-6 sm:h-6" />
  </a>

  {/* Email Icon */}
  <a href="mailto:tpjishnu5@gmail.com" className="hover:opacity-75 transform transition-transform duration-300 hover:scale-110">
    <img src="/socialmedia/mail-icon.png" alt="Email" className="w-6 h-6 sm:w-6 sm:h-6" />
  </a>

  {/* LinkedIn Icon */}
  <a href="https://www.linkedin.com/in/jishnnutp/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transform transition-transform duration-300 hover:scale-110">
    <img src="/socialmedia/linkedin-icons.png" alt="LinkedIn" className="w-6 h-6 sm:w-6 sm:h-6" />
  </a>
</div>



<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="mt-4 px-2 py- bg-gray-800 font-Audiowide text-white rounded-lg 
             hover:bg-gray-700 transition-transform duration-300 text-xs 
             sm:px-2 sm:py- sm:mt-4"
  onClick={handleDownload}
>
  <span>DOWNLOAD RESUME</span>
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
  >
    ⬇️
  </motion.div>
</motion.button>


      </div>
      <div className="flex-1 text-left space-y-6 sm:text-center mt-6 sm:mt-12"> {/* Added space-y-6 for vertical spacing */}



        {/* Section 1: Aim/Mission Statement */}
        <div className="flex-1 text-left   sm:text-center">
  {/* Section 1: Aim/Mission Statement */}
  <div className="bg-gray-100 p-2 mb-12 rounded-lg w-full sm:w-full sm:px-8 lg:w-96 lg:-ml-36 hidden sm:block">
    <p className="text-gray-700 font-Audiowide text-sm">
     
  
    {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}

</p>
  </div>

  {/* Section 2: Name and Title */}
  <div className="space-y-4 sm:text-center lg:-ml-30">
    <h1 className="text-5xl m:text-3xl font-bold lg:-ml-40" >
      HI, I’M <span className=" animate-fade-in-up text-red-800 font-Bungee ">JISHNU</span>
    </h1>
    <h2 className="text-2xl font-Bungee sm:text-3xl sm:font-semibold lg:-ml-30 ">
      <span className="font-bold animate-fade-in-down  text-blue-700 text-3xl">MERN STACK</span> DEVELOPER
    </h2>
  </div>

  {/* Section 3: Skills/Experience */}
  <div className="bg-gray-100 mt-8 p-6 sm:ml-0 sm:px-8 sm:w-full rounded-lg lg:ml-16 lg:w-96 ">
    <p className="text-gray-700 font-Audiowide text-sm">
    
   
    {text2.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
       </p>

  </div>

  </div>
  </div>

  
    </section>
  );
};

export default Hero;
