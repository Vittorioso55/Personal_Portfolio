"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import MovingText from "react-moving-text";
import { useSpring, animated } from "react-spring";

import NavLink from "./NavLink";



const HeroMatrix= () => {
  ;
  return (
    <section className="lg:py-2 mb: py-0 flex flex-col md:flex-row items-left">
      {/* Colonna sinistra per il testo */}
      <div className="md:w-1/2 md:px-8 md:pr-16 md:overflow-auto mt-20 h-screen">
       
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white text-left mb-2 "
        >
          <p className="text-base lg:text-lg font-light line-height: 0 text-center ">
            Name: Morce-Code &nbsp; Year: &nbsp; 2024 &nbsp; Scope: &nbsp; Project for 'Programming Interactive Objects' course &nbsp; Co-Designer: &nbsp;Vittorio Pace
          </p>
        </motion.div>

        <br />
        <br />
        <br />
        <div className="md:grid md:grid-cols-1 gap-8 items-center px-3 xl:gap-20 sm:py-50 xl:px-16 ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-white mb-2 text-center font-bold text-base lg:text-lg "
          >
            <p className="text-base  lg:text-3xl ">
              Concept
            </p>
          </motion.div>
        </div>
        <div className="md:grid md:grid-cols-1 gap-8 items-center  xl:gap-20 sm:py-50 xl:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-white mb-2 text-center font-light text-base lg:text-2xl "
          >
            <p className="text-base  ">
              Inspired by the Genesis of the Bible and the Original Sin, Genesi-01 is the witness of unknown sins from unknown people. A mysterious box delivered by The Creator to the Sinner 1, intended for traveling and record sins from all over the world.
            </p>
          </motion.div>
        </div>
        <br />
        <br />
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