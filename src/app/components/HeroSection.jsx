"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import MovingText from "react-moving-text";


const HeroSection = () => {
  return (
    <section className="lg:py-4 mt-20 flex flex-col items-left justify-center ">
      <div className="text-white text-2xl sm:text-4xl lg:text-8xl font-extrabold text-center justify-center ">

        <div className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
          {["H", "e", "l", "l", "o", ",", " ", "I", "'", "m"].map((letter, index) => (
            <motion.span
              key={index}
              whileHover={{ rotate: 360 }}
              style={{ display: "inline-block", originX: 0.5, originY: 0.5 }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <br />
        <div className="inline-block">
          {["V", "i", "t", "t", "o", "r", "i", "o"].map((letter, index) => (
            <motion.span
              key={index}
              whileHover={{ rotate: 360 }}
              style={{ display: "inline-block", originX: 0.5, originY: 0.5 }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      
      </div>
    </section>
    
    
  );
};

export default HeroSection;


