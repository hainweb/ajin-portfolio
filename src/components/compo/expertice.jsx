import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaReact,
  FaFigma,
  FaMobileAlt,
  FaCode,
  FaAward,
} from "react-icons/fa";

function Expertise1() {
  return (
    <section className="relative w-full py-10 px-4 md:px-12 lg:px-32 bg-gray-900 text-white overflow-hidden">
      {/* Aura Background Animation */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-gray-900 to-blue-900 opacity-30 animate-bgMove"></div>
      <div className="absolute w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse bottom-10 right-10"></div> */}

      <div className="relative z-10 text-center">
        <h2 className="text-lg sm:text-xl font-bold font-Audiowide animate__animated animate__zoomIn">
          Building Innovative Web Solutions
        </h2>
        <p className="text-sm sm:text-base opacity-75 font-Audiowide text-gray-400 animate__animated animate__zoomIn animate__delay-1s">
          Experienced in Desktop and Web App Development
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {/* Skills and Expertise */}
        <div className="col-span-2 lg:col-span-3 bg-gray-800/50 rounded-lg p-4 border border-gray-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-blue-500/50 hover:bg-gray-700/50 animate__animated animate__fadeIn animate__delay-2s">
          <h3 className="text-sm font-Audiowide mb-2 text-blue-400">Skills and Expertise</h3>
          <p className="text-xs opacity-75 text-gray-300 text-center font-Audiowide">
            Proficient in Various Programming Languages, Frameworks, and Tools
          </p>
          <div className="flex justify-center mt-4 gap-6">
            <FaHtml5 className="text-red-500 hover:text-red-400 transform hover:scale-125" size={30} />
            <FaCss3 className="text-blue-500 hover:text-blue-400 transform hover:scale-125" size={30} />
            <FaJs className="text-yellow-500 hover:text-yellow-400 transform hover:scale-125" size={30} />
            <FaNodeJs className="text-green-500 hover:text-green-400 transform hover:scale-125" size={30} />
            <FaReact className="text-blue-400 hover:text-blue-300 transform hover:scale-125" size={30} />
            <FaFigma className="text-pink-500 hover:text-pink-400 transform hover:scale-125" size={30} />
            <FaMobileAlt className="text-teal-500 hover:text-teal-400 transform hover:scale-125" size={30} />
          </div>
        </div>

        {/* Responsive Web Design */}
        <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-pink-500/50 hover:bg-gray-700/50 animate__animated animate__zoomIn animate__delay-3s">
          <h3 className="text-sm font-Audiowide mb-2 text-blue-400">Responsive Web Design</h3>
          <p className="text-xs opacity-75 font-Audiowide text-gray-300">
            Creating Engaging and Mobile-Friendly Websites
          </p>
        </div>

        {/* High-Quality Web Development */}
        <div className="col-span-2 bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-yellow-500/50 hover:bg-gray-700/50 animate__animated animate__fadeIn animate__delay-4s">
          <h3 className="text-sm font-Audiowide mb-2 text-blue-400">High-Quality Web Development</h3>
          <p className="text-xs opacity-75 font-Audiowide text-gray-300">
            Delivering Customized Web Solutions to Meet Your Needs
          </p>
          <FaCode className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mt-2 text-gray-400 hover:text-gray-200 transform hover:scale-110 transition-all duration-300" />
        </div>

        {/* Award-Winning Development */}
        <div className="col-span-2 bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-purple-500/50 hover:bg-gray-700/50 animate__animated animate__fadeIn animate__delay-5s">
          <h3 className="text-sm font-Audiowide mb-2 text-blue-400">Award-Winning Development</h3>
          <p className="text-xs opacity-75 font-Audiowide text-gray-300">
            Recognized for Excellence in Web Solutions
          </p>
          <FaAward className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mt-2 text-gray-400 hover:text-gray-200 transform hover:scale-110 transition-all duration-300" />
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes bgMove {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-bgMove {
            background-size: 400% 400%;
            animation: bgMove 10s ease infinite;
          }
        `}
      </style>
    </section>
  );
}

export default Expertise1;
