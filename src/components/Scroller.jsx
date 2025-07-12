import React, { useRef, useEffect, useState } from "react";

const skillsData = [
  { name: "MongoDB", icon: "./skills/mongodb.png" },
  { name: "Express.js", icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
  { name: "React.js", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Node.js", icon: "./skills/node.png" },
  { name: "HTML", icon: "./skills/html.png" },
  { name: "CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
  { name: "Figma", icon: "./skills/figma.png" },
  { name: "Tailwind CSS", icon: "./skills/tailwind.png" },
  { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
  { name: "PostgreSQL", icon: "./skills/postgress.png" },
  { name: "Redux", icon: "./skills/redux.png" },
  { name: "Postman", icon: "./skills/postman.png" },
  { name: "Vercel", icon: "./skills/vercel.png" },
  { name: "AWS", icon: "./skills/aws.png" },
  { name: "Git", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" },
  { name: "JavaScript", icon: "./skills/js.png" },
  { name: "Firebase", icon: "./skills/firebase.png" },
  { name: "Cloudinary", icon: "./skills/cloudinaryt.png" },
];

const Scroller = () => {
  const scrollerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;

    const scrollStep = 1; // Speed of scrolling
    const scrollInterval = 16; // Scrolling interval (ms)

    const startScroll = () => {
      if (!isHovered && scroller) {
        scroller.scrollLeft += scrollStep;
        if (scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth) {
          scroller.scrollLeft = 0; // Reset to the start
        }
      }
    };

    const interval = setInterval(startScroll, scrollInterval);

    return () => clearInterval(interval); // Cleanup interval
  }, [isHovered]);

  return (
    <section id="skills" className="py-8">
      <div className="max-w-screen-md mx-auto px-4 text-center">
        <div
          ref={scrollerRef}
          className="flex gap-3 overflow-x-auto scrollbar-hidden px-2"
          onMouseEnter={() => setIsHovered(true)} // Stop scrolling on hover
          onMouseLeave={() => setIsHovered(false)} // Resume scrolling on hover end
        >
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-16 flex flex-col items-center p-2 bg-white border rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 mb-1 object-contain"
              />
              <h3 className="text-xs font-light text-gray-800">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scroller;
