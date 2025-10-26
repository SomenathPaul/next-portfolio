"use client"; // ✅ needed because you’re using useState + useEffect

import React, { useState, useEffect } from "react";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

import { LuCode } from "react-icons/lu"; // ✅ correct import


function Footer() {
  return (
    <>
      <div className="footer">
        <h2 className="text-2xl flex" data-aos="fade-up" data-aos-duration="1000" >
          My Portfolio
        </h2>
        <p className="footer-about text-center font-light px-9 py-3 text-sm text-zinc-400" data-aos="fade-up" data-aos-duration="1300"> 
          I&apos;m Somenath Paul, an enthusiastic and driven web developer with a
          passion for creating intuitive, user-friendly web applications. I
          enjoy problem-solving and constantly strive to improve my skills in
          both frontend and backend development. My goal is to build innovative
          digital experiences that have a positive impact.
        </p>
        <hr />
        <ul className="social-media-links">
          <a href="https://www.facebook.com/somenath.paul.3344" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare data-aos="flip-right" />
          </a>
          <a href="https://github.com/SomenathPaul" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare data-aos="flip-right" />
          </a>
          <a href="https://www.linkedin.com/in/somenathpaul/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/@CreatorPaul" target="_blank" rel="noopener noreferrer">
            <FaYoutubeSquare />
          </a>
        </ul>
        <div className="copyright" >
          <p className="font-light">
            Copyright &copy;2024{" "}
            <a href="#" className="text-teal-500">
              SomenathPaulPortfolio
            </a>
            <RiNextjsFill className="madelogo"/>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
