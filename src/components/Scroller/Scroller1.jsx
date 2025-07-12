import React, { useRef, useEffect, useState } from "react";

const skillsData = [
  { name: "MongoDB", icon: "./skills/mongodb.png" },
  { name: "Express.js", icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
  { name: "React.js", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Node.js", icon: "./skills/node.png" },
  { name: "HTML", icon: "./skills/html.png" },
  { name: "CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
  { name: "Next.js", icon: "https://img.icons8.com/fluent-systems-filled/512/EBEBEB/nextjs.png" },
  { name: "Docker", icon: "./skills/docker.png" },
  { name: "Kubernetes", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/2109px-Kubernetes_logo_without_workmark.svg.png" },
  { name: "Figma", icon: "./skills/figma.png" },
  { name: "Tailwind CSS", icon: "./skills/tailwind.png" },
  { name: "Helm", icon: "./skills/helm.png" },
  { name: "Redis", icon: "https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png" },
  { name: "Redux", icon: "./skills/redux.png" },
  { name: "Postman", icon: "./skills/postman.png" },
  { name: "Vercel", icon: "./skills/vercel.png" },
  { name: "AWS", icon: "./skills/aws.png" },
  { name: "Git", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" },
  { name: "JavaScript", icon: "./skills/js.png" },
  { name: "Firebase", icon: "./skills/firebase.png" },
  { name: "Cloudinary", icon: "./skills/cloudinaryt.png" },
];

const Scroller1 = () => {
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
    <section id="skills" className="py-8  bg-gray-900 ">
      <div className="max-w-screen-md mx-auto px-4 text-center">
        {/* <h2 className="text-white text-2xl font-semibold mb-6">My Skills</h2> */}
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hidden px-2"
          onMouseEnter={() => setIsHovered(true)} // Stop scrolling on hover
          onMouseLeave={() => setIsHovered(false)} // Resume scrolling on hover end
        >
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-20 flex flex-col items-center p-3 bg-gray-900 border border-gray-700 rounded-lg shadow-md hover:shadow-blue-500 transition-shadow duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 mb-2 object-contain"
              />
              <h3 className="text-xs font-medium text-gray-300">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scroller1;
