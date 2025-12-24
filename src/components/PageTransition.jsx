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
      
     
    </>
  );
};

export default PageTransition;