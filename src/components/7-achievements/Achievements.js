"use client"; // ✅ needed because you’re using useState + useEffect

import React, { useState, useEffect } from "react";
import "./Achievements.css";
import { ReactTyped } from "react-typed"; // ✅ only need ReactTyped

import Image from "next/image"; // ✅ Next.js image optimization
import Link from "next/link";
import { LiaCertificateSolid } from "react-icons/lia";
import { PiMedalFill } from "react-icons/pi";

function Achievements() {
  return (
    <div className="achievements">
      <div className="achievements_header">
        <h1 className="achievements_heading my-10" data-aos="fade-up">Achievements</h1>
        <Link href="#" className="Up_Explore_More_Achievements" data-aos="fade-up">
          {/* Use a button for better accessibility */}
          <button
            style={{ padding: "10px 20px", cursor: "pointer" }}
            className="Explore_More_Achievements_btn"
          >
            Explore More Achievements
            <LiaCertificateSolid className="Explore_More_Achievements_logo" />
          </button>
        </Link>
      </div>

      <div className="certificates">
        <div className="big-certificate">
          <img src="/achievements/tcs.jpg" alt="" data-aos="flip-right" />
        </div>
        <div className="small-certificate">
          <img src="/achievements/java.jpg" className="small-certificate_img1" alt="" data-aos="flip-right" />
          <div className="small-certificate_img2">
            <img src="/achievements/sql.jpg" alt="" data-aos="flip-right" />
            <Link href="#" className="Mid_Explore_More_Achievements">
              {/* Use a button for better accessibility */}
              <button
                style={{ padding: "10px 20px", cursor: "pointer" }}
                className="Explore_More_Achievements_btn"
              >
                Explore More Achievements
                <PiMedalFill />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* responsive button */}
      <Link href="#" className="Down_Explore_More_Achievements">
        {/* Use a button for better accessibility */}
        <button
          style={{ padding: "10px 20px", cursor: "pointer" }}
          className="Explore_More_Achievements_btn"
        >
          Explore More Achievements
          <LiaCertificateSolid className="Explore_More_Achievements_logo" />
        </button>
      </Link>
    </div>
  );
}

export default Achievements;
