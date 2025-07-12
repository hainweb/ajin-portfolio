import React, { useEffect, useState } from "react";

const Experience1 = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      {
        threshold: 0.2, // Triggers when 20% of the component is in view
      }
    );

    const section = document.getElementById("experience");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="experience" className="relative px-10 lg:px-40 py-16 bg-gray-900 text-white overflow-hidden">
      {/* Aura Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-blue-500 opacity-30 blur-3xl rounded-full animate-aura1"></div>
        <div className="absolute w-96 h-96 bg-purple-500 opacity-30 blur-3xl rounded-full animate-aura2"></div>
        <div className="absolute w-80 h-80 bg-indigo-500 opacity-30 blur-3xl rounded-full animate-aura3"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-center mb-10 tracking-wider">Experience & Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:px-36">
          {/* Experience Timeline */}
          <div className={`transition-transform duration-1000 ${show ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
            <h2 className="text-lg lg:hidden font-semibold text-center mb-8">Experience</h2>
            <div className="border-l-2 border-gray-700">
              {[
                { period: "2024-aug – present", role: "Full Stack Developer", company: "THE-MENTOR - Full time - (remote)" },
                { period: "2024-aug – 2023-aug", role: "Full Stack Developer", company: "Technoconnect IT-Solutions - contract (remote)" },
                { period: "2023-jan – 2023-dec", role: "MERN Stack Development", company: "Brototype - Intern (remote)" },
              ].map((exp, index) => (
                <div key={index} className="ml-4 mb-6 p-4 transition-all border-l-4 border-transparent hover:border-blue-500 hover:bg-gray-800 hover:scale-105 rounded-md shadow-lg">
                  <p className="text-xs text-gray-400">{exp.period}</p>
                  <h3 className="text-sm font-semibold">{exp.company}</h3>
                  <p className="text-xs text-gray-400">{exp.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className={`lg:px-20 transition-transform duration-1000 ${show ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
            <h2 className="text-lg lg:hidden font-semibold text-center mb-8">Education</h2>
            <div className="border-l-2 border-gray-700">
              {[
                { period: "2020-2023", qualification: "Bachelor’s Degree (BA)", institution: "IGNOU" },
                { period: "2023", qualification: "MERN Stack Internship", institution: "Kerala" },
                { period: "2015 – 2018", qualification: "Electronics Engineering (Diploma)", institution: "Kerala Technical University" },
              ].map((edu, index) => (
                <div key={index} className="ml-4 mb-6 p-4 transition-all border-l-4 border-transparent hover:border-green-500 hover:bg-gray-800 hover:scale-105 rounded-md shadow-lg">
                  <p className="text-xs text-gray-400">{edu.period}</p>
                  <h3 className="text-sm font-semibold">{edu.qualification}</h3>
                  <p className="text-xs text-gray-400">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes aura1 {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-30%, -30%) scale(1.2); }
          }
          @keyframes aura2 {
            0%, 100% { transform: translate(50%, 50%) scale(1); }
            50% { transform: translate(30%, 30%) scale(1.3); }
          }
          @keyframes aura3 {
            0%, 100% { transform: translate(30%, -30%) scale(1); }
            50% { transform: translate(-30%, 30%) scale(1.1); }
          }
          .animate-aura1 { animation: aura1 6s infinite alternate ease-in-out; left: 10%; top: 20%; }
          .animate-aura2 { animation: aura2 8s infinite alternate ease-in-out; right: 20%; bottom: 10%; }
          .animate-aura3 { animation: aura3 7s infinite alternate ease-in-out; left: 50%; top: 50%; }
        `}
      </style>
    </section>
  );
};

export default Experience1;
