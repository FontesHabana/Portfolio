import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = () => {
  return (
    <>
      {/* Cortina que sube al entrar a la página */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 w-full h-screen bg-indigo-600 z-[100] origin-top"
      />
      
      {/* Cuadro decorativo que se expande */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="fixed inset-0 pointer-events-none border-[20px] border-indigo-600/10 z-[90]"
      />
    </>
  );
};

export default PageTransition;