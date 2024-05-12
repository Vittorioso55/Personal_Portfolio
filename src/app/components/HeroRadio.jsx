"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import MovingText from "react-moving-text";
import { useSpring, animated } from "react-spring";

import NavLink from "./NavLink";



const HeroStrolling = () => {
  ;
  return (
    
      <section className="lg:py-2 mb: py-0 flex flex-col items-center ">
         
        <div className="md:grid md:grid-cols-1 px-3 xl:px-8 mt-10" >
         
          <br />
    
          <motion.div
            initial={{ opacity: 0, x: 1000, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 2 }}
            className="text-white  mb-2 text sm:text-1xl font-light flex justify-center  " 
          >
            <video 
              autoPlay
              src="/image/Radioimages/VideoRadio.mp4"
              alt="Description of the image"
              className="w-full max-h-full  "
               
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 1000, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 3 }}
            className="text-white text-left mb-2 "
          >
            <p className="text-base lg:text-lg font-light line-height: 0 text-center ">
              Name: RadioCast &nbsp; Year: &nbsp; 2024 &nbsp; Scope: &nbsp; Project for "Digitally Objects for fast prototyping" Course &nbsp; Co-Designer: &nbsp;Vittorio Pace, Kristina Greco  <br />
              
            </p> 
          </motion.div>
          <br />
          <br />
          <br />
          <div className="md:grid md:grid-cols-1 gap-8 items-center px-3 xl:gap-20 sm:py-50 xl:px-16">
            <motion.div
              initial={{ opacity: 0, x: 1000, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 4 }}
              className="text-white mb-2 text-center font-bold text-base lg:text-lg "
             >
            <p className="text-base  lg:text-3xl">
              Concept
            </p>
           </motion.div>
        </div> 
          <p className="text-base lg:text-lg text-white mb-2 text  font-light flex text-center" >
          RadioCast is an interactive podcast player. Listen to what you like with different modes: one allows you to filter the podcast selection, and the other allows you to play a podcast randomly. If you like sports or food for example, a whole selection of podcasts is already planned for you! You can switch modes at any time, in a single movement. Improve your car trips, or improve your sunbathing time at the beach. Travel the world with RadioCast!            </p>

          <br />
          <br />
        </div>
        {/* prime 4 immagini 4x4 */}
        <div className="md:grid md:grid-cols-2 gap-8  xl:gap-7 sm:py-50 xl:px-8">
            <motion.div
            initial={{ opacity: 0, x: 1000, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 5 }}
            
            className="text-white mb-2 text sm:text-2xl font-light flex justify-center" 
          >
            <img
              src="/image/Radioimages/Pic1.png"
              alt="Description of the image"
              className="w-full max-h-full " 
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 1000, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 6 }}
            
            className="text-white mb-2 text sm:text-2xl font-light flex justify-center" 
          >
            <img
              src="/image/Radioimages/Pic2.png"
              alt="Description of the image"
              className="w-full max-h-full " 
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </motion.div>
        </div>
        <br />
    
        <br />
        <div className="md:grid md:grid-cols-1 gap-8 items-center  xl:gap-20 sm:py-50 xl:px-16">
          <motion.div
            initial={{ opacity: 0, x: 1000, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 7 }}
            className="text-white mb-2 text-center font-light text-base lg:text-2xl "
          >
            <p className="text-base  ">
            The project brief, in a few words, was “Re-fabricate an iconic product by upgrading its function to a more contemporary use**”.** The created object had to contain electronic components, such as buttons, potentiometers, simple sensors, etc.

The first step in the development of this project was doing some desk research, and being inspired by existing projects, which led to a generation of several ideas for this project.

The original object chosen is called ***Braun ABR 313 sl***, which is a travel radio alarm clock. It was designed in Germany by Dietrich Lubs. This artist worked with the company Braun for several projects, for example watches, calculators, and different types of alarm clocks. ***Braun ABR 313 sl*** was created in 1989. The object is shown in the following image.
            </p> 
          </motion.div>
        </div>
        <br />
        <div className="md:grid md:grid-cols-2 gap-8  xl:gap-7 sm:py-50 xl:px-8 ">
            <motion.div
            initial={{ opacity: 0, x: 1000, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 8 }}
            
            className="text-white mb-2 text sm:text-2xl font-light flex justify-center " 
            >
              <img
              src="/image/Radioimages/Pic3.png"
              alt="Description of the image"
              className="w-full max-h-full" 
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
             </motion.div>

             <motion.div
            initial={{ opacity: 0, x: 1000, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 3 }}
            className="text-white mb-2 text sm:text-2xl font-light flex justify-center" 
             >
            <img
              src="/image/Radioimages/Pic4.png"
              alt="Description of the image"
              className="w-full max-h-full " 
              style={{ maxWidth: "100%", maxHeight: "100%" }}
               />
              </motion.div>
            </div>
      </section>
  );
};
export default HeroStrolling;
