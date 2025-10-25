"use client"; // ✅ needed because you’re using useState + useEffect

import React, { useState, useEffect } from "react";
import "./Projects.css";

import Image from "next/image"; // ✅ Next.js image optimization
import ProjectCard from "../card/ProjectCard";
import data from "../../assets/projectdata.json";
import { FaWebAwesome } from "react-icons/fa6";

export default function Projects() {
  return (
    <div class="section3" id="scroll-projects">
      <h1 className="project_heading my-10" data-aos="fade-up">Projects</h1>
      <div class="projects">
        {/* top projects */}
        <h1 className="sub_project_heading my-4 text-cyan-300" data-aos="fade-right">Top Projects<FaWebAwesome /></h1>
        <div className="clone-projects">
        {data.TopProjects.map((card) => (
            <ProjectCard
              key={card.id}
              visibility={card.visibility}
              title={card.title}
              description={card.description}
              image={card.image}
              link={card.link}
            />
          ))}
        </div>
        {/* MERN projects */}
        <h1 className="sub_project_heading my-4 text-cyan-300" data-aos="fade-right">MERN Stack Projects</h1>
        <div className="clone-projects">
        {data.MERNProjects.map((card) => (
            <ProjectCard
              key={card.id}
              visibility={card.visibility}
              title={card.title}
              description={card.description}
              image={card.image}
              link={card.link}
            />
          ))}
        </div>
        {/* php-sql full stack projects */}
        <h1 className="sub_project_heading my-4 text-cyan-300" data-aos="fade-right">
          Full Stack PHP-MySQL Projects
        </h1>
        <div className="clone-projects">
        {data.FullStackPHPMySQLProjects.map((card) => (
            <ProjectCard
              key={card.id}
              visibility={card.visibility}
              title={card.title}
              description={card.description}
              image={card.image}
              link={card.link}
            />
          ))}
        </div>
        {/* clone projects */}
        <h1 className="sub_project_heading my-4 text-cyan-300" data-aos="fade-right">
          Clone Projects
        </h1>
        <div className="clone-projects">
          {data.CloneProjects.map((card) => (
            <ProjectCard
              key={card.id}
              visibility={card.visibility}
              title={card.title}
              description={card.description}
              image={card.image}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
