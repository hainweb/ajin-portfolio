import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGithub, FaLink, FaEye } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import "swiper/css";
import { worksData } from "../../contants/WorkData";
import { motion } from "framer-motion";

const Works1 = () => {
  const [visibleWorks, setVisibleWorks] = useState(3);
  const [show, setShow] = useState(false);

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

  return (
    <section
      className="relative w-full py-16 px-6 lg:px-40 bg-gray-900 text-white overflow-hidden"
      id="work"
    >
      {/* Animated Background */}
      <div className="absolute inset-0   opacity-70 animate-pulse" />
      
      <div className="relative container mx-auto px-4 md:px-6">
        <motion.h3
          className="text-2xl md:text-3xl font-Audiowide text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Creative Works
        </motion.h3>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Showcasing a blend of creativity, technology, and innovation.
        </motion.p>

        {/* Swiper for Mobile */}
        <div className="block md:hidden">
          <Swiper spaceBetween={15} slidesPerView={1.2} className="h-[70vh]">
            {worksData.slice(0, visibleWorks).map((work, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="relative rounded-md shadow-md bg-gray-800 p-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div
                    className="h-48 w-full bg-cover bg-center rounded-md"
                    style={{ backgroundImage: `url(${work.image})` }}
                  ></div>
                  <h4 className="text-lg font-semibold text-white mt-4">{work.title}</h4>
                  <p className="text-sm text-gray-400 mt-2">{work.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid for Larger Screens */}
        <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {worksData.slice(0, visibleWorks).map((work, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-md shadow-md bg-gray-800 transition-transform"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${work.image})` }}
              ></div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white mb-1">{work.title}</h4>
                <p className="text-sm text-gray-400 mb-4">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-10">
          {visibleWorks < worksData.length && (
            <button
              className="text-white bg-purple-700 hover:bg-purple-500 transition-colors py-2 px-4 rounded-full flex items-center mx-auto"
              onClick={() => setVisibleWorks((prev) => prev + 3)}
            >
              Show More <MdArrowForward size={20} className="ml-2" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Works1;
