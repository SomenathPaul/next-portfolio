"use client";
import { useState } from "react";
import Link from "next/link";
import "./HireMe.css";
import { GiClick } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";

export default function HireMe() {
  const [copied, setCopied] = useState(false);

  const email = "somenathpaulbusiness10@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="main-container">
      <h1>Hire Me</h1>
      <p>If you’d like to get in touch, feel free to send me an email.</p>

      <button onClick={copyEmail} className="copy-btn">
        {copied ? (
          <span>
            Copied! <FaCheckCircle />
          </span>
        ) : (
          <span>
            Copy my Gmail <GiClick />
          </span>
        )}
      </button>

      <div className="back-btn">
        <Link href="/" className="flex items-center gap-2">
          <TiArrowBack />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
