import { Mail } from "lucide-react";
import React from "react";
// import { Mail, Github, Linkedin } from "lucide-react";
import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";

const Footer = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`w-full py-16 px-4 border-t transition-colors duration-300 ${
        isDark
          ? "bg-slate-950 border-slate-800"
          : "bg-slate-50 border-slate-200"
      }`}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Name */}
        <h2
          className={`text-3xl font-bold mb-2 ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Roshan Bhagat
        </h2>

        <p
          className={`font-medium mb-10 ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Mern Stack Developer
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 mb-12">
          {/* GitHub */}
          <a
            href="https://github.com/Roshan-2003"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              isDark
                ? "bg-slate-900 text-slate-300 hover:text-white border border-slate-700"
                : "bg-white text-slate-600 hover:text-blue-600 shadow-sm hover:shadow-md"
            }`}
          >
            <FiGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/roshan-bhagat-a51407290?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              isDark
                ? "bg-slate-900 text-slate-300 hover:text-white border border-slate-700"
                : "bg-white text-slate-600 hover:text-blue-600 shadow-sm hover:shadow-md"
            }`}
          >
            <LuLinkedin size={20} />
          </a>

          {/* Email */}
          <a
            href="mailto:bhagatroshan182@gmail.com"
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              isDark
                ? "bg-slate-900 text-slate-300 hover:text-white border border-slate-700"
                : "bg-white text-slate-600 hover:text-blue-600 shadow-sm hover:shadow-md"
            }`}
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Divider */}
        <div
          className={`w-full max-w-xl h-px mb-8 ${
            isDark ? "bg-slate-700" : "bg-slate-200"
          }`}
        />

        {/* Copyright */}
        <p
          className={`text-sm mb-10 ${
            isDark ? "text-slate-500" : "text-slate-400"
          }`}
        >
          © 2026 Roshan Bhagat. All rights reserved.
        </p>

        {/* Back To Top */}
        <button
          onClick={scrollToTop}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 ${
            isDark
              ? "bg-slate-900 text-white border border-slate-700 hover:bg-slate-800"
              : "bg-white text-slate-700 border border-slate-200 shadow-sm hover:shadow-md"
          }`}
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
