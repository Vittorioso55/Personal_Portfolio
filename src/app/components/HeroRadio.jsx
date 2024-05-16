"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroRadio = () => {
  return (
    <section className="lg:py-2 mb: py-0 flex flex-col md:flex-row items-left">
      {/* Colonna sinistra per il testo */}
      <div className="md:w-1/2 mt-20 md:px-8 md:pr-16 md:overflow-auto  h-screen">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="text-white text-left mb-2 "
        >
          <p className=" text-white  mb-2 text-sm lg:text-2xl font-light text-left" >
            Name: RadioCast <br />Year: 2024 <br />Scope: Project for "Digitally Objects for fast prototyping" Course  Co-Designer: Vittorio Pace, Kristina Greco
          </p>
        </motion.div>

        <div className="text-white mb-2 text-left font-light ">
          
          <p >
            RadioCast is an interactive podcast player. Listen to what you like with different modes: one allows you to filter the podcast selection, and the other allows you to play a podcast randomly. If you like sports or food for example, a whole selection of podcasts is already planned for you! You can switch modes at any time, in a single movement. Improve your car trips, or improve your sunbathing time at the beach. Travel the world with RadioCast!
          </p>

      </div>


         
        

      </div>
      
      {/* Colonna destra per le immagini */}
      <div className="md:w-1/2 md:px-8 md:pl-16 md:overflow-auto h-screen mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white  mb-2 text sm:text-1xl font-light flex justify-center "
        >
          <video
            controls
            src="/image/Radioimages/VideoRadio.mp4"
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
            src="/image/Radioimages/Pic1.png"
            alt="Description of the image"
            className="w-full max-h-full"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img
            src="/image/Radioimages/Pic2.png"
            alt="Description of the image"
            className="w-full max-h-full"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img
            src="/image/Radioimages/Pic3.png"
            alt="Description of the image"
            className="w-full max-h-full"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img
            src="/image/Radioimages/Pic4.png"
            alt="Description of the image"
            className="w-full max-h-full"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroRadio;
