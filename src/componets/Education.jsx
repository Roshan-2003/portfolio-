import React from "react";
import { GraduationCap, Award, School } from "lucide-react";

const Education = ({ isDark }) => {
  const educationData = [
    {
      degree: "Bachelor's Degree",
      year: "2021 - 2025",
      title: "B.Tech – Computer Science and Engineering",
      institution:
        "Gujarat Power Engineering and Research Institute (GPERI), Mehsana",
      result: "CGPA: 8.43",
    },
    {
      degree: "Higher Secondary",
      year: "2019 - 2021",
      title: "12th Grade – Science",
      institution: "Gyandeep High School",
      result: "64.32%",
    },
    {
      degree: "Secondary",
      year: "2018 - 2019",
      title: "10th Grade",
      institution: "Holy Child School",
      result: "60.43%",
    },
  ];

  return (
    <section
      id="education"
      className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-slate-950" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
        <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-slate-800"
            }`}
          >
            Education & Qualifications
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className={`absolute left-2 top-0 h-full w-[2px] ${
              isDark ? "bg-slate-700" : "bg-slate-200"
            }`}
          ></div>

          <div className="space-y-6 sm:space-y-10">
            {educationData.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Dot */}
                <div
                  className={`absolute left-2 w-4 h-4 rounded-full -translate-x-1/2 border-4 ${
                    isDark
                      ? "bg-slate-950 border-blue-500"
                      : "bg-white border-blue-600"
                  }`}
                ></div>

                {/* Card */}
                <div className="ml-6 sm:ml-10 w-full">
                  <div
                    className={`rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                      isDark
                        ? "bg-slate-900 border border-slate-700 shadow-black/30"
                        : "bg-white border border-slate-100 shadow-xl shadow-blue-900/5"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between gap-3 sm:gap-5 mb-4 sm:mb-5">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg">
                          <GraduationCap size={20} className="sm:w-6 sm:h-6" />
                        </div>

                        <div>
                          <span
                            className={`inline-block px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide ${
                              isDark
                                ? "bg-blue-900/40 text-blue-300"
                                : "bg-blue-100 text-blue-600"
                            }`}
                          >
                            {item.degree}
                          </span>

                          <p
                            className={`mt-1 sm:mt-2 text-xs sm:text-sm ${
                              isDark
                                ? "text-slate-400"
                                : "text-slate-500"
                            }`}
                          >
                            {item.year}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-green-500 font-bold text-xs sm:text-sm md:text-base">
                        <Award size={16} className="sm:w-[18px] sm:h-[18px]" />
                        <span>{item.result}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3
                      className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 ${
                        isDark ? "text-white" : "text-slate-800"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`font-semibold text-xs sm:text-sm md:text-base lg:text-lg ${
                        isDark ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      {item.institution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;