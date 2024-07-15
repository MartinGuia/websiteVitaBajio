import React, {useState, useEffect} from 'react'
import * as images from "../assets/index.js";
import { Link } from "react-router-dom";

function Navbar() {
  
    const [isMenuOpen, setIsMenuOpen] = useState(false) 
  const [isSticky, setIsSticky] = useState(false) 

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }

    useEffect(() =>{
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true)
            }
            else{
                setIsSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    });

    //navitems array
    const navItems = [
        {link: "Home", path: "home"},
        {link: "Services", path: "services"},
        {link: "About", path: "about"},
      {link: "Product", path: "product"},
      {link: "Testimonial", path: "testimonial"},
      {link: "FAQ", path: "faq"},
    ]

  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
        <nav>
          <a className='text-2xl font-semibold space-x-3' href=""><img className='w-32 inline-block items-center' src={images.logoVB} alt="" /><span className='text-[#263238]'>Vita Bajío</span></a>

          {/* nav items for large devices */}
          <ul>
            {
              navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} off></Link>)
            }
          </ul>
        </nav>
    </header>
  )
}

export default Navbar