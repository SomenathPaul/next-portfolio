"use client"; // ✅ needed because you’re using useState + useEffect

import React, { useState, useEffect } from "react";
import "./About.css";
import { ReactTyped } from "react-typed"; // ✅ only need ReactTyped

import Image from "next/image"; // ✅ Next.js image optimization

function About() {
  return (
    <div class="section2" id="about">
      <div class="about">
        <h1 data-aos="fade-up">About Me</h1>
        <br />
        <br />
        <div className="about-myself">
          <img src="../../../about-pic.jpg" alt="owner-profile" data-aos="fade-down-right"/>
          <p className="owner-profile-about-text" data-aos="fade-right">
            I'm{" "}
            <a
              className="hover:underline"
              href="https://www.linkedin.com/in/somenathpaul/"
              target="_blank"
              data-aos="fade-up-right"
            >
              Somenath Paul
            </a>, an enthusiastic and driven web developer with a
            passion for creating intuitive, user-friendly web applications. I
            enjoy problem-solving and constantly strive to improve my skills in
            both frontend and backend development. My goal is to build
            innovative digital experiences that have a positive impact.
            <ul className="list-none m-5 ">
              <li className="font-bold">
                Frontend {" "}
                <span className="text-gray-400 text-sm">
                  (React.js, Next.js, Tailwind CSS, JavaScript (ES6+))
                </span>
              </li>
              <li>
                Backend {" "}
                <span className="text-gray-400 text-sm">
                  (Node.js, Express.js, PHP)
                </span>
              </li>
              <li>
                Database{" "}
                <span className="text-gray-400 text-sm">(MongoDB, MySQL)</span>
              </li>
              <li>
                Tools & Deployment:{" "}
                <span className="text-gray-400 text-sm">(Git, GitHub)</span>
              </li>
            </ul>
          </p>
        </div>
        <br />
        <br />
        <div className="about-education">
          <p 
          data-aos="fade-up"
          >
            Currently, I'm pursuing a Bachelor’s degree in Computer Science and
            Engineering at{" "}
            <a
              className="hover:underline"
              href="https://tib.edu.in/"
              target="_blank"
              data-aos="fade-up-right"
            >
              Techno International Batanagar
            </a>{" "}
            College. Throughout my academic journey, I’ve gained a strong
            foundation in programming languages and technologies, including
            HTML, CSS, JavaScript, React.js, and Node.js. My coursework and
            project work have helped me develop both technical expertise and a
            solid understanding of full-stack web development.
          </p>
          <img src="../../../tib.jpeg" alt="collage" data-aos="fade-right" />
        </div>
      </div>
    </div>
  );
}

export default About;
