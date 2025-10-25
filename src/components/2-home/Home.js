"use client"; // ✅ needed because you’re using useState + useEffect

import React, { useState, useEffect } from "react";
import "./Home.css";
import { ReactTyped } from "react-typed";
import Link from "next/link"; 
import Image from "next/image";

function Home() {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    // Trigger the rotation when the component is mounted
    setRotate(true);
  }, []);

  return (
    <div className="section1" id="home">
      <div className="sec1name">
        <span className="text-gray-400">Hi, I&apos;m</span>

        {/* Avoid nested <h2> tags (invalid HTML) */}
        <h2>
          <span className="somenath">Somenath</span> Paul
        </h2>

        <ReactTyped
          className="text-gray-400 font-bold animation_text"
          strings={["Full Stack Developer", "Website Designer", "Java Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />

        <p>
          Strong design and integration skills, intuitive problem solving
          skills, and proficiency in programming languages like JavaScript,
          Java, C, Python.
        </p>

        <div className="sec1btn">
          {/* Navigate to Hire Me Page */}
          <Link href="/hireme">
            <button id="hirebtn">Hire me</button>
          </Link>
          <a href="/cv.pdf" download="Somenath_Paul_CV.pdf">
            <button id="cvbtn">Download CV</button>
          </a>
        </div>

        <div className="certificate"></div>
      </div>

      {/* ✅ Use Next.js Image instead of <img> */}
      <Image
        src="/profile.jpeg" // ✅ images must go inside public/
        width={300}
        height={300}
        className={`${rotate ? "rotate-3d-animation" : ""} profile-img`}
        alt="Profile picture"
        priority
      />
    </div>
  );
}

export default Home;
