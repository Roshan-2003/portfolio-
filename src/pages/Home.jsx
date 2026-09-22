import React, { useState, useEffect } from "react"; // 1. Hooks import karein
import Navbar from "../componets/Navbar";
import Hero from "../componets/Hero";
import About from "../componets/AboutSection";
import Skill from "../componets/Skills";
import Experience from "../componets/Experience";
import Project from "../componets/Project";
import Certification from "../componets/Certifications";
import Education from "../componets/Education";
import Footer from "../componets/Footer";
import Loading from "../componets/Loading";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // 5. Conditional Rendering: Agar loading hai toh loader dikhao, warna content
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-slate-950" : "bg-white"}`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <About isDark={isDark} />
      <Skill isDark={isDark} />
      <Experience isDark={isDark} />
      <Project isDark={isDark} />
      <Certification isDark={isDark} />
      <Education isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}

export default Home;
