"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroGender = () => {
  return (
    <section className="lg:py-2 mb:py-0 flex flex-col md:flex-row items-left">
      {/* Left column for the text */}
      <div className="md:w-1/2 md:px-8 md:pr-16 md:overflow-auto h-screen mt-20">
        <div className="text-white mb-2 text-sm lg:text-2xl font-light text-left">
          <p>
            Name: Voice Leap &nbsp; <br /> Year: &nbsp; 2024 &nbsp; <br /> Scope: &nbsp; Project for "Creative Coding With P5.Js" Course &nbsp;
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-white text-left font-light mb-80"
        >
          <p>
          VoiceLeap explores gender inequality in voice pitch through a gaming experience. User can move the avatar by using their voices. The user’s voice pitch determines the overall experience of the game. 
          </p>
        </motion.div>
        <div className="mt-20 text-white mb-0 text-left font-light">

          <p> Co-Designer: &nbsp; Ka Young Lee
          </p>
        </div>
      
      </div>
      {/* Right column for images and video */}
      <div className="md:w-1/2 md:px-8 md:pl-16 md:overflow-auto h-screen mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <video
            autoPlay
            src="/image/gender/Video.Mov"
            alt="Description of the video"
            className="w-full max-h-full "
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-white mb-2 flex justify-center"
        >
          <img
            src="/image/gender/gender2.png"
            alt="Description of the image"
            className="w-full max-h-full "
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
          className="text-white mb-2 flex justify-center"
        >
          <img
            src="/image/gender/gender3.png"
            alt="Description of the image"
            className="w-full max-h-full "
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="text-white mb-2 flex justify-center"
        >
          <img
            src="/image/gender/gender1.png"
            alt="Description of the image"
            className="w-full max-h-full "
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroGender;
