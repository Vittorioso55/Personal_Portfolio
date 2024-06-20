"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroLuna = () => {
  ;
  return (
    <section className="lg:py-2 mb: py-0 flex flex-col md:flex-row items-left">
      {/* Colonna sinistra per il testo */}
      <div className="md:w-1/2 md:px-8 md:pr-16 md:overflow-auto h-screen mt-20">
        <div className="text-white  mb-2 text-sm lg:text-2xl font-light text-left"
        >
          <p>
            Name: Luna &nbsp; <br /> Year: &nbsp; 2024 &nbsp; <br /> Scope: &nbsp; "Multimodal User Experience" Course &nbsp;
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-white text-left font-light mb-40"
        >
          <p>
          Luna Care was born out of the need to improve young women's awareness of cystitis symptoms and the proper use of antibiotics. The device aims to provide daily support through three main modalities: menstrual cycle monitoring, hydration, and antibiotic management. The goal is to educate young women and promote healthy behaviors to prevent and manage urinary infections.        </p>
        </motion.div>
     
      

        <div className="mt-96 text-[#ADB7BE] text-left font-light">
          <p> Co-Designer: &nbsp; Hanna Kastritza, Ieva Kavaluiskate
          </p>
        </div>
      </div>
      {/* Colonna destra per le immagini e il video */}

      <div className="  md:w-1/2 md:px-8 md:pl-16 md:overflow-auto h-screen mt-20  ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-white mb-2 flex justify-center"
      >
        <video controls src="/image/LunaCare/final_video.mp4" className="w-full max-h-full" />
      </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/LunaCare/Luna1.jpg" className="w-full max-h-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/LunaCare/Luna2.jpg" className="w-full max-h-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/LunaCare/Luna3.jpg" className="w-full max-h-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/LunaCare/Luna4.jpg" className="w-full max-h-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/LunaCare/Luna5.jpg" className="w-full max-h-full" />
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/LunaCare/Luna6.jpg" alt="Description of the image" className="w-full max-h-full" />
        </motion.div>
       
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/LunaCare/Luna7.jpg" alt="Description of the image" className="w-full max-h-full" />
        </motion.div>
        
      </div>
    </section>
  );
};

export default HeroLuna;
