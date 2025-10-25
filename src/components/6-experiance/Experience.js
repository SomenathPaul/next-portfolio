import "./Experience.css";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function Experience() {
  return (
    <>
      <div className="experience-container" id="experience">
        <h1 className="experience-header" data-aos="fade-up">
          Experience
        </h1>
        <div className="experience-content">
          <div className="experience-item" data-aos="fade-right">
            <img src="/experience/internship-logo.jpg" alt="" />
            <h2>Digital Marketing Intern</h2>
          </div>
          <p className="experience-item_p" data-aos="fade-up">
            Indian Institute of Internship (in collaboration with Fortune 5000)
          </p>
          <h3 className="text-cyan-400" data-aos="fade-up">
            Kolkata, India | 6 Months
          </h3>
          <ul className="experience-description" data-aos="fade-up">
            <li className="flex gap-1">
              <IoCheckmarkCircleSharp />
              <span>
                <bold>Digital Marketing Intern</bold>
                <p className="text-[10px] text-gray-400">Oct 2025 - Present</p>
              </span>
            </li>

            <li className="flex gap-1">
              <IoCheckmarkCircleOutline />
              <span>
                Social Media Handler Intern
                <p className="text-[10px] text-gray-400">May 2025 - Oct 2025</p>
              </span>
            </li>
            <li>
              <BiSolidRightArrow className="BiSolidRightArrow" />
              <p className="text-gray-300">
                <bold>Created and promoted</bold> tech content on LinkedIn and
                YouTube, leveraging content strategy, SEO optimization, keyword
                research, and audience engagement tactics to boost visibility
                and reach.
              </p>
            </li>
            <li>
              <BiSolidRightArrow className="BiSolidRightArrow" />
              <p className="text-gray-300">
                <bold>Built and nurtured</bold> a LinkedIn community of{" "}
                <bold>500+ members</bold> by sharing programming-related
                content, suggesting technical resources, and guiding peers on{" "}
                <bold>
                  career paths and the latest trends in IT aligned with industry
                  needs.
                </bold>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
