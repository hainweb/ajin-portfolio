import  { useEffect, useState } from "react";

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
    <section id="experience" className="relative px-10 lg:px-40 py-16 bg-gray-900 text-white overflow-hidden">
      {/* Background Animated SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        <defs>
          <radialGradient id="auraGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(147, 51, 234, 0.7)" />
            <stop offset="100%" stopColor="rgba(37, 99, 235, 0.4)" />
          </radialGradient>
        </defs>
        <circle cx="30%" cy="20%" r="200" fill="url(#auraGradient)">
          <animate attributeName="cx" values="30%;70%;30%" dur="10s" repeatCount="indefinite" />
          <animate attributeName="cy" values="20%;80%;20%" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle cx="70%" cy="60%" r="180" fill="url(#auraGradient)">
          <animate attributeName="cx" values="70%;30%;70%" dur="14s" repeatCount="indefinite" />
          <animate attributeName="cy" values="60%;20%;60%" dur="10s" repeatCount="indefinite" />
        </circle>
      </svg>

      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-center mb-10 tracking-wider">
          Experience & Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:px-36">
          {/* Experience Timeline */}
          <div className={`transition-transform duration-1000 ${show ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
            <h2 className="text-lg lg:hidden font-semibold text-center mb-8">Experience</h2>
            <div className="border-l-2 border-gray-700">
            {[
  {
    period: "2025-April – present",
    role: "Project-Based Software Development Trainee",
    company: "Mentor Bro",
    description: "Contributed as a backend developer on the Kooli App project, focused on scalable and secure backend architecture."
  },
].map((exp, index) => (
  <div
    key={index}
    className="ml-4 mb-6 p-4 transition-all bg-white/10 backdrop-blur-md border-l-4 border-transparent hover:border-blue-500 hover:scale-105 rounded-lg shadow-lg"
  >
    <p className="text-xs text-gray-300">{exp.period}</p>
    <h3 className="text-sm font-semibold">{exp.company}</h3>
    <p className="text-xs text-gray-300">{exp.role}</p>
    {exp.description && (
      <p className="text-xs text-gray-400 mt-2">{exp.description}</p>
    )}
  </div>
))}

            </div>
          </div>

          {/* Education Timeline */}
          <div className={`lg:px-20 transition-transform duration-1000 ${show ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
            <h2 className="text-lg lg:hidden font-semibold text-center mb-8">Education</h2>
            <div className="border-l-2 border-gray-700">
              {[
                { period: "2023-2025", qualification: "Higher Secondary", institution: "KCP Hss, Kavassery" },
               
              ].map((edu, index) => (
                <div key={index} className="ml-4 mb-6 p-4 transition-all bg-white/10 backdrop-blur-md border-l-4 border-transparent hover:border-green-500 hover:scale-105 rounded-lg shadow-lg">
                  <p className="text-xs text-gray-300">{edu.period}</p>
                  <h3 className="text-sm font-semibold">{edu.qualification}</h3>
                  <p className="text-xs text-gray-300">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience1;
