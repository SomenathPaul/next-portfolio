"use client";
import React, { useRef, useState } from "react";
import "./ContactForm.css";
import { IoMdSend } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { MdSmsFailed } from "react-icons/md";
import { RiSignalWifiErrorLine } from "react-icons/ri";
import { GoAlertFill } from "react-icons/go";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  // Validation function
  const validateForm = (name, email, message) => {
    if (!name || name.trim().length < 2) {
      return (
        <span className="flex items-center gap-2 text-amber-300">
          <GoAlertFill /> Please enter your full name.
        </span>
      );
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      return (
        <span className="flex items-center gap-2 text-amber-300">
          <GoAlertFill /> Please enter a valid email.
        </span>
      );
    }
    if (!message || message.trim().length < 5) {
      return (
        <span className="flex items-center gap-2 text-amber-300">
          <GoAlertFill /> Message must be at least 5 characters.
        </span>
      );
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value;
    const email = form.current.from_email.value;
    const message = form.current.message.value;

    const error = validateForm(name, email, message);
    if (error) {
      setStatus(error);
      return;
    }

    setStatus("⏳ Sending...");
    setSending(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",   // 🔹 Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",  // 🔹 Replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY"    // 🔹 Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus(
            <span className="flex items-center gap-2 text-green-600">
              <FaCheckCircle /> Message sent successfully!
            </span>
          );
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setStatus(
            <span className="flex items-center gap-2 text-red-600">
              <MdSmsFailed /> Failed to send message. Try again.
            </span>
          );
        }
      )
      .catch(() => {
        setStatus(
          <span className="flex items-center gap-2 text-red-600">
            <RiSignalWifiErrorLine /> Network error. Try again.
          </span>
        );
      })
      .finally(() => setSending(false));
  };

  return (
    <div className="ContactForm p-6" id="contact">
      <h1 className="my-10 text-white" data-aos="fade-up">
        Contact Me
      </h1>

      <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6" data-aos="fade-right" data-aos-duration="1000">
        <input
          type="text"
          name="from_name"
          placeholder="Full Name"
          className="input-text"
          required
        />
        <input
          type="email"
          name="from_email"
          placeholder="Email"
          className="input-text"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="input-text"
          required
        />

        <button
          type="submit"
          disabled={sending}
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex justify-center gap-2 p-1 text-slate-300 text-center disabled:opacity-60"
        >
          {sending ? "Sending..." : "Send"} <IoMdSend className="sendLogo" />
        </button>
      </form>

      {status && (
        <p className="mt-4 text-sm text-green-500" data-aos="fade-right">
          {status}
        </p>
      )}
    </div>
  );
}

export default ContactForm;
