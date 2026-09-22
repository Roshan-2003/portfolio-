import React from 'react';
// import Navbar from '../components/Navbar';
// import Hero from '../components/Hero';
// import Skills from '../components/Skills';
// import ProjectCard from '../components/ProjectCard';
import { Github, Linkedin, Mail, User, MessageSquare } from 'lucide-react';
import Hero from './Hero';
import Skills from './Skills';

const RoshanPortfolio = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-green-400 selection:text-black">
      <style>{` html { scroll-behavior: smooth; } `}</style>
       
      <Hero />

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div>
          <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Introduction</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 tracking-tight">I design and build things for the web.</h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg mb-6">Hello! I'm Roshan, a developer based in India. I enjoy creating performant products that provide a great user experience.</p>
          <div className="flex gap-6 mt-8">
            <Github className="text-gray-500 hover:text-white cursor-pointer transition" />
            <Linkedin className="text-gray-500 hover:text-white cursor-pointer transition" />
            <Mail className="text-gray-500 hover:text-white cursor-pointer transition" />
          </div>
        </div>
        <div className="relative group mt-6 md:mt-0">
          <div className="aspect-square bg-[#111] rounded-[2rem] sm:rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden">
            <User size={120} className="sm:w-[150px] sm:h-[150px] text-green-400/20" />
          </div>
        </div>
      </section>

      <Skills />

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-16 md:mb-20"><h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Selected Works.</h2></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <ProjectCard title="Velogrid Mobility" desc="A premium vehicle rental platform built with React." tech={['React', 'Tailwind']} />
          <ProjectCard title="E-Commerce Engine" desc="High-performance online store." tech={['Next.js', 'Node']} />
          <ProjectCard title="AI Chatbot" desc="Intelligent conversational agent." tech={['Python', 'LangChain']} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10 text-center bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <MessageSquare size={40} className="sm:w-12 sm:h-12 text-green-400 mx-auto mb-6 sm:mb-8 opacity-50" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 sm:mb-10">Let's build something great.</h2>
          <a href="mailto:bhagatroshan1822@gmail.com" className="inline-block w-full sm:w-auto bg-green-400 text-black px-8 sm:px-12 py-3.5 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg md:text-xl hover:scale-105 transition">Get in Touch</a>
        </div>
      </section>

      <footer className="py-8 sm:py-10 text-center text-[10px] text-gray-600 tracking-widest uppercase font-bold">© 2026 Roshan Bhagat</footer>
    </div>
  );
};

export default RoshanPortfolio;