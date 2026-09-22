import React from "react";
import { ExternalLink } from "lucide-react";

const Projects = ({ isDark }) => {
  const projectList = [
    {
      title: "Online Doctor Appointment System",
      type: "Full Stack Web Application",
      description:
        "A web application for managing doctor appointments online. Built with React, Node.js, Express.js, MongoDB, and Tailwind CSS. Features include authentication, appointment booking, doctor management, and responsive UI.",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      link: "#",
    },
    {
      title: "Diet Recommendation System",
      type: "MERN Stack Application",
      description:
        "A full-stack application that recommends personalized diet plans based on user preferences and health goals. Built using the MERN stack with an intuitive and responsive interface.",
      tags: [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
      ],
      link: "#",
    },
    {
      title: "E-commerce Website",
      type: "Web Application",
      description:
        "A responsive e-commerce platform featuring product listings, shopping cart functionality, user authentication, and a modern UI built with React and Tailwind CSS.",
      tags: ["React", "JavaScript", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Bike Rental System",
      type: "Web Application",
      description:
        "A web application for managing bike rentals, bookings, customer details, and inventory. Developed using Node.js, Express.js, MongoDB, and JavaScript.",
      tags: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 transition-colors duration-300 ${
        isDark ? "bg-slate-950" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-6 sm:mb-8">
          <h3
            className={`text-xl sm:text-2xl md:text-3xl font-bold ${
              isDark ? "text-white" : "text-slate-800"
            }`}
          >
            Highlight Projects
          </h3>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className={`rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                isDark
                  ? "bg-slate-900 border border-slate-700 shadow-black/30"
                  : "bg-white border border-slate-100 shadow-xl shadow-blue-900/5"
              }`}
            >
              {/* Header */}
              <div className="flex gap-4 sm:gap-5 mb-5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} project`}
                  className="inline-flex shrink-0 items-center justify-center
                             w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14
                             rounded-xl bg-indigo-600 text-white shadow-lg
                             hover:bg-indigo-700 hover:-translate-y-0.5
                             active:scale-95
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2
                             transition-all duration-200"
                >
                  <ExternalLink className="w-5 h-5 lg:w-6 lg:h-6" />
                </a>

                <div>
                  <h3
                    className={`text-lg sm:text-xl md:text-2xl font-bold ${
                      isDark ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`font-semibold text-xs sm:text-sm md:text-base ${
                      isDark ? "text-indigo-400" : "text-indigo-500"
                    }`}
                  >
                    {project.type}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                className={`text-xs sm:text-sm md:text-base leading-relaxed mb-6 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                      isDark
                        ? "bg-slate-800 text-slate-200 border border-slate-700"
                        : "bg-slate-100 text-slate-600 border border-slate-200"
                    }`}
                  >
                    {tag}
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

export default Projects;