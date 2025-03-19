import React, { useState, useEffect } from "react";
import './Navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";  // Import hamburger and close icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const Scroller=(id)=>{
    const section = document.getElementById(id);
    if (section){
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); 
    } 
  }

  return (
    <div className={`nav-wrap ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <h4>Portfolio</h4>
          </div>

          {/* Desktop navigation */}
          <div className="nav-lists pc-nav">
            <ul>
              <li onClick={()=>Scroller("home")}>Home</li>
              <li onClick={()=>Scroller("about")}>About Me</li>
              <li onClick={()=>Scroller("projects")}>Projects</li>
              <li onClick={()=>Scroller("skills")}>Skills</li>
              <li onClick={()=>Scroller("experience")}>Experience</li>
              <li onClick={()=>Scroller("contact")}>Contact</li>
            </ul>
          </div>

          {/* Hamburger Icon */}
          <div className="hamburger-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </div>

          <div className="nav-btns">
            <button className="contact-btn" onClick={()=>Scroller("contact")}>Contact</button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li onClick={()=>Scroller("home")}>Home</li>
            <li onClick={()=>Scroller("abou")}>About Me</li>
            <li onClick={()=>Scroller("projects")}>Projects</li>
            <li onClick={()=>Scroller("skills")}>Skills</li>
            <li onClick={()=>Scroller("experience")}>Experience</li>
            <li onClick={()=>Scroller("contact")}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
