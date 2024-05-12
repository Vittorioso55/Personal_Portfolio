"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import MovingText from "react-moving-text";


const HeroSection = () => {
  return (
    <section className="lg:py-4  mt-20 flex flex-col items-left justify-center ">   
    
<motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 10 }}
    
      className="text-white text-2xl sm:text-4xl lg:text-8xl font-extrabold text-center justify-center"
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
        Hello, I'm{" "}
      </span>
      <br />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Vittorio
      </motion.span>
     
    </motion.div>
         
    </section>
  );
};

export default HeroSection;


