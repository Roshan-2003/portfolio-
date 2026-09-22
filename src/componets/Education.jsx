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
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-slate-950" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Heading */}
       <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-slate-800"
            }`}
          >
Education & Projects          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>

          <p
            className={`max-w-3xl mx-auto text-lg ${
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

          <div className="space-y-10">
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
                <div className="ml-10 w-full">
                  <div
                    className={`rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                      isDark
                        ? "bg-slate-900 border border-slate-700 shadow-black/30"
                        : "bg-white border border-slate-100 shadow-xl shadow-blue-900/5"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg">
                          <GraduationCap size={24} />
                        </div>

                        <div>
                          <span
                            className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                              isDark
                                ? "bg-blue-900/40 text-blue-300"
                                : "bg-blue-100 text-blue-600"
                            }`}
                          >
                            {item.degree}
                          </span>

                          <p
                            className={`mt-2 text-sm ${
                              isDark
                                ? "text-slate-400"
                                : "text-slate-500"
                            }`}
                          >
                            {item.year}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-green-500 font-bold">
                        <Award size={18} />
                        <span>{item.result}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        isDark ? "text-white" : "text-slate-800"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`font-semibold text-lg ${
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

        {/* Footer */}
     
      </div>
    </section>
  );
};

export default Education;