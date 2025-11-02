import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const Header = ({ onScroll }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide header on scroll down
      } else {
        setIsVisible(true); // Show header on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[80%] backdrop-blur-lg bg-black/10 rounded-full transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <div>
          {/*  <img
            src="/logo/jtp-logo.png"
            alt="Logo"
            className="h-12 w-auto transition-transform duration-300 transform hover:scale-105"
          /> */}
          <h1
            className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Ajin
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["experience", "work", "about", "resume", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => {
                if (item === "resume") {
                  navigate("/resume");
                } else {
                  if (window.location.pathname !== "/") {
                    navigate("/");
                    onScroll(item);
                  } else {
                    onScroll(item);
                  }
                }
              }}
              className="relative text-white text-sm font-semibold uppercase transition-all duration-300 hover:text-blue-400"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </nav>

        {/* Hire Me Button (Desktop) */}
        <button
          className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-300"
          onClick={() => onScroll("contact")}
        >
          HIRE ME
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? (
              <XIcon className="h-8 w-8 transition-transform duration-300" />
            ) : (
              <MenuIcon className="h-8 w-8 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col bg-opacity-50 backdrop-blur-lg p-6 rounded-b-2xl items-center">
          {["experience", "work", "about", "resume", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => {
                item === "resume" ? navigate("/resume") : onScroll(item);
                toggleMobileMenu();
              }}
              className="block py-3 text-white text-lg font-semibold uppercase transition-all duration-300 hover:text-blue-400"
            >
              {item.toUpperCase()}
            </button>
          ))}

          {/* Mobile Hire Me Button (Properly Centered) */}
          <button
            className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-bold shadow-md hover:scale-105 transition-transform duration-300 text-base"
            onClick={() => onScroll("contact")}
          >
            HIRE ME
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
