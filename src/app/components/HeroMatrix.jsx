"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import MovingText from "react-moving-text";
import { useSpring, animated } from "react-spring";

import NavLink from "./NavLink";



const HeroMatrix = () => {
  ;
  return (
    <section className="lg:py-2 mb: py-0 flex flex-col md:flex-row items-left">
      {/* Colonna sinistra per il testo */}
      <div className="md:w-1/2 md:px-8 md:pr-16 md:overflow-auto h-screen">
        <div className="text-white  mb-2 text-sm lg:text-2xl font-light text-left">
          <p>
            Name: Morce Code &nbsp;<br /> Year: &nbsp; 2024 &nbsp;<br /> Scope: &nbsp; Project
            for "Programming Interactive Objects" Course &nbsp;
          </p>

        </div>

        <div className="text-white text-left font-light">
          <p>
            For the "Programming Interactive Object" course, we were assigned the task of designing and implementing a visual representation using an LED matrix. This challenge represented a new experience for our team, as we were introduced to this technology for the first time. After a careful analysis of the potential of the LED matrix, we considered various options for its utilization.

            From an aesthetic standpoint, the LED matrix offers the possibility of displaying a series of luminous points that can be combined in various configurations. After careful consideration of the potential of this device, we decided to use it to represent Morse code.

            Morse code, with its simple yet effective visual representation of alphanumeric characters through sequences of dots and dashes, proved to be the ideal choice for our project. Our goal, since receiving the brief, has been to create a visually stimulating installation while maintaining a conceptual simplicity that allows for easy understanding by observers.

            So we created “MC”, a project that represents an interactive and artistic installation that utilizes a 32x32 LED matrix to bring to light the most famous messages in the history of humanity, expressed through the universal language of Morse code. The main objective is to create an engaging experience where history and technology converge into a captivating visual effect.

            The installation is designed to transform the texts of famous historical messages into sequences of dots and dashes, through the creative use of Morse code. Each message takes on a new life, illuminating the LED matrix with a dynamic show of lights that captures the attention of the spectators."
          </p>

          <div className="mt-40 text-[#ADB7BE] mb-2 text-left font-light">
            <p> Co-Designer: &nbsp; Vittorio Pace
            </p>
          </div>
        </div>
      </div>
      {/* Colonna destra per le immagini */}
      <div className="md:w-1/2 md:px-8 md:pl-16 md:overflow-auto h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white  mb-2 text sm:text-2xl font-light flex justify-center "
        >
          <img
            src="/image/matrice/M1.png"
            alt="Description of the image"
            className="w-full max-h-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img
            src="/image/matrice/M2.png"
            alt="Description of the image"
            className="w-full max-h-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img
            src="/image/matrice/M3.png"
            alt="Description of the image"
            className="w-full max-h-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img
            src="/image/matrice/M4.png"
            alt="Description of the image"
            className="w-full max-h-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white  flex justify-center"
        >
          <img
            src="/image/matrice/M5.png"
            alt="Description of the image"
            className="w-full max-h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};
export default HeroMatrix;