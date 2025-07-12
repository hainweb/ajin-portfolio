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
      { threshold: 0.2 }
    );

    const section = document.getElementById("experience");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="experience"
      className="relative px-10 lg:px-40 py-16 bg-gray-900 text-white overflow-hidden"
    >
      {/* Background Glow Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 opacity-50 animate-gradientMove"></div>

      {/* Pulsating Light Effect */}
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse left-10 top-20"></div>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse right-10 bottom-20"></div>

      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-center mb-10 tracking-wider">
          Experience & Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:px-36">
          {/* Experience Timeline */}
          <div
            className={`transition-transform duration-1000 ${
              show ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-lg lg:hidden font-semibold text-center mb-8">
              Experience
            </h2>
            <div className="border-l-2 border-gray-700">
              {[
                {
                  period: "2024-aug – present",
                  role: "Full Stack Developer",
                  company: "THE-MENTOR - Full time - (remote)",
                },
                {
                  period: "2024-aug – 2023-aug",
                  role: "Full Stack Developer",
                  company: "Technoconnect IT-Solutions - contract (remote)",
                },
                {
                  period: "2023-jan – 2023-dec",
                  role: "MERN Stack Development",
                  company: "Brototype - Intern (remote)",
                },
              ].map((exp, index) => (
                <div
                  key={index}
                  className="ml-4 mb-6 p-4 transition-all bg-white/10 backdrop-blur-md border-l-4 border-transparent hover:border-blue-500 hover:scale-105 rounded-lg shadow-lg"
                >
                  <p className="text-xs text-gray-300">{exp.period}</p>
                  <h3 className="text-sm font-semibold">{exp.company}</h3>
                  <p className="text-xs text-gray-300">{exp.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div
            className={`lg:px-20 transition-transform duration-1000 ${
              show ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-lg lg:hidden font-semibold text-center mb-8">
              Education
            </h2>
            <div className="border-l-2 border-gray-700">
              {[
                {
                  period: "2020-2023",
                  qualification: "Bachelor’s Degree (BA)",
                  institution: "IGNOU",
                },
                {
                  period: "2023",
                  qualification: "MERN Stack Internship",
                  institution: "Kerala",
                },
                {
                  period: "2015 – 2018",
                  qualification: "Electronics Engineering (Diploma)",
                  institution: "Kerala Technical University",
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="ml-4 mb-6 p-4 transition-all bg-white/10 backdrop-blur-md border-l-4 border-transparent hover:border-green-500 hover:scale-105 rounded-lg shadow-lg"
                >
                  <p className="text-xs text-gray-300">{edu.period}</p>
                  <h3 className="text-sm font-semibold">{edu.qualification}</h3>
                  <p className="text-xs text-gray-300">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes gradientMove {
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
          .animate-gradientMove {
            background-size: 400% 400%;
            animation: gradientMove 10s ease infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Experience1;
