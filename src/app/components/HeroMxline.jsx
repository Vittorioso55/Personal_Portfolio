"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroMxline = () => {
  ;
  return (
    <section className="lg:py-2 mb: py-0 flex flex-col md:flex-row items-left">
      {/* Colonna sinistra per il testo */}
      <div className="md:w-1/2 md:px-8 md:pr-16 md:overflow-auto h-screen mt-20">
        <div className="text-white  mb-2 text-sm lg:text-2xl font-light text-left"
        >
          <p>
            Name: Mxline Website &nbsp; <br /> Year: &nbsp; 2024 &nbsp; <br /> 
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-white text-left font-light mb-40"
        >
          <p>
          This project began with the development of a Figma prototype to define the layout, interactions, and user experience before writing the code. The goal was to create a modern, intuitive, and accessible interface, enhancing my projects within a visually cohesive and professional environment.

For the development, I used Next.js, React, and Tailwind CSS, ensuring a scalable, responsive, and high-performance architecture. Thanks to Next.js, the site benefits from optimized rendering and smooth navigation, while Tailwind CSS made style management more efficient and modular.

A project that combines strategic design and advanced development, showcasing my attention to detail and my commitment to creating seamless and high-performing digital experiences.
          </p>
        </motion.div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    
      </div>
      {/* Colonna destra per le immagini e il video */}
      <div className="  md:w-1/2 md:px-8 md:pl-16 md:overflow-auto h-screen mt-10 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/Mxline/mx2.jpg" className="w-full max-h-full mt-10" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/Mxline/mx1.jpg" className="w-full max-h-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/Mxline/Mx0.jpg" className="w-full max-h-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
         </motion.div>
      </div>
    </section>
  );
};

export default HeroMxline;
