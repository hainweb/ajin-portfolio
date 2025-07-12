import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaReact, FaFigma, FaMobileAlt, FaCode, FaAward } from 'react-icons/fa'; 

function Expertise() {
  return (
    <section className="container mx-auto py-4 px-2 sm:px-4 lg:px-32">
      <h2 className="text-xs sm:text-lg text-center mb-2 sm:mb-4 font-Audiowide animate__animated animate__zoomIn">
        Building Innovative Web Solutions
      </h2>
      <p className="text-center mb-4 text-xs sm:text-xs opacity-75 font-Audiowide text-gray-600 animate__animated animate__zoomIn animate__delay-1s">
        Experienced in Desktop and Web App Development
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {/* Skills and Expertise Card */}
        <div className="col-span-2 sm:col-span-1 lg:col-span-3 xl:col-span-3 bg-gray-100/50 rounded-lg p-1 sm:p-2 border border-gray-200/50 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:bg-indigo-100 hover:rotate-2 animate__animated animate__fadeIn animate__delay-2s">
          <h3 className="text-xs sm:text-sm font-Audiowide mb-1 text-center text-blue-500">Skills and Expertise</h3>
          <p className="text-xs sm:text-xs opacity-75 text-gray-600 text-center font-Audiowide">Proficient in Various Programming Languages, Frameworks, and Tools</p>
          <div className="flex justify-center mt-1 gap-4">
            <FaHtml5 className="text-red-500 hover:text-red-700 transition-all duration-300 ease-in-out transform hover:scale-125" size={30} />
            <FaCss3 className="text-blue-500 hover:text-blue-700 transition-all duration-300 ease-in-out transform hover:scale-125" size={30} />
            <FaJs className="text-yellow-500 hover:text-yellow-700 transition-all duration-300 ease-in-out transform hover:scale-125" size={30} />
            <FaNodeJs className="text-green-500 hover:text-green-700 transition-all duration-300 ease-in-out transform hover:scale-125" size={30} />
            <FaReact className="text-blue-500 hover:text-blue-700 transition-all duration-300 ease-in-out transform hover:scale-125" size={30} />
            <FaFigma className="text-blue-500 hover:text-blue-700 transition-all duration-300 ease-in-out transform hover:scale-125" size={30} />
            <FaMobileAlt className="text-blue-500 hover:text-blue-700 transition-all duration-300 ease-in-out transform hover:scale-125" size={30} />
          </div>
        </div>

        {/* Responsive Web Design Card */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-1 bg-gray-100/50 rounded-lg p-1 sm:p-2 text-center border border-gray-200/50 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:bg-pink-100 hover:rotate-2 animate__animated animate__zoomIn animate__delay-3s">
          <h3 className="text-xs sm:text-sm font-Audiowide mb-1 text-blue-500">Responsive Web Design</h3>
          <p className="text-xs sm:text-xs opacity-75 font-Audiowide text-gray-600">Creating Engaging and Mobile-Friendly Websites</p>
        </div>

        {/* High-Quality Web Development (Code Icon) Card */}
        <div className="col-span-2 sm:col-span-1 lg:col-span-2 xl:col-span-2 bg-gray-100/50 rounded-lg p-1 sm:p-2 text-center border border-gray-200/50 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:bg-yellow-100 hover:rotate-2 animate__animated animate__fadeIn animate__delay-4s">
          <h3 className="text-xs sm:text-sm font-Audiowide mb-1 text-blue-500">High-Quality Web Development</h3>
          <p className="text-xs sm:text-xs opacity-75 font-Audiowide text-gray-600">Delivering Customized Web Solutions to Meet Your Needs</p>
          <FaCode className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mt-1 text-gray-600 transform hover:scale-110 transition-all duration-300 ease-in-out" />
        </div>

        {/* High-Quality Web Development (Award Icon) Card */}
        <div className="col-span-2 sm:col-span-1 lg:col-span-2 xl:col-span-2 bg-gray-100/50 rounded-lg p-1 sm:p-2 text-center border border-gray-200/50 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:bg-purple-100 hover:rotate-2 animate__animated animate__fadeIn animate__delay-5s">
          <h3 className="text-xs sm:text-sm font-Audiowide mb-1 text-blue-500">Award-Winning Development</h3>
          <p className="text-xs sm:text-xs opacity-75 font-Audiowide text-gray-600">Recognized for Excellence in Web Solutions</p>
          <FaAward className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mt-1 text-gray-600 transform hover:scale-110 transition-all duration-300 ease-in-out" />
        </div>
      </div>
    </section>
  );
}

export default Expertise;
