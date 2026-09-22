import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center text-white text-center px-4 overflow-hidden bg-gradient-to-br from-blue-700 via-blue-500 to-orange-400">
      
      {/* Animated Glowing Particles */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-200 rounded-full blur-md"
      />
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-yellow-100 rounded-full blur-lg"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-1/3 left-1/2 w-5 h-5 bg-yellow-200 rounded-full blur-md"
      />

      <div className="relative z-10">
        {/* Top Sub-text: Fade in from top */}
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="uppercase tracking-[0.3em] text-xs md:text-sm font-medium mb-6 opacity-90"
        >
          Welcome to a space where development meets creativity
        </motion.p>
        
        {/* Main Heading: Scale up and Fade in */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1, 
            delay: 0.5,
            type: "spring",
            stiffness: 100 
          }}
          className="text-3xl md:text-6xl font-black mb-8 drop-shadow-1xl leading-tight"
        >
          Welcome To <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
            Roshan's Profile
          </span>
        </motion.h1>
        
        {/* Bottom Tagline: Fade in from bottom */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg md:text-2xl font-light opacity-80 italic mb-10"
        >
          Your profile will be ready in a few seconds.
        </motion.p>
      </div>

      {/* Animated Progress Bar */}
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "12rem" }}
        transition={{ delay: 1.5 }}
        className="h-1 bg-white/20 rounded-full overflow-hidden relative"
      >
        <motion.div 
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ 
            repeat: Infinity, 
            duration: 2, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </motion.div>

    </div>
  );
};

export default Loading;