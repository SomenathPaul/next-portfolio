"use client";

import React from "react";
import "./Navbar.css";
import { useState } from "react";
// react icons
import { FaHome } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { RiMailCheckFill } from "react-icons/ri";

function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`nav-container ${isOpen ? "expanded-nav" : ""}`}>
        <div className="nav-header">
          <div>
            <FaHome className="nav-home-logo" />
            <h4>Portfolio</h4>
          </div>

          <div className="toggle-btn cursor-pointer transform transition-transform duration-500" onClick={handleClick}>
            <div className={`transform transition-transform duration-500 ${isOpen ? "rotate-180" : "rotate-0"}`}>
            {isOpen ? (
              <IoMdCloseCircle className="nav-bars" />
            ) : (
              <FaBarsStaggered className="nav-bars" />
            )}
          </div></div>
        </div>
        <ul className="sidemenu">
          <a href="#about">About</a>
          <a href="#scroll-projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact" id="active">
            Contact me
          </a>
        </ul>


        {/* responsive nav */}
      <ul className={`res-nav-container ${isOpen ? "expanded-res-nav" : ""}`}>
        <a href="#about">About</a>
        <a href="#scroll-projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact" id="active" className="hidden [@media(min-width:380px)]:inline">
          Contact me
        </a>
        {/* responsive anchor tag */}
        <a href="#contact" id="active" className="inline [@media(min-width:380px)]:hidden w-100">
          <RiMailCheckFill className="mail-active"/>
        </a>
      </ul>
      </div>
    </>
  );
}

export default Navbar;
