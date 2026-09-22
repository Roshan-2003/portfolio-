import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, desc, tech }) => (
  <div className="group bg-[#0A0A0A] border border-white/5 p-8 rounded-[2rem] hover:border-green-400/50 transition-all duration-500 text-left">
    <div className="flex justify-between items-start mb-6">
      <div className="bg-green-400/10 p-3 rounded-2xl text-green-400 group-hover:scale-110 transition">
        <Code size={24} />
      </div>
      <ExternalLink size={20} className="text-gray-600 group-hover:text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((t, i) => (
        <span key={i} className="text-[10px] uppercase font-bold tracking-widest text-gray-400 bg-white/5 px-3 py-1 rounded-full">{t}</span>
      ))}
    </div>
  </div>
);

export default ProjectCard;