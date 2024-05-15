"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import MovingText from "react-moving-text";
import { useSpring, animated } from "react-spring";

import NavLink from "./NavLink";



const HeroEdee = () => {
  ;
  return (
    <section className="lg:py-2 mb: py-0 flex flex-col md:flex-row items-left">
      {/* Colonna sinistra per il testo */}
      <div className="md:w-1/2 md:px-8 md:pr-16 md:overflow-auto h-screen mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white  mb-2 text-sm lg:text-2xl font-light text-left"
        >
          <p>
            Name: Edee &nbsp; <br /> Year: &nbsp; 2024 &nbsp; <br /> Scope: &nbsp; Project 
            for "Designing Intelligent Experience" Course &nbsp; 
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 text-left font-light"
        >
          <p>
          EDEE is a personalized AI-driven companion tailored specifically for teenagers with Autism Spectrum Disorder (ASD). Seamlessly integrated with your smartwatch, EDEE harnesses biometric data to gauge stress levels and deliver discreet, customized support. From managing routines to addressing disruptions in real-time, EDEE offers a comprehensive solution for ASD individuals. Whether it's breaking down tasks or providing insights through data analysis, EDEE empowers teenagers with ASD, enhancing their independence and well-being proactively and reactively.          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 text-left font-light"
        >
          <p>
          **Why Now?**

Twenty years ago, in the U.S., 1 in 150 children received a diagnosis of Autism
Spectrum Disorder (ASD). Since then, this number has seen a significant increase,
with 4 in 150 children now being diagnosed with ASD in the U.S. The prevalence of
autism is increasing, and a fundamental aspect of ASD is its diversity. Each individual
with ASD possesses unique needs, preferences, strengths, and challenges.
With generative AI, we believe we now possess the technology to craft limitless user
journeys, tailoring experiences to meet each user’s distinct needs. This sentiment is
further underscored by the findings of over 13,000 research studies, highlighting a
growing inclination towards AI integration in assistive technologies for autism.          </p>
        </motion.div>
        <div className="mt-60 text-[#ADB7BE] text-left font-light">
              <p> Co-Designer: &nbsp; Ka Yong Lee, Alessandro Plantera, Anna Freri, Davide Vitrano
              </p>
              </div>
      </div>
      {/* Colonna destra per le immagini e il video */}
      <div className="  md:w-1/2 md:px-8 md:pl-16 md:overflow-auto h-screen ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/Edee/EdeeLogo.png" className="w-full max-h-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/Edee/Edee4.png" alt="Description of the image" className="w-full max-h-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/Edee/Edee.png" alt="Description of the image" className="w-full max-h-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/Edee/Edee3.png" alt="Description of the image" className="w-full max-h-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/Edee/Edee5.png" alt="Description of the image" className="w-full max-h-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroEdee;
