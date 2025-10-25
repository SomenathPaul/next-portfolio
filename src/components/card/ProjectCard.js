"use client"; // ✅ needed because you’re using useState + useEffect

import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed"; // ✅ only need ReactTyped

import Image from "next/image"; // ✅ Next.js image optimization
import "./ProjectCard.css";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdVisibility } from "react-icons/md";


export default function Project({visibility, title, description, image, link }) {
  return (
    <div className="projectCard" data-aos="flip-right">
      <p style={{
            color: visibility === "yes" ? "greenyellow" : visibility === "no" ? "red" : "black",
          }} className="published flex"><HiOutlineStatusOnline className="published-logo" />
      <span>Published</span></p>
      <Image src={image} alt={title} className="card-image" width={400} 
  height={300}/>

      <div class="projectCardtext">
        <h2>{title}</h2>
        <p>Technologies Used : {description}</p>
      </div>
      
      <a href={link} target="_blank" rel="noopener noreferrer">
      <button style={{
            'text-decoration': visibility === "no" ? "line-through" : "none"
          }}
          disabled={visibility === "no"}
          >View Site</button></a>
    </div>
  );
}
