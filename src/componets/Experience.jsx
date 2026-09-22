import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = ({ isDark }) => {
  const experiences = [
    {
      role: "Mern Stack Developer",
      company: "ker Infotech",
      iconBg: "bg-green-600",
      duration: "Sep 2026– Present",
      location: "Ahmedabad",
      description:
        "Working as a MERN Stack Developer, building full-stack web applications using MongoDB, Express.js, React, and Node.js. Experienced in developing REST APIs, implementing authentication and authorization, managing databases, and creating responsive, scalable, and user-friendly applications.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Neon",
        "Drizzle ORM",
        "Tailwind CSS",
      ],
    },
    {
      role: "Frontend Developer",
      company: "MakQuick Private Limited",
      iconBg: "bg-green-600",
      duration: "Aug 2025 – Aug 2026",
      location: "Ahmedabad",
      description:
        "Working as a Frontend Developer, building responsive web applications using React, JavaScript, and modern UI frameworks. Focused on performance, clean UI, and user experience.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Bootstrap",
        "Tailwind CSS",
        "Next.js",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Maven Regtech Private Limited",
      iconBg: "bg-blue-600",
      duration: "May 2025 – July 2025",
      location: "Ahmedabad",
      description:
        "Worked on frontend development using React.js, building responsive user interfaces, integrating REST APIs, implementing CRUD operations, and developing reusable components for live projects.",
      skills: ["React.js", "JavaScript", "HTML", "CSS", "Git"],
    },
    {
      role: "MERN Stack Developer",
      company: "Dipc Software",
      iconBg: "bg-green-600",
      duration: "Jan 2025 – Apr 2025",
      location: "Ahmedabad",
      description:
        "Developed a full-stack Online Doctor Appointment System using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Built responsive user interfaces, implemented secure authentication, integrated REST APIs, managed appointments, and performed complete CRUD operations.",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-16 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-slate-950" : "bg-white"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`absolute top-0 right-0 w-[500px] h-[500px] blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 ${
          isDark ? "bg-purple-900/20" : "bg-purple-50/50"
        }`}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-extrabold mb-4 tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Experience & Projects
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>

          <p
            className={`mt-5 text-lg ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Some of the work I've done during internships and personal projects.
          </p>
        </div>

        {/* Sub Heading */}
        <div className="mb-6">
          <h3
            className={`text-2xl font-bold ${
              isDark ? "text-white" : "text-slate-800"
            }`}
          >
            Professional Experience
          </h3>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                isDark
                  ? "bg-slate-900 border border-slate-700 shadow-black/30"
                  : "bg-white border border-slate-100 shadow-xl shadow-blue-900/5"
              }`}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between gap-6 mb-5">
                <div className="flex items-center gap-5">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg ${exp.iconBg}`}
                  >
                    <Briefcase size={28} />
                  </div>

                  <div>
                    <h4
                      className={`text-2xl font-bold ${
                        isDark ? "text-white" : "text-slate-800"
                      }`}
                    >
                      {exp.role}
                    </h4>

                    <p
                      className={`font-semibold text-lg ${
                        isDark ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex flex-col md:items-end gap-2 text-sm ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p
                className={`leading-8 mb-5 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {exp.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      isDark
                        ? "bg-slate-800 text-slate-200 border border-slate-700"
                        : "bg-slate-100 text-slate-600 border border-slate-200"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
