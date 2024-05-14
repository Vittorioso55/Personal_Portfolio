"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import MovingText from "react-moving-text";
import { useSpring, animated } from "react-spring";

import NavLink from "./NavLink";



const HeroRenew = () => {
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
            Name: ReNew &nbsp; <br /> Year: &nbsp; 2023 &nbsp; <br /> Scope: &nbsp; Project 
            for "Designing Intelligence Experience" Course &nbsp; 
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 text-left font-light"
        >
          <p>
          Renew is an e-commerce that allows users to sell and buy used and refurbished products and spare parts. Thanks to a points system, it seeks to increase user awareness of the impact of their choices and encourages them to buy products and make decisions in the most sustainable way possible.          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 text-left font-light"
        >
          <p>
          More than 80% of a product’s environmental impact is determined during the production phase.

In December 2023, the European Council and Parliament reached provisional agreement on the Commission’s proposed revision of the Construction Products Regulation. The new rules establish new requirements to make the design and manufacture of construction products more durable, repairable, recyclable and easy to remanufacture.

So, how an E-commerce can help the circular economy?

An E-commerce that sells technology products by giving total importance and priority to used and  efurbished items, so that encouraging their reuse, can help a lot in sharing to the customer awareness and informations regarding the importance of the circular economy.          </p>
        </motion.div>

        <div className="mt-80 text-[#ADB7BE] text-left font-light">
              <p> Co-Designer: &nbsp; Sophie Sprugacci
                , Marco Luraschi, Lorenzo di Lernia
              </p>
              </div>
      </div>
      
    
      {/* Colonna destra per le immagini e il video */}
      <div className="md:w-1/2 md:px-8 md:pl-16 md:overflow-auto h-screen mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/Renew/ReNew.png" className="w-full max-h-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/Renew/Phone.jpg" alt="Description of the image" className="w-full max-h-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/Renew/Logo.png" alt="Description of the image" className="w-full max-h-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mb-2 flex justify-center"
        >
          <img src="/image/Renew/Phone1.jpg" alt="Description of the image" className="w-full max-h-full" />
        </motion.div>
      
        
       
      </div>
    </section>
  );
};

export default HeroRenew;
