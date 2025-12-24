import React from 'react';
import { motion } from 'framer-motion';

const BackgroundLines = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* 1. Rejilla de fondo (SVG) */}
      <svg
        className="absolute inset-0 h-full w-full stroke-slate-200 dark:stroke-slate-800 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            x="50%"
            y="-1"
          >
            <path d="M.5 40V.5H40" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)" />
      </svg>

      {/* 2. Rayos de luz animados (Luces flotantes) */}
      <div className="absolute inset-0">
        {/* Rayo Morado */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[-10%] left-[10%] h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px] dark:bg-indigo-500/10"
        />

        {/* Rayo Azul */}
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 120, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[-10%] right-[10%] h-[600px] w-[600px] rounded-full bg-sky-500/20 blur-[120px] dark:bg-sky-500/10"
        />
      </div>
    </div>
  );
};

export default BackgroundLines;