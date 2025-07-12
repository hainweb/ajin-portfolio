import React, { useEffect, useState } from "react";

const Experience = () => {
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
    <section id="experience" className="relative px-10 lg:px-40 py-12 opacity-90">
      {/* Background Image with Fade Effect */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50"
        style={{
          backgroundImage: 'url("../bg/bg-exp.png")', // Replace with your image path
        }}
      >
        {/* Gradient Fade Effect at the Bottom */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50"
          style={{
            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))", // Fade from transparent to white at the bottom
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-lg font-Audiowide font-light lg:block mb-8 text-center">
          Experience and Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:px-36">
          {/* Experience Timeline */}
          <div
            className={`transition-transform duration-1000 ${show ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <h2 className="text-lg lg:hidden font-Audiowide font-light mb-8 text-center">
              Experience
            </h2>

            <div className="border-l-2 border-gray-300">
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
                  className="ml-4 mb-6 p-4 transition-transform transform border-l-4 border-transparent hover:border-blue-500 hover:bg-gray-50 hover:scale-105 rounded-md"
                >
                  <p className="text-xs text-gray-600">{exp.period}</p>
                  <h3 className="text-sm font-Audiowide">{exp.company}</h3>
                  <p className="text-xs text-gray-600">{exp.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div
            className={`lg:px-20 transition-transform duration-1000 ${show ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <h2 className="text-lg lg:hidden font-Audiowide font-light mb-8 text-center">
              Education
            </h2>
            <div className="border-l-2 border-gray-300">
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
                  className="ml-4 mb-6 p-4 transition-transform transform border-l-4 border-transparent hover:border-green-500 hover:bg-gray-50 hover:scale-105 rounded-md"
                >
                  <p className="text-xs text-gray-600">{edu.period}</p>
                  <h3 className="text-sm font-Audiowide">{edu.qualification}</h3>
                  <p className="text-xs text-gray-600">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
