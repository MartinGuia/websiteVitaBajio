import React, { useState, useEffect } from "react";
import * as images from "../assets/index.js";
import { Link } from "react-router-dom";
import { FaXmark, Fabars } from "react-icons/fa6";

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  //navitems array
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Services", path: "services" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav>
        <a className="text-2xl font-semibold space-x-3" href="">
          <img
            className="w-32 inline-block items-center"
            src={images.logoVB}
            alt=""
          />
          <span className="text-[#263238]">Vita Bajío</span>
        </a>

        {/* nav items for large devices */}
        <ul className="md:flex space-x-12 hidden">
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-gray900 hover:text-brandPrimary first:font-medium"
            >
              {link}
            </Link>
          ))}
        </ul>

        {/* btn for large devices */}
        <div className="space-x-12 hidden lg:flex items-center">
          <a
            href="/"
            className="hidden lg:flex items-center text-brandPrimary hover:text-gray900"
          >
            Login
          </a>
          <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-NeutralDGrey">
            Sign Up
          </button>

          {/* Menu btn for only mobile devices */}
          <div className="md:hidden">
            <button className=""></button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
