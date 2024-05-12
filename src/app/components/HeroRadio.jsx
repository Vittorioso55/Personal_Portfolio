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
              Name: Infinite Strolling &nbsp; Year: &nbsp; 2024 &nbsp; Scope: &nbsp; Project for "Prototyping Interactive Installation" Course &nbsp; Co-Designer: &nbsp;Vittorio Pace, Ka Young Lee, Kristina Greco  <br />
              
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
          Infinite Strolling is an interactive installation that encourages participants to rethink limitless image consumption through mindless scrolling, especially within platforms like TikTok. Developed as the final project for a three-week Prototyping Interactive Installation course within the Master in Interaction Design at SUPSI, the installation features treadmills that regulate the scrolling speed of a TikTok feed displayed on a screen. Viewers have the option to observe passively or actively engage by stepping onto the treadmills to control the scrolling speed, enhancing the interactive experience.
            </p>

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
            In recent years, our interaction with photos has drastically changed with the rise of infinite scrolling. Social media platforms have become hubs for endless image consumption, and it is important to consider its impact.

In response to the brief to design an interactive installation for the month-long EXPOSED Torino Foto Festival, we developed "Infinite Strolling," an engaging and immersive Installation.

Featuring  three screens and treadmills, each treadmill corresponds to a screen displaying a TikTok feed with its speed controlling the scrolling. Initially set to different speeds, viewers can observe the effect without interaction. They're also invited to step on and control the scrolling themselves, enhancing the interactive experience.

***Infinite Strolling*** is an installation that aims to inspire participants to revisit the image consumption habits especially within social media platforms.
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
