import React, { useState, useEffect } from "react";
import * as images from "../assets/index.js";
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //navitems array
  const navItems = [
    { link: "Inicio", path: "home" },
    { link: "Servicios", path: "services" },
    { link: "Catalogo", path: "catalogo" },
    { link: "Sobre nosotros", path: "about" },
    // { link: "Testimonial", path: "testimonial" },
    // { link: "FAQ", path: "faq" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a className="text-2xl font-semibold space-x-3" href="/">
            <img
              className="w-20 lg:w-32 inline-block items-center"
              src={images.logoVB}
              alt=""
            />
            {/* <span className="text-[#263238]">Vita Bajío</span> */}
          </a>

          {/* nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <ScrollLink
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-gray900 hover:text-yellow-300 first:font-medium cursor-pointer"
              >
                {link}
              </ScrollLink>
            ))}
          </ul>

          {/* btn for large devices
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-yellow-400 hover:text-gray900"
            >
              Login
            </a>
            <button className="bg-yellow-400 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-NeutralDGrey">
              Sign Up
            </button>
          </div> */}

          {/* Menu btn for only mobile devices */}
          <div className="md:hidden">
            <button
              className="text-NeutralDGrey focus:outline-none focus:text-gray-500 "
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-12 py-7 bg-yellow-300 ${
            isMenuOpen ? "block fixed top-8 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <ScrollLink
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-white hover:text-black first:font-medium cursor-pointer"
            >
              {link}
            </ScrollLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
