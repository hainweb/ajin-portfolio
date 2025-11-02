import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { MdArrowForward, MdClose, MdZoomIn } from "react-icons/md";
import "swiper/css";
import { motion, AnimatePresence } from "framer-motion";
import { worksData } from "../../contants/WorkData";

// Sample data - replace with your actual worksData import

const Works1 = () => {
  const [visibleWorks, setVisibleWorks] = useState(6);
  const [show, setShow] = useState(false);
  const [expandedTech, setExpandedTech] = useState({});
  const [expandedDesc, setExpandedDesc] = useState({});
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("work");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    if (fullscreenImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [fullscreenImage]);

  const toggleTechStack = (index) => {
    setExpandedTech((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleDescription = (index) => {
    setExpandedDesc((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  const openFullscreen = (image, title) => {
    setFullscreenImage({ image, title });
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <section
      className="relative w-full py-20 px-6 lg:px-40 bg-gray-900 text-white overflow-hidden"
      id="work"
    >
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-50" />

      <div className="relative container mx-auto px-4 md:px-6">
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h3>

        <motion.p
          className="text-base md:text-lg text-gray-400 mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Explore my portfolio of full-stack applications and innovative
          solutions
        </motion.p>

        {/* Swiper for Mobile */}
        <div className="block md:hidden">
          <Swiper spaceBetween={20} slidesPerView={1} className="pb-12">
            {worksData.slice(0, visibleWorks).map((work, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="relative rounded-lg bg-gray-800 overflow-hidden border border-gray-700 h-full flex flex-col"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div
                    className="h-56 w-full bg-center relative group cursor-pointer"
                    style={{
                      backgroundImage: `url(${work.image})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                    onClick={() => openFullscreen(work.image, work.title)}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                        <MdZoomIn size={40} className="text-white" />
                        <span className="text-white font-medium text-sm">
                          Click to expand
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-white mb-3">
                      {work.title}
                    </h4>
                    <div className="text-sm text-gray-300 leading-relaxed mb-4 flex-grow">
                      {expandedDesc[`mobile-${index}`] ? (
                        <>
                          {work.description}
                          <button
                            onClick={() => toggleDescription(`mobile-${index}`)}
                            className="text-blue-400 hover:text-blue-300 ml-2 font-medium"
                          >
                            Show less
                          </button>
                        </>
                      ) : (
                        <>
                          {truncateText(work.description, 150)}
                          {work.description.length > 150 && (
                            <button
                              onClick={() =>
                                toggleDescription(`mobile-${index}`)
                              }
                              className="text-blue-400 hover:text-blue-300 ml-2 font-medium"
                            >
                              Read more
                            </button>
                          )}
                        </>
                      )}
                    </div>

                    {/* Tech Stack */}
                    {work.techStack && work.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-5 pb-5 border-b border-gray-700">
                        {(expandedTech[`mobile-${index}`]
                          ? work.techStack
                          : work.techStack.slice(0, 4)
                        ).map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium bg-gray-700 text-gray-200 px-3 py-1.5 rounded-md border border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                        {work.techStack.length > 4 && (
                          <button
                            onClick={() => toggleTechStack(`mobile-${index}`)}
                            className="text-xs font-medium text-blue-400 hover:text-blue-300 px-2 py-1.5 cursor-pointer"
                          >
                            {expandedTech[`mobile-${index}`]
                              ? "Show less"
                              : `+${work.techStack.length - 4} more`}
                          </button>
                        )}
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-4">
                      {work.githubLink && (
                        <a
                          href={work.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 px-4 py-2.5 rounded-lg transition-all duration-300 border border-gray-600"
                        >
                          <FaGithub size={18} />
                          <span>Source Code</span>
                        </a>
                      )}
                      {work.liveLink && (
                        <a
                          href={work.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-lg transition-all duration-300"
                        >
                          <FaExternalLinkAlt size={16} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid for Larger Screens */}
        <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {worksData.slice(0, visibleWorks).map((work, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-800 transition-all duration-300 border border-gray-700 flex flex-col"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
            >
              <div
                className="h-56 w-full bg-center relative overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `url(${work.image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
                onClick={() => openFullscreen(work.image, work.title)}
              >
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                    <MdZoomIn size={40} className="text-white" />
                    <span className="text-white font-medium">
                      Click to expand
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {work.title}
                </h4>
                <div className="text-sm text-gray-300 leading-relaxed mb-4 flex-grow">
                  {expandedDesc[index] ? (
                    <>
                      {work.description}
                      <button
                        onClick={() => toggleDescription(index)}
                        className="text-blue-400 hover:text-blue-300 ml-2 font-medium"
                      >
                        Show less
                      </button>
                    </>
                  ) : (
                    <>
                      {truncateText(work.description, 120)}
                      {work.description.length > 120 && (
                        <button
                          onClick={() => toggleDescription(index)}
                          className="text-blue-400 hover:text-blue-300 ml-2 font-medium"
                        >
                          Read more
                        </button>
                      )}
                    </>
                  )}
                </div>

                {/* Tech Stack */}
                {work.techStack && work.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5 pb-5 border-b border-gray-700">
                    {(expandedTech[index]
                      ? work.techStack
                      : work.techStack.slice(0, 4)
                    ).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium bg-gray-700 text-gray-200 px-3 py-1.5 rounded-md border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {work.techStack.length > 4 && (
                      <button
                        onClick={() => toggleTechStack(index)}
                        className="text-xs font-medium text-blue-400 hover:text-blue-300 px-2 py-1.5 cursor-pointer"
                      >
                        {expandedTech[index]
                          ? "Show less"
                          : `+${work.techStack.length - 4} more`}
                      </button>
                    )}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-3">
                  {work.githubLink && (
                    <a
                      href={work.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 px-4 py-2.5 rounded-lg transition-all duration-300 border border-gray-600 flex-1"
                    >
                      <FaGithub size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  {work.liveLink && (
                    <a
                      href={work.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-lg transition-all duration-300 flex-1"
                    >
                      <FaExternalLinkAlt size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-16">
          {visibleWorks < worksData.length && (
            <button
              className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base py-3.5 px-9 rounded-lg shadow-md hover:shadow-lg"
              onClick={() => setVisibleWorks((prev) => prev + 3)}
            >
              <span>Load More Projects</span>
              <MdArrowForward size={20} />
            </button>
          )}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeFullscreen}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 bg-gray-800 rounded-full z-10"
              onClick={closeFullscreen}
            >
              <MdClose size={32} />
            </button>

            <motion.div
              className="max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={fullscreenImage.image}
                alt={fullscreenImage.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <h3 className="text-white text-2xl font-bold mt-6 text-center">
                {fullscreenImage.title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works1;
