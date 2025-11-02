import React, { useRef, useEffect, useState } from "react";

const skillsData = [
  // Core Languages
  { name: "JavaScript", icon: "./skills/js.png" },
  {
    name: "TypeScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  { name: "HTML", icon: "./skills/html.png" },
  {
    name: "CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
  },

  // Frontend Frameworks & Libraries
  {
    name: "React.js",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Next.js",
    icon: "https://img.icons8.com/fluent-systems-filled/512/EBEBEB/nextjs.png",
  },
  { name: "Redux", icon: "./skills/redux.png" },
  { name: "Tailwind CSS", icon: "./skills/tailwind.png" },
  {
    name: "NextAuth.js",
    icon: "https://next-auth.js.org/img/logo/logo-sm.png",
  },

  // Backend & Frameworks
  { name: "Node.js", icon: "./skills/node.png" },
  {
    name: "Express.js",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    name: "REST API",
    icon: "https://cdn-icons-png.flaticon.com/512/154/154878.png",
  },

  // Databases & Storage
  { name: "MongoDB", icon: "./skills/mongodb.png" },
  {
    name: "Redis",
    icon: "https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png",
  },
  { name: "Firebase", icon: "./skills/firebase.png" },
  { name: "Cloudinary", icon: "./skills/cloudinaryt.png" },

  // AI & RAG Tools
  {
    name: "OpenAI API",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  },
  {
    name: "LangChain",
    icon: "https://cdn.worldvectorlogo.com/logos/langchain-1.svg",
  },
  { name: "Pinecone", icon: "https://logo.svgcdn.com/l/pinecone.svg" },

  {
    name: "Hugging Face",
    icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  },
  {
    name: "RAG",
    icon: "https://cdn-icons-png.flaticon.com/512/3193/3193186.png",
  },

  // DevOps & Deployment
  { name: "Docker", icon: "./skills/docker.png" },
  {
    name: "Kubernetes",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
  },
  { name: "Helm", icon: "./skills/helm.png" },
  {
    name: "Nginx",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg",
  },
  { name: "AWS", icon: "./skills/aws.png" },
  { name: "Vercel", icon: "./skills/vercel.png" },

  {
    name: "Render",
    icon: "https://georgian.io/wp-content/uploads/2025/01/Render-logo-Black.svg",
  },

  {
    name: "Netlify",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg",
  },
  {
    name: "CI/CD",
    icon: "https://cdn-icons-png.flaticon.com/512/6009/6009780.png",
  },
  {
    name: "GitHub Actions",
    icon: "https://avatars.githubusercontent.com/u/44036562?s=200&v=4",
  },
  {
    name: "Git",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
  },
  {
    name: "GoDaddy DNS",
    icon: "https://www.vectorlogo.zone/logos/godaddy/godaddy-icon.svg",
  },

  // Tools & Utilities
  { name: "Postman", icon: "./skills/postman.png" },
  { name: "Figma", icon: "./skills/figma.png" },
  {
    name: "Photoshop",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
  },
  {
    name: "Blender",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg",
  },

  // Architecture & Principles
  {
    name: "MVC Architecture",
    icon: "https://cdn-icons-png.flaticon.com/512/5955/5955852.png",
  },
  {
    name: "Clean Architecture",
    icon: "https://cdn-icons-png.flaticon.com/512/10453/10453101.png",
  },
  {
    name: "SOLID Principles",
    icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    name: "OAuth 2.0",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Oauth_logo.svg",
  },
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
        if (
          scroller.scrollLeft >=
          scroller.scrollWidth - scroller.clientWidth
        ) {
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
              <h3 className="text-xs font-medium text-gray-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scroller1;
