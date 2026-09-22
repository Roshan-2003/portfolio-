import React, { useState } from "react";
import { Moon, Sun, Download, Menu, X } from "lucide-react";
import resume from '../../public/Roshan__.Resume.pdf';


const Navbar = ({ isDark, setIsDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isDark
          ? "bg-slate-950/90 border-slate-800"
          : "bg-white/90 border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <h1
          className={`text-lg sm:text-xl lg:text-2xl font-bold ${
            isDark ? "text-indigo-400" : "text-indigo-600"
          }`}
        >
          Roshan Bhagat
        </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isDark
                  ? "text-slate-300 hover:text-indigo-400"
                  : "text-slate-600 hover:text-indigo-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full transition ${
              isDark
                ? "bg-slate-800 text-yellow-400"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition ${
              isDark
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <Download size={18} />
            <span className="hidden md:inline">                 <a href={resume} download="Roshan_Bhagat_Resume.pdf" 
             > Resume</a></span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isDark ? "text-white" : "text-slate-700"
            }`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`lg:hidden px-4 py-5 border-t ${
            isDark
              ? "bg-slate-900 border-slate-700"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium ${
                  isDark
                    ? "text-slate-300 hover:text-indigo-400"
                    : "text-slate-700 hover:text-indigo-600"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Resume */}
            <a
              href="/resume.pdf"
              download
              className={`mt-2 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold ${
                isDark
                  ? "bg-indigo-600 text-white"
                  : "bg-blue-600 text-white"
              }`}
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;