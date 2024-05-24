"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroStrolling = () => {
  ;
  return (
    <section className="lg:py-2 mb: py-0 flex flex-col md:flex-row items-left">
      {/* Colonna sinistra per il testo */}
      <div className="md:w-1/2 md:px-8 md:pr-16 md:overflow-auto mt-20 h-screen">
        <div className="text-white mb-2 text-sm lg:text-2xl font-light text-left">
          <p>
            Name: Infinite Strolling &nbsp; <br /> Year: &nbsp; 2024 &nbsp;<br />  Scope: &nbsp; Project for "Prototyping Interactive Installation" Course &nbsp;
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-white mb-2 text-left font-light"
        >
          <p>
            Infinite Strolling is an interactive installation that encourages participants to rethink limitless image consumption through mindless scrolling, especially within platforms like TikTok. Developed as the final project for a three-week Prototyping Interactive Installation course within the Master in Interaction Design at SUPSI, the installation features treadmills that regulate the scrolling speed of a TikTok feed displayed on a screen. Viewers have the option to observe passively or actively engage by stepping onto the treadmills to control the scrolling speed, enhancing the interactive experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-white mb-2 text-left font-light"
        >
          <p>
            In recent years, our interaction with photos has drastically changed with the rise of infinite scrolling. Social media platforms have become hubs for endless image consumption, and it is important to consider its impact.

            In response to the brief to design an interactive installation for the month-long EXPOSED Torino Foto Festival, we developed "Infinite Strolling," an engaging and immersive Installation.

            Featuring three screens and treadmills, each treadmill corresponds to a screen displaying a TikTok feed with its speed controlling the scrolling. Initially set to different speeds, viewers can observe the effect without interaction. They're also invited to step on and control the scrolling themselves, enhancing the interactive experience.

            Infinite Strolling is an installation that aims to inspire participants to revisit the image consumption habits especially within social media platforms.        </p>
        </motion.div>

        <div className="mt-60 text-[#ADB7BE] text-left font-light">
          <p> Co-Designer: &nbsp; Vittorio Pace, Ka Young Lee, Kristina Greco
          </p>
        </div>
      </div>
      {/* Colonna destra per le immagini e il video */}
      <div className="md:w-1/2 mt-20  md:px-8 md:pl-16 md:overflow-auto h-screen ">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <video controls src="/image/Strolling/Strolling.mp4" className="w-full max-h-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/Strolling/Strolling5.jpg" alt="Description of the image" className="w-full max-h-full" style={{ maxWidth: "100%", maxHeight: "100%" }} />

        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/Strolling/Strolling2.jpg" alt="Description of the image" className="w-full max-h-full" style={{ maxWidth: "100%", maxHeight: "100%" }} />

        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/Strolling/Strolling3.jpg" alt="Description of the image" className="w-full max-h-full" style={{ maxWidth: "100%", maxHeight: "100%" }} />

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/Strolling/Strolling4.jpg" alt="Description of the image" className="w-full max-h-full" style={{ maxWidth: "100%", maxHeight: "100%" }} />

        </motion.div>
      </div>

    </section>
  );
};

export default HeroStrolling;