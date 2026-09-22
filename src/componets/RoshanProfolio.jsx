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
      <section id="about" className="py-32 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Introduction</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">I design and build things for the web.</h2>
          <p className="text-gray-400 leading-relaxed text-lg mb-6">Hello! I'm Roshan, a developer based in India. I enjoy creating performant products that provide a great user experience.</p>
          <div className="flex gap-6 mt-8">
            <Github className="text-gray-500 hover:text-white cursor-pointer transition" />
            <Linkedin className="text-gray-500 hover:text-white cursor-pointer transition" />
            <Mail className="text-gray-500 hover:text-white cursor-pointer transition" />
          </div>
        </div>
        <div className="relative group">
          <div className="aspect-square bg-[#111] rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden">
            <User size={150} className="text-green-400/20" />
          </div>
        </div>
      </section>

      <Skills />

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="mb-20"><h2 className="text-4xl md:text-6xl font-bold tracking-tight">Selected Works.</h2></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard title="Velogrid Mobility" desc="A premium vehicle rental platform built with React." tech={['React', 'Tailwind']} />
          <ProjectCard title="E-Commerce Engine" desc="High-performance online store." tech={['Next.js', 'Node']} />
          <ProjectCard title="AI Chatbot" desc="Intelligent conversational agent." tech={['Python', 'LangChain']} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-8 text-center bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <MessageSquare size={48} className="text-green-400 mx-auto mb-8 opacity-50" />
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-10">Let's build something great.</h2>
          <a href="mailto:roshan@example.com" className="inline-block bg-green-400 text-black px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition">Get in Touch</a>
        </div>
      </section>

      <footer className="py-10 text-center text-[10px] text-gray-600 tracking-widest uppercase font-bold">© 2024 Roshan Bhagat</footer>
    </div>
  );
};

export default RoshanPortfolio;