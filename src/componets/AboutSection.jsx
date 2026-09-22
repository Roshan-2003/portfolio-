import React from "react";
import { User, Target, Code2 } from "lucide-react";

const About = ({ isDark }) => {
  return (
    <section
      id="about"
      className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 relative overflow-hidden transition-colors duration-500 
      ${isDark ? "bg-[#0f172a]" : "bg-[#f8faff]"}`}
    >
      {/* Background Glow - Adjusted for mobile performance */}
      <div
        className={`absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 blur-[80px] md:blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all ${
          isDark ? "bg-indigo-500/10" : "bg-blue-100/50"
        }`}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2 ${isDark ? "text-white" : "text-slate-800"}`}
          >
            About Roshan Bhagat – Frontend Developer
          </h2>
          <div className="h-1.5 w-20 md:w-28 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-stretch">
          {/* Left Column: Who I Am & Objective */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Who I Am Card */}
            <div
              className={`p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-300 hover:translate-y-[-5px] ${
                isDark
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-transparent shadow-xl shadow-blue-900/5"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2.5 bg-blue-600 rounded-xl text-white shadow-lg">
                  <User size={20} className="md:w-6 md:h-6" />
                </div>
                <h3
                  className={`text-base sm:text-lg md:text-xl font-bold ${isDark ? "text-slate-100" : "text-slate-800"}`}
                >
                  Who I Am
                </h3>
              </div>
              <p
                className={`text-xs sm:text-sm md:text-base leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
              >
                I am Roshan Bhagat, a passionate Frontend Developer from India
                specializing in React.js and MERN Stack.
              </p>
            </div>

            {/* Objective Card */}
            <div
              className={`p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-300 hover:translate-y-[-5px] ${
                isDark
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-transparent shadow-xl shadow-blue-900/5"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2.5 bg-purple-600 rounded-xl text-white shadow-lg">
                  <Target size={20} className="md:w-6 md:h-6" />
                </div>
                <h3
                  className={`text-base sm:text-lg md:text-xl font-bold ${isDark ? "text-slate-100" : "text-slate-800"}`}
                >
                  My Objective
                </h3>
              </div>
              <p
                className={`text-xs sm:text-sm md:text-base leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
              >
                My goal is to build scalable and innovative digital solutions
                while continuously learning.
              </p>
            </div>
          </div>

          {/* Right Column: Stats & Description */}
          <div
            className={`p-5 sm:p-6 md:p-10 rounded-2xl sm:rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-300 hover:translate-y-[-5px] ${
              isDark
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-transparent shadow-xl shadow-blue-900/5"
            }`}
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-2.5 bg-teal-500 rounded-xl text-white shadow-lg">
                <Code2 size={20} className="md:w-6 md:h-6" />
              </div>
              <h3
                className={`text-base sm:text-lg md:text-xl font-bold ${isDark ? "text-slate-100" : "text-slate-800"}`}
              >
                What I Do
              </h3>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <div
                className={`p-4 md:p-6 rounded-2xl text-center border transition-colors ${
                  isDark
                    ? "bg-slate-800/50 border-slate-700"
                    : "bg-slate-50 border-slate-100"
                }`}
              >
                <h4
                  className={`text-xl sm:text-2xl md:text-3xl font-extrabold ${isDark ? "text-indigo-400" : "text-blue-600"}`}
                >
                  5+
                </h4>
                <p className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Projects
                </p>
              </div>
              <div
                className={`p-4 md:p-6 rounded-2xl text-center border transition-colors ${
                  isDark
                    ? "bg-slate-800/50 border-slate-700"
                    : "bg-slate-50 border-slate-100"
                }`}
              >
                <h4
                  className={`text-xl sm:text-2xl md:text-3xl font-extrabold ${isDark ? "text-purple-400" : "text-purple-600"}`}
                >
                  3+
                </h4>
                <p className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Internships
                </p>
              </div>
            </div>

            <p
              className={`text-xs sm:text-sm md:text-base leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              I specialize in MERN Stack development, using MongoDB, Express.js,
              React.js, and Node.js to build scalable and user-friendly web
              applications. I focus on developing responsive frontend
              interfaces, robust backend APIs, database integration, and
              seamless full-stack experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
