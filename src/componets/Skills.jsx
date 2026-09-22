import React from 'react';
import { Code2, Terminal, Database } from 'lucide-react';

const Skills = ({ isDark }) => {
  const skillsData = [
    {
      title: "Frontend",
      icon: <Code2 size={28} />,
      color: "blue",
      items: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind"]
    },
    {
      title: "Backend (Basics)",
      icon: <Terminal size={28} />,
      color: "purple",
      items: ["Node.js","Express.js"]
    },
    {
      title: "Database",
      icon: <Database size={28} />,
      color: "teal",
      items: ["MongoDB" , "Supabase" ]
    }
  ];

  return (
    <section id="skills" className={`py-16 md:py-24 relative overflow-hidden transition-colors duration-500 
      ${isDark ? "bg-[#0f172a]" : "bg-white"}`}>
      
      {/* Background soft glow - Responsive visibility */}
      <div className={`absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 blur-[80px] md:blur-[100px] rounded-full translate-x-1/4 translate-y-1/4 transition-all duration-500
        ${isDark ? "bg-blue-900/20" : "bg-blue-50/50"}`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading - Responsive Text Sizes */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-500 ${isDark ? "text-white" : "text-slate-800"}`}>
            Skills & Technologies
          </h2>
          <div className="h-1.5 w-16 md:w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className={`mt-5 max-w-2xl mx-auto text-base md:text-lg transition-colors duration-500 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            I work with a range of tools and technologies to build responsive and reliable web applications.
          </p>
        </div>

        {/* Skills Cards Grid - Responsive Columns 
            1 column on Mobile, 2 on Tablet, 3 on Laptop
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {skillsData.map((category, index) => (
            <div 
              key={index}
              className={`flex flex-col p-6 sm:p-8 lg:p-10 rounded-[2rem] md:rounded-[2.5rem] border text-center transition-all duration-300 hover:translate-y-[-8px] 
                ${isDark 
                  ? "bg-slate-900 border-slate-800 shadow-none hover:bg-slate-800/80" 
                  : "bg-white border-slate-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10"}`}
            >
              {/* Icon Container - Properly Centered */} 
              <div className={`mx-auto p-4 rounded-2xl mb-6 w-16 h-16 flex items-center justify-center text-white shadow-lg ${
                category.color === 'blue' ? 'bg-blue-600 shadow-blue-500/20' :
                category.color === 'purple' ? 'bg-purple-600 shadow-purple-500/20' :
                'bg-teal-500 shadow-teal-500/20'
              }`}>
                {category.icon}
              </div>

              <h3 className={`text-xl md:text-2xl font-bold mb-6 md:mb-8 transition-colors duration-500 ${isDark ? "text-slate-100" : "text-slate-800"}`}>
                {category.title}
              </h3>

              {/* Skills Pills - Smaller text on mobile */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-auto">
                {category.items.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className={`px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold border transition-all duration-300 
                      ${category.color === 'blue' ? 
                        (isDark ? 'border-blue-900/50 text-blue-400 bg-blue-900/20' : 'border-blue-100 text-blue-600 bg-blue-50/50') :
                      category.color === 'purple' ? 
                        (isDark ? 'border-purple-900/50 text-purple-400 bg-purple-900/20' : 'border-purple-100 text-purple-600 bg-purple-50/50') :
                        (isDark ? 'border-teal-900/50 text-teal-400 bg-teal-900/20' : 'border-teal-100 text-teal-600 bg-teal-50/50')
                      } hover:bg-opacity-100 hover:text-white ${
                        category.color === 'blue' ? 'hover:bg-blue-600' :
                        category.color === 'purple' ? 'hover:bg-purple-600' :
                        'hover:bg-teal-500'
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

export default Skills;