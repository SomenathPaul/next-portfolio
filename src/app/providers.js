"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false,    // 🔥 Allow repeated animations on scroll
      mirror: true,   // 🔥 Animate elements when scrolling back up
    });
  }, []);

  return <>{children}</>;
}
