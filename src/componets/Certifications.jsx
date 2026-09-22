import React from "react";
import { Award, Calendar, BookOpen } from "lucide-react";

const Certifications = ({ isDark }) => {
  const certifications = [
    {
      title: "Odoo Hackathon – Finalist",
      category: "Hackathon",
      categoryColor: {
        light: "text-purple-600 bg-purple-100",
        dark: "text-purple-300 bg-purple-900/40",
      },
      date: "2025",
      description:
        "Developed and presented a self-made web application for the Odoo Hackathon and successfully reached the final round.",
    },

    {
      title: "Nirma Hackathon 4.0",
      category: "Hackathon",
      categoryColor: {
        light: "text-purple-600 bg-purple-100",
        dark: "text-purple-300 bg-purple-900/40",
      },
      date: "2025",
      description:
        "Participated in Nirma Hackathon 4.0, collaborating with a team to develop and present a solution to a real-world problem.",
    },

    {
      title: "Data Structures and Algorithms",
      category: "Course",
      categoryColor: {
        light: "text-green-600 bg-green-100",
        dark: "text-green-300 bg-green-900/40",
      },
      date: "Jul 2022 – Oct 2022",
      description:
        "Covered important data structures and problem-solving techniques used in software development.",
    },
    {
      title: "Foundational C# with Microsoft",
      category: "Certification",
      categoryColor: {
        light: "text-green-600 bg-green-100",
        dark: "text-green-300 bg-green-900/40",
      },
      date: "Jul 2024",
      description:
        "Completed a Microsoft-backed course covering the basics of C# and application development.",
    },
  ];

  return (
    <section
      id="achievements"
      className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 transition-colors duration-300 ${
        isDark ? "bg-slate-950" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-slate-800"
            }`}
          >
            Certificates & Licenses
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>

          <p
            className={`max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            My academic journey in computer science and the foundation that
            shaped my development skills.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {certifications.map((item, index) => (
            <div
              key={index}
              className={`flex items-start p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                isDark
                  ? "bg-slate-900 border border-slate-700 shadow-black/30"
                  : "bg-white border border-slate-100 shadow-xl shadow-blue-900/5"
              }`}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center bg-indigo-600 rounded-xl text-white shadow-lg mr-4 sm:mr-6">
                <Award size={20} className="sm:w-6 sm:h-6" />
              </div>

              {/* Content */}
              <div>
                <span
                  className={`inline-block px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold mb-2 sm:mb-3 ${
                    isDark ? item.categoryColor.dark : item.categoryColor.light
                  }`}
                >
                  {item.category}
                </span>

                <h3
                  className={`text-base sm:text-lg md:text-xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-slate-800"
                  }`}
                >
                  {item.title}
                </h3>

                <div
                  className={`flex items-center gap-2 text-xs sm:text-sm mb-3 sm:mb-4 ${
                    isDark ? "text-slate-400" : "text-slate-400"
                  }`}
                >
                  <Calendar size={14} className="sm:w-[15px] sm:h-[15px]" />
                  <span>{item.date}</span>
                </div>

                <p
                  className={`text-xs sm:text-sm md:text-base leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
