import React from "react";
import {
  Mail,
  Phone,
  Download,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import resume from "../../public/Roshan__.Resume.pdf";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 py-16 sm:py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000')`, // Replace with your actual image path
        }}
      >
        {/* Dark Blueish/Purple Gradient Overlay */}
        <div className="absolute inset-0 bg-indigo-950/70 backdrop-brightness-75"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-400">Roshan Bhagat</span>
        </h1>

        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-blue-400 mb-6 tracking-wide">
          Mern Stack Developer | React JS Developer| Node.js | Express.js |
          MongoDb
        </h2>

        <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed mb-8 max-w-3xl mx-auto">
          I am Roshan Bhagat, a MERN Stack Developer based in India,
          specializing in MongoDB, Express.js, React.js, and Node.js. I build
          fast, scalable, secure, and SEO-friendly full-stack web applications
          for startups and businesses, with a focus on creating seamless user
          experiences and reliable backend solutions.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm md:text-base font-medium">
          <a
            href="mailto:bhagatroshan1822@gmail.com"
            className="flex items-center gap-2 transition break-all sm:break-normal"
          >
            <Mail
              size={16}
              className="text-indigo-400 shrink-0 sm:w-[18px] sm:h-[18px]"
            />
            bhagatroshan1822@gmail.com
          </a>
          <a
            href="tel:+917383186810"
            className="flex items-center gap-2 transition"
          >
            <Phone
              size={16}
              className="text-indigo-400 shrink-0 sm:w-[18px] sm:h-[18px]"
            />
            +91 7383186810
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg">
            <Download size={20} />

            <a href={resume} download="Roshan_Bhagat_Resume.pdf">
              Download Resume
            </a>
          </button>
          <button className="w-full sm:w-auto border-2 border-gray-300 hover:bg-white/10 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-bold flex items-center justify-center transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
        <ChevronDown size={30} className="text-gray-400" />
      </div> */}

      {/* Floating Chat Button (Bottom Right) */}
      {/* <div className="absolute bottom-8 right-8 z-20">
        <button className="bg-blue-500 p-4 rounded-full text-white shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-white/20">
          <MessageCircle size={32} fill="white" />
        </button>
      </div> */}
    </section>
  );
};

export default Hero;
