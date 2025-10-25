"use client"; // ✅ needed because you’re using useState + useEffect

import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";

import { ReactTyped } from "react-typed"; // ✅ only need ReactTyped
import Image from "next/image"; // ✅ Next.js image optimization

import { MdVerified } from "react-icons/md";
import data from "../../assets/skillsdata.json";

// programming languages
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaC } from "react-icons/fa6";



// frontend
import { FaHtml5 } from "react-icons/fa"; // html
import { FaCss3Alt } from "react-icons/fa6"; // css
import { FaBootstrap } from "react-icons/fa"; // bootstrap
import { RiTailwindCssFill } from "react-icons/ri"; // tailwind
import { FaJsSquare } from "react-icons/fa"; // js
import { SiJquery } from "react-icons/si"; // jquery
import { FaReact } from "react-icons/fa"; // react
import { FaAngular } from "react-icons/fa"; // angular
import { FaVuejs } from "react-icons/fa"; // vue

// backend
import { FaPhp } from "react-icons/fa6"; // php
import { FaLaravel } from "react-icons/fa"; // laravel
import { FaNodeJs } from "react-icons/fa"; // node
import { SiExpress } from "react-icons/si"; // express

// database
import { SiMongodb } from "react-icons/si"; // mongodb
import { SiMysql } from "react-icons/si"; // mysql
import { SiPostgresql } from "react-icons/si"; //postgreSQL

import { TbBrandReactNative } from "react-icons/tb"; // react native

// import { SiAzuredevops } from "react-icons/si"; // devops





// Icon mapping
const iconMap = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaBootstrap: FaBootstrap,
  FaJsSquare: FaJsSquare,
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  RiTailwindCssFill: RiTailwindCssFill,
  SiJquery: SiJquery,
  FaAngular: FaAngular,
  FaVuejs: FaVuejs,
  FaPhp: FaPhp,
  FaLaravel: FaLaravel,
  SiExpress: SiExpress,
  SiMongodb: SiMongodb,
  SiMysql: SiMysql,
  SiPostgresql: SiPostgresql,
  TbBrandReactNative: TbBrandReactNative,
  // SiAzuredevops: SiAzuredevops,
  FaJava: FaJava,
  FaPython: FaPython,
  FaC: FaC
};

function Skills() {
  return (
    <div className="skills text-white">
      <h1 className="h1_skills my-10 text-teal-300" data-aos="fade-up">Skills</h1>
      {/* Languages */}
      <div className="skill-section flex flex-col gap-3" >
        <h2 data-aos="fade-right">Languages</h2>
        <div className='all-skill flex gap-4'>
        {data.Languages.map((item, index) => {
          const LogoComponent = iconMap[item.logo]; // Get the icon component from the map
          return (
            <div data-aos="flip-left" className="skill text-black" key={index} style={{
              'border-color': item.level === "Beginner" ? "MediumSeaGreen" : item.level === "Intermediate" ? "Orange" : "Tomato", 'color': item.level === "Beginner" ? "MediumSeaGreen" : item.level === "Intermediate" ? "Orange" : "Tomato",
            }}>
              <p className="text-sm font-light" style={{
              background: item.level === "Beginner" ? "MediumSeaGreen" : item.level === "Intermediate" ? "Orange" : "Tomato", color: "black"
            }}>{item.level}</p>
              {/* Render the logo component if it exists in the iconMap */}
              {LogoComponent && <LogoComponent className="logo text-3xl" />}
              <h3 className="font-semibold flex">
                {item.name} <MdVerified className="m-1" />
              </h3>
              <span className="text-sm">{item.project} Projects</span>
            </div>
          );
        })}
        </div>

      </div>
      {/* Frontend */}
      <div className="skill-section flex flex-col gap-3">
        <h2 data-aos="fade-right">Frontend</h2>
          <div className='all-skill flex gap-4'>
        {data.Frontend.map((item, index) => {
          const LogoComponent = iconMap[item.logo]; // Get the icon component from the map
          return (
            <div data-aos="flip-right" className="skill text-black" key={index} style={{
              background: item.level === "Beginner" ? "MediumSeaGreen" : item.level === "Intermediate" ? "Orange" : "Tomato",
            }}>
              <p className="text-sm font-light">{item.level}</p>
              {/* Render the logo component if it exists in the iconMap */}
              {LogoComponent && <LogoComponent className="logo text-3xl" />}
              <h3 className="font-semibold flex">
                {item.name} <MdVerified className="m-1" />
              </h3>
              <span className="text-sm">{item.project} Projects</span>
            </div>
          );
        })}
        </div>
        
      </div>
      {/* Backend */}
      <div className="skill-section flex flex-col gap-3">
        <h2 data-aos="fade-right">Backend</h2>
        <div className='all-skill flex gap-4'>
        {data.Backend.map((item, index) => {
          const LogoComponent = iconMap[item.logo]; // Get the icon component from the map
          return (
            <div data-aos="flip-left" className="skill text-black" key={index} style={{
              'border-color': item.level === "Beginner" ? "MediumSeaGreen" : item.level === "Intermediate" ? "Orange" : "Tomato", 'color': item.level === "Beginner" ? "MediumSeaGreen" : item.level === "Intermediate" ? "Orange" : "Tomato",
            }}>
              <p className="text-sm font-light" style={{
              background: item.level === "Beginner" ? "MediumSeaGreen" : item.level === "Intermediate" ? "Orange" : "Tomato", color: "black"
            }}>{item.level}</p>
              {/* Render the logo component if it exists in the iconMap */}
              {LogoComponent && <LogoComponent className="logo text-3xl" />}
              <h3 className="font-semibold flex">
                {item.name} <MdVerified className="m-1" />
              </h3>
              <span className="text-sm">{item.project} Projects</span>
            </div>
          );
        })}
        </div>
      </div>
      {/* database */}
      <div className="skill-section flex flex-col gap-3">
        <h2 data-aos="fade-right">Database</h2>
        <div className='all-skill flex gap-4'>
        {data.Database.map((item, index) => {
          const LogoComponent = iconMap[item.logo]; // Get the icon component from the map
          return (
            <div data-aos="flip-right" className="skill text-black" key={index} style={{
              background: item.level === "Beginner" ? "MediumSeaGreen" : item.level === "Intermediate" ? "Orange" : "Tomato",
            }}>
              <p className="database_skill text-sm font-light" style={{
              background: "white", color: "black"
            }}>{item.level}</p>
              {/* Render the logo component if it exists in the iconMap */}
              {LogoComponent && <LogoComponent className="logo text-3xl" />}
              <h3 className="font-semibold flex">
                {item.name} <MdVerified className="m-1" />
              </h3>
              <span className="text-sm">{item.project} Projects</span>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default Skills;