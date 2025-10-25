"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

function FixedScroll() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        // Show button when user scrolls past About section
        if (scrollY >= aboutSection.offsetTop - 100) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          key="back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }}      
          animate={{ opacity: 1, y: 0 }}      
          exit={{ opacity: 0, y: 50 }}        
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-teal-400 w-[50px] h-[50px] rounded-full fixed bottom-5 right-5 flex justify-center items-center cursor-pointer hover:bg-cyan-400 transition-colors duration-300"
        >
          <FaArrowUp className="text-black text-xl" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FixedScroll;
