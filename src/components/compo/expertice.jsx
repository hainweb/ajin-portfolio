import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaDatabase,
  FaPython,
  FaBrain,
  FaServer,
  FaCode,
  FaAward,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiRedux,
  SiPostman,
  SiLangchain,
  SiVercel,
  SiKubernetes,
} from "react-icons/si";

function Expertise1() {
  return (
    <section className="relative w-full py-10 px-4 md:px-12 lg:px-32 bg-gray-900 text-white overflow-hidden">
      {/* Header */}
      <div className="relative z-10 text-center">
        <h2 className="text-lg sm:text-xl font-bold font-Audiowide animate__animated animate__zoomIn">
          Building Scalable MERN & AI-Powered Web Solutions
        </h2>
        <p className="text-sm sm:text-base opacity-75 font-Audiowide text-gray-400 animate__animated animate__zoomIn animate__delay-1s">
          Expertise in Full-Stack Development, Cloud Deployment & AI Integration
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {/* Skills and Expertise */}
        <div className="col-span-2 lg:col-span-3 bg-gray-800/50 rounded-lg p-4 border border-gray-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-blue-500/50 hover:bg-gray-700/50 animate__animated animate__fadeIn animate__delay-2s">
          <h3 className="text-sm font-Audiowide mb-2 text-blue-400">
            Core Technologies
          </h3>
          <p className="text-xs opacity-75 text-gray-300 text-center font-Audiowide">
            Specialized in MERN, Next.js, TypeScript, and AI integrations
          </p>
          <div className="flex justify-center mt-4 gap-5 flex-wrap">
            <SiNextdotjs
              className="text-gray-300 hover:text-white transform hover:scale-125"
              size={30}
            />
            <FaReact
              className="text-blue-400 hover:text-blue-300 transform hover:scale-125"
              size={30}
            />
            <SiTypescript
              className="text-blue-500 hover:text-blue-400 transform hover:scale-125"
              size={30}
            />
            <FaNodeJs
              className="text-green-500 hover:text-green-400 transform hover:scale-125"
              size={30}
            />
            <SiExpress
              className="text-gray-300 hover:text-white transform hover:scale-125"
              size={30}
            />
            <SiMongodb
              className="text-green-400 hover:text-green-300 transform hover:scale-125"
              size={30}
            />
            <SiTailwindcss
              className="text-cyan-400 hover:text-cyan-300 transform hover:scale-125"
              size={30}
            />
            <SiRedux
              className="text-purple-500 hover:text-purple-400 transform hover:scale-125"
              size={30}
            />
          </div>
        </div>

        {/* AI / RAG Development */}
        <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-pink-500/50 hover:bg-gray-700/50 animate__animated animate__zoomIn animate__delay-3s">
          <h3 className="text-sm font-Audiowide mb-2 text-blue-400">
            AI & RAG Development
          </h3>
          <p className="text-xs opacity-75 font-Audiowide text-gray-300">
            Experience with OpenAI, LangChain, and Pinecone for intelligent apps
          </p>
          <div className="flex justify-center mt-3 gap-5">
            <FaBrain
              className="text-yellow-400 hover:text-yellow-300 transform hover:scale-125"
              size={28}
            />
            <SiLangchain
              className="text-emerald-400 hover:text-emerald-300 transform hover:scale-125"
              size={28}
            />
          </div>
        </div>

        {/* DevOps & Cloud */}
        <div className="col-span-2 bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-yellow-500/50 hover:bg-gray-700/50 animate__animated animate__fadeIn animate__delay-4s">
          <h3 className="text-sm font-Audiowide mb-2 text-blue-400">
            DevOps & Cloud
          </h3>
          <p className="text-xs opacity-75 font-Audiowide text-gray-300">
            Skilled in Docker, Kubernetes, AWS, CI/CD, and modern deployment
            workflows
          </p>
          <div className="flex justify-center mt-3 gap-5">
            <FaDocker
              className="text-blue-400 hover:text-blue-300 transform hover:scale-125"
              size={28}
            />
            <SiKubernetes
              className="text-blue-400 hover:text-blue-300 transform hover:scale-125"
              size={28}
            />
            <FaAws
              className="text-orange-400 hover:text-orange-300 transform hover:scale-125"
              size={28}
            />
          </div>
        </div>

        {/* Tools & Productivity */}
        <div className="col-span-2 bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-purple-500/50 hover:bg-gray-700/50 animate__animated animate__fadeIn animate__delay-5s">
          <h3 className="text-sm font-Audiowide mb-2 text-blue-400">
            Tools & Productivity
          </h3>
          <p className="text-xs opacity-75 font-Audiowide text-gray-300">
            Effective use of Git, Postman, and modern developer workflows
          </p>
          <div className="flex justify-center mt-3 gap-5">
            <FaGitAlt
              className="text-red-500 hover:text-red-400 transform hover:scale-125"
              size={28}
            />
            <SiPostman
              className="text-orange-500 hover:text-orange-400 transform hover:scale-125"
              size={28}
            />
            <FaDatabase
              className="text-teal-400 hover:text-teal-300 transform hover:scale-125"
              size={28}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise1;
