import React from "react";

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


  { name: "Postman", icon: "./skills/postman.png" },
  { name: "Vercel", icon: "./skills/vercel.png" },
  { name: "AWS", icon: "./skills/aws.png" },
  { name: "Git", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" },
  { name: "JavaScript", icon: "./skills/js.png" },
  { name: "Firebase", icon: "./skills/firebase.png" },
  { name: "Cloudinary", icon: "./skills/cloudinaryt.png" },]

const Skills = () => {

  return (
    <section id="skills" className="py-16 ">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
      
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-down"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mb-4 object-contain"
              />
              <h3 className="text-sm font-medium text-gray-800">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
