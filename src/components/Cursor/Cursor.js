"use client";
import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "0px",
        height: "0px",
        borderRadius: "50%",
        backgroundColor: "aqua", // Sun core color
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 600px 30px aqua, 0 0 600px 30px white", 
        zIndex: 9999,
      }}
    />
  );
}
